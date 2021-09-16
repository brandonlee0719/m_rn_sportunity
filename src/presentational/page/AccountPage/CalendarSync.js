import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput, WebView, Clipboard } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
import I18n from 'react-native-i18n';

import Button from '../../Button/roundedButton';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';
import translations from 'sportunity/src/translations.js';
const { webAppUrl } = require('../../../../conf/constants');
import {backendUrl} from 'sportunity/src/createRelayEnvironment';
import { Header } from '../../Header';

import UpdateCalendarMutation from './UpdateUserCalendarMutation'

class CalendarSync extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            isOrganizedChecked: false,
            isBookedChecked: false,
            isInvitedChecked: false,
            isRefusedChecked: false,
            communityNodeChecked: [],
            displayTutorial: false,
        };
    }

    componentDidMount = () => {
    }

    _handleOpen = () => {
      this.setState({
        isOrganizedChecked: false,
        isBookedChecked: false,
        isInvitedChecked: false,
        isRefusedChecked: false,
        communityNodeChecked: [],
      })
      setTimeout(() => this._setState(), 50);
      this.setState({isModalVisible: true})
    }

    closeModal = () => {
      if (this.state.displayTutorial)
        this.setState({displayTutorial: false})
      else
        this.setState({isModalVisible: false})
    }

    _setState = () => {
      if (this.props.user) {
        if (this.props.user.calendar.preferences.own_synchronized_status && this.props.user.calendar.preferences.own_synchronized_status.length > 0) {
          if (this.props.user.calendar.preferences.own_synchronized_status.indexOf('Organized') >= 0)
            this.setState({isOrganizedChecked: true})
          if (this.props.user.calendar.preferences.own_synchronized_status.indexOf('Booked') >= 0)
            this.setState({isBookedChecked: true}) 
          if (this.props.user.calendar.preferences.own_synchronized_status.indexOf('Invited') >= 0)
            this.setState({isInvitedChecked: true})
          if (this.props.user.calendar.preferences.own_synchronized_status.indexOf('Declined') >= 0)
            this.setState({isRefusedChecked: true})
        }
        
        if (this.props.user.calendar.users && this.props.user.calendar.users.length > 0 && this.props.user.circlesUserIsIn && this.props.user.circlesUserIsIn.edges && this.props.user.circlesUserIsIn.edges.length > 0) {
          let communityNodeChecked = []
          this.props.user.circlesUserIsIn.edges.forEach(edge => {
            if (this.props.user.calendar.users.findIndex(user => user.id === edge.node.owner.id) >= 0) {
              communityNodeChecked.push({id: edge.node.id, checked: true, ownerId: edge.node.owner.id})
            }
            else {
              communityNodeChecked.push({id: edge.node.id, checked: false, ownerId: edge.node.owner.id})
            }
            this.setState({communityNodeChecked})
          })
        }
        else if (this.props.user.circlesUserIsIn && this.props.user.circlesUserIsIn.edges && this.props.user.circlesUserIsIn.edges.length > 0) {
          let communityNodeChecked = []

          this.props.user.circlesUserIsIn.edges.forEach(edge => {
            communityNodeChecked.push({id: edge.node.id, checked: false, ownerId: edge.node.owner.id})
            this.setState({communityNodeChecked})
          })
        }
      }
    }

    handleSavePress = () => {
      let own_synchronized_statusVar = [];
      if (this.state.isOrganizedChecked) own_synchronized_statusVar.push('Organized')
      if (this.state.isBookedChecked) own_synchronized_statusVar.push('Booked')
      if (this.state.isInvitedChecked) own_synchronized_statusVar.push('Invited')
      if (this.state.isRefusedChecked) own_synchronized_statusVar.push('Declined')

      let usersVar = []
      if (this.state.communityNodeChecked.length > 0) {
        this.state.communityNodeChecked.forEach(circle => circle.checked && usersVar.push(circle.ownerId))
      }

      let params = {
          userID: this.props.user.id,
          user: {
            calendar: {
              preferences: {
                own_synchronized_status: own_synchronized_statusVar
              },
              users: usersVar
            }
          }
      } ;

      UpdateCalendarMutation.commit(params,
        () => {
          Toast.show(I18n.t('updateSuccess'));
          this.setState({
              isModalVisible: false
          })
        },
        (error) => {
          Toast.show(I18n.t('updateFailed'));
          console.log(error);
          this.setState({
            isModalVisible: false
          })
        },
      );
    }

    _handleSwitchCommunity = (circleId, e) => {
      let {communityNodeChecked} = this.state ;
      for (var i = 0 ; i < communityNodeChecked.length ; i++) {
        if (communityNodeChecked[i].id === circleId) {
          communityNodeChecked[i].checked = e
        }
      }
      this.setState({communityNodeChecked})
    }

    openTutorial = () => {
      this.setState({displayTutorial: true})
    }

    onCopyCalendarLink = () => {
      Clipboard.setString(backendUrl + '/ics/mycalendar/' + this.props.user.id + '.ics')
    }

    render() {
      const {user} = this.props;

      return <TouchableOpacity
        style={styles.container}
        onPress={this._handleOpen}
      >
      
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.isModalVisible}
        onRequestClose={this.closeModal}
      >
        <View style={styles.modalContainer}>
          <Header 
            onPressFunc={this.closeModal}
            imgSrc={icons.down_arrow}
            text={I18n.t('accountCalendarSyncTitle')}
          />
          {/* <View style={styles.header}>
            <TouchableOpacity
              onPress={this.closeModal}
              style={styles.closeIcon}
            >
              <Image
                source={icons.down_arrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>
              {I18n.t('accountCalendarSyncTitle')}
            </Text>
          </View> */}

          {this.state.displayTutorial 
          ?  <WebView 
              source={{uri: webAppUrl + '/faq-mobile/tutorial/how-to-synchronise-event-with-your-calendar'}}
              
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          : <ScrollView>
              <View style={styles.bloc}>
                <View style={styles.subTitleContainer}>
                  <Text style={styles.subTitle}>
                    {I18n.t('accountCalendarSyncLink')}
                  </Text>
                </View>
                <Text style={styles.explanationText}>
                  {I18n.t('accountCalendarSyncAlert')}
                </Text>
                <TouchableOpacity onPress={this.openTutorial}>
                  <Text style={styles.seeTutorialButton}>
                    {I18n.t('accountCalendarSyncSeeTutorial')}
                  </Text>
                </TouchableOpacity>
                <View style={styles.calendarLinkContainer}>
                  <Text style={styles.calendarLink}>
                    {backendUrl + '/ics/mycalendar/' + user.id+ '.ics'}
                  </Text>
                </View>
                <TouchableOpacity onPress={this.onCopyCalendarLink}>
                  <Text style={styles.seeTutorialButton}>
                    {I18n.t('accountCalendarSyncCopyLink')}
                  </Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.bloc}>
                <View style={styles.subTitleContainer}>
                  <Text style={styles.subTitle}>
                    {I18n.t('accountCalendarSyncMyActivities')}
                  </Text>
                </View>
                <View style={styles.inputRow}>
                  <View style={styles.textRow}>
                      <Text style={styles.labelText}>
                          {I18n.t('accountCalendarSyncOrganizedActivities')}
                      </Text>
                      <Switch
                        style={styles.switchButton}
                        onTintColor={colors.skyBlue}
                        value={this.state.isOrganizedChecked}
                        onValueChange={e => this.setState({isOrganizedChecked: e})}
                        />
                  </View>
                </View>
                <View style={styles.inputRow}>
                  <View style={styles.textRow}>
                      <Text style={styles.labelText}>
                          {I18n.t('accountCalendarSyncBookedActivities')}
                      </Text>
                      <Switch
                        style={styles.switchButton}
                        onTintColor={colors.skyBlue}
                        value={this.state.isBookedChecked}
                        onValueChange={e => this.setState({isBookedChecked: e})}
                        />
                  </View>
                </View>
                <View style={styles.inputRow}>
                  <View style={styles.textRow}>
                      <Text style={styles.labelText}>
                          {I18n.t('accountCalendarSyncInvitedActivities')}
                      </Text>
                      <Switch
                        style={styles.switchButton}
                        onTintColor={colors.skyBlue}
                        value={this.state.isInvitedChecked}
                        onValueChange={e => this.setState({isInvitedChecked: e})}
                        />
                  </View>
                </View>
                <View style={styles.inputRow}>
                  <View style={styles.textRow}>
                      <Text style={styles.labelText}>
                          {I18n.t('accountCalendarSyncDeclinedActivities')}
                      </Text>
                      <Switch
                        style={styles.switchButton}
                        onTintColor={colors.skyBlue}
                        value={this.state.isRefusedChecked}
                        onValueChange={e => this.setState({isRefusedChecked: e})}
                        />
                  </View>
                </View>
              </View>

              {user && user.circlesUserIsIn && user.circlesUserIsIn.edges && user.circlesUserIsIn.edges.length > 0 && 
                <View style={styles.bloc}>
                  <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>
                      {I18n.t('accountCalendarSyncMyCommunity')}
                    </Text>
                  </View>
                  {user.circlesUserIsIn.edges.filter(edge => edge.node.owner.id !== user.id).map((edge, index) => (
                    <View style={styles.inputRow} key={index}>
                      <View style={styles.textRow}>
                        <View style={styles.photoContainer}>
                          {edge.node.owner.avatar
                          ? <Image source={{ uri: edge.node.owner.avatar,  static: false }} style={styles.thumbProfile} />
                          : <Image source={images.profile_photo} style={styles.thumbProfile} />
                          }
                        </View>
                        <Text style={styles.labelText}>
                          {edge.node.owner.pseudo}
                        </Text>
                        <Switch
                          style={styles.switchButton}
                          onTintColor={colors.skyBlue}
                          value={this.state.communityNodeChecked.find(circle => circle.id === edge.node.id) && this.state.communityNodeChecked.find(circle => circle.id === edge.node.id).checked}
                          onValueChange={(e) => this._handleSwitchCommunity(edge.node.id, e)}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              }

              <View style={{flex: 1, width: '100%'}}>
                <Button
                  onPress={this.handleSavePress}>
                  {I18n.t('accountSaveButton')}
                </Button>
              </View>
              </ScrollView>
          }
          </View>
      </Modal>
      

        <View style={styles.subContainer}>
          <Text style={styles.text}>
            {I18n.t('accountCalendarSync')}
          </Text>
        </View>
        <Image
          style={styles.icon}
          source={icons.right_arrow_blue}
        />
      </TouchableOpacity>
    }
}

export default createFragmentContainer(CalendarSync, {
    user: graphql`
        fragment CalendarSync_user on User {
            id
            circlesUserIsIn (first: 100) {
              edges {
                node {
                  id
                  owner {
                    id
                    pseudo
                    avatar
                  }
                }
              }
            }
            calendar {
              users {
                id
                pseudo
              }
              preferences {
                own_synchronized_status
              }
            }
            profileType
        }
    `
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  bloc: {
    marginTop: 15,
    paddingHorizontal: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin
  },
  subTitleContainer: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  subTitle: {
    fontSize: 14
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 5,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputRow: {
    flexDirection: 'column',
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin /2
  },
  photoContainer: {
    shadowRadius: 20,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    marginRight: metrics.baseMargin,
    backgroundColor: 'transparent'
  },
  thumbProfile: {
      width: metrics.images.medium,
      height: metrics.images.medium,
      borderRadius: metrics.images.mediumRadius,
  },
  subTitleText: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: 13, 
    flex: 4
  },
  switchButton: {
    flex: 1
  },
  explanationText: {
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin,
    fontStyle: 'italic',
    color: colors.red
  },
  calendarLinkContainer: {
    marginTop: metrics.baseMargin,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    padding: 5
  },
  calendarLink: {
    fontSize: fonts.size.small,
  },
  seeTutorialButton: {
    color: colors.blue,
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin,
    textAlign: 'center'
  }
});

I18n.fallbacks = true
I18n.translations = translations;

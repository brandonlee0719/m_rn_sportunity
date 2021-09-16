import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
import Button from '../../Button/roundedButton';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import ModalPicker from 'react-native-modal-selector';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../Header';

import UpdateUserMutation from './UpdateUserMutation'

class MyPreferences extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            isSubAccountActivated: false,
            homePagePreference: 'FIND'
        };
    }

    componentDidMount = () => {
      if (this.props.user.userPreferences)
        this.setState({
          isSubAccountActivated: this.props.user.userPreferences.areSubAccountsActivated,
          homePagePreference: this.props.user.homePagePreference
        })

      if (this.props.forceOpen) {
        this._handleOpen();
      }
    }

    componentWillReceiveProps = (nextProps) => {
      if (nextProps.user && nextProps.user.userPreferences && this.props.user.userPreferences.areSubAccountsActivated !== nextProps.user.userPreferences.areSubAccountsActivated) {
        this.setState({
          isSubAccountActivated: nextProps.user.userPreferences.areSubAccountsActivated,
          homePagePreference: nextProps.user.homePagePreference
        })
      }
    }

    componentDidUpdate(prevProps) {
      if (prevProps.forceOpen !== this.props.forceOpen && this.props.forceOpen) {
        this._handleOpen();
      }
    }

    handleSubAccountActivatedChange = () => {
      this.setState({
          isSubAccountActivated: !this.state.isSubAccountActivated
      })
    }

    handleHomePageChange = (e) => {
      this.setState({
        homePagePreference: e.key
      })
    }

    _handleOpen = () => {
      this.setState({isModalVisible: true})
    }

    handleSavePress = () => {
      if ((this.props.user.userPreferences && this.state.isSubAccountActivated !== this.props.user.userPreferences.areSubAccountsActivated) || this.props.user.homePagePreference !== this.state.homePagePreference) {
        let params = {
          userID: this.props.user.id,
          user: {
            userPreferences: {
              areSubAccountsActivated: this.state.isSubAccountActivated
            },
            homePagePreference: this.state.homePagePreference
          },
        } ;
      
        UpdateUserMutation.commit(params,
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
          }
        );
      }
    }

    render() {
      const pagePreferenceList = [{key: 'FIND', label: I18n.t('sportunitiesTabFind')},{key: 'ORGANIZED', label: I18n.t('sportunitiesTabMySportunities')}];

      return <TouchableOpacity
        style={styles.container}
        onPress={this._handleOpen}
      >
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isModalVisible}
          onRequestClose={() => this.setState({isModalVisible: false})}
        >
          <View style={styles.modalContainer}>
            <Header 
              onPressFunc={() => this.setState({isModalVisible: false})}
              imgSrc={icons.down_arrow}
              text={I18n.t('accountMyPreferences')}
            />
            {/* <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({isModalVisible: false})}
                style={styles.closeIcon}
              >
                <Image
                  source={icons.down_arrow}
                />
              </TouchableOpacity>
              <Text style={styles.title}>
                {I18n.t('accountMyPreferences')}
              </Text>
            </View> */}
            <ScrollView>
              <View style={styles.inputRow}>
                <View style={styles.textRow}>
                    <Text style={styles.labelText}>
                        {this.props.user.profileType === 'PERSON'
                        ? I18n.t('accountPreferencesActivateSubAccountsChildren')
                        : I18n.t('accountPreferencesActivateSubAccountsTeams')
                        }
                    </Text>
                    <Switch
                      style={styles.switchButton}
                      onTintColor={colors.skyBlue}
                      value={this.state.isSubAccountActivated}
                      onValueChange={this.handleSubAccountActivatedChange}
                      />
                </View>
                <Text style={styles.explanationText}>
                {this.props.user.profileType === 'PERSON'
                ? I18n.t('accountPreferencesActivateSubAccountsChildren_explanation')
                : I18n.t('accountPreferencesActivateSubAccountsTeams_explanation')
                }
                </Text>
              </View>
              <View style={styles.inputRow}>
                <View style={styles.textRow}>
                    <Text style={styles.labelText}>
                        {I18n.t('accountPreferencesHomePage')}
                    </Text>
                    <ModalPicker
                      data={pagePreferenceList}
                      initValue={pagePreferenceList.find(item => item.key === this.state.homePagePreference).label}
                      onChange={this.handleHomePageChange}
                      cancelText={I18n.t('cancel')}
                    />
                </View>
                <Text style={styles.explanationText}>
                {I18n.t('accountPreferencesHomePageExplanation')}
                </Text>
              </View>
              <View style={{flex: 1, width: '100%'}}>
                <Button
                  onPress={this.handleSavePress}>
                  {I18n.t('accountSaveButton')}
                </Button>
              </View>
              </ScrollView>
            </View>
        </Modal>

        <View style={styles.subContainer}>
          <Text style={styles.text}>
            {I18n.t('accountMyPreferences')}
          </Text>
        </View>
        <Image
          style={styles.icon}
          source={icons.right_arrow_blue}
        />
      </TouchableOpacity>
    }
}

export default createFragmentContainer(MyPreferences, {
    user: graphql`
      fragment MyPreferences_user on User {
          id
          userPreferences {
              areSubAccountsActivated
          }
          homePagePreference
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
    marginBottom: metrics.baseMargin
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin /2
  },
  subTitleText: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    flex: 4
  },
  switchButton: {
    flex: 1
  },
  explanationText: {
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin,
    fontStyle: 'italic'
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: metrics.doubleBaseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  formInputLabel: {
    color: colors.darkBlue,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  input: {
    color: colors.darkGrey,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 40,
    maxHeight: 40,
  }
});

I18n.fallbacks = true
I18n.translations = translations;

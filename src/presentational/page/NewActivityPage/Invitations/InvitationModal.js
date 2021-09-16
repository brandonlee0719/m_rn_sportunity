// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, ScrollView, Image, StyleSheet, Picker } from 'react-native';
import {cloneDeep} from 'lodash';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import Button from '../../../Button/roundedButton';
import Input, {inputStyles} from '../../../Input';
import {ListBlock, ListBlockItem} from './List';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';

import Invitee from './Invitee';
import InvitedCircle from './InvitedCircle';
import AddUserModal from 'sportunity/src/presentational/AddUser';
import CirclesInvitationModal from './CirclesInvitationModal.js';
import NotificationPreferences from './NotificationPreferences/NotificationPreferences';
import CirclesPage from '../../CirclesPage/CirclesPageView';
import SearchModule from '../../SearchModule'
import FormListItem from '../../../UI/FormListItem';

class InvitationsModal extends React.Component {
  state = {
    pseudo: '',
    circle: 0, // 0 circle is dropdown's default label
    error: '',
    friendsInvitationModalVisible: false,
    circlesInvitationModalVisible: false,
    inviteeListIsOpen: false, 
    invitedCircleListIsOpen: false,
    selectedCircles: [],
    defaultCircleFilters:[]
  };

  componentDidMount() {
    this.setState({
      defaultCircleFilters: [
        {
          name: I18n.t('myCircles'), 
          filter: {
            circleTypes: ['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES']
          },
          isEditable: false,
        }, {
          name: I18n.t('publicCircles'), 
          filter: {
            circleTypes: ['CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES'],
            sport: [{sportID: this.props.sportunitySport.sport}]
          },
          isEditable: true,
        }]
    })
    this.openCircleInvitationModal()
  }

  onChangeSportFilter = (sport) => {
    console.log("onChangeSportFilter", sport);
  }
  onRemoveSportFilter = () => {
    console.log("onRemoveSportFilter");
  }

  onChangeLocationFilter = (location) => {
    console.log("onChangeLocationFilter" , location)
  }
  onRemoveLocationFilter = () => {
    console.log("onRemoveLocationFilter");
  }
 
  onError = (error) => {
      Toast.show(error);
  }

  openCircleInvitationModal = () => {
    if (this.props.isLoggedIn) {
      if ((this.props.circles && this.props.circles.length > 0) || (this.props.circlesFromClub && this.props.circlesFromClub.length > 0) || (this.props.circlesCurrentUserIsIn && this.props.circlesCurrentUserIsIn.length > 0)) {
        if (this.props.invitedCircles && this.props.invitedCircles.length > 0) {
          this.setState({
            selectedCircles: this.props.invitedCircles.map(i => i.circle)
          })
        }
        this.setState({ circlesInvitationModalVisible:true });
      }
      else 
        Toast.show(I18n.t('pleaseCreateCircle'))
    }
    else 
      Toast.show(I18n.t('sportunityToastLogin'))
  }

  addInvitee = (user) => {
    this.props.addInvitee(user, () => this.setState({ friendsInvitationModalVisible: false}))
  }

  selectCircle = (circle) => {
    let selectedCircles = cloneDeep(this.state.selectedCircles) ;
    let index = selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) ;
    if (index >= 0) {
      selectedCircles.splice(index, 1);
    }
    else {
      selectedCircles.push(circle);
    }
    this.setState({
      selectedCircles
    })
  }

  removeCircleInvitee = (circle)=>{
    let selectedCircles = cloneDeep(this.state.selectedCircles) ;
    let index = selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) ;
    if (index >= 0) {
      selectedCircles.splice(index, 1);
    }
    this.setState({
      selectedCircles
    })

    this.props.deleteCircleInviteeAndPrice(circle);
  }
  closeCircleList = () => {
    this.props.closeCirclesModal();
    this.props.addCircleInvitee(this.state.selectedCircles)
  }
  closeFriendsModal = ()=>{
    this.props.closeFriendsModal();
  }


  render() {
    const { show, onClose, addInvitee, addCircleInvitee, invitees=[], invitedCircles, circles, circlesCurrentUserIsIn, circlesFromClub, self, viewer, sportunitySport } = this.props;
    const numInvitations = invitees ? invitees.length : 0;
    const numCircleInvitations = invitedCircles ? invitedCircles.length : 0 ;

    return (
      <View>

        {((circles && circles.length > 0) || (circlesCurrentUserIsIn && circlesCurrentUserIsIn.length > 0) || (circlesFromClub && circlesFromClub.length > 0)) &&
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.props.circlesInvitationModalVisible}
            onRequestClose={this.closeCircleList}
          >
            <SearchModule
              viewer={viewer}
              from={"new-sportunity-invitations"}
              selectCircle={this.selectCircle}
              selectedCircles={this.state.selectedCircles}
              sportunitySport={sportunitySport}
              inviteToActivity
              onNextButton={this.closeCircleList}
              onClose={this.closeCircleList}
              openOnTab={0}
              hideTabs={["Activities", "People"]}
              circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES']}
              queryOnOpen={true}
              defaultCircleFilters={this.state.defaultCircleFilters}
              onChangeSportFilter={this.onChangeSportFilter}
              onRemoveSportFilter={this.onRemoveSportFilter}
              onChangeLocationFilter={this.onChangeLocationFilter}
              onRemoveLocationFilter={this.onRemoveLocationFilter}
            />
          </Modal>  
        }
        
        {this.props.friendsInvitationModalVisible && 
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.props.friendsInvitationModalVisible}
            onRequestClose={() => this.closeFriendsModal()}
          >
            <SearchModule
              viewer={viewer}
              from={"new-sportunity-invitations"}
              sportunitySport={sportunitySport}
              inviteToActivity
              onNextButton={() => this.closeFriendsModal()}
              onClose={() => this.closeFriendsModal()}
              openOnTab={"People"}
              hideTabs={["Activities"]}
              selectUser={this.addInvitee}
              showMembersOnSelectCircle={true}
              userType={'PERSON'}
              types={['ADULTS', 'CHILDREN']}
              circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES']}
              queryOnOpen={true}
            />
          </Modal>
        }

        <ScrollView style={styles.container}>

          
          {invitedCircles && 
            invitedCircles.length > 0 && 
            invitedCircles.filter((item, index) => this.state.invitedCircleListIsOpen || index < 2)
              .map((circle, index) => 
                <InvitedCircle
                  key={index}
                  onRemove={this.removeCircleInvitee}
                  viewer={this.props.viewer}
                  index={index}
                  circlePrice={circle.price}
                  circle={circle.circle}
                  participantByDefault={circle.participantByDefault}
                  onError={this.onError}
                  updateCircleInviteePrice={this.props.updateCircleInviteePrice}
                  updateCircleAutomaticallyParticipant={this.props.updateCircleAutomaticallyParticipant}
                  selectCircle={this.selectCircle}
                />
            )}

            {invitedCircles && invitedCircles.length > 2 && (
              this.state.invitedCircleListIsOpen 
              ?
              <TouchableOpacity
                  style={styles.seeMoreOrLessButtonContainer}
                  onPress={()=>this.setState({invitedCircleListIsOpen: false})}
                >
                  <Text style={styles.smallText}>
                    {I18n.t('seeLess')}
                  </Text>
                </TouchableOpacity>
              :
              <TouchableOpacity
                  style={styles.seeMoreOrLessButtonContainer}
                  onPress={()=>this.setState({invitedCircleListIsOpen: true})}
                >
                  <Text style={styles.smallText}>
                    {I18n.t('seeMore')}
                  </Text>
                </TouchableOpacity>
            )}



            <View style={{ height: 20 }} />

           
            {invitees && invitees.length > 0 && invitees.filter((item, index) => this.state.inviteeListIsOpen || index < 2).map((item) =>
              <ListBlockItem style={{paddingHorizontal:0}} key={item.id}>
                <Invitee
                  isCircleInvitee={false}
                  viewer={this.props.viewer}
                  user={item}
                  requestedPseudo={item.pseudo}
                  delete={this.props.deleteInvitee}
                  onError={this.onError}
                />
              </ListBlockItem>
            )}

            {invitees && invitees.length > 2 && (
              this.state.inviteeListIsOpen 
              ?
              <TouchableOpacity
                  style={styles.seeMoreOrLessButtonContainer}
                  onPress={()=>this.setState({inviteeListIsOpen: false})}
                >
                  <Text style={styles.smallText}>
                    {I18n.t('seeLess')}
                  </Text>
                </TouchableOpacity>
              :
              <TouchableOpacity
                  style={styles.seeMoreOrLessButtonContainer}
                  onPress={()=>this.setState({inviteeListIsOpen: true})}
                >
                  <Text style={styles.smallText}>
                    {I18n.t('seeMore')}
                  </Text>
                </TouchableOpacity>
            )}
            
          </ScrollView>       

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: metrics.doubleBaseMargin
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreOrLessButtonContainer: {
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
    //marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  smallText: {
    color: colors.charcoal
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 67,
    paddingTop: 11,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  error: {
    textAlign: 'left',
    marginLeft: metrics.doubleBaseMargin,
    marginRight: metrics.doubleBaseMargin,
    color: colors.error,
  },
  picker: StyleSheet.flatten([inputStyles.inputContainer, {
    color: colors.skyBlue
  }]),
  circular: {
    height: metrics.icons.small,
    width: metrics.icons.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.icons.small,
    backgroundColor: colors.lightGrey,
    marginRight: metrics.baseMargin,
  },
  icon: {
    tintColor: colors.grey
  },
  charSymbol: {
    color: colors.charcoal,
    fontSize: fonts.style.h6.fontSize, 
    fontFamily: fonts.style.h6.fontFamily,
    fontWeight: 'bold',
    lineHeight: 19,
    backgroundColor: 'transparent'
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

InvitationsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  addInvitee: PropTypes.func.isRequired,
  addCircleInvitee: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  circles: PropTypes.array.isRequired,
};

const stateToProps = (state) => ({
  invitees: state.sportunityNewActivity.invitees,
  invitedCirclesRed: state.sportunityNewActivity.invitedCircles,
  invitedCirclesAndPricesRed: state.sportunityNewActivity.invitedCirclesAndPrices,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
});

const mapDispatchToProps = {
}

const ReduxContainer = connect(
  stateToProps,
  mapDispatchToProps
)(InvitationsModal);


export default createFragmentContainer(ReduxContainer, {
  viewer: graphql`
    fragment InvitationModal_viewer on Viewer {
      ...Invitee_viewer
      ...InvitedCircle_viewer
      ...CirclesPageView_viewer
      ...SearchModule_viewer
      ...AddUser_viewer
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

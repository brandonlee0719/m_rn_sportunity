import React, { Component, Fragment } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import {
  graphql,
  createRefetchContainer,
} from 'react-relay';
import I18n from 'react-native-i18n';
import { isEqual} from 'lodash';

import { updateLoadingStatus } from '../../../../action/sportunityAction';
import { updateFrom } from '../../../../action/profileActions';
import { colors } from '../../../../theme';
import FormListItem from '../../../UI/FormListItem';
import Heading from '../../../UI/Heading';
import Modal from '../../../Modal';
import StatisticFillingModal from '../StatisticFillingModal';

import ButtonSportunity from '../ButtonSportunity';
import ButtonUpdateSportunity from '../ButtonUpdateSportunity';
import ButtonReOrganizeSportunity from '../ButtonReOrganizeSportunity';
import ButtonFeedback from '../Feedback/ButtonFeedback';
import ButtonRefuseInvitation from '../ButtonRefuseInvitation';

import RefuseInvitationMutation from '../mutation/RefuseInvitationMutation.js';
import SecondaryOrganizerRefuseRole from '../mutation/SecondaryOrganizerRefuseRole.js';
import UpdateCalendarMutation from '../UpdateSportunityCalendarMutation';
import OrganizerPicksSurveyDateMutation from '../mutation/OrganizerPicksSurveyDate';

class EventDetailMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isParticipant : false,
      isOnWaitingList: false,
      cancel: false,
      isOrganized: false,
      isSecondaryOrganizer: false,
      isPotentialSecondaryOrganizer: false,
      potentialSecondaryOrganizer: null, 
      isInvited: false,
      wasInvited: false,
      isAuthorizedAdmin: false,
      isPotentialOpponent: false,
      isMapVisible: false,
      displayStatFillingTab: false,
      displayCalendarSynchronizationTutorial: false,
      isLoading: false,
      showJoinCommunity: false,
      mainCommunityCircle: null,
      relaunchIsDone: false,
      displayAuthorizedAccountsPicker: false,
      authorizedAccounts: []
    }
  }

  async componentDidMount() {
    const {sportunity, user} = this.props;

    if(user){
      const isOrganized = !!sportunity.organizers.find((item) => item && item.organizer && item.organizer.id === user.id && item.isAdmin)
      const isSecondaryOrganizer = !!sportunity.organizers.find((item) => item && item.organizer && item.organizer.id === user.id && !item.isAdmin)
      const isPotentialSecondaryOrganizer = sportunity.status.indexOf("Asked-CoOrganization") >= 0;
      if (isPotentialSecondaryOrganizer) {
        let askedRoles = [];
        sportunity.pendingOrganizers.forEach(pendingOrganizer => {
          if (pendingOrganizer.circles.edges.findIndex(edge => edge.node.members.findIndex(member => member.id === user.id) >= 0) >= 0) {
              askedRoles.push({
                  id: pendingOrganizer.id,
                  name: pendingOrganizer.secondaryOrganizerType 
                    ? pendingOrganizer.secondaryOrganizerType.name[this.props.language.toUpperCase()]
                    : pendingOrganizer.customSecondaryOrganizerType
              })
          }
          if (askedRoles.length > 0) {
            this.setState({
              potentialSecondaryOrganizer: askedRoles[0]
            })
          }
      })
      }
      let isParticipant = !!sportunity.participants.find((item) => item && item.id === user.id);
      let isInvited = !!sportunity.invited.find(item => item && item.user && item.user.id === user.id && item.answer === "WAITING")
      let wasInvited = !!sportunity.invited.find(item => item && item.user && item.user.id === user.id)
      const cancel = sportunity.price && sportunity.price.cents > 0;
      let isOnWaitingList = !!sportunity.waiting.find((item) => item && item.id === user.id)
      let isOnWillingList = !!sportunity.willing.find((item) => item && item.id === user.id)
      let isPotentialOpponent = user.profileType === 'ORGANIZATION' && !isOrganized && !isSecondaryOrganizer && !isPotentialSecondaryOrganizer &&
      sportunity.game_information && sportunity.game_information.opponent && 
        (sportunity.game_information.opponent.lookingForAnOpponent || 
            (sportunity.game_information.opponent.invitedOpponents && sportunity.game_information.opponent.invitedOpponents.edges && sportunity.game_information.opponent.invitedOpponents.edges.length > 0 && !!sportunity.game_information.opponent.invitedOpponents.edges[0].node.members.find(member => member.id === user.id))
          ) && 
        !sportunity.game_information.opponent.organizer && !sportunity.game_information.opponent.organizerPseudo ;

      if (isParticipant || isOnWaitingList)
        isInvited = false;

      this.setState({ isOrganized, isParticipant, cancel, isInvited, wasInvited, isOnWaitingList, isPotentialOpponent, isSecondaryOrganizer, isPotentialSecondaryOrganizer });

      if (!isOrganized && !isParticipant && !wasInvited && !isOnWaitingList && !isOnWillingList && !isPotentialOpponent && !isSecondaryOrganizer && !isPotentialSecondaryOrganizer) {
        let superToken = await AsyncStorage.getItem('superToken');
        let userToken = await AsyncStorage.getItem('token')

      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        superToken,
        userToken,
        queryAuthorizedAccounts: true,
        querySuperMe: true,
        queryRelaunch: false
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null,
        () => this.waitForDataSuperMe(superToken),
        {force: false}
      );
      }
    }

    if (sportunity && sportunity.kind === 'PUBLIC' && sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.length > 0) {
      sportunity.invited_circles.edges.forEach(edge => {
          if (edge.node.mode === 'PUBLIC' && (!user || (edge.node.owner.id !== user.id && edge.node.members.findIndex(member => member.id === user.id) < 0))) {
              this.setState({
                  showJoinCommunity: true,
                  mainCommunityCircle: edge.node
              })
          }
      })
    }

    this.shouldDisplayCalendarSynchronizationTutorial()
  }

  componentWillReceiveProps = (nextProps) => {
    if (!isEqual(this.props.sportunity, nextProps.sportunity)) {
      const { sportunity, user } = nextProps;
      if(user){
        const isOrganized = !!sportunity.organizers.find((item) => item && item.organizer && item.organizer.id === user.id && item.isAdmin)
        const isSecondaryOrganizer = !!sportunity.organizers.find((item) => item && item.organizer && item.organizer.id === user.id && !item.isAdmin)
        const isPotentialSecondaryOrganizer = sportunity.status.indexOf("Asked-CoOrganization") >= 0;
        let isParticipant = !!sportunity.participants.find((item) => item && item.id === user.id);
        let isInvited = !!sportunity.invited.find(item => item && item.user && item.user.id === user.id && item.answer === "WAITING")
        let wasInvited = !!sportunity.invited.find(item => item && item.user && item.user.id === user.id)
        const cancel = sportunity.price && sportunity.price.cents > 0;
        let isOnWaitingList = sportunity.waiting && !!sportunity.waiting.find((item) => item && item.id === user.id)
        
        let isPotentialOpponent = user.profileType === 'ORGANIZATION' && 
          sportunity.game_information && sportunity.game_information.opponent && 
            (sportunity.game_information.opponent.lookingForAnOpponent || 
                (sportunity.game_information.opponent.invitedOpponents && sportunity.game_information.opponent.invitedOpponents.edges && sportunity.game_information.opponent.invitedOpponents.edges.length > 0 && !!sportunity.game_information.opponent.invitedOpponents.edges[0].node.members.find(member => member.id === user.id))
              ) && 
            !sportunity.game_information.opponent.organizer && !sportunity.game_information.opponent.organizerPseudo ;

        if (isParticipant || isOnWaitingList)
          isInvited = false;

        this.setState({ isOrganized, isParticipant, cancel, isInvited, wasInvited, isOnWaitingList, isPotentialOpponent, isSecondaryOrganizer, isPotentialSecondaryOrganizer });
      }
    }
  }

  waitForDataSuperMe = (superToken) => {
    if (this.props.viewer && this.props.viewer.superMe && this.props.viewer.superMe.id && this.props.viewer.authorizedAccounts && this.props.viewer.authorizedAccounts.id) {
      let accounts = []

      if (this.props.viewer.superMe.subAccounts && this.props.viewer.superMe.subAccounts.length > 0)
        this.props.viewer.superMe.subAccounts.forEach(subAccount => {
          accounts.push(subAccount)
        })

      if (this.props.viewer.authorizedAccounts.accounts && this.props.viewer.authorizedAccounts.accounts.length > 0)
        this.props.viewer.authorizedAccounts.accounts.forEach(account => {
          if (accounts.findIndex(item => item.id === account.id) < 0)
            accounts.push(account)
        })

      if (accounts.findIndex(item => item.id === this.props.viewer.superMe.id) < 0)
        accounts.push({
          id: this.props.viewer.superMe.id,
          pseudo: this.props.viewer.superMe.pseudo,
          avatar: this.props.viewer.superMe.avatar,
          token:  superToken
        })

      if (accounts.length > 1) {
        let mainOrganizer ;
        this.props.sportunity.organizers.forEach(organizer => {
          if (organizer.isAdmin)
            mainOrganizer = organizer.organizer
        })

        let organizerAccountIndex = accounts.findIndex(account => account.id === mainOrganizer.id) ;

        if (organizerAccountIndex >= 0) {
          this.setState({
            isAuthorizedAdmin: true,
          })
        }
        else if (this.props.sportunity.kind === "PRIVATE") {
          accounts = accounts
            .filter(account => 
              this.props.sportunity.participants.findIndex(participant => participant.id === account.id) >= 0
              || this.props.sportunity.waiting.findIndex(waiting => waiting.id === account.id) >= 0
              || this.props.sportunity.willing.findIndex(willing => willing.id === account.id) >= 0
              || this.props.sportunity.canceling.findIndex(canceling => canceling.canceling_user.id === account.id) >= 0
              || this.props.sportunity.invited.findIndex(invited => invited.user.id === account.id) >= 0
              || this.props.sportunity.organizers.findIndex(organizer => organizer.organizer.id === account.id) >= 0
            )
          if (accounts.length > 0) {
            this.setState({
              displayAuthorizedAccountsPicker: true,
              authorizedAccounts: accounts
            })
          }
        }
        
      }
    }
    else {
      setTimeout(() => this.waitForDataSuperMe(superToken), 100)
    }
  }

  _handleSwitchAccountAndOpenUrl = (token) => {
    if (token) {
      this.props.navigation.goBack()
      setTimeout(() => {
        this.props.updateFrom('event/'+this.props.sportunity.id)
        this.props.updateToken(token)
        this.setState({
          displayAuthorizedAccountsPicker: false
        })
      }, 500)
    }
  }

  shouldDisplayCalendarSynchronizationTutorial = async () => {
    let neverShowCalendarSynchronizationAgain = false ;
    if (!this.props.viewer || !this.props.user) return ;

    try {
      neverShowCalendarSynchronizationAgain = await AsyncStorage.getItem('neverShowCalendarSynchronizationAgain');
    }
    catch (err) {
      console.log(err);
    }
    if (typeof neverShowCalendarSynchronizationAgain !== 'undefined' && neverShowCalendarSynchronizationAgain !== null) {
    }
    else {
      setTimeout(() => {
        this.setState({displayCalendarSynchronizationTutorial: true})
      }, 400);
    }
  }

  neverDisplayCalendarSynchronizationTutorialAgain = async () => {
    try {
      neverShowCalendarSynchronizationAgain = await AsyncStorage.setItem('neverShowCalendarSynchronizationAgain', JSON.stringify(true));
    }
    catch (err) {
      console.log(err);
    }
  }

  closeTutorial = neverDisplayTutorialAgain => {
    this.setState({displayCalendarSynchronizationTutorial: false})
    if (neverDisplayTutorialAgain)
      this.neverDisplayCalendarSynchronizationTutorialAgain()
  }

  goToChat = () => {
    if(!this.props.user) {
      Toast.show(I18n.t('sportunityToastLoginChat'));
    } else {
      const event = this.props.sportunity;
      if(this.state.isParticipant||this.state.isOrganized)
         this.props.navigation.navigate('chatdetail', { id: this.props.chat.id, title: event.title, hideNavBar:false });
      else{
        const admin = event.organizers.find((item) => item.isAdmin);
        if(admin && admin.organizer && admin.organizer.id)
        this.props.navigation.navigate('chatuser', { id: admin.organizer.id, title: admin.organizer.pseudo, hideNavBar:false });
      }
    }
  }

  cancelParticipation(){
    const cancel = !this.state.cancel;
    this.setState({ cancel })
  }

  goToUser = (id) => {
    const { sportunity, user } = this.props;
    
    const isOrganized = user && !!sportunity.organizers.find((item) => item && item.organizer && item.organizer.id === user.id)
    if (!user) {
      Toast.show(I18n.t('sportunityToastLoginProfile'));
      this.props.navigation.navigate('settings')
    } else if (isOrganized && user.id === id){
      this.props.navigation.navigate('meProfile');
    } else {
      this.props.navigation.navigate('profile', { userId: id });
    }
  }

  addToMyCalendar = () => {
    if(!this.props.user) {
      Toast.show(I18n.t('sportunityToastLoginCalendar'));
      return ;
    }
    let calendar = this.props.user.calendar
      ? {
        sportunities: this.props.user.calendar.sportunities && this.props.user.calendar.sportunities.edges && this.props.user.calendar.sportunities.edges.length > 0
          ? this.props.user.calendar.sportunities.edges.map(sportunity => sportunity.node.id)
          : [],
        users: this.props.user.calendar.users && this.props.user.calendar.users.length > 0
          ? this.props.user.calendar.users.map(user => user.id)
          : []
      }
      : {
        sportunities:[],
        users:[]
      } ;
    calendar.sportunities.push(this.props.sportunity.id);

    UpdateCalendarMutation.commit({
        userID: this.props.user.id,
        user: {
          calendar: calendar
        },
      },
      () => {
        Toast.show(I18n.t('sportunityCalendarUpdated'));
      },
      error => {
        console.log(error);
      },
    );
  }

  removeFromMyCalendar = () => {
    if(!this.props.user) {
      Toast.show(I18n.t('sportunityToastLoginCalendar'));
      return ;
    }
    let calendar = this.props.user.calendar
      ? {
        sportunities: this.props.user.calendar.sportunities && this.props.user.calendar.sportunities.edges && this.props.user.calendar.sportunities.edges.length > 0
          ? this.props.user.calendar.sportunities.edges.map(sportunity => sportunity.node.id)
          : [],
        users: this.props.user.calendar.users && this.props.user.calendar.users.length > 0
          ? this.props.user.calendar.users.map(user => user.id)
          : []
      }
      : {
        sportunities:[],
        users:[]
      } ;

    let sportunityIndex = calendar.sportunities.findIndex(sportunity => {
      return (sportunity === this.props.sportunity.id)
    })

    calendar.sportunities.splice(sportunityIndex, 1);

    UpdateCalendarMutation.commit({
        userID: this.props.user.id,
        user: {
          calendar: calendar
        },
      },
      () => {
        Toast.show(I18n.t('sportunityCalendarUpdated'));
      },
      error => {
        console.log(error);
      },
    );
  }

  relaunchInvitedUsers = () => {
    if (!this.state.relaunchIsDone) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        sportunityRelaunchId: this.props.sportunity.id,
        queryRelaunch: true
      });

      this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
      );
      setTimeout(() => {Toast.show(I18n.t('relaunchInvitedSuccess'));}, 1000)
      this.setState({relaunchIsDone: true})
    }
    else
      Toast.show(I18n.t('relaunchInvitedAlreadyDone'));
  }

  confirmCancelParticipant = (participant) => {
    Alert.alert(
      I18n.t('sportunityCancelParticipantTitle'),
      I18n.t('sportunityCancelParticipantMessage').replace('{0}',participant.pseudo),
      [
        {text: I18n.t('sportunityCancelParticipantYes'), onPress: () => this.cancelParticipant(participant)},
        {text: I18n.t('sportunityCancelParticipantNo'), onPress: ()=> console.log('Cancel Pressed')},
      ]
    )
  }

  cancelParticipant = (participant) => {
    const { viewer, sportunity } = this.props;
    let params = { 
      sportunityID: this.props.sportunity.id,
      sportunity:{
        canceling: participant.id,
      },
    }

    CancelParticipantSportunity.commit(
      params,
      () => {
        Toast.show(I18n.t('sportunityCancelParticipantSuccess'));
      },
      () => {
        console.error(error.getError())
      }
    );
  }

  addParticipants = (users) => {
    let params = {
      sportunityID: this.props.sportunity.id,
      participants: users.map(user => ({participantId: user.id})),
    };
    
    OrganizerAddParticipantsMutation.commit(params,
      () => {
        Toast.show(I18n.t('updateSuccess'));
      },
      error => {
        console.error(error.getError())
      },
    );
  }

  refuseInvitation = () => {
    const { viewer, user, sportunity } = this.props;
    let params = { 
      sportunityID: sportunity.id,
      sportunity:{
        invited: {
          user: user.id,
          answer: "NO"
        }
      },
    };
    this.props.updateLoadingStatus(true)

    RefuseInvitationMutation.commit(params,
      () => {
        Toast.show(I18n.t('sportunityToastRefuseInvitationSuccess'));
        this.props.updateLoadingStatus(false)
        this.props.navigation.goBack()
      },
      error => {
        Toast.show(I18n.t('sportunityToastRefuseInvitationFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
        this.props.updateLoadingStatus(false)
      },
    );
  }

  refuseCoOrganization = () => {
    const { viewer, user, sportunity } = this.props;
    
    let pendingOrganizer = sportunity.pendingOrganizers.find(pendingOrg => {
      return pendingOrg.circles && pendingOrg.circles.edges && pendingOrg.circles.edges.length > 0 &&
        pendingOrg.circles.edges.findIndex(edge => edge.node.members.findIndex(member => user.id === member.id) >= 0) >= 0 ;
    });

    let params = { 
      sportunityID: sportunity.id,
      pendingOrganizerID: pendingOrganizer.id, 
    };
    this.props.updateLoadingStatus(true)

    SecondaryOrganizerRefuseRole.commit(params,
      () => {
        Toast.show(I18n.t('sportunityAlertRefuseCoOrganizationSuccess'));
        this.props.updateLoadingStatus(false)
        this.props.navigation.goBack()
      },
      error => {
        Toast.show(I18n.t('sportunityToastRefuseInvitationFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
        this.props.updateLoadingStatus(false)
      },
    );
  }

  displayStatFilling = () => {
    this.setState({
      displayStatFillingTab: true
    })
  }

  showTransformSurvey = () => {
    this.setState({displayTransformSurveyModal: true});
  }

  transformSurvey = surveyDates => {
    this.props.updateLoadingStatus(true)
    this.setState({
      displayTransformSurveyModal: false
    })

    OrganizerPicksSurveyDateMutation.commit({
        sportunityID: this.props.sportunity.id,
        beginning_date: surveyDates.beginning_date,
        ending_date: surveyDates.ending_date
      }, 
      () => {
        setTimeout(() => Toast.show(I18n.t('updateSuccess')), 200) ;
        this.props.updateLoadingStatus(false)
      },
      error => {
        Toast.show(I18n.t('sportunityToastRefuseInvitationFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
        this.props.updateLoadingStatus(false)
      },
    )
  }

  addButtonRefsToDom = () => {
    const { sportunity, user, viewer, navigation } = this.props;
    const isLoggedIn = user !== null;
    const isSurvey = sportunity.survey && !sportunity.survey.isSurveyTransformed && sportunity.survey.surveyDates && sportunity.survey.surveyDates.length > 0 ;

    return (
      <Fragment>
        {
          user && sportunity && sportunity.status !== 'Past' &&
          <ButtonUpdateSportunity
            onRef={ref => (this.ButtonUpdateSportunity = ref)}
            isOrganized={this.state.isOrganized}
            serieOccurencesNumber={sportunity.number_of_occurences}
            isLoggedIn={isLoggedIn}
            viewer={viewer}
            sportunity={sportunity}
            user={user}
            display={false}
            notifyPeople={this.state.notifyPeople}
            navigation={navigation}
          />
        }
        {
          user && sportunity &&
          <ButtonReOrganizeSportunity
            onRef={ref => (this.ButtonReOrganizeSportunity = ref)}
            isOrganized={this.state.isOrganized}
            isLoggedIn={isLoggedIn}
            viewer={viewer}
            sportunity={sportunity}
            user={user}
            display={false}
            navigation={navigation}
          />
        }
        { sportunity && sportunity.status !== 'Past' && sportunity.status !== 'Cancelled' &&
          <View style={{
            overflow: 'hidden',
            left: 0,
            right: 0,
            position: 'absolute',
            top: 2000,
            bottom: -2000,
          }}>
            <ButtonSportunity
            onRef={ref => (this.ButtonSportunity = ref)}
            isOrganized={this.state.isOrganized}
            isSecondaryOrganizer={this.state.isSecondaryOrganizer}
            isPotentialSecondaryOrganizer={this.state.isPotentialSecondaryOrganizer}
            potentialSecondaryOrganizer={this.state.potentialSecondaryOrganizer}
            serieOccurencesNumber={sportunity.number_of_occurences}
            isLoggedIn={isLoggedIn}
            status={sportunity && sportunity.status}
            isParticipant={this.state.isParticipant}
            isOnWaitingList={this.state.isOnWaitingList}
            isInvited={this.state.isInvited}
            wasInvited={this.state.wasInvited}
            isPotentialOpponent={this.state.isPotentialOpponent}
            isSurvey={isSurvey}
            showTransformSurvey={this.showTransformSurvey}
            viewer={this.props.viewer}
            sportunity={sportunity}
            user={this.props.user}
            isAuthorizedAdmin={this.state.isAuthorizedAdmin}
            displayFloating={true}
            isLoading={this.props.isLoading}
            changeLoadingStatus={(status) => this.props.updateLoadingStatus(status)}
            navigation={this.props.navigation}
            updateFrom={this.props.updateFrom}
          />
          </View>
        }
      </Fragment>
    )
  }

  getMenuOptions = () => {
    const { sportunity, user } = this.props;
    const { isOrganized } = this.state;
    let menuOptions = [] ;
  
    if (isOrganized) {
      if (sportunity.status !== 'Past' && sportunity.status !== 'Cancelled') {
        if (sportunity.invited && sportunity.invited.length > 0) {
          menuOptions.push({
            value: "relaunch",
            text: I18n.t('relaunchInvited')
          });
        }

        menuOptions.push({
          value: "update",
          text: I18n.t('updateSingle')
        });

        if (sportunity.number_of_occurences > 1)
          menuOptions.push({
            value: "updateSerie",
            text: I18n.t('updateSerie')
          });

        menuOptions.push({
          value: "cancel",
          text: I18n.t('sportunityCancelSportunity')
        });

        if (sportunity.number_of_occurences > 1)
          menuOptions.push({
            value: "cancelSerie",
            text: I18n.t('sportunityCancelSportunitySerie')
          });
        
        if (sportunity.price.cents=== 0)
          menuOptions.push({
            value: "book",
            text: I18n.t('becomeParticipant')
          });
      }

      if (sportunity.status !== 'Cancelled' && user && user.areStatisticsActivated)
      menuOptions.push({
        value: "fillStats",
        text: I18n.t('fillSportunityStats')
      });

      menuOptions.push({
        value: "reOrganize",
        text: I18n.t('organizeAgain')
      });
    }
    if (user) {
      let calendar = user.calendar ;
      let isAlreadyAdded = false ;
      if (calendar && calendar.sportunities && calendar.sportunities.edges && calendar.sportunities.edges.length > 0) {
        calendar.sportunities.edges.forEach(sportunity => {
          if (sportunity.node.id === sportunity.id)
            isAlreadyAdded = true ;
        })
      }
      if (!isAlreadyAdded)
        menuOptions.push({
          value: "addToCalendar",
          text: I18n.t('sportunityCalendarAddToCalendar')
        });
      else
        menuOptions.push({
          value: "removeFromCalendar",
          text: I18n.t('sportunityCalendarRemoveFromCalendar')
        });
    }
    return menuOptions;
  }

  handleMenuItemPress = (value) => {
    if (value === "update")
      this.ButtonUpdateSportunity.goToUpdateSingle()
    else if (value === 'updateSerie')
      this.ButtonUpdateSportunity.goToUpdateSerie()
    else if (value === "cancel")
      this.ButtonSportunity.cancelSportunity()
    else if (value === "cancelSerie")
      this.ButtonSportunity.cancelSerie()
    else if (value === "reOrganize")
      this.ButtonReOrganizeSportunity.goToReOrganize()
    else if (value === "book")
      this.ButtonSportunity.bookSportunityWithDialog()
    else if (value === "addToCalendar")
      this.addToMyCalendar();
    else if (value === "removeFromCalendar")
      this.removeFromMyCalendar();
    else if (value === "relaunch")
      this.relaunchInvitedUsers();
    else if (value === "fillStats")
      this.displayStatFilling();
  }

  renderMenu = () => {
    const menuOptions = this.getMenuOptions();
    return (
      <View>
        {
          menuOptions && menuOptions.map((menuItem, index) => (
            <FormListItem
              key={index}
              onPress={() => this.handleMenuItemPress(menuItem.value)}
              title={menuItem.text}
              centerTitle
            />
          ))
        }
      </View>
    )
  }

  render() {
    const { sportunity, viewer } = this.props;
    return (
      <ScrollView style={{ backgroundColor: colors.silver }}>
        <Heading text="Menu" />

        {this.addButtonRefsToDom()}
        {this.renderMenu()}

        <Modal
          isModalVisible={this.state.displayStatFillingTab}
          openCloseModal={() => this.setState({displayStatFillingTab: !this.state.displayStatFillingTab})}
          title={I18n.t('fillSportunityStats')}
        >
          <StatisticFillingModal
            sportunity={sportunity}
            viewer={viewer}
            isPast={sportunity.status === 'Past'}
            onClose={() => this.setState({displayStatFillingTab: false})}
          />
        </Modal>
      </ScrollView>
    )
  }
}

const stateToProps = (state) => ({
  isLoading: state.sportunityActivity.isLoading,
  language: state.sportunityLocale.language,
});

const dispatchToProps = {
  updateLoadingStatus,
  updateFrom,
};

export default createRefetchContainer(connect(stateToProps, dispatchToProps)(EventDetailMenu), {
  viewer: graphql`
  fragment EventDetailMenu_viewer on Viewer
  @argumentDefinitions(
    sportunityRelaunchId: {type: "String!", defaultValue: ""},
    queryRelaunch: {type: "Boolean"},
    superToken: {type: "String"},
    querySuperMe: {type: "Boolean", defaultValue: false},
    userToken: {type: "String"},
    queryAuthorizedAccounts: {type: "Boolean", defaultValue: false}
  ){
    ...VoteForManOfTheGame_viewer
    ...PriceView_viewer
    ...ButtonSportunity_viewer
    ...ParticipantsList_viewer
    ...ButtonFeedback_viewer
    ...StatisticFillingModal_viewer
    relaunchInviteds (sportunityID: $sportunityRelaunchId) @include(if: $queryRelaunch) {
      id
    }
    authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {
      id
      avatar
      pseudo
      accounts {
        id,
        avatar
        token,
        pseudo
      }
    }
    superMe (superToken: $superToken) @include(if:$querySuperMe) {
      id,
      pseudo
      avatar
      subAccounts{
          id,
          avatar
          pseudo
          token
      }
    }
  }`,
  user: graphql`
    fragment EventDetailMenu_user on User {
      ...ButtonSportunity_user
      ...ParticipantsList_user
      id
      avatar
      pseudo
      areStatisticsActivated
      profileType
      calendar {
        users {
          id
        }
        sportunities (last:1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  `,
  sportunity: graphql`
    fragment EventDetailMenu_sportunity on Sportunity {
      ...Header_sportunity
      ...StatusView_sportunity
      ...DescriptionView_sportunity
      ...DateSportunity_sportunity
      ...AdvancedSettingsView_sportunity
      ...PriceView_sportunity      
      ...StatisticFillingModal_sportunity
      
      ...SurveyView_sportunity
      ...SurveyModal_sportunity
      
      ...Compositions_sportunity
      ...ButtonSportunity_sportunity
      ...VoteForManOfTheGame_sportunity
      id,
      title,
      description,
      status,
      survey {
        isSurveyTransformed
        surveyDates {
          beginning_date
          ending_date
        }
      }
      participants{
        id
        pseudo,
        avatar
      },
      ageRestriction {
        from,
        to
      }
      sexRestriction
      participantRange{
        from,
        to
      }
      waiting{
        id
        pseudo,
        avatar
      },
      willing {
        id
        pseudo,
        avatar
      }
      canceling {
        canceling_user{
          id
          pseudo,
          avatar
        },
        status,
        cancelation_date,
      },
      invited{
        user {
          ...UserCard_user
          id
          pseudo,
          avatar
        }
        answer
      },
      paymentStatus {
        user {
          id
        }
        status
        price {
          cents,
          currency
        }
      }
      invited_circles (last: 100) {
        edges {
          node {
            id,
            name,
            mode
            memberCount
            type
            owner {
              id
              avatar
              pseudo
            }
            members {
              id
              pseudo
            }
          }
        }
      }
      price_for_circle {
        circle {
          id
        }
        price {
          cents,
          currency
        },
        participantByDefault
      },
      sport {
        allLevelSelected,
        sport {
          id,
          logo,
          name {
            EN
          }
        },
        levels {
          id,
          EN {
            name
            skillLevel
          },
          FR {
            name
            skillLevel
          }
        },
        positions {
          id,
          EN
        },
        certificates {
          id,
          name {
            EN
          }
        }
      },
      kind,
      beginning_date,
      ending_date,
      number_of_occurences,
      is_repeated_occurence_number,
      hide_participant_list
      
      price{
        cents,
        currency
      }
      fees,
      address{
        address,
        country,
        city,
        zip,
        position {
          lat,
          lng
        }
        ...DetailCellItem_address
      }
      venue{
        feedbacks{
          count
        }
        id
        name,
        address {
          address,
          city,
          country
        }
        ...ButtonFeedback_venue
      }
      infrastructure {
        id,
        name,
        logo
      }
      slot {
        id, 
        from, 
        end, 
        price {
          cents, 
          currency
        }
      }
      compositions {
        id
      }
      organizers{
        isAdmin
        secondaryOrganizerType {
          id
          name {
            FR
            EN
            DE
            ES
          }
        }
        customSecondaryOrganizerType
        price {
          cents,
          currency
        }
        organizer{
          id
          pseudo
          sportunityNumber
          feedbacks{
            averageRating
            count
          }
          sports {
            levels {
              EN {
                name
              }
            }
          }
          address {
            address
            country
            city
            zip
            position {
              lat
              lng
            }
          }
          pseudo
          avatar
          followers{
            id
          }
        }
        ...ButtonFeedback_organizers
      }
      pendingOrganizers {
        id
        circles (last: 20) {
          edges {
            node {
              id
              members {
                id
              }
              name
              memberCount
            }
          }
        }
        isAdmin
        role
        secondaryOrganizerType {
          id
          name {
            FR
            EN
            DE
            ES
          }
        }
        customSecondaryOrganizerType
        price {
          cents
          currency
        }
      }
      notification_preference {
        notification_type,
        send_notification_x_days_before,
        last_post
      },
      privacy_switch_preference {
        privacy_switch_type,
        switch_privacy_x_days_before
      },
      sportunityType {
        id,
      }
      game_information {
        opponent {
          organizer {
            id,
            pseudo,
            avatar
          }
          organizerPseudo 
          lookingForAnOpponent
          unknownOpponent
          invitedOpponents (last: 5) {
            edges {
              node {
                id,
                name,
                memberCount
                members {
                  id
                }
              }
            }
          }
        }
      }
      
    }
  `}, graphql`
      query EventDetailMenuRefetchQuery 
      ($sportunityRelaunchId: String!,
      $queryRelaunch: Boolean!,
      $superToken: String,
      $querySuperMe: Boolean!,
      $userToken: String,
      $queryAuthorizedAccounts: Boolean!) {
        viewer {
          ...EventDetailMenu_viewer @arguments
          (sportunityRelaunchId: $sportunityRelaunchId,
          queryRelaunch: $queryRelaunch,
          superToken: $superToken
          querySuperMe: $querySuperMe
          userToken: $userToken
          queryAuthorizedAccounts: $queryAuthorizedAccounts
          )
        }
      }
    `
);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import {
  graphql,
  createRefetchContainer,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';
import RelaySubscription from 'relay-subscriptions';
import CancelParticipantSportunity from './mutation/CancelParticipantSportunity.js';
import OrganizerAddParticipantsMutation from './ParticipantsList/AddParticipants/OrganizerAddParticipantsMutation';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { isEqual} from 'lodash';
import Carpooling from './Carpooling/Carpooling'
import Compositions from './Compositions';

import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  Dimensions,
  AsyncStorage
} from 'react-native';
import Text from 'react-native-text';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

import icons from '../../../../src/theme/images';
// import SportunitySummary from '../../../../src/customPropType/SportunitySummary';
import Modal from '../../../../src/presentational/Modal';
import { updateParticipantsModal, updateLoadingStatus } from '../../../../src/action/sportunityAction';
import { updateFrom } from 'sportunity/src/action/profileActions';
import DateSportunity from '../../DateSportunity/DateSportunity';

import DetailCellItem from './DetailCellItem';
import Organizer from './DetailCellItem/organizer';
import Opponent from './DetailCellItem/opponent';
import ParticipantsList from './ParticipantsList';
import { styles } from './styles';

import Header from './Header';
import ChatButton from './ChatButton';
import Status from './StatusView';
import Description from './DescriptionView';
import CancelationView from './CancelationView';
import Price from './PriceView';
import ButtonSportunity from './ButtonSportunity';
import ButtonUpdateSportunity from './ButtonUpdateSportunity';
import ButtonReOrganizeSportunity from './ButtonReOrganizeSportunity';
import ButtonFeedback from './Feedback/ButtonFeedback';
import ButtonRefuseInvitation from './ButtonRefuseInvitation';
import AdvancedSettings from './AdvancedSettingsView'
import StatisticFillingModal from './StatisticFillingModal'
import VoteForManOfTheGame from './VoteForManOfTheGame';
import CalendarSynchronizationTutorial from './CalendarSynchronizationTutorial';
import Survey from './SurveyView';
import SurveyModal from './SurveyModal';

import RefuseInvitationMutation from './mutation/RefuseInvitationMutation.js';
import SecondaryOrganizerRefuseRole from './mutation/SecondaryOrganizerRefuseRole.js';
import UpdateCalendarMutation from './UpdateSportunityCalendarMutation';
import OrganizerPicksSurveyDateMutation from './mutation/OrganizerPicksSurveyDate';

const {height, width} = Dimensions.get('window');

const getPlacesRemaining = (carpoolings) =>
  carpoolings.reduce((mem, carpooling) =>
    mem+carpooling.number_of_sits-carpooling.passengers.length
  , 0)

class EventDetailPage extends PureComponent {

  constructor(props){
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
      carPoolingModal: false,
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
    else if (sportunity.kind === "PRIVATE") {
      this.popOnPrivate();
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
          else
            this.popOnPrivate()
        }

      }
      else if (this.props.sportunity.kind === "PRIVATE") {
        this.popOnPrivate()
      }
    }
    else {
      setTimeout(() => this.waitForDataSuperMe(superToken), 100)
    }
  }

  popOnPrivate = () => {
    Toast.show(I18n.t('sportunityToastSportunityIsPrivate'));
    setTimeout(() => {
      this.props.navigation.goBack()
    }, 200)
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

  getMenuOptions = () => {
    let menuOptions = [] ;
    if (this.state.isOrganized) {
      if (this.props.sportunity.status !== 'Past' && this.props.sportunity.status !== 'Cancelled') {
        if (this.props.sportunity.invited && this.props.sportunity.invited.length > 0) {
          menuOptions.push({
            value: "relaunch",
            text: I18n.t('relaunchInvited')
          });
        }

        menuOptions.push({
          value: "update",
          text: I18n.t('updateSingle')
        });

        if (this.props.sportunity.number_of_occurences > 1)
          menuOptions.push({
            value: "updateSerie",
            text: I18n.t('updateSerie')
          });

        menuOptions.push({
          value: "cancel",
          text: I18n.t('sportunityCancelSportunity')
        });

        if (this.props.sportunity.number_of_occurences > 1)
          menuOptions.push({
            value: "cancelSerie",
            text: I18n.t('sportunityCancelSportunitySerie')
          });

        if (this.props.sportunity.price.cents=== 0)
          menuOptions.push({
            value: "book",
            text: I18n.t('becomeParticipant')
          });
      }

      if (this.props.sportunity.status !== 'Cancelled' && this.props.user && this.props.user.areStatisticsActivated)
        menuOptions.push({
          value: "fillStats",
          text: I18n.t('fillSportunityStats')
        });

      menuOptions.push({
        value: "reOrganize",
        text: I18n.t('organizeAgain')
      });
    }
    if (this.props.user) {
      let calendar = this.props.user.calendar ;
      let isAlreadyAdded = false ;
      if (calendar && calendar.sportunities && calendar.sportunities.edges && calendar.sportunities.edges.length > 0) {
        calendar.sportunities.edges.forEach(sportunity => {
          if (sportunity.node.id === this.props.sportunity.id)
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

  renderTopMenu = () => (
    <View style={ Platform.OS === 'android' ? styles.navBarContainerAndroid : styles.navBarContainerIOS }>
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
        style={styles.navBarReturnButton}
      >
        <Image
          source={icons.right_arrow}
          style={styles.navBarReturnButtonIcon}
        />
      </TouchableOpacity>
      <Text style={ styles.navBarTitle }>{I18n.t('eventDetail')}</Text>
      {this.getMenuOptions().length > 0
        ? <Menu onSelect={(value) => {
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
            }}>
            <MenuTrigger>
              <Text style={ Platform.select({ios: styles.navOptionsButtonIos, android: styles.navOptionsButton })}>   &#8942;   </Text>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={{marginTop:50, alignSelf: 'flex-end', marginRight: 0}}>
              {this.getMenuOptions().map((option, index) => (
                <MenuOption key={index} value={option.value}>
                  <Text>{option.text}</Text>
                </MenuOption>
              ))}
            </MenuOptions>
          </Menu>
        : <Text>   </Text>
      }
    </View>
  );

  renderTutorial = () => {
    return (
      <CalendarSynchronizationTutorial
        onClose={this.closeTutorial}
        isVisible={this.state.displayCalendarSynchronizationTutorial}
      />
    )
  }

  getCircleType = (type) => {
    const memberTypeList = [
      {key: 'ADULTS', label: I18n.t('circles_member_type_'+0)},
      {key: 'CHILDREN', label: I18n.t('circles_member_type_'+1)},
      {key: 'TEAMS', label: I18n.t('circles_member_type_'+2)},
      {key: 'CLUBS', label: I18n.t('circles_member_type_'+3)},
      {key: 'COMPANIES', label: I18n.t('circles_member_type_'+4)}
    ]
    return memberTypeList.find(list => list.key === type).label
  }

  render(){
    const { status, updateParticipantsModal, isParticipantsModalVisible, sportunity, user, viewer, language } = this.props;
    const organizerId = sportunity && sportunity.organizers[0].organizer && sportunity.organizers[0].organizer.id;
    const isLoggedIn = user !== null;
    const hasCarpooling = sportunity && sportunity.carPoolings && sportunity.carPoolings.length
    const carpoolingRemainingSits = sportunity.carPoolings && getPlacesRemaining(sportunity.carPoolings);
    const isSurvey = sportunity.survey && !sportunity.survey.isSurveyTransformed && sportunity.survey.surveyDates && sportunity.survey.surveyDates.length > 0 ;

        return (
      <MenuContext style={styles.container} >
        {!this.state.displayAuthorizedAccountsPicker && this.renderTopMenu()}
        {!this.state.displayAuthorizedAccountsPicker && this.renderTutorial()}
        <ScrollView style={styles.scrollView}>

          <Header sportunity={sportunity} language={language}/>
          <VoteForManOfTheGame
            viewer={viewer}
            sportunity={sportunity}
            isParticipant={this.state.isParticipant}
            isOrganized={this.state.isOrganized}
          />

          <Description
            sportunity={sportunity}
            status={status}
            potentialSecondaryOrganizer={this.state.potentialSecondaryOrganizer}
            user={user}
            language={language}
          />



          {sportunity.game_information && sportunity.game_information.opponent && (sportunity.game_information.opponent.organizer || sportunity.game_information.opponent.organizerPseudo) &&
            (sportunity.game_information.opponent.organizer
            ? <Opponent user={sportunity.game_information.opponent.organizer} goToUser={this.goToUser}/>
            : <Opponent user={{pseudo: sportunity.game_information.opponent.organizerPseudo}} />
            )
          }
          {sportunity.game_information && sportunity.game_information.opponent && sportunity.game_information.opponent.unknownOpponent &&
            <Opponent unknown={true}/>
          }

          {isSurvey && (this.state.isInvited || this.state.isOrganized) &&
            <Survey
              sportunity={sportunity}
              me={user}
              language={language}
              isAdmin={this.state.isOrganized}
            />
          }

          {!this.state.isPotentialOpponent &&
            (
            <TouchableOpacity
              style={[styles.rowContainer, {flex: 6}]}
              onPress={
                !this.props.user ?
                  () => {
                    Toast.show(I18n.t('sportunityToastLogin'));
                    this.props.navigation.navigate('settings')
                  }
                :
                  !this.state.isOrganized && sportunity.hide_participant_list ?
                    () => {
                      Toast.show(I18n.t('organizerHasHiddenParticipantList'));
                    }
                  :
                    () => updateParticipantsModal(true)
              }
            >
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                <Text style={styles.participantNumber} numberOfLines={1}>
                  {sportunity && sportunity.participants && sportunity.participants.length} {I18n.t('sportunityPeopleGoing')}
                </Text>
                <Image style={styles.icon} source={icons.right_arrow} />
              </View>
            </TouchableOpacity>
            )}

          {this.state.showJoinCommunity &&
            <TouchableOpacity
              style={styles.rowContainer}
              onPress={() => this.props.navigation.navigate('circledetail', { circleId: this.state.mainCommunityCircle.id, hideNavBar:true })}
            >
              <View style={{ flexDirection: 'row', flex: 1}}>
                <View style={{ flexDirection: 'column', flex: 1}}>
                  <View style={{ flexDirection: 'row', flex: 1}}>
                    <Text style={styles.joinText} numberOfLines={2}>
                      {I18n.t('joinCommunity')}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.topContent}>
                      <View style={styles.imageContainer}>
                        <Image style={styles.image} source={icons.circleLarge}/>
                          <Text style={styles.members}>{this.state.mainCommunityCircle.memberCount}</Text>
                      </View>

                      <View style={styles.titleContainer}>
                        <Text style={styles.circleTitle} numberOfLines={2}>
                          {this.state.mainCommunityCircle.name}
                        </Text>
                        <View style={styles.ownerContainer}>
                          {this.state.mainCommunityCircle.owner && this.state.mainCommunityCircle.owner.avatar
                            ? <Image style={styles.avatar} source={{uri: this.state.mainCommunityCircle.owner.avatar}}/>
                            : <Image style={styles.avatar} source={icons.profile_photo} />
                          }
                          <Text style={styles.ownerName} numberOfLines={2}>
                            {this.state.mainCommunityCircle.owner.pseudo
                            ? this.state.mainCommunityCircle.owner.pseudo.length > 25
                              ? this.state.mainCommunityCircle.owner.pseudo.slice(0,25) + '...'
                              : this.state.mainCommunityCircle.owner.pseudo
                            : ''}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Image style={styles.icon} source={icons.right_arrow} />
              </View>
            </TouchableOpacity>
          }
          {(this.state.isOrganized || this.state.isParticipant) && sportunity.compositions.length > 0 &&
            <Compositions
              sportunity={sportunity}
              isOrganizer={this.state.isOrganized}
              isParticipant={this.state.isParticipant}
            />
          }
          <DetailCellItem
            venue={sportunity && sportunity.venue}
            infrastructure={sportunity && sportunity.infrastructure}
            address={sportunity && sportunity.address}
          />

          { sportunity && sportunity.organizers && sportunity.organizers.map((item, index) =>
            <Organizer
              key={index}
              user={item.organizer}
              sportunity={sportunity}
              goToUser={this.goToUser}
              role={item.secondaryOrganizerType && item.secondaryOrganizerType.name[language.toUpperCase()] || item.customSecondaryOrganizerType}/>
            )
          }
          { isLoggedIn && !this.state.isAuthorizedAdmin
            &&
            <ChatButton
              goToChat={this.goToChat}
              isParticipant={this.state.isParticipant}
              isOrganized={this.state.isOrganized}
            />
          }

          {(this.state.isParticipant || this.state.isOrganized) && (
            <TouchableOpacity
              style={styles.rowContainer}
              onPress={() => this.setState({ carPoolingModal: true })}
            >
              <View style={{ flexDirection: 'row', flex: 1 , justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.title} numberOfLines={2}>
                  {hasCarpooling
                    ? (sportunity.carPoolings.length + ' ' +
                        I18n.t(
                          'sportunityCarpoolingAvailable' +
                          (sportunity.carPoolings.length>1? 'Plural' : '')
                        ) + ', ' +

                        carpoolingRemainingSits+ ' ' +
                        I18n.t(
                          'sportunityCarpoolingPlacesRemaing' +
                          (carpoolingRemainingSits>1? 'Plural' : '')
                        )
                      )
                    : (I18n.t('sportunityCarpoolingUnavailable'))
                  }
                </Text>
                <Image style={styles.icon} source={icons.right_arrow} />
              </View>
            </TouchableOpacity>
          )}
          <Price
            sportunity={sportunity}
            viewer={viewer}
            isAdmin={this.state.isOrganized}
          />

          {
            sportunity && sportunity.price && sportunity.price.cents > 0 &&
              <CancelationView
                cancel={this.state.cancel}
                cancelSportunity={() => this.cancelParticipation()}
              />
          }

          { sportunity && (sportunity.status === 'Past' || sportunity.status === 'Cancelled')
            ? <ButtonFeedback
                viewer={this.props.viewer}
                organizers={sportunity.organizers}
                venue={sportunity.venue}
                isOrganizer={this.state.isOrganized}
                isParticipant={this.state.isParticipant}
                navigation={this.props.navigation}
              />
            : <ButtonSportunity
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
                displayFloating={false}
                isLoading={this.props.isLoading}
                changeLoadingStatus={(status) => this.props.updateLoadingStatus(status)}
                navigation={this.props.navigation}
                updateFrom={this.props.updateFrom}
              />
          }

          { sportunity && sportunity.status !== 'Past' && sportunity.status !== 'Cancelled' && this.state.isInvited && !isSurvey && !this.state.isOrganized &&
            <ButtonRefuseInvitation
              sportunity={sportunity}
              user={this.props.user}
              viewer={this.props.viewer}
              refuseInvitation={this.refuseInvitation}
              isInvited={this.state.isInvited}
              isLoading={this.props.isLoading}
            />
          }

          {sportunity && this.state.isPotentialSecondaryOrganizer && !isSurvey &&
            <ButtonRefuseInvitation
              sportunity={sportunity}
              user={this.props.user}
              viewer={this.props.viewer}
              refuseInvitation={this.refuseCoOrganization}
              isCoOrganizer={true}
              isLoading={this.props.isLoading}
            />
          }

          {
            this.props.user && sportunity && sportunity.status !== 'Past' &&
              <ButtonUpdateSportunity
                onRef={ref => (this.ButtonUpdateSportunity = ref)}
                isOrganized={this.state.isOrganized}
                serieOccurencesNumber={sportunity.number_of_occurences}
                isLoggedIn={isLoggedIn}
                viewer={this.props.viewer}
                sportunity={sportunity}
                user={this.props.user}
                display={false}
                notifyPeople={this.state.notifyPeople}
                navigation={this.props.navigation}
              />
          }
          {
            this.props.user && sportunity &&
            <ButtonReOrganizeSportunity
              onRef={ref => (this.ButtonReOrganizeSportunity = ref)}
              isOrganized={this.state.isOrganized}
              isLoggedIn={isLoggedIn}
              viewer={this.props.viewer}
              sportunity={sportunity}
              user={this.props.user}
              display={false}
              navigation={this.props.navigation}
            />
          }

          <View>
            <View style={styles.seperator} />
            <Image
              style={styles.hblIcon}
              source={icons.w_share}
            />
          </View>
        </ScrollView>

        { sportunity && sportunity.status !== 'Past' && sportunity.status !== 'Cancelled' &&
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
        }
        <Modal
          isModalVisible={this.state.displayStatFillingTab}
          openCloseModal={() => this.setState({displayStatFillingTab: !this.state.displayStatFillingTab})}
          title={I18n.t('fillSportunityStats')}
        >
          <StatisticFillingModal
            sportunity={sportunity}
            viewer={this.props.viewer}
            isPast={sportunity.status === 'Past'}
            onClose={() => this.setState({displayStatFillingTab: false})}
            />
        </Modal>
        <Modal
          isModalVisible={isParticipantsModalVisible}
          openCloseModal={
            !this.props.user ?
              () => {
                Toast.show(I18n.t('sportunityToastLogin'));
                this.props.navigation.navigate('settigs')
              }
            :
              () => updateParticipantsModal(false)
          }
          title={I18n.t('participants')}
        >
          <ParticipantsList
            viewer={this.props.viewer}
            sportunity={sportunity}
            user={user}
            organizerId={organizerId}
            isOrganized={this.state.isOrganized}
            isParticipant={this.state.isParticipant}
            isOnWaitingList={this.state.isOnWaitingList}
            isInvited={this.state.isInvited}
            wasInvited={this.state.wasInvited}
            cancelParticipant={this.confirmCancelParticipant}
            addParticipants={this.addParticipants}
            isPast={sportunity.status === 'Past'}
            goToUser={this.goToUser}
          />
        </Modal>
        <Modal
          isModalVisible={this.state.carPoolingModal}
          openCloseModal={() => this.setState({carPoolingModal: !this.state.carPoolingModal})}
          title={I18n.t('sportunityCarpooling')}
        >
          <Carpooling
            sportunity={sportunity}
            viewer={this.props.viewer}
            isPast={sportunity.status === 'Past'}
            onClose={() => this.setState({ carPoolingModal: false })}
            />
        </Modal>
        {this.state.displayAuthorizedAccountsPicker &&
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.displayAuthorizedAccountsPicker}
            onRequestClose={() => this.setState({displayAuthorizedAccountsPicker: false})}
          >
            <TouchableOpacity style={styles.background} onPress={this.popOnPrivate} activeOpacity={1}>
              <View style={styles.overlay}>
                <View style={[styles.optionContainer, {height: this.state.authorizedAccounts.length * 60 + 40, top: (height-this.state.authorizedAccounts.length * 60)/2-40}]}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      {I18n.t('chooseAccountOnOpenApp')}
                    </Text>
                  </View>
                  <ScrollView keyboardShouldPersistTaps={"always"}>
                    <View style={{paddingHorizontal:10}}>
                      {this.state.authorizedAccounts.map((authorizedAccount, index) => (
                        <TouchableOpacity
                          key={index}
                          style={styles.optionStyle}
                          onPress={() => this._handleSwitchAccountAndOpenUrl(authorizedAccount.token)}>
                          <View style={styles.photoContainer}>
                            <Image style={styles.avatar} source={{ uri: authorizedAccount.avatar }}/>
                          </View>
                          <Text style={styles.modalPseudo}>
                            {authorizedAccount.pseudo}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </ScrollView>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        }
        {this.state.displayTransformSurveyModal &&
          <SurveyModal
            transformSurvey={this.transformSurvey}
            sportunity={sportunity}
            viewer={this.props.viewer}
            me={user}
            language={language}
            displayModal={this.state.displayTransformSurveyModal}
            toggleModal={() => this.setState({displayTransformSurveyModal: !this.state.displayTransformSurveyModal})}
          />
        }
      </MenuContext>
    );
  }
}

EventDetailPage.propTypes = {
  viewer: PropTypes.object.isRequired,
  user: PropTypes.object,
  status: PropTypes.object.isRequired,
  isParticipantsModalVisible: PropTypes.bool.isRequired,
  updateParticipantsModal: PropTypes.func.isRequired,
  selectedKind: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  status: state.sportunityActivity.status,
  isParticipantsModalVisible: state.sportunityActivity.isParticipantsModalVisible,
  selectedKind: state.sportunityList.selectedKind,
  isLoading: state.sportunityActivity.isLoading,
  language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
  updateParticipantsModal: (status) => dispatch(updateParticipantsModal(status)),
  updateLoadingStatus: (status) => dispatch(updateLoadingStatus(status)),
  updateFrom: (status) => dispatch(updateFrom(status))
});

export default createRefetchContainer(connect(stateToProps, dispatchToProps)(EventDetailPage), {
  viewer: graphql`
  fragment EventDetailPageView_viewer on Viewer
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
    ...Carpooling_viewer
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
    fragment EventDetailPageView_user on User {
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
    fragment EventDetailPageView_sportunity on Sportunity {
      ...Header_sportunity
      ...StatusView_sportunity
      ...DescriptionView_sportunity
      ...DateSportunity_sportunity
      ...AdvancedSettingsView_sportunity
      ...PriceView_sportunity      
      ...StatisticFillingModal_sportunity
      ...Carpooling_sportunity
      
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
      carPoolings {
        id,
        driver {
          id,
          pseudo,
          avatar
        },
        address {
          address,
          city,
          zip,
          country
        },
        starting_date,
        number_of_sits
        passengers {
          id,
          pseudo,
          avatar
        }
      }
      
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
        role
        permissions {
          chatAccess {
            view
            edit
          }
          memberAccess {
            view
            edit
          }
          carPoolingAccess {
            view
            edit
          }
          imageAccess {
            view
            edit
          }
          detailsAccess {
            view
            edit
          }
          compositionAccess {
            view
            edit
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
      query EventDetailPageViewRefetchQuery 
      ($sportunityRelaunchId: String!,
      $queryRelaunch: Boolean!,
      $superToken: String,
      $querySuperMe: Boolean!,
      $userToken: String,
      $queryAuthorizedAccounts: Boolean!) {
        viewer {
          ...EventDetailPageView_viewer @arguments
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

I18n.fallbacks = true
I18n.translations = translations;

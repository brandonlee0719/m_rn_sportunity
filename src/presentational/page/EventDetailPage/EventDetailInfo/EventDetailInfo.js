import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PureComponent from "sportunity/src/lib/PureComponent";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import I18n from "react-native-i18n";
import { isEqual, get } from "lodash";

import CancelParticipantSportunity from "../mutation/CancelParticipantSportunity.js";
import OrganizerAddParticipantsMutation from "../ParticipantsList/AddParticipants/OrganizerAddParticipantsMutation";
import translations from "sportunity/src/translations.js";
import Compositions from "../Compositions";

import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  Dimensions,
  AsyncStorage
} from "react-native";
import Text from "react-native-text";
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-menu";
import Icon from "react-native-vector-icons/Ionicons";

import icons from "../../../../theme/images";
// import SportunitySummary from '../../../../src/customPropType/SportunitySummary';
import Modal from "../../../Modal";
import {
  updateParticipantsModal,
  updateLoadingStatus
} from "../../../../action/sportunityAction";
import {
  updateParticipantStatus,
  updateOrganizedStatus,
  updateChatId,
  updateUser,
  updateSportunity,
  resetSportunityDetails
} from "../../../../action/sportunityDetails";
import { updateFrom } from "sportunity/src/action/profileActions";
import DateSportunity from "../../../DateSportunity/DateSportunity";

import DetailCellItem from "../DetailCellItem";
import Organizer from "../DetailCellItem/organizer";
import Opponent from "../DetailCellItem/opponent";
import ParticipantsList from "../ParticipantsList";
import { styles } from "../styles";

import Header from "../Header";
import ChatButton from "../ChatButton";
import Status from "../StatusView";
import Description from "../DescriptionView";
import CancelationView from "../CancelationView";
import Price from "../PriceView";
import ButtonSportunity from "../ButtonSportunity";
import ButtonUpdateSportunity from "../ButtonUpdateSportunity";
import ButtonReOrganizeSportunity from "../ButtonReOrganizeSportunity";
import ButtonFeedback from "../Feedback/ButtonFeedback";
import ButtonRefuseInvitation from "../ButtonRefuseInvitation";
import AdvancedSettings from "../AdvancedSettingsView";
import StatisticFillingModal from "../StatisticFillingModal";
import VoteForManOfTheGame from "../VoteForManOfTheGame";
import CalendarSynchronizationTutorial from "../CalendarSynchronizationTutorial";
import Survey from "../SurveyView";
import SurveyModal from "../SurveyModal";

import RefuseInvitationMutation from "../mutation/RefuseInvitationMutation.js";
import SecondaryOrganizerRefuseRole from "../mutation/SecondaryOrganizerRefuseRole.js";
import UpdateCalendarMutation from "../UpdateSportunityCalendarMutation";
import OrganizerPicksSurveyDateMutation from "../mutation/OrganizerPicksSurveyDate";
import DeleteSportunityMutation from "../mutation/DeleteSportunityMutation";
import TopContent from "../../SportunityPage/SportunityListView/SportunityItem/TopContent/index.js";
import { colors, images, metrics } from "../../../../theme";
import Card from "../../../UI/Card.js";
import FormListItem from "../../../UI/FormListItem.js";
import Button from "../../../UI/Button.js";
import EventAddressMap from "../EventAddressMap";
import EventStatistics from "../EventStatistics";
import UpdateOrganizerPermissionsMutation from "../mutation/UpdateOrganizerPermissionsMutation";

const { height, width } = Dimensions.get("window");
import * as globals from "../../../../lib/globalsjs/globals";

class EventDetailInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isParticipant: false,
      isOnWaitingList: false,
      cancel: false,
      isOrganized: false, // this is true when the viewer is the main admin or permissions.detailsAccess.edit = true
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
    };
  }

  async componentDidMount() {
    const { sportunity, user } = this.props;

    this.props.resetSportunityDetails();

    if (user) {
      let isOrganized = !!sportunity.organizers.find(
        item =>
          item &&
          item.organizer &&
          user &&
          item.organizer.id === user.id &&
          item.isAdmin
      );
      isOrganized =
        isOrganized ||
        !!sportunity.organizers.find(
          item =>
            item &&
            item.organizer &&
            user &&
            item.organizer.id === user.id &&
            item.permissions &&
            item.permissions.detailsAccess.edit
        );
      const isSecondaryOrganizer = !!sportunity.organizers.find(
        item =>
          item &&
          item.organizer &&
          user &&
          item.organizer.id === user.id &&
          !item.isAdmin
      );
      const isPotentialSecondaryOrganizer =
        sportunity.status.indexOf("Asked-CoOrganization") >= 0;
      if (isPotentialSecondaryOrganizer) {
        let askedRoles = [];
        sportunity.pendingOrganizers.forEach(pendingOrganizer => {
          if (
            pendingOrganizer.circles.edges.findIndex(
              edge =>
                edge.node.members.findIndex(member => user && member.id === user.id) >=
                0
            ) >= 0
          ) {
            askedRoles.push({
              id: pendingOrganizer.id,
              name: pendingOrganizer.secondaryOrganizerType
                ? pendingOrganizer.secondaryOrganizerType.name[
                    this.props.language.toUpperCase()
                  ]
                : pendingOrganizer.customSecondaryOrganizerType
            });
          }
          if (askedRoles.length > 0) {
            this.setState({
              potentialSecondaryOrganizer: askedRoles[0]
            });
          }
        });
      }
      let isParticipant = !!sportunity.participants.find(
        item => item && user && item.id === user.id
      );
      let isInvited = !!sportunity.invited.find(
        item =>
          item &&
          item.user &&
          user &&
          item.user.id === user.id &&
          item.answer === "WAITING"
      );
      let wasInvited = !!sportunity.invited.find(
        item => item && item.user && user && item.user.id === user.id
      );
      const cancel = sportunity.price && sportunity.price.cents > 0;
      let isOnWaitingList = !!sportunity.waiting.find(
        item => item && user && item.id === user.id
      );
      let isOnWillingList = !!sportunity.willing.find(
        item => item && user && item.id === user.id
      );
      let isPotentialOpponent =
        user.profileType === "ORGANIZATION" &&
        !isOrganized &&
        !isSecondaryOrganizer &&
        !isPotentialSecondaryOrganizer &&
        sportunity.game_information &&
        sportunity.game_information.opponent &&
        (sportunity.game_information.opponent.lookingForAnOpponent ||
          (sportunity.game_information.opponent.invitedOpponents &&
            sportunity.game_information.opponent.invitedOpponents.edges &&
            sportunity.game_information.opponent.invitedOpponents.edges.length >
              0 &&
            !!sportunity.game_information.opponent.invitedOpponents.edges[0].node.members.find(
              member => user && member.id === user.id
            ))) &&
        !sportunity.game_information.opponent.organizer &&
        !sportunity.game_information.opponent.organizerPseudo;

      if (isParticipant || isOnWaitingList) isInvited = false;

      this.setState({
        isOrganized,
        isParticipant,
        cancel,
        isInvited,
        wasInvited,
        isOnWaitingList,
        isPotentialOpponent,
        isSecondaryOrganizer,
        isPotentialSecondaryOrganizer
      });

      this.props.updateParticipantStatus(isParticipant);
      this.props.updateOrganizedStatus(isOrganized);
      this.props.updateUser(true);
      this.props.updateSportunity({
        title: sportunity.title,
        organizers: sportunity.organizers
      });
      if (this.props.chat) {
        this.props.updateChatId(this.props.chat.id);
      }

      if (
        !isOrganized &&
        !isParticipant &&
        !wasInvited &&
        !isOnWaitingList &&
        !isOnWillingList &&
        !isPotentialOpponent &&
        !isSecondaryOrganizer &&
        !isPotentialSecondaryOrganizer
      ) {
        let superToken = await AsyncStorage.getItem("superToken");
        let userToken = await AsyncStorage.getItem("token");

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
          { force: false }
        );
      }
    } else if (sportunity.kind === "PRIVATE") {
      this.popOnPrivate();

      this.props.updateUser(false);
    }

    if (
      sportunity &&
      sportunity.kind === "PUBLIC" &&
      sportunity.invited_circles &&
      sportunity.invited_circles.edges &&
      sportunity.invited_circles.edges.length > 0
    ) {
      sportunity.invited_circles.edges.forEach(edge => {
        if (
          edge.node.mode === "PUBLIC" &&
          (!user ||
            (user && edge.node.owner.id !== user.id &&
              edge.node.members.findIndex(member => user && member.id === user.id) < 0))
        ) {
          this.setState({
            showJoinCommunity: true,
            mainCommunityCircle: edge.node
          });
        }
      });
    }

    this.shouldDisplayCalendarSynchronizationTutorial();
  }

  componentWillReceiveProps = nextProps => {
    if (!isEqual(this.props.sportunity, nextProps.sportunity)) {
      const { sportunity, user } = nextProps;
      if (user) {
        let isOrganized = !!sportunity.organizers.find(
          item =>
            item &&
            item.organizer &&
            user &&
            item.organizer.id === user.id &&
            item.isAdmin
        );
        isOrganized =
          isOrganized ||
          !!sportunity.organizers.find(
            item =>
              item &&
              item.organizer &&
              user &&
              item.organizer.id === user.id &&
              item.permissions &&
              item.permissions.detailsAccess.edit
          );
        const isSecondaryOrganizer = !!sportunity.organizers.find(
          item =>
            item &&
            item.organizer &&
            user &&
            item.organizer.id === user.id &&
            !item.isAdmin
        );
        const isPotentialSecondaryOrganizer =
          sportunity.status.indexOf("Asked-CoOrganization") >= 0;
        let isParticipant = !!sportunity.participants.find(
          item => item && user && item.id === user.id
        );
        let isInvited = !!sportunity.invited.find(
          item =>
            item &&
            item.user &&
            user &&
            item.user.id === user.id &&
            item.answer === "WAITING"
        );
        let wasInvited = !!sportunity.invited.find(
          item => item && item.user && user && item.user.id === user.id
        );
        const cancel = sportunity.price && sportunity.price.cents > 0;
        let isOnWaitingList =
          sportunity.waiting &&
          !!sportunity.waiting.find(item => item && user && item.id === user.id);

        let isPotentialOpponent =
          user.profileType === "ORGANIZATION" &&
          sportunity.game_information &&
          sportunity.game_information.opponent &&
          (sportunity.game_information.opponent.lookingForAnOpponent ||
            (sportunity.game_information.opponent.invitedOpponents &&
              sportunity.game_information.opponent.invitedOpponents.edges &&
              sportunity.game_information.opponent.invitedOpponents.edges
                .length > 0 &&
              !!sportunity.game_information.opponent.invitedOpponents.edges[0].node.members.find(
                member => user && member.id === user.id
              ))) &&
          !sportunity.game_information.opponent.organizer &&
          !sportunity.game_information.opponent.organizerPseudo;

        if (isParticipant || isOnWaitingList) isInvited = false;

        this.setState({
          isOrganized,
          isParticipant,
          cancel,
          isInvited,
          wasInvited,
          isOnWaitingList,
          isPotentialOpponent,
          isSecondaryOrganizer,
          isPotentialSecondaryOrganizer
        });

        this.props.updateParticipantStatus(isParticipant);
        this.props.updateOrganizedStatus(isOrganized);
        this.props.updateUser(true);
        this.props.updateSportunity({
          title: sportunity.title,
          organizers: sportunity.organizers
        });
        if (this.props.chat) {
          this.props.updateChatId(this.props.chat.id);
        }
      } else {
        this.props.updateUser(false);
      }
    }
  };

  waitForDataSuperMe = superToken => {
    if (
      this.props.viewer &&
      this.props.viewer.superMe &&
      this.props.viewer.superMe.id &&
      this.props.viewer.authorizedAccounts &&
      this.props.viewer.authorizedAccounts.id
    ) {
      let accounts = [];

      if (
        this.props.viewer.superMe.subAccounts &&
        this.props.viewer.superMe.subAccounts.length > 0
      )
        this.props.viewer.superMe.subAccounts.forEach(subAccount => {
          accounts.push(subAccount);
        });

      if (
        this.props.viewer.authorizedAccounts.accounts &&
        this.props.viewer.authorizedAccounts.accounts.length > 0
      )
        this.props.viewer.authorizedAccounts.accounts.forEach(account => {
          if (accounts.findIndex(item => item.id === account.id) < 0)
            accounts.push(account);
        });

      if (
        accounts.findIndex(item => item.id === this.props.viewer.superMe.id) < 0
      )
        accounts.push({
          id: this.props.viewer.superMe.id,
          pseudo: this.props.viewer.superMe.pseudo,
          avatar: this.props.viewer.superMe.avatar,
          token: superToken
        });

      if (accounts.length > 1) {
        let mainOrganizer;
        this.props.sportunity.organizers.forEach(organizer => {
          if (organizer.isAdmin) mainOrganizer = organizer.organizer;
        });

        let organizerAccountIndex = accounts.findIndex(
          account => account.id === mainOrganizer.id
        );

        if (organizerAccountIndex >= 0) {
          this.setState({
            isAuthorizedAdmin: true
          });
        } else if (this.props.sportunity.kind === "PRIVATE") {
          accounts = accounts.filter(
            account =>
              this.props.sportunity.participants.findIndex(
                participant => participant.id === account.id
              ) >= 0 ||
              this.props.sportunity.waiting.findIndex(
                waiting => waiting.id === account.id
              ) >= 0 ||
              this.props.sportunity.willing.findIndex(
                willing => willing.id === account.id
              ) >= 0 ||
              this.props.sportunity.canceling.findIndex(
                canceling => canceling.canceling_user.id === account.id
              ) >= 0 ||
              this.props.sportunity.invited.findIndex(
                invited => invited.user.id === account.id
              ) >= 0 ||
              this.props.sportunity.organizers.findIndex(
                organizer => organizer.organizer.id === account.id
              ) >= 0
          );
          if (accounts.length > 0) {
            this.setState({
              displayAuthorizedAccountsPicker: true,
              authorizedAccounts: accounts
            });
          } else this.popOnPrivate();
        }
      } else if (this.props.sportunity.kind === "PRIVATE") {
        this.popOnPrivate();
      }
    } else {
      setTimeout(() => this.waitForDataSuperMe(superToken), 100);
    }
  };

  popOnPrivate = () => {
    Toast.show(I18n.t("sportunityToastSportunityIsPrivate"));
    setTimeout(() => {
      this.props.navigation.navigate("sportunityList");
    }, 0);
  };

  _handleSwitchAccountAndOpenUrl = token => {
    if (token) {
      this.props.navigation.goBack();
      setTimeout(() => {
        this.props.updateFrom("event/" + this.props.sportunity.id);
        this.props.updateToken(token);
        this.setState({
          displayAuthorizedAccountsPicker: false
        });
      }, 500);
    }
  };

  shouldDisplayCalendarSynchronizationTutorial = async () => {
    let neverShowCalendarSynchronizationAgain = false;
    if (!this.props.viewer || !this.props.user) return;

    try {
      neverShowCalendarSynchronizationAgain = await AsyncStorage.getItem(
        "neverShowCalendarSynchronizationAgain"
      );
    } catch (err) {
      console.log(err);
    }
    if (
      typeof neverShowCalendarSynchronizationAgain !== "undefined" &&
      neverShowCalendarSynchronizationAgain !== null
    ) {
    } else {
      setTimeout(() => {
        this.setState({ displayCalendarSynchronizationTutorial: true });
      }, 400);
    }
  };

  neverDisplayCalendarSynchronizationTutorialAgain = async () => {
    try {
      neverShowCalendarSynchronizationAgain = await AsyncStorage.setItem(
        "neverShowCalendarSynchronizationAgain",
        JSON.stringify(true)
      );
    } catch (err) {
      console.log(err);
    }
  };

  closeTutorial = neverDisplayTutorialAgain => {
    this.setState({ displayCalendarSynchronizationTutorial: false });
    if (neverDisplayTutorialAgain)
      this.neverDisplayCalendarSynchronizationTutorialAgain();
  };

  cancelParticipation() {
    const cancel = !this.state.cancel;
    this.setState({ cancel });
  }

  goToUser = id => {
    const { sportunity, user } = this.props;

    let isOrganized = !!sportunity.organizers.find(
      item =>
        item && item.organizer && user && item.organizer.id === user.id && item.isAdmin
    );
    isOrganized =
      isOrganized ||
      !!sportunity.organizers.find(
        item =>
          item &&
          item.organizer &&
          user &&
          item.organizer.id === user.id &&
          item.permissions &&
          item.permissions.detailsAccess.edit
      );
    if (!user) {
      Toast.show(I18n.t("sportunityToastLoginProfile"));
      this.props.navigation.navigate("settings");
    } else if (isOrganized && user && user.id === id) {
      this.props.navigation.navigate("meProfile");
    } else {
      this.props.navigation.navigate("profile", { userId: id });
    }
  };

  confirmCancelParticipant = participant => {
    Alert.alert(
      I18n.t("sportunityCancelParticipantTitle"),
      I18n.t("sportunityCancelParticipantMessage").replace(
        "{0}",
        participant.pseudo
      ),
      [
        {
          text: I18n.t("sportunityCancelParticipantYes"),
          onPress: () => this.cancelParticipant(participant)
        },
        {
          text: I18n.t("sportunityCancelParticipantNo"),
          onPress: () => console.log("Cancel Pressed")
        }
      ]
    );
  };

  cancelParticipant = participant => {
    const { viewer, sportunity } = this.props;
    let params = {
      sportunityID: this.props.sportunity.id,
      sportunity: {
        canceling: participant.id
      }
    };

    CancelParticipantSportunity.commit(
      params,
      () => {
        Toast.show(I18n.t("sportunityCancelParticipantSuccess"));
      },
      () => {
        console.error(error.getError());
      }
    );
  };

  addParticipants = users => {
    let params = {
      sportunityID: this.props.sportunity.id,
      participants: users.map(user => ({ participantId: user.id }))
    };

    OrganizerAddParticipantsMutation.commit(
      params,
      () => {
        Toast.show(I18n.t("updateSuccess"));
      },
      error => {
        console.error(error.getError());
      }
    );
  };

  refuseInvitation = () => {
    const { viewer, user, sportunity } = this.props;
    let params = {
      sportunityID: sportunity.id,
      sportunity: {
        invited: {
          user: user.id,
          answer: "NO"
        }
      }
    };
    this.props.updateLoadingStatus(true);

    RefuseInvitationMutation.commit(
      params,
      () => {
        Toast.show(I18n.t("sportunityToastRefuseInvitationSuccess"));
        this.props.updateLoadingStatus(false);
        this.props.navigation.goBack();
      },
      error => {
        Toast.show(I18n.t("sportunityToastRefuseInvitationFail"));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
        this.props.updateLoadingStatus(false);
      }
    );
  };

  deleteSportunity = () => {
    Alert.alert(
      I18n.t("sportunityDeleteTitle"),
      I18n.t("sportunityDeleteMessage"),
      [
        {
          text: I18n.t("sportunityCancelParticipantYes"),
          onPress: () => {
            const { viewer, user, sportunity } = this.props;
            let params = {
              sportunityID: sportunity.id
            };
            this.props.updateLoadingStatus(true);

            DeleteSportunityMutation.commit(
              params,
              () => {
                Toast.show(I18n.t("sportunityDeleteSuccess"));
                this.props.updateLoadingStatus(false);
                globals.object("refetchEvents").call("refetchEvents");
                this.props.navigation.navigate("sportunityList");
              },
              error => {
                Toast.show(I18n.t("sportunityToastRefuseInvitationFail"));
                let errors = JSON.parse(error.getError().source);
                console.log(errors.errors[0].message);
                this.props.updateLoadingStatus(false);
              }
            );
          }
        },
        { text: I18n.t("sportunityCancelParticipantNo"), onPress: () => {} }
      ]
    );
  };

  refuseCoOrganization = () => {
    const { viewer, user, sportunity } = this.props;

    let pendingOrganizer = sportunity.pendingOrganizers.find(pendingOrg => {
      return (
        pendingOrg.circles &&
        pendingOrg.circles.edges &&
        pendingOrg.circles.edges.length > 0 &&
        pendingOrg.circles.edges.findIndex(
          edge =>
            edge.node.members.findIndex(member => user.id === member.id) >= 0
        ) >= 0
      );
    });

    let params = {
      sportunityID: sportunity.id,
      pendingOrganizerID: pendingOrganizer.id
    };
    this.props.updateLoadingStatus(true);

    SecondaryOrganizerRefuseRole.commit(
      params,
      () => {
        Toast.show(I18n.t("sportunityAlertRefuseCoOrganizationSuccess"));
        this.props.updateLoadingStatus(false);
        this.props.navigation.goBack();
      },
      error => {
        Toast.show(I18n.t("sportunityToastRefuseInvitationFail"));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
        this.props.updateLoadingStatus(false);
      }
    );
  };

  displayStatFilling = () => {
    this.setState({
      displayStatFillingTab: true
    });
  };

  showTransformSurvey = () => {
    this.setState({ displayTransformSurveyModal: true });
  };

  transformSurvey = surveyDates => {
    this.props.updateLoadingStatus(true);
    this.setState({
      displayTransformSurveyModal: false
    });

    OrganizerPicksSurveyDateMutation.commit(
      {
        sportunityID: this.props.sportunity.id,
        beginning_date: surveyDates.beginning_date,
        ending_date: surveyDates.ending_date
      },
      () => {
        setTimeout(() => Toast.show(I18n.t("updateSuccess")), 200);
        this.props.updateLoadingStatus(false);
      },
      error => {
        Toast.show(I18n.t("sportunityToastRefuseInvitationFail"));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
        this.props.updateLoadingStatus(false);
      }
    );
  };

  getCircleType = type => {
    const memberTypeList = [
      { key: "ADULTS", label: I18n.t("circles_member_type_" + 0) },
      { key: "CHILDREN", label: I18n.t("circles_member_type_" + 1) },
      { key: "TEAMS", label: I18n.t("circles_member_type_" + 2) },
      { key: "CLUBS", label: I18n.t("circles_member_type_" + 3) },
      { key: "COMPANIES", label: I18n.t("circles_member_type_" + 4) }
    ];
    return memberTypeList.find(list => list.key === type).label;
  };

  addButtonRefsToDom = () => {
    const { sportunity, user, viewer, navigation } = this.props;
    const isLoggedIn = user !== null;

    return (
      <Fragment>
        {user && sportunity && sportunity.status !== "Past" && (
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
        )}
        {user && sportunity && (
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
        )}
      </Fragment>
    );
  };

  renderStats = () => {
    return (
      <EventStatistics
        sportunity={this.props.sportunity}
        viewer={this.props.viewer}
      />
    );
  };

  getCtaButtons = (isSurvey, isPast) => {
    let buttons = [];
    const { sportunity, user } = this.props;
    const isLoggedIn = user !== null;

    if (
      user &&
      sportunity &&
      sportunity.status !== "Past" &&
      sportunity.status !== "Cancelled" &&
      this.state.isOrganized
    ) {
      const updateButton = (index, borderStyle) => (
        <TouchableOpacity
          key={index}
          style={[styles.buttonCta, borderStyle]}
          onPress={() => this.ButtonUpdateSportunity.goToUpdateSingle()}
        >
          <Icon
            name="md-checkmark-circle"
            color={colors.green}
            size={16}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.updateButtonText}>{I18n.t("update")}</Text>
        </TouchableOpacity>
      );
      buttons.push(updateButton);
    }

    // if (sportunity && (sportunity.status === 'Past' || sportunity.status === 'Cancelled') && !this.state.isOrganized) {
    //   const feedbackButton = (borderStyle) => (
    //     <ButtonFeedback
    //       viewer={this.props.viewer}
    //       organizers={sportunity.organizers}
    //       venue={sportunity.venue}
    //       isOrganizer={this.state.isOrganized}
    //       isParticipant={this.state.isParticipant}
    //       navigation={this.props.navigation}
    //       renderButton={({ onPress, text }) => (
    //         <TouchableOpacity style={[styles.buttonCta, borderStyle]} onPress={onPress}>
    //           <Text style={styles.updateButtonText}>{text}</Text>
    //         </TouchableOpacity>
    //       )}
    //     />
    //   );
    //   buttons.push(feedbackButton);
    // }

    if (
      !(
        sportunity &&
        (sportunity.status === "Past" || sportunity.status === "Cancelled")
      )
    ) {
      const sportunityButton = borderStyle => (
        <ButtonSportunity
          onRef={ref => (this.ButtonSportunity = ref)}
          refetch={this.props.refetch}
          isOrganized={this.state.isOrganized}
          isSecondaryOrganizer={this.state.isSecondaryOrganizer}
          isPotentialSecondaryOrganizer={
            this.state.isPotentialSecondaryOrganizer
          }
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
          isLoading={this.props.isLoading}
          changeLoadingStatus={status => this.props.updateLoadingStatus(status)}
          navigation={this.props.navigation}
          updateFrom={this.props.updateFrom}
          renderButton={({ onPress, text, red }) => {
            if (typeof text === "function") {
              return <View>{text()}</View>;
            }

            const color = red ? colors.red : colors.green;
            const name = red ? "md-close-circle" : "md-checkmark-circle";
            return (
              <TouchableOpacity
                style={[styles.buttonCta, borderStyle]}
                onPress={onPress}
              >
                <Icon
                  name={name}
                  color={color}
                  size={16}
                  style={{ marginRight: 5 }}
                />
                <Text style={[styles.cancelButtonText, { color }]}>{text}</Text>
              </TouchableOpacity>
            );
          }}
        />
      );
      buttons.push(sportunityButton);
    }

    //

    if (sportunity.status.indexOf("Asked-CoOrganization") > -1) {
      const askedCoOrganizationButton = borderStyle => (
          <ButtonSportunity
              onRef={ref => (this.ButtonSportunity = ref)}
              refetch={this.props.refetch}
              isOrganized={false}
              isSecondaryOrganizer={false}
              isPotentialSecondaryOrganizer={
                this.state.isPotentialSecondaryOrganizer
              }
              potentialSecondaryOrganizer={this.state.potentialSecondaryOrganizer}
              serieOccurencesNumber={sportunity.number_of_occurences}
              isLoggedIn={isLoggedIn}
              status={sportunity && sportunity.status}
              isParticipant={false}
              isOnWaitingList={false}
              isInvited={false}
              wasInvited={false}
              isPotentialOpponent={false}
              isSurvey={isSurvey}
              showTransformSurvey={this.showTransformSurvey}
              viewer={this.props.viewer}
              sportunity={sportunity}
              user={this.props.user}
              isAuthorizedAdmin={this.state.isAuthorizedAdmin}
              isLoading={this.props.isLoading}
              changeLoadingStatus={status => this.props.updateLoadingStatus(status)}
              navigation={this.props.navigation}
              updateFrom={this.props.updateFrom}
              renderButton={({ onPress, text, red }) => {
                if (typeof text === "function") {
                  return <View>{text()}</View>;
                }

                const color = red ? colors.red : colors.green;
                const name = red ? "md-close-circle" : "md-checkmark-circle";
                return (
                    <TouchableOpacity
                        style={[styles.buttonCta, borderStyle]}
                        onPress={onPress}
                    >
                      <Icon
                          name={name}
                          color={color}
                          size={16}
                          style={{ marginRight: 5 }}
                      />
                      <Text style={[styles.cancelButtonText, { color }]}>{text}</Text>
                    </TouchableOpacity>
                );
              }}
          />
      );
      buttons.push(askedCoOrganizationButton);
    }

    //

    if (
      this.props.user &&
      sportunity &&
      (sportunity.status === "Past" || sportunity.status === "Cancelled") &&
      this.state.isOrganized
    ) {
      const reOrganizeButton = borderStyle => (
        <TouchableOpacity
          style={[styles.buttonCta, borderStyle]}
          onPress={() => this.ButtonReOrganizeSportunity.goToReOrganize()}
        >
          <Icon
            name="md-checkmark-circle"
            color={colors.green}
            size={16}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.updateButtonText}>{I18n.t("organizeAgain")}</Text>
        </TouchableOpacity>
      );
      buttons.push(reOrganizeButton);

      if (user.areStatisticsActivated && sportunity.status !== "Cancelled") {
        const completeStatsButton = borderStyle => (
          <TouchableOpacity
            onPress={this.displayStatFilling}
            style={[styles.buttonCta, borderStyle]}
          >
            <Image
              source={images.stats}
              style={{
                width: 16,
                height: 16,
                tintColor: colors.charcoal,
                marginRight: 5
              }}
            />
            <Text style={{ color: colors.charcoal }}>
              {I18n.t("fillSportunityStats")}
            </Text>
          </TouchableOpacity>
        );
        buttons.push(completeStatsButton);
      }
      if (sportunity.status === "Cancelled") {
        const completeStatsButton = borderStyle => (
          <TouchableOpacity
            style={[styles.buttonCta, borderStyle]}
            onPress={this.deleteSportunity}
          >
            <Icon
              name={"md-close-circle"}
              color={colors.red}
              size={16}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: colors.red }}>
              {I18n.t("sportunityDelete")}
            </Text>
          </TouchableOpacity>
        );
        buttons.push(completeStatsButton);
      }
    }

    if (
      sportunity &&
      sportunity.status !== "Past" &&
      sportunity.status !== "Cancelled" &&
      this.state.isInvited &&
      !isSurvey &&
      !this.state.isOrganized
    ) {
      const refuseButton = borderStyle => (
        <ButtonRefuseInvitation
          sportunity={sportunity}
          user={this.props.user}
          viewer={this.props.viewer}
          refuseInvitation={this.refuseInvitation}
          isInvited={this.state.isInvited}
          isLoading={this.props.isLoading}
          renderButton={({ text, onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              style={[styles.buttonCta, borderStyle]}
            >
              <Icon
                name={"md-close-circle"}
                color={colors.red}
                size={16}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.cancelButtonText}>{text}</Text>
            </TouchableOpacity>
          )}
        />
      );
      buttons.push(refuseButton);
    }

    if (sportunity && this.state.isPotentialSecondaryOrganizer && !isSurvey) {
      const refuseCoOrganizationButton = borderStyle => (
        <ButtonRefuseInvitation
          sportunity={sportunity}
          user={this.props.user}
          viewer={this.props.viewer}
          refuseInvitation={this.refuseCoOrganization}
          isCoOrganizer={true}
          isLoading={this.props.isLoading}
          renderButton={({ text, onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              style={[styles.buttonCta, borderStyle]}
            >
              <Icon
                name={"md-close-circle"}
                color={colors.red}
                size={16}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.cancelButtonText}>{text}</Text>
            </TouchableOpacity>
          )}
        />
      );
      buttons.push(refuseCoOrganizationButton);
    }

    return buttons;
  };

  renderCTAButtons = buttons => {
    const length = buttons.length;
    return (
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        {buttons.map((button, index) => {
          return button(index, {
            borderRightWidth: index % 2 || index === length - 1 ? 0 : 1,
            borderBottomWidth:
              length % 2 ? (index === length - 1 ? 0 : index < length - 1) : 1,
            width: length % 2 && index === length - 1 ? width : width / 2
          });
        })}
      </View>
    );
  };

  _handleUpdatePermissions = (id, permissions) => {
    const organizers = [];
    this.props.sportunity.organizers.map(i => {
      organizers.push({
        organizer: i.organizer.id,
        secondaryOrganizerType: i.secondaryOrganizerType
          ? i.secondaryOrganizerType.id
          : null,
        customSecondaryOrganizerType: i.customSecondaryOrganizerType,
        isAdmin: i.isAdmin,
        price: i.price,
        role: i.role,
        permissions: i.organizer.id === id ? permissions : i.permissions
      });
    });

    UpdateOrganizerPermissionsMutation.commit(
      {
        sportunityID: this.props.sportunity.id,
        sportunity: {
          organizers
        }
      },
      {
        onFailure: error => {
          Toast.show(I18n.t("updateFailed"));
        },
        onSuccess: response => {
          Toast.show(I18n.t("updateSuccess"));
        }
      }
    );
  };

  render() {
    const { status, sportunity, user, viewer, language } = this.props;
    
    const isLoggedIn = user !== null;
    const isSurvey =
      sportunity.survey &&
      !sportunity.survey.isSurveyTransformed &&
      sportunity.survey.surveyDates &&
      sportunity.survey.surveyDates.length > 0;

    const allOrganizers = get(sportunity, "organizers");
    const organizer = allOrganizers
      ? allOrganizers.find(user => user.isAdmin === true)
      : {};
    const coOrganizers = allOrganizers
      ? allOrganizers.filter(user => user.isAdmin === false)
      : [];
    const isPast = sportunity.status === "Past";

    let buttons = this.getCtaButtons(isSurvey, isPast);

    const isCoOrganizer =
      coOrganizers.findIndex(i => {
        return i.organizer && i.organizer.id && user && i.organizer.id === user.id;
      }) > -1;
    const coOrganizerCanView =
      coOrganizers.findIndex(i => {
        return (
          i.organizer &&
          i.organizer.id &&
          user &&
          i.organizer.id === user.id &&
          i.permissions &&
          i.permissions.detailsAccess &&
          i.permissions.detailsAccess.view
        );
      }) > -1;

    const coOrganizerCanEdit =
      coOrganizers.findIndex(i => {
        return (
          i.organizer &&
          i.organizer.id &&
          user &&
          i.organizer.id === user.id &&
          i.permissions &&
          i.permissions.detailsAccess &&
          i.permissions.detailsAccess.edit
        );
      }) > -1;

    if (isCoOrganizer && !coOrganizerCanView) {
      // Toast.show(I18n.t("sportunityToastNoAccessTab"));
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.snow,
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>{I18n.t("sportunityToastNoAccessTab")}</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.scrollView}>
        <TopContent
          showEventDetail
          onPress={() => {}}
          sportunity={sportunity}
          status={""}
          actitvityColor={"red"}
          viewer={viewer}
          user={user}
        />

        <Description
          sportunity={sportunity}
          status={status}
          potentialSecondaryOrganizer={this.state.potentialSecondaryOrganizer}
          user={user}
          language={language}
        />

        <Card>{this.renderCTAButtons(buttons)}</Card>

        <View style={{ height: 10 }} />

        <VoteForManOfTheGame
          viewer={viewer}
          sportunity={sportunity}
          isParticipant={this.state.isParticipant}
          isOrganized={this.state.isOrganized}
        />

        <View style={{ height: metrics.baseMargin }} />

        {this.state.showJoinCommunity && (
          <FormListItem
            title={this.state.mainCommunityCircle.name}
            subtitle={() => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {this.state.mainCommunityCircle.owner &&
                  this.state.mainCommunityCircle.owner.avatar ? (
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: this.state.mainCommunityCircle.owner.avatar
                      }}
                    />
                  ) : (
                    <Image style={styles.avatar} source={icons.profile_photo} />
                  )}
                  <Text style={styles.ownerName} numberOfLines={2}>
                    {this.state.mainCommunityCircle.owner.pseudo
                      ? this.state.mainCommunityCircle.owner.pseudo.length > 25
                        ? this.state.mainCommunityCircle.owner.pseudo.slice(
                            0,
                            25
                          ) + "..."
                        : this.state.mainCommunityCircle.owner.pseudo
                      : ""}
                  </Text>
                </View>
              );
            }}
            rightIcon={() => (
              <Button
                text={I18n.t("sportunyJoinUs")}
                onPress={() =>
                  this.props.navigation.navigate("circledetail", {
                    circleId: this.state.mainCommunityCircle.id,
                    hideNavBar: true
                  })
                }
              />
            )}
          />
        )}

        {isPast && (
          <Card style={{ marginBottom: 10 }}>{this.renderStats()}</Card>
        )}

        <EventAddressMap address={sportunity.address} />

        {sportunity.game_information &&
          sportunity.game_information.opponent &&
          (sportunity.game_information.opponent.organizer ||
            sportunity.game_information.opponent.organizerPseudo) &&
          (sportunity.game_information.opponent.organizer ? (
            <Opponent
              user={sportunity.game_information.opponent.organizer}
              goToUser={this.goToUser}
            />
          ) : (
            <Opponent
              user={{
                pseudo: sportunity.game_information.opponent.organizerPseudo
              }}
            />
          ))}
        {sportunity.game_information &&
          sportunity.game_information.opponent &&
          sportunity.game_information.opponent.unknownOpponent && (
            <Opponent unknown={true} />
          )}

        {organizer && (
          <Card style={{ borderTopWidth: 0, marginBottom: 0 }}>
            <FormListItem
              title={() => (
                <Text style={styles.organizerHeading}>
                  {I18n.t("organizer")}
                </Text>
              )}
              subtitle={() => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5
                  }}
                  onPress={() => this.goToUser(organizer.organizer.id)}
                >
                  {organizer.organizer.avatar ? (
                    <Image
                      style={styles.smallThumb}
                      source={{ uri: organizer.organizer.avatar }}
                    />
                  ) : (
                    <Image
                      style={[styles.smallThumb, { tintColor: colors.grey }]}
                      source={images.red_user}
                    />
                  )}
                  <Text style={styles.subtitleText} numberOfLines={1}>
                    {organizer.organizer.pseudo}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Card>
        )}

        {coOrganizers.length > 0 && (
          <Card style={{ borderTopWidth: 0, marginBottom: 0 }}>
            <FormListItem
              title={() => (
                <Text style={styles.organizerHeading}>
                  {I18n.t("coOrganizer")}
                </Text>
              )}
              subtitle={() => (
                <Fragment>
                  {coOrganizers.map((item, index) => (
                    <View style={styles.row}>
                      <TouchableOpacity
                        key={index}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 5
                        }}
                        onPress={() => this.goToUser(item.organizer.id)}
                      >
                        {item.organizer.avatar ? (
                          <Image
                            style={styles.smallThumb}
                            source={{ uri: item.organizer.avatar }}
                          />
                        ) : (
                          <Image
                            style={[
                              styles.smallThumb,
                              { tintColor: colors.grey }
                            ]}
                            source={images.red_user}
                          />
                        )}
                        <Text style={styles.subtitleText} numberOfLines={1}>
                          {item.organizer.pseudo} -{" "}
                          {get(item, "secondaryOrganizerType.name.EN")}
                        </Text>
                      </TouchableOpacity>
                      {this.state.isOrganized && (
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate(
                              "coOrganizerPermissions",
                              {
                                selectedPermissions: item.permissions,
                                organizer: item.organizer,
                                onValidate: (id, permissions) => {
                                  this._handleUpdatePermissions(
                                    id,
                                    permissions
                                  );
                                }
                              }
                            );
                          }}
                        >
                          <Image
                            style={{ width: 30, height: 30, marginLeft: 20 }}
                            source={images.cog}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                </Fragment>
              )}
            />
          </Card>
        )}

        {(this.state.isOrganized || this.state.isParticipant) &&
          sportunity.compositions.length > 0 && (
            <Compositions
              sportunity={sportunity}
              isOrganizer={this.state.isOrganized}
              isParticipant={this.state.isParticipant}
            />
          )}

        <View style={{ height: metrics.doubleBaseMargin }} />

        <Modal
          isModalVisible={this.state.displayStatFillingTab}
          openCloseModal={() =>
            this.setState({
              displayStatFillingTab: !this.state.displayStatFillingTab
            })
          }
          title={I18n.t("fillSportunityStats")}
        >
          <StatisticFillingModal
            sportunity={sportunity}
            viewer={viewer}
            isPast={sportunity.status === "Past"}
            onClose={() => this.setState({ displayStatFillingTab: false })}
              refetchMain={this.props.refetch}
          />
        </Modal>

        {this.addButtonRefsToDom()}
      </ScrollView>
    );
  }
}

EventDetailInfo.propTypes = {
  viewer: PropTypes.object.isRequired,
  user: PropTypes.object,
  status: PropTypes.object.isRequired,
  isParticipantsModalVisible: PropTypes.bool.isRequired,
  updateParticipantsModal: PropTypes.func.isRequired,
  selectedKind: PropTypes.string.isRequired
};

const stateToProps = state => ({
  status: state.sportunityActivity.status,
  isParticipantsModalVisible:
    state.sportunityActivity.isParticipantsModalVisible,
  selectedKind: state.sportunityList.selectedKind,
  isLoading: state.sportunityActivity.isLoading,
  language: state.sportunityLocale.language,

  isParticipant: state.sportunityDetails.isParticipant,
  isOrganized: state.sportunityDetails.isOrganized,
  chatId: state.sportunityDetails.chatId
});

const dispatchToProps = dispatch => ({
  updateParticipantsModal: status => dispatch(updateParticipantsModal(status)),
  updateLoadingStatus: status => dispatch(updateLoadingStatus(status)),
  updateFrom: status => dispatch(updateFrom(status)),

  updateParticipantStatus: status => dispatch(updateParticipantStatus(status)),
  updateOrganizedStatus: status => dispatch(updateOrganizedStatus(status)),
  updateChatId: status => dispatch(updateChatId(status)),
  updateUser: status => dispatch(updateUser(status)),
  updateSportunity: status => dispatch(updateSportunity(status)),
  resetSportunityDetails: status => dispatch(resetSportunityDetails(status))
});

export default createRefetchContainer(
  connect(
    stateToProps,
    dispatchToProps
  )(EventDetailInfo),
  {
    viewer: graphql`
      fragment EventDetailInfo_viewer on Viewer
        @argumentDefinitions(
          sportunityRelaunchId: { type: "String!", defaultValue: "" }
          queryRelaunch: { type: "Boolean" }
          superToken: { type: "String" }
          querySuperMe: { type: "Boolean", defaultValue: false }
          userToken: { type: "String" }
          queryAuthorizedAccounts: { type: "Boolean", defaultValue: false }
        ) {
        ...VoteForManOfTheGame_viewer
        ...PriceView_viewer
        ...ButtonSportunity_viewer
        ...ParticipantsList_viewer
        ...ButtonFeedback_viewer
        ...StatisticFillingModal_viewer
        ...EventStatistics_viewer
        ...TopContent_viewer
        relaunchInviteds(sportunityID: $sportunityRelaunchId)
          @include(if: $queryRelaunch) {
          id
        }
        authorizedAccounts(userToken: $userToken)
          @include(if: $queryAuthorizedAccounts) {
          id
          avatar
          pseudo
          accounts {
            id
            avatar
            token
            pseudo
          }
        }
        superMe(superToken: $superToken) @include(if: $querySuperMe) {
          id
          pseudo
          avatar
          subAccounts {
            id
            avatar
            pseudo
            token
          }
        }
      }
    `,
    user: graphql`
      fragment EventDetailInfo_user on User {
        ...ButtonSportunity_user
        ...ParticipantsList_user
        ...TopContent_user
        id
        avatar
        pseudo
        areStatisticsActivated
        profileType
        calendar {
          users {
            id
          }
          sportunities(last: 1000) {
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
      fragment EventDetailInfo_sportunity on Sportunity {
        ...Header_sportunity
        ...StatusView_sportunity
        ...DescriptionView_sportunity
        ...DateSportunity_sportunity
        ...AdvancedSettingsView_sportunity
        ...PriceView_sportunity
        ...StatisticFillingModal_sportunity
        ...EventStatistics_sportunity

        ...SurveyView_sportunity
        ...SurveyModal_sportunity

        ...Compositions_sportunity
        ...ButtonSportunity_sportunity
        ...VoteForManOfTheGame_sportunity
        ...TopContent_sportunity
        id
        title
        description
        status
        survey {
          isSurveyTransformed
          surveyDates {
            beginning_date
            ending_date
          }
        }
        participants {
          id
          pseudo
          avatar
        }
        ageRestriction {
          from
          to
        }
        sexRestriction
        participantRange {
          from
          to
        }
        waiting {
          id
          pseudo
          avatar
        }
        willing {
          id
          pseudo
          avatar
        }
        canceling {
          canceling_user {
            id
            pseudo
            avatar
          }
          status
          cancelation_date
        }
        invited {
          user {
            ...UserCard_user
            id
            pseudo
            avatar
          }
          answer
        }
        paymentStatus {
          user {
            id
          }
          status
          price {
            cents
            currency
          }
        }
        invited_circles(last: 100) {
          edges {
            node {
              id
              name
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
            cents
            currency
          }
          participantByDefault
        }
        sport {
          allLevelSelected
          sport {
            id
            logo
            name {
              EN
            }
          }
          levels {
            id
            EN {
              name
              skillLevel
            }
            FR {
              name
              skillLevel
            }
          }
          positions {
            id
            EN
          }
          certificates {
            id
            name {
              EN
            }
          }
        }
        kind
        beginning_date
        ending_date
        number_of_occurences
        is_repeated_occurence_number
        hide_participant_list

        price {
          cents
          currency
        }
        fees
        address {
          address
          country
          city
          zip
          position {
            lat
            lng
          }
          ...DetailCellItem_address
        }
        venue {
          feedbacks {
            count
          }
          id
          name
          address {
            address
            city
            country
          }
          ...ButtonFeedback_venue
        }
        infrastructure {
          id
          name
          logo
        }
        slot {
          id
          from
          end
          price {
            cents
            currency
          }
        }
        compositions {
          id
        }
        organizers {
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
          organizer {
            id
            pseudo
            sportunityNumber
            avatar
            feedbacks {
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
            followers {
              id
            }
          }
          permissions {
            detailsAccess {
              view
              edit
            }
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
            compositionAccess {
              view
              edit
            }
          }
          ...ButtonFeedback_organizers
        }
        pendingOrganizers {
          id
          circles(last: 20) {
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
          notification_type
          send_notification_x_days_before
          last_post
        }
        privacy_switch_preference {
          privacy_switch_type
          switch_privacy_x_days_before
        }
        sportunityType {
          id
        }
        game_information {
          opponent {
            organizer {
              id
              pseudo
              avatar
            }
            organizerPseudo
            lookingForAnOpponent
            unknownOpponent
            invitedOpponents(last: 5) {
              edges {
                node {
                  id
                  name
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
    `
  },
  graphql`
    query EventDetailInfoRefetchQuery(
      $sportunityRelaunchId: String!
      $queryRelaunch: Boolean!
      $superToken: String
      $querySuperMe: Boolean!
      $userToken: String
      $queryAuthorizedAccounts: Boolean!
    ) {
      viewer {
        ...EventDetailInfo_viewer
          @arguments(
            sportunityRelaunchId: $sportunityRelaunchId
            queryRelaunch: $queryRelaunch
            superToken: $superToken
            querySuperMe: $querySuperMe
            userToken: $userToken
            queryAuthorizedAccounts: $queryAuthorizedAccounts
          )
      }
    }
  `
);

I18n.fallbacks = true;
I18n.translations = translations;

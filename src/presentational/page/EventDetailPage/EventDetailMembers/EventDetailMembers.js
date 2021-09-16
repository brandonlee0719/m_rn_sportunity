import React, { Component } from "react";
import PropTypes from "prop-types";
import PureComponent from "sportunity/src/lib/PureComponent";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import ActionButton from "react-native-action-button";
import I18n from "react-native-i18n";
import { isEqual } from "lodash";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from "react-native-vector-icons/FontAwesome";
import get from "lodash/get";
import {View, ScrollView, Alert, AsyncStorage, Platform, Image, Dimensions, Modal, TouchableOpacity} from "react-native";
import Text from "react-native-text";
import {cloneDeep} from 'lodash'

import {updateParticipantsModal, updateLoadingStatus} from "../../../../action/sportunityAction";
import { updateFrom } from "sportunity/src/action/profileActions";

import AddUserModal from "sportunity/src/presentational/AddUser";
import Heading from "../../NewActivityPage/Heading";
import AddParticipants from "../ParticipantsList/AddParticipants";
import getMemberTabs from "./memberTabsConfig";
import { metrics, colors, images } from "../../../../theme/index.js";
import Card from "../../../UI/Card.js";
import FormListItem from "../../../UI/FormListItem.js";
import { styles } from "../styles";
import SearchModule from "../../SearchModule";
import MemberTabs from "./MemberTabs";
import translations from "sportunity/src/translations.js";
import PriceModal from '../../NewActivityPage/Price/PriceModal/PriceModal'

import CancelParticipantSportunity from "../mutation/CancelParticipantSportunity.js";
import OrganizerAddParticipantsMutation from "../ParticipantsList/AddParticipants/OrganizerAddParticipantsMutation";
import OrganizerAddInvitedsMutation from "../ParticipantsList/AddParticipants/OrganizerAddInvitedsMutation";
import OrganizerAddInvitedGroupsMutation from "../ParticipantsList/AddParticipants/OrganizerAddCircleMutation";
import OrganizerAddOrRemoveInvitedCircleMutation from '../mutation/OrganizerAddOrRemoveInvitedCircleMutation';

class EventDetailMembers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isParticipant: false,
      isOnWaitingList: false,
      cancel: false,
      isOrganized: false, // this is true when the viewer is the main admin or permissions.memberAccess.edit = true
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
      displayAddParticipantModal: false,
      displayAddInvitedModal: false,
      displayAddGroupModal: false,
      displayGroupPricesModal: false,
      selectedCircles: [],
      pricesForCircles: []
    };
  }

  async componentDidMount() {
    const { sportunity, user } = this.props;

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
            item.permissions.memberAccess.edit
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
              item.permissions.memberAccess.edit
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
      }
    }
  };

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
          item.permissions.memberAccess.edit
      );
    if (!user) {
      Toast.show(I18n.t("sportunityToastLoginProfile"));
      this.props.navigation.navigate("settings");
    } 
    else if (isOrganized && user && user.id === id) {
      this.props.navigation.navigate("meProfile");
    } 
    else {
      this.props.navigation.navigate("profile", { userId: id });
    }
  };

  displayAddGroupModal = () => {
    const { sportunity, user } = this.props;

    this.setState({
      selectedCircles: sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.map(edge => edge.node),
      pricesForCircles: sportunity.price_for_circle.map(pfc => ({
        circle: pfc.circle, 
        price: {cents: pfc.price.cents / 100, currency: pfc.price.currency},
        participantByDefault: pfc.participantByDefault,
        excludedParticipantByDefault: pfc.excludedParticipantByDefault
      })),
      displayAddGroupModal: true
    })
  }

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
    this.setState({ displayAddParticipantModal: false });

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

  addParticipant = user => {
    this.setState({ displayAddParticipantModal: false });

    let params = {
      sportunityID: this.props.sportunity.id,
      participants: [{ participantId: user.id }]
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

  addInvitee = user => {
    this.setState({ displayAddInvitedModal: false });

    let params = {
      sportunityID: this.props.sportunity.id,
      inviteds: [{ invitedId: user.id }]
    };

    OrganizerAddInvitedsMutation.commit(
      params,
      () => {
        Toast.show(I18n.t("updateSuccess"));
      },
      error => {
        console.error(error.getError());
      }
    );
  };

  addGroup = group => {
    let selectedCircles = cloneDeep(this.state.selectedCircles);
    let pricesForCircles = cloneDeep(this.state.pricesForCircles); 

    let index = selectedCircles.findIndex(c => c.id === group.id);
    let priceIndex = pricesForCircles.findIndex(p => p.circle.id === group.id);

    if (index >= 0) {
      selectedCircles.splice(index, 1);

      if (priceIndex >= 0) {
        pricesForCircles.splice(priceIndex, 1)
      }
    }
    else {
      selectedCircles.push(group)
      if (priceIndex < 0) {
        pricesForCircles.push({
          circle: group, 
          price: {cents: 0, currency: this.props.sportunity.price.currency},
          participantByDefault: false,
          excludedParticipantByDefault: []
        })
      }
    }

    this.setState({
      selectedCircles,
      pricesForCircles
    })
  };

  validAddGroup = () => {
    if (this.state.selectedCircles.length > 0) {
      this.setState({ displayAddGroupModal: false, displayGroupPricesModal: true });      
    }
    else {
      this.setState({ displayAddGroupModal: false });
      this.updateGroupInvitations()
    }
  }

  updateInvitedCirclesAndPrices = ({index, value}) => {
    let updatedPrices = cloneDeep(this.state.pricesForCircles);
    updatedPrices[index] = value ;
    this.setState({
      pricesForCircles: updatedPrices
    })
  }

  updateGroupInvitations = () => { 
    let updateInvitedCirclesVar = cloneDeep(this.state.selectedCircles).map(c => c.id) ;

    let updatePriceForCircleVar = cloneDeep(this.state.pricesForCircles)
      .filter(pfc => updateInvitedCirclesVar.findIndex(c => c === pfc.circle.id) >= 0)
      .map(pfc => ({
        circle: pfc.circle.id,
        price: {cents: pfc.price.cents * 100, currency: pfc.price.currency},
        participantByDefault: pfc.price.cents === 0 ? pfc.participantByDefault : false, 
        excludedParticipantByDefault: pfc.excludedParticipantByDefault
      })) ; 

    let params = {
      sportunity: this.props.sportunity,
      updateInvitedCirclesVar: updateInvitedCirclesVar,
      updatePriceForCircleVar: updatePriceForCircleVar
    };

    OrganizerAddOrRemoveInvitedCircleMutation.commit(
      params,
      () => {
        Toast.show(I18n.t("updateSuccess"));
      },
      error => {
        //console.error(JSON.stringify(error));
      }
    );
  }

  confirmRemoveGroup = circle => {
    Alert.alert(
      I18n.t("sportunityCancelInvitedCircleTitle"),
      I18n.t("sportunityCancelInvitedCircleMessage").replace(
        "{0}",
        circle.name
      ),
      [
        {
          text: I18n.t("sportunityCancelParticipantYes"),
          onPress: () => this.removeGroup(circle)
        },
        {
          text: I18n.t("sportunityCancelParticipantNo"),
          onPress: () => {}
        }
      ]
    );
  }

  removeGroup = circle => {
    let updateInvitedCirclesVar = this.props.sportunity.invited_circles.edges.map(edge => edge.node.id) ;
    let invitedCirclesIndex = updateInvitedCirclesVar.findIndex(u => u === circle.id);

    if (invitedCirclesIndex >= 0) {
      updateInvitedCirclesVar.splice(invitedCirclesIndex, 1)
    }

    let updatePriceForCircleVar = this.props.sportunity.price_for_circle.map(price_for_circle => ({
      circle: price_for_circle.circle.id,
      price: price_for_circle.price,
      participantByDefault: price_for_circle.participantByDefault, 
      excludedParticipantByDefault: price_for_circle.excludedParticipantByDefault
    })) ; 
    let priceForCircleIndex = updatePriceForCircleVar.findIndex(u => u.circle === circle.id)
    
    if (priceForCircleIndex >= 0) {
      updatePriceForCircleVar.splice(priceForCircleIndex, 1)
    }

    let params = {
      sportunity: this.props.sportunity,
      updateInvitedCirclesVar: updateInvitedCirclesVar,
      updatePriceForCircleVar: updatePriceForCircleVar
    };

    OrganizerAddOrRemoveInvitedCircleMutation.commit(
      params,
      () => {
        Toast.show(I18n.t("updateSuccess"));
      },
      error => {
        //console.error(JSON.stringify(error));
      }
    );
  };

  render() {
    const { sportunity, user, viewer, language } = this.props;

    const {
      isOrganized,
      isParticipant,
      isOnWaitingList,
      isInvited,
      wasInvited
    } = this.state;
    const isLoggedIn = user !== null;
    const isPast = sportunity.status === "Past";
    const isCancelled = !!sportunity.cancel_date;

    const mainOrganizer = sportunity.organizers.find(
      organizer => organizer.isAdmin
    );

    const memberTabsOptions = {
      sportunity,
      goToUser: this.goToUser,
      cancelParticipant: this.confirmCancelParticipant,
      isOrganized,
      isPast,
      isParticipant,
      isOnWaitingList,
      isInvited,
      wasInvited
    };

    const allOrganizers = get(sportunity, "organizers");
    const organizer = allOrganizers
      ? allOrganizers.find(user => user.isAdmin === true)
      : {};
    const coOrganizers = allOrganizers
      ? allOrganizers.filter(user => user.isAdmin === false)
      : [];
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
          i.permissions.memberAccess &&
          i.permissions.memberAccess.view
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
          i.permissions.memberAccess &&
          i.permissions.memberAccess.edit
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

    const invitedGroups = get(sportunity, "invited_circles.edges");

    const { width } = Dimensions.get("window");

    return (
      <View
        style={{ flex: 1, backgroundColor: colors.snow, position: "relative" }}
      >
        <ScrollView
          style={{ backgroundColor: colors.snow }}
          contentContainerStyle={{}}
        >
          <View style={{ flex: 1 }}>
            {!invitedGroups || (invitedGroups.length === 0 && (
              <Heading text={I18n.t("sportunyMembers")} />
            ))}

            {invitedGroups && invitedGroups.length > 0 && (
              <Card style={{ marginBottom: metrics.baseMargin }}>
                <Heading
                  text={
                    mainOrganizer === "PERSON"
                      ? I18n.t("sportunyInvitedGroups")
                      : I18n.t("sportunitySummonedGroups")
                  }
                  color={colors.skyBlue}
                />
                {invitedGroups.map((item, index) => (
                  <FormListItem
                    key={index}
                    leftIcon={() => (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: metrics.baseMargin
                        }}
                      >
                        <Image
                          source={images.sportunity_group}
                          style={{ height: 40, width: 40 }}
                        />
                      </View>
                    )}
                    title={({ titleStyle }) => (
                      <View style={{ flex: 2 }}>
                        <Text numberOfLines={2} style={titleStyle}>
                          {item.node.name}
                        </Text>
                      </View>
                    )}
                    subtitle={() => (
                      <View style={{ flex: 2 }}>
                        <Text style={styles.formListSubtitle}>
                          {item.node.type}
                        </Text>
                        <Text
                          style={[styles.formListSubtitle, { marginTop: 2 }]}
                        >
                          {item.node.memberCount} {I18n.t("sportunyMembers")}
                        </Text>
                      </View>
                    )}
                    rightIcon={() => (
                      <View style={{ flex: 1 }}>
                        <Text style={styles.subtitleText}>
                          {item.node.mode}
                        </Text>
                        {isOrganized && !!sportunity.price_for_circle.find(pfc => pfc.circle.id === item.node.id) &&
                          <View style={{marginTop: 5}}>
                            <Text style={styles.subtitleText}>
                              {sportunity.price_for_circle.find(pfc => pfc.circle.id === item.node.id).price.cents === 0
                              ? I18n.t('free')
                              : sportunity.price_for_circle.find(pfc => pfc.circle.id === item.node.id).price.cents / 100 + ' ' + sportunity.price_for_circle.find(pfc => pfc.circle.id === item.node.id).price.currency}
                            </Text>
                          </View>
                        }
                        {isOrganized && 
                          <TouchableOpacity onPress={() => this.confirmRemoveGroup(item.node)} style={{alignSelf: 'flex-end', marginTop: 10, marginRight: 5}}>
                            <MaterialIcon name="close" size={25} color={colors.charcoal} />
                          </TouchableOpacity>
                        }
                      </View>
                    )}
                  />
                ))}
              </Card>
            )}

            <View style={{ height: 1, backgroundColor: colors.lightGrey }} />

            <MemberTabs
              sportunity={sportunity}
              goToUser={this.goToUser}
              cancelParticipant={this.confirmCancelParticipant}
              isOrganized={isOrganized}
              isPast={isPast}
              isParticipant={isParticipant}
              isOnWaitingList={isOnWaitingList}
              isInvited={isInvited}
              wasInvited={wasInvited}
            />

            <View style={{ height: metrics.baseMargin }} />

            {(this.state.displayAddParticipantModal ||
              this.state.displayAddInvitedModal ||
              this.state.displayAddGroupModal) && (
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={
                  this.state.displayAddParticipantModal ||
                  this.state.displayAddInvitedModal ||
                  this.state.displayAddGroupModal
                }
                onRequestClose={() =>
                  this.setState({
                    displayAddParticipantModal: false,
                    displayAddInvitedModal: false,
                    displayAddGroupModal: false
                  })
                }
              >
                <SearchModule
                  from="invite-from-event"
                  viewer={viewer}
                  inviteToEvent
                  onClose={() =>
                    this.setState({
                      displayAddParticipantModal: false,
                      displayAddInvitedModal: false,
                      displayAddGroupModal: false
                    })
                  }
                  openOnTab={"Groups"}
                  hideTabs={
                    this.state.displayAddParticipantModal ||
                    this.state.displayAddInvitedModal
                      ? ["Activities"]
                      : ["Activities", "People"]
                  }
                  selectUser={
                    this.state.displayAddParticipantModal
                      ? this.addParticipant
                      : this.addInvitee
                  }
                  selectCircle={this.addGroup}
                  selectedCircles={this.state.selectedCircles}
                  onNextButton={this.validAddGroup}
                  showMembersOnSelectCircle={
                    this.state.displayAddParticipantModal ||
                    this.state.displayAddInvitedModal
                  }
                  types={["ADULTS", "CHILDREN"]}
                  circleTypes={[
                    "MY_CIRCLES",
                    "CIRCLES_I_AM_IN",
                    "CHILDREN_CIRCLES",
                    "PUBLIC_CIRCLES"
                  ]}
                  userType={"PERSON"}
                  queryOnOpen={true}
                />
              </Modal>
            )}
            {this.state.displayGroupPricesModal&& (
              <PriceModal
                isPriceModalVisible={this.state.displayGroupPricesModal}
                updatePriceModal={value => this.setState({displayGroupPricesModal: value})}
                viewer={viewer} 
                invitedCircles={this.state.selectedCircles}
                invitedCirclesAndPrices={this.state.pricesForCircles}
                updateInvitedCirclesAndPrices={this.updateInvitedCirclesAndPrices}
                sportunityCreation={false}
                validation={this.updateGroupInvitations}
              />
            )}

          </View>
        </ScrollView>
        {isOrganized && !isCancelled && (
          <ActionButton
            size={50}
            buttonColor={colors.skyBlue}
            style={[
              Platform.OS === "android" ? { elevation: 2, zIndex: 10000 } : {}
            ]}
          >
            {!isPast && (
              <ActionButton.Item
                size={35}
                buttonColor={colors.skyBlue}
                title={I18n.t("sportunityAddGroup")}
                onPress={this.displayAddGroupModal}
              >
                <Image
                  source={images.sportunity_group}
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: colors.snow,
                    marginBottom: 2
                  }}
                />
              </ActionButton.Item>
            )}
            {!isPast && (
              <ActionButton.Item
                size={35}
                buttonColor={colors.skyBlue}
                title={I18n.t("sportunityAddInvitee")}
                onPress={() => this.setState({ displayAddInvitedModal: true })}
              >
                <FAIcon
                  name="user-plus"
                  style={{
                    fontSize: 20,
                    height: 22,
                    color: colors.snow
                  }}
                />
              </ActionButton.Item>
            )}
            <ActionButton.Item
              size={35}
              buttonColor={colors.skyBlue}
              title={I18n.t("sportunityAddGoingParticipants")}
              onPress={() =>
                this.setState({ displayAddParticipantModal: true })
              }
            >
              <Icon
                name="md-add"
                style={{
                  fontSize: 20,
                  height: 22,
                  color: colors.snow
                }}
              />
            </ActionButton.Item>
          </ActionButton>
        )}
      </View>
    );
  }
}

EventDetailMembers.propTypes = {
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
  language: state.sportunityLocale.language
});

const dispatchToProps = dispatch => ({
  updateParticipantsModal: status => dispatch(updateParticipantsModal(status)),
  updateLoadingStatus: status => dispatch(updateLoadingStatus(status)),
  updateFrom: status => dispatch(updateFrom(status))
});

export default createRefetchContainer(
  connect(
    stateToProps,
    dispatchToProps
  )(EventDetailMembers),
  {
    viewer: graphql`
      fragment EventDetailMembers_viewer on Viewer
        @argumentDefinitions(
          sportunityRelaunchId: { type: "String!", defaultValue: "" }
          queryRelaunch: { type: "Boolean" }
        ) {
        ...VoteForManOfTheGame_viewer
        ...PriceView_viewer
        ...ButtonSportunity_viewer
        ...SearchModule_viewer
        ...ButtonFeedback_viewer
        ...StatisticFillingModal_viewer
        ...PriceModal_viewer
        relaunchInviteds(sportunityID: $sportunityRelaunchId)
          @include(if: $queryRelaunch) {
          id
        }
      }
    `,
    user: graphql`
      fragment EventDetailMembers_user on User {
        ...ButtonSportunity_user
        id
        avatar
        pseudo
        email
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
      fragment EventDetailMembers_sportunity on Sportunity {
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
        cancel_date
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
            profileType
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
    query EventDetailMembersRefetchQuery(
      $sportunityRelaunchId: String!
      $queryRelaunch: Boolean!
    ) {
      viewer {
        ...EventDetailMembers_viewer
          @arguments(
            sportunityRelaunchId: $sportunityRelaunchId
            queryRelaunch: $queryRelaunch
          )
      }
    }
  `
);

I18n.fallbacks = true;
I18n.translations = translations;

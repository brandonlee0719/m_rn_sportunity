import React, { Component } from "react";
import { createRefetchContainer, graphql } from "react-relay";
import {
  Modal,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Switch,
  ScrollView
} from "react-native";
import Input, { inputStyles } from "../../../../Input";
import Text from "react-native-text";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalPicker from "react-native-modal-selector";

import {
  addCoOrganizer,
  removeCoOrganizer,
  updateCoOrganizerModal
} from "sportunity/src/action/newActivityActions";

import FloatingMenu from "../../../../Button/FloatingMenu";
import Button from "../../../../Button/roundedButton";
import Add from "../../../../Button/Add";
import icons from "sportunity/src/theme/images";
import style from "./style";
import buttonStyle from "../style";
//import PlaceList from './PlaceList/PlaceList.js';
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import { colors } from "sportunity/src/theme";
import { AdministratorPermissions } from "../administratorPermissions";
import { CustomizedPermissions } from "../customizedPermissionsModal";

import SearchModule from "../../../SearchModule";

const CoOrganizerItem = ({ index, coOrganizer, removeOrganizer, onEditOrganizer }) => {
  return (
    <View style={buttonStyle.container} key={index}>
      {coOrganizer.circles && coOrganizer.circles.length > 0 
      ? <TouchableOpacity style={buttonStyle.subContainer} onPress={onEditOrganizer}>
          <View style={style.itemRow}>
            <ImageBackground
              style={style.image}
              source={icons.sportunity_group}
            >
              <Text style={style.members}>
                {coOrganizer.circles.reduce((a, b) => a + b.memberCount, 0)}
              </Text>
            </ImageBackground>
            <View style={style.column}>
              <Text style={buttonStyle.text}>
                {I18n.t("coOrganizerAccessLevel") + ": "}
                {JSON.stringify(coOrganizer.permissions) === JSON.stringify(AdministratorPermissions)
                ? I18n.t("Administrator")
                : I18n.t("Customized")
                }
              </Text>
              <Text style={buttonStyle.text}>
                {I18n.t("coOrganizerRole") + ": "}
                {coOrganizer.secondaryOrganizerType
                ? coOrganizer.secondaryOrganizerType.label
                : coOrganizer.customSecondaryOrganizerType
                }
              </Text>
              <Text style={buttonStyle.select}>
                {coOrganizer.circles.length > 1
                ? coOrganizer.circles.length + " " + I18n.t("circles")
                : coOrganizer.circles.length + " " + I18n.t("circle")
                }
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      : <TouchableOpacity style={buttonStyle.subContainer} onPress={onEditOrganizer}>
          <View style={style.itemRow}>
            {coOrganizer.organizer && coOrganizer.organizer.avatar 
            ? <Image
                style={style.image}
                source={{ uri: coOrganizer.organizer.avatar }}
              />
            : <Image style={style.image} source={icons.profile_photo} />
            }
            <View style={style.column}>
              <Text style={buttonStyle.text}>
                {I18n.t("coOrganizerAccessLevel") + ": "}
                {JSON.stringify(coOrganizer.permissions) ===
                JSON.stringify(AdministratorPermissions)
                  ? I18n.t("Administrator")
                  : I18n.t("Customized")}
              </Text>
              <Text style={buttonStyle.text}>
                {I18n.t("coOrganizerRole") + ": "}
                {coOrganizer.secondaryOrganizerType
                ? coOrganizer.secondaryOrganizerType.label
                : coOrganizer.customSecondaryOrganizerType
                }
              </Text>
              <Text style={buttonStyle.select}>
                {coOrganizer.organizer.pseudo}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      }
      <TouchableOpacity
        style={style.removeIcon}
        onPress={() => removeOrganizer(index)}
      >
        <Image
          resizeMode="contain"
          style={style.rightButton}
          source={icons.close_x}
        />
      </TouchableOpacity>
    </View>
  );
};

/**
 *  Co Organizer Modal
 */
class CoOrganizerModal extends Component {
  constructor() {
    super();
    this.state = {
      isNewCoOrganizerModalVisible: false,
      typeList: [],
      permissionsList: [
        { key: "Administrator", label: I18n.t("Administrator") },
        { key: "Customized", label: I18n.t("Customized") }
      ],
      selectedRole: null,
      isCustomRoleVisible: false,
      customRole: "",
      selectedModal: 0,
      selectedUser: null,
      selectedUserFromCommunity: null,
      selectedCircles: [],
      communitySelectedCircle: null,
      queryCircle: false,
      selectedPermissions: null,
      showCustomizedPermissionsModal: false
    };
  }

  openCloseModal = () => {
    if (this.props.isCoOrganizerModalVisible) {
      this.setState({
        isNewCoOrganizerModalVisible: false,
        selectedRole: null,
        isCustomRoleVisible: false,
        customRole: "",
        selectedModal: 0,
        selectedUser: null,
        selectedUserFromCommunity: null,
        selectedCircles: [],
        communitySelectedCircle: null,
        selectedPermissions: null,
        showCustomizedPermissionsModal: false,
        editCoOrganizerIndex: null
      });
      this.props.updateCoOrganizerModal(false);
    } else {
      this.props.updateCoOrganizerModal(true);
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      !this.state.queryCircle &&
      (nextProps.sportunitySport && nextProps.sportunitySport.sport)
    ) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true,
        sportID: nextProps.sportunitySport.sport
      });

      this.props.relay.refetch(
        refetchVariables,
        null,
        () =>
          setTimeout(() => {
            let { typeList } = this.state;

            typeList.push({ key: "NONE", label: I18n.t("none") });

            if (
              this.props.viewer.sport &&
              this.props.viewer.sport.assistantTypes &&
              this.props.viewer.sport.assistantTypes.length > 0
            )
              this.props.viewer.sport.assistantTypes.forEach(i =>
                typeList.push({
                  key: i.id,
                  label: i.name[this.props.language.toUpperCase()]
                })
              );

            typeList.push({ key: "other", label: I18n.t("other") });

            this.setState({
              typeList,
              queryCircle: true
            });
          }, 250),
        { force: false }
      );
    } else if (!nextProps.sportunitySport || !nextProps.sportunitySport.sport) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true,
        sportID: nextProps.sportunitySport.sport
      });

      this.props.relay.refetch(refetchVariables, null, null, { force: false });
      this.setState({
        queryCircle: true
      });
    }
  };

  displayNewCoOrganizerModal = () => {
    this.setState({ isNewCoOrganizerModalVisible: true, editCoOrganizerIndex: null });
  };

  chooseRole = option => {
    this.setState({
      selectedRole: option
    });
    this.setState({
      isCustomRoleVisible: option.key === "other",
      customRole: ""
    });
  };

  choosePermission = option => {
    if (option.key === "Administrator") {
      this.setState({
        selectedPermissions: AdministratorPermissions,
        showCustomizedPermissionsModal: false
      });
    } else {
      this.setState({ showCustomizedPermissionsModal: true });
    }
  };

  openSearchUserModal = () => {
    this.setState({ selectedModal: 1 });
  };

  selectUser = user => {
    this.setState({
      selectedUser: user,
      selectedPermissions: AdministratorPermissions,
      showCustomizedPermissionsModal: false,
      selectedUserFromCommunity: null,
      selectedCircles: [],
      selectedModal: 0
    });
  };

  openSearchInCommunityModal = () => {
    this.setState({ selectedModal: 2 });
  };

  openCircle = circle => {
    this.setState({
      communitySelectedCircle: circle
    });
  };

  closeCircle = () => {
    this.setState({ communitySelectedCircle: null });
  };

  selectUserFromCommunity = user => {
    this.setState({
      selectedUser: null,
      selectedUserFromCommunity: user,
      selectedPermissions: AdministratorPermissions,
      showCustomizedPermissionsModal: false,
      selectedCircles: [],
      communitySelectedCircle: null,
      selectedModal: 0
    });
  };

  openCircleList = () => {
    this.setState({ selectedModal: 3 });
  };

  addCircles = circles => {
    this.setState({
      selectedCircles: [circles],
      selectedPermissions: AdministratorPermissions,
      showCustomizedPermissionsModal: false,
      selectedUser: null,
      selectedUserFromCommunity: null,
      selectedModal: 0
    });
  };

  onValidate = () => {
    if (this.state.editCoOrganizerIndex !== null) {
      this.props.removeCoOrganizer(this.state.editCoOrganizerIndex)
    }

    this.props.addCoOrganizer({
      circles: this.state.selectedCircles,
      organizer: this.state.selectedUser
        ? this.state.selectedUser
        : this.state.selectedUserFromCommunity
        ? this.state.selectedUserFromCommunity
        : null,
      price: {
        cents: 0,
        currency: this.props.userCurrency
      },
      secondaryOrganizerType:
        this.state.selectedRole.key !== "other"
          ? this.state.selectedRole
          : null,
      customSecondaryOrganizerType: this.state.customRole,
      permissions: this.state.selectedPermissions
    });
    this.setState({
      isNewCoOrganizerModalVisible: false,
      selectedRole: null,
      isCustomRoleVisible: false,
      customRole: "",
      selectedModal: 0,
      selectedUser: null,
      selectedUserFromCommunity: null,
      selectedCircles: [],
      selectedPermissions: null,
      showCustomizedPermissionsModal: false,
      editCoOrganizerIndex: null
    });
  };

  _togglePermission = (name, access) => value => {
    const selectedPermissions = JSON.parse(
      JSON.stringify(this.state.selectedPermissions)
    );
    if (access === "view") {
      selectedPermissions[name][access] =
        selectedPermissions[name].edit || value;
    } else if (access === "edit") {
      selectedPermissions[name][access] = value;
      // update view
      selectedPermissions[name].view =
        selectedPermissions[name].edit || selectedPermissions[name].view;
    }
    this.setState({
      selectedPermissions
    });
  };

  onEditOrganizer = (index, coOrganizer) => {
    this.setState({
      editCoOrganizerIndex: index, 
      isNewCoOrganizerModalVisible: true,
      selectedRole: coOrganizer.secondaryOrganizerType,
      customRole: coOrganizer.customSecondaryOrganizerType,
      selectedUser: coOrganizer.organizer,
      selectedCircles: coOrganizer.circles,
      selectedPermissions: coOrganizer.permissions,
    });
  }

  render() {
    const {
      viewer,
      updateCoOrganizerModal,
      removeCoOrganizer,
      isCoOrganizerModalVisible,
      sportunitySport,
      language,
      coOrganizers
    } = this.props;

    const {
      typeList,
      permissionsList,
      selectedRole,
      isCustomRoleVisible,
      customRole,
      selectedPermissions,
      showCustomizedPermissionsModal
    } = this.state;

    return (
      <View>
        {!this.state.isNewCoOrganizerModalVisible 
        ? <Modal
            animationType={"slide"}
            transparent={false}
            visible={isCoOrganizerModalVisible}
            onRequestClose={this.openCloseModal}
          >
            <View style={style.header}>
              <TouchableOpacity
                onPress={this.openCloseModal}
                style={style.icon}
              >
                <Image source={icons.down_arrow} />
              </TouchableOpacity>

              <Text style={style.title}>{I18n.t("addCoOrganizer")}</Text>
            </View>

            {coOrganizers.length > 0 ? (
              <View style={style.noCoOrganizerContainer}>
                {coOrganizers.map((coOrg, index) => (
                  <CoOrganizerItem
                    key={index}
                    onEditOrganizer={() => this.onEditOrganizer(index, coOrg)}
                    coOrganizer={coOrg}
                    removeOrganizer={removeCoOrganizer}
                  />
                ))}
              </View>
            ) : (
              <View style={style.noCoOrganizerContainer}>
                <Image
                  source={icons.coOrganizers}
                  style={style.noCoOrganizerImage}
                />
                <Text style={style.noCoOrganizerText}>
                  {I18n.t("addCoOrganizerDescription")}
                </Text>
              </View>
            )}
            <FloatingMenu>
              <Add Action={this.displayNewCoOrganizerModal} />
            </FloatingMenu>
          </Modal>
        : <Modal
            animationType={"slide"}
            transparent={false}
            visible={isCoOrganizerModalVisible}
            onRequestClose={this.openCloseModal}
          >
            <ScrollView>
            <View style={style.header}>
              <TouchableOpacity
                onPress={this.openCloseModal}
                style={style.icon}
              >
                <Image source={icons.down_arrow} />
              </TouchableOpacity>

              <Text style={style.title}>{I18n.t("addCoOrganizer")}</Text>
            </View>
            <View style={style.container}>
              <TouchableOpacity
                style={buttonStyle.container}
                onPress={this.openSearchUserModal}
              >
                <View style={buttonStyle.subContainer}>
                  <Text style={buttonStyle.text}>
                    {I18n.t("addCoOrganizerAssignMember")}
                  </Text>
                  {this.state.selectedUser && (
                    <Text style={buttonStyle.select}>
                      {this.state.selectedUser.pseudo}
                    </Text>
                  )}
                </View>
                <Image
                  style={buttonStyle.icon}
                  source={icons.right_arrow_blue}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle.container}
                onPress={this.openSearchInCommunityModal}
              >
                <View style={buttonStyle.subContainer}>
                  <Text style={buttonStyle.text}>
                    {I18n.t("addCoOrganizerAssignMemberCommunity")}
                  </Text>
                  {this.state.selectedUserFromCommunity && (
                    <Text style={buttonStyle.select}>
                      {this.state.selectedUserFromCommunity.pseudo}
                    </Text>
                  )}
                </View>
                <Image
                  style={buttonStyle.icon}
                  source={icons.right_arrow_blue}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle.container}
                onPress={this.openCircleList}
              >
                <View style={buttonStyle.subContainer}>
                  <Text style={buttonStyle.text}>
                    {I18n.t("addCoOrganizerAskCircles")}
                  </Text>
                  {this.state.selectedCircles &&
                    this.state.selectedCircles.length > 0 && (
                      <Text style={buttonStyle.select}>
                        {this.state.selectedCircles.length > 1
                          ? this.state.selectedCircles.length +
                            " " +
                            I18n.t("circles")
                          : this.state.selectedCircles.length +
                            " " +
                            I18n.t("circle")}
                      </Text>
                    )}
                </View>
                <Image
                  style={buttonStyle.icon}
                  source={icons.right_arrow_blue}
                />
              </TouchableOpacity>

              {this.state.selectedModal > 0 && (
                <Modal
                  animationType={"slide"}
                  transparent={false}
                  visible={this.state.selectedModal > 0}
                  onRequestClose={() => this.setState({ selectedModal: 0 })}
                >
                  <SearchModule
                    viewer={viewer}
                    addAsCoOrganizer
                    onClose={() => this.setState({ selectedModal: 0 })}
                    openOnTab={
                      this.state.selectedModal === 1 ? "People" : "Groups"
                    }
                    hideTabs={
                      this.state.selectedModal === 1
                        ? ["Activities", "Groups"]
                        : ["Activities", "People"]
                    }
                    selectUser={
                      this.state.selectedModal === 1
                        ? this.selectUser
                        : this.selectUserFromCommunity
                    }
                    selectCircle={this.addCircles}
                    showMembersOnSelectCircle={this.state.selectedModal === 2}
                    types={["ADULTS", "CHILDREN"]}
                    circleTypes={[
                      "MY_CIRCLES",
                      "CIRCLES_I_AM_IN",
                      "CHILDREN_CIRCLES"
                    ]}
                    userType={"PERSON"}
                    queryOnOpen={true}
                  />
                </Modal>
              )}

              {(!!this.state.selectedUser ||
                !!this.state.selectedUserFromCommunity ||
                this.state.selectedCircles.length > 0) && (
                <View>
                  <View style={style.row}>
                    <Text style={style.label}>{I18n.t("coOrganizerRole")}</Text>
                    {typeList && typeList.length > 0 ? (
                      <ModalPicker
                        data={typeList}
                        initValue={
                          selectedRole ? selectedRole.label : typeList[0].label
                        }
                        onChange={option => this.chooseRole(option)}
                        cancelText={I18n.t("cancel")}
                      />
                    ) : null}
                  </View>
                  <View style={style.row}>
                    <Text style={style.label}>
                      {I18n.t("coOrganizerAccessLevel")}
                    </Text>
                    {permissionsList && permissionsList.length > 0 ? (
                      <ModalPicker
                        data={permissionsList}
                        initValue={
                          JSON.stringify(selectedPermissions) ===
                          JSON.stringify(AdministratorPermissions)
                            ? I18n.t("Administrator")
                            : I18n.t("Customized")
                        }
                        onChange={option => this.choosePermission(option)}
                        cancelText={I18n.t("cancel")}
                      />
                    ) : null}
                  </View>
                  {showCustomizedPermissionsModal && selectedPermissions && (
                    <CustomizedPermissions
                      togglePermission={this._togglePermission}
                      selectedPermissions={selectedPermissions}
                    />
                  )}
                </View>
              )}

              {isCustomRoleVisible && (
                <View style={style.inputContainer}>
                  <Input
                    value={customRole}
                    updateText={e => this.setState({ customRole: e })}
                    placeholder={I18n.t("coOrganizerCustomRole")}
                    noicon={true}
                  />
                </View>
              )}
            </View>
            {this.state.selectedModal === 0 &&
              selectedRole &&
              (selectedRole.key !== "other" ||
                (selectedRole.key === "other" && customRole !== "")) &&
              (this.state.selectedUser ||
                this.state.selectedUserFromCommunity ||
                this.state.selectedCircles.length > 0) && (
                <Button onPress={this.onValidate}>{I18n.t("validate")}</Button>
              )}
            </ScrollView>
          </Modal>
        }
      </View>
    );
  }
}

const stateToProps = state => ({
  coOrganizers: state.sportunityNewActivity.coOrganizers,
  isCoOrganizerModalVisible:
    state.sportunityNewActivity.isCoOrganizerModalVisible,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  language: state.sportunityLocale.language,
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency
});

const dispatchToProps = dispatch => ({
  addCoOrganizer: bindActionCreators(addCoOrganizer, dispatch),
  removeCoOrganizer: bindActionCreators(removeCoOrganizer, dispatch),
  updateCoOrganizerModal: bindActionCreators(updateCoOrganizerModal, dispatch)
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(CoOrganizerModal);

export default createRefetchContainer(
  ReduxContainer,
  {
    viewer: graphql`
      fragment CoOrganizerModal_viewer on Viewer
        @argumentDefinitions(
          sportID: { type: "ID" }
          query: { type: "Boolean!", defaultValue: false }
        ) {
        id
        ...SearchModule_viewer
        me {
          id
        }
        sport(id: $sportID) @include(if: $query) {
          id
          type
          assistantTypes {
            id
            name {
              EN
              FR
              DE
              ES
            }
          }
        }
      }
    `
  },
  graphql`
    query CoOrganizerModalRefetchQuery($query: Boolean!, $sportID: ID) {
      viewer {
        ...CoOrganizerModal_viewer @arguments(query: $query, sportID: $sportID)
      }
    }
  `
);

I18n.fallbacks = true;
I18n.translations = translations;

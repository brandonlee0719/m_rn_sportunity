import PropTypes from "prop-types";
import React from "react";
import { createRefetchContainer, graphql } from "react-relay";
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
	ImageBackground,
  Switch,
  Modal
} from "react-native";
import Text from "react-native-text";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import I18n from "react-native-i18n";
import { get } from 'lodash';

import {
  updateSportunityType,
  updateSportunityOpponent,
  updateSportunityCircleOfOpponents,
  updateSportunityOpenMatch,
  updateSportunityUnknownOpponent,
  updateSportsFormValidity,
} from "sportunity/src/action/newActivityActions";
import Field from "sportunity/src/presentational/forms/Field";
import TouchableButton from "sportunity/src/presentational/Button/OpenModalButton";
import Button from "./Button/Button";
import OpponentModal from "./OpponentModal";
import CircleListModal from "./CircleListModal";
import icons from "sportunity/src/theme/images";
import style from "./style";
import buttonStyle from "../style";
import modalStyle from "./modalStyle";
import { colors, metrics } from "sportunity/src/theme";
import translations from "sportunity/src/translations.js";
import { ListBlock, ListBlockItem } from "../../Invitations/List";
import FormListItem from "../../../../UI/FormListItem";
import RectangularButton from "../../../../UI/Button";

import SearchModule from '../../../SearchModule'

class EventTypeModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpponentModalVisible: false,
      isCircleOfOpponentsModalVisible: false,
      unknownOpponent: false,
      isError: false,
      circleList: [],
      queryDone: false
    };
  }

  componentDidMount() {
    this.checkValidation();
  }

  componentWillReceiveProps = nextProps => {
    if (
      !this.props.isModalVisible &&
      nextProps.isModalVisible &&
      !this.state.queryDone
    ) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true
      });

      this.props.relay.refetch(refetchVariables, null, null, { force: false });

      this.setState({ queryDone: true });
		}
		
		if (get(this.props, 'selectedSportunityType.label') !== get(nextProps, 'selectedSportunityType.label')) {
      this.onChangeSportunityType(nextProps.selectedSportunityType);
      this.checkValidation();
		}
  };

  openOpponentModal = () => {
    this.updateOpponent();
    this.selectCircle();
    this.setState({
      isOpponentModalVisible: true
    });
    this.props.updateSportsFormValidity(this.validate());
  };

  openCircleOpponentModal = () => {
    this.updateOpponent();
    this.selectCircle();

    const { viewer } = this.props;
    let circleList = [];
    if (
      viewer.me.opponentCircles &&
      viewer.me.opponentCircles.edges &&
      viewer.me.opponentCircles.edges.length > 0
    )
      viewer.me.opponentCircles.edges.forEach(edge =>
        circleList.push(edge.node)
      );

    if (
      viewer.me.opponentCirclesFromClub &&
      viewer.me.opponentCirclesFromClub.edges &&
      viewer.me.opponentCirclesFromClub.edges.length > 0
    )
      viewer.me.opponentCirclesFromClub.edges.forEach(edge =>
        circleList.push(edge.node)
      );

    this.setState({
      isCircleOfOpponentsModalVisible: true,
      circleList
    });
    this.props.updateSportsFormValidity(this.validate());
  };

  closeOpponentModal = () => {
    this.setState({
      isOpponentModalVisible: false
    });
    this.props.updateSportsFormValidity(this.validate());
  };

  updateOpponent = value => {
    this.props.updateSportunityOpponent(value);
    this.setState({ isError: false, isOpponentModalVisible: false });
    this.checkValidation();
  };

  updateUnknownOpponent = bool => {
    this.props.updateSportunityUnknownOpponent(bool);
    //this.props.updateSportunityOpenMatch(false)
    this.setState({ isError: false });
    this.checkValidation();
  };

  updateSportunityOpenMatch = bool => {
    this.props.updateSportunityOpenMatch(bool);
    this.setState({ isError: false });
    this.checkValidation();
  };

  selectCircle = circle => {
    this.props.updateSportunityCircleOfOpponents(circle);
    this.setState({
      isCircleOfOpponentsModalVisible: false
    });
    this.setState({ isError: false });
    this.checkValidation();
  };

  checkValidation = () => {
    setTimeout(() => {
      this.props.updateSportsFormValidity(this.validate());
    }, 100);
  }

  validate = () => {
    if (
      this.props.sportunityType !== "NONE" &&
      this.props.sportunityTypePickerList.length > 0 &&
      this.props.sportunityTypePickerList.find(
        item => item.key === this.props.sportunityType
      ).isScoreRelevant &&
      !this.props.isOpenMatch &&
      !this.props.unknownOpponent &&
      !this.props.opponent &&
      !this.props.circleOfOpponents
    ) {
      this.setState({ isError: true });
      return false;
    } else {
      this.setState({ isError: false });
      return true;
    }
  };

  onChangeSportunityType = value => {
    const { updateSportunityType, sportunityType } = this.props;
    if (sportunityType !== value.key) {
      updateSportunityType(value.key);

      if (value.isScoreRelevant) {
        let currentMemberCount = -1;
        if (
          this.props.viewer &&
          this.props.viewer.me &&
          (this.props.viewer.me.opponentCircles ||
            this.props.viewer.me.opponentCirclesFromClub)
        ) {
          if (
            this.props.viewer.me.opponentCircles &&
            this.props.viewer.me.opponentCircles.edges &&
            this.props.viewer.me.opponentCircles.edges.length > 0
          ) {
            this.props.viewer.me.opponentCircles.edges.forEach(edge => {
              if (edge.node.memberCount > currentMemberCount) {
                currentMemberCount = edge.node.memberCount;
                this.selectCircle(edge.node);
              }
            });
          }
          if (
            this.props.viewer.me.opponentCirclesFromClub &&
            this.props.viewer.me.opponentCirclesFromClub.edges &&
            this.props.viewer.me.opponentCirclesFromClub.edges.length > 0
          ) {
            this.props.viewer.me.opponentCirclesFromClub.edges.forEach(edge => {
              if (edge.node.memberCount > currentMemberCount) {
                currentMemberCount = edge.node.memberCount;
                this.selectCircle(edge.node);
              }
            });
          }
        }
      }
    }
	};

  render() {
    const {
      viewer,
      user,
      onCloseModal,
      isModalVisible,
      updateSportunityType,
      sportunityType,
      language,
      sportunitySport,
      opponent,
      unknownOpponent,
      circleOfOpponents,
      sportunityTypePickerList,
      isOpenMatch,
      updateSportunityOpenMatch
    } = this.props;

    const sexRestrictionList = [
      { key: "NONE", label: I18n.t("mixed") },
      { key: "MALE", label: I18n.t("male") },
      { key: "FEMALE", label: I18n.t("female") }
    ];

    return (
      <ScrollView>
          <View>
            {sportunityType !== "NONE" &&
              sportunityTypePickerList.length > 0 &&
              sportunityTypePickerList.find(item => item.key === sportunityType)
                .isScoreRelevant && (
								<View>
									<View style={style.switchesContainer}>
										<Field
											type="switch"
											title={I18n.t("unknownOpponent")}
											value={unknownOpponent}
											onChange={this.updateUnknownOpponent}
											disabled={isOpenMatch}
										/>
										<View style={{ height: 10 }} />
										<Field
											type="switch"
											title={I18n.t("openMatch")}
											value={isOpenMatch}
											onChange={this.updateSportunityOpenMatch}
											disabled={unknownOpponent}
										/>

										<View style={{ height: 10 }} />
									</View>


                  {!isOpenMatch &&
                    !unknownOpponent && (
											<FormListItem
												type="secondary"
												onPress={this.openOpponentModal}
												title={opponent ? I18n.t("changeOpponentName") : I18n.t("writeOpponentName")}
												rightIcon={icons.right_arrow_blue}
											/>
										)}
										{opponent && (
											<FormListItem
												type="secondary"
												title={opponent.pseudo}
												leftIcon={opponent.avatar ? { uri: opponent.avatar } : icons.profile_photo}
											/>
										)}
                    {!isOpenMatch &&
                      !unknownOpponent && (
												<FormListItem
													type="secondary"
													onPress={this.openCircleOpponentModal}
													title={circleOfOpponents ? I18n.t("opponentProposeToCirclesOther") : I18n.t("opponentProposeToCircles")}
													rightIcon={icons.right_arrow_blue}
												/>
                      )
                    }
                    {circleOfOpponents && (
                      <View style={[modalStyle.colContainer, { marginVertical: 10 }]}>
                        <View style={modalStyle.imageContainer}>
                          <ImageBackground
                            style={modalStyle.image}
                            source={icons.circleLarge}
                          >
                            <Text style={modalStyle.members}>
                              {circleOfOpponents.memberCount}
                            </Text>
                          </ImageBackground>
                        </View>
                        <View style={{flexDirection: "column", flex: 4, justifyContent: "center", alignItems: "flex-start"}}>
                          <Text style={modalStyle.name}>
                            {circleOfOpponents.name}
                          </Text>
                          {circleOfOpponents.owner && circleOfOpponents.owner.id !== this.props.viewer.me.id 
                          ? <View style={modalStyle.ownerContainer}>
                              {circleOfOpponents.owner && circleOfOpponents.owner.avatar 
                              ? <Image
                                  style={modalStyle.avatar}
                                  source={{
                                    uri: circleOfOpponents.owner.avatar
                                  }}
                                />
                              : <Image
                                  style={modalStyle.avatar}
                                  source={icons.profile_photo}
                                />
                              }
                              <Text style={modalStyle.ownerName}>
                                {circleOfOpponents.owner.pseudo || ""}
                              </Text>
                            </View>
                          : null
                          }
                        </View>
                      </View>
                    )}


								</View>
							)}

            {this.state.isOpponentModalVisible &&
              <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isOpponentModalVisible}
                onRequestClose={() => this.setState({ isOpponentModalVisible: false})}
              > 
                <SearchModule
                  viewer={viewer}
                  from={"new-sportunity-invitations"}
                  inviteAsOpponent
                  onClose={() => this.setState({ isOpponentModalVisible: false})}
                  openOnTab={"People"}
                  hideTabs={["Activities"]}
                  selectUser={this.updateOpponent}
                  showMembersOnSelectCircle={true}
                  types={['TEAMS', 'CLUBS']}
                  circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES']}
                  sport={sportunitySport}
                  queryOnOpen={true}
                />
              </Modal>  
            }
            {this.state.isCircleOfOpponentsModalVisible && 
              <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isCircleOfOpponentsModalVisible}
                onRequestClose={() => this.setState({ isCircleOfOpponentsModalVisible: false})}
              >
                <SearchModule
                  viewer={viewer}
                  from={"new-sportunity-invitations"}
                  onClose={() => this.setState({ isCircleOfOpponentsModalVisible: false})}
                  selectCircle={this.selectCircle}
                  selectedCircles={this.state.circleList}
                  inviteAsOpponent
                  openOnTab={"Groups"}
                  hideTabs={["Activities", "People"]}
                  types={['TEAMS', 'CLUBS']}
                  circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES']}
                  queryOnOpen={true}
                />
              </Modal>  
            }

            {this.state.isError && (
              <View style={[style.row, { marginTop: 15 }]}>
                <Text style={style.error}>
                  {I18n.t("opponentMissingError")}
                </Text>
              </View>
            )}
          </View>
      </ScrollView>
    );
  }
}

EventTypeModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  updateSportunityType: PropTypes.func.isRequired,
  updateSportunityCircleOfOpponents: PropTypes.func.isRequired,
  updateSportunityUnknownOpponent: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const stateToProps = state => ({
  sportunityType: state.sportunityNewActivity.sportunityType,
  language: state.sportunityLocale.language,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  opponent: state.sportunityNewActivity.opponent,
  circleOfOpponents: state.sportunityNewActivity.circleOfOpponents,
  isOpenMatch: state.sportunityNewActivity.isOpenMatch,
  unknownOpponent: state.sportunityNewActivity.unknownOpponent
});

const dispatchToProps = dispatch => ({
  updateSportunityType: bindActionCreators(updateSportunityType, dispatch),
  updateSportunityOpponent: bindActionCreators(
    updateSportunityOpponent,
    dispatch
  ),
  updateSportunityCircleOfOpponents: bindActionCreators(
    updateSportunityCircleOfOpponents,
    dispatch
  ),
  updateSportunityOpenMatch: bindActionCreators(
    updateSportunityOpenMatch,
    dispatch
  ),
  updateSportunityUnknownOpponent: bindActionCreators(
    updateSportunityUnknownOpponent,
    dispatch
  ),
  updateSportsFormValidity: bindActionCreators(
    updateSportsFormValidity,
    dispatch,
  ),
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(EventTypeModal);

export default createRefetchContainer(
  ReduxContainer,
  {
    /* TODO manually deal with:
    ...OpponentModal_viewer
    */
    viewer: graphql`
      fragment EventTypeModal_viewer on Viewer @argumentDefinitions(
        query: { type: "Boolean!", defaultValue: false }
      ) {
        ...SearchModule_viewer
        id
        me {
          id
          opponentCircles: circles(last: 20, type: [TEAMS, CLUBS])
            @include(if: $query) {
            edges {
              node {
                id
                memberCount
                name
              }
            }
          }
          opponentCirclesFromClub: circlesFromClub(
            last: 20
            type: [TEAMS, CLUBS]
          ) @include(if: $query) {
            edges {
              node {
                id
                name
                memberCount
                owner {
                  id
                  pseudo
                  avatar
                }
              }
            }
          }
        }
      }
    `
  },
  graphql`
    query EventTypeModalRefetchQuery($query: Boolean!) {
      viewer {
        ...EventTypeModal_viewer @arguments(query: $query)
      }
    }
  `
);

I18n.fallbacks = true;
I18n.translations = translations;

import React from "react";
import { createRefetchContainer, graphql } from "react-relay";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "react-native-text";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import I18n from "react-native-i18n";
import ModalPicker from "react-native-modal-selector";
import get from 'lodash/get';

import { updateRestrictionsModal } from "sportunity/src/action/newActivityActions";
import icons from "sportunity/src/theme/images";
import translations from "sportunity/src/translations.js";
import FormListItem from "../../../UI/FormListItem";
import { updateSportunityTypeString } from '../../../../action/newActivityActions';

import EventTypeModal from "./EventTypeModal";
import style from "./style";

class EventType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			isSportIDSet: false,
			selectedSportunityType: props.sportunityType,
    };
  }

  componentDidMount() {
    if (this.props.sportunitySport) {
      this.triggerRefetchQuery(this.props);
    }
  }

  componentWillReceiveProps = nextProps => {
    if (
      !this.state.isSportIDSet ||
      (nextProps.sportunitySport &&
        nextProps.sportunitySport.sport !== this.props.sportunitySport.sport)
    ) {
      this.triggerRefetchQuery(nextProps);
    }
  };
  
  triggerRefetchQuery = (nextProps) => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      sportID: nextProps.sportunitySport.sport
    });

    this.props.relay.refetch(refetchVariables, null, null, { force: false });

    this.setState({ isSportIDSet: true });
  }
	
	onChangeSportunityType = (selectedSportunityType) => {
		console.log(selectedSportunityType);
    this.setState({ selectedSportunityType });

    this.props.updateSportunityTypeString(selectedSportunityType.label);
  }
  
  getSportunityTypeList = () => {
    const { user, viewer, language } = this.props;
    const sportunityTypeList = 
      user &&
        viewer.sport &&
        viewer.sport.sportunityTypes &&
        viewer.sport.sportunityTypes.length > 0
          ? [
              { key: "NONE", label: I18n.t("none"), isScoreRelevant: false },
              ...viewer.sport.sportunityTypes.map(type => ({
                key: type.id,
                label: type.name[language.toUpperCase()],
                isScoreRelevant: type.isScoreRelevant
              }))
            ]
          : [];

      return sportunityTypeList;
  }

  render() {
    const {
      viewer,
      sportunityType,
      opponent,
      circleOfOpponents,
      isOpenMatch,
      unknownOpponent,
      user,
    } = this.props;

    const sportunityTypeList = this.getSportunityTypeList();

    if (viewer && user && get(sportunityTypeList, 'length') === 0) {
      return (
        <EventTypeModal
          viewer={viewer}
          user={user}
					sportunityTypePickerList={sportunityTypeList}
          selectedSportunityType={this.state.selectedSportunityType}
        />
      )
    }

    return (viewer &&
      viewer.sport &&
      viewer.sport.sportunityTypes &&
      viewer.sport.sportunityTypes.length > 0 ) || sportunityType ? (
      <View>
				<ModalPicker
					data={sportunityTypeList}
					ref={selector => { this.selector = selector; }}
					customSelector={(
						<FormListItem
							onPress={() => this.selector.open()}
							title={I18n.t("sportunityType")}
							subtitle={
								sportunityType === "NONE" ? (
									<Text style={style.select}>{I18n.t("select")}</Text>
								) : (
									<View>
										{sportunityType !== "NONE" &&
											sportunityTypeList.length > 0 && (
												<Text style={style.select}>
													{
														sportunityTypeList.find(
															item => item.key === sportunityType
														).label
													}
												</Text>
											)}
										{sportunityType !== "NONE" && (
											<Text style={style.select}>
												{opponent
													? I18n.t("opponent") + ": " + opponent.pseudo
													: isOpenMatch
														? I18n.t("openMatch")
														: circleOfOpponents
															? I18n.t("opponentProposedToCircles") +
																": " +
																circleOfOpponents.name
															: unknownOpponent && I18n.t("unknownOpponent")}
											</Text>
										)}
									</View>
								)
							}
							rightIcon={icons.right_arrow_blue}
						/>
					)}
					onChange={this.onChangeSportunityType}
				/>
        <EventTypeModal
          viewer={viewer}
          user={user}
					sportunityTypePickerList={sportunityTypeList}
          selectedSportunityType={this.state.selectedSportunityType}
        />
      </View>
    ) : null;
  }
}

const stateToProps = state => ({
  sportunityType: state.sportunityNewActivity.sportunityType,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  opponent: state.sportunityNewActivity.opponent,
  circleOfOpponents: state.sportunityNewActivity.circleOfOpponents,
  unknownOpponent: state.sportunityNewActivity.unknownOpponent,
  isOpenMatch: state.sportunityNewActivity.isOpenMatch,
  language: state.sportunityLocale.language
});

const dispatchToProps = ({
  updateSportunityTypeString,
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(EventType);

export default createRefetchContainer(
  ReduxContainer,
  {
    user: graphql`
      fragment EventType_user on User {
        id
      }
    `,
    viewer: graphql`
      fragment EventType_viewer on Viewer
        @argumentDefinitions(sportID: { type: "ID" }) {
        id
        ...EventTypeModal_viewer
        sport(id: $sportID) {
          type
          sportunityTypes {
            id
            name {
              FR
              EN
            }
            isScoreRelevant
          }
        }
      }
    `
  },
  graphql`
    query EventTypeRefetchQuery($sportID: ID) {
      viewer {
        ...EventType_viewer @arguments(sportID: $sportID)
      }
    }
  `
);

I18n.fallbacks = true;
I18n.translations = translations;

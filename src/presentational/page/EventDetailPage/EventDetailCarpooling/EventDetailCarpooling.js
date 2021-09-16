import React from "react";
import PropTypes from "prop-types";
import PureComponent from "sportunity/src/lib/PureComponent";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import I18n from "react-native-i18n";
import { isEqual } from "lodash";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import Text from "react-native-text";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

import translations from "sportunity/src/translations.js";
import Carpooling from "../Carpooling/Carpooling";
import EventAddressMap from "../EventAddressMap";
import { styles } from "../styles";
import { colors, metrics, images } from "../../../../theme";
import Card from "../../../UI/Card";
import get from "lodash/get";

const getPlacesRemaining = carpoolings =>
  carpoolings.reduce(
    (mem, carpooling) =>
      mem + carpooling.number_of_sits - carpooling.passengers.length,
    0
  );

class EventDetailCarpooling extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isParticipant: false,
      isOrganized: false, // this is true when the viewer is the main admin or permissions.carPoolingAccess.edit = true
      isAuthorizedAdmin: false
    };
  }

  async componentDidMount() {
    const { sportunity, user } = this.props;

    if (user) {
      let isOrganized = !!sportunity.organizers.find(
        item =>
          item &&
          item.organizer &&
          item.organizer.id === user.id &&
          item.isAdmin
      );
      isOrganized =
        isOrganized ||
        !!sportunity.organizers.find(
          item =>
            item &&
            item.organizer &&
            item.organizer.id === user.id &&
            item.permissions &&
            item.permissions.carPoolingAccess.edit
        );

      let isParticipant = !!sportunity.participants.find(
        item => item && item.id === user.id
      );

      this.setState({ isOrganized, isParticipant });
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
            item.organizer.id === user.id &&
            item.isAdmin
        );
        isOrganized =
          isOrganized ||
          !!sportunity.organizers.find(
            item =>
              item &&
              item.organizer &&
              item.organizer.id === user.id &&
              item.permissions &&
              item.permissions.carPoolingAccess.edit
          );

        let isParticipant = !!sportunity.participants.find(
          item => item && item.id === user.id
        );

        this.setState({ isOrganized, isParticipant });
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
          }
        }
      }
    } else {
      setTimeout(() => this.waitForDataSuperMe(superToken), 100);
    }
  };

  renderEmptyCarpooling = () => {
    const { sportunity } = this.props;
    const hasCarpooling =
      sportunity && sportunity.carPoolings && sportunity.carPoolings.length;
    // const carpoolingRemainingSits = sportunity.carPoolings && getPlacesRemaining(sportunity.carPoolings);

    if (hasCarpooling) return null;

    return (
      <React.Fragment>
        {(this.state.isParticipant || this.state.isOrganized) && (
          <Card
            height={120}
            style={{
              marginBottom: metrics.baseMargin,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={images.error_black}
              style={{
                height: 35,
                width: 35,
                marginBottom: metrics.baseMargin
              }}
            />
            <Text style={styles.title} numberOfLines={2}>
              {I18n.t("sportunityCarpoolingUnavailable")}
            </Text>
          </Card>
        )}
      </React.Fragment>
    );
  };

  render() {
    const { sportunity, viewer, user } = this.props;

    if (!user) return null;

    const allOrganizers = get(sportunity, "organizers");
    const organizer = allOrganizers
      ? allOrganizers.find(user => user.isAdmin === true)
      : {};
    const coOrganizers = allOrganizers
      ? allOrganizers.filter(user => user.isAdmin === false)
      : [];
    const isCoOrganizer =
      coOrganizers.findIndex(i => {
        return i.organizer && i.organizer.id && i.organizer.id === user.id;
      }) > -1;
    const coOrganizerCanView =
      coOrganizers.findIndex(i => {
        return (
          i.organizer &&
          i.organizer.id &&
          i.organizer.id === user.id &&
          i.permissions &&
          i.permissions.carPoolingAccess &&
          i.permissions.carPoolingAccess.view
        );
      }) > -1;

    const coOrganizerCanEdit =
      coOrganizers.findIndex(i => {
        return (
          i.organizer &&
          i.organizer.id &&
          i.organizer.id === user.id &&
          i.permissions &&
          i.permissions.carPoolingAccess &&
          i.permissions.carPoolingAccess.edit
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
      <Carpooling
        sportunity={sportunity}
        viewer={viewer}
        isPast={sportunity.status === "Past"}
        renderEmptyCarpooling={this.renderEmptyCarpooling}
        renderMap={() => <EventAddressMap address={sportunity.address} />}
        renderActionButton={({
          onOrganizeCar,
          onAskForCar,
          showAskForCarButton
        }) => (
          <ActionButton
            size={50}
            buttonColor={colors.skyBlue}
            style={[
              Platform.OS === "android" ? { elevation: 2, zIndex: 10000 } : {}
            ]}
          >
            {showAskForCarButton && (
              <ActionButton.Item
                size={35}
                buttonColor={colors.skyBlue}
                title={I18n.t("sportunityCarpoolingRequestCar")}
                onPress={() => onAskForCar()}
              >
                <Icon
                  name="md-flag"
                  style={{
                    fontSize: 20,
                    height: 22,
                    color: "white"
                  }}
                />
              </ActionButton.Item>
            )}
            <ActionButton.Item
              size={35}
              buttonColor={colors.skyBlue}
              title={I18n.t("sportunityCarpoolingOrganizeCar")}
              onPress={() => onOrganizeCar()}
            >
              <Icon
                name="md-add"
                style={{
                  fontSize: 20,
                  height: 22,
                  color: "white"
                }}
              />
            </ActionButton.Item>
          </ActionButton>
        )}
      />
    );
  }
}

EventDetailCarpooling.propTypes = {
  viewer: PropTypes.object.isRequired
};

const stateToProps = state => ({});

const dispatchToProps = dispatch => ({});

export default createRefetchContainer(
  connect(
    stateToProps,
    dispatchToProps
  )(EventDetailCarpooling),
  {
    viewer: graphql`
      fragment EventDetailCarpooling_viewer on Viewer
        @argumentDefinitions(
          sportunityRelaunchId: { type: "String!", defaultValue: "" }
          queryRelaunch: { type: "Boolean" }
          superToken: { type: "String" }
          querySuperMe: { type: "Boolean", defaultValue: false }
          userToken: { type: "String" }
          queryAuthorizedAccounts: { type: "Boolean", defaultValue: false }
        ) {
        ...Carpooling_viewer
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
      fragment EventDetailCarpooling_user on User {
        id
        avatar
        pseudo
        profileType
      }
    `,
    sportunity: graphql`
      fragment EventDetailCarpooling_sportunity on Sportunity {
        ...Carpooling_sportunity
        id
        carPoolings {
          id
          driver {
            id
            pseudo
            avatar
          }
          address {
            address
            city
            zip
            country
          }
          starting_date
          number_of_sits
          passengers {
            id
            pseudo
            avatar
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
          ...DetailCellItem_address
        }
        participants {
          id
          pseudo
          avatar
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
      }
    `
  },
  graphql`
    query EventDetailCarpoolingRefetchQuery(
      $sportunityRelaunchId: String!
      $queryRelaunch: Boolean!
      $superToken: String
      $querySuperMe: Boolean!
      $userToken: String
      $queryAuthorizedAccounts: Boolean!
    ) {
      viewer {
        ...EventDetailCarpooling_viewer
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

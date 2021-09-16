import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import I18n from "react-native-i18n";
import Toast from "react-native-simple-toast";
import translations from "sportunity/src/translations.js";
import store from "../../../../store";
import { colors, images } from "../../../../theme";
import { graphql, createRefetchContainer, QueryRenderer } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";
import { withNavigation } from "react-navigation";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";

class EventDetailChat extends Component {
  constructor(props) {
    super(props);
    this.setParams = this.setParams.bind(this);
  }
  componentDidMount() {
    this.setParams();
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.viewer.sportunity.organizers) !==
      JSON.stringify(this.props.viewer.sportunity.organizers)
    ) {
      this.setParams();
    }
  }

  setParams() {
    const { organizers } = this.props.viewer.sportunity;
    const { me } = this.props.viewer;
    this.props.navigation.setParams({
      organizers,
      me
    });
  }
  render() {
    const { organizers } = this.props.viewer.sportunity;
    
    const { me } = this.props.viewer;

    const coOrganizers = organizers
      ? organizers.filter(user => user.isAdmin === false)
      : [];
    const isCoOrganizer =
      coOrganizers.findIndex(i => {
        return (
          i.organizer &&
          this.props.viewer.me && 
          i.organizer.id &&
          i.organizer.id === this.props.viewer.me.id
        );
      }) > -1;
    const coOrganizerCanView =
      coOrganizers.findIndex(i => {
        return (
          i.organizer &&
          i.organizer.id &&
          this.props.viewer.me && 
          i.organizer.id === this.props.viewer.me.id &&
          i.permissions &&
          i.permissions.chatAccess &&
          i.permissions.chatAccess.view
        );
      }) > -1;
    //
    if (isCoOrganizer && !coOrganizerCanView) {
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
    return <View />;
  }
}

const EventDetailChatTemp = createRefetchContainer(
  withNavigation(EventDetailChat),
  graphql`
    fragment EventDetailChat_viewer on Viewer
      @argumentDefinitions(
        sportunityId: { type: ID }
        sportunityChatId: { type: "String" }
      ) {
      me {
        id
      }
      sportunity(id: $sportunityId) {
        id
        organizers {
          isAdmin
          organizer {
            id
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
        }
      }
      chat(sportunityId: $sportunityChatId) {
        id
      }
    }
  `
);

export default class EventDetailChatContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={{ height: 20, width: 20, tintColor, marginBottom: -5 }}
        source={images.comments}
      />
    ),
    tabBarOnPress: () => {
      const {
        sportunityDetails: {
          isUserLoggedIn,
          isParticipant,
          sportunityInfo,
          chatId
        }
      } = store.getState();
      const organizers = navigation.getParam("organizers", []);
      const me = navigation.getParam("me", { id: "" });
      // calculate some variables
      const coOrganizers = organizers
        ? organizers.filter(user => user.isAdmin === false)
        : [];
      let isOrganized = !!organizers.find(
        item =>
          me && item && item.organizer && item.organizer.id === me.id && item.isAdmin
      );
      isOrganized =
        isOrganized ||
        !!organizers.find(
          item =>
            item &&
            item.organizer &&
            me && 
            item.organizer.id === me.id &&
            item.permissions &&
            item.permissions.chatAccess.edit
        );
      const isCoOrganizer =
        coOrganizers.findIndex(i => {
          return i.organizer && i.organizer.id && me && i.organizer.id === me.id;
        }) > -1;
      const coOrganizerCanView =
        coOrganizers.findIndex(i => {
          return (
            i.organizer &&
            i.organizer.id &&
            me &&  
            i.organizer.id === me.id &&
            i.permissions &&
            i.permissions.chatAccess &&
            i.permissions.chatAccess.view
          );
        }) > -1;

      const coOrganizerCanEdit =
        coOrganizers.findIndex(i => {
          return (
            i.organizer &&
            i.organizer.id &&
            me && 
            i.organizer.id === me.id &&
            i.permissions &&
            i.permissions.chatAccess &&
            i.permissions.chatAccess.edit
          );
        }) > -1;
      //
      if (!isUserLoggedIn) {
        Toast.show(I18n.t("sportunityToastLoginChat"));
      } else {
        const event = sportunityInfo;
        if (isParticipant || isOrganized) {
          console.log("isParticipant || isOrganized");
          navigation.navigate("chatdetail", {
            id: chatId,
            title: event.title,
            hideNavBar: false
          });
        } else if (isCoOrganizer && coOrganizerCanView && !coOrganizerCanEdit) {
          console.log(
            "isCoOrganizer && coOrganizerCanView && !coOrganizerCanEdit"
          );
          navigation.navigate("chatdetail", {
            id: chatId,
            title: event.title,
            hideNavBar: false,
            viewOnly: true
          });
        } else if (isCoOrganizer && !coOrganizerCanView) {
          Toast.show(I18n.t('sportunityToastNoAccessTab'));
          console.log("isCoOrganizer && !coOrganizerCanView");
          //
        } else {
          console.log("else");
          const admin = event.organizers.find(item => item.isAdmin);
          if (admin && admin.organizer && admin.organizer.id) {
            navigation.navigate("chatuser", {
              id: admin.organizer.id,
              title: admin.organizer.pseudo,
              hideNavBar: false
            });
          }
        }
      }
    }
  });
  render() {
    const { navigation } = this.props;
    let sportunityChatId = navigation.getParam("id", null);
    let sportunityId = navigation.getParam("id", null);
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query EventDetailChatQuery(
            $sportunityId: ID
            $sportunityChatId: String
          ) {
            viewer {
              ...EventDetailChat_viewer
                @arguments(
                  sportunityId: $sportunityId
                  sportunityChatId: $sportunityChatId
                )
            }
          }
        `}
        variables={{
          sportunityId: sportunityId,
          sportunityChatId: sportunityChatId
        }}
        render={({ error, props }) => {
          if (props) {
            return <EventDetailChatTemp viewer={props.viewer} />;
          } else {
            return <ActivityLoader isAnimating={true} />;
          }
        }}
      />
    );
  }
}

I18n.fallbacks = true;
I18n.translations = translations;

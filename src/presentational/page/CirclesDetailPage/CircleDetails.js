import React from "react";
import {
  Alert,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
  Platform,
  Linking,
  ScrollView
} from "react-native";
import { createFragmentContainer, graphql } from "react-relay";
import Text from "react-native-text";
import I18n from "react-native-i18n";
import get from 'lodash/get';

import { colors, images } from "sportunity/src/theme";
import styles from "./style";
import translations from "sportunity/src/translations.js";
import { metrics, fonts } from "../../../theme";
import Card from "../../UI/Card";

class CircleDetails extends React.Component {
  openMap = () => {
    const { venue, address } = this.props;
    let latitude, longitude;
    if (venue && venue.address && venue.address.position) {
      latitude = venue.address.position.lat;
      longitude = venue.address.position.lng;
    } else if (address && address.position) {
      latitude = address.position.lat;
      longitude = address.position.lng;
    }

    Platform.select({
      ios: () => {
        Linking.openURL(
          "http://maps.apple.com/maps?daddr=" + latitude + "," + longitude
        );
      },
      android: () => {
        Linking.openURL(
          "http://maps.google.com/maps?daddr=" + latitude + "," + longitude
        );
      }
    })();
  };

  render = () => {
    const { circle, language, renderHeading, renderSubscribeButtom, renderAddMemberButton, renderAddChildButton, organizer } = this.props;
    const memberTypeList = [
      { key: "ADULTS", label: I18n.t("circles_member_type_" + 0) },
      { key: "CHILDREN", label: I18n.t("circles_member_type_" + 1) },
      { key: "TEAMS", label: I18n.t("circles_member_type_" + 2) },
      { key: "CLUBS", label: I18n.t("circles_member_type_" + 3) },
      { key: "COMPANIES", label: I18n.t("circles_member_type_" + 4) }
    ];

    const shareCode = get(circle, 'publicShortCode');
    
    return (
      <View>
        <Card>
          <View style={styles.detailContainer}>
            {typeof renderHeading === "function" && renderHeading()}

            {circle.description && (
              <View style={styles.descriptionContainer}>
                <Text style={styles.detailItemText} numberOfLines={5}>
                  {circle.description}
                </Text>
              </View>
            )}

            <View
              style={{
                flexDirection: "row",
                paddingBottom: metrics.doubleBaseMargin
              }}
            >

              {circle.sport && (
                <View style={{ flex: 5, marginRight: metrics.doubleBaseMargin, flexDirection: 'row' }}>
                  <Image
                    style={styles.sportImage}
                    source={{
                      uri:
                        circle.sport &&
                        circle.sport.sport &&
                        circle.sport.sport.logo
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start"
                    }}
                  >
                    <Text style={styles.boldText}>
                      {circle.sport &&
                        circle.sport.sport &&
                        (language.toUpperCase() === "FR"
                          ? circle.sport.sport.name.FR
                          : circle.sport.sport.name.EN)}
                    </Text>
                    {circle.sport.levels &&
                      circle.sport.levels.length > 1 && (
                        <Text style={[styles.detailItemText, { fontSize: 13, marginTop: 2 }]} numberOfLines={2}>
                          {circle.sport.levels.length > 1
                            ? circle.sport.levels[0][language.toUpperCase()]
                                .name +
                              " " +
                              I18n.t("to") +
                              " " +
                              circle.sport.levels[
                                circle.sport.levels.length - 1
                              ][language.toUpperCase()].name
                            : circle.sport.levels[0][language.toUpperCase()]
                                .name}
                        </Text>
                      )}
                  </View>
                </View>
              )}


              <View style={{ flex: 3 }}>
                {circle.type && (
                  <Text style={styles.boldText}>
                    {
                      memberTypeList.find(item => item.key === circle.type)
                        .label
                    }
                  </Text>
                )}
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              {circle.address && (
                <View style={{ flex: 5 }}>
                  <TouchableOpacity onPress={this.openMap}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                      <Image
                        style={styles.iconLocation}
                        source={images.location}
                      />
                      <Text style={styles.detailItemText} numberOfLines={2}>
                        {circle.address &&
                          `${circle.address.address} ${circle.address.city}`}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              <View style={{ flex: 3, marginRight: metrics.baseMargin }}>
                {organizer &&
                  <View style={{ flexDirection: 'row' }}>
                    {organizer && organizer.avatar
                      ? <Image style={styles.avataricon} source={{uri: organizer.avatar}} />
                      : <Image style={styles.avataricon} source={images.profile_photo} />
                      }
                    <Text style={styles.detailItemText}>
                      {organizer.pseudo} 
                    </Text>
                  </View>
                }
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            {typeof renderAddMemberButton === 'function' && renderAddMemberButton()}
            {typeof renderSubscribeButtom === 'function' && renderSubscribeButtom()}
            {typeof renderAddChildButton === 'function' && renderAddChildButton()}
          </View>
        </Card>

        <Card padding={metrics.baseMargin} style={{ marginTop: metrics.doubleBaseMargin }}>
          <View style={styles.detailItemContainer}>
            <View>
              <Text style={[styles.boldText, { marginBottom: metrics.baseMargin }]}>{I18n.t('status')}</Text>
              <Text
                style={[styles.detailItemText, { marginBottom: 5 }]}
                numberOfLines={5}
              >
                <Text style={{ fontWeight: "600" }}>
                  {(circle.mode === "PUBLIC"
                    ? I18n.t("circleOptionPublic")
                    : I18n.t("circleOptionPrivate")) + " : "}
                </Text>
                {circle.mode === "PUBLIC"
                  ? I18n.t("circleOptionPublicExplaination2")
                  : I18n.t("circleOptionPrivateExplaination2")}
              </Text>
              <Text style={styles.detailItemText} numberOfLines={5}>
                <Text style={{ fontWeight: "600" }}>
                  {(circle.isCircleUsableByMembers
                    ? I18n.t("circleOptionUsableByMembers")
                    : I18n.t("circleOptionNotUsableByMembers")) + " : "}
                </Text>
                {circle.isCircleUsableByMembers
                  ? I18n.t("circleOptionUsableByMembersExplaination2")
                  : I18n.t("circleOptionNotUsableByMembersExplaination2")}
              </Text>
            </View>
          </View>
        </Card>

        {shareCode &&
          <Card padding={metrics.baseMargin} style={{ marginVertical: metrics.doubleBaseMargin }}>
            <View style={styles.detailItemContainer}>
              <Text style={[styles.boldText, { marginBottom: metrics.baseMargin }]}>Code ID</Text>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: fonts.size.h6 }}>{shareCode}</Text>
                <Text style={{ opacity: 0.9, marginTop: metrics.baseMargin }}>{I18n.t('sportunityCode')}</Text>
              </View>
            </View>
          </Card>
        }
      </View>
    );
  };
}

export default createFragmentContainer(CircleDetails, {
  circle: graphql`
    fragment CircleDetails_circle on Circle {
      id
      description
      type
      mode
      isCircleUsableByMembers
      publicShortCode
      address {
        address
        city
        country
        position {
          lat
          lng
        }
      }
      sport {
        sport {
          id
          logo
          name {
            EN
            FR
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
      }
    }
  `
});

I18n.fallbacks = true;
I18n.translations = translations;

import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import I18n from "react-native-i18n";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { updateFrom } from 'sportunity/src/action/profileActions';
import translations from "sportunity/src/translations.js";
import CircleDetails from "../CircleDetails";
import Subscribe from '../Subscribe';
import AddMember from '../AddMember'
import AddChild from '../AddChild'
import Loader from '../../../ActivityIndicatorLoader/page';
import { fonts, colors, metrics, images } from "../../../../theme";

class Info extends Component {
  render() {
    const {
      viewer,
      circle,
      language,
      updateFrom,
      navigation,
      handlers,
      isSubscribing,
      isCurrentUserTheOwner,
      isCurrentUserCoOwner,
      isCurrentUserAMember,
      isCurrentUserAParent,
    } = this.props;

    if (!circle) {
      return <Loader isAnimating={true} />;
    }

    return (
      <ScrollView>
        {circle && (
          <CircleDetails
            circle={circle}
            language={language}
            organizer={circle.owner}
            isCurrentUserTheOwner={isCurrentUserTheOwner}
            isCurrentUserAMember={isCurrentUserAMember}
            isCurrentUserCoOwner={isCurrentUserCoOwner}
            renderHeading={() => (
              <View style={{ flexDirection: 'row', marginBottom: metrics.doubleBaseMargin }}>
                <View style={{ flexDirection: 'row', flex: 10, justifyContent: 'center' }}>
                  <Image source={images.sportunity_group} style={{ height: 40, width: 40, marginRight: metrics.baseMargin }} />
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: fonts.size.h5, color: colors.bloodOrange, fontWeight: '600', marginTop: -4 }}>
                      {circle && circle.name && isCurrentUserTheOwner
                        ? circle.name
                        : !isCurrentUserTheOwner &&
                          circle &&
                          ((
                            circle.name +
                            " " +
                            I18n.t("circleOf") +
                            " " +
                            circle.owner.pseudo
                          ).length > 30
                            ? circle.name
                            : circle.name +
                              " " +
                              I18n.t("circleOf") +
                              " " +
                              circle.owner.pseudo)}
                    </Text>
                    {circle.members && <Text style={{ color: colors.skyBlue, marginTop: 4 }}>{circle.members.length} Members</Text>
                    }
                  </View>
                </View>
              </View>
            )}
            renderAddMemberButton={() => (
              circle && (isCurrentUserTheOwner || isCurrentUserCoOwner) && circle.type !== 'CHILDREN' && 
                <AddMember
                  addMember={this.props.handlers.addMember}
                  addMembers={this.props.handlers.addMembers}
                  viewer={this.props.viewer}
                  user={this.props.viewer.me}
                  members={circle.members}
                  circle={circle}
                  navigation={navigation}
                />
            )}
            renderAddChildButton={() => (
              circle && (circle.type === 'CHILDREN') && this.props.viewer.me &&
                <AddChild
                  isCurrentUserOwnerOrCoowner={isCurrentUserTheOwner || isCurrentUserCoOwner}
                  addMember={this.props.handlers.addMember}
                  viewer={this.props.viewer}
                  user={this.props.viewer.me}
                  members={circle.members}
                  addChildParent={this.props.handlers.addChildParent}
                  navigation={navigation}
                />
            )}
            renderSubscribeButtom={() => (
              circle &&
                  !isCurrentUserAParent &&
                  !isCurrentUserAMember &&
                  ((viewer.me &&
                    ((circle.type === "ADULTS" &&
                      viewer.me.profileType === "PERSON") ||
                      ((circle.type === "TEAMS" || circle.type === "CLUBS") &&
                        viewer.me.profileType === "ORGANIZATION") ||
                      (circle.type === 'CHILDREN' && 
                        viewer.me.isSubAccount) ||
                      (circle.type === "COMPANIES" &&
                        (viewer.me.profileType === "BUSINESS" ||
                          viewer.me.profileType === "SOLETRADER")))) ||
                    !viewer.me) && (
                    <Subscribe
                      addMember={handlers.addMember}
                      showTerms={handlers.showTerms}
                      viewer={viewer}
                      circle={circle}
                      members={circle.members}
                      isSubscribing={isSubscribing}
                      onClose={handlers.close}
                      updateFrom={updateFrom}
                      navigation={navigation}
                    />
                  )
            )}
          />
        )}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  language: state.sportunityLocale.language
});

const dispatchToProps = (dispatch) => ({
  updateFrom: (status) => dispatch(updateFrom(status))
});

const ReduxContainer = connect(stateToProps, dispatchToProps)(Info);

export default ReduxContainer;

I18n.fallbacks = true;
I18n.translations = translations;

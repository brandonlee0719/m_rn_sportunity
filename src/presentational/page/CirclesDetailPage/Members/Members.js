import React, { Component } from "react";
import { Text, View, ScrollView, Switch, Dimensions } from "react-native";
import I18n from "react-native-i18n";

import translations from "sportunity/src/translations.js";
import MembersView from '../MembersView';
import AddChild from '../AddChild';
import Loader from '../../../ActivityIndicatorLoader/page';
import { colors, metrics } from "../../../../theme";
import Card from "../../../UI/Card";
import styles from '../style';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class Members extends Component {
  render() {
    const {
      viewer,
      circle,
      isCurrentUserTheOwner,
      isCurrentUserCoOwner,
      isCurrentUserAParent,
      isDetailSwitchOne,
      handlers,
    } = this.props;

    if (!circle) {
      return <Loader isAnimating={true} />;
    }

    return (
      <ScrollView>
        {circle && (circle.type === 'CHILDREN') && this.props.viewer.me && !viewer.me.isSubAccount && 
          <AddChild
            isCurrentUserOwnerOrCoowner={isCurrentUserTheOwner || isCurrentUserCoOwner}
            addMember={handlers.addMember}
            viewer={viewer}
            user={viewer.me}
            members={circle.members}
            addChildParent={handlers._handleAddChildParent}
          />
        }

        {circle && circle.askedInformation && !!circle.askedInformation.length && (isCurrentUserTheOwner || isCurrentUserCoOwner) && (
          <View style={styles.switchRow}>
            <Text style={[styles.titleDesc, {flex: 4}]}>
              {I18n.t('sportunityDisplayParticipantDetails')}
            </Text>
            <Switch
              style={styles.switchButton}
              onTintColor={colors.skyBlue}
              value={isDetailSwitchOne}
              onValueChange={handlers.handleSwitchChange}
            />
          </View>
        )}

        {circle && 
          <ScrollView>
            <MembersView
              removeMember={handlers.removeMember}
              members={circle.members}
              detailed={isDetailSwitchOne}
              circle={circle}
              userCanRemoveMember={(isCurrentUserTheOwner || isCurrentUserCoOwner)}
              isCurrentUserTheOwner={isCurrentUserTheOwner}
              hideFulFilledInfosIcon={(!isCurrentUserTheOwner && !isCurrentUserCoOwner)}
              viewer={viewer}
            />
          </ScrollView>
        }

        {circle && circle.memberParents && circle.memberParents.length > 0 && (isCurrentUserTheOwner || isCurrentUserCoOwner || isCurrentUserAParent) && 
          <Card height={220} style={{ marginBottom: metrics.doubleBaseMargin }}>
            <ScrollView>
              <MembersView
                removeMember={handlers.removeMember}
                members={circle.memberParents}
                detailed={false}
                circle={circle}
                userCanRemoveMember={false}
                hideFulFilledInfosIcon={true}
                viewer={viewer}
                isParentList={true}
              />
            </ScrollView>
          </Card>
        }
      </ScrollView>
    )
  }
}

export default Members;

I18n.fallbacks = true;
I18n.translations = translations;

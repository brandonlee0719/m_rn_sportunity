import React from 'react';
import { View, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Toast from "react-native-simple-toast";
import I18n from "react-native-i18n";

import translations from "sportunity/src/translations.js";
import Info from './Info';
import Members from './Members';
import Menu from './Menu';

import { colors, images } from '../../../theme';

export const getCircleDetailTabs = ({
  navigation,
  viewer,
  circle,
  isCurrentUserTheOwner,
  isCurrentUserAMember,
  isCurrentUserCoOwner,
  isDetailSwitchOne,
  isCurrentUserAParent,
  isSubscribing,
  infoHandlers,
  membersHandlers,
  chatHandlers,
  menuHandlers,
  updateCircleTabState,
  circleTabState,
}) => {

  const handleTabBarPress = ({ defaultHandler }, screen) => {
    updateCircleTabState(screen);
    defaultHandler();
  }

  const Tabs = createMaterialTopTabNavigator(
    {
      CircleDetailsInfo: {
        screen: () => (
          <Info
            viewer={viewer}
            circle={circle}
            handlers={infoHandlers}
            isSubscribing={isSubscribing}
            isCurrentUserTheOwner={isCurrentUserTheOwner}
            isCurrentUserCoOwner={isCurrentUserCoOwner}
            isCurrentUserAMember={isCurrentUserAMember}
            isCurrentUserAParent={isCurrentUserAParent}
            navigation={navigation}
          />
        ),
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="info-outline" color={tintColor} size={25} />,
        },
      },
      CircleDetailsMembers: {
        screen: () => (
          <Members
            viewer={viewer}
            circle={circle}
            handlers={membersHandlers}
            isDetailSwitchOne={isDetailSwitchOne}
            isCurrentUserTheOwner={isCurrentUserTheOwner}
            isCurrentUserCoOwner={isCurrentUserCoOwner}
            isCurrentUserAParent={isCurrentUserAParent}
            navigation={navigation}
          />
        ),
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="person" color={tintColor} size={25} />,
          tabBarOnPress: (params) => handleTabBarPress(params, 'CircleDetailsMembers'),
        },
      },
      CircleDetailsChat: {
        screen: () => <View />,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Image style={{ height: 20, width: 20, tintColor, marginBottom: -5 }} source={images.comments} />,
          tabBarOnPress: (params) => {
            if (circle && (isCurrentUserTheOwner || isCurrentUserAMember)) {
              chatHandlers.handleChatButtonPress();
              handleTabBarPress(params, 'CircleDetailsInfo');
            }
            else {
              Toast.show(I18n.t("circleChatAccessRestricted"));
            }
          }
        },
      },
      CircleDetailsMenu: {
        screen: () => (
          <Menu
            viewer={viewer}
            circle={circle}
            handlers={menuHandlers}
            isCurrentUserAMember={isCurrentUserAMember}
            isCurrentUserTheOwner={isCurrentUserTheOwner}
            navigation={navigation}
          />
        ),
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <IconEntypo name="dots-three-horizontal" color={tintColor} size={25} />,
          tabBarOnPress: (params) => handleTabBarPress(params, 'CircleDetailsMenu'),
        },
      },
    },
    {
      initialRouteName: circleTabState,
      lazy: true,
      backBehavior: 'none',
      swipeEnabled: false,
      animationEnabled: false,
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: { backgroundColor: colors.blue },
        activeTintColor: colors.white,
        indicatorStyle: { backgroundColor: colors.white }
      },
    }
  )

  return <Tabs />;
}

I18n.fallbacks = true;
I18n.translations = translations;
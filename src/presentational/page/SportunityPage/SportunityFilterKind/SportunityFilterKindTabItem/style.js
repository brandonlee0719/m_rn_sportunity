import { StyleSheet } from 'react-native';
import { merge } from 'lodash';
import { platformStyle } from '../../../../../lib/PlatformUtils/PlatformUtils'

import {
  colors,
  metrics,
  fonts,
} from '../../../../../../src/theme';

const nonSelected = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: metrics.sportunitiesBottomTabItemPadding,
    paddingBottom: metrics.sportunitiesBottomTabItemPadding,
    position: 'relative'
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 10,
    marginTop: 5
  },
  tabIcon: {
    width: 22,
    height: 22,
    tintColor: colors.white,
  },
};

const selected = merge({}, nonSelected, {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 10,
    marginTop: 5
  },
  tabIcon: {
    width: 22,
    height: 22,
    tintColor: colors.bloodOrange,
  },
});


const containerBase = {
  flexDirection: 'row',
  backgroundColor: colors.blue,
  height: metrics.navBarHeight,
  marginTop: 0,
  borderTopColor: colors.blue,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderBottomColor: colors.blue,
  borderBottomWidth: StyleSheet.hairlineWidth,
};
const containerAndroid = {
  height: 50,
  paddingTop: 14,
  height: 70,
};
const containeriOS = {
  height: 70,
  paddingTop: 14,
};
const badgeContainerBase = {
  position: 'absolute',
  width: 15,
  height: 15,
  backgroundColor: colors.red,
  justifyContent: 'center',
  borderRadius: 10,
  alignItems: 'center',
  zIndex: 2,
};
const badgeContainerAndroid = {
  left: 42,
  top: 8,
};
const badgeContaineriOS = {
  left: 40,
  top: 17,
}

export const badgeStyle = StyleSheet.create({
  container: platformStyle(containerBase, containerAndroid, containeriOS),
  icon: {
    width: 25,
    height: 22,
    zIndex: 1,
  },
  badgeContainer: platformStyle(badgeContainerBase, badgeContainerAndroid, badgeContaineriOS),
  badge:{
    color: 'white',
    ...fonts.style.h5,
    fontSize: 8,
  }
});

export const nonSelectedStyle = StyleSheet.create(nonSelected);
export const selectedStyle = StyleSheet.create(selected);
export const underlayColor = colors.steel;

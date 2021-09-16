import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import * as globals from '../../lib/globalsjs/globals';
import { connect } from 'react-redux';

const maxBadgeNumberStr = '99+';
const openDrawer = () => globals.object('openDrawer').call('openDrawer');
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

const DrawerIcon = ({ badgeNumber, imageStyle = {} }) => (
  <View style={styles.row}>
    <TouchableOpacity style={styles.iconContainer} onPress={openDrawer} >
      <Image source={images.menu_burger} style={[styles.icon, imageStyle]} />
      {badgeNumber > 0 || badgeNumber==maxBadgeNumberStr
        ?
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>{badgeNumber}</Text>
          </View>
        :
        null
      }
    </TouchableOpacity>
  </View>
);

const styles = {
  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4
  },
  iconContainer: {
    width: 50,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 25,
    height: 22,
    zIndex: 1,
  },
  badgeContainer:{
    position: 'absolute',
    width: 18,
    height: 18,
    left: 4,
    top: 0,
    backgroundColor: colors.red,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 2,
  },
  badge:{
    color: 'white',
    ...fonts.style.h5,
    fontSize: 10,
  },

};

DrawerIcon.propTypes = {
  badgeNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

const mapsToState = ({
  sportunityProfile: { counts: { unreadAllTotal } }
}) => ({ badgeNumber: maxBadgeNumber(unreadAllTotal || 0) });

export default connect(mapsToState)(DrawerIcon);

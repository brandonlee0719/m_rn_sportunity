

import PropTypes from 'prop-types';

import React from 'react';

import { View,
       } from 'react-native';

import style from './style';

// import sportunityFilterKinds from '../../enums/sportunityFilterKinds';


const floatingMenu = ({ children, innerStyle={} }) => (
  <View style={[style.content, innerStyle]}>
    {children}
  </View>
);


floatingMenu.propTypes = {

  children: PropTypes.node,
};

export default floatingMenu;


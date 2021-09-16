import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import { colors, metrics } from 'sportunity/src/theme';

import { scrollableTabSpecificStyles } from './style';

const SportunityTabView = (props) => (
  props.children.filter(i => Boolean(i)).length > 1 ?
    <ScrollableTabView 
      renderTabBar={() => 
        <DefaultTabBar 
          style={{height:38, borderWidth: 0, borderColor: '#f00'}} 
          tabStyle={{height: 38, backgroundColor:'#fff', paddingTop: 10}} 
          tabsContainerStyle={{height:38, paddingTop: 10}}>
        </DefaultTabBar>
      }
      tabBarUnderlineStyle={{ backgroundColor: colors.blue, height: 5}} 
      initialPage={props.initialPage}
      onChangeTab={props.onChangeTab}
      locked={true}
      page={props.page}
      {...scrollableTabSpecificStyles} 
    >
      {props.children}
    </ScrollableTabView>
  : props.children
);

SportunityTabView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default SportunityTabView;

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import I18n from 'react-native-i18n';

import icons from 'sportunity/src/theme/images';
import { colors } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';

import style from './style';


class FilterButton extends Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
        fadeValue: new Animated.Value(1),
    }
  }

  onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > this.state.currentScrollPosition && e.nativeEvent.contentOffset.y > 50) {
      Animated.timing(this.state.fadeValue, {
        toValue: 0, 
        duration: 100
      }).start()
    }
    else {
      Animated.timing(this.state.fadeValue, {
        toValue: 1, 
        duration: 100
      }).start()
    }
    
    this.setState({currentScrollPosition: e.nativeEvent.contentOffset.y})
  }

  render(){

    return (
      <Animated.View style={[{opacity: this.state.fadeValue._value}, style.floatingFilterContainer]}>
          {this.state.fadeValue && this.state.fadeValue._value > 0 &&
            <TouchableOpacity style={style.floatingFilterTouchable} onPress={this.props.pressButton}>
              <Image source={icons.filter} style={[style.floatingFilterIcon, this.props.isFilterActive && style.activeFloatingFilterIcon]}/>
              <Text style={[style.floatingFilterText, this.props.isFilterActive && style.activeDloatingFilterText]}>
                {!!this.props.count 
                ?   I18n.t('sportunitiesTabFilter').toUpperCase() + ' (' + this.props.count + ')'
                :   I18n.t('sportunitiesTabFilter').toUpperCase()}
              </Text>
            </TouchableOpacity>
          }
      </Animated.View>
    )

  }
}

export default FilterButton
I18n.fallbacks = true
I18n.translations = translations;

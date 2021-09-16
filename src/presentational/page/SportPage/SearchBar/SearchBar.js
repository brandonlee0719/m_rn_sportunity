import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchText } from 'sportunity/src/action/sportActions.js'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';


import { images } from 'sportunity/src/theme';
import styles from './style';

class SearchBar extends Component {

  searchSport = (text) => {
    this.props.filterSports(text);
  }
  render(){
    return(
      <View style={styles.container}>

        <Image source={images.search} style={styles.searchIcon}/>

        <TextInput
          style={styles.input}
          placeholder={I18n.t('searchSports')}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="characters"
          onChangeText={(text) => this.props.filterSports(text)}
        />

      </View>
    )
  }

}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  updateSearchText: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  searchText: state.sportunitySport.searchText,
});

const dispatchToProps = (dispatch) => ({
  updateSearchText: bindActionCreators(updateSearchText, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(SearchBar)

I18n.fallbacks = true
I18n.translations = translations;

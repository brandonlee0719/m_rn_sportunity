import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from 'lodash';
import { updateSearchPlaceText } from 'sportunity/src/action/newActivityActions';
import { images, colors } from 'sportunity/src/theme';
import styles from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

/**
*  SearchBar
*/
class SearchBar extends Component {
  /**
  *  Constructor
  */
  constructor(){
    super();
    this.updateSearchPlaceText = debounce(this.updateSearchPlaceText, 300);
  }

  updateSearchPlaceText = (text) => {
    this.props.updateSearchPlaceText(text);
  }
  /**
  *  Render
  */
  render(){
    return(
      <View style={styles.container}>

        <Image source={images.search_blue} />

        <TextInput
          style={styles.input}
          placeholder={I18n.t('searchVenue')}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.updateSearchPlaceText(text)}
          underlineColorAndroid={colors.snow}
        />

      </View>
    )
  }
}

SearchBar.propTypes = {
  updateSearchPlaceText: PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => ({
  updateSearchPlaceText: bindActionCreators(updateSearchPlaceText, dispatch),
});

export default connect(
  null,
  dispatchToProps
)(SearchBar);

I18n.fallbacks = true
I18n.translations = translations;

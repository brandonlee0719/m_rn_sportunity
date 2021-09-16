import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';

import translations from 'sportunity/src/translations.js';
import NavBar from './NavBar';
import { dispatchToActions } from '../../../action/utils';
import { resetAllFields } from '../../../action/newActivityActions';

class NewActivityWithNavBar extends Component {
  componentDidMount() {
    this.handleAndroidBackButton()
  }

  componentWillUnmount = () => {
    if (!this.props.noValidate) {
      this.props.resetAllFields();
    }
    BackHandler.removeEventListener('hardwareBackPress', () => {});
  }

  handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.onExit();
      return true;
    });
  };

  onExit = () => {
    if (!this.props.fieldChanged || this.props.noValidate) {
      this.props.navigation.goBack(null)
    }
    else {
      Alert.alert(
        I18n.t('accountAuthorizedUsersLeave'),
        I18n.t('accountAuthorizedUsersLeaveWithoutSaving'),
        [
            {text: I18n.t('yes'), onPress: () => this.props.navigation.goBack(null)},
            {text: I18n.t('no'), onPress: () => {return;}}
        ]
      )    
    }
  }

  render(){
    const {
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
      step,
      children,
      isLoggedIn,
      displayNextButton,
      onNextButtonPress,
    } = this.props;

    return(
      <View style={{flex: 1}}>
        <NavBar
          step={step}
          onExit={this.onExit}
          isLoggedIn={isLoggedIn}
          displayNextButton={displayNextButton}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          navigation={navigation}
          onNextButtonPress={onNextButtonPress}
        />
        {children}
      </View>
    )
  }
}

NewActivityWithNavBar.propTypes = {
  resetAllFields: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  fieldChanged: state.sportunityNewActivity.fieldChanged, 
});

export default withNavigation(connect(
  stateToProps,
  dispatchToActions({
    resetAllFields
  }),
)(NewActivityWithNavBar));

I18n.fallbacks = true
I18n.translations = translations;

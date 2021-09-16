import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, View, BackHandler, TouchableOpacity, Image, Platform, Dimensions, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';
import { Circle } from 'react-native-progress';

import NextButton from '../../NextButton';
import translations from 'sportunity/src/translations.js';
import { dispatchToActions } from '../../../action/utils';
import { resetNewCircleFields } from '../../../action/newCircleActions';
import { images, colors, metrics} from '../../../theme';
import navBarStyles from '../NewActivityPage/NavBar/style';

const SCREEN_WIDTH = Dimensions.get('window').width;

class NewCircleNavBar extends Component {
  componentDidMount() {
    this.props.validateExit && this.handleAndroidBackButton()
  }

  componentWillUnmount = () => {
    const { validateExit, resetNewCircleFields } = this.props;
    if (validateExit) {
      resetNewCircleFields();
      BackHandler.removeEventListener('hardwareBackPress', () => {});
    }
  }

  handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.onExit();
      return true;
    });
  };

  onExit = () => {
    if (this.props.onLeftButtonPress) {
      this.props.onLeftButtonPress();
    }
    if (!this.props.fieldChanged || !this.props.validateExit) {
      this.props.navigation.goBack()
    }
    else {
      Alert.alert(
        I18n.t('accountAuthorizedUsersLeave'),
        I18n.t('accountAuthorizedUsersLeaveWithoutSaving'),
        [
            {text: I18n.t('yes'), onPress: () => this.props.navigation.goBack()},
            {text: I18n.t('no'), onPress: () => {return;}}
        ]
      )    
    }
  }

  render(){
    const {
      step,
      children,
      loading,
      title,
      rightButtonText,
      displayNextButton,
      onNextButtonPress,
      maxSteps=5,
    } = this.props;

    return(
      <View style={{ flex: 1, backgroundColor: colors.snow }}>
        <View style={ Platform.OS === 'android' ? navBarStyles.navBarContainerAndroid : navBarStyles.navBarContainerIOS }>
          <TouchableOpacity
            onPress={this.onExit}
            style={navBarStyles.navBarReturnButton}
          >
            <Image
              source={images.right_arrow}
              style={navBarStyles.navBarReturnButtonIcon}
            />
          </TouchableOpacity>
          <Text style={navBarStyles.navBarTitle}>
            {typeof title === 'string' ? title : `${I18n.t('newCircle')} - ${I18n.t('step')} ${step} ${I18n.t('of')} ${maxSteps}`}
          </Text>
          <View style={StyleSheet.flatten([navBarStyles.navBarNextButtonContainer, { width: SCREEN_WIDTH * 0.3 }])}>
            {loading
              ? (
                <View style={{ paddingRight: metrics.baseMargin }}>
                  <Circle size={20} color={colors.snow} indeterminate={true} borderWidth={3} borderColor={colors.snow} />
                </View>
              )
              : displayNextButton
                ? <NextButton text={rightButtonText} onPress={onNextButtonPress} />
                : null
            }
          </View>
        </View>

        {children}
      </View>
    )
  }
}

NewCircleNavBar.propTypes = {
  resetNewCircleFields: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  fieldChanged: state.sportunityNewCircle.fieldChanged,
});

export default withNavigation(connect(
  stateToProps,
  dispatchToActions({
    resetNewCircleFields
  }),
)(NewCircleNavBar));

I18n.fallbacks = true
I18n.translations = translations;

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import Text from 'react-native-text';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
} from 'react-relay';
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
// These styles are imported from reusable components
import OpacityButton from 'sportunity/src/presentational/OpacityButton';
import opacityButtonStyles from 'sportunity/src/presentational/OpacityButton/style';
import Icon from 'sportunity/src/presentational/Icon';
import iconStyles from 'sportunity/src/presentational/Icon/style';
import Input, { styles as inputStyles } from 'sportunity/src/presentational/Input';
import icons from 'sportunity/src/theme/images';
import Toast from 'react-native-simple-toast';
import { metrics, fonts, colors } from 'sportunity/src/theme';
import ChangePasswordMutation from './ChangePasswordMutation.js';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

class ForgotPassword extends Component {

  state = {
    isLoading: false,
    errorMessage: '',
    pseudo: '',
    email: '',
  }

  updatePseudo = (text) => {
    this.setState({
      pseudo: text,
    })
  }

  updateEmail = (text) => {
    this.setState({
      email: text,
    })
  }

  resetPassword = async () => {
    this.setState({
      isLoading: true,
    })

    this.setState({
      isLoading: false,
    })
  }

  changePassword = () => {
    this.setState({
      isLoading: true,
    })
    const viewer = this.props.viewer;
    const pseudo = this.state.pseudo;
    const email = this.state.email;

    ChangePasswordMutation.commit({
      pseudo,
      email
    },
    () => {
      this.setState({
        isLoading: false,
      });
      Toast.show(I18n.t('forgotPasswordToastSuccess'));
      this.props.navigation.navigate('settings');
    },
    error => {
      Toast.show(I18n.t('forgotPasswordToastError'));
      this.setState({
        isLoading: false,
      });
      // let errors = JSON.parse(error.getError().source);
    })
  }

  render() {
    const {
      isLoading,
      errorMessage,
    } = this.state;

    return (
      <ScrollView behavior={"padding"} contentContainerStyle={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Icon
            iconSource={icons.key}
            iconStyle={[iconStyles.centerIcon, iconStyles.keyIcon]}
          />
          <Text style={styles.centerText}>
            {I18n.t('forgotPasswordTitle')}
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <Input
            styles={inputStyles.input}
            inputIconStyles={inputStyles.icon}
            updateText={(text) => this.updatePseudo(text)}
            placeholder={I18n.t('forgotPasswordPseudo')}
          />
          <Input
            styles={inputStyles.input}
            inputIconStyles={inputStyles.icon}
            updateText={(text) => this.updateEmail(text)}
            placeholder={I18n.t('forgotPasswordEmail')}
          />
          {/* <KeyboardSpacer/> */}
        </View>

        {isLoading 
        ? <ActivityIndicator
            animating={isLoading}
            style={styles.ActivityIndicator}
          /> 
        : null
        }
        {errorMessage 
        ? <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        : null
        }

        <OpacityButton
          buttonStyles={opacityButtonStyles.submitButton}
          textStyles={opacityButtonStyles.submitText}
          text={I18n.t('forgotPasswordReset')}
          handlePress={() => this.changePassword()}
        />
      </ScrollView>
    );
  }
}



ForgotPassword.propTypes = {
  viewer: PropTypes.object.isRequired,
};

const ForgotPasswordTemp = createFragmentContainer(withNavigation(ForgotPassword), 
  graphql`
    fragment ForgotPassword_viewer on Viewer{
      id
    }
  `,
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('loginForgotPassword')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ForgotPasswordQuery {
            viewer {
              ...ForgotPassword_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <ForgotPasswordTemp query={props} viewer={props.viewer} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: metrics.doubleBaseMargin,
    backgroundColor: colors.white
  },
  centerText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin,
  },
  inputsContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: fonts.size.small,
    color: colors.red,
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin,
  },
  activityIndicator: {
    position: 'absolute',
  },
});

I18n.fallbacks = true

I18n.translations = translations;

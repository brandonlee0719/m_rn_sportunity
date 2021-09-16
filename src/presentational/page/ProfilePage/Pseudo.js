import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import {createRefetchContainer, graphql } from 'react-relay'

import { View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'sportunity/src/theme';
import styles from './infoContentStyles';
import PseudoMutation from './PseudoMutation.js'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class Pseudo extends PureComponent {

  constructor(){
    super();
    this.state = {
      isInputVisible: false,
      pseudo: '',
    }
  }

  componentDidMount = () => {
    this.setState({
      pseudo: this.props.pseudo,
    })
  }

  showInput = () => {
    this.setState({
      isInputVisible: true,
    })
  }

  onBlurOrFocus = () => {
    if (typeof this.props.toggleEditField !== 'undefined')
      this.props.toggleEditField(); 
  }

  updatePseudo = (text) => {
    this.setState({
      pseudo: text,
    })
  }

  submitPseudo = () => {
    const viewer = this.props.viewer;
    const userIDVar = this.props.userId;
    const pseudoVar = this.state.pseudo;

    this.props.relay.refetch(fragmentVariables => ({
      ...fragmentVariables,
      pseudo: this.state.pseudo,
      requestUserExists: true
    }),
    null,
    () => {
      if (this.props.viewer.userExists) {
        Toast.show(I18n.t('registerSubAccount_userAlreadyExists'));
      }
      else {
        PseudoMutation.commit({
            userID: userIDVar,
            user: {
              pseudo: pseudoVar,
            },
          },
          () => {
            Toast.show(I18n.t('pseudoUpdated'));
            this.setState({
              isInputVisible: false,
            });
          },
          error => {
            let errors = JSON.parse(error.getError().source);
            console.log(errors);
          },
        );
      }
    })
  }

  render(){
    const { pseudo, viewer } = this.props;
    return(
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.capitalWord}>
              {I18n.t('pseudo') + '  '}
            </Text>
            {!this.state.isInputVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
              <TouchableOpacity
                style={styles.addContainer}
                onPress={this.showInput}
              >
                <Icon name="pencil" color={colors.charcoal} size={18} />
              </TouchableOpacity>
            }
          </View>
          {this.state.isInputVisible 
          ? <View style={styles.textareaContainer}>
              <TextInput
                style={styles.textarea}
                value={this.state.pseudo}
                numberOfLines={1}
                autoCorrect={false}
                maxLength={3000}
                placeholderTextColor="grey"
                placeholder={I18n.t('newPseudo')}
                autoCapitalize="none"
                onChangeText={(text) => this.updatePseudo(text)}
                underlineColorAndroid={colors.silver}
                onBlur={this.onBlurOrFocus}
                onFocus={this.onBlurOrFocus}
              />
              {this.state.isInputVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
                  <TouchableOpacity
                    style={styles.addContainer}
                    onPress={this.submitPseudo}
                  >
                    <IconFA5 name="check" color={colors.skyBlue} size={20} />
                  </TouchableOpacity>
              }
            </View> 
          : <Text style={styles.text}>
              {pseudo || ''}
            </Text>
          }
        </View>
      </View>
    )
  }

}

Pseudo.propTypes = {
  pseudo: PropTypes.string,
  viewer: PropTypes.object.isRequired,
};


export default createRefetchContainer(Pseudo, {
    viewer: graphql`
      fragment Pseudo_viewer on Viewer @argumentDefinitions (
        pseudo: {type: "String"},
        requestUserExists: {type: "Boolean!", defaultValue: false}
      ) {
        userExists(pseudo: $pseudo) @include(if: $requestUserExists)
        me {
          id
        }
      }
    `
  },
  graphql`
    query PseudoRefetchQuery (
      $pseudo: String,
      $requestUserExists: Boolean!
    ) {
      viewer {
        ...Pseudo_viewer @arguments (pseudo: $pseudo, requestUserExists: $requestUserExists)
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;

import PropTypes from 'prop-types';
import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'sportunity/src/theme';
import DescriptionMutation from './DescriptionMutation.js'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import styles from './infoContentStyles';

class Description extends PureComponent {

  constructor(){
    super();
    this.state = {
      isInputVisible: false,
      description: '',
    }
  }

  componentDidMount = () => {
    this.setState({
      description: this.props.description,
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

  updateDescription = (text) => {
    this.setState({
      description: text,
    })
  }

  submitDescription = () => {
    const viewer = this.props.viewer;
    const userIDVar = this.props.userId;
    const descriptionVar = this.state.description;

    DescriptionMutation.commit({
      userID: userIDVar,
      user: {
        description: descriptionVar,
      },
    },
    () => {
      Toast.show(I18n.t('descriptionUpdated'));
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

  render(){
    const { description, viewer } = this.props;
    return(
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.capitalWord}>
              {I18n.t('description') + '  '}
            </Text>
            {
              !this.state.isInputVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
              <TouchableOpacity
                style={styles.addContainer}
                onPress={this.showInput}
              >
                <Icon name="pencil" color={colors.charcoal} size={18} />
              </TouchableOpacity>
            }
          </View>
          {
            this.state.isInputVisible ?
              <View style={styles.textareaContainer}>
                <TextInput
                  style={styles.textarea}
                  multiline
                  value={this.state.description}
                  numberOfLines={10}
                  autoCorrect={false}
                  maxLength={3000}
                  placeholderTextColor="grey"
                  placeholder={I18n.t('newDescription')}
                  autoCapitalize="none"
                  onChangeText={(text) => this.updateDescription(text)}
                  underlineColorAndroid={colors.silver}
                  onBlur={this.onBlurOrFocus}
                  onFocus={this.onBlurOrFocus}
                />

                {
                  this.state.isInputVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
                  <TouchableOpacity
                    style={styles.addContainer}
                    onPress={this.submitDescription}
                  >
                    <IconFA5 name="check" color={colors.skyBlue} size={20} />
                  </TouchableOpacity>
                }
              </View> :
              <Text style={styles.text}>
                {description || ''}
              </Text>
          }
        </View>
      </View>
    )
  }

}

Description.propTypes = {
  description: PropTypes.string,
  viewer: PropTypes.object.isRequired,
};

export default Description;

I18n.fallbacks = true
I18n.translations = translations;

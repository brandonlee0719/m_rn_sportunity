import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, AsyncStorage, StyleSheet, Text, Modal, TouchableOpacity, Image, WebView, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../Header';
const { webAppUrl } = require('../../../../conf/constants.json');

class NotificationPreferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      isLoading: true,
      token: ''
    };
  }

  componentDidMount = async () => {
    let token;
    try {
      token = await AsyncStorage.getItem('token');
    } catch (err) {
      token = '';
    }
    this.setState({
        isLoading: false,
        token,
    });
  }

  _buttonPressed = () => {
    this.setState({isModalVisible: true})
  }

  render() {

    return (
        <TouchableOpacity
        style={styles.container}
        onPress={this._buttonPressed}
        >
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isModalVisible}
                onRequestClose={() => this.setState({isModalVisible: false})}
            >
                <View style={styles.modalContainer}>
                    <Header 
                      onPressFunc={() => this.setState({isModalVisible: false})}
                      imgSrc={icons.down_arrow}
                      text={I18n.t('accountNotificationPreferences')}
                    />

                    {/* <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => this.setState({isModalVisible: false})}
                            style={styles.closeIcon}
                        >
                            <Image
                                source={icons.down_arrow}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {I18n.t('accountNotificationPreferences')}
                        </Text>
                    </View> */}

                    <View style={styles.content}>
                        {!this.state.isLoading && this.state.token !== '' && 
                            <WebView 
                                source={{uri: webAppUrl + '/notification-preferences/'+this.state.token}}
                                style={{marginBottom: -50}}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                            />
                        }
                        <ActivityIndicator
                            animating={this.state.isLoading}
                            size="large"
                            color={colors.blue}
                        />
                    </View>
                </View>
            </Modal>

            <View style={styles.subContainer}>
                <Text style={styles.text}>
                    {I18n.t('accountNotificationPreferences')}
                </Text>
                <Text style={styles.select}>
                    {I18n.t('accountNotificationPreferencesSubtitle')}
                </Text>
            </View>
            <Image
                style={styles.icon}
                source={icons.right_arrow_blue}
            />
        </TouchableOpacity>
    )
  }
}

export default NotificationPreferences;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
  },
  content: {
      flex: 1,
    justifyContent: 'center'
  },
  formContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flex: 1
  },
  inputRow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin*2,
    marginBottom: metrics.baseMargin
  },
  errorText: {
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.error,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 5,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

I18n.fallbacks = true
I18n.translations = translations;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';

import { colors, images } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../Header';

import styles from './style'

class BankWireModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isQueryDone: false,
    };
  }

  componentDidMount = () => {
  }

  componentWillReceiveProps = (nextProps) => {
    
    if (nextProps.isModalVisible && !this.state.isQueryDone && nextProps.amount && nextProps.amount.cents && nextProps.amount.cents > 0) {
      this.props.queryBankWire(nextProps.amount);
      this.setState({isQueryDone: true})
    } 
  }

  render() {
    const {viewer} = this.props ;

    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.isModalVisible}
        onRequestClose={this.props.onClose}
      >
        <View>
        <Header 
          onPressFunc={this.props.onClose}
          imgSrc={icons.down_arrow}
          text={I18n.t('accountWalletMakeBankWireModalTitle')}
        />
          {/* <View style={styles.header}>
            <TouchableOpacity
              onPress={this.props.onClose}
              style={styles.closeIcon}
            >
              <Image
                source={icons.down_arrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>
              {I18n.t('accountWalletMakeBankWireModalTitle')}
            </Text>
          </View> */}

          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.noteText}>
                {I18n.t('accountWalletMakeBankWireModalNote')}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.explainationText}>
                {I18n.t('accountWalletMakeBankWireModalExplaination')}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>
                {I18n.t('accountWalletReference')}
              </Text>
              <Text style={styles.text}>
                {viewer.bankwireToWallet ? viewer.bankwireToWallet.wireReference : ''}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>
                {I18n.t('accountWalletBankAccountType')}
              </Text>
              <Text style={styles.text}>
                {viewer.bankwireToWallet ? viewer.bankwireToWallet.bankAccountType : ''}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>
                {I18n.t('accountWalletOwnerName')}
              </Text>
              <Text style={styles.text}>
                {viewer.bankwireToWallet ? viewer.bankwireToWallet.ownerName : ''}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>
                {I18n.t('accountWalletOwnerAddress')}
              </Text>
              <Text style={styles.text} numberOfLines={2} textBreakStrategy={"balanced"}>
                {viewer.bankwireToWallet ? viewer.bankwireToWallet.ownerAddress : ''}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>
                {I18n.t('accountWalletIBAN')}
              </Text>
              <Text style={styles.text}>
                {viewer.bankwireToWallet ? viewer.bankwireToWallet.IBAN : ''}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>
                {I18n.t('accountWalletBIC')}
              </Text>
              <Text style={styles.text}>
                {viewer.bankwireToWallet 
                ? viewer.bankwireToWallet.BIC.length === 8 
                  ? viewer.bankwireToWallet.BIC + 'XXX'
                  : viewer.bankwireToWallet.BIC
                : ''}
              </Text>
            </View>

          </View>  
        </View>
      </Modal>
    )
  }
}

export default BankWireModal

I18n.fallbacks = true
I18n.translations = translations;

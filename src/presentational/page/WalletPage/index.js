import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, Text, Modal, TouchableOpacity, Image, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { colors, images } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Prompt from 'react-native-prompt';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import BankwireInfoModal from './bankwireInfoModal';

import styles from './style'

class WalletModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isBankwireInfoModalVisible: false,
        isPromptVisible: false,
        amount: {
          cents: 0,
          currency: 'CHF'
        }
    };
  }

  componentDidMount = () => {
    this.setState({
      amount: {
        cents: 0, 
        currency: this.props.userCurrency
      }
    })

    if (this.props.viewer && this.props.viewer.me && this.props.viewer.me.isProfileComplete) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        queryAmountOnWallet: true,
        queryBankWireToWallet: false,
        amount: {cents:0, currency: 'CHF'}
      });
      
      this.props.relay.refetch(
          refetchVariables,
          null,
          null,
          {force: false}
      );
    }
    else {
      Toast.show(I18n.t('sportunityToastCompleteProfile'));
      this.props.navigation.navigate('myAccount', { 
        paymentMethodOptional: true, 
        bankAccountOptional: true, 
        hideNavBar:false,
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    
  }

  _handleClose = () => {
      this.setState({
        isBankwireInfoModalVisible: false
      })
  }

  _handleOpen = () => {
    this.setState({
      isBankwireInfoModalVisible: true
    })
  }

  _handleOpenPrompt = () => {
    this.setState({
      isPromptVisible: true
    })
  }

  _handleSubmitPrompt = (value) => {
    if (Number(value) && Number(value) > 0) {
      this.setState({
        amount: {
          cents: Number(value),
          currency: this.props.userCurrency
        },
        isPromptVisible: false,
      })
      this._handleOpen()
    }
    else {
      //Toast.show(I18n.t('accountWalletMakeBankWireAmountError'))
      Alert.alert(
        
        I18n.t('accountWalletMakeBankWireAmountError'),
        '',
        [
          { text: 'OK', onPress: () => {} },
        ]
      )
    }
  }

  queryBankWire = (amount) => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      queryBankWireToWallet: true,
      amount: amount
    });
    
    this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
    );
   }

  render() {
    const {viewer} = this.props;

    return (
      <View style={{marginTop: 67}}>
        <BankwireInfoModal
          viewer={this.props.viewer}
          amount={this.state.amount}
          isModalVisible={this.state.isBankwireInfoModalVisible}
          onClose={this._handleClose}
          queryBankWire={this.queryBankWire}
        />
        
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {I18n.t('accountWalletAmountOnWallet')}
            </Text>
            <Text style={styles.text}>
              {viewer.amountOnWallet 
              ? viewer.amountOnWallet.amountOnWallet.cents / 100 + ' ' + viewer.amountOnWallet.amountOnWallet.currency
              : ''}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowText}>
              {I18n.t('accountWalletLockedAmount')}
            </Text>
            <Text style={styles.text}>
              {viewer.amountOnWallet 
              ? viewer.amountOnWallet.lockedAmount.cents / 100  + ' ' + viewer.amountOnWallet.lockedAmount.currency
              : ''}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.container}
            onPress={this._handleOpenPrompt}
            >
            <View style={styles.subContainer}>
              <Text style={styles.buttonText}>
                {I18n.t('accountWalletMakeBankWire')}
              </Text>
            </View>
            <Image
              style={styles.icon}
              source={icons.right_arrow_blue}
              />
          </TouchableOpacity>          
        </View>  

        <Prompt
          title={I18n.t('accountWalletMakeBankWireAmount')}
          defaultValue={this.state.amount.cents.toString()}
          visible={ this.state.isPromptVisible }
          onCancel={ () => this.setState({
            isPromptVisible: false
          }) }
          onSubmit={ (value) => this._handleSubmitPrompt(value) }
        />
        
      </View>
    )
  }
}

const stateToProps = (state) => ({
  userCurrency: state.sportunityLocale.userCurrency,
  userCountry: state.sportunityLocale.userCountry
});

const dispatchToProps = (dispatch) => ({
});

const ReduxContainer =  connect(
  stateToProps,
  dispatchToProps
)(WalletModal);

const WalletPageTemp = createRefetchContainer(ReduxContainer, {
    viewer: graphql`
        fragment WalletPage_viewer on Viewer @argumentDefinitions(
          queryAmountOnWallet: {type: "Boolean!", defaultValue: false},
          queryBankWireToWallet: {type: "Boolean!", defaultValue: false},
          amount: {type: "PriceInput!", defaultValue: "null"}
        ) {
            id
            me {
              id
              isProfileComplete
            }
            amountOnWallet @include (if: $queryAmountOnWallet) {
              amountOnWallet {
                cents,
                currency
              }
              lockedAmount {
                cents,
                currency
              }
            }
            bankwireToWallet (amount: $amount) @include(if: $queryBankWireToWallet) {
              wireReference
              bankAccountType
              ownerName
              ownerAddress
              IBAN
              BIC
            } 
          }
    `
  }, 
  graphql`
    query WalletPageRefetchQuery ($queryAmountOnWallet: Boolean!, $queryBankWireToWallet: Boolean!, $amount: PriceInput!) {
      viewer {
        
        ...WalletPage_viewer @arguments(queryAmountOnWallet: $queryAmountOnWallet, queryBankWireToWallet: $queryBankWireToWallet, amount: $amount)
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('accountWallet')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query WalletPageQuery{
            viewer {
              ...WalletPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <WalletPageTemp viewer={props.viewer} query={props} {...this.props}/>;
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

I18n.fallbacks = true
I18n.translations = translations;

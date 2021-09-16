// @flow
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, StyleSheet, ScrollView, Dimensions, KeyboardAvoidingView, Platform, Image, Text, Alert } from 'react-native';
import Toast from 'react-native-simple-toast';
import { CreditCardInput } from 'react-native-credit-card-input';
import I18n from 'react-native-i18n';

import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import icons from 'sportunity/src/theme/images';
import { metrics, colors } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import * as mangoPay from './mangoPayApi';
import type, { BankCard, CardRegistration } from './mangoPayApi';
import RegisterCardDataMutation from './RegisterCardDataMutation'

type BankCard$Input = {
  valid: boolean,
  values?: BankCard
};
type PaymentMethod$State = {
  card: BankCard$Input,
  error: boolean,
  process?: boolean
};

const normalizeCard = (input: BankCard): BankCard => ({
  number: input.number.replace(/\s/g, ''),
  expiry: input.expiry.replace(/\D/g, ''),
  cvc: input.cvc,
})

class PaymentMethodPage extends React.Component {
  static initState = { card: { valid: false }, error:false, process:false };
  state: PaymentMethod$State = PaymentMethodPage.initState;

  onCardInput = (card: BankCard$Input) => card && card.valid &&
    this.setState({ card, error: false })

  /*
  *  Step 1: tokenize mangoPay card
  */
  onRegister = () => {
    if(!this.state.card.valid)
      return this.setState({ error: true })
    this.setState({ process:true })
    if(this.state.card.values){
      console.log(this.state.card.values)
      console.log(this.props.viewer.cardRegistration)
      mangoPay.registerCard (
          normalizeCard(this.state.card.values),
          this.props.viewer.cardRegistration
        ).catch(err => console.log(err))
        .then(token => token
          ? this.updateCard(token)
          : this.setState({ error:true, process:false })
        )
    }
  }

  /*
  * Step 2: update token via registerCardData mutation
  */
  updateCard(token) {
    RegisterCardDataMutation.commit({
      cardRegistration: this.props.viewer.cardRegistration,
      token,
      viewer: this.props.viewer,
      userId: this.props.viewer.me.id
    },
    () => {
      Toast.show('Card successfully added!');
      this.finishRegistration();
    },
    error => {
      Alert.alert(
        I18n.t('error'),
        I18n.t('sportunityAlertnewOpponentFailed'),
        [
          { text: I18n.t('ok'), onPress: () => {} },
        ]
      )
      this.setState({ error: true, process:false })
    });
  }

  /*
  * Step 3: transition back
  */
  finishRegistration = () => {
    this.props.navigation.goBack()
    this.setState(PaymentMethodPage.initState);
  }

  render = () => {
    const smallScreen = Dimensions.get('window').height<600;
    
    return (
      <KeyboardAvoidingView contentContainerStyle={styles.container} behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? -77 : -240}>
        {Platform.OS === 'ios' ?
          <ScrollView>
            <View style={styles.cardsContainer}>
              <Text>
                {I18n.t('supportedCards')}
              </Text>
              <Image style={styles.cardsIcon} source={icons.accepted_cards}/>
            </View>
            <View style={styles.cardRow}>
              <CreditCardInput
                  labels={{ number: I18n.t('cardNumber'), expiry: I18n.t('expiryDate'), cvc: 'CVC/CCV' }}
                  requiresCVC
                  onChange={this.onCardInput}
                  cardScale={smallScreen ? 0.7 : 1}
                  inputContainerStyle={{marginBottom: 20, borderBottomWidth: 1, borderBottomColor: "black",}}
                  />
            </View>
            <View style={styles.buttonRow}>
              <Button
                  disabled={!this.state.card.valid || this.state.process}
                  error={this.state.error}
                  onPress={this.onRegister}>
                {I18n.t('saveCard')}
              </Button>
            </View>
          </ScrollView>
        : 
          <ScrollView style={{}}>
            <View style={styles.cardsContainer}>
              <Text>
                {I18n.t('acceptedCards')}
              </Text>
              <Image style={styles.cardsIcon} source={icons.accepted_cards}/>
            </View>
            <View style={styles.cardRowAndroid}>
              <CreditCardInput
                  labels={{ number: I18n.t('cardNumber'), expiry: I18n.t('expiryDate'), cvc: 'CVC/CCV' }}
                  requiresCVC
                  onChange={this.onCardInput}
                  cardScale={smallScreen ? 0.7 : 1}
                  inputContainerStyle={{marginBottom: 20, borderBottomWidth: 1, borderBottomColor: "black",}}
                  />
            </View>
            <View style={styles.buttonRow}>
              <Button
                  disabled={!this.state.card.valid || this.state.process}
                  error={this.state.error}
                  onPress={this.onRegister}>
                {I18n.t('saveCard')}
              </Button>
            </View>
          </ScrollView>
        }
      </KeyboardAvoidingView>
    )
  }
  static propTypes = {
    viewer: PropTypes.object.isRequired,
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: metrics.marginVertical,
  },
  cardRow: {
    height: 420,
  },
  cardRowAndroid: {
    height: 430
  },
  cardRowSmall: {
    height: 450,
    justifyContent: 'flex-start',
  },
  buttonRow: {
    flex: 1,
    width: '100%',
    marginBottom: 77
  },
  cardsContainer: {
    marginHorizontal: metrics.doubleBaseMargin,
    alignItems: 'center'
  },
  cardsIcon: {
    width: '50%',
    resizeMode: 'contain',
  }
})

const PaymentMethodPageTemp = createFragmentContainer(withNavigation(PaymentMethodPage), {
  viewer: graphql`fragment PaymentMethodPage_viewer on Viewer {
      me {
        id
      }
      cardRegistration {
        cardRegistrationId,
        preregistrationData,
        accessKey,
        cardRegistrationURL
      }
    }`,
  },
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('registerPayment')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PaymentMethodPageQuery{
            viewer {
              ...PaymentMethodPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <PaymentMethodPageTemp viewer={props.viewer} query={props} {...this.props}/>;
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
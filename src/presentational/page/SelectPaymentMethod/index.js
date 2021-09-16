import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Text from 'react-native-text';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import translations from 'sportunity/src/translations.js';

import icons from 'sportunity/src/theme/images';
import { metrics, colors, fonts } from 'sportunity/src/theme';
// import Price from '../EventDetailPage/PriceView'; //TODO: move to presentational level
import PaymentMethodsList from '../../PaymentMethodsList/PaymentMethodsList';
import Button from '../../Button/roundedButton';
import BankWireInfoModal from '../WalletPage/bankwireInfoModal';

class SelectPaymentMethodPage extends React.Component {

  constructor() {
    super();
    this.state = {
      paymentMethodId: null,
      isBankwireInfoModalVisible: false,
      walletIsSelected: false,
      isLoading: false
    }
  }

  componentDidMount = () => {   
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      query: true
    });
    
    this.props.relay.refetch(
      refetchVariables,
      null,
      null,
      {force: false}
    );
  }

  onChooseWallet = () => {
    const {viewer, amount, viewer: {amountOnWallet}} = this.props;

    let userPrice = this.props.amount

    if (amountOnWallet, amountOnWallet.amountOnWallet && amount && amount.cents > 0) {
        if ((viewer.amountOnWallet.amountOnWallet.cents - viewer.amountOnWallet.lockedAmount.cents) < userPrice.cents) {
            this.setState({isBankwireInfoModalVisible: true})
        }
        else {
          this.setState({walletIsSelected: true, paymentMethodId: null})
        }
    }
    else {
      this.setState({walletIsSelected: true, paymentMethodId: null})
    }
  }

  _handleCloseBankwireInfoModalVisible = () => {
    this.setState({isBankwireInfoModalVisible: false})
  }

  onChooseCard = (cardId) => {
    this.setState({ paymentMethodId: cardId, walletIsSelected: false })
  }

  queryBankWire = (amount) => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      query: true
    });
    
    this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
    );
  }

  validate = () => {
    this.setState({isLoading: true})
    this.state.walletIsSelected
    ? this.props.selectWallet(() => this.props.navigation.goBack())
    : this.props.selectCard(this.state.paymentMethodId, () => this.props.navigation.goBack())
  }

  render = () => {
    const {viewer, texts, viewer: {me: { paymentMethods }}} = this.props;
    const user = this.props.viewer.me;
    let userPrice = this.props.amount

    return (
        <View style={styles.page}>
            {texts.map(({text, style}, index) => (
              <Text key={index} style={style === 'h1' ? styles.h1 : styles.h2}>
                {text}
              </Text>
            ))}
            <View style={styles.row}>
                <Text>
                    {I18n.t('paymentMethodChoose')}
                </Text>
            </View>
            <PaymentMethodsList
              paymentMethods={paymentMethods}
              onSelect={(id) => this.onChooseCard(id)}
              itemStyle={styles.paymentItem}
              selectedId={this.state.paymentMethodId}
              title={I18n.t('creditCard')}
              navigation={this.props.navigation}
            />  
            {viewer && viewer.amountOnWallet && viewer.amountOnWallet.amountOnWallet && 
              <TouchableOpacity
                  style={styles.container}
                  onPress={this.onChooseWallet}
                  >
                  <View style={styles.subContainer}>
                      <Text style={styles.text}>
                          {I18n.t('accountWallet')}
                      </Text>
                      <Text style={styles.select}>
                          {I18n.t('accountWalletAvailable') +
                              (viewer.amountOnWallet.amountOnWallet.cents/100 - viewer.amountOnWallet.lockedAmount.cents/100) +
                              ' ' +
                              viewer.amountOnWallet.amountOnWallet.currency
                          }
                      </Text>
                  </View>
                  <Image
                      style={styles.icon}
                      source={icons.right_arrow_blue}
                      />
              </TouchableOpacity>
            }

            {(this.state.walletIsSelected || this.state.paymentMethodId) && 
              <View>
                <Text style={styles.confirmationText}>
                  {I18n.t('accountMembershipFeesPaymentChosen') + ' : '}
                </Text>
                <Text style={styles.confirmationText}>
                  {this.state.walletIsSelected 
                  ? I18n.t('accountWallet') 
                  : I18n.t('creditCard') + ' (' + paymentMethods.find(paymentMethod => paymentMethod.id === this.state.paymentMethodId).cardMask + ')'
                  }
                </Text>
              </View>
            }

            {(this.state.walletIsSelected || this.state.paymentMethodId) && 
              <View style={styles.buttonContainer}>
                {this.state.isLoading
                ? <ActivityIndicator
                    size="small"
                    animating={this.state.isLoading}
                    color={colors.blue}
                  />
                : <Button onPress={this.validate}>
                    {I18n.t('validate')}
                  </Button>
                }
              </View>
            }
            <BankWireInfoModal
                viewer={viewer}
                amount={{cents: userPrice.cents / 100, currency: userPrice.currency}}
                isModalVisible={this.state.isBankwireInfoModalVisible}
                onClose={this._handleCloseBankwireInfoModalVisible}
                queryBankWire={this.queryBankWire}
            />
        </View>
    );
  }
  static propTypes = {
    viewer: PropTypes.object.isRequired
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    padding: metrics.baseMargin,
    flex: 1,
  },
  paymentItem: {
    height:60
  },
  row: {
      padding: metrics.baseMargin
  },
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
  icon: {
    marginLeft: metrics.baseMargin,
  },
  h1: {
    ...fonts.style.normal,
    marginBottom: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin,
    color: colors.darkBlue
  },
  h2: {
    marginBottom: 5,
    paddingHorizontal: metrics.baseMargin
  },
  confirmationText: {
    marginTop: metrics.doubleBaseMargin,
    paddingHorizontal: metrics.baseMargin,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: metrics.doubleBaseMargin, // metric to use.
    alignItems: 'center',
    alignSelf: 'center',   
    backgroundColor: 'transparent'
  }
})

const SelectPaymentMethodPageTemp = createRefetchContainer(withNavigation(SelectPaymentMethodPage), {
    viewer: graphql`fragment SelectPaymentMethod_viewer on Viewer @argumentDefinitions (
      query: {type: "Boolean!", defaultValue: false}
    ) {
      id
      me {
        id,
        firstName,
        lastName,
        address {
          country
        },
        paymentMethods {
          id
          cardType
          cardMask
          expirationDate
          ...PaymentMethodsList_paymentMethods
        }
      }
      amountOnWallet @include (if: $query) {
        amountOnWallet {
            cents,
            currency
        }
        lockedAmount {
            cents,
            currency
        }
      }
    }`
  },
  graphql`query SelectPaymentMethodRefetchQuery (
    $query: Boolean!
  ){
    viewer {
      ...SelectPaymentMethod_viewer @arguments(
        query: $query
      )
    }    
  }

  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('paymentSelection'))
    };
  };
  
  setTitle = title => this.props.navigation.setParams({title})

  render() {
    let {amount, selectWallet, selectCard, texts} = this.props

    const {navigation} = this.props;
    if (navigation) {
      amount = navigation.getParam('amount', null)
      selectWallet = navigation.getParam('selectWallet', null)
      selectCard = navigation.getParam('selectCard', null)
      texts = navigation.getParam('texts', null)
    }

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SelectPaymentMethodQuery (
            $query: Boolean!
          ){
            viewer {
              ...SelectPaymentMethod_viewer @arguments(
                query: $query
              )
            }
          }
        `}
        variables={{
          query: false
        }}
        render={({error, props}) => {
          if (props) {
            return <SelectPaymentMethodPageTemp 
                viewer={props.viewer} 
                query={props} 
                setTitle={this.setTitle}
                amount={amount}
                selectWallet={selectWallet}
                selectCard={selectCard}
                texts={texts}
                {...this.props} 
              />;
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

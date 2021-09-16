import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
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
import Price from '../EventDetailPage/PriceView'; //TODO: move to presentational level
import PaymentMethodsList from '../../PaymentMethodsList/PaymentMethodsList';
import Header from './ConfirmBookingPageHeader'
import BankWireInfoModal from '../WalletPage/bankwireInfoModal';

class ChoosePaymentMethodPage extends React.Component {

  constructor() {
    super();
    this.state = {
      paymentMethodId: null,
      isBankwireInfoModalVisible: false
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

  getUserSpecificPrice = (user, paymentStatus, price) => {
    if (paymentStatus) {
      let index = paymentStatus.findIndex(paymentStatus => {
        return paymentStatus.status !== 'Canceled' && user && paymentStatus && paymentStatus.price && user.id === paymentStatus.user.id;
      });
      if (index >= 0)
        return paymentStatus[index].price
      else
        return price ;
    }
    else return price ;
  }

  onChooseWallet = () => {
    const {viewer, viewer: {sportunity, amountOnWallet, me: { paymentMethods }}} = this.props;
    let userPrice = this.getUserSpecificPrice(viewer.me, sportunity.paymentStatus, sportunity.price);
    if (amountOnWallet && sportunity && sportunity.price && sportunity.price.cents > 0) {
        if ((viewer.amountOnWallet.amountOnWallet.cents - viewer.amountOnWallet.lockedAmount.cents) < userPrice.cents) {
            this.setState({isBankwireInfoModalVisible: true})
        }
        else {
          this.props.navigation.navigate('confirmBooking', { id: sportunity.id, paymentWithWallet: true })
        }
    }
    else {
      this.props.navigation.navigate('confirmBooking', { id: sportunity.id, paymentWithWallet: true })
    }
  }

  _handleCloseBankwireInfoModalVisible = () => {
    this.setState({isBankwireInfoModalVisible: false})
  }

  onChooseCard = (cardId) => {
    const {viewer: {sportunity}} = this.props;
    this.setState({ paymentMethodId: cardId })
    this.props.navigation.navigate('confirmBooking',{ id: sportunity.id, paymentWithWallet: false, paymentMethodId: cardId })
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

  render = () => {
    const {viewer, viewer: {sportunity, me: { paymentMethods }}} = this.props;
    const user = this.props.viewer.me;
    let userPrice = this.getUserSpecificPrice(viewer.me, sportunity.paymentStatus, sportunity.price);

    return (
        <View style={styles.page}>
            <ScrollView style={styles.scrollView}>

                <Header sportunity={sportunity} />
                <Price sportunity={sportunity} viewer={viewer}/>
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
                <BankWireInfoModal
                    viewer={viewer}
                    amount={{cents: userPrice.cents / 100, currency: userPrice.currency}}
                    isModalVisible={this.state.isBankwireInfoModalVisible}
                    onClose={this._handleCloseBankwireInfoModalVisible}
                    queryBankWire={this.queryBankWire}
                />
            </ScrollView>
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
    flex: 1,
  },
  scrollView: {
    height: 500,
    padding: metrics.baseMargin,
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
})

const ChoosePaymentMethodPageTemp = createRefetchContainer(withNavigation(ChoosePaymentMethodPage), {
    viewer: graphql`fragment ChoosePaymentMethod_viewer on Viewer @argumentDefinitions (
      id: {type: "ID"},
      query: {type: "Boolean!", defaultValue: false}
    ) {
      id
      ...PriceView_viewer
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
      sportunity(id: $id) {
        ...ConfirmBookingPageHeader_sportunity
        id
        price {
          cents
          currency
        }
        paymentStatus {
            user {
              id
            }
            status
            price {
              cents,
              currency
            }
        }
        ...Header_sportunity
        ...PriceView_sportunity
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
  graphql`query ChoosePaymentMethodRefetchQuery (
    $id: ID, 
    $query: Boolean!
  ){
    viewer {
      ...ChoosePaymentMethod_viewer @arguments(
        id: $id,
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
    const {navigation} = this.props;
    let id = navigation.getParam('id', null)

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ChoosePaymentMethodQuery (
            $id: ID, 
            $query: Boolean!
          ){
            viewer {
              ...ChoosePaymentMethod_viewer @arguments(
                id: $id,
                query: $query
              )
            }
          }
        `}
        variables={{
          id, 
          query: false
        }}
        render={({error, props}) => {
          if (props) {
            return <ChoosePaymentMethodPageTemp 
                viewer={props.viewer} 
                query={props} 
                setTitle={this.setTitle}
                id={id}
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

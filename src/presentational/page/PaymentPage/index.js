import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  Image,
  Alert,
  Modal,
  WebView
} from "react-native";
import { graphql, QueryRenderer, createRefetchContainer } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";
import { withNavigation } from "react-navigation";
import I18n from "react-native-i18n";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import { Header } from '../../Header';
import { webAppUrl } from 'sportunity/conf/constants.json';

import { colors, images, fonts } from "sportunity/src/theme";
import BankwireInfoModal from "../WalletPage/bankwireInfoModal";
import requireCashOutMutation from "./RequireCashOutMutation";
import requireCashInMutation from "./RequireCashInMutation";
import Toast from "react-native-simple-toast";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      payAmount: 0,
      selectedPaymentMethods: null,
      isBankWireInfoModalVisible: false,
      secure3DURL: null,
      isLoadingAfterPayment: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { bankAccount, paymentMethods } = this.props.viewer.me;
    // set default payment method
    if (bankAccount && bankAccount.id) {
      this.setState({ selectedPaymentMethods: bankAccount.id });
    } else if (
      paymentMethods &&
      paymentMethods[0] &&
      paymentMethods[0].id &&
      navigation.getParam("type", "") !== "cashOut"
    ) {
      this.setState({ selectedPaymentMethods: paymentMethods[0].id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { payAmount, selectedPaymentMethods } = this.state;
    const { navigation } = this.props;
    const { amountOnWallet, me } = this.props.viewer;
    const { bankAccount, paymentMethods } = this.props.viewer.me;
    const paymentMethodsIds = paymentMethods.map(i => i.id);
    let currency = "CHF";
    if (
      amountOnWallet &&
      amountOnWallet.amountOnWallet &&
      amountOnWallet.amountOnWallet.currency
    ) {
      currency = amountOnWallet.amountOnWallet.currency;
    }
    let cents = 0;
    if (
      amountOnWallet &&
      amountOnWallet.amountOnWallet &&
      amountOnWallet.amountOnWallet.cents
    ) {
      cents = amountOnWallet.amountOnWallet.cents;
    }
    // if no amount just reset the button
    if (
      navigation.getParam("saveButtonPressed", false) &&
      !Number(payAmount) &&
      !Number(payAmount) > 0
    ) {
      navigation.setParams({ saveButtonPressed: false });
      Alert.alert(I18n.t("accountWalletMakeBankWireAmountError"), "", [
        {
          text: "OK",
          onPress: () => {}
        }
      ]);
      return;
    }
    // cash in
    if (
      navigation.getParam("type", "") === "cashIn" &&
      navigation.getParam("saveButtonPressed", false)
    ) {
      // for cash in if user select a bank, then send him to the page with all the information
      if (
        bankAccount &&
        bankAccount.id &&
        bankAccount.id === selectedPaymentMethods
      ) {
        navigation.setParams({ saveButtonPressed: false });
        this.setState({ isBankWireInfoModalVisible: true });
      } else if (paymentMethodsIds.includes(selectedPaymentMethods)) {
        // loading indicator
        this.setState({ loading: true });
        // for credit card use requireCashIn on Mutation
        requireCashInMutation.commit(
          {
            userId: me.id,
            amount: {
              cents: payAmount * 100,
              currency: currency
            },
            paymentMethodId: selectedPaymentMethods
          },
          (response, errors) => {
            if (response && response.requireCashIn && response.requireCashIn.secure3DURL) {
              this.setState({loading: false, secure3DURL: response.requireCashIn.secure3DURL})
            }
            else if (response && response.requireCashIn) {
              this.setState({ loading: false });
              Toast.show(I18n.t("moneyTransferSuccessfull"));
              navigation.state.params.refetch();
              navigation.goBack();
            } 
            else {
              Toast.show("Error");
            }
          },
          error => {
            this.setState({ loading: false });
            Toast.show("Error");
          }
        );
      }
    }
    // cash out
    if (
      navigation.getParam("type", "") === "cashOut" &&
      navigation.getParam("saveButtonPressed", false)
    ) {
      // check amount is enough
      if (Number(payAmount) > cents / 100) {
        navigation.setParams({ saveButtonPressed: false });
        Alert.alert("Invalid amount", "", [
          {
            text: "OK",
            onPress: () => {}
          }
        ]);
        return;
      } else {
        this.setState({ loading: true });
        requireCashOutMutation.commit(
          {
            userId: me.id,
            amount: {
              cents: payAmount * 100,
              currency: currency
            }
          },
          (response, errors) => {
            this.setState({ loading: false });
            if (response && response.requireCashOut) {
              Toast.show(I18n.t("bankwireSent"));
              navigation.state.params.refetch();
              navigation.goBack();
            } else {
              Toast.show("Error");
            }
          },
          error => {
            this.setState({ loading: false });
            Toast.show("Error");
          }
        );
      }
    }

    //  just reset, so we don't stuck in a loop
    if (navigation.getParam("saveButtonPressed", false)) {
      navigation.setParams({ saveButtonPressed: false });
    }
  }

  closeModal = () => {
    const { navigation } = this.props;
    this.setState({isLoadingAfterPayment: true})

    setTimeout(() => {
      this.setState({secure3DURL: null, isLoadingAfterPayment: false, loading: false})
      navigation.state.params.refetch();
      navigation.goBack();
      
      setTimeout(() => {
        Toast.show(I18n.t("moneyTransferSuccessfull"));
      }, 1000)
    }, 5000)
  }

  queryBankWire = amount => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      queryBankWireToWallet: true,
      amount: amount
    });
    this.props.relay.refetch(
      refetchVariables,
      null,
      () => {
        console.log("queryBankWire done");
      },
      { force: false }
    );
  };

  render() {
    const { navigation } = this.props;
    const { amountOnWallet } = this.props.viewer;
    const { bankAccount, paymentMethods } = this.props.viewer.me;
    let currency = "CHF";
    if (
      amountOnWallet &&
      amountOnWallet.amountOnWallet &&
      amountOnWallet.amountOnWallet.currency
    ) {
      currency = amountOnWallet.amountOnWallet.currency;
    }
    //
    let cents = 0;
    if (
      amountOnWallet &&
      amountOnWallet.amountOnWallet &&
      amountOnWallet.amountOnWallet.cents >= 0
    ) {
      cents = amountOnWallet.amountOnWallet.cents;
    }
    //
    let pickerItems = [];
    if (bankAccount && bankAccount.id) {
      pickerItems.push(
        <Picker.Item
          key={bankAccount.id}
          value={bankAccount.id}
          label={`${bankAccount.IBAN}`}
        />
      );
    }
    if (
      paymentMethods &&
      paymentMethods.length > 0 &&
      navigation.getParam("type", "") !== "cashOut"
    ) {
      paymentMethods.map(i => {
        pickerItems.push(
          <Picker.Item key={i.id} value={i.id} label={i.cardMask} />
        );
      });
    }
    // loading
    if (this.state.loading) {
      return <ActivityLoader isAnimating={true} />;
    }
    return (
      <View style={{ flex: 1, backgroundColor: colors.snow, alignItems: "center" }}>
        {!!this.state.secure3DURL && 
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={!!this.state.secure3DURL}
            onRequestClose={() => !this.state.isLoadingAfterPayment && this.setState({secure3DURL: null})}
          >
            <Header 
              onPressFunc={() => !this.state.isLoadingAfterPayment && this.setState({secure3DURL: null})}
              imgSrc={images.down_arrow}
              text={I18n.t('paymentWithCard')}
            />
            <View style={{flex: 1}}>
              {this.state.isLoadingAfterPayment
              ? <ActivityLoader isAnimating={true}/>
              : <WebView
                  source={{uri: this.state.secure3DURL}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  onNavigationStateChange={e => e.url.indexOf(webAppUrl) >= 0 && this.closeModal()}
                />
              }
            </View>
          </Modal>
        }
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          {`${this.props.navigation.getParam("text", "")} ${cents /
            100} ${currency}`}
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 100
          }}
        >
          <TextInput
            autoFocus
            value={
              this.props.navigation.getParam("payAmount", null) ||
              this.state.payAmount
            }
            onChangeText={payAmount => {
              this.setState({ payAmount });
            }}
            keyboardType="numeric"
            style={{
              height: 40,
              width: 40,
              borderColor: "#000",
              borderBottomWidth: 1,
              marginRight: 10
            }}
          />
          <Text style={{ fontSize: 40 }}>{currency}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "90%"
          }}
        >
          {pickerItems && pickerItems.length > 0 && (
            <Picker
              selectedValue={this.state.selectedPaymentMethods}
              onValueChange={itemValue => {
                this.setState({ selectedPaymentMethods: itemValue });
              }}
            >
              {pickerItems}
            </Picker>
          )}
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("paymentSettings");
            }}
            style={{ flexDirection: "row", alignItems: 'center' }}
          >
            <Image style={{ width: 25, height: 25 }} source={images.plus} />
            <Text style={{fontSize: 16, marginLeft: 10}}>{I18n.t("addCreditOrBank")}</Text>
          </TouchableOpacity>
        </View>
        <BankwireInfoModal
          viewer={this.props.viewer}
          amount={{
            cents: this.state.payAmount * 100,
            currency: currency
          }}
          isModalVisible={this.state.isBankWireInfoModalVisible}
          onClose={() => {
            this.setState({ isBankWireInfoModalVisible: false });
          }}
          queryBankWire={this.queryBankWire}
        />
      </View>
    );
  }
}

const PaymentPageTemp = createRefetchContainer(
  withNavigation(PaymentPage),
  {
    viewer: graphql`
      fragment PaymentPage_viewer on Viewer
        @argumentDefinitions(
          queryAmountOnWallet: { type: "Boolean!", defaultValue: true }
          queryBankWireToWallet: { type: "Boolean!", defaultValue: false }
          amount: { type: "PriceInput!", defaultValue: "null" }
        ) {
        me {
          id
          isProfileComplete
          bankAccount {
            id
            addressLine1
            addressLine2
            city
            postalCode
            country
            ownerName
            IBAN
            BIC
          }
          paymentMethods {
            id
            cardType
            cardMask
            expirationDate
          }
        }
        amountOnWallet @include(if: $queryAmountOnWallet) {
          amountOnWallet {
            cents
            currency
          }
          lockedAmount {
            cents
            currency
          }
        }
        bankwireToWallet(amount: $amount) @include(if: $queryBankWireToWallet) {
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
    query PaymentPageRefetchQuery(
      $queryAmountOnWallet: Boolean!
      $queryBankWireToWallet: Boolean!
      $amount: PriceInput!
    ) {
      viewer {
        ...PaymentPage_viewer
          @arguments(
            queryAmountOnWallet: $queryAmountOnWallet
            queryBankWireToWallet: $queryBankWireToWallet
            amount: $amount
          )
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    const saveButton = navigation.getParam("saveButton", "");
    return {
      title: navigation.getParam("title", ""),
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            navigation.setParams({ saveButtonPressed: true });
          }}
        >
          <Text style={{ color: "#fff", marginRight: 15 }}>{saveButton}</Text>
        </TouchableOpacity>
      )
    };
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PaymentPageQuery {
            viewer {
              ...PaymentPage_viewer
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return (
              <PaymentPageTemp
                viewer={props.viewer}
                query={props}
                {...this.props}
              />
            );
          } else {
            return <ActivityLoader isAnimating={true} />;
          }
        }}
      />
    );
  }
}

/* how to use
 *
 * see MyWallet/index.js
 *
 * */

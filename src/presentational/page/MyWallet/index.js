import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { createRefetchContainer, graphql, QueryRenderer } from "react-relay";
import { withNavigation } from "react-navigation";
import environment from "sportunity/src/createRelayEnvironment";
import { connect } from "react-redux";
import { colors, images, fonts } from "sportunity/src/theme";
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import Transactions from "./Transactions";
import Toast from "react-native-simple-toast";
import Fees from "./Fees";
import { metrics } from "../../../theme";

class WalletReduxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paidTab: 1,
      filter: {
        users: []
      },
      loading: false,
      refetch: false
    };
    this.refetch = this.refetch.bind(this);
  }

  componentDidMount() {
    // prepare filter
    const filter = { users: [] };
    if (this.props.viewer.me && this.props.viewer.me.id) {
      filter.users.push(this.props.viewer.me.id);
    }
    if (
      this.props.viewer.me.subAccounts &&
      this.props.viewer.me.subAccounts.length
    ) {
      this.props.viewer.me.subAccounts.map(i => {
        filter.users.push(i.id);
      });
    }
    this.setState({ filter: { ...this.state.filter, ...filter } });
  }

  componentDidUpdate() {
    if (this.state.refetch) {
      this.refetch();
    }
  }

  refetch() {
    this.setState({ refetch: false, loading: true });
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      amount: { cents: 0, currency: "CHF" }
    });
    this.props.relay.refetch(
      refetchVariables, 
      null, 
      () => setTimeout(() => this.setState({loading: false}), 200), 
      { force: true }
    );
  }

  _handleUsersFilterChange = id => {
    const filter = JSON.parse(JSON.stringify(this.state.filter));
    if (filter.users.includes(id)) {
      filter.users = filter.users.filter(i => i !== id);
    } else {
      filter.users.push(id);
    }
    this.setState({ filter });
  };

  render() {
    const { paidTab, filter } = this.state;
    const { navigation } = this.props;
    const { me } = this.props.viewer;
    let cents = 0;
    let currency = "CHF";
    if (
      !!this.props.viewer &&
      !!this.props.viewer.amountOnWallet &&
      !!this.props.viewer.amountOnWallet.amountOnWallet &&
      !!this.props.viewer.amountOnWallet.amountOnWallet.cents >= 0 &&
      !!this.props.viewer.amountOnWallet.amountOnWallet.currency
    ) {
      cents = this.props.viewer.amountOnWallet.amountOnWallet.cents;
      currency = this.props.viewer.amountOnWallet.amountOnWallet.currency;
    }

    return (
      <ScrollView style={{ backgroundColor: colors.steel, flex: 1 }}>
        {me && me.subAccounts && me.subAccounts.length > 0 && (
          <ScrollView horizontal>
            <FilterButton
              text={me.pseudo}
              onFilterTouched={() => {
                this._handleUsersFilterChange(me.id);
              }}
              isFilterApplied={filter.users.includes(me.id)}
            />
            {me.subAccounts.map(i => (
              <FilterButton
                text={i.pseudo}
                onFilterTouched={() => {
                  this._handleUsersFilterChange(i.id);
                }}
                isFilterApplied={filter.users.includes(i.id)}
              />
            ))}
          </ScrollView>
        )}

        <View style={{ backgroundColor: colors.snow, marginBottom: 20 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              flexDirection: 'row',
              position: 'relative'
            }}
          >
            <Text style={{ color: colors.blue, fontSize: 22 }}>
              {I18n.t("fortune")}
            </Text>
            <TouchableOpacity 
              onPress={() => !this.state.loading && this.refetch()}
              style={{position: 'absolute', right: metrics.doubleBaseMargin, paddingHorizontal: 10, paddingVertical: 5, height: 25, width: 25}}
            >
              {this.state.loading
              ? <View style={{height: 15, width: 15, marginTop: 5}}><ActivityLoader isAnimating={true} /></View>
              : <Image style={{tintColor: colors.blue, height: 25, width: 25}} source={images.refresh} />
              }
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 10
            }}
          >
            <Text style={{ fontSize: 32 }}>{`${cents / 100} ${currency}`}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#000",
              borderTopWidth: 1
            }}
          >
            <View
              style={{ width: "50%", borderColor: "#000", borderRightWidth: 1 }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (
                    (me.paymentMethods && me.paymentMethods.length > 0) ||
                    (me.bankAccount && me.bankAccount.id)
                  ) {
                    navigation.navigate("paymentPage", {
                      title: I18n.t("cashIn"),
                      text: I18n.t("cashInText"),
                      saveButton: I18n.t("send"),
                      type: "cashIn",
                      refetch: () => {
                        this.setState({ refetch: true });
                      }
                    });
                  } else {
                    Toast.show(I18n.t("youCannotLoadMoney"));
                    this.props.navigation.navigate("paymentSettings");
                  }
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  type: "cashOut"
                }}
              >
                <Image source={images.cashIn} />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 10,
                    paddingBottom: 10
                  }}
                >
                  {I18n.t("cashIn")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "50%" }}>
              <TouchableOpacity
                onPress={() => {
                  if (
                    (me.paymentMethods && me.paymentMethods.length > 0) ||
                    (me.bankAccount && me.bankAccount.id)
                  ) {
                    navigation.navigate("paymentPage", {
                      title: I18n.t("cashOut"),
                      text: I18n.t("cashOutText"),
                      saveButton: I18n.t("send"),
                      type: "cashOut",
                      refetch: () => {
                        this.setState({ refetch: true });
                      }
                    });
                  } else {
                    Toast.show(I18n.t("youCannotReceiveMoney"));
                    this.props.navigation.navigate("paymentSettings");
                  }
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image source={images.cashOut} />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 10,
                    paddingBottom: 10
                  }}
                >
                  {I18n.t("cashOut")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: colors.snow, marginBottom: 10 }}>
          {!me.isProfileComplete ? (
            <View
              style={{
                backgroundColor: colors.snow,
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("paymentSettings");
                }}
              >
                <Text style={{ textAlign: "center", fontSize: fonts.size.h4 }}>
                  {I18n.t("walletProfileNotColplete")}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "#000",
                  borderBottomWidth: 1
                }}
              >
                <View
                  style={{
                    width: "50%",
                    borderColor: paidTab === 0 ? colors.blue : "#000",
                    borderBottomWidth: paidTab === 0 ? 8 : 0
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ paidTab: 0 });
                    }}
                  >
                    <Text
                      style={{
                        color: colors.blue,
                        textAlign: "center",
                        fontWeight: "bold",
                        paddingTop: 10,
                        paddingBottom: 10
                      }}
                    >
                      {I18n.t("toBePaid")}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "50%",
                    borderColor: paidTab === 1 ? colors.blue : "#000",
                    borderBottomWidth: paidTab === 1 ? 8 : 0
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ paidTab: 1 });
                    }}
                  >
                    <Text
                      style={{
                        color: colors.blue,
                        textAlign: "center",
                        fontWeight: "bold",
                        paddingTop: 10,
                        paddingBottom: 10
                      }}
                    >
                      {I18n.t("mouvement")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {paidTab === 0 && (
                <QueryRenderer
                  environment={environment}
                  query={graphql`
                    query MyWalletFeesQuery(
                      $doQuery: Boolean!
                      $users: [String]
                    ) {
                      viewer {
                        ...Fees_viewer
                          @arguments(doQuery: $doQuery, users: $users)
                      }
                    }
                  `}
                  variables={{
                    refetch: this.state.refetch,
                    doQuery: true,
                    users: filter.users
                  }}
                  render={({ error, props }) => {
                    if (props) {
                      return (
                        <View style={{ flex: 1, backgroundColor: colors.snow }}>
                          <Fees
                            title={I18n.t("toBePaid")}
                            navigation={navigation}
                            viewer={props.viewer}
                            users={filter.users}
                            refetch={() => this.refetch()}
                          />
                        </View>
                      );
                    } else {
                      return <ActivityLoader isAnimating={true} />;
                    }
                  }}
                />
              )}
              {paidTab === 1 && (
                <QueryRenderer
                  environment={environment}
                  query={graphql`
                    query MyWalletDoneQuery(
                      $doQuery: Boolean!
                      $filter: TransactionFilter
                    ) {
                      viewer {
                        ...Transactions_viewer
                          @arguments(doQuery: $doQuery, filter: $filter)
                      }
                    }
                  `}
                  variables={{
                    refetch: this.state.refetch,
                    doQuery: true,
                    filter: {
                      users: filter.users
                    }
                  }}
                  render={({ error, props }) => {
                    if (props) {
                      return (
                        <View style={{ flex: 1, backgroundColor: colors.snow }}>
                          <Transactions
                            title={I18n.t("mouvement")}
                            navigation={navigation}
                            viewer={props.viewer}
                            users={filter.users}
                          />
                        </View>
                      );
                    } else {
                      return <ActivityLoader isAnimating={true} />;
                    }
                  }}
                />
              )}
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const WalletPageTemp = createRefetchContainer(
  WalletReduxContainer,
  {
    viewer: graphql`
      fragment MyWallet_viewer on Viewer
        @argumentDefinitions(
          queryAmountOnWallet: { type: "Boolean!", defaultValue: true }
          queryBankWireToWallet: { type: "Boolean!", defaultValue: false }
          amount: { type: "PriceInput!", defaultValue: "null" }
        ) {
        ...Transactions_viewer
        ...Fees_viewer
        id
        me {
          id
          pseudo
          isProfileComplete
          paymentMethods {
            id
          }
          bankAccount {
            id
          }
          subAccounts {
            id
            pseudo
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
    query MyWalletRefetchQuery(
      $queryAmountOnWallet: Boolean!
      $queryBankWireToWallet: Boolean!
      $amount: PriceInput!
    ) {
      viewer {
        ...MyWallet_viewer
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
    return {
      title: I18n.t("accountWallet")
    };
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query MyWalletQuery {
            viewer {
              ...MyWallet_viewer
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return (
              <WalletPageTemp
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

I18n.fallbacks = true;
I18n.translations = translations;

const FilterButton = ({ text, onFilterTouched, isFilterApplied }) => (
  <TouchableOpacity
    style={
      isFilterApplied
        ? filterButtonStyle.appliedItemContainer
        : filterButtonStyle.itemContainer
    }
    onPress={onFilterTouched}
  >
    <Text style={filterButtonStyle.itemName}>{text}</Text>
  </TouchableOpacity>
);

const filterButtonStyle = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.blue,
    paddingVertical: 5,
    marginVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginHorizontal: 3,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
    height: 25
  },
  appliedItemContainer: {
    backgroundColor: colors.bloodOrange,
    paddingVertical: 5,
    marginVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginHorizontal: 3,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
    height: 25
  },
  itemName: {
    fontSize: 10,
    color: colors.white
  }
});

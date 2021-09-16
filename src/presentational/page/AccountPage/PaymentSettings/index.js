import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createRefetchContainer, graphql, QueryRenderer } from "react-relay";
import { withNavigation } from "react-navigation";
import environment from "sportunity/src/createRelayEnvironment";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";

import { metrics, colors, fonts } from "sportunity/src/theme";
import icons from "sportunity/src/theme/images";
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import PaymentMethodsList from "../../../PaymentMethodsList/PaymentMethodsList";
import BankAccount from "./BankAccount";
import CardItem from "../../../list/CardItem/CardItem";
import DeletePaymentMethodMutation from "./DeletePaymentMethodMutation";

class PaymentSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaderVisible: false
    };
  }

  toggleLoader = bool =>
    this.setState({
      isLoaderVisible: bool
    });

  removePaymentMethod = (id: string) => {
    this.toggleLoader(true);

    DeletePaymentMethodMutation.commit(
      {
        paymentMethodId: id,
        userID: this.props.viewer.me.id
      },
      response => {
        this.toggleLoader(false);
        console.log(response);
        this.props.relay.refetch()
        Toast.show(I18n.t("accountToastPaymentRemoved"));
      },
      error => {
        this.toggleLoader(false);
        console.error(JSON.parse(error.getError().source));
        Toast.show(I18n.t("accountToastOperationFailed"));
      }
    );
  };

  render() {
    const {
      viewer,
      viewer: { me }
    } = this.props;

    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <CardItem
            title={
              me.profileType === "PERSON"
                ? I18n.t("accountPersonalInformation")
                : I18n.t("accountBusinessInformation")
            }
            subtitle={
              me.isProfileComplete
                ? I18n.t("accountInformationCompleted")
                : I18n.t("accountInformationComplete")
            }
            onPress={() => this.props.navigation.navigate("paymentInformation")}
          />

          {me && me.isProfileComplete ? (
            <PaymentMethodsList
              title={I18n.t("accountPaymentMethods")}
              paymentMethods={me.paymentMethods || []}
              onRemove={this.removePaymentMethod}
              disabled={!me || !me.isProfileComplete}
              navigation={this.props.navigation}
            />
          ) : (
            <CardItem
              title={I18n.t("accountPaymentMethods")}
              // onPress={() => {
              //   Toast.show(I18n.t("sportunityToastCompleteInformation"));
              // }}
              subtitle={I18n.t("accountCompleteYourInformation")}
            />
          )}

          {me && me.isProfileComplete ? (
            <BankAccount
              viewer={this.props.viewer}
              bankAccount={me.bankAccount}
              disabled={!me || !me.isProfileComplete}
              navigation={this.props.navigation}
            />
          ) : (
            <CardItem
              title={I18n.t("accountBankAccount")}
              // onPress={() => {
              //   Toast.show(I18n.t("sportunityToastCompleteInformation"));
              // }}
              subtitle={I18n.t("accountCompleteYourInformation")}
            />
          )}
        </View>

        <ActivityIndicator
          animating={this.state.isLoaderVisible}
          size="large"
          color={colors.blue}
        />
      </View>
    );
  }
}

const stateToProps = state => ({
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency
});

const dispatchToProps = dispatch => ({});

const PaymentSettingsTemp = createRefetchContainer(
  withNavigation(
    connect(
      stateToProps,
      dispatchToProps
    )(PaymentSettings)
  ),
  {
    viewer: graphql`
      fragment PaymentSettings_viewer on Viewer {
        ...BankAccount_viewer
        me {
          id
          profileType
          isProfileComplete
          paymentMethods {
            id
            cardType
            cardMask
            expirationDate
            ...PaymentMethodsList_paymentMethods
          }
          bankAccount {
            id
            ...BankAccount_bankAccount
          }
        }
      }
    `
  },
  graphql`
    query PaymentSettingsRefetchQuery {
      viewer {
        ...PaymentSettings_viewer
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t("accountPaymentSettings")
    };
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PaymentSettingsQuery {
            viewer {
              ...PaymentSettings_viewer
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return (
              <PaymentSettingsTemp
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1
  },
  subContainer: {
    flex: 1
  },
  text: {
    color: colors.darkBlue,
    fontWeight: "500"
  },
  modalContainer: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 5
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6
  },
  icon: {
    marginLeft: metrics.baseMargin
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    padding: metrics.baseMargin
  }
});

I18n.fallbacks = true;
I18n.translations = translations;

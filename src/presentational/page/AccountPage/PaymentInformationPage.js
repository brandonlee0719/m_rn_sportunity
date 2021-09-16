import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Button
} from "react-native";
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay";
import { withNavigation } from "react-navigation";
import environment from "sportunity/src/createRelayEnvironment";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import I18n from "react-native-i18n";

import translations from "sportunity/src/translations.js";
import { metrics, colors, fonts } from "sportunity/src/theme";

import AccountForm from "./AccountForm";
import AccountFormView from "./AccountFormView";

class PaymentInformationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyFrom: null
    };
  }

  componentDidMount() {
    const { me } = this.props.viewer;
    let copyFrom = null;
    if (me && !me.isProfileComplete) {
      if (me.masterAccount && me.masterAccount.isProfileComplete) {
        copyFrom = me.masterAccount;
      } else if (me.subAccounts && me.subAccounts.length) {
        me.subAccounts.map(i => {
          if (i.isProfileComplete) {
            copyFrom = i;
          }
        });
      }
    }
    if (copyFrom) {
      this.setState({ copyFrom });
    }
  }

  render() {
    const { me } = this.props.viewer;
    const { copyFrom } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {copyFrom 
        ? <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40
              }}
            >
              <Text>
                {`${I18n.t("accountInformationSameAs")} ${
                copyFrom.pseudo
                }`}
              </Text>
              <Switch
                onTintColor={colors.skyBlue}
                value={Boolean(this.state.copyFrom)}
                onValueChange={() => {
                  Boolean(this.state.copyFrom)
                    ? this.setState({ copyFrom: null })
                    : this.setState({ copyFrom: copyFrom });
                }}
              />
            </View>
            <AccountFormView
              id={this.props.viewer.me.id}
              viewer={{ me: { ...copyFrom } }}
              address={copyFrom.address}
              fromSportunityPage={this.props.fromSportunityPage}
              onSaveAccount={this.props.onSaveAccount}
            />
          </View>
        : <AccountForm
            viewer={this.props.viewer}
            address={this.props.viewer.me.address}
            fromSportunityPage={this.props.fromSportunityPage}
            onSaveAccount={this.props.onSaveAccount}
          />
        }
      </ScrollView>
    );
  }
}

const PaymentInformationPageTemp = createFragmentContainer(
  withNavigation(PaymentInformationPage),
  {
    viewer: graphql`
      fragment PaymentInformationPage_viewer on Viewer {
        ...AccountForm_viewer
        me {
          id
          firstName
          lastName
          nationality
          email
          birthday
          mangoId
          shouldDeclareVAT
          address {
            country
            ...AccountForm_address
          }
          isProfileComplete
          profileType
          paymentMethods {
            id
            cardType
            cardMask
            expirationDate
          }
          subAccounts {
            id
            pseudo
            firstName
            lastName
            nationality
            email
            birthday
            shouldDeclareVAT
            business {
              businessName
              businessEmail
              headquarterAddress {
                country
                city
                address
                zip
              }
              VATNumber
            }
            address {
              country
              city
              address
              zip
            }
            isProfileComplete
            profileType
            paymentMethods {
              id
              cardType
              cardMask
              expirationDate
            }
          }
          masterAccount {
            id
            pseudo
            firstName
            lastName
            nationality
            email
            birthday
            shouldDeclareVAT
            business {
              businessName
              businessEmail
              headquarterAddress {
                country
                city
                address
                zip
              }
              VATNumber
            }
            address {
              country
              city
              address
              zip
            }
            isProfileComplete
            profileType
            paymentMethods {
              id
              cardType
              cardMask
              expirationDate
            }
          }
        }
      }
    `
  }
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t("accountPaymentInformation")
    };
  };
  render() {
    let { navigation, onSaveAccount, fromSportunityPage } = this.props;
    if (navigation) {
      onSaveAccount = navigation.getParam("onSaveAccount", null);
      fromSportunityPage = navigation.getParam("fromSportunityPage", null);
    }

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PaymentInformationPageQuery {
            viewer {
              ...PaymentInformationPage_viewer
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return (
              <PaymentInformationPageTemp
                viewer={props.viewer}
                query={props}
                onSaveAccount={onSaveAccount}
                fromSportunityPage={fromSportunityPage}
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
    padding: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    justifyContent: "center"
  }
});

I18n.fallbacks = true;
I18n.translations = translations;

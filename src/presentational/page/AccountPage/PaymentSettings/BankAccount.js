import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Switch
} from "react-native";
import { pick } from "lodash";
import Button from "../../../Button/roundedButton";
import { metrics, colors, fonts } from "sportunity/src/theme";
import icons from "sportunity/src/theme/images";
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import { ListBlock, AddToList, ListBlockItem } from "../../../ListBlock";
import moment from "moment";
import { Header } from "../../../Header";
import { graphql, createFragmentContainer } from "react-relay";
import RegisterBankAccountMutation from "../../BankAccountPage/RegisterBankAccountMutation";
import Toast from "react-native-simple-toast";

import * as countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

class BankAccount extends React.Component {
  state: UserAccount$State;

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isCopyFromModalVisible: false,
      copyFrom: null
    };
  }

  componentDidMount() {
    const { me } = this.props.viewer;
    let copyFrom = null;
    if (me && !me.bankAccount) {
      if (
        me.masterAccount &&
        me.masterAccount.bankAccount &&
        me.masterAccount.bankAccount.id
      ) {
        copyFrom = me.masterAccount;
      } else if (me.subAccounts && me.subAccounts.length > 0) {
        me.subAccounts.map(i => {
          if (i.bankAccount && i.bankAccount.id) {
            copyFrom = i;
          }
        });
      }
    }
    if (copyFrom) {
      this.setState({ copyFrom });
    }
  }

  _buttonPressed = () => {
    if (this.props.bankAccount) {
      this.setState({ isModalVisible: true });
    } 
    else if (this.state.copyFrom) {
      this.setState({ isCopyFromModalVisible: true });
    } 
    else {
      this.setState({ isModalVisible: false });
      this.props.navigation.navigate("myBankAccount");
    }
  };

  updateBankAccount = () => {
    const country = countries.getName(
      this.state.copyFrom.bankAccount.country,
      "en"
    );
    RegisterBankAccountMutation.commit(
      {
        data: {
          addressLine1: this.state.copyFrom.bankAccount.addressLine1,
          addressLine2: this.state.copyFrom.bankAccount.addressLine2,
          city: this.state.copyFrom.bankAccount.city,
          postalCode: this.state.copyFrom.bankAccount.postalCode,
          // country: this.state.copyFrom.bankAccount.country,
          country,
          ownerName: this.state.copyFrom.bankAccount.ownerName,
          IBAN: this.state.copyFrom.bankAccount.IBAN,
          BIC: this.state.copyFrom.bankAccount.BIC
        },
        userID: this.props.viewer.me.id
      },
      (response, errors) => {
        console.log("Bank account added", response);
        console.log("Bank account errors", errors);
        if (!errors) {
          Toast.show(I18n.t("bankAccountSuccess"));
          this.setState({ isCopyFromModalVisible: false, copyFrom: null });
          this.props.navigation.goBack();
        } 
        else {
          Toast.show("Error");
        }
      },
      errors => {
        this.setState({
          error: true,
          process: false,
          message: errors && errors.length && errors[0].message
        });
        // console.error(JSON.parse(error.getError().source));
      }
    );
  };

  render() {

    return (
      <TouchableOpacity style={styles.container} onPress={this._buttonPressed}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isModalVisible}
          onRequestClose={() => this.setState({ isModalVisible: false })}
        >
          <View style={styles.modalContainer}>
            <Header
              onPressFunc={() => this.setState({ isModalVisible: false })}
              imgSrc={icons.down_arrow}
              text={I18n.t("accountBankAccount")}
            />
            <Text
              style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
            >
              {I18n.t("bankAccountYouCanSendMoneyOn")}
            </Text>
            <ListBlock title={I18n.t("accountBankAccount")}>
              {this.props.bankAccount && this.props.bankAccount.id && (
                <ListBlockItem style={styles.inputRow}>
                  <Text>{this.props.bankAccount.ownerName}</Text>
                  <Text>{this.props.bankAccount.addressLine1}</Text>
                  {this.props.bankAccount.addressLine2 ? (
                    <Text>{this.props.bankAccount.addressLine2}</Text>
                  ) : null}
                  <Text>
                    {this.props.bankAccount.postalCode +
                      ", " +
                      this.props.bankAccount.city +
                      ", " +
                      this.props.bankAccount.country}
                  </Text>
                  <Text>{this.props.bankAccount.IBAN}</Text>
                  {this.props.bankAccount.BIC && (
                    <Text>{this.props.bankAccount.BIC}</Text>
                  )}
                </ListBlockItem>
              )}
            </ListBlock>
          </View>
        </Modal>

        {this.state.isCopyFromModalVisible && !!this.state.copyFrom && (
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.isCopyFromModalVisible && !!this.state.copyFrom}
            onRequestClose={() =>
              this.setState({ isCopyFromModalVisible: false })
            }
          >
            <View style={styles.modalContainer}>
              <Header
                onPressFunc={() =>
                  this.setState({
                    isCopyFromModalVisible: false
                  })
                }
                imgSrc={icons.down_arrow}
                text={I18n.t("accountBankAccount")}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 40,
                  marginTop: 20,
                  paddingRight: 20
                }}
              >
                <Text style={{flex: 3, marginHorizontal: 20}}>
                  {`${I18n.t("bankAccountInformationSameAs")} ${this.state.copyFrom.pseudo}`}
                </Text>
                <Switch
                  onTintColor={colors.skyBlue}
                  value={Boolean(this.state.copyFrom)}
                  onValueChange={() => {
                    if (this.state.copyFrom) {
                      this.setState({
                        isCopyFromModalVisible: false,
                        copyFrom: null
                      });
                      this.props.navigation.navigate("myBankAccount");
                    }
                  }}
                />
              </View>
              <ListBlock title={I18n.t("accountBankAccount")}>
                {this.state.copyFrom.bankAccount &&
                  this.state.copyFrom.bankAccount.id && (
                    <View>
                      <ListBlockItem style={styles.inputRow}>
                        <Text>{this.state.copyFrom.bankAccount.ownerName}</Text>
                        <Text>
                          {this.state.copyFrom.bankAccount.addressLine1}
                        </Text>
                        {this.state.copyFrom.bankAccount.addressLine2 ? (
                          <Text>
                            {this.state.copyFrom.bankAccount.addressLine2}
                          </Text>
                        ) : null}
                        <Text>
                          {this.state.copyFrom.bankAccount.postalCode +
                            ", " +
                            this.state.copyFrom.bankAccount.city +
                            ", " +
                            this.state.copyFrom.bankAccount.country}
                        </Text>
                        <Text>{this.state.copyFrom.bankAccount.IBAN}</Text>
                        {this.state.copyFrom.bankAccount.BIC && (
                          <Text>{this.state.copyFrom.bankAccount.BIC}</Text>
                        )}
                      </ListBlockItem>
                      <Button onPress={this.updateBankAccount}>
                        {I18n.t("accountSaveButton")}
                      </Button>
                    </View>
                  )}
              </ListBlock>
            </View>
          </Modal>
        )}

        <View style={styles.subContainer}>
          <Text style={styles.text}>{I18n.t("accountBankAccount")}</Text>
          {this.props.bankAccount 
          ? <Text style={styles.select}>
              {I18n.t("accounteBankAccountCompleted")}
            </Text>
          : <Text style={styles.select}>{I18n.t("accountAddUpdateBank")}</Text>
          }
        </View>
        <Image style={styles.icon} source={icons.right_arrow_blue} />
      </TouchableOpacity>
    );
  }

  static propTypes = {};
}

export default createFragmentContainer(BankAccount, {
  viewer: graphql`
    fragment BankAccount_viewer on Viewer {
      me {
        id
        bankAccount {
          id
          ownerName
          addressLine1
          addressLine2
          city
          postalCode
          country
          IBAN
          BIC
        }
        subAccounts {
          id
          pseudo
          bankAccount {
            id
            ownerName
            addressLine1
            addressLine2
            city
            postalCode
            country
            IBAN
            BIC
          }
        }
        masterAccount {
          id
          pseudo
          bankAccount {
            id
            ownerName
            addressLine1
            addressLine2
            city
            postalCode
            country
            IBAN
            BIC
          }
        }
      }
    }
  `,
  bankAccount: graphql`
    fragment BankAccount_bankAccount on BankAccount {
      id
      ownerName
      addressLine1
      addressLine2
      city
      postalCode
      country
      IBAN
      BIC
    }
  `
});

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
    marginBottom: metrics.baseMargin,
    fontWeight: "500"
  },
  select: {
    color: colors.skyBlue,
    fontWeight: "500"
  },
  modalContainer: {
    flex: 1
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1
  },
  inputRow: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textRow: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin
  },
  errorText: {
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.error
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
  }
});

I18n.fallbacks = true;
I18n.translations = translations;

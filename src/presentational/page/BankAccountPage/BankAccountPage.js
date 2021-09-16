// @flow
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Picker,
  Dimensions
} from "react-native";
import Text from "react-native-text";
import Toast from "react-native-simple-toast";
import { TextInputMask } from "react-native-masked-text";
import I18n from "react-native-i18n";
import { withNavigation } from "react-navigation";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import environment from "sportunity/src/createRelayEnvironment";
import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";

import { metrics, colors, fonts } from "sportunity/src/theme";
import Button from "../../Button/roundedButton";
import Input, { styles as inputStyles } from "../../Input";
import RegisterBankAccountMutation from "./RegisterBankAccountMutation";

//TODO: move to types.js
type Model$BankAccount = {
  addressLine1: string,
  addressLine2?: string,
  city: string,
  postalCode: string,
  country: string,
  ownerName: string,
  IBAN: string,
  BIC?: string
};
type Abstract$FormValidation = {
  [field: string]: boolean
};
type BankAccount$State = {
  error: boolean,
  process: boolean,
  valid: boolean,
  data: Model$BankAccount,
  errors?: Set<string>,
  message?: string
};

class BankAccountPage extends React.Component {
  state: BankAccount$State;
  form = {
    fields: [
      {
        key: "addressLine1",
        title: I18n.t("addressLine1") + "*",
        error: I18n.t("addressLineErr")
      },
      { key: "addressLine2", title: I18n.t("addressLine2"), error: "" },
      { key: "city", title: I18n.t("city") + "*", error: I18n.t("cityErr") },
      {
        key: "postalCode",
        title: I18n.t("postalCode") + "*",
        error: I18n.t("postalCodeErr")
      },
      {
        key: "country",
        title: I18n.t("country") + "*",
        error: I18n.t("countryErr")
      },
      {
        key: "ownerName",
        title: I18n.t("ownerName") + "*",
        error: I18n.t("ownerNameErr")
      },
      {
        key: "IBAN",
        title: I18n.t("IBAN") + "*",
        error: I18n.t("IBANErr"),
        match: /^[a-zA-Z]{2}\d{2}\s*(\w{4}\s*){2,7}\w{1,4}\s*$/
      },
      { key: "BIC", title: I18n.t("BIC"), error: I18n.t("BICErr") }
    ],
    required: [
      "addressLine1",
      "city",
      "postalCode",
      "country",
      "ownerName",
      "IBAN"
    ]
  };

  constructor(props) {
    super(props);
    const bankAccount = props.viewer.me.bankAccount || {};
    const valid = !!bankAccount.id;
    this.state = {
      error: false,
      process: false,
      valid,
      data: { ...bankAccount }
    };
  }

  /*
   * Validate form data and update button state on every text change
   */
  validateAndSet = update => {
    const newData: Model$BankAccount = { ...this.state.data, ...update };
    const requiredErrors = this.form.required.filter(
      field => !newData[field] || !newData[field].length
    );
    const validationErrors = this.form.fields
      .filter(field => field.match && !field.match.test(newData[field.key]))
      .map(field => field.key);
    const errors = new Set([...requiredErrors, ...validationErrors]);

    this.setState({
      valid: errors.size === 0,
      process: false,
      errors,
      data: newData
    });

    if (this.state.error) this.setState({ error: errors.size > 0 });
  };

  componentDidMount = () => {
    this.validateAndSet({ country: "Switzerland" });
  };

  /*
   *  Step 1: validate form data
   */
  validateAndSubmit = () => {
    if (!this.state.valid) {
      this.validateAndSet({});
      return this.setState({ error: true });
    }
    this.submit();
  };

  /*
   * Step 2: mutate bank account
   */
  submit() {
    this.setState({ process: true });

    RegisterBankAccountMutation.commit(
      {
        data: {
          addressLine1: this.state.data.addressLine1,
          addressLine2: this.state.data.addressLine2,
          city: this.state.data.city,
          postalCode: this.state.data.postalCode,
          country: this.state.data.country,
          ownerName: this.state.data.ownerName,
          IBAN: this.state.data.IBAN,
          BIC: this.state.data.BIC
        },
        userID: this.props.viewer.me.id
      },
      response => {
        console.log("Bank account added", response);
        Toast.show(I18n.t("bankAccountSuccess"));
        this.finish();
      },
      errors => {
        this.setState({
          error: true,
          process: false,
          message: errors && errors.length && errors[0].message
        });
      }
    );
  }

  /*
   * Step 3: finish and transition back
   */
  finish = () => {
    this.setState({ process: false, valid: true, error: false });
    this.props.navigation.goBack();
  };

  /*
   * check if the field has validation error
   */
  isError = (field: string): boolean =>
    this.state.error && !!this.state.errors && this.state.errors.has(field);

  render = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.form.fields.map(({ key, title, error, value }, id) => (
          <View key={id} style={styles.inputRow}>
            {this.isError(key) ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}
            {key === "country" && (
              <Picker
                style={styles.picker}
                selectedValue={this.state.data.country || "Switzerland"}
                onValueChange={value => this.validateAndSet({ [key]: value })}
              >
                {countries.map(country => (
                  <Picker.Item key={country} label={country} value={country} />
                ))}
              </Picker>
            )}
            {key === "IBAN" && (
              <View style={styles.inputContainer}>
                <TextInputMask
                  value={this.state.data[key]}
                  type={"custom"}
                  options={{ mask: "AASS SSSS SSSS SSSS SSSS SSSS SSS" }}
                  placeholder={title}
                  style={styles.ibanInput}
                  placeholderTextColor={colors.skyBlue}
                  onChangeText={text => this.validateAndSet({ [key]: text })}
                />
              </View>
            )}
            {key !== "country" && key !== "IBAN" && (
              <Input
                updateText={text => this.validateAndSet({ [key]: text })}
                defaultValue={this.state.data[key]}
                error={this.isError(key)}
                placeholder={title}
                inputIconStyles={inputStyles.icon}
              />
            )}
          </View>
        ))}
        {this.state.error ? (
          <Text style={styles.errorText}>{this.state.message || ""}</Text>
        ) : null}
        <Button
          disabled={this.state.process}
          error={this.state.error}
          onPress={this.validateAndSubmit}
        >
          {I18n.t("registerBankAccount")}
        </Button>
      </ScrollView>
    );
  };

  static propTypes = {
    viewer: PropTypes.object.isRequired
  };
}

const countries = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "United Kingdom",
  "Switzerland"
];

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    padding: metrics.baseMargin,
    justifyContent: "center",
    backgroundColor: colors.silver,
    minHeight: height,
    paddingBottom: metrics.doubleBaseMargin
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: "transparent",
    marginBottom: metrics.doubleBaseMargin,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    marginHorizontal: 40
  },
  ibanInput: {
    flex: 1,
    fontSize: fonts.size.medium,
    height: 42,
    maxHeight: 42
  },
  inputRow: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  errorText: {
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.error
  },
  picker: {
    flex: 1,
    width: 200,
    color: colors.skyBlue,
    alignSelf: "center",
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin
  }
});

const BankAccountPageTemp = createFragmentContainer(BankAccountPage, {
  viewer: graphql`
    fragment BankAccountPage_viewer on Viewer {
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
  `
});

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t("setupBankTitle")
    };
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query BankAccountPageQuery {
            viewer {
              ...BankAccountPage_viewer
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return (
              <BankAccountPageTemp
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

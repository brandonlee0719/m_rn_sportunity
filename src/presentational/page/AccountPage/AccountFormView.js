import React from "react";
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
  ActivityIndicator
} from "react-native";
import pick from "lodash/pick";
import Button from "../../Button/roundedButton";
import { metrics, colors, fonts } from "sportunity/src/theme";
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import moment from "moment";
import UserAccountMutation from "./UserAccountMutation";

const addressValidator = addr =>
  !!addr && !!addr.country && !!addr.city && !!addr.address;

const emailValidator = email =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

export default class AccountFormView extends React.Component {
  state: UserAccount$State;

  constructor(props) {
    super(props);

    const personalForm = {
      fields: [
        {
          key: "email",
          type: "email",
          title: I18n.t("registerEmail"),
          error: ""
        },
        {
          key: "firstName",
          type: "input",
          title: I18n.t("accountFirstName"),
          error: I18n.t("accountFirstNameErr")
        },
        {
          key: "lastName",
          type: "input",
          title: I18n.t("accountLastName"),
          error: I18n.t("accountLastNameErr")
        },
        {
          key: "address",
          type: "address",
          title: I18n.t("accountResidenceAddress"),
          error: I18n.t("accountResidenceAddressErr"),
          validate: addressValidator
        },
        {
          key: "nationality",
          type: "country",
          title: I18n.t("accountNationality"),
          error: I18n.t("accountNationalityErr")
        },
        {
          key: "birthday",
          type: "date",
          title: I18n.t("accountBirthday"),
          error: I18n.t("accountBirthdayErr")
        }
        // { key: 'shouldDeclareVAT', type: 'switch', title: I18n.t('accountDeclareVAT'), error: I18n.t('accountDeclareVATErr') },
      ],
      required: ["firstName", "lastName", "address", "nationality", "birthday"]
    };

    const businessForm = {
      fields: [
        {
          key: "email",
          type: "email",
          title: I18n.t("registerEmail"),
          error: ""
        },
        {
          key: "firstName",
          type: "input",
          title: I18n.t("accountBuisnessFirstName"),
          error: I18n.t("accountBuisnessFirstNameErr")
        },
        {
          key: "lastName",
          type: "input",
          title: I18n.t("accountBuisnessLastName"),
          error: I18n.t("accountBuisnessFirstNameErr")
        },
        {
          key: "address",
          type: "address",
          title: I18n.t("accountBuisnessAddress"),
          error: I18n.t("accountBuisnessAddressErr"),
          validate: addressValidator
        },
        {
          key: "nationality",
          type: "country",
          title: I18n.t("accountBuisnessNationality"),
          error: I18n.t("accountBuisnessNationalityErr")
        },
        {
          key: "birthday",
          type: "date",
          title: I18n.t("accountBuisnessBirthday"),
          error: I18n.t("accountBuisnessBirthdayErr")
        },
        {
          key: "business.businessName",
          type: "input",
          title: I18n.t("accountBuisnessName"),
          error: I18n.t("accountBuisnessNameErr")
        },
        {
          key: "business.businessEmail",
          type: "input",
          title: I18n.t("accountBuisnessEmail"),
          error: I18n.t("accountBuisnessEmailErr"),
          validate: emailValidator
        },
        {
          key: "business.headquarterAddress",
          type: "address",
          title: I18n.t("accountBuisnessHeadquaters"),
          error: I18n.t("accountBuisnessHeadquatersErr"),
          validate: addressValidator
        },
        {
          key: "business.VATNumber",
          type: "input",
          title: I18n.t("accountBuisnessVatNumber"),
          error: I18n.t("accountBuisnessVatNumberErr")
        }
      ],
      required: [
        "firstName",
        "lastName",
        "address",
        "nationality",
        "birthday",
        "business.businessName",
        "business.businessEmail",
        "business.headquarterAddress"
      ]
    };

    const {
      firstName,
      lastName,
      nationality,
      isProfileComplete,
      email,
      profileType,
      business,
      birthday,
      shouldDeclareVAT
    } = this.props.viewer.me;

    this.form = profileType === "PERSON" ? personalForm : businessForm;

    const address = this.props.address;
    const valid = isProfileComplete;
    let businessData = {};

    if (profileType !== "PERSON")
      businessData = {
        "business.businessName": business && business.businessName,
        "business.businessEmail": business && business.businessEmail,
        "business.headquarterAddress": business && business.headquarterAddress,
        "business.VATNumber": business && business.VATNumber
      };

    this.state = {
      data: {
        firstName,
        lastName,
        address,
        birthday,
        email,
        nationality,
        shouldDeclareVAT,
        ...businessData
      }
    };
  }

  updateUser = () => {
    let data = {
      userID: this.props.id,
      user: {
        firstName: this.state.data.firstName,
        lastName: this.state.data.lastName,
        address: pick(this.state.data.address, [
          "country",
          "city",
          "address",
          "zip"
        ]),
        nationality: this.state.data.nationality,
        birthday: this.state.data.birthday,
        shouldDeclareVAT: this.state.data.shouldDeclareVAT
      }
    };
    if (this.props.viewer.me.profileType !== "PERSON")
      data.user.business = {
        businessName: this.state.data["business.businessName"],
        businessEmail: this.state.data["business.businessEmail"],
        headquarterAddress: pick(
          this.state.data["business.headquarterAddress"],
          ["country", "city", "address", "zip"]
        ),
        VATNumber: this.state.data["business.VATNumber"]
      };

    this.setState({ isLoading: true });

    UserAccountMutation.commit(
      data,
      () => {
        Alert.alert(I18n.t("info"), I18n.t("accountUpdated"));
      },
      error => {
        const errors = error.getError().source.errors;
        this.setState({
          error: true,
          message: errors && errors.length && errors[0].message
        });
        console.error(JSON.parse(error.getError().source));
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    let form;
    const { country, city = "", address = "" } =
      this.state.data["address"] || {};

    const { profileType } = this.props.viewer.me;
    form = (
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <ScrollView contentContainerStyle={styles.listContainer}>
          {this.form.fields.map(({ key, title, type }, id) => (
            <View key={id} style={styles.textRow}>
              {type === "date" && (
                <Text>
                  {`${title}: `}
                  {moment(this.state.data[key]).format("DD/MM/YYYY")}
                </Text>
              )}
              {type === "address" && (
                <View>
                  <Text>{`${title}: `}</Text>
                  <Text>
                    {[address, city, country].filter(a => a).join(", ")}
                  </Text>
                </View>
              )}
              {type !== "address" && type !== "date" && (
                <Text>
                  {`${title}: `}
                  {this.state.data[key]}
                </Text>
              )}
            </View>
          ))}
          <Button onPress={this.updateUser}>
            {I18n.t("accountSaveButton")}
          </Button>
        </ScrollView>
      </View>
    );

    return <View>{form}</View>;
  }

  static propTypes = {
    viewer: PropTypes.object.isRequired,
    address: PropTypes.object
  };
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
    alignItems: "center"
    // flex: 1
  },
  listContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
    // fontWeight: '500',
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
  noteContainer: {
    padding: metrics.doubleBaseMargin
  }
});

I18n.fallbacks = true;
I18n.translations = translations;

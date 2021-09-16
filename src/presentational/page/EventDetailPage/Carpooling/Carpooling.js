import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions
} from "react-native";
import Toast from "react-native-simple-toast";
import { createFragmentContainer, graphql } from "react-relay";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import DatePicker from "react-native-datepicker";

import { metrics, colors, fonts, images } from "sportunity/src/theme";
import I18n from "sportunity/src/lib/I18n";
import Field from "../../../forms/Field";
import Button from "../../../Button/roundedButton";
import FloatingMenu from "../../../Button/FloatingMenu";
import Add from "../../../Button/Add";
import Modal from "../../../Modal";
import user from "sportunity/src/customPropType/user";
import moment from "moment";
import pick from "lodash/pick";
import isEqual from "lodash/isEqual";

import CancelCarPoolingMutation from "./CancelCarPoolingMutation";
import BookCarPoolingMutation from "./BookCarPoolingMutation";
import CancelCarPoolingBookMutation from "./CancelCarPoolingBookMutation";
import NewCarPoolingMutation from "./NewCarPoolingMutation";
import AskCarPoolingMutation from "./AskCarPoolingMutation";
import ModifyCarPoolingMutation from "./ModifyCarPoolingMutation";
import Card from "../../../UI/Card";
import FormListItem from "../../../UI/FormListItem";
import RectangleButton from "../../../UI/Button";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const UserCard = ({ user }) => (
  <View style={styles.userCard}>
    <View style={styles.photoContainer}>
      {user.avatar ? (
        <Image style={styles.thumbProfile} source={{ uri: user.avatar }} />
      ) : (
        <Image style={styles.thumbProfile} source={images.profile_photo} />
      )}
    </View>
    <Text style={styles.text}>{user.pseudo}</Text>
  </View>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired
  })
};

class CarpoolingCard extends Component {
  state = {
    dateFormat: "DD/MM HH:mm"
  };

  componentWillMount() {
    const { carpooling, sportunity } = this.props;
    const end = moment(carpooling.starting_date);
    const startTime = moment(sportunity.beginning_date);
    const duration = moment.duration(end.diff(startTime));
    const days = duration.asDays();
    this.setState({
      dateFormat: days > 0 ? "DD/MM HH:mm" : "HH:mm"
    });
  }

  render() {
    const { carpooling, isDriver, isPassenger } = this.props;

    const { dateFormat } = this.state;
    const ableToBook =
      !isPassenger &&
      !isDriver &&
      carpooling.number_of_sits > carpooling.passengers.length;
    const ableToLeave = !isDriver && isPassenger === carpooling.id;
    const ableToCancelCarpooling = isDriver === carpooling.id;

    const carDateTime = carpooling.starting_date;

    return (
      <Card style={styles.cardContainer}>
        <View style={[styles.line, styles.marginBottom]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.driverText}>
              {I18n.t("sportunityCarpoolingDriver")}
            </Text>
            <View style={styles.driver}>
              <UserCard user={carpooling.driver} />
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>{moment(carDateTime).format("ddd")}</Text>
            <Text style={[styles.text, { fontSize: fonts.size.regular }]}>
              {moment(carDateTime).format("DD MMM")}
            </Text>
            <Text style={styles.text}>
              {moment(carDateTime).format("hh:mm")}
            </Text>
          </View>
        </View>

        <View style={[styles.line, styles.marginBottom]}>
          <Text>
            <Text style={[styles.boldText]}>
              {`${I18n.t("sportunityCarpoolingAddress")}: `}
            </Text>
            <Text style={[styles.text, styles.marginLeft]}>
              {carpooling.address.address},{" "}
              {moment(carpooling.starting_date).format(dateFormat)}
            </Text>
          </Text>
        </View>
        <View style={[styles.line, styles.marginBottom]}>
          <Text style={styles.boldText}>
            {I18n.t("sportunityCarpoolingSitsRemaining")}:
          </Text>
          <Text style={[styles.text, styles.marginLeft]}>
            {carpooling.number_of_sits - carpooling.passengers.length}
          </Text>
        </View>

        {carpooling.passengers.length > 0 && (
          <View>
            <Text style={styles.boldText}>
              {I18n.t("sportunityCarpoolingPassengers")}
            </Text>
            <View style={styles.passengers}>
              {carpooling.passengers.map((passenger, index) => (
                <UserCard key={index} user={passenger} />
              ))}
            </View>
          </View>
        )}

        {ableToCancelCarpooling && (
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[styles.centerContent, styles.changeButton, styles.line]}
              onPress={() => this.props.onModify(carpooling)}
            >
              <MaterialIcon
                name="edit"
                color={colors.charcoal}
                size={16}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>{I18n.t("update")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.centerContent, styles.line]}
              onPress={() => this.props.onCancel(carpooling)}
            >
              <Ionicon
                name="md-close-circle"
                color={colors.red}
                size={16}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.cancelText}>
                {I18n.t("sportunityCarpoolingCancel")}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {(ableToBook || ableToLeave) && (
          <View style={styles.buttonsRow}>
            {ableToBook && (
              <TouchableOpacity
                style={[styles.centerContent, styles.changeButton, styles.line]}
                onPress={() => this.props.onBook(carpooling)}
              >
                <MaterialIcon
                  name="check-circle"
                  color={colors.green}
                  size={16}
                  style={{ marginRight: 5 }}
                />
                <Text style={[styles.text, { color: colors.green }]}>
                  {I18n.t("sportunityCarpoolingBook")}
                </Text>
              </TouchableOpacity>
            )}

            {ableToLeave && (
              <TouchableOpacity
                style={[styles.centerContent, styles.line]}
                onPress={() => this.props.onCancelBook(carpooling)}
              >
                <Ionicon
                  name="md-close-circle"
                  color={colors.red}
                  size={16}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.cancelText}>
                  {I18n.t("sportunityCarpoolingCancel")}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </Card>
    );
  }
}

CarpoolingCard.propTypes = {
  carpooling: PropTypes.shape({
    id: PropTypes.number
  })
};

const getOnlyHourMinutes = date =>
  (m => ({
    startingHour: m.hour(),
    startingMinute: m.minutes()
  }))(moment(date));

class CarpoolingForm extends Component {
  state = {
    placeValue: {},
    dateValue: null,
    hourValue: {},
    numberOfSitsValue: 0,
    saving: false
  };

  componentWillMount() {
    const { user, modify, carpooling, sportunity } = this.props;

    this.setState({
      placeValue: modify ? carpooling.address : user.address,
      dateValue: modify
        ? moment(carpooling.starting_date).format("YYYY-MM-DD")
        : sportunity.beginning_date,
      hourValue: modify ? getOnlyHourMinutes(carpooling.starting_date) : {},
      numberOfSitsValue: modify ? carpooling.number_of_sits + "" : 0
    });
  }

  _isValid = () => {
    const { sportunity } = this.props;

    if (
      this.state.dateValue === null ||
      isEqual(this.state.hourValue, {}) ||
      isEqual(this.state.placeValue, {}) ||
      parseInt(this.state.numberOfSitsValue) <= 0
    ) {
      Alert.alert(I18n.t("sportunityCarpoolingEmptyFields"));
      return false;
    }

    if (isNaN(this.state.numberOfSitsValue)) {
      Alert.alert(I18n.t("sportunityCarpoolingNumberOfSitsError"));
      return false;
    }

    const startingDate = moment(this.state.dateValue);
    startingDate.set("hour", this.state.hourValue.startingHour);
    startingDate.set("minute", this.state.hourValue.startingMinute);
    startingDate.set("second", 0);

    if (
      moment().isAfter(startingDate) ||
      moment(sportunity.beginning_date).isBefore(startingDate)
    ) {
      Alert.alert(I18n.t("sportunityCarpoolingDayError"));
      return false;
    }

    return {
      startingDate
    };
  };

  _handleSave = () => {
    validated = this._isValid();
    if (!validated) return;

    const address = pick(this.state.placeValue, ["country", "city", "address"]);

    const func = this.props.modify ? this.props.onModify : this.props.onSave;
    this.setState({ saving: true });
    func(
      {
        starting_date: moment(validated.startingDate).format(),
        address,
        number_of_sits: this.state.numberOfSitsValue,
        carpooling: this.props.carpooling
      },
      error => () => setState({ saving: false })
    );
  };

  render() {
    const { hourValue } = this.state;
    return (
      <ScrollView style={styles.fieldsGroup}>
        <Field
          error={false}
          type="address"
          title={I18n.t("sportunityCarpoolingPlace")}
          value={this.state.placeValue}
          onChange={v => this.setState({ placeValue: v })}
        />

        <FormListItem
          title={I18n.t("sportunityCarpoolingDay")}
          subtitle={moment(this.state.dateValue).format("YYYY-MM-DD")}
          onPress={() => this.datepicker.onPressDate()}
          rightIcon={images.right_arrow_blue}
        />

        <FormListItem
          title={I18n.t("sportunityCarpoolingHour")}
          subtitle={
            hourValue.startingHour || hourValue.startingMinute
              ? `${hourValue.startingHour ||
                  "0"} : ${hourValue.startingMinute || "00"}`
              : "Enter time"
          }
          rightIcon={() => (
            <Field
              error={false}
              type="hourInterval"
              title={I18n.t("sportunityCarpoolingHour")}
              value={hourValue}
              onChange={v => this.setState({ hourValue: v })}
            />
          )}
        />

        <FormListItem
          title={I18n.t("sportunityCarpoolingNumberOfSits")}
          subtitle={() => (
            <Field
              type="numeric"
              title={I18n.t("sportunityCarpoolingNumberOfSits")}
              value={this.state.numberOfSitsValue}
              onChange={v => this.setState({ numberOfSitsValue: v })}
            />
          )}
        />

        <View
          style={{ alignItems: "center", marginVertical: metrics.baseMargin }}
        >
          <RectangleButton
            onPress={this._handleSave}
            text={I18n.t("validate")}
            loading={this.state.saving}
            width={"60%"}
            height={40}
            fontSize={18}
          />
        </View>

        <View style={styles.hidden}>
          <DatePicker
            ref={dp => (this.datepicker = dp)}
            style={styles.datePicker}
            date={this.state.dateValue}
            mode="date"
            placeholder="date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2100-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                height: 0,
                width: 0,
                borderColor: colors.white
              }
            }}
            onDateChange={v => this.setState({ dateValue: v })}
          />
        </View>
      </ScrollView>
    );
  }
}

CarpoolingForm.propTypes = {
  onSave: PropTypes.func.isRequred,
  onModify: PropTypes.func.isRequred
};

const findUserInPassengers = user => passenger => passenger.id === user.id;
const findUserInCarpooling = user => carpooling =>
  !!carpooling.passengers.find(findUserInPassengers(user));

class Carpooling extends Component {
  state = {
    userIsPassenger: false,
    userIsDriver: false,
    carpoolingModal: false,
    carpoolingModify: false,
    carpoolingSaving: false,
    displayAskCarPoolingButton: true
  };

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps = nextProps => {
    const {
      viewer: { me },
      sportunity
    } = nextProps;
    if (sportunity) {
      this._userIsDriver(sportunity.carPoolings, me);
      this._userIsPassenger(sportunity.carPoolings, me);
    }
  };

  _userIsDriver = (carpoolings, user) => {
    this.setState({
      userIsDriver: (
        carpoolings.find(carpooling => carpooling.driver.id === user.id) || {}
      ).id
    });
  };

  _userIsPassenger = (carpoolings, user) => {
    this.setState({
      userIsPassenger: (carpoolings.find(findUserInCarpooling(user)) || {}).id
    });
  };

  _cancel = carPooling => {
    const doIt = () => {
      const { viewer, sportunity } = this.props;

      let params = {
        sportunityID: sportunity.id,
        carPoolingID: carPooling.id
      };

      CancelCarPoolingMutation.commit(
        params,
        response => {
          Toast.show(I18n.t("updateSuccess"));
        },
        error => {
          Toast.show(I18n.t("updateFailed"));
        }
      );
    };

    Alert.alert(
      I18n.t("sportunityCarpoolingAlertCancel"),
      I18n.t("sportunityCarpoolingAlertCancelDetails"),
      [
        { text: I18n.t("yes"), onPress: () => doIt() },
        { text: I18n.t("no"), onPress: () => {} }
      ]
    );
  };

  _book = carPooling => {
    const {
      viewer,
      viewer: { me },
      sportunity
    } = this.props;

    const params = {
      sportunityID: sportunity.id,
      carPoolingID: carPooling.id,
      userID: me.id
    };

    BookCarPoolingMutation.commit(
      params,
      response => {
        Toast.show(I18n.t("updateSuccess"));
      },
      error => {
        Toast.show(I18n.t("updateFailed"));
      }
    );
  };

  _cancelBook = carPooling => {
    const {
      viewer,
      viewer: { me },
      sportunity
    } = this.props;

    const params = {
      sportunityID: sportunity.id,
      carPoolingID: carPooling.id,
      userID: me.id
    };

    CancelCarPoolingBookMutation.commit(
      params,
      response => {
        Toast.show(I18n.t("updateSuccess"));
      },
      error => {
        Toast.show(I18n.t("updateFailed"));
      }
    );
  };

  askForACarPooling = () => {
    const {
      viewer,
      viewer: { me },
      sportunity
    } = this.props;

    let params = {
      sportunityID: sportunity.id
    };
    AskCarPoolingMutation.commit(
      params,
      response => {
        Toast.show(I18n.t("sportunityCarpoolingAskSuccess"));
        this.setState({
          displayAskCarPoolingButton: false
        });
      },
      error => {
        Toast.show(I18n.t("updateFailed"));
      }
    );
  };

  _newCarpooling = (params, cb) => {
    this.setState({ carpoolingSaving: true, created: true });
    NewCarPoolingMutation.commit(
      {
        sportunityID: this.props.sportunity.id,
        carPooling: {
          ...pick(params, ["starting_date", "address", "number_of_sits"]),
          driver: this.props.viewer.me.id
        }
      },
      response => {
        Toast.show(I18n.t("updateSuccess"));
        this.setState({
          carpoolingModal: false,
          carpoolingSaving: false
        });
        cb();
      },
      error => {
        this.setState({ carpoolingSaving: false });
        Toast.show(I18n.t("updateFailed"));
        console.log(error);
        cb(error);
      }
    );
  };

  _modifyCarpooling = ({ carpooling, ...params }, cb) => {
    this.setState({ carpoolingSaving: true });

    ModifyCarPoolingMutation.commit(
      {
        sportunityID: this.props.sportunity.id,
        carPoolingID: carpooling.id,
        carPooling: {
          ...params,
          driver: this.props.viewer.me.id
        }
      },
      response => {
        Toast.show(I18n.t("updateSuccess"));
        this.setState({
          carpoolingModal: false,
          carpoolingSaving: false
        });
        cb();
      },
      error => {
        this.setState({ carpoolingSaving: false });
        Toast.show(I18n.t("updateFailed"));
        console.log(error);
        cb(error);
      }
    );
  };

  _edit = carpooling => {
    this.setState({
      carpoolingModal: true,
      carpoolingModify: true,
      carpooling: carpooling
    });
  };

  handleOrganizeCar = () => {
    this.setState({
      carpoolingModal: true,
      carpoolingModify: false,
      carpooling: null
    });
  };

  render() {
    const {
      viewer: { me: user },
      sportunity,
      isPast,
      renderActionButton,
      renderMap,
      renderEmptyCarpooling
    } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          {typeof renderEmptyCarpooling === "function" &&
            renderEmptyCarpooling()}

          {!sportunity.carPoolings || sportunity.carPoolings.length === 0
            ? null
            : sportunity.carPoolings.map((carpooling, index) => (
                <CarpoolingCard
                  key={"carpooling-" + index}
                  carpooling={carpooling}
                  sportunity={sportunity}
                  user={user}
                  isDriver={this.state.userIsDriver}
                  isPassenger={this.state.userIsPassenger}
                  isPast={isPast}
                  onBook={this._book}
                  onCancelBook={this._cancelBook}
                  onCancel={this._cancel}
                  onModify={this._edit}
                />
              ))}

          {typeof renderMap === "function" && renderMap()}
        </ScrollView>

        {this.state.carpoolingModal && (
          <Modal
            isModalVisible={this.state.carpoolingModal}
            openCloseModal={() =>
              this.setState({ carpoolingModal: !this.state.carpoolingModal })
            }
            title={I18n.t("sportunityCarpoolingCreate")}
          >
            <CarpoolingForm
              sportunity={sportunity}
              user={user}
              onSave={this._newCarpooling}
              onModify={this._modifyCarpooling}
              filledByOwner={false}
              modify={this.state.carpoolingModify}
              carpooling={this.state.carpooling}
            />
          </Modal>
        )}

        {!isPast &&
          !this.state.userIsDriver &&
          !this.state.userIsPassenger &&
          (typeof renderActionButton === "function" ? (
            renderActionButton({
              onOrganizeCar: this.handleOrganizeCar,
              onAskForCar: this.askForACarPooling,
              showAskForCarButton:
                (!sportunity.carPoolings ||
                  sportunity.carPoolings.length === 0) &&
                this.state.displayAskCarPoolingButton
            })
          ) : (
            <FloatingMenu>
              <Add Action={this.handleOrganizeCar} />
            </FloatingMenu>
          ))}
      </View>
    );
  }
}

Carpooling.propTypes = {
  isPast: PropTypes.bool
};

export default createFragmentContainer(Carpooling, {
  viewer: graphql`
    fragment Carpooling_viewer on Viewer {
      id
      me {
        id
        address {
          country
          city
          address
          zip
        }
      }
    }
  `,
  sportunity: graphql`
    fragment Carpooling_sportunity on Sportunity {
      id
      beginning_date
      carPoolings {
        id
        driver {
          id
          pseudo
          avatar
        }
        address {
          address
          city
          zip
          country
        }
        starting_date
        number_of_sits
        passengers {
          id
          pseudo
          avatar
        }
      }
    }
  `
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.silver
  },
  fieldsGroup: {
    flex: 1
  },
  formField: {
    alignItems: "center",
    justifyContent: "center"
  },
  formText: {
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
    marginHorizontal: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin,
    fontWeight: "500",
    height: 30,
    flexBasis: 30
  },
  line: {
    flexDirection: "row",
    flex: 1
  },
  boldText: {
    color: colors.charcoal,
    fontWeight: "500"
  },
  text: {
    color: colors.charcoal
  },
  marginBottom: {
    marginBottom: metrics.baseMargin
  },
  marginLeft: {
    marginLeft: metrics.baseMargin / 2
  },
  askButton: {
    marginTop: metrics.doubleBaseMargin
  },
  askButtonText: {
    color: colors.blue,
    fontSize: fonts.size.regular
  },
  cardContainer: {
    marginBottom: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin
  },
  dateContainer: {
    padding: metrics.baseMargin,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  driver: {
    flex: 1,
    paddingBottom: metrics.baseMargin
  },
  driverText: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: "600"
  },
  cancelText: {
    color: colors.red
  },
  userCard: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginTop: metrics.baseMargin,
    marginRight: metrics.baseMargin
  },
  photoContainer: {
    marginRight: metrics.baseMargin
  },
  thumbProfile: {
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius
  },
  passengers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    minHeight: 50
  },
  margin: {
    margin: metrics.baseMargin
  },
  data: {
    flex: 1,
    color: colors.skyBlue,
    textAlign: "left",
    marginVertical: metrics.baseMargin
  },
  address: {
    flex: 2,
    color: colors.skyBlue,
    textAlign: "left",
    marginVertical: metrics.baseMargin
  },
  button: {
    flex: 1
  },
  buttonsRow: {
    flexDirection: "row",
    height: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: -metrics.baseMargin,
    marginTop: metrics.baseMargin
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.red
  },
  changeButton: {
    borderRightWidth: 1,
    borderColor: colors.grey
  },
  noCarPoolingContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: metrics.doubleBaseMargin
  },
  noCarPoolingImage: {
    marginVertical: metrics.doubleBaseMargin
  },
  noCarPoolingText: {
    color: colors.charcoal,
    ...fonts.style.h5,
    textAlign: "center"
  },
  hidden: {
    overflow: "hidden",
    left: 0,
    right: 0,
    position: "absolute",
    top: SCREEN_HEIGHT,
    bottom: -SCREEN_HEIGHT
  }
});

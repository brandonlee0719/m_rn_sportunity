// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, StyleSheet, Modal, Platform } from "react-native";
import Text from "react-native-text";
import I18n from "react-native-i18n";
import Icon from "react-native-vector-icons/Ionicons";
import { metrics, colors, fonts } from "sportunity/src/theme";
import { graphql, createFragmentContainer } from "react-relay";
import ActionButton from "react-native-action-button";

import icons from "sportunity/src/theme/images";
import { Header } from "../Header";
import { ListBlock, AddToList } from "../ListBlock";
import PaymentMethod from "./PaymentMethod";

type PaymentMethods$Props = {
  paymentMethods: Array<Model$PaymentMethod>,
  title: string,
  itemStyle: StyleSheet,
  onSelect?: (id: string) => void,
  onRemove?: (id: string) => void,
  selectedId: string
};

class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  _onPressButton = () => {
    if (this.props.paymentMethods && this.props.paymentMethods.length > 0)
      this.setState({ isModalVisible: true });
    else {
      this.props.navigation.navigate("newPaymentMethod");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      this.props.paymentMethods &&
      nextProps.paymentMethods &&
      nextProps.paymentMethods.length > this.props.paymentMethods.length
    )
      this.setState({ isModalVisible: true });
    if (nextProps.paymentMethods && nextProps.paymentMethods.length === 0)
      this.setState({ isModalVisible: false });
  };

  render = () => {
    const {
      paymentMethods,
      title,
      itemStyle,
      onSelect,
      onRemove,
      selectedId
    } = this.props;
    const selectedPaymentMethod = paymentMethods.find(
      item => item.id === selectedId
    );

    return (
      <TouchableOpacity style={styles.container} onPress={this._onPressButton}>
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
              text={I18n.t("accountPaymentMethods")}
            />
            {/* <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({isModalVisible: false})}
                style={styles.closeIcon}
              >
                <Image
                  source={icons.down_arrow}
                />
              </TouchableOpacity>
              <Text style={styles.title}>
                {I18n.t('accountPaymentMethods')}
              </Text>
            </View> */}

            <ListBlock title={title}>
              {paymentMethods &&
                paymentMethods.map((item, index) => (
                  <PaymentMethod
                    key={index}
                    style={itemStyle}
                    card={item}
                    selected={selectedId === item.id}
                    onPress={() => {
                      if (onSelect) {
                        this.setState({ isModalVisible: false });
                        onSelect(item.id);
                      }
                    }}
                    onDelete={onRemove}
                  />
                ))}
            </ListBlock>
            <ActionButton
              size={50}
              buttonColor={colors.skyBlue}
              style={[
                Platform.OS === "android" ? { elevation: 2, zIndex: 10000 } : {}
              ]}
            >
              <ActionButton.Item
                size={35}
                buttonColor={colors.skyBlue}
                title={I18n.t("addPaymentMethod")}
                onPress={() => {
                  this.setState({ isModalVisible: false });
                  this.props.navigation.navigate("newPaymentMethod")
                }}
              >
                <Icon
                  name="md-add"
                  style={{
                    fontSize: 20,
                    height: 22,
                    color: colors.snow
                  }}
                />
              </ActionButton.Item>
            </ActionButton>
          </View>
        </Modal>

        <View style={styles.subContainer}>
          <Text style={styles.text}>{title || ""}</Text>
          <Text style={styles.select}>{I18n.t("addOrRemovePaymentMethod")}</Text>
          {selectedPaymentMethod && (
            <Text style={styles.select}>
              {I18n.t("selectedPaymentMethod") +
                ": " +
                selectedPaymentMethod.cardMask}
            </Text>
          )}
        </View>
        <Image style={styles.icon} source={icons.right_arrow_blue} />
      </TouchableOpacity>
    );
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

PaymentMethods.propTypes = {
  paymentMethods: PropTypes.array.isRequired
};

export default createFragmentContainer(PaymentMethods, {
  paymentMethods: graphql`
    fragment PaymentMethodsList_paymentMethods on PaymentMethod
      @relay(plural: true) {
      id
      cardType
      cardMask
      expirationDate
    }
  `
});

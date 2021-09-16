import React, { Component } from "react";
import { createPaginationContainer, graphql, QueryRenderer } from "react-relay";
import {View, Text, TouchableOpacity, Image, FlatList, Button, Alert, WebView, Modal} from "react-native";
import Toast from 'react-native-simple-toast';
import flatten from "lodash/flatten";
import moment from "moment";
import I18n from "react-native-i18n";

import { webAppUrl } from 'sportunity/conf/constants.json';
import { Header } from '../../Header';
import { colors, images, fonts } from "sportunity/src/theme";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import MemberPaysFees from '../AccountPage/Mutations/MemberPaysMemberShipFees'

class Fees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMore: false,
      hasMore: true,
      refetchConnection: false,
      displayFeesPaymentPopup: false,
      feesPaymentPopupProps: {},
      secure3DURL: null,
      payingPaymentModel: null,
      isLoadingAfterPayment: false
    };
    this._refetch = this._refetch.bind(this);
  }

  componentDidMount() {
    this._refetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.users.length !== this.props.users.length) {
      this.setState({ refetchConnection: true });
    }
    if (this.state.refetchConnection) {
      this._refetch();
    }
  }

  _refetch() {
    this.setState({ refetchConnection: false, loadingMore: true });
    this.props.relay.refetchConnection(
      100,
      () => {
        this.setState({ loadingMore: false });
      },
      {
        doQuery: true,
        users: this.props.users
      }
    );
  }

  payWithCard = (circle, paymentModel, cardId, callback) => {
    
    MemberPaysFees.commit({
        userId: this.props.viewer.me.id,
        paymentModelId: paymentModel.id,
        paymentMethodId: cardId,
        paymentWithWallet: false,
        amount: _getAmoutToPay(circle, paymentModel)
      },
      response => {
        if (response.memberSubscribes && response.memberSubscribes.secure3DURL) {
          callback()
          this.setState({secure3DURL: response.memberSubscribes.secure3DURL, payingPaymentModel: paymentModel})
        }
        else {
          Toast.show(I18n.t('memberShipIsPaid').replace('{0}', paymentModel.name))
          this._refetch();
          this.props.refetch()
          callback()
        }
      },
      error => {
        Alert.alert(
          I18n.t('error'),
          I18n.t('sportunityAlertnewOpponentFailed'),
          [
            { text: I18n.t('ok'), onPress: () => {} },
          ]
        )
      },
    )
  }

  payWithWallet = (circle, paymentModel, callback) => {
    MemberPaysFees.commit({
        userId: this.props.viewer.me.id,
        paymentModelId: paymentModel.id,
        paymentMethodId: null,
        paymentWithWallet: true,
        amount: _getAmoutToPay(circle, paymentModel)
      },
      () => {
        Toast.show(I18n.t('memberShipIsPaid').replace('{0}', paymentModel.name))
        setTimeout(() => {
          this._refetch();
          this.props.refetch()
        }, 5000)
        callback()
      },
      error => {
        Alert.alert(
          I18n.t('error'),
          I18n.t('sportunityAlertnewOpponentFailed'),
          [
            { text: I18n.t('ok'), onPress: () => {} },
          ]
        )
      },
    )
  }

  closeModal = () => {
    this.setState({isLoadingAfterPayment: true})
    setTimeout(() => {
        this._refetch();
        this.setState({secure3DURL: null, isLoadingAfterPayment: false})
        setTimeout(() => {
            Toast.show(I18n.t('memberShipIsPaid').replace('{0}', this.state.payingPaymentModel.name))
            this.setState({payingPaymentModel: null})
        }, 1000)
    }, 5000)
  }

  render() {
    const { loadingMore, hasMore } = this.state;
    const { viewer, relay, classes, noDataMessage } = this.props;
    const { me, users } = this.props.viewer;
    
    if (!me) {
      return <ActivityLoader isAnimating={true} />;
    }
    
    let noData = true;
    if (users && users.edges && users.edges.length) {
      users.edges.map(i => {
        if (i.node.circlesUserIsIn && i.node.circlesUserIsIn.edges && i.node.circlesUserIsIn.edges.length) {
          i.node.circlesUserIsIn.edges.map(ii => {
            if (ii.node && ii.node.paymentModels && ii.node.paymentModels.length) {
              ii.node.paymentModels.map(iii => {
                if (iii && _didUserPayFees("ToBePaid", ii.node, iii, me.id)) {
                  noData = false;
                }
              });
            }
          });
        }
      });
    }

    if (noData) {
      return (
        <View style={{backgroundColor: colors.show, alignItems: "center", justifyContent: "center"}}>
          <Text>{I18n.t("noMouvement")}</Text>
        </View>
      );
    }
    
    const circles = [];
    users.edges.map(i => {
      if (i.node.circlesUserIsIn && i.node.circlesUserIsIn.edges && i.node.circlesUserIsIn.edges.length) {
        i.node.circlesUserIsIn.edges.map(j => {
          if (j && j.node && j.node.paymentModels && j.node.paymentModels.length && j.node.owner) {
            circles.push({ ...j, user: i });
          }
        });
      }
    });

    const data = flatten(
      circles.map(edge => {
        return edge.node.paymentModels
          .filter(paymentModel => _didUserPayFees("ToBePaid", edge.node, paymentModel, me.id))
          .map(paymentModel => ({
            price: _getAmoutToPay(edge.node, paymentModel, edge.user.node.id),
            priceText: _getAmoutToPayText(edge.node, paymentModel, edge.user.node.id),
            priceView: (
              <Text style={{color: colors.charcoal, fontSize: fonts.size.h5, textAlign: "center"}}>
                {_getAmoutToPayText(edge.node, paymentModel, edge.user.node.id)}
              </Text>
            ),
            circle: edge.node,
            name: edge.node.name,
            nameView: (
              edge.node.name 
              ? <Text>{edge.node.name}</Text>
              : <Text />
            ),
            to: (
              edge.node.owner 
              ? <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={{ uri: edge.node.owner.avatar }}
                    style={{width: 20, height: 20, borderRadius: 40, borderWidth: 1}}
                  />
                  <Text>{edge.node.owner.pseudo}</Text>
                </View>
              : <View />
            ),
            ownerName: edge.node.owner ? edge.node.owner.pseudo : '',
            inAppPaymentAllowed: paymentModel.inAppPaymentAllowed,
            didUserFillAll: _didUserFillAll(edge.node, paymentModel, edge.user.node.id),
            paymentViaBankWireAllowed: paymentModel.paymentViaBankWireAllowed,
            paymentModelId: paymentModel.id,
            paymentModel: paymentModel
          }))
        }
      )
    )

    return (
      <View>
        {!!this.state.secure3DURL &&
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={!!this.state.secure3DURL}
            onRequestClose={() => !this.state.isLoadingAfterPayment && this.setState({secure3DURL: null, paymentModel: null})}
          >
            <Header 
              onPressFunc={() => !this.state.isLoadingAfterPayment && this.setState({secure3DURL: null, paymentModel: null})}
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
        <FlatList
          data={data}
          ListEmptyComponent={
            <View
              style={{
                backgroundColor: colors.show,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>{I18n.t("noMouvement")}</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                borderBottomWidth: 1,
                borderColor: "#000"
              }}
            >
              <View style={{ width: "30%", justifyContent: "center" }}>
                {item.didUserFillAll && <View>{item.priceView}</View>}
                {!item.didUserFillAll && (
                  <Text>{I18n.t("accountMembershipFeesMissingInfo")}</Text>
                )}
              </View>
              <View style={{ alignItems: "flex-start", width: "33%" }}>
                <View>{item.nameView}</View>
                <View>{item.to}</View>
              </View>
              <View style={{ width: "30%" }}>
                {!item.didUserFillAll && (
                  <Button
                    title={I18n.t("accountMembershipFeesGoToForm")}
                    onPress={() => {
                      this.props.navigation.navigate("sharedInformation");
                    }}
                  />
                )}
                {!item.inAppPaymentAllowed && (
                  <Text>
                    {I18n.t("accountMembershipFeesPaymentNotAllowed")}
                  </Text>
                )}
                {item.inAppPaymentAllowed && item.didUserFillAll && (
                  <Button
                    title={I18n.t("pay")}
                    onPress={() => {
                      this.props.navigation.navigate('selectPaymentMethod', {
                          amount: item.price,
                          selectWallet: (callback) => this.payWithWallet(item.circle, item.paymentModel, callback),
                          selectCard: (cardId, callback) => this.payWithCard(item.circle, item.paymentModel, cardId, callback),
                          texts: [
                              {text: `${I18n.t('accountMembershipFeesName')} : ${item.name}`, style: 'h1'},
                              {text: `${I18n.t('price')} : ${item.priceText}`, style:'h2'},
                              {text: `${I18n.t('accountMembershipFeesTo')} : ${item.ownerName}`, style:'h2'}
                          ],
                          isLoading: this.state.isLoadingAfterValidation
                      })
                  }}
                  />
                )}
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default createPaginationContainer(
  Fees,
  {
    viewer: graphql`
      fragment Fees_viewer on Viewer
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 100 }
          cursor: { type: "String" }
          users: { type: "[String]" }
          doQuery: { type: "Boolean!", defaultValue: false }
        ) {
        me {
          id
        }
        users(first: $count, after: $cursor, ids: $users)
          @include(if: $doQuery)
          @connection(key: "Viewer_users") {
          edges {
            node {
              id
              pseudo
              avatar
              circlesUserIsIn(circlesWithFeesOnly: true, first: $count) {
                edges {
                  node {
                    id
                    name
                    owner {
                      id
                      pseudo
                      avatar
                      paymentModelFees
                    }
                    askedInformation {
                      id
                      name
                      type
                      filledByOwner
                    }
                    membersInformation {
                      id
                      information
                      user {
                        id
                      }
                      value
                    }
                    paymentModels {
                      id
                      name
                      price {
                        cents
                        currency
                      }
                      conditions {
                        id
                        name
                        price {
                          cents
                          currency
                        }
                        conditions {
                          askedInformation {
                            id
                            type
                          }
                          askedInformationComparator
                          askedInformationComparatorValue
                          askedInformationComparatorDate
                          askedInformationComparatorValueString
                        }
                      }
                      memberSubscriptions {
                        user {
                          id
                        }
                        amount {
                          cents
                          currency
                        }
                        beginning_date
                        ending_date
                      }
                      paymentViaBankWireAllowed
                      memberToPayFees
                      inAppPaymentAllowed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      // function that should indicate which connection to paginate over
      return props.viewer && props.viewer.users;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        filter: fragmentVariables.filter,
        doQuery: fragmentVariables.doQuery
      };
    },
    query: graphql`
      query Fees_Query(
        $count: Int
        $cursor: String
        $users: [String]
        $doQuery: Boolean!
      ) {
        viewer {
          ...Fees_viewer
            @arguments(
              count: $count
              cursor: $cursor
              users: $users
              doQuery: $doQuery
            )
        }
      }
    `
  }
);

// helper functions

function isConditionFilled(condition, answer) {
  if (!answer || !answer.value) {
    return false;
  }
  switch (condition.askedInformation.type) {
    case "NUMBER": {
      switch (condition.askedInformationComparator) {
        case "≤": {
          return (
            parseInt(answer.value) <= condition.askedInformationComparatorValue
          );
        }
        case "<": {
          return (
            parseInt(answer.value) < condition.askedInformationComparatorValue
          );
        }
        case "=": {
          return (
            parseInt(answer.value) === condition.askedInformationComparatorValue
          );
        }
        case ">": {
          return (
            parseInt(answer.value) > condition.askedInformationComparatorValue
          );
        }
        case "≥": {
          return (
            parseInt(answer.value) >= condition.askedInformationComparatorValue
          );
        }
      }
    }
    case "BOOLEAN": {
      if (
        (condition.askedInformationComparatorValue === 1 &&
          answer.value === "true") ||
        (condition.askedInformationComparatorValue === 0 &&
          answer.value === "false")
      )
        return true;
      else return false;
    }
    case "DATE": {
      switch (condition.askedInformationComparator) {
        case "≤": {
          if (
            moment(answer.value).isBefore(
              condition.askedInformationComparatorDate
            )
          )
            return true;
          else return false;
        }
        case "≥": {
          if (
            moment(answer.value).isAfter(
              condition.askedInformationComparatorDate
            )
          )
            return true;
          else return false;
        }
      }
    }
    case "CUSTOM": {
      return condition.askedInformationComparatorValueString === answer.value;
    }
    default:
      return false;
  }
}

function _getAmoutToPayText(circle, paymentModel, userId) {
  let price = _getAmoutToPay(circle, paymentModel, userId);
  if (price) return price.cents / 100 + " " + price.currency;
  else return "-";
}

function _getAmoutToPay(circle, paymentModel, userId) {
  let conditionListFilled = null;
  let numberOfValidAnswer = 0 ;  
  let userInformation = circle.membersInformation.filter(info => info.user.id === userId)
  
  paymentModel.conditions.forEach(condition => {
      let conditionAreValidated = true; 
      let currentNumberOfValidAnswer = 0 ; 

      condition.conditions.forEach(cond => {
          let memberInfoIndex = userInformation.findIndex(userInfo => userInfo.information === cond.askedInformation.id);

          if (cond.askedInformation.type === 'BOOLEAN' || isConditionFilled(cond, userInformation[memberInfoIndex])) {
              currentNumberOfValidAnswer++ ;
          }
          else 
              conditionAreValidated = false;
      })
      
      if (conditionAreValidated && currentNumberOfValidAnswer > numberOfValidAnswer) {
          numberOfValidAnswer = currentNumberOfValidAnswer;
          conditionListFilled = condition
      }
  })

  if  (conditionListFilled) {
      if (paymentModel.memberToPayFees) {
          return {
              cents: conditionListFilled.price.cents * (1 + circle.owner.paymentModelFees / 100),
              currency: conditionListFilled.price.currency
          }
      }
      else {
          return conditionListFilled.price
      }
  }
  else {
      if (paymentModel.memberToPayFees) {
          return {
              cents: paymentModel.price.cents * (1 + circle.owner.paymentModelFees / 100),
              currency: paymentModel.price.currency
          }
      }
      else {
          return paymentModel.price 
      }
  }

/*
  let conditionListFilled = null;
  let numberOfValidAnswer = 0;
  let userInformation = circle.membersInformation.filter(
    info => info.user.id === userId
  );

  paymentModel.conditions.forEach(condition => {
    let conditionAreValidated = true;
    let currentNumberOfValidAnswer = 0;

    condition.conditions.forEach(cond => {
      let memberInfoIndex = userInformation.findIndex(
        userInfo => userInfo.information === cond.askedInformation.id
      );

      if (
        cond.askedInformation.type === "BOOLEAN" ||
        isConditionFilled(cond, userInformation[memberInfoIndex])
      ) {
        currentNumberOfValidAnswer++;
      } else conditionAreValidated = false;
    });

    if (
      conditionAreValidated &&
      currentNumberOfValidAnswer > numberOfValidAnswer
    ) {
      numberOfValidAnswer = currentNumberOfValidAnswer;
      conditionListFilled = condition;
    }
  });

  if (conditionListFilled) {
    if (paymentModel.memberToPayFees) {
      return {
        cents:
          conditionListFilled.price.cents *
          (1 + circle.owner.paymentModelFees / 100),
        currency: conditionListFilled.price.currency
      };
    } else {
      return conditionListFilled.price;
    }
  } else return paymentModel.price;
  */
}

function _didUserFillAll(circle, paymentModel, userId) {
  let paymentModelAskedInformation = [];
  paymentModel.conditions.forEach(condition => {
    condition.conditions.forEach(cond => {
      paymentModelAskedInformation = paymentModelAskedInformation.concat(
        cond.askedInformation
      );
    });
  });

  let didUserFillAll = true;
  paymentModelAskedInformation.forEach(askedInfo => {
    if (
      !circle.membersInformation ||
      (askedInfo.type !== "BOOLEAN" &&
        circle.membersInformation.findIndex(
          memberInfo =>
            userId === memberInfo.user.id &&
            memberInfo.information === askedInfo.id
        ) < 0)
    )
      didUserFillAll = false;
  });

  return didUserFillAll;
}

function _didUserPayFees(status, circle, paymentModel, userId) {
  if (status === "Paid") {
    return (
      !!paymentModel.memberSubscriptions &&
      paymentModel.memberSubscriptions.length > 0 &&
      paymentModel.memberSubscriptions.findIndex(
        memberSubscription => memberSubscription.user.id === userId
      ) >= 0
    );
  } else if (status === "ToBePaid") {
    return (
      !!paymentModel.memberSubscriptions &&
      (paymentModel.memberSubscriptions.length === 0 ||
        (paymentModel.memberSubscriptions.length > 0 &&
          paymentModel.memberSubscriptions.findIndex(
            memberSubscription => memberSubscription.user.id === userId
          ) < 0))
    );
  }
}

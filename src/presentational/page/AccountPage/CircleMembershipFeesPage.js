import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Alert, WebView, Modal} from 'react-native'
import Toast from 'react-native-simple-toast';
import {createRefetchContainer, graphql, QueryRenderer} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import moment from 'moment'
import { connect } from 'react-redux';

import I18n from 'sportunity/src/lib/I18n';
import { webAppUrl } from 'sportunity/conf/constants.json';
import { Header } from '../../Header';

import SportunityTabView from '../../SportunityTabView'
import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import CircleUserReference from './CircleUserReference';
import { ListBlock, ListBlockItem } from '../../ListBlock'

import MemberPaysFees from './Mutations/MemberPaysMemberShipFees'
import UpdateUserSubscription from './Subscriptions/UpdateUserSubscription'

export class CircleAskedFees extends Component {

    constructor() {
        super();
        this.sub ;
        this.state = {
            isLoadingAfterValidation: false,
            secure3DURL: null,
            payingPaymentModel: null,
            isLoadingAfterPayment: false
        }
    }

    componentDidMount() {
        this.sub = UpdateUserSubscription({userId: this.props.viewer.me.id});
    }
    
    componentWillUnmount() {
        this.sub && this.sub.dispose()
    }

    _didUserFillAll = (circle, paymentModel) => {
        let userId = this.props.user.id ;
        
        let paymentModelAskedInformation = [];
        paymentModel.conditions.forEach(condition => {
            condition.conditions.forEach(cond => {
                paymentModelAskedInformation = paymentModelAskedInformation.concat(cond.askedInformation)
            })
        })       

        let didUserFillAll = true ;
        paymentModelAskedInformation.forEach(askedInfo => {
            if (!circle.membersInformation || (askedInfo.type !== 'BOOLEAN' && circle.membersInformation.findIndex(memberInfo => userId === memberInfo.user.id && memberInfo.information === askedInfo.id) < 0))
                didUserFillAll = false
        })   

        return didUserFillAll
    }

    _didUserPayFees = (status, circle, paymentModel) => {
        if (status === 'Paid') {
            return (
                !!paymentModel.memberSubscriptions && 
                paymentModel.memberSubscriptions.length > 0 && 
                paymentModel.memberSubscriptions.findIndex(memberSubscription => memberSubscription.user.id === this.props.viewer.me.id) >= 0
            )
        }
        else if (status === 'ToBePaid') {
            return (
                !!paymentModel.memberSubscriptions && 
                (paymentModel.memberSubscriptions.length === 0 ||
                    (paymentModel.memberSubscriptions.length > 0 && 
                    paymentModel.memberSubscriptions.findIndex(memberSubscription => memberSubscription.user.id === this.props.viewer.me.id) < 0))
            )
        }
    }
    
    _getAmoutToPay = (circle, paymentModel) => {
        let userId = this.props.user.id ;
        let conditionListFilled = null;
        let numberOfValidAnswer = 0 ;  
        let userInformation = circle.membersInformation.filter(info => info.user.id === userId)
        
        paymentModel.conditions.forEach(condition => {
            let conditionAreValidated = true; 
            let currentNumberOfValidAnswer = 0 ; 

            condition.conditions.forEach(cond => {
                let memberInfoIndex = userInformation.findIndex(userInfo => userInfo.information === cond.askedInformation.id);

                if (cond.askedInformation.type === 'BOOLEAN' || this.isConditionFilled(cond, userInformation[memberInfoIndex])) {
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
    }

    _getAmoutToPayText = (circle, paymentModel) => {
        let price = this._getAmoutToPay(circle, paymentModel);
        if  (price)
            return price.cents / 100 + ' ' + price.currency
        else    
            return "- " + this.props.userCurrency;
    }

    isConditionFilled = (condition, answer) => {
        switch(condition.askedInformation.type) {
            case 'NUMBER': {
                switch(condition.askedInformationComparator)  {
                    case '≤': {
                        return (parseInt(answer.value) <= condition.askedInformationComparatorValue)
                    }
                    case '<': {
                        return (parseInt(answer.value) < condition.askedInformationComparatorValue)
                    }
                    case '=': {
                        return (parseInt(answer.value) === condition.askedInformationComparatorValue)
                    }
                    case '>': {
                        return (parseInt(answer.value) > condition.askedInformationComparatorValue)
                    }
                    case '≥': {
                        return (parseInt(answer.value) >= condition.askedInformationComparatorValue)
                    }
                }
            }
            case 'BOOLEAN': {
                if ((condition.askedInformationComparatorValue === 1 && answer.value === 'true') || (condition.askedInformationComparatorValue === 0 && answer.value === 'false'))
                    return true ; 
                else 
                    return false
            }
            case 'DATE': {
                switch(condition.askedInformationComparator)  {
                    case '≤': {
                        if (moment(answer.value).isBefore(condition.askedInformationComparatorDate))
                            return true; 
                        else 
                            return false;
                    }
                    case '≥': {
                        if (moment(answer.value).isAfter(condition.askedInformationComparatorDate))
                            return true; 
                        else 
                            return false;
                    }
                }
            }
            case 'CUSTOM': {
                return (condition.askedInformationComparatorValueString === answer.value) 
            }
            default: return false;
        }
    }

    payWithCard = (circle, paymentModel, cardId, callback) => {
        MemberPaysFees.commit({
                userId: this.props.viewer.me.id,
                paymentModelId: paymentModel.id,
                paymentMethodId: cardId,
                paymentWithWallet: false,
                amount: this._getAmoutToPay(circle, paymentModel)
            },
            response => {
                if (response.memberSubscribes && response.memberSubscribes.secure3DURL) {
                    callback()
                    this.setState({secure3DURL: response.memberSubscribes.secure3DURL, payingPaymentModel: paymentModel})
                }
                else {
                    Toast.show(I18n.t('memberShipIsPaid').replace('{0}', paymentModel.name))
                    this.props.relay.refetch()
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

    closeModal = () => {
        this.setState({isLoadingAfterPayment: true})
        setTimeout(() => {
            this.props.relay.refetch()
            this.setState({secure3DURL: null, isLoadingAfterPayment: false})
            setTimeout(() => {
                Toast.show(I18n.t('memberShipIsPaid').replace('{0}', this.state.payingPaymentModel.name))
                this.setState({payingPaymentModel: null})
            }, 1000)
        }, 5000)
    }

    payWithWallet = (circle, paymentModel, callback) => {
        MemberPaysFees.commit({
                userId: this.props.viewer.me.id,
                paymentModelId: paymentModel.id,
                paymentMethodId: null,
                paymentWithWallet: true,
                amount: this._getAmoutToPay(circle, paymentModel)
            },
            () => {
                Toast.show(I18n.t('memberShipIsPaid').replace('{0}', paymentModel.name))
                setTimeout(() => {
                    this.props.relay.refetch()
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

    openSelectPaymentMethod = (circle, paymentModel) => {
        this.props.navigation.navigate('selectPaymentMethod', {
            amount: this._getAmoutToPay(circle, paymentModel),
            selectWallet: (callback) => this.payWithWallet(circle, paymentModel, callback),
            selectCard: (cardId, callback) => this.payWithCard(circle, paymentModel, cardId, callback),
            texts: [
                {text: `${I18n.t('accountMembershipFeesName')} : ${paymentModel.name}`, style: 'h1'},
                {text: `${I18n.t('price')} : ${this._getAmoutToPayText(circle, paymentModel)}`, style:'h2'},
                {text: `${I18n.t('accountMembershipFeesTo')} : ${circle.owner.pseudo}`, style:'h2'}
            ],
            isLoading: this.state.isLoadingAfterValidation
        })
    }
  
    render() {
        const {circle, viewer, status} = this.props;

        return (
            <View style={styles.fieldsGroup}>
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
                            ?   <ActivityLoader isAnimating={true}/>
                            :   <WebView
                                    source={{uri: this.state.secure3DURL}}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    onNavigationStateChange={e => e.url.indexOf(webAppUrl) >= 0 && this.closeModal()}
                                />
                            }
                        </View>
                    </Modal>
                }
                {circle.paymentModels.filter(paymentModel => this._didUserPayFees(status, circle, paymentModel)).map(paymentModel => (
                    <View key={paymentModel.id} style={styles.paymentModelContainer}>
                        {this._didUserFillAll(circle, paymentModel) 
                        ?   <View style={{flex: 1}}>
                                <Text style={styles.paymentModelName}>
                                    {paymentModel.name} : {this._getAmoutToPayText(circle, paymentModel)}
                                </Text>
                                {status === 'ToBePaid' && paymentModel.inAppPaymentAllowed &&
                                    <View style={styles.goToFormButtonContainer}>
                                        <TouchableOpacity style={styles.goToFormButton} onPress={() => this.openSelectPaymentMethod(circle, paymentModel)}>
                                            <Text style={{color: colors.white}}>
                                                {I18n.t('accountMembershipFeesPay')}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                {(paymentModel.paymentViaBankWireAllowed || !paymentModel.inAppPaymentAllowed) &&
                                    <View>
                                        <CircleUserReference
                                            viewer={viewer}
                                            circleId={circle.id}
                                        />
                                        {circle.owner.bankAccount &&
                                            <View style={styles.bankAccountContainer}>
                                                <View style={styles.bankAccountTitleContainer}>
                                                    <Text style={styles.bankAccountTitle}>
                                                        {I18n.t('accountMembershipFeesBankAccount')}
                                                    </Text>
                                                    <Text style={styles.bankAccountExplanation}>
                                                        {I18n.t('accountMembershipFeesBankAccount_explanation')}
                                                    </Text>
                                                    <Text style={styles.refExplanation}>
                                                        {I18n.t('accountMembershipFeesRef_explanation')}
                                                    </Text>
                                                </View>
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('ownerName') + ': ' + circle.owner.bankAccount.ownerName}</Text>
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('addressLine1') + ': ' + circle.owner.bankAccount.addressLine1}</Text>
                                                {circle.owner.bankAccount.addressLine2 ? <Text style={styles.bankAccountDetailRow}>{I18n.t('addressLine2') + ': ' + circle.owner.bankAccount.addressLine2}</Text> : null}
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('city') + ': ' + circle.owner.bankAccount.city}</Text>
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('postalCode') + ': ' + circle.owner.bankAccount.postalCode}</Text>
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('country') + ': ' + circle.owner.bankAccount.country}</Text>                                    
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('IBAN') + ': ' + circle.owner.bankAccount.IBAN}</Text>
                                                <Text style={styles.bankAccountDetailRow}>{I18n.t('BIC') + ': ' + circle.owner.bankAccount.BIC}</Text>
                                            </View>
                                        }
                                    </View>
                                }
                            </View>
                        :   <View>
                                <Text style={styles.paymentModelName}>
                                    {paymentModel.name} : 
                                </Text>
                                <Text>
                                    {I18n.t('accountMembershipFeesMissingInfo')}
                                </Text>
                                <View style={styles.goToFormButtonContainer}>
                                    <TouchableOpacity style={styles.goToFormButton} onPress={() => this.props.navigation.navigate('sharedInformation')}>
                                        <Text style={{color: colors.white}}>
                                            {I18n.t('accountMembershipFeesGoToForm')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                ))}
            </View>
        )
    }
}

class MembershipFees extends Component {

  state = {
    circlesWithAskedFees: [],
    activeTab: 0,
    shownItems: [0]
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.viewer.me.circlesUserIsIn && nextProps.viewer.me.circlesUserIsIn.edges && nextProps.viewer.me.circlesUserIsIn.edges.length > 0)
      this._setCircleWithAskedFees(nextProps.viewer.me.circlesUserIsIn.edges)
  }

  _setCircleWithAskedFees = (circlesEdges) => {
    this.setState({
        circlesWithAskedFees:
        circlesEdges
          .map((e) => e.node)
          .filter((circle) =>
            circle.paymentModels && circle.paymentModels.length > 0
          )
    })
  }

  onChangeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleItem = id => {
    let index = this.state.shownItems.indexOf(id);
    let newList = this.state.shownItems;
    index < 0
    ?   newList = newList.concat(id)
    :   newList.length > 1 && newList.splice(index, 1)

    this.setState({shownItems: newList})
  }

  _didUserPayFeesForPaymentModel = (paymentModel) => {
    return (
        !!paymentModel.memberSubscriptions && 
        paymentModel.memberSubscriptions.length > 0 && 
        paymentModel.memberSubscriptions.findIndex(memberSubscription => memberSubscription.user.id === this.props.viewer.me.id) >= 0
    )
  }

  _displayCircleAskedFees = (circle, status) => {
      if (status === 'ToBePaid') {
        return circle.paymentModels.findIndex(paymentModel => this._didUserPayFeesForPaymentModel(paymentModel) === false) >= 0
      }
      else if (status === 'Paid') {
        return circle.paymentModels.findIndex(paymentModel => this._didUserPayFeesForPaymentModel(paymentModel) === true) >= 0
      }
  }

  render() {
    const { viewer, viewer: { me: user } } = this.props;
    const tabs = ["Activities", "Groups", "People"];
    
    return (
        <SportunityTabView
            tabBarInactiveTextColor={colors.background} 
            tabBarUnderlineStyle 
            style={{width: '100%', backgroundColor: colors.background}}
            onChangeTab={() => this.setState({shownItems: [0]})}
        >
            <View tabLabel={I18n.t('accountMembershipFeesToBePaid')}>
                <ScrollView contentContainerStyle={styles.container}>
                    {this.state.circlesWithAskedFees && this.state.circlesWithAskedFees.filter(circle => this._displayCircleAskedFees(circle, 'ToBePaid')).length > 0
                    ?   this.state.circlesWithAskedFees.filter(circle => this._displayCircleAskedFees(circle, 'ToBePaid')).map((circle, index) =>
                            <ListBlock 
                                key={index} 
                                title={circle.name + ' ' + I18n.t('circleOwner') + ' ' + circle.owner.pseudo} 
                                onPress={() => this.toggleItem(index)}
                                isClosed={this.state.shownItems.indexOf(index) < 0}
                            >
                                {this.state.shownItems.indexOf(index) >= 0 &&
                                    <ListBlockItem style={styles.listContainer}>
                                        <CircleAskedFees
                                            status='ToBePaid'
                                            circle={circle}
                                            user={user}
                                            viewer={viewer}
                                            userCurrency={this.props.userCurrency}
                                            navigation={this.props.navigation}
                                            relay={this.props.relay}
                                        />
                                    </ListBlockItem>
                                }
                            </ListBlock>
                        )
                    :   <Text style={styles.note}>
                            {I18n.t('accountMembershipFeesNone')}
                        </Text>
                    }
                </ScrollView>
            </View>
            <View tabLabel={I18n.t('accountMembershipFeesPaid')}>
                <ScrollView contentContainerStyle={styles.container}>
                    {this.state.circlesWithAskedFees && this.state.circlesWithAskedFees.filter(circle => this._displayCircleAskedFees(circle, 'Paid')).length > 0
                    ?   this.state.circlesWithAskedFees.filter(circle => this._displayCircleAskedFees(circle, 'Paid')).map((circle, index) =>
                        <ListBlock 
                            key={index} 
                            title={circle.name + ' ' + I18n.t('circleOwner') + ' ' + circle.owner.pseudo} 
                            onPress={() => this.toggleItem(index)}
                            isClosed={this.state.shownItems.indexOf(index) < 0}
                        >
                            {this.state.shownItems.indexOf(index) >= 0 &&
                                <ListBlockItem style={styles.listContainer}>
                                    <CircleAskedFees
                                        status='Paid'
                                        circle={circle}
                                        user={user}
                                        viewer={viewer}
                                        userCurrency={this.props.userCurrency}
                                        navigation={this.props.navigation}
                                    />
                                </ListBlockItem>
                            }
                        </ListBlock>
                        )
                    :   <Text style={styles.note}>
                            {I18n.t('accountMembershipFeesPaidNone')}
                        </Text>
                    }
                </ScrollView>
            </View>
        </SportunityTabView>
    )
  }
}


const stateToProps = (state) => ({
    userCountry: state.sportunityLocale.userCountry,
    userCurrency: state.sportunityLocale.userCurrency,
  });
  
const dispatchToProps = (dispatch) => ({
});
  
const CircleMembershipFeesPageTemp = createRefetchContainer(withNavigation(connect(stateToProps, dispatchToProps)(MembershipFees)), {
    viewer: graphql`
        fragment CircleMembershipFeesPage_viewer on Viewer {
            ...CircleUserReference_viewer
            me {
                id,
                circlesUserIsIn (last: 100) {
                    edges {
                        node {
                            id,
                            name
                            owner {
                                id
                                pseudo
                                paymentModelFees
                                bankAccount {
                                    addressLine1,
                                    addressLine2,
                                    city,
                                    postalCode,
                                    country,
                                    ownerName,
                                    IBAN,
                                    BIC
                                }
                            }
                            askedInformation {
                                id,
                                name,
                                type,
                                filledByOwner
                            }
                            membersInformation {
                                id,
                                information,
                                user {
                                    id,
                                }
                                value
                            }
                            paymentModels {
                                id,
                                name,
                                price { 
                                    cents,
                                    currency
                                }
                                conditions {
                                    id,
                                    name, 
                                    price {
                                        cents,
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
    `}, 
    graphql`query CircleMembershipFeesPageRefetchQuery {
        viewer {
            ...CircleMembershipFeesPage_viewer
        }
    }`
)

export default class extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: I18n.t('accountMembershipFees')
        }
    }
    render() {
      return (
        <QueryRenderer
          environment={environment}
          query={graphql`
            query CircleMembershipFeesPageQuery{
              viewer {
                ...CircleMembershipFeesPage_viewer
              }
            }
          `}
          variables={{}}
          render={({error, props}) => {
            if (props) {
              return <CircleMembershipFeesPageTemp viewer={props.viewer} query={props} {...this.props}/>;
            } else {
              return (
                <ActivityLoader isAnimating={true}/>
              )
            }
          }}
        />
      )
    }
  }

const styles = StyleSheet.create({
    container: {
        padding: metrics.baseMargin,
        paddingTop: metrics.baseMargin,
        justifyContent: 'center',
    },
    paymentModelContainer: {
        marginTop: metrics.baseMargin, 
        flex: 1,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey
    },
    fieldsGroup: {
        flex: 1
    },
    paymentModelName: {
        marginBottom: metrics.baseMargin
    },
    bankAccountContainer: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#EEE',
        borderRadius: 5
    },
    bankAccountTitleContainer: {

    },
    bankAccountTitle: {
        color: colors.black,
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    bankAccountExplanation: {
        fontSize: 12,
        color: colors.black,
        fontStyle: 'italic',
        marginBottom: 5
    },
    refExplanation: {
        color: colors.red,
        fontSize: 12,
        marginBottom: 10
    },
    bankAccountDetailRow: {
        fontSize: 14,
        flex: 2,
        color: colors.black,
        marginBottom: 5
    },
    note: {
        fontSize: 14,
        color: colors.black,
        fontStyle: 'italic',
        marginTop: 10
    },
    goToFormButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: metrics.baseMargin
    },
    goToFormButton: {
        // borderWidth: 1, 
        // borderStyle: 'solid',
        // borderColor: colors.lightGrey,
        backgroundColor: colors.blue,
        borderRadius: 5,
        paddingHorizontal: metrics.doubleBaseMargin,
        paddingVertical: 4
    }
})

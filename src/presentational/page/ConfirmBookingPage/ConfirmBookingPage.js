// @flow
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import Text from 'react-native-text';
import {graphql, createRefetchContainer, QueryRenderer} from 'react-relay'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { withNavigation } from 'react-navigation';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import { metrics, colors, fonts } from 'sportunity/src/theme';
import ButtonSportunity from '../EventDetailPage/ButtonSportunity'; //TODO: move to presentational level
import Price from '../EventDetailPage/PriceView'; //TODO: move to presentational level
import { updateLoadingStatus } from '../../../../src/action/sportunityAction';
import { connect } from 'react-redux';
import Header from './ConfirmBookingPageHeader'

type Model$PaymentMethod = any;
type ConfirmBookingPage$State = {
  paymentMethodId: string
}
type ConfirmBookingPage$Props = {
  viewer: {
    sportunity: Object,
    me: {
      firstName?: string,
      lastName?: string,
      address: {
        country?: string
      },
      paymentMethods: Array<Model$PaymentMethod>
    }
  }
};

class ConfirmBookingPage extends React.Component {
  state: ConfirmBookingPage$State;

  constructor(props: ConfirmBookingPage$Props) {
    super(props);
    this.state = {
      paymentMethodId: null
    }
  }

  componentDidMount = () => {
    const paymentMethods = this.props.viewer.me.paymentMethods;
    const accountInfo = !!this.props.viewer.me.firstName &&
      !!this.props.viewer.me.lastName &&
      !!this.props.viewer.me.address.country;
    if(!accountInfo)
      this.props.navigation.navigate('myAccount')
    this.setState({
      paymentMethodId: paymentMethods && paymentMethods[0] && paymentMethods[0].id
    })
  }

  getSelectedCardMask = (paymentMethods, paymentMethodId) => {
    let mask = ''
    if (paymentMethods && paymentMethods.length > 0) {
      paymentMethods.forEach(paymentMethod => {
        if (paymentMethod.id === paymentMethodId)
          mask = paymentMethod.cardMask
      })
    }

    return mask;
  }

  render = () => {
    const {viewer, viewer: {sportunity, me: { paymentMethods }}, paymentWithWallet, paymentMethodId} = this.props;
    const user = this.props.viewer.me;
    return (
      <View style={styles.page}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{flex: 1}}>

          <Header sportunity={sportunity} />
          <Price sportunity={sportunity} viewer={viewer}/>
          {paymentWithWallet 
            ? <View style={styles.row}>
                <Text style={styles.text}>
                  {I18n.t('paymentWithWallet')}
                </Text>
              </View>
            : <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.text}>
                    {I18n.t('paymentWithCard') + ':'}
                  </Text>
                  <Text style={styles.card}>
                    {this.getSelectedCardMask(paymentMethods, paymentMethodId)}
                  </Text>
                </View>
              </View>
          }
          <View style={{flex: 1}}>
            <ButtonSportunity
              confirmation
              paymentWithWallet={paymentWithWallet}
              paymentMethodChoosen
              disabled={!paymentMethodId}
              status={sportunity && sportunity.status}
              paymentMethodId={paymentMethodId}
              isLoggedIn={!!user}
              isParticipant={false}
              viewer={this.props.viewer}
              sportunity={sportunity}
              user={this.props.viewer.me}
              displayFloating={true}
              isLoading={this.props.isLoading}
              changeLoadingStatus={(status) => this.props.updateLoadingStatus(status)}
              navigation={this.props.navigation}
            >
                {I18n.t('book')}
            </ButtonSportunity>
          </View>
        </ScrollView>
      </View>
    );
  }
  static propTypes = {
    viewer: PropTypes.object.isRequired
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollView: {
    height: 500,
    padding: metrics.baseMargin,
  },
  paymentItem: {
    height:60
  },
  row: {
    flexDirection: 'row',
    padding: metrics.baseMargin,
    alignItems: 'center',
    backgroundColor: colors.snow,
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  text: {
    color: colors.darkGrey,
    fontSize: 16
  },
  card: {
    fontSize: 14,
    color: colors.darkBlue,
    marginTop: 10, 
    fontWeight: '500'
  }
})

const stateToProps = (state) => ({
  isLoading: state.sportunityActivity.isLoading
});

const dispatchToProps = (dispatch) => ({
  updateLoadingStatus: (status) => dispatch(updateLoadingStatus(status))
});

const ConfirmBookingPageTemp = createRefetchContainer(withNavigation(connect(stateToProps, dispatchToProps)(ConfirmBookingPage)),{
    viewer: graphql`fragment ConfirmBookingPage_viewer on Viewer @argumentDefinitions(
      id: {type: "ID"}
    ){
      id
      ...ButtonSportunity_viewer
      ...PriceView_viewer
      me {
        id,
        firstName,
        lastName,
        address {
          country
        },
        paymentMethods {
          id
          cardType
          cardMask
          expirationDate
        }
        ...ButtonSportunity_user
      }
      sportunity(id: $id) {
        id
        price {
          cents
          currency
        }
        status
        ...ConfirmBookingPageHeader_sportunity
        ...ButtonSportunity_sportunity
        ...PriceView_sportunity
      }
    }`
  },
  graphql`
    query ConfirmBookingPageRefetchQuery ($id: ID) {
      viewer {
        ...ConfirmBookingPage_viewer @arguments (id: $id)
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('validation'))
    };
  };
  
  setTitle = title => this.props.navigation.setParams({title})

  render() {
    const {navigation} = this.props;
    let id = navigation.getParam('id', null)
    let paymentWithWallet = navigation.getParam('paymentWithWallet', null)
    let paymentMethodId = navigation.getParam('paymentMethodId', null)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ConfirmBookingPageQuery (
            $id: ID, 
          ){
            viewer {
              ...ConfirmBookingPage_viewer @arguments(
                id: $id,
              )
            }
          }
        `}
        variables={{
          id, 
        }}
        render={({error, props}) => {
          if (props) {
            return <ConfirmBookingPageTemp 
                viewer={props.viewer} 
                query={props} 
                setTitle={this.setTitle}
                id={id}
                paymentWithWallet={paymentWithWallet}
                paymentMethodId={paymentMethodId}
                {...this.props} 
              />;
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

I18n.fallbacks = true
I18n.translations = translations;

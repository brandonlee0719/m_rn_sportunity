// @flow
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import Toast from 'react-native-simple-toast';
import { CreditCardInput } from 'react-native-credit-card-input';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import CardItem from '../../list/CardItem/CardItem';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import Title from './Title';
import Statistics from './Statistics';
import PaymentSettings from './PaymentSettings';
import AuthorizedUsers from './AuthorizedUsers';
import SubaccountsManagment from './SubaccountsManagment';
import CalendarSync from './CalendarSync';
import NotificationPreferences from './NotificationPreferences';
import { ListBlock, AddToList, ListBlockItem } from '../../ListBlock';


class AccountPage extends React.Component {
  state: UserAccount$State;

  constructor(props) {
    super(props);
    const { isProfileComplete } = this.props.viewer.me;
    const accountAvailable = isProfileComplete;
    this.state = {
      accountAvailable,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const screenToOpen = navigation.getParam('screenToOpen', '');

    this.setState({ screenToOpen });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ accountAvailable: nextProps.viewer.me.isProfileComplete });
  }

  finishAccount = () => {
    this.setState({ accountAvailable: true });
    if (this.props.onSaveAccount)
      this.props.onSaveAccount()
  }

  validate = () => {
    const me = this.props.viewer.me;
    if(!this.props.paymentMethodOptional && (!me.paymentMethods || !me.paymentMethods.length))
      return Toast.show(I18n.t('accountToastAddPayment'));

    if(!this.props.bankAccountOptional && (!me.bankAccount || !me.bankAccount.id))
      return Toast.show(I18n.t('accountToastAddBank'));

    if(this.props.fromSportunityPage) {
      Toast.show(`${I18n.t('accountYouCanNow')} ${this.props.fromSportunityPage} ${I18n.t('accountThisSportunity')}`);
      this.props.navigation.goBack()
    }
  }

  render() {
    const {viewer} = this.props ;
    return (
    <ScrollView contentContainerStyle={styles.container}>

      <CardItem
        title={I18n.t('accountPaymentSettings')}
        onPress={() => {
          this.props.navigation.navigate('paymentSettings')
        }}
      />

      {!this.props.fromSportunityPage &&
        <NotificationPreferences />
      }

      {/* {!this.props.fromSportunityPage &&
        <MyPreferences user={this.props.viewer.me} forceOpen={this.state.screenToOpen === 'Advanced Settings'} />
      } */}

      {!this.props.fromSportunityPage &&
        <CalendarSync
          viewer={this.props.viewer}
          user={this.props.viewer.me}
        />
      }

      {!this.props.fromSportunityPage &&
        <Statistics
          viewer={this.props.viewer}
          user={this.props.viewer.me}
          forceOpen={this.state.screenToOpen === 'Statistics'}
        />
      }

      {!this.props.fromSportunityPage && this.props.viewer.me &&
        <AuthorizedUsers
          viewer={this.props.viewer}
          user={this.props.viewer.me}
          forceOpen={this.state.screenToOpen === 'Access Rights'}
        />
      }

      {this.props.viewer.me && !this.props.fromSportunityPage && !this.props.viewer.me.isSubAccount &&
        <SubaccountsManagment viewer={this.props.viewer} user={this.props.viewer.me} forceOpen={this.state.screenToOpen === 'SubAccounts'} />
      }
      
      { this.state.accountAvailable && this.props.fromSportunityPage &&
        <Button onPress={this.validate}>
          {I18n.t('validate')}
        </Button>
      }
    </ScrollView>
  )}

  static propTypes = {
    viewer: PropTypes.object.isRequired,
    fromSportunityPage: PropTypes.string,
    bankAccountOptional: PropTypes.bool,
    paymentMethodOptional: PropTypes.bool,
  }
}

const AccountPageTemp = createFragmentContainer(withNavigation(AccountPage), {
  viewer: graphql`
    fragment AccountPage_viewer on Viewer {
      ...Statistics_viewer
      ...AuthorizedUsers_viewer
      ...SubaccountsManagment_viewer
      me {
        id,
        ...Statistics_user
        ...AuthorizedUsers_user
        ...CalendarSync_user
        ...SubaccountsManagment_user
        firstName,
        lastName,
        nationality,
        email
        birthday,
        shouldDeclareVAT,
        address {
          country,
        },
        isProfileComplete,
        profileType,
        isSubAccount
      }
    }`,
  },
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('setupAccount'))
    };
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AccountPageQuery{
            viewer {
              ...AccountPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <AccountPageTemp viewer={props.viewer} query={props} {...this.props}/>;
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
    justifyContent: 'center',
  },
  inputRow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  errorText: {
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.error,
  }
});

I18n.fallbacks = true
I18n.translations = translations;

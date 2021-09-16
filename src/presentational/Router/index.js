import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'react-native';
import { Scene, Router, Actions as NavigationActions, ActionConst } from 'react-native-router-flux';
import RelayRenderer from 'rnrf-relay-renderer';
import Relay from 'react-relay/classic';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import SettingsPage from 'sportunity/src/presentational/page/SettingsPage/SettingsPage.js';
import NewActivityPage from 'sportunity/src/presentational/page/NewActivityPage/NewActivityPage.js';
import CreateProfilePage from 'sportunity/src/presentational/page/CreateProfilePage/CreateProfilePage.js';
import { MeProfile, OtherProfile } from 'sportunity/src/presentational/page/ProfilePage/ProfilePage.js';
import { MeSport, SportunitySport, SportunitySportLevel, FilterSport, CircleSport, PublicCirclesFilter }  from 'sportunity/src/presentational/page/SportPage/SportPage.js';
import FiltersPage from 'sportunity/src/presentational/page/FiltersPage';
import PublicCircleFiltersPage from 'sportunity/src/presentational/page/PublicCircleFiltersPage';
import ForgotPassword from 'sportunity/src/presentational/page/ForgotPasswordPage/ForgotPassword.js';
import TermsOfUse from 'sportunity/src/presentational/page/TermsOfUse/TermsOfUse.js';
import PrivacyPolicy from 'sportunity/src/presentational/page/PrivacyPolicy/PrivacyPolicy.js';
import AppIntro from 'sportunity/src/presentational/page/AppIntro/AppIntro.js';
import DrawerIcon from 'sportunity/src/presentational/Drawer/DrawerIcon'
// import FilterDetailPage from 'sportunity/src/presentational/page/FilterDetailPage';

import LanguagesPage from 'sportunity/src/presentational/page/LanguagesPage/LanguagesPage.js';

import page from '../page';
import { images } from '../../theme';
import styles from './style';

const {
  LoggedInPage,
  CirclesDetailPage,
  EventDetailPage,
  NewCirclePage,
  CirclesPage,
  ChatPage,
  ChatUserContainer,
  ChatSportunityContainer,
  ChatContainer,
  SportunitiesPage,
  BookedPage,
  OrganizedPage,
  PaymentMethodPage,
  ConfirmBookingPage,
  ChoosePaymentMethod,
  NotificationsPage,
  BankAccountPage,
  AccountPage,
  PersonalInformationPage,
  PaymentInformationPage,
  PaymentSettingsPage,
  SharedInformationPage,
  CircleFeesPage,
  CircleMembershipFeesPage,
  WalletPage,
  MyWallet
} = page;

const viewerQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

const SportunityRouter = ({ isLoggedIn, environment, updateFirebaseToken, onChangeToken, updateToken, updateSuperToken, updateUserToken, language, neverShowAppIntroAgain }) => {
    return(
      <Router
        navigationBarStyle={styles.navBar}
        renderLeftButton={(props) => <DrawerIcon {...props} />}
        titleWrapperStyle={styles.navBarTitleContainer}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}
        backButtonTextStyle={styles.backButtonTextStyle}
        leftButtonIconStyle={styles.leftButtonIconStyle}
        wrapBy={RelayRenderer({ environment })}
      >
        <Scene
          key="root"
          hideTabBar
        >
          <Scene
            key="sportunities"
            type={ActionConst.REPLACE}
            initial
          >
            <Scene
              key="main"
              tabs
            >
              <Scene
                key="loggedin"
                title={I18n.t('sportunities')}
                component={LoggedInPage}
                hideNavBar={true}
                queries={viewerQueries}
              />
              <Scene
                key="sportunityList"
                title={I18n.t('sportunities')}
                component={SportunitiesPage}
                hideNavBar={true}
                queries={viewerQueries}
              />
            </Scene>
          </Scene>
          <Scene
            key="filters"
            title={I18n.t('filters')}
            component={FiltersPage}
            queries={viewerQueries}
          />
          <Scene
            key="publicCircleFilters"
            title={I18n.t('filters')}
            component={PublicCircleFiltersPage}
            queries={viewerQueries}
          />
          <Scene
            key="profile"
            title=""
            component={OtherProfile}
            queries={viewerQueries}
            hideNavBar={true}
          />
          <Scene
            key="meProfile"
            title=""
            component={MeProfile}
            queries={viewerQueries}
            hideNavBar={true}
          />
          <Scene
            key="meStats"
            title=""
            component={MeProfile}
            queries={viewerQueries}
            hideNavBar={true}
          />
          <Scene
            key="meHistory"
            title=""
            component={MeProfile}
            queries={viewerQueries}
            hideNavBar={true}
          />
          <Scene
            key="createProfile"
            title={I18n.t('register')}
            updateToken={updateToken}
            updateSuperToken={updateSuperToken}
            updateUserToken={updateUserToken}
            onChangeToken={onChangeToken}
            updateFirebaseToken={updateFirebaseToken}
            component={CreateProfilePage}
            queries={viewerQueries}
          />
          <Scene
            key="circles"
            title={I18n.t('circleTitle')}
            component={CirclesPage}
            queries={viewerQueries}
          />
          <Scene
            key="circledetail"
            title={I18n.t('circleTitle')}
            component={CirclesDetailPage}
            queries={viewerQueries}
          />
          <Scene
            key="newCircle"
            title="new Circle"
            component={NewCirclePage}
            queries={viewerQueries}
          />
          <Scene
            key="chat"
            title={I18n.t('drawerChats')}
            component={ChatPage}
            queries={viewerQueries}
          />
          <Scene
            key="chatdetail"
            title={I18n.t('drawerChats')}
            component={ChatContainer}
            queries={viewerQueries}
          />
          <Scene
            key="chatsportunity"
            title={I18n.t('drawerChats')}
            component={ChatSportunityContainer}
            queries={viewerQueries}
          />
          <Scene
            key="chatuser"
            title={I18n.t('drawerChats')}
            component={ChatUserContainer}
            queries={viewerQueries}
          />
          <Scene
            key="history"
            title={I18n.t('history')}
            component={HistoryPage}
            queries={viewerQueries}
            hideNavBar={true}
          />
          <Scene
            key="settings"
            title={I18n.t('login')}
            component={SettingsPage}
            onChangeToken={onChangeToken}
            updateFirebaseToken={updateFirebaseToken}
            updateToken={updateToken}
            updateSuperToken={updateSuperToken}
            updateUserToken={updateUserToken}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key="personalInformation"
            title={I18n.t('accountPersonalInformation')}
            component={PersonalInformationPage}
            queries={viewerQueries}
          />
          <Scene
            key="paymentInformation"
            title={I18n.t('accountPaymentInformation')}
            component={PaymentInformationPage}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key="paymentSettings"
            title={I18n.t('accountPaymentSettings')}
            component={PaymentSettingsPage}
            queries={viewerQueries}
          />
          <Scene
            key="circleFees"
            title={I18n.t('accountCircleFees')}
            component={CircleFeesPage}
            queries={viewerQueries}
          />
          <Scene
            key="sharedInformation"
            title={I18n.t('accountSharedInformationTitle')}
            component={SharedInformationPage}
            queries={viewerQueries}
          />
          <Scene
            key="circleMembershipFees"
            title={I18n.t('accountMembershipFees')}
            component={CircleMembershipFeesPage}
            queries={viewerQueries}
          />
          <Scene
            key="new_activity"
            title={I18n.t('newActivity')}
            component={NewActivityPage}
            queries={viewerQueries}
            hideNavBar={true}
          />
          <Scene
            key="meSports"
            title={I18n.t('selectSport')}
            component={MeSport}
            queries={viewerQueries}
          />
          <Scene
            key="sportunitySports"
            title={I18n.t('selectSport')}
            component={SportunitySport}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key='sportunitySportLevels'
            title={I18n.t('levels')}
            component={SportunitySportLevel}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key="filterSports"
            title={I18n.t('selectSport')}
            component={FilterSport}
            queries={viewerQueries}
          />
          <Scene
            key="circleSport"
            title={I18n.t('selectSport')}
            component={CircleSport}
            queries={viewerQueries}
          />
          <Scene
            key="publicCirclesSportFilter"
            title={I18n.t('selectSport')}
            component={PublicCirclesFilter}
            queries={viewerQueries}
          />
          <Scene
            key="eventdetail"
            title={I18n.t('eventDetail')}
            component={EventDetailPage}
            queries={viewerQueries}
            updateToken={updateToken}
            hideNavBar={true}
          />
          <Scene
            key="languages"
            title={I18n.t('languages')}
            component={LanguagesPage}
            queries={viewerQueries}
          />
          <Scene
            key="newPaymentMethod"
            title={I18n.t('registerPayment')}
            component={PaymentMethodPage}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key="choosePaymentMethod"
            title={I18n.t('paymentSelection')}
            component={ChoosePaymentMethod}
            queries={viewerQueries}
          />
          <Scene
            key="confirmBooking"
            title={I18n.t('validation')}
            component={ConfirmBookingPage}
            queries={viewerQueries}
          />
          <Scene
            key="notifications"
            title={I18n.t('notifications')}
            component={NotificationsPage}
            queries={viewerQueries}
          />
          <Scene
            key="myBankAccount"
            title={I18n.t('setupBankTitle')}
            component={BankAccountPage}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key="myWallet"
            title={I18n.t('accountWallet')}
            component={MyWallet}
            queries={viewerQueries}
          />
          <Scene
            key="myAccount"
            title={I18n.t('setupAccount')}
            component={AccountPage}
            queries={viewerQueries}
            hideNavBar={false}
          />
          <Scene
            key="forgotPassword"
            title={I18n.t('loginForgotPassword')}
            component={ForgotPassword}
            queries={viewerQueries}
          />
          <Scene
            key="termsOfUse"
            title={I18n.t('termsOfUse')}
            component={TermsOfUse}
          />
          <Scene
            key="privacyPolicy"
            title={I18n.t('privacyPolicy')}
            component={PrivacyPolicy}
          />
          <Scene
            key="appIntro"
            title={I18n.t('tutorial')}
            component={AppIntro}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    )
  }

SportunityRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  environment: PropTypes.object.isRequired,
  updateToken: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

export default connect(
  stateToProps,
  null,
)(SportunityRouter);

I18n.fallbacks = true
I18n.translations = translations;

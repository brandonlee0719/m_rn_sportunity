import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {View, Image, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'

import { colors, images } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import * as globals from './lib/globalsjs/globals';
const openDrawer = () => globals.object('openDrawer').call('openDrawer');
import { connect } from 'react-redux';

import NavigationService from './NavigationService'
import translations from 'sportunity/src/translations.js';

import page from './presentational/page';
const {LoggedInPage, CirclesDetailPage, EventDetailPage, CirclesPage, ChatPage, ChatUserContainer, ChatSportunityContainer, ChatContainer, SportunitiesPage, BookedPage, OrganizedPage, PaymentMethodPage, ConfirmBookingPage, ChoosePaymentMethod, SelectPaymentMethod, NotificationsPage, BankAccountPage, AccountPage, PersonalInformationPage, PaymentInformationPage, PaymentSettingsPage, SharedInformationPage, CircleFeesPage, CircleMembershipFeesPage, MyWallet, SearchModule, TransactionsPage, PaymentPage} = page;
import Drawer from './presentational/Drawer/index'
import SettingsPage from 'sportunity/src/presentational/page/SettingsPage/SettingsPage.js';
import CreateProfilePage from 'sportunity/src/presentational/page/CreateProfilePage/CreateProfilePage.js';
import { MeProfile } from 'sportunity/src/presentational/page/ProfilePage/ProfilePage.js';
import { OtherProfile } from 'sportunity/src/presentational/page/ProfilePage/OtherProfilePage.js';
import FiltersPage from 'sportunity/src/presentational/page/FiltersPage';
import PublicCircleFiltersPage from 'sportunity/src/presentational/page/PublicCircleFiltersPage';
import {  NewActivityStep1, NewActivityStep2, NewActivityStep3, NewActivityStep4, NewActivityStep5, NewActivityStep6, NewActivityStep7
} from 'sportunity/src/presentational/page/NewActivityPage';
import NewActivityPage from '../src/presentational/page/NewActivityPage/NewActivityPage';
import SportPage from './presentational/page/SportPage/SportPage'
const { MeSport, SportunitySport, SportunitySportLevel, FilterSport, CircleSport, PublicCirclesFilter } = SportPage;
import ForgotPassword from 'sportunity/src/presentational/page/ForgotPasswordPage/ForgotPassword.js';
import TermsOfUse from 'sportunity/src/presentational/page/TermsOfUse/TermsOfUse.js';
import PrivacyPolicy from 'sportunity/src/presentational/page/PrivacyPolicy/PrivacyPolicy.js';
import AppIntro from 'sportunity/src/presentational/page/AppIntro/AppIntro.js';
import LanguagesPage from 'sportunity/src/presentational/page/LanguagesPage/LanguagesPage.js';
import {
  NewCircleStep1, NewCircleStep2, NewCircleStep3, NewCircleStep4, NewCircleStep5, NewCircleSuccess,
} from './presentational/page/NewCirclePage';
import EventDetailInfo from './presentational/page/EventDetailPage/EventDetailInfo';
import EventDetailMembers from './presentational/page/EventDetailPage/EventDetailMembers';
import EventDetailCarpooling from './presentational/page/EventDetailPage/EventDetailCarpooling';
import EventDetailChat from './presentational/page/EventDetailPage/EventDetailChat';
import EventDetailMenu from './presentational/page/EventDetailPage/EventDetailMenu';

import HeaderProfileIcon from './presentational/TopMenu/HeaderProfileIcon';
import HeaderChatIcon from './presentational/TopMenu/HeaderChatIcon';
import HeaderSearchBar from './presentational/TopMenu/HeaderSearchBar';
import HeaderBackIcon from './presentational/TopMenu/HeaderBackIcon';
import HeaderCrossIcon from './presentational/TopMenu/HeaderCrossIcon';
import { CustomizedPermissionsPage } from './presentational/page/NewActivityPage/CoOrganizers/customizedPermissionsModal.js';

const headerConfigWithTopTabBar = {
  headerStyle: {
    backgroundColor: colors.blue,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    color: colors.white
  },
}

const eventDetailTabs = createMaterialTopTabNavigator(
  {
    eventInfo: { screen: EventDetailInfo },
    eventMembers: { screen: EventDetailMembers },
    eventCarpooling: { screen: EventDetailCarpooling },
    eventChat: { screen: EventDetailChat },
    eventMenu: { screen: EventDetailMenu },
  },
  {
    initialRouteName: 'eventInfo',
    swipeEnabled: false,
    //lazyLoad: true,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: { backgroundColor: colors.blue },
      activeTintColor: colors.white,
      indicatorStyle: { backgroundColor: colors.white }
    },
  }
);

import {
  underlayColor,
  selectedStyle,
  nonSelectedStyle,
  badgeStyle
} from './presentational/page/SportunityPage/SportunityFilterKind/SportunityFilterKindTabItem/style';
import EventShareIcon from './presentational/page/EventDetailPage/EventShareIcon';

const NewActivityStack = createStackNavigator(
  {
    NewActivityStep1: {screen: NewActivityStep1},
    NewActivityStep2: {screen: NewActivityStep2},
    NewActivityStep3: {screen: NewActivityStep3},
    NewActivityStep4: {screen: NewActivityStep4},
    NewActivityStep5: {screen: NewActivityStep5},
    NewActivityStep6: {screen: NewActivityStep6},
    NewActivityStep7: {screen: NewActivityStep7},
  },
  {
    initialRouteName: 'NewActivityStep1',
  }
);

const commonNavigator = {
  Drawer: { screen: Drawer },
  LoggedInPage: { screen: LoggedInPage },
  searchModule: {
    screen: SearchModule,
    navigationOptions: {
      header: null,
    }
    // navigationOptions: ({navigation}) => {
    //   return ({
    //     headerLeft: <HeaderBackIcon navigation={navigation} goBack={navigation.state.params.goBack}/>,
    //     headerTitle: <HeaderSearchBar placeholder={navigation.state.params.placeholder}/>,
    //     headerRight: <HeaderCrossIcon onPress={() => {}}/>
    //   })
    // }
  },
  settings: {screen: SettingsPage},
  createProfile: {screen: CreateProfilePage},
  eventdetail: {
    screen: eventDetailTabs,
    navigationOptions: ({ navigation }) => {
      const sportunityId = navigation.getParam('id', null);
      return {
        headerTitle: I18n.t('sportunityActivityHeading'),
        headerRight: <EventShareIcon sportunityId={sportunityId} />,
        ...headerConfigWithTopTabBar
      };
    }
  },
  meProfile: {screen: MeProfile},
  meStats: {screen: MeProfile},
  meHistory: {screen: MeProfile},
  profile: {screen: OtherProfile},
  filters: {screen: FiltersPage},
  publicCircleFilters: {screen: PublicCircleFiltersPage},
  new_activity: { screen: NewActivityStack, navigationOptions: {
    header: null
  } },
  meSports: {screen: MeSport},
  sportunitySports: {screen: SportunitySport},
  sportunitySportLevels: {screen: SportunitySportLevel},
  filterSports: {screen: FilterSport},
  circleSport: {screen: CircleSport},
  publicCirclesSportFilter: {screen: PublicCirclesFilter},
  forgotPassword: {screen: ForgotPassword},
  termsOfUse: {screen: TermsOfUse},
  privacyPolicy: {screen: PrivacyPolicy},
  appIntro: {screen: AppIntro, navigationOptions: {
    header: null,
  }},
  circledetail: {screen: CirclesDetailPage},
  newCircle: {screen: NewCircleStep1, navigationOptions: { header: null }},
  NewCircleStep2: {screen: NewCircleStep2, navigationOptions: { header: null }},
  NewCircleStep3: {screen: NewCircleStep3, navigationOptions: { header: null }},
  NewCircleStep4: {screen: NewCircleStep4, navigationOptions: { header: null }},
  NewCircleStep5: {screen: NewCircleStep5, navigationOptions: { header: null }},
  NewCircleSuccess: {screen: NewCircleSuccess, navigationOptions: { header: null }},
  //circles: {screen: CirclesPage},
  chat: {screen: ChatPage},
  chatuser: {screen: ChatUserContainer},
  chatsportunity: {screen: ChatSportunityContainer},
  chatdetail: {screen: ChatContainer},
  newPaymentMethod: {screen: PaymentMethodPage},
  confirmBooking: {screen: ConfirmBookingPage}, 
  choosePaymentMethod: {screen: ChoosePaymentMethod}, 
  selectPaymentMethod: {screen: SelectPaymentMethod},
  notifications: {screen: NotificationsPage},
  myBankAccount: {screen: BankAccountPage},
  myAccount: {screen: AccountPage},
  personalInformation: {screen: PersonalInformationPage},
  paymentInformation: {screen: PaymentInformationPage},
  paymentSettings: {screen: PaymentSettingsPage},
  sharedInformation: {screen: SharedInformationPage},
  circleFees: {screen: CircleFeesPage},
  circleMembershipFees: {screen: CircleMembershipFeesPage},
  myWallet: {screen: MyWallet},
  transactionsPage: {screen: TransactionsPage},
  languages: {screen: LanguagesPage},
  coOrganizerPermissions: {screen: CustomizedPermissionsPage},
  paymentPage: {screen: PaymentPage},
}

const MainNavigator = createStackNavigator(
  {
    ...commonNavigator,
    sportunityList: {
      screen: SportunitiesPage,
      navigationOptions: ({navigation}) => ({
        headerLeft: <HeaderProfileIcon/>,
        headerTitle:
          <HeaderSearchBar
            placeholder={I18n.t('searchActivity')}
            onPress={() => navigation.navigate('searchModule', {navigation, placeholder: I18n.t('searchActivity'), openOnTab: 'Activities'})}
          />,
        headerRight: <HeaderChatIcon/>,
      })
    },
  },
  {
    initialRouteName: 'sportunityList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.blue
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        color: colors.white
      },
      gesturesEnabled: false,
      headerBackTitle: null
    },
  },
)

const CircleNavigator = createStackNavigator(
  {
    ...commonNavigator,
    circles: {
      screen: CirclesPage,
      navigationOptions: ({navigation}) => ({
        headerTitle:
          <HeaderSearchBar
            placeholder={I18n.t('searchCircle')}
            onPress={() => navigation.navigate('searchModule', {navigation, placeholder: I18n.t('searchCircle'), openOnTab: 'Groups'})}
          />,
        headerLeft: <HeaderProfileIcon/>,
        headerRight: <HeaderChatIcon/>,
      })
    },
  },
  {
    initialRouteName: 'circles',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.blue
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        color: colors.white
      },
      gesturesEnabled: false,
      headerBackTitle: null
    },
  },
)

MainNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

CircleNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const imageStyle = {
  width: 22,
  height: 22,
  tintColor: colors.white,
};
const focusedImageStyle = {
  width: 22,
  height: 22,
  tintColor: colors.bloodOrange,
};


const Menu = (props) => {
  const { description, selected, action, iconUrl, customStyle, menu=false, unreadAllTotal, unreadNotifications} = props
  const style = selected ? selectedStyle : nonSelectedStyle;
  const imageStyle = customStyle || style.tabIcon;
  imageStyle.tintColor = selected ? colors.bloodOrange : colors.white;
  let badgeNumber = menu ? unreadAllTotal : unreadNotifications;

  return (
    <TouchableWithoutFeedback
      onPress={() => action()}
      underlayColor='transparent'
      style={style.container}
    >
      <View style={{flex: 1, width: '100%',alignItems: 'center',justifyContent: 'flex-end', paddingBottom: 2}}>
        <Image source={iconUrl} style={imageStyle}/>
        {badgeNumber > 0 || badgeNumber==maxBadgeNumberStr
        ?
          <View style={badgeStyle.badgeContainer}>
            <Text style={badgeStyle.badge}>{badgeNumber}</Text>
          </View>
        :
        null
      }
        <Text style={style.text}>
          {description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const maxBadgeNumberStr = '99+'
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

const stateToProps = ({sportunityList, sportunityProfile: { counts: { unreadChats, unreadNotifications, unreadAllTotal } }}) => ({
  unreadChats: maxBadgeNumber(unreadChats),
  unreadNotifications: maxBadgeNumber(unreadNotifications),
  unreadAllTotal: maxBadgeNumber(unreadAllTotal),
});
const dispatchToProps = (dispatch) => ({
});

const MenuRedux = connect(stateToProps,dispatchToProps)(Menu)

const LoggedInBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: MainNavigator,
    navigationOptions: ({navigation}) => ({
      title: I18n.t('sportunitiesTabMySportunities'),
      tabBarIcon: ({focused}) => <Image source={images.sportunity} style={focused ? focusedImageStyle : imageStyle}/>
    }),
  },
  circles: {
    screen: CircleNavigator,
    navigationOptions: ({navigation}) => ({
      title: I18n.t('circleTitleOthers'),
      tabBarIcon: ({focused}) => <Image source={images.circle2} style={focused ? focusedImageStyle : imageStyle}/>,
    })
  },
  Organize: {
    screen: NewActivityStack,
    navigationOptions: ({navigation}) => ({
      tabBarOnPress: (e) => navigation.navigate('new_activity'),
      title: I18n.t('sportunitiesTabOrganize'),
      tabBarIcon: ({focused}) => <Image source={images.organize} style={focused ? focusedImageStyle : imageStyle}/>
    })
  },
  Notifications: {
    screen: NotificationsPage,
    navigationOptions: ({navigation, screenProps}) => ({
      tabBarButtonComponent: (props) => (
        <MenuRedux
          description={I18n.t('notifications')}
          selected={false}
          action={(e) => screenProps.isLoggedIn && navigation.navigate('notifications')}
          iconUrl={images.bell}
          menu={false}
        />
      )
    })
  },
  Menu: {
    screen: Drawer,
    navigationOptions: ({navigation, screenProps}) => ({
      tabBarOnPress: openDrawer,
      tabBarButtonComponent: (props) => (
        <MenuRedux
          description={"Menu"}
          selected={false}
          action={openDrawer}
          iconUrl={images.menu_burger}
          menu={true}
        />
      )
    })
  }

}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.bloodOrange,
    inactiveTintColor: colors.white,
    labelStyle: {
      fontSize: 10,
    },
    allowFontScaling: false,
    style: {
      backgroundColor: colors.blue,
    },
  }
})

const UnloggedBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: MainNavigator,
    navigationOptions: ({navigation, screenProps}) => ({
      title: I18n.t('sportunitiesTabMySportunities'),
      tabBarIcon: ({focused}) => <Image source={images.sportunity} style={focused ? focusedImageStyle : imageStyle}/>
    })
  },
  circles: {
    screen: CircleNavigator,
    navigationOptions: ({navigation}) => ({
      title: I18n.t('circleTitleOthers'),
      tabBarIcon: ({focused}) => <Image source={images.circle2} style={focused ? focusedImageStyle : imageStyle}/>,
    })
  },
  Organize: {
    screen: NewActivityStack,
    navigationOptions: ({navigation}) => ({
      tabBarOnPress: (e) => navigation.navigate('new_activity'),
      title: I18n.t('sportunitiesTabOrganize'),
      tabBarIcon: ({focused}) => <Image source={images.organize} style={focused ? focusedImageStyle : imageStyle}/>
    })
  },
  Login: {
    screen: SettingsPage,
    navigationOptions: ({navigation, screenProps}) => ({
      tabBarOnPress: (e) => navigation.navigate('settings'),
      title: I18n.t('drawerLogin'),
      tabBarIcon: ({focused}) => <Image source={images.myProfile} style={focused ? focusedImageStyle : imageStyle}/>
    })
  },
  Menu: {
    screen: Drawer,
    navigationOptions: ({navigation}) => ({
      tabBarOnPress: openDrawer,
      tabBarIcon: ({focused}) => <Image source={images.menu_burger} style={focused ? focusedImageStyle : imageStyle}/>
    })
  }

}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.bloodOrange,
    inactiveTintColor: colors.white,
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: colors.blue,
    },
  }
})

class App extends Component {
  render() {
    return (
      <Drawer
       {...this.props.screenProps}
      >
        {this.props.screenProps.isLoggedIn
        ? <LoggedInBottomTabNavigator
            ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)}}
            screenProps={this.props.screenProps}
            language={this.props.screenProps.language}
          />
        : <UnloggedBottomTabNavigator
            ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)}}
            screenProps={this.props.screenProps}
            language={this.props.screenProps.language}
          />
        }
      </Drawer>
    )
  }
}

export default App ;

I18n.fallbacks = true
I18n.translations = translations;

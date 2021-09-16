import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Image } from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer, 
} from 'react-relay';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { withNavigation } from 'react-navigation';

import I18n from 'react-native-i18n'
import translations from 'sportunity/src/translations';

import { images } from 'sportunity/src/theme';
import DrawerButton from '../../Button/DrawerButton';
import DrawerHeader from './header'
import DrawerChatContainer from './chat/DrawerChatContainer';
import DrawerNotificationContainer from './notification/DrawerNotificationContainer';
import DrawerTeamContainer from './teams/DrawerTeamsContainer';
import DrawerWalletContainer from './wallet/DrawerWalletContainer'
import ChooseLanguage from './ChooseLanguage.js';
import styles from './style';
import DeviceInfo from 'react-native-device-info';
import { updateProfileCounter } from 'sportunity/src/action/profileActions';
import { dispatchToActions } from '../../../action/utils';


import environment from 'sportunity/src/createRelayEnvironment';
import { type, DrawerContent_query } from './__generated__/DrawerContent_query.graphql';


const resetCounts = (updateProfileCounter) =>
  setTimeout(() =>
    updateProfileCounter({
      unreadChats: 0,
      unreadAllChats: 0,
      unreadNotifications: 0,
      unreadAllNotifications: 0,
    })
  , 0)

class DrawerContent extends Component {
  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }
  
  constructor() {
    super()
  }

  switchSceneWithChecks = scene => {
    if (this.props.query && this.props.query.viewer && this.props.query.viewer.me && this.props.query.viewer.me.mangoId)
      this.props.switchScene(scene)
    else {
      Toast.show(I18n.t('accountCompleteYourInformation'))
      setTimeout(() => this.props.switchScene('paymentInformation', {onSaveAccount: () => this.props.switchScene(scene)}), 500) ;
    }
  }

  render() {
    const {
      switchScene,
      isLoggedIn,
      logoutUser,
      isDrawerOpen,
      onCloseDrawer,
      updateToken,
      updateSuperToken,
      unreadTotal,
      token,
      updateProfileCounter,
    } = this.props; 
    const {viewer} = this.props.query; 
  
    return (
      <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
        <View style={styles.topContent}>
          {isLoggedIn 
          ? <DrawerHeader
              updateToken={updateToken}
              updateSuperToken={updateSuperToken}
              isDrawerOpen={isDrawerOpen}
              onCloseDrawer={onCloseDrawer}
              viewer={viewer}
              me={viewer.me}
            />
          : <View style={styles.centeredContainer}>
              <Image source={images.logo} style={styles.logo} />
            </View>
          }
          
          {
            isLoggedIn ?
              <DrawerButton
                text={I18n.t('drawerMyProfile')}
                onPress={() => switchScene('meProfile')}
                icon={images.myProfile}
              />
              : null
          }
          { isLoggedIn &&
            <DrawerTeamContainer
              text={I18n.t('drawerMyTeams')}
              onCreateNewSubAccount={() => switchScene('createProfile')}
              updateToken={updateToken}
              isDrawerOpen={isDrawerOpen}
              onCloseDrawer={onCloseDrawer}
              viewer={viewer}
              me={viewer.me}
            />
          }
          {isLoggedIn 
          ? <DrawerButton text={I18n.t('drawerStatistics')} onPress={() => switchScene('meStats')} icon={images.stats}/>
          : null
          }
          {isLoggedIn 
          ? <DrawerButton text={I18n.t('drawerHistory')} onPress={() => switchScene('meHistory')} icon={images.calendarCheck}/>
          : null
          }
          {isLoggedIn 
          ? <DrawerWalletContainer 
              onPress={() => this.switchSceneWithChecks('myWallet')} 
              text={I18n.t('accountWallet')}
              me={viewer.me}
            />
          : null
          }
          {isLoggedIn && viewer && viewer.me && viewer.me.profileType === 'PERSON' && 
            <DrawerButton 
              text={I18n.t('accountSharedInformation')} 
              onPress={() => this.switchSceneWithChecks('sharedInformation')} 
              icon={images.circle_forms}
              overlay={viewer.me.numberOfFormsToFill > 0 && 
                <View style={styles.totalBadgeContainer}>
                    <Text style={styles.badge}>
                      {viewer.me.numberOfFormsToFill}
                    </Text>
                </View>
              }
            />
          }
          {isLoggedIn && viewer && viewer.me && viewer.me.profileType === 'PERSON' && 
            <DrawerButton 
              text={I18n.t('accountMembershipFees')} 
              onPress={() => this.switchSceneWithChecks('circleMembershipFees')} 
              icon={images.circle_fees}
              overlay={viewer.me.numberOfPaymentModelsToPay > 0 &&
                <View style={styles.totalBadgeContainer}>
                    <Text style={styles.badge}>
                      {viewer.me.numberOfPaymentModelsToPay}
                    </Text>
                </View>
              }
            />
          }
          
          {isLoggedIn 
          ? <DrawerButton text={I18n.t('drawerSettings')} onPress={() => switchScene('myAccount')} icon={images.settings}/>
          : null
          }

          {isLoggedIn && token &&
            <DrawerChatContainer
              text={I18n.t('drawerChats')}
              onPress={() => switchScene('chat')}
              isDrawerOpen={isDrawerOpen}
              token={token}
              viewer={viewer}
              user={viewer.me}
            />
          }
          {isLoggedIn && token &&
            <DrawerNotificationContainer
              text={I18n.t('drawerNotifications')}
              onPress={() => switchScene('notifications')}
              isDrawerOpen={isDrawerOpen}
              token={token}
              viewer={viewer}
              user={viewer.me}
            />
          }
          {!isLoggedIn 
          ? <DrawerButton 
              text={I18n.t('drawerLogin')} 
              onPress={() => switchScene('settings')}
            />
          : null
          }

          {!isLoggedIn 
          ? <DrawerButton 
              text={I18n.t('drawerRegister')} 
              onPress={() => switchScene('createProfile')} 
            />
          : null
          }

          {isLoggedIn 
          ? <DrawerButton 
              icon={images.logout} 
              text={I18n.t('drawerLogout')} onPress={(e) => {
                resetCounts(updateProfileCounter);
                logoutUser(e);
              }} 
            />
          : null
          }
        </View>

        <View style={styles.bottomContent}>
          <ChooseLanguage viewer={viewer} switchScene={switchScene} updateLanguage={this.props.updateLanguage}/>

          <Text style={styles.version}>
            V {DeviceInfo.getVersion()}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

DrawerContent.propTypes = {
  switchScene: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  updateProfileCounter: PropTypes.func.isRequired,
};


const stateToProps = ({
  sportunityLocale: { language },
}) => ({
  language,
});

const actions = {
  updateProfileCounter,
}

const ReduxContainer = connect(stateToProps, dispatchToActions(actions))(DrawerContent);

const DrawerContentT = createRefetchContainer(ReduxContainer,
  graphql`
    fragment DrawerContent_query on Query {
      viewer {
        me {
          id
          mangoId
          profileType
          isProfileComplete
          birthday
          numberOfFormsToFill
          numberOfPaymentModelsToPay
          ...DrawerWalletContainer_me
          ...DrawerTeamsContainer_me
          ...DrawerNotificationContainer_user
          ...DrawerChatContainer_user
          ...header_me
        }
        ...DrawerTeamsContainer_viewer
        ...DrawerNotificationContainer_viewer
        ...DrawerChatContainer_viewer
        ...header_viewer
      }
    }
  `,
  graphql`
    query DrawerContentRefetchQuery {
      ...DrawerContent_query
    }
  `
);

export default class extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query DrawerContentQuery {
            ...DrawerContent_query
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <DrawerContentT query={props} {...this.props}/>;
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

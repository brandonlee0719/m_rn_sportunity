import React, {Component} from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import PropTypes from 'prop-types';
import { ScrollView, View, Alert, Dimensions, TouchableOpacity, Image, Text, Platform, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';

import translations from 'sportunity/src/translations.js';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import icons from '../../../../src/theme/images';
import {colors, metrics} from '../../../../src/theme';
// import MeSport from 'sportunity/src/presentational/page/SportPage/SportPage.js';
import SportunityListView from '../SportunityPage/SportunityListView';
import UpdateCalendarMutation from './UpdateCalendarMutation';
import styles from './style';
import Subheader from './Subheader.js';
import Age from './Age.js';
import City from './City.js';
import Pseudo from './Pseudo.js'
import Description from './Description.js';
import Languages from './Languages.js';
import SportsList from './SportsList.js';
import FeedbacksList from './FeedbacksList';
import Block from './Block.js';
import Report from './Report.js';
import Sex from './Sex.js';
import StatisticTab from './StatisticsTab/index.js'

class ProfilePage extends Component {

  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  state = {
    tab: 1,
    isEditingField: false,
    isLoadingSportunities: false,
    isLoadingStats: false
  }

  componentDidMount = () => {
    if(this.props.viewer.me) {
      if (this.props.navigation && this.props.navigation.state && this.props.navigation.state.routeName === 'meStats') {
        this.switchToTab(2)
      }
      else if (this.props.navigation && this.props.navigation.state && this.props.navigation.state.routeName === 'meHistory') {
        this.switchToTab(3);
      }
      else 
        return false;
    } else {
      Alert.alert(
        I18n.t('info'),
        I18n.t('profileLoginAlert'),
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate('settings')},
        ],
        { cancelable: false }
      )
    }
    
  }

  handleScrollLoad = () => {
    this.props.relay.refetch(
      this.context.relay.variables,
      null,
      () => this.setState({isLoadingMore: false}),
      {force: false}
    );
  }

  loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      ...this.context.relay.variables,
      count: this.context.relay.variables.count + 10,
    });
    
    this.props.relay.refetch(
      refetchVariables,
      null,
      () => this.setState({isLoadingMore: false}),
      {force: false}
    );
  }

  toggleEditField = () => {
    this.setState({
      isEditingField: !this.state.isEditingField
    })
  }

  switchToTab = (num) => {
    if (num === 3 && !this.context.relay.variables.querySportunities) {
      this.setState({isLoadingSportunities: true})
      
      const refetchVariables = fragmentVariables => ({
        ...this.context.relay.variables,
        userId: this.props.viewer.me.id,
        querySportunities: true
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null,
        () => this.setState({isLoadingSportunities: false}),
        {force: false}
      );
    }

    if (num === 2 && !this.context.relay.variables.queryStats) {
      this.setState({isLoadingStats: true})
      const refetchVariables = fragmentVariables => ({
        ...this.context.relay.variables,
        userId: this.props.viewer.me.id,
        queryStats: true
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null,
        () => this.setState({isLoadingStats: false}),
        {force: false}
      );
    }

    this.setState({
      tab: num,
    })
  };

  addToMyCalendar = () => {
    if(!this.props.viewer.me) {
      Toast.show(I18n.t('sportunityToastLoginCalendar'));
      return ;
    }
    let calendar = this.props.viewer.me.calendar
      ? {
        sportunities: this.props.viewer.me.calendar.sportunities && this.props.viewer.me.calendar.sportunities.edges && this.props.viewer.me.calendar.sportunities.edges.length > 0
          ? this.props.viewer.me.calendar.sportunities.edges.map(sportunity => sportunity.node.id)
          : [],
        users: this.props.viewer.me.calendar.users && this.props.viewer.me.calendar.users.length > 0
          ? this.props.viewer.me.calendar.users.map(user => user.id)
          : []
      }
      : {
        sportunities:[],
        users:[]
      } ;
    calendar.users.push(this.props.viewer.me.id);

    UpdateCalendarMutation.commit({
      userID: this.props.viewer.me.id,
      user: {
        calendar
      },
    },
    () => {
      Toast.show(I18n.t('sportunityCalendarUpdated'));
    },
    error => {
      console.log(error);
    });
  }

  removeFromMyCalendar = () => {
    if(!this.props.viewer.me) {
      Toast.show(I18n.t('sportunityToastLoginCalendar'));
      return ;
    }
    let calendar = this.props.viewer.me.calendar
      ? {
        sportunities: this.props.viewer.me.calendar.sportunities && this.props.viewer.me.calendar.sportunities.edges && this.props.viewer.me.calendar.sportunities.edges.length > 0
          ? this.props.viewer.me.calendar.sportunities.edges.map(sportunity => sportunity.node.id)
          : [],
        users: this.props.viewer.me.calendar.users && this.props.viewer.me.calendar.users.length > 0
          ? this.props.viewer.me.calendar.users.map(user => user.id)
          : []
      }
      : {
        sportunities:[],
        users:[]
      } ;

    let userIndex = calendar.users.findIndex(user => {
      return (user.id === this.props.viewer.me.id)
    })

    calendar.users.splice(userIndex, 1);

    UpdateCalendarMutation.commit({
      userID: this.props.viewer.me.id,
      user: {
        calendar
      },
    },
    () => {
      Toast.show(I18n.t('sportunityCalendarUpdated'));
    },
    error => {
      console.log(error);
    });
  }

  getMenuOptions = () => {
    let menuOptions = [] ;

    if (this.props.viewer.me) {
      let calendar = this.props.viewer.me.calendar ;
      let isAlreadyAdded = false ;
      if (!!calendar && calendar.users && calendar.users.length > 0) {
        calendar.users.forEach(user => {
          if (user.id === this.props.viewer.me.id)
            isAlreadyAdded = true ;
        })
      }
      if (!isAlreadyAdded)
        menuOptions.push({
          value: "addToCalendar",
          text: I18n.t('sportunityCalendarAddToCalendar')
        });
      else
        menuOptions.push({
          value: "removeFromCalendar",
          text: I18n.t('sportunityCalendarRemoveFromCalendar')
        });
    }
    return menuOptions;
  }

  renderTopMenu = () => {
    let menuOptions = this.getMenuOptions();
    return (
      <View style={ Platform.OS === 'android' ? styles.navBarContainerAndroid : styles.navBarContainerIOS }>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.navBarReturnButton}
        >
          <Image
            source={icons.right_arrow}
            style={styles.navBarReturnButtonIcon}
          />
        </TouchableOpacity>
        <Text style={ styles.navBarTitle }>{this.props.viewer.me.pseudo}</Text>
        {!!menuOptions && menuOptions.length > 0
          ? <Menu onSelect={(value) => {
                if (value === "addToCalendar")
                  this.addToMyCalendar();
                else if (value === "removeFromCalendar")
                  this.removeFromMyCalendar();
              }}>
              <MenuTrigger>
                <Text style={ styles.navOptionsButton }>   &#8942;   </Text>
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={{marginTop:50, alignSelf: 'flex-end', marginRight: 0, right: 0}}>
                {menuOptions.map((option, index) => (
                  <MenuOption key={index} value={option.value}>
                    <Text>{option.text}</Text>
                  </MenuOption>
                ))}
              </MenuOptions>
            </Menu>
          : <Text>   </Text>
        }
      </View>
    );
  }

  render(){

    const { viewer } = this.props;
    const { height } = Dimensions.get('window');

    return(
      <MenuContext>
        {this.renderTopMenu()}

        <View style={styles.container}>
          {!this.state.isEditingField && 
            <Subheader
              viewer={viewer}
              avatar={viewer.me.avatar}
              sportunityNumber={viewer.me.sportunityNumber}
              switchToTab={this.switchToTab}
              tab={this.state.tab}
              count={this.context.relay.variables.count}
              followers={viewer.me.followers}
              meId={viewer.me && viewer.me.id}
              navigation={this.props.navigation}
            />
          }
        {

          this.state.tab === 1 &&
          <View style={{'height': this.state.isEditingField ? height - 64 : height / 1.5, backgroundColor: colors.snow }}>
            <KeyboardAvoidingView 
                behavior={'position'} 
                contentContainerStyle={{flex: 1}}
                style={{flex: 1}}
                keyboardVerticalOffset={Platform.OS === 'ios' ? -200 : -240}
                >
              <ScrollView
                contentContainerStyle={{paddingBottom: 50, backgroundColor: colors.snow}}
                >

                  <Pseudo
                    pseudo={viewer.me.pseudo}
                    userId={viewer.me.id}
                    viewer={viewer}
                    toggleEditField={this.toggleEditField}
                  />
                  <View style={styles.divider} />
                  <Description
                    description={viewer.me.description}
                    userId={viewer.me.id}
                    viewer={viewer}
                    toggleEditField={this.toggleEditField}
                  />
                  <View style={styles.divider} />
                  <City
                    publicAddress={viewer.me.publicAddress ? viewer.me.publicAddress.city + ', ' + viewer.me.publicAddress.country : null}
                    viewer={viewer}
                    toggleEditField={this.toggleEditField}
                  />
                  <View style={styles.divider} />
                  <Age
                    birthday={viewer.me.birthday}
                    viewer={viewer}
                    hideMyAge={viewer.me.hideMyAge}
                  />
                  <View style={styles.divider} />
                  <Sex
                    sex={viewer.me.sex}
                    viewer={viewer}
                    />
                  <View style={styles.divider} />
                  <Languages
                    languages={viewer.me.languages}
                    viewer={viewer}
                    navigation={this.props.navigation}
                    language={this.props.screenProps.language}
                  />
                  <View style={styles.divider} />
                  <SportsList
                    sports={viewer.me.sports}
                    viewer={viewer}
                    navigation={this.props.navigation}
                  />
                  <View style={styles.divider} />
                  <FeedbacksList
                    feedbacks={viewer.me.feedbacks}
                    viewer={viewer}
                  />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        }
        {
          this.state.tab === 2 &&
            <View style={{ 'height': height / 1.5 }}>
            {this.state.isLoadingStats
              ? <View style={styles.loadingContainer}>
                  <ActivityIndicator
                    animating={true}
                    size="large"
                    color={colors.blue}
                  />
                </View>
              : 
              <View style={{ flex: 1 }}>
                <StatisticTab
                  viewer={viewer}
                  user={viewer.me}
                  navigation={this.props.navigation}
                  userID={viewer.me.id}
                />
              </View>
            }
            </View>
        }

        {
          this.state.tab === 3 &&
            <View style={{ 'height': height / 1.5, paddingBottom: Platform.OS === 'android' ? 0 : 25 }}>
              {this.state.isLoadingSportunities
              ? <View style={styles.loadingContainer}>
                  <ActivityIndicator
                    animating={true}
                    size="large"
                    color={colors.blue}
                  />
              </View>
              : <SportunityListView
                  sportunities={viewer.sportunities || null}
                  handleScrollLoad={this.handleScrollLoad}
                  loadMore={this.loadMore}
                  count={this.context.relay.variables.count}
                  viewer={viewer}
                  user={viewer.me}
                  navigation={this.props.navigation}
                />
              }
          </View>
        }

      </View>

      </MenuContext>
    )
  }
}

const ProfilePageTemp = createRefetchContainer(withNavigation(ProfilePage), {
  viewer: graphql`
    fragment ProfilePage_viewer on Viewer @argumentDefinitions (
      count: {type: "Int"}, 
      userId: {type: "String!", defaultValue: "_"}, 
      querySportunities: {type: "Boolean!", defaultValue: false},
      queryStats: {type: "Boolean!", defaultValue: false},
      sportunityFilter: {type: "Filter"}
    ){
      id,
      ...SportunityListView_viewer
      ...StatisticsTab_viewer
      ...Pseudo_viewer
      sportunities (first: $count, filter:$sportunityFilter, userId: $userId, orderBy: BEGINNING_DATE_DESC) @include(if: $querySportunities){
        ...SportunityListView_sportunities
      }
      me {
        ...StatisticsTab_user @arguments(queryStats: $queryStats)
        ...SportunityListView_user
        id,
        pseudo,
        avatar,
        description,
        birthday,
        hideMyAge,
        sex,
        publicAddress {
          city,
          country
        }
        languages {
          ...Languages_languages,
        },
        sports {
          ...SportsList_sports,
        },
        feedbacks{
          ...FeedbacksList_feedbacks,
        }
        sportunityNumber
        followers{
          id
        }
        calendar {
          users {
            id
          }
          sportunities (last:1000) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `},
  graphql`
    query ProfilePageRefetchQuery (
      $count: Int, 
      $userId: String!, 
      $querySportunities: Boolean!, 
      $queryStats: Boolean!,
      $sportunityFilter: Filter
    ){
      viewer {
        ...ProfilePage_viewer @arguments (
          count: $count, 
          userId: $userId,
          querySportunities: $querySportunities, 
          queryStats: $queryStats, 
          sportunityFilter: $sportunityFilter
        )
      }
    }
  `
);

export const MeProfile = class extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ProfilePageQuery (
            $count: Int, 
            $userId: String!, 
            $querySportunities: Boolean!, 
            $queryStats: Boolean!,
            $sportunityFilter: Filter
          ) {
            viewer {
              ...ProfilePage_viewer @arguments (
                count: $count, 
                userId: $userId, 
                querySportunities: $querySportunities, 
                queryStats: $queryStats,
                sportunityFilter: $sportunityFilter
                )
            }
          }
        `}
        variables={{
          count: 10,
          userId: "_",
          querySportunities: false,
          queryStats: false, 
          sportunityFilter: {
            statuses: ["Past"]
          }
        }}
        render={({error, props}) => {
          if (props) {
            return <ProfilePageTemp viewer={props.viewer} query={props} {...this.props}/>;
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

import React, {Component} from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import PropTypes from 'prop-types';
import { ScrollView, View, Alert, Dimensions, TouchableOpacity, Image, Text, Platform, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Toast from 'react-native-simple-toast';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import {
    createRefetchContainer,
    graphql,
    QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';

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

class OtherProfilePage extends PureComponent {
    static contextTypes = {
        relay: PropTypes.shape({
          variables: PropTypes.object,
        }),
    }
    
      state = {
        tab: 1,
        isFollowing: false,
        isLoadingSportunities: false,
        isLoadingStats: false
      }
    
      componentDidMount = () => {
        const { viewer } = this.props;
       
        if(this.props.viewer.me) {
            viewer.user && viewer.user.followers && this.checkIfUserIsFollower(viewer.user.followers, viewer.me.id)
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
    
      switchToTab = (num) => {
        if (num === 3 && !this.context.relay.variables.querySportunities) {
            this.setState({isLoadingSportunities: true})

          const refetchVariables = fragmentVariables => ({
              ...this.context.relay.variables,
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
            userId: this.props.viewer.user.id,
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
    
      checkIfUserIsFollower = (followers, meId) => {
        followers.forEach(follower => {
          if(follower.id === meId) {
             this.setState({ isFollowing: true });
             return false;
          } else {
            this.setState({ isFollowing: false });
            return false;
          }
        });
      }
    
      updateFollowStatus = (bool) => {
        this.setState({
          isFollowing: bool,
        });
      }
    
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
        calendar.users.push(this.props.viewer.user.id);
    
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
          return (user.id === this.props.viewer.user.id)
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
              if (user.id === this.props.viewer.user.id)
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
            <Text style={ styles.navBarTitle }>{!!this.props.viewer.user ? this.props.viewer.user.pseudo : ""}</Text>
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
                    <MenuOptions optionsContainerStyle={{marginTop:50, alignSelf: 'flex-end', marginRight: 0}}>
                    {this.getMenuOptions().map((option, index) => (
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
    
        if (!viewer.user)
          return <View></View>
        else
          return(
            <MenuContext>
              {this.renderTopMenu()}
    
              <View style={styles.container}>
                <Subheader
                  viewer={viewer}
                  avatar={viewer.user.avatar}
                  sportunityNumber={viewer.user.sportunityNumber}
                  switchToTab={this.switchToTab}
                  tab={this.state.tab}
                  count={this.context.relay.variables.count}
                  userId={viewer.user.id}
                  meId={viewer.me.id}
                  followers={viewer.user.followers}
                  meBlackList={viewer.me.blackList}
                  otherBlackList={viewer.user.blackList}
                  updateFollowStatus={this.updateFollowStatus}
                  isFollowing={this.state.isFollowing}
                  navigation={this.props.navigation}
                />
                {
                  this.state.tab === 1 &&
                    <ScrollView style={Platform.OS === 'ios' ? {marginBottom: 125} : {marginBottom: 100}}>
                      <Description
                        description={viewer.user.description}
                        viewer={viewer}
                      />
                      {
                        viewer.user.publicAddress &&
                        <City
                          publicAddress={viewer.user.publicAddress.city + ', ' + viewer.user.publicAddress.country}
                          viewer={viewer}
                        />
                      }
                      {viewer.user.birthday && viewer.user.profileType !== 'ORGANIZATION' &&
                        <Age
                          birthday={viewer.user.birthday}
                          viewer={viewer}
                          hideMyAge={null}
                        />
                      }
                      {viewer.user.profileType !== 'ORGANIZATION' &&
                        <Sex
                          sex={viewer.user.sex}
                          viewer={viewer}
                          />
                      }
                      <Languages
                        languages={viewer.user.languages}
                        viewer={viewer}
                        navigation={this.props.navigation}
                      />
                      <SportsList
                        sports={viewer.user.sports}
                        userId={viewer.user.id}
                        viewer={viewer}
                        navigation={this.props.navigation}
                      />
    
                      {/* <CircleList
                        circles={viewer.me.circles}
                        viewer={viewer}
                        userId={viewer.user.id}
                        navigation={this.props.navigation}
                      /> */}
    
                      <FeedbacksList
                        feedbacks={viewer.user.feedbacks}
                        viewer={viewer}
                      />
    
                      {
                        viewer.me && viewer.me.id &&
                          <Block
                            viewer={viewer}
                            userId={viewer.user.id}
                            meId={viewer.me && viewer.me.id}
                            blackList={viewer.me.blackList}
                          />
                      }
                      {
                      viewer.me && viewer.me.id &&
                        <Report
                          viewer={viewer}
                          reporters={viewer.user.reporters}
                        />
                      }
                    </ScrollView>
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
                    : <View style={{ flex: 1 }}>
                        <StatisticTab
                          viewer={viewer}
                          user={viewer.user}
                          userID={viewer.user.id}
                          navigation={this.props.navigation}
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
                          user={viewer.user}
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

const OtherProfilePageTemp = createRefetchContainer(withNavigation(OtherProfilePage), {
    viewer: graphql`
        fragment OtherProfilePage_viewer on Viewer  @argumentDefinitions (
            count: {type: "Int"}, 
            userId: {type: "String!", defaultValue: "_"}, 
            querySportunities: {type: "Boolean!", defaultValue: false},
            queryStats: {type: "Boolean!", defaultValue: false},
            sportunityFilter: {type: "Filter"}
        ){
            id,
            ...SportunityListView_viewer
            ...StatisticsTab_viewer
            me {
                id,
                blackList {
                id,
                },
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
            },
            sportunities (first: $count, filter:$sportunityFilter, userId: $userId) @include(if: $querySportunities){
                ...SportunityListView_sportunities
            }
            user(id: $userId) {
                ...StatisticsTab_user @arguments(queryStats: $queryStats)
                ...SportunityListView_user
                id,
                pseudo,
                avatar,
                description,
                profileType
                birthday,
                sex,
                blackList {
                    id
                }
                publicAddress {
                    city,
                    country
                }
                reporters {
                    ...Report_reporters,
                },
                sportunityNumber
                languages {
                    ...Languages_languages,
                },
                sports {
                    ...SportsList_sports,
                },
                feedbacks{
                    ...FeedbacksList_feedbacks,
                },
                followers {
                    id
                }
            }
        }
    `},
    graphql`
      query OtherProfilePageRefetchQuery (
        $count: Int, 
        $userId: String!, 
        $querySportunities: Boolean!, 
        $queryStats: Boolean!,
        $sportunityFilter: Filter
      ){
        viewer {
          ...OtherProfilePage_viewer @arguments (
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


export const OtherProfile = class extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        let userId = this.props.navigation.getParam('userId', null)
      return (
        <QueryRenderer
          environment={environment}
          query={graphql`
            query OtherProfilePageQuery (
              $count: Int, 
              $userId: String!, 
              $querySportunities: Boolean!, 
              $queryStats: Boolean!,
              $sportunityFilter: Filter
            ) {
              viewer {
                ...OtherProfilePage_viewer @arguments (
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
                userId,
                querySportunities: false,
                queryStats: false,
                sportunityFilter: {
                    status: "MySportunities"
                }
            }}
          render={({error, props}) => {
            if (props) {
              return <OtherProfilePageTemp viewer={props.viewer} query={props} {...this.props}/>;
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
  
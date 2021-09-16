import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import {
  View,
  ScrollView,
  RefreshControl,
  AsyncStorage,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert
} from 'react-native';
import Text from 'react-native-text';
import Share from 'react-native-share';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Toast from 'react-native-simple-toast';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');
import cloneDeep from 'lodash/cloneDeep';

// import SportunitySummary from '../../../../../src/customPropType/SportunitySummary';
import SportunityItem from './SportunityItem';
import SpinnerOverlay from '../../../SpinnerOverlay';
import Button from '../../../Button/roundedButton';
import translations from 'sportunity/src/translations.js';
import displayKinds from '../../../../enums/sportunityFilterKinds';
import { updateStatusSportunity } from '../../../../action/sportunityAction';
import { clearFilters } from 'sportunity/src/action/FiltersStateActions.js'
import { updateUserLocation } from 'sportunity/src/action/localeActions.js';
import { updateStepsCompleted } from 'sportunity/src/action/profileActions';
import { colors, images } from '../../../../theme';
import { styles, googleSearchStyles } from './style';
import { webAppUrl } from 'sportunity/conf/constants.json';
import { getActivityStatusAndColor, getStatus } from '../util';
import AskUserLocation from '../../../AskUserLocation'

import UpdateSportunityMutation from '../../EventDetailPage/mutation/UpdateSportunity.js'
import CancelBookingMutation from '../../EventDetailPage/mutation/CancelBooking.js';

const SCREEN_WIDTH = Dimensions.get('window').width;
const AnimatedListView = Animated.createAnimatedComponent(ScrollView);

class SportunitiesListView extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      isRefreshing: false,
      loading: {},
      askAddressTopHeight: new Animated.Value(),
      askAddressTopMaxHeight: 0
    };
  }

  onRefresh = () => {
    this.props.handleScrollLoad();
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 2000);
  }

  switchPage = (event, status, color) => {
    this.props.updateStatusSportunity(status, color);

    const {navigation} = this.props;
    navigation.navigate('eventdetail', { id: event.id })
  }

  changeFilters = () => {
    if (this.props.user) {
      this.props.navigation.navigate('filters', {activeKind: 'Explore'})
    }
    else {
      AsyncStorage.removeItem('userLocation')
      this.props.onDisplayAskUserLocation();
    }
  }

  handleTryAnotherLocation = () => {
    const { onApplyFilter, filterState, updateUserLocation } = this.props;
    updateUserLocation(null);
    onApplyFilter({
      id: filterState.appliedFilterId,
      filterName: filterState.appliedFilterName,
      statuses: filterState.filters.selectedStatus,
      subAccounts: filterState.filters.subAccounts,
      users: filterState.filters.users,
      sportunityTypes: filterState.filters.sportunityTypes,
      page: 'ORGANIZED'
    });
  }

  getEmptyExploreList = () => {

    return (
      <View style={styles.emptyMySportunitiesContainer}>
          <Text style={styles.emptyListTextHeader}>{I18n.t('sportunitiesEmptyExplore1')}</Text>
          <Text style={styles.emptyMySportunitiesListTextSubHeader}>{I18n.t('sportunitiesEmptyExplore1Clubs')}</Text>
          {this.props.user && <TouchableOpacity onPress={() => this.props.clearFilters()}><Text style={styles.emptyListText}>{I18n.t('sportunitiesEmptyExplore2')}</Text></TouchableOpacity>}
          <TouchableOpacity onPress={this.changeFilters}><Text style={styles.emptyListText}>{I18n.t('sportunitiesEmptyExplore3')}</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('new_activity')}><Text style={styles.emptyListText}>{I18n.t('sportunitiesEmptyExplore4')}</Text></TouchableOpacity>
      </View>
    )
  }

  getLinkWithIcon = (icon, linkText, onLinkPress) => (
    <TouchableOpacity
      onPress={onLinkPress}
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Image source={icon} style={{
        height: 16,
        width: 16,
        marginRight: 5,
        tintColor: colors.blue,
      }} />
      <Text style={styles.emptyMySportunitiesListText}>
        {linkText}
      </Text>
    </TouchableOpacity>
  )

  getEmptyMySportunitiesList = (isLocationAvailable) => {
    const {isFilterActive, viewer, user} = this.props ;
    let youtubeLinkClubs = 'https://youtu.be/oGvu0NMEZpc';
    let youtubeLinkFriends = 'https://www.youtube.com/watch?v=2ZVQNZMP16E&t=39s';
    let androidLink = 'http://bit.ly/2gx3Lzq';
    let iosLink = 'http://apple.co/2yDGEtz';

    let shareOptionsFriends = {
      title: I18n.t('shareApplicationFriendsTitle'),
      message: I18n.t('shareApplicationFriends')+ ': ' + youtubeLinkFriends +'\r\n'
              + 'iOS: ' + iosLink + '\r\n'
              + 'Android: ' + androidLink,
      url: webAppUrl,
      subject: I18n.t('shareApplicationFriendsTitle')
    };

    let shareOptionsClubs = {
      title: I18n.t('shareApplicationClubsTitle'),
      message: I18n.t('shareApplicationClubs')+ ': ' + youtubeLinkClubs + '\r\n'
              + 'iOS: ' + iosLink + '\r\n'
              + 'Android: ' + androidLink,
      url: webAppUrl,
      subject: I18n.t('shareApplicationClubsTitle')
    };

    return (
      <View style={styles.emptyMySportunitiesContainer}>
          <View style={styles.emptyMySportunitiesImageContainer}>
            <Image source={images.error_black} style={styles.emptyMySportunitiesImage} />
          </View>
          {isLocationAvailable && <Text style={styles.emptyMySportunitiesListTextHeader}>{I18n.t('sportunitiesEmptyMySportunities14')}</Text>}
          {user
            ? !isLocationAvailable && <Text style={styles.emptyMySportunitiesListTextHeader}>{I18n.t('sportunitiesEmptyMySportunities15')}</Text>
            : <Text style={styles.emptyMySportunitiesListTextHeader}>{I18n.t('sportunitiesEmptyMySportunities10')}</Text>
          }
          {/* {user && isFilterActive && <TouchableOpacity onPress={() => this.props.clearFilters()}><Text style={styles.emptyMySportunitiesListText}>{I18n.t('sportunitiesEmptyMySportunities4')}</Text></TouchableOpacity>} */}
          {this.getLinkWithIcon(
            images.sportunity_group,
            (user && user.profileType === 'PERSON') || (!user) ?
              I18n.t('sportunitiesEmptyMySportunities11') :
              I18n.t('sportunitiesEmptyMySportunities9'),
            () => this.props.navigation.navigate('circles'),
          )}
          {this.getLinkWithIcon(images.filter, I18n.t('sportunitiesEmptyMySportunities12'), () => user ?this.props.navigation.navigate('filters') : this.props.applyDefaultFilter())}
          {this.getLinkWithIcon(images.add_circle, I18n.t('sportunitiesEmptyMySportunities13'), () => this.props.navigation.navigate('new_activity'))}
          {!user && (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Button style={styles.emptyMySportunitiesButton} onPress={() => this.props.navigation.navigate('createProfile')}>
                {I18n.t('register')}
              </Button>
              <Button style={styles.emptyMySportunitiesButton} onPress={() => this.props.navigation.navigate('settings')}>
                {I18n.t('login')}
              </Button>
            </View>
          )}
          {isLocationAvailable && (
            <TouchableOpacity onPress={this.handleTryAnotherLocation}>
              <Text style={styles.emptyMySportunitiesLink}>{I18n.t('sportunitiesEmptyMySportunities16')}</Text>
            </TouchableOpacity>
          )}
      </View>
    )
  }

  onBlurOrFocus = () => {
    if (this.state.askAddressTopHeight._value === 0)
      Animated.timing(this.state.askAddressTopHeight, {
        toValue: this.state.askAddressTopMaxHeight,
        duration: 200
      }).start()
    else
      Animated.timing(this.state.askAddressTopHeight, {
        toValue: 0,
        duration: 100
      }).start()
  }

  getEmptyListMessage() {
    const { displayAskUserLocation, filterState, selectedKind } = this.props;
    if (displayAskUserLocation)
      return (
        <AskUserLocation
          updateLocation={this.props.setDefaultAddress}
          label={I18n.t('sportunitiesAddLocationTitle')}
        />
      )

    const isLocationFilterApplied = filterState.appliedFilterName === I18n.t('myEvents_defaultFilters_aroundMe');
    const isLocationAvailable = isLocationFilterApplied && filterState.filters.location && filterState.filters.location.lat;

    switch(selectedKind) {
      case displayKinds.normal:
        return this.getEmptyExploreList()
      case displayKinds.organized:
        return this.getEmptyMySportunitiesList(isLocationAvailable);
      default:
        return <Text style={styles.emptyListText}>{I18n.t('sportunitiesEmptyDefault')}</Text>;
    }
  }

  changeLoadingState = (sportunityId, message) => {
    this.setState(prevState => ({
      loading: {
        ...prevState.loading,
        [sportunityId]: message,
      },
    }));
  }

  updateTutorialSteps = () => {
    const { tutorialSteps, updateStepsCompleted } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);

    newTutorialSteps['giveAvailabilitiesStep'] = true;
    updateStepsCompleted(newTutorialSteps);
  }

  bookingCommit = (sportunity) => {
    this.changeLoadingState(sportunity.id, I18n.t('sportunityToastBookDoing'));
    const { user } = this.props;

    const wasInvited = !!sportunity.invited.find(item => item && item.user && item.user.id === user.id)

    let params = {
      sportunityID: sportunity.id,
      sportunity:{
        participants: user.id,
      },
    };

    if (wasInvited) {
      params.sportunity.invited = {
        user: user.id,
        answer: "YES"
      }
    }

    UpdateSportunityMutation.commit(params,
      () => {
        Toast.show(I18n.t('sportunityToastBookSuccess'));
        this.changeLoadingState(sportunity.id, false);
        this.updateTutorialSteps();
      },
      error => {
        console.error(error.getError())
        Alert.alert(I18n.t('alert'), error.getError().source.errors[0].message);
        this.changeLoadingState(sportunity.id, false);
      },
    );
  }

  cancelBookingCommit = (sportunity) => {
    this.changeLoadingState(sportunity.id, I18n.t('sportunityToastCancelDoing'));
    const { user } = this.props;
    const wasInvited = !!sportunity.invited.find(item => item && item.user && item.user.id === user.id)
    let params = {
      sportunityID: sportunity.id,
      sportunity:{
        canceling: user.id,
      }
    };

    if (wasInvited) {
      params.sportunity.invited = {
        user: user.id,
        answer: "NO"
      }
    }

    CancelBookingMutation.commit(params,
      () => {
        this.changeLoadingState(sportunity.id, false);
        Toast.show(I18n.t('sportunityToastCancelSuccess'));
      },
      error => {
        this.changeLoadingState(sportunity.id, false);
        Toast.show(I18n.t('sportunityToastCancelFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  handleSwipe = (rowKey, rowMap, toValue) => {
    const { sportunities, user, language } = this.props;
    const isSwipedLeft = toValue < 0;
    const sportunityId = rowKey;
    const sportunityEdge = sportunities.edges.find(sportunity => sportunity.node.id === sportunityId);

    if (sportunityEdge === 'undefined') { return; }

    const sportunity = sportunityEdge.node;
    this.closeRow(sportunityId, rowMap);

    if (isSwipedLeft) {
      this.cancelBookingCommit(sportunity, rowMap);
    } else {
      const isPaid = sportunity.price.cents > 0;
      if (isPaid) {
        const status = getStatus({
          I18n,
          sportunity,
          language,
          userId: user.id,
          activityStatus: sportunity.status,
        });
        const { color } = getActivityStatusAndColor({ sportunity, user });
        this.closeRow(sportunityId, rowMap);
        this.switchPage(sportunity, status, color);
      } else {
        this.bookingCommit(sportunity);
      }
    }
  }

  closeRow = (sportunityId, rowMap) => {
    rowMap[sportunityId].closeRow();
  }

  getUserSpecificPrice = (user, paymentStatus, price) => {
    if (paymentStatus) {
      let index = paymentStatus.findIndex(paymentStatus => {
        return paymentStatus.status !== 'Canceled' && user && paymentStatus && paymentStatus.price && user.id === paymentStatus.user.id;
      });
      if (index >= 0)
        return paymentStatus[index].price
      else
        return price ;
    }
    else return price ;
  }

  renderSportunityItem = (sportunity, rowMap, rowData) => {
    let showTutorial = false ;

    if (this.props.showSwipeTutorial && rowData.index === 0 &&
      (sportunity.status.indexOf("Invited") >= 0 ||
        sportunity.status.indexOf("Declined") >= 0 ||
        sportunity.status.indexOf("Waiting") >= 0 ||
        sportunity.status.indexOf("Willing") >= 0 ||
        sportunity.status.indexOf("Booked") >= 0 ||
        sportunity.status.indexOf("Available") >= 0
      )
    ) {
        showTutorial = true
    }
    else if (this.props.showSwipeTutorial && rowData.index === 0)
      this.props.hideTutorial()

    const { selectedKind, viewer, user, language } = this.props;
    const {price, paymentStatus} = sportunity ;

    let userPrice = this.getUserSpecificPrice(user, paymentStatus, price)

    const isPaid = userPrice.cents > 0;
    const isBooked = sportunity.status.indexOf('Booked') >= 0;
    const isAvailable = sportunity.status.indexOf('Available') >= 0;
    const isInvited = sportunity.status.indexOf('Invited') >= 0;
    const isDeclined = sportunity.status.indexOf('Declined') >= 0;

    const bookingText = isPaid ? I18n.t('book') : I18n.t('availableShort');
    const slideThreshold = SCREEN_WIDTH * 0.46;
    const slideStopValue = slideThreshold * 1.15;

    const status = getStatus({
      I18n,
      sportunity,
      language,
      userId: user && user.id,
      activityStatus: sportunity.status,
    });
    const { color } = getActivityStatusAndColor({ sportunity, user });
    const loading = this.state.loading[sportunity.id];

    const background = (
      <View style={styles.sportunityListContainer}>
        <View style={styles.sportunityListBackgroundLeft}>
          <Image source={images.checkWhite} style={styles.sportunityListBackgroundIcon}/>
          <Text style={styles.sportunityListBackgroundText}>{bookingText}</Text>
        </View>
        <View style={styles.sportunityListBackgroundRight}>
          <Text style={styles.sportunityListBackgroundText}>{I18n.t('notAvailableShort')}</Text>
          <Image source={images.close_white} style={styles.sportunityListBackgroundIcon}/>
        </View>
      </View>
    );

    /*userPrice && (!sportunity.survey || sportunity.survey && sportunity.survey.isSurveyTransformed || sportunity.survey && !sportunity.survey.isSurveyTransformed && sportunity.survey.surveyDates.length === 0) &&
    (userPrice.cents === 0 && sportunity.status.indexOf('Invited') >= 0 => Allow book */

    // userPrice.cents === 0 && sportunity.status.indexOf('Booked') >= 0 => allow cancel

    const listItem = (
      <TouchableWithoutFeedback onPress={() => !loading && this.switchPage(sportunity, status, color)}>
        <SportunityItem
          selectedKind={selectedKind}
          sportunity={sportunity}
          onPress={loading ? () => {} : this.switchPage}
          viewer={viewer}
          language={this.props.language}
          userId={user && user.id || null}
          user={user}
          showTutorial1={showTutorial && this.props.tutorialStep === 0}
          showTutorial2={showTutorial && this.props.tutorialStep === 1}
          slideThreshold={slideThreshold}
        />
      </TouchableWithoutFeedback>
    );

    return (
      <SwipeRow
        leftOpenValue={slideThreshold}
        rightOpenValue={-slideThreshold}
        stopLeftSwipe={slideStopValue}
        stopRightSwipe={-slideStopValue}
        disableRightSwipe={!(!!user && !isPaid && (isInvited || isAvailable || isDeclined))} // BOOKING
        disableLeftSwipe={(!(!!user && (!isPaid && (isInvited || isAvailable)) || isBooked))} // CANCEL / DECLINE
      >
        {!!loading ? <View/> : background}
        {!!loading ? <SpinnerOverlay subtitle={loading}>{listItem}</SpinnerOverlay> : listItem}
      </SwipeRow>
    );
  }

  render(){
    const { sportunities, children, count, loadMore, isLoadingMore, showSwipeTutorial } = this.props;

    return (
      <View style={styles.container}>
        { children }
        <AnimatedListView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
          refreshControl={ <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            tintColor={colors.blue}
            title="Loading..."
            titleColor={colors.blue}
            colors={['#ff0000', colors.skyBlue, colors.darkBlue]}
            progressBackgroundColor={colors.darkBlue} />
          }
          onScroll={this.props.onScroll}
          onMomentumScrollBegin={this.props.onMomentumScrollBegin}
          onMomentumScrollEnd={this.props.onMomentumScrollEnd}
          onScrollEndDrag={this.props.onScrollEndDrag}
          scrollEventThrottle={1}
        >
          { sportunities && sportunities.edges.length > 0 ?
              <SwipeListView
                useFlatList
                keyExtractor={item => item.node.id}
                data={sportunities.edges}
                renderItem={(rowData, rowMap) => this.renderSportunityItem(rowData.item.node, rowMap, rowData)}
                onRowDidOpen={this.handleSwipe}
              />
              :
                <View style={styles.emptyListTextContainer}>
                  {this.getEmptyListMessage()}
                </View>
          }
          {isLoadingMore
          ? <View style={styles.loadingContainer}>
              <ActivityIndicator
                animating={isLoadingMore}
                size="large"
                color={colors.blue}
              />
            </View>
          : sportunities && sportunities.edges.length === count 
            ? <TouchableOpacity style={styles.loadMoreContainer} onPress={loadMore}>
                <Text style={styles.loadMoreText}>{I18n.t('loadMore')}</Text>
              </TouchableOpacity>
            : null
          }
        </AnimatedListView>
      </View>
    );

  }
}

SportunitiesListView.propTypes = {
  sportunities: PropTypes.object,
  // Element/s to show as header of the list of sportunities.
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element.isRequired),
  ]),
  updateStatusSportunity: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
  isFilterActive: state.filtersState.isFilterActive,
  filterState: state.filtersState,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
})

const dispatchToProps = (dispatch) => ({
  updateStatusSportunity: (status, color) => dispatch(updateStatusSportunity(status, color)),
  clearFilters: bindActionCreators(clearFilters, dispatch),
  updateUserLocation: bindActionCreators(updateUserLocation, dispatch),
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

export default createFragmentContainer(connect(
  stateToProps,
  dispatchToProps
)(SportunitiesListView), {
  sportunities: graphql`
  fragment SportunityListView_sportunities on SportunityConnection{
    count
    edges {
      node {
        id
        status
        price {
          cents
          currency
        }
        invited{
          user {
            id
          }
        }
        paymentStatus {
          user {
            id
          }
          status
          price {
            cents,
            currency
          }
        }
        survey {
          isSurveyTransformed
          surveyDates {
            answers {
              user {
                id
              }
            }
          }
        }
        game_information {
          opponent {
            lookingForAnOpponent
            invitedOpponents (last: 5) {
              edges {
                node {
                  id,
                  members {
                    id
                  }
                }
              }
            }
          }
        }
        organizers {
                organizer {
                  id
                  pseudo
                }
                isAdmin
                role
                price {
                  currency
                  cents
                }
                secondaryOrganizerType {
                  id
                  name {
                    id
                    EN
                    FR
                  }
                }
                customSecondaryOrganizerType
                permissions {
                  chatAccess {
                    view
                    edit
                  }
                  memberAccess {
                    view
                    edit
                  }
                  carPoolingAccess {
                    view
                    edit
                  }
                  imageAccess {
                    view
                    edit
                  }
                  detailsAccess {
                    view
                    edit
                  }
                  compositionAccess {
                    view
                    edit
                  }
                }
              }
        ...SportunityItem_sportunity
      }
    }
  }`,
  viewer: graphql`
    fragment SportunityListView_viewer on Viewer {
      id
      ...SportunityItem_viewer
    }
  `,
  user: graphql`
    fragment SportunityListView_user on User {
      id
      profileType
      description
      ...SportunityItem_user
    }
  `
});



I18n.fallbacks = true

I18n.translations = translations;

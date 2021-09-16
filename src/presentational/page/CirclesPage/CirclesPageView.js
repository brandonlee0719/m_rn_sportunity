import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {cloneDeep} from 'lodash';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { View, Alert, Modal, Text, TouchableOpacity, Image, ScrollView, Animated, ActivityIndicator, TextInput, Platform, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Geocoder from 'react-native-geocoder';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { isEqual } from 'lodash';

import { pure } from 'sportunity/src/lib/PureComponent'
import SportunityFilterKind from '../SportunityPage/SportunityFilterKind';
import SportunityDrawer from 'sportunity/src/presentational/Drawer';

import Button from '../../Button/roundedButton';
import icons from 'sportunity/src/theme/images';
import { colors, metrics, images } from 'sportunity/src/theme';
import FloatingMenu from '../../../presentational/Button/FloatingMenu';
import Add from '../../../presentational/Button/Add';
import CircleListModal from './CircleListModal';
import CirclesItem from './CirclesItem';
import CirclesDetailPage from '../CirclesDetailPage';
import TermsOfUse from '../CirclesDetailPage/TermsOfUse'
import PublicCircleFilters from '../PublicCircleFiltersPage'

import DeleteCircleMutation from  './mutation/DeleteCircle';
import NewCircleMutation from '../NewCirclePage/NewCircleMutation';
import UnsubscribeFromCircleMutation from './mutation/UnsubscribeFromCircle';
import NewCircleMemberMutation from '../CirclesDetailPage/mutation/NewCircleMember'
import SaveFilterMutation from '../PublicCircleFiltersPage/SavedCircleFilterList/SaveCircleFilterMutation';
import SetDefaultFilterMutation from '../PublicCircleFiltersPage/SavedCircleFilterList/SaveDefaultCircleFilterMutation'
import SportunityTabView from '../../SportunityTabView';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Stepper from '../../Stepper';
import ProgressBar from '../../ProgressBar';


import AskUserLocation from '../../AskUserLocation';

import * as globals from '../../../lib/globalsjs/globals';

import SavedFilterList from '../SavedFilterList/SavedFilterList'

const AnimatedListView = Animated.createAnimatedComponent(ScrollView);

import {    clearFilters,
  updatePublicCirclesFilterStatus,
  changePlaceName,
  changePlaceRadius,
  changePlacePosition,
  clearPlaceFilter,
  addPublicCircleSportFilter,
  removeSportFilter,
  clearSportFilter,
  changeCircleNameCompletion,
  changeMemberType,
  changeCircleType,
  applySavedCircleFilter,
  removeAppliedSavedCircleFilter,
  openCirclesOnPublicFilter,
  addSubAccount,
} from 'sportunity/src/action/publicCirclesFiltersStateActions.js'

import RelayStore from '../../../RelayStore';
import style, {DefaultHeaderStyle} from './style';
import { givePermissionToHideProgress, toggleProgressBarDisplay, updateStepsCompleted } from '../../../action/profileActions';

Geocoder.fallbackToGoogle("AIzaSyCjT33JyzdH2YAREwWrKjvJ5uBdI_7Ifpc");

const circleFilterTypes = ["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES", "PUBLIC_CIRCLES"];
const circleTypes = ["ADULTS", "CHILDREN", "TEAMS", "CLUBS", "COMPANIES"];
const NAVBAR_HEIGHT = 38;

class CirclesPage extends Component{

  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  constructor(props) {
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      defaultCircleFilters: [],
      selectedCircleId: '',
      isCircleModalVisible: false,
      isCirclesFilterModalVisible: false,
      displayAskUserLocation: false,
      applyingFilter: null,
      openedSection: 1,
      fadeValue: new Animated.Value(1),
      isLoadingMore: false,
      isLoading: false,
      availableQueries: [],
      displayTerms: false,
      displayTermsOfCircle: null,
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnim,
        ),
        0,
        NAVBAR_HEIGHT,
      ),
      searchText: '',
      showStepperHeader: true,
      showStepperHideButton: false,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (!this.props.viewer.me && !!nextProps.viewer.me && !nextProps.viewer.me.basicCircleSavedFiltersCreated) {
      this._createDefaultFilters()
    }

    if (!isEqual(this.props.placeFilter, nextProps.placeFilter) ||
      !isEqual(this.props.sportFilter, nextProps.sportFilter) ||
      !isEqual(this.props.circleType, nextProps.circleType) ||
      !isEqual(this.props.users, nextProps.users) || 
      this.props.type !== nextProps.type) {
        this.updateFilters(nextProps)
    }
    if (this.props.viewer && this.props.viewer.me && nextProps.viewer && nextProps.viewer.me && 
      ((this.props.viewer.me.circles && this.props.viewer.me.circles.count !== nextProps.viewer.me.circles) ||
      (this.props.viewer.me.circlesUserIsIn && this.props.viewer.me.circlesUserIsIn.count !== nextProps.viewer.me.circlesUserIsIn.count) ||
      (this.props.viewer.me.circlesSuperUser && this.props.viewer.me.circlesSuperUser.count !== nextProps.viewer.me.circlesSuperUser.count) ||
      (this.props.viewer.me.circlesFromClub && this.props.viewer.me.circlesFromClub.count !== nextProps.viewer.me.circlesFromClub.count) ||
      (this.props.viewer.circles && this.props.viewer.circles.count !== nextProps.viewer.circles.count)
    )) {
      let availableQueries = [];
      availableQueries.push("MY_CIRCLES");
      availableQueries.push("CIRCLES_I_AM_IN");
      
      if (nextProps.viewer.me && nextProps.viewer.me.subAccounts && nextProps.viewer.me.subAccounts.length > 0)
        availableQueries.push("CHILDREN_CIRCLES");
      
      availableQueries.push("PUBLIC_CIRCLES");
      this.setState({availableQueries})
    }
  }

  componentDidMount = () => {
    const { viewer } = this.props;
    globals.register({ name: 'refetchCircles', data: {refetchCircles: this.refetchCircles}});
      setTimeout(() => {
        this._createDefaultFilters(() => {
          if (this.props.viewer && this.props.viewer.me && !this.props.viewer.me.basicCircleSavedFiltersCreated) {

          }
          else if (this.props.viewer && this.props.viewer.me && this.props.viewer.me.defaultSavedCircleFilter) {
            this.setState({applySavedFilter: true, isLoading: true})

            const refetchVariables = fragmentVariables => ({
              ...this.context.relay.variables,
              queryMain: true,
            });

            this.props.relay.refetch(
              refetchVariables,
              null,
              () => {
                let availableQueries = [];
                availableQueries.push("MY_CIRCLES");
                availableQueries.push("CIRCLES_I_AM_IN");

                if (this.props.viewer.me && this.props.viewer.me.subAccounts && this.props.viewer.me.subAccounts.length > 0)
                  availableQueries.push("CHILDREN_CIRCLES");

                availableQueries.push("PUBLIC_CIRCLES");

                this.setState({availableQueries})
                
                let filterToApply = this.props.viewer.me.defaultSavedCircleFilter; 
    
                if (this.props.shouldOpenCirclesOnPublicFilter) {
                  this.props.viewer.me.savedCircleFilters && this.props.viewer.me.savedCircleFilters.forEach(filter => {
                    if (filter.circleType.indexOf('PUBLIC_CIRCLES') >= 0) {
                      filterToApply = filter ;
                      this.props.openCirclesOnPublicFilter(false)
                    }
                  })
                }
                
                setTimeout(() => this.applyDefaultSavedCircleFilter(filterToApply), 50);
              },
              {force: false}
            );
          }
          else {
            this.setState({
              isLoading: true
            })

            const refetchVariables = fragmentVariables => ({
              ...this.context.relay.variables,
              queryMain: true,
            });

            this.props.relay.refetch(
              refetchVariables,
              null,
              () => {
                let availableQueries = [];
                availableQueries.push("MY_CIRCLES");
                availableQueries.push("CIRCLES_I_AM_IN");
                
                if (this.props.viewer.me && this.props.viewer.me.subAccounts && this.props.viewer.me.subAccounts.length > 0)
                  availableQueries.push("CHILDREN_CIRCLES");
                
                availableQueries.push("PUBLIC_CIRCLES");

                this.setState({availableQueries})
                setTimeout(() => this.setFilters(), 50)
              },
              {force: false}
            );
          }
        });
      }, 400);
    
    this.state.scrollAnim.addListener(({ value }) => {
      // This is the same calculations that diffClamp does.
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT,
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });

    this.checkWetherToShowHideProgressButton();
  } 

  componentDidUpdate(prevProps) {
    const { viewer } = this.props;
    if (prevProps.stepsPercentage !== this.props.stepsPercentage) {
      this.checkWetherToShowHideProgressButton();
    }
  }

  componentWillUnmount() {
    // Don't forget to remove the listeners!
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  checkWetherToShowHideProgressButton = () => {
    const { viewer, stepsPercentage, givePermissionToHideProgress } = this.props;
    if (viewer.me && viewer.me.profileType === 'PERSON') {
      if (stepsPercentage > 42) {
        givePermissionToHideProgress(true);
      } else {
        givePermissionToHideProgress(false);
      }
    } else if (viewer.me && viewer.me.profileType !== 'PERSON') {
      if (stepsPercentage > 33){
        givePermissionToHideProgress(true);
      } else {
        givePermissionToHideProgress(false);
      }
    }
  }

  setFilters = () => {
    const {
      clearFilters, 
      changeCircleType, 
      } = this.props ;

    clearFilters();

    if (this.props.userLocation) {
      this.props.changePlaceName(this.props.userLocation.city+', '+this.props.userLocation.country);
      this.props.changePlacePosition(this.props.userLocation.latitude, this.props.userLocation.longitude);
      this.props.changePlaceRadius(100);
    }

    if (this.props.sportunitySport && this.props.sportunitySport.sport) {
      this.props.addPublicCircleSportFilter({
        sportID: this.props.sportunitySport.sport,
        level: this.props.sportunitySport.levels.length > 0
          ? this.props.sportunitySport.levels
          : []
      })
    }

    if (this.props.viewer.me && this.props.viewer.me.profileType === 'PERSON' || !this.props.viewer.me)
      changeCircleType(["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES", "PUBLIC_CIRCLES"].filter(type => this.state.availableQueries.length === 0 || this.state.availableQueries.indexOf(type) >= 0))
    else
      changeCircleType(["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES"].filter(type => this.state.availableQueries.length === 0 || this.state.availableQueries.indexOf(type) >= 0))

    setTimeout(() => this.updateFilters(this.props), 50);
  }

  changeNameCompletion = text => {
    this.setState({searchText: text});
    
    // if (text.length > 2 || text.length === 0) 
    //   this.setState({isLoading: true});
    
    // this.props.changeCircleNameCompletion(text);

    // setTimeout(() => {
    //   if (this.props.nameCompletion === text && text.length > 2) {
    //     this.updateFilters(this.props)
    //   }
    //   else if (text.length === 0) {
    //     this.updateFilters(this.props)
    //   }
    // }, 500)    
  }

  updateFilters = props => {
    const { circleType, changeCircleType } = props;
    this.setState({
        isLoading: true
    })

    let sportFilter = [];
    if (props.sportFilter && props.sportFilter.length > 0)
        sportFilter = props.sportFilter ;

    let placeFilter ;
    if (props.placeFilter && props.placeFilter.lat) {
        placeFilter = {
            lat: props.placeFilter.lat,
            lng: props.placeFilter.lng,
            radius: props.placeFilter.radius
        }
    }

    let type = null; 
    if (props.type !== null && props.type >= 0)
      type = circleTypes[props.type];

    let newCircleType = [];
    if (circleType.length === 0) {
      if (this.props.viewer.me && this.props.viewer.me.profileType === 'PERSON' || !this.props.viewer.me) {
        changeCircleType(["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES", "PUBLIC_CIRCLES"].filter(type => this.state.availableQueries.length === 0 || this.state.availableQueries.indexOf(type) >= 0))
        newCircleType = ["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES", "PUBLIC_CIRCLES"].filter(type => this.state.availableQueries.length === 0 || this.state.availableQueries.indexOf(type) >= 0);
      }
      else {
        changeCircleType(["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES"].filter(type => this.state.availableQueries.length === 0 || this.state.availableQueries.indexOf(type) >= 0))
        newCircleType = ["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES"].filter(type => this.state.availableQueries.length === 0 || this.state.availableQueries.indexOf(type) >= 0);
      }
    }
    else 
      newCircleType = circleType

    let nameCompletion = props.nameCompletion ;

    const refetchVariables = fragmentVariables => ({
      ...this.context.relay.variables,
      filter: {
        sport: sportFilter.length > 0 ? sportFilter : null, 
        type: type,
        nameCompletion: nameCompletion,
        owners: props.users && props.users.length > 0 ? props.users : null,
      },
      myCirclesFilter: {
        sport: (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations") && sportFilter.length > 0 ? sportFilter : null,
        type: type, 
        nameCompletion: nameCompletion,
      },
      publicFilter: {
        location: placeFilter,
        sport: sportFilter.length > 0 ? sportFilter : null, 
        type: type,
        nameCompletion: nameCompletion,
        circleType: newCircleType
      },
      queryMain: true,
      queryMyCircles: newCircleType.indexOf('MY_CIRCLES') >= 0 ? true : false, 
      queryCirclesImIn: newCircleType.indexOf('CIRCLES_I_AM_IN') >= 0 ? true : false, 
      queryCirclesSuperUser: newCircleType.indexOf('CHILDREN_CIRCLES') >= 0 ? true : false,
    });

    this.props.relay.refetch(
      refetchVariables,
      null,
      () => {
        this.setState({isLoading: false})
        if (newCircleType.indexOf('PUBLIC_CIRCLES') >= 0 && !this.context.relay.variables.queryPublic) {
          this.setState({isLoadingMore: true})
          const refetchVariables = fragmentVariables => ({
            ...this.context.relay.variables,
            filter: {
              sport: sportFilter.length > 0 ? sportFilter : null, 
              type: type,
              nameCompletion: nameCompletion,
            },
            myCirclesFilter: {
              sport: (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations") && sportFilter.length > 0 ? sportFilter : null,
              type: type, 
              nameCompletion: nameCompletion,
            },
            publicFilter: {
              location: placeFilter,
              sport: sportFilter.length > 0 ? sportFilter : null, 
              type: type,
              nameCompletion: nameCompletion,
              circleType: newCircleType
            },
            queryMain: true,
            queryMyCircles: newCircleType.indexOf('MY_CIRCLES') >= 0 ? true : false, 
            queryCirclesImIn: newCircleType.indexOf('CIRCLES_I_AM_IN') >= 0 ? true : false, 
            queryCirclesSuperUser: newCircleType.indexOf('CHILDREN_CIRCLES') >= 0 ? true : false,
            queryPublic: true,
          });

          this.props.relay.refetch(
            refetchVariables,
            null,
            () => {this.setState({isLoadingMore: false})},
            {force: false}
          );
        }
      },
      {force: false}
    );
  }

  openNewCircle = () => {
    this.refetchCircles(
      () => setTimeout(() => this.goToCircle(this.props.viewer.me.circles.edges[this.props.viewer.me.circles.edges.length - 1].node), 100)
    )
  }

  goToCircle = circle => { 
    const { viewer:{me} } = this.props;

    if (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations") {
      let isCurrentUserTheOwner = !!me && circle.owner.id === me.id;
      let isCurrentUserCoOwner = !!me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0; 
      let isCurrentUserAMember = !!me && circle.members && circle.members.length > 0 && circle.members.findIndex(member => member.id === me.id) >= 0;
      let isCurrentUserAParent = !!me && circle.memberParents && circle.memberParents.length > 0 && circle.memberParents.findIndex(parent => parent.id === me.id) >= 0;

      if (!circle.isCircleAccessibleFromUrl && ((!isCurrentUserTheOwner && !isCurrentUserCoOwner && !isCurrentUserAParent && !isCurrentUserAMember) || !me)) 
        Toast.show(I18n.t('circleToastCircleIsPrivate'));
      else 
        this.setState({
          //openedSection: isCurrentUserTheOwner ? 1 : isCurrentUserCoOwner ? 3 : (isCurrentUserAParent || isCurrentUserAMember) ? 2 : 4,
          selectedCircleId: circle.id,
          isCircleModalVisible: true
        })
    }
    else {
      if (!circle.userIsMember && !circle.userIsSuperUser && !circle.userIsOwner) {
        Toast.show(I18n.t('circleToastBecomeMemberBefore'))
      }
      else {
        this.props.selectCircle(circle)
      }
    }
  }

  closeModal = () => {
    this.setState({
      selectedCircleId: '',
      isCircleModalVisible: false
    })
  }

  seeMore = () => {
    this.setState({
        isLoadingMore: true
    })
    const refetchVariables = fragmentVariables => ({
      ...this.context.relay.variables,
      circleNumber: this.context.relay.variables.circleNumber + 20
    });
    
    this.props.relay.refetch(
      refetchVariables,
      null,
      () => this.setState({isLoadingMore: false}),
      {force: false}
    );
  }

  onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > this.state.currentScrollPosition && e.nativeEvent.contentOffset.y > 50) {
      Animated.timing(this.state.fadeValue, {
        toValue: 0, 
        duration: 100
      }).start()
    }
    else {
      Animated.timing(this.state.fadeValue, {
        toValue: 1, 
        duration: 100
      }).start()
    }
    
    this.setState({currentScrollPosition: e.nativeEvent.contentOffset.y})
  }

  openFilters = () => {
    if (!this.props.viewer.me) {
      Toast.show(I18n.t('filterLoginFirst'))
    }
    else if (this.props.from && this.props.from === "new-sportunity-invitations") 
      this.setState({isCirclesFilterModalVisible: true})
    else
      this.props.navigation.navigate('publicCircleFilters', {applyFilter: () => this.updateFilters(this.props), availableQueries: this.state.availableQueries})
  }

  deleteCircle = (circle) => {
    const { viewer  } = this.props;

    Alert.alert(
      I18n.t('circlesDeleteValidationTitle'),
      I18n.t('circlesDeleteValidationText')+ ' ' + circle.name + ' ?',
      [
        {text: I18n.t('circlesDeleteValidationOk'), onPress: () => {
            DeleteCircleMutation.commit({ 
              circleId: circle.id 
            },
            (response) => {
              this.refetchCircles();
              Toast.show(I18n.t('circlesDeleteSuccess'));
              if (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations")
              
              this.setState({
                selectedCircleId: '',
                isCircleModalVisible: false
              })
            },
            error => {
              console.log(error.getError());
              Toast.show(I18n.t('circlesDeleteError'));
            }
          );
        }},
        {text: I18n.t('circlesDeleteValidationCancel'), onPress: () => {return;}}
      ]
    )    
  }

  unSubscribe = (circle) => {
    Alert.alert(
      I18n.t('circleUnsubscribeValidationTitle'),
      I18n.t('circleUnsubscribeValidation')+ ' ' + circle.name + ' ?',
      [
        {text: I18n.t('circlesDeleteValidationOk'), onPress: () => {
          let params = {
            circleId: circle.id,
            userId: this.props.viewer.me.id
          }

          UnsubscribeFromCircleMutation.commit(params,
            (response) => {
              Toast.show(I18n.t('updateSuccess'));
              globals.object('refetchEvents').call('refetchEvents')
              this.refetchCircles()
            },
            error => {
              console.log(error.getError());
              Toast.show(I18n.t('updateFailed'));
            },
          );
        }},
        {text: I18n.t('circlesDeleteValidationCancel'), onPress: () => {return;}}
      ]
    )    
  }

  refetchCircles = (callback) => {
    this.props.relay.refetch(
      this.context.relay.variables,
      null,
      () => {
        this.setState({isLoading: false})
        if (typeof callback !== "undefined")
          callback()
      },
      {force: false}
    );
  }

  subscribe = circle => {
    if (circle && circle.termsOfUses && circle.termsOfUses.length > 0) {
      this.setState({
        displayTerms: true,
        displayTermsOfCircle: circle
      })
    }
    else {
      this.subscribeToCircle(circle);
    }
  }

  validateTerms = (isCheckboxChecked) => {
    if (!isCheckboxChecked) {
      Toast.show(I18n.t('circleTermsValidationNeeded'))
      return ;
    }
    else {
      this.subscribeToCircle(this.state.displayTermsOfCircle);
    }
  }
  
  subscribeToCircle = (circle) => {
    let params = {
      circleId: circle.id,
      userId: this.props.viewer.me.id,
    }

    NewCircleMemberMutation.commit(params,
    (response) => {
      this.refetchCircles()
      globals.object('refetchEvents').call('refetchEvents')
      Toast.show(I18n.t('circleSubscribed'));
      this.setState({
        displayTerms: false,
        displayTermsOfCircle: null
      })
      this.updateTutorialSteps(circle.mode);
    },
    error => {
      console.log(error.getError());
      Toast.show(I18n.t('updateFailed'));
    });
  }

  updateTutorialSteps = (circleMode) => {
    const { tutorialSteps, updateStepsCompleted } = this.props;
    const newTutorialSteps = cloneDeep(tutorialSteps);

    if (circleMode === 'PUBLIC') {
      newTutorialSteps['joinAPublicCircleStep'] = true;
    } else if (circleMode === 'PRIVATE') {
      newTutorialSteps['joinAPrivateCircleStep'] = true;
    }

    updateStepsCompleted(newTutorialSteps);
}

  // SAVED FILTERS
  _createDefaultFilters = (callback) => {
    if (this.props.viewer && this.props.viewer.me && this.props.viewer.me.basicCircleSavedFiltersCreated && typeof callback === 'function') {
      callback()
    }
    let savedCircleFilters = [];
    if (this.props.viewer && this.props.viewer.me && !this.props.viewer.me.basicCircleSavedFiltersCreated) {
      if (this.props.viewer.me.savedCircleFilters && this.props.viewer.me.savedCircleFilters.length > 0) {
        let savedCircleFilters = this.props.viewer.me.savedCircleFilters
        .map(item => ({
          userCircleFilterId: item.id,
          filterName: item.filterName,
          memberTypes: item.memberTypes,
          sport: item.sport.map(sport => ({sportID: sport.sport.id})),
          owners: item.owners.map(user => user.id),
          circleType: item.circleType,
          location: {
            lat: item.location.lat,
            lng: item.location.lng,
            radius: 30,
          }
        }))
      }

      if (this.props.viewer.me.profileType === 'PERSON') {
        savedCircleFilters.push({
          filterName: I18n.t('myCircles_defaultFilters_MyCircles'),
          memberTypes: ["ADULTS", "CHILDREN"],
          circleType: ["MY_CIRCLES", "CIRCLES_I_AM_IN"],
          canBeDeleted: false
        });
        savedCircleFilters.push({
          filterName: I18n.t('myCircles_defaultFilters_AroundMe'),
          memberTypes: ["ADULTS", "CHILDREN"],
          circleType: ["PUBLIC_CIRCLES"],
          canBeDeleted: false
        });
        if (this.props.viewer.me.subAccounts && this.props.viewer.me.subAccounts.length > 0) {
          savedCircleFilters.push({
            filterName: I18n.t('myCircles_defaultFilters_ChildrenCircles'),
            memberTypes: ["ADULTS", "CHILDREN"],
            circleType: ["CHILDREN_CIRCLES"],
            canBeDeleted: false
          })
        }
      }
      else if (this.props.viewer.me.profileType === 'ORGANIZATION') {
        savedCircleFilters.push({
          filterName: I18n.t('myCircles_defaultFilters_MyCircles'),
          memberTypes: ["ADULTS", "CHILDREN", "TEAMS", "CLUBS", "COMPANIES"],
          circleType: ["MY_CIRCLES"],
          canBeDeleted: false
        });
        savedCircleFilters.push({
          filterName: I18n.t('myCircles_defaultFilters_AroundMe'),
          memberTypes: ["ADULTS", "CHILDREN"],
          circleType: ["PUBLIC_CIRCLES"],
          canBeDeleted: false
        });
        if (this.props.viewer.me.subAccounts && this.props.viewer.me.subAccounts.length > 0) {
          savedCircleFilters.push({
            filterName: I18n.t('myCircles_defaultFilters_TeamsCircles'),
            memberTypes: ["ADULTS", "CHILDREN", "TEAM,S", "CLUBS", "COMPANIES"],
            circleType: ["CHILDREN_CIRCLES"],
            canBeDeleted: false
          })
        }
      }
      else {
        savedCircleFilters.push({
          filterName: I18n.t('myCircles_defaultFilters_MyCircles'),
          memberTypes: ["ADULTS", "CHILDREN", "TEAMS", "CLUBS", "COMPANIES"],
          circleType: ["MY_CIRCLES"],
          canBeDeleted: false
        });
        savedCircleFilters.push({
          filterName: I18n.t('myCircles_defaultFilters_AroundMe'),
          memberTypes: ["ADULTS", "CHILDREN"],
          circleType: ["PUBLIC_CIRCLES"],
          canBeDeleted: false
        });
        if (this.props.viewer.me.subAccounts && this.props.viewer.me.subAccounts.length > 0) {
          savedCircleFilters.push({
            filterName: I18n.t('myCircles_defaultFilters_SubAccountsCircles'),
            memberTypes: ["ADULTS", "CHILDREN", "TEAMS", "CLUBS", "COMPANIES"],
            circleType: ["CHILDREN_CIRCLES"],
            canBeDeleted: false
          })
        }
      }
    }
    if (savedCircleFilters.length > 0) {
      this.updateSavedFilter(savedCircleFilters, true, (props) => {
        if (props.viewer.me.savedCircleFilters && props.viewer.me.savedCircleFilters.length > 0) {
          let defaultFilter = props.viewer.me.savedCircleFilters.find(filter => filter.filterName === I18n.t('myCircles_defaultFilters_MyCircles'))
          if (defaultFilter) {
            this.setDefaultFilter(defaultFilter.id, () => {
              this.applyDefaultSavedCircleFilter(defaultFilter)
              if (typeof callback === 'function')
                setTimeout(() => callback(), 150);
            })
          }
        }
      });
    }

    if (!this.props.viewer.me) {
      let defaultCircleFilters = []
      defaultCircleFilters.push({
        filterName: I18n.t('myCircles_defaultFilters_AroundMe'),
        memberTypes: ["ADULTS", "CHILDREN"],
        circleType: ["PUBLIC_CIRCLES"],
      });
      this.setState({ defaultCircleFilters });
      AsyncStorage.setItem('defaultCircleFilters', JSON.stringify({ filters: defaultCircleFilters }));
      setTimeout(() => this.applyDefaultSavedCircleFilter(defaultCircleFilters[0]), 150);
    }
    else {
      AsyncStorage.removeItem('defaultCircleFilters')
    }
  }
  
  updateSavedFilter = (filtersArray, basicCircleSavedFiltersCreated = false, callback) => {
    const userID = this.props.viewer.me.id;
    const viewer = this.props.viewer ;
    
    SaveFilterMutation.commit(
      basicCircleSavedFiltersCreated 
      ? {
        userID,
        user: {
          savedCircleFilters: filtersArray,
          basicCircleSavedFiltersCreated: basicCircleSavedFiltersCreated
        }
      }
      : {
        userID,
        user: {
          savedCircleFilters: this.props.filtersArray,
        }
      }
    ,
    () => {
      if (!basicCircleSavedFiltersCreated)
        Toast.show(I18n.t('filterSuccess'));
      else if (typeof callback !== 'undefined')
        setTimeout(() => callback(this.props), 150);
    },
    error => {
      // this.toggleLoading(false);
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  setDefaultFilter = (filterId, callback) => {
    const userID = this.props.viewer.me.id;
    const filterIDVar = filterId ;
    const viewer = this.props.viewer ;
    SetDefaultFilterMutation.commit({
      userID,
      filterIDVar,
    },
    () => {
      // this.toggleLoading(false);
      if (typeof callback !== 'undefined')
        callback();
      else 
        Toast.show(I18n.t('filterSuccess'));
    },
    error => {
      // this.toggleLoading(false);
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }
  
  applyDefaultSavedCircleFilter = (filter) => {
    const {
      clearFilters, 
      addPublicCircleSportFilter,
      changePlaceName,
      changePlaceRadius,
      changePlacePosition,
      changeMemberType,
      changeCircleType, 
      addSubAccount, 
      applySavedCircleFilter
      } = this.props ;

    clearFilters();

    if (filter.circleType && filter.circleType.indexOf('PUBLIC_CIRCLES') >= 0) {
      if (!!filter.location && !!filter.location.lat) {
      }
      else if (this.props.userLocation && this.props.userLocation.latitude) {
        filter.location = {
          lat: this.props.userLocation.latitude,
          lng: this.props.userLocation.longitude,
          radius: 200
        }
      }
      else {
        this.setState({
          displayAskUserLocation: true,
          isLoading: false,
          applyingFilter: filter
        })
        return ;
      }
    }

    filter.sport && filter.sport[0] && filter.sport[0].sport &&
      addPublicCircleSportFilter({
        sportID: filter.sport[0].sport.id,
        level: filter.sport[0].levels.length > 0
          ? filter.sport[0].levels.map(level => level.id)
          : filter.sport[0].sport.levels.map(level => level.id)
      })

    filter.location && filter.location.lat && filter.location.lng && changePlacePosition(filter.location.lat, filter.location.lng);
    filter.location && filter.location.radius && changePlaceRadius(filter.location.radius);

    filter.memberType && changeMemberType(circleTypes.indexOf(filter.memberType))
    filter.circleType && changeCircleType(filter.circleType);
    filter.owners && filter.owners.forEach(owner => addSubAccount(owner.id))

    if (filter.location && filter.location.lat && filter.location) {
      let city, country;
      Geocoder.geocodePosition({lat: filter.location.lat, lng: filter.location.lng}).then(results => {
        for (var a=0 ; a<results.length; a++) {
          if (results[a].locality && results[a].country) {
            city = results[a].locality;
            country = results[a].country;
            break;
          }
        }
        if (city && country) {
          changePlaceName(city+', '+country);
          filter.filterName && applySavedCircleFilter(filter);
        }
      })
    }
    else {
      filter.filterName && applySavedCircleFilter(filter);
    }
  }

  updateLocation = (userAddress) => {
    if (this.state.applyingFilter) {
      const newFilter = {
        ...this.state.applyingFilter,
        location: {
          lat: userAddress.latitude,
          lng: userAddress.longitude,
          radius: 200
        },
      };

      this.applyDefaultSavedCircleFilter(newFilter)
    }
    this.setState({
      displayAskUserLocation: false
    })
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 350);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue = this._scrollValue > NAVBAR_HEIGHT &&
    this._clampedScrollValue > (NAVBAR_HEIGHT) / 2
    ? this._offsetValue + NAVBAR_HEIGHT
    : this._offsetValue - NAVBAR_HEIGHT;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
    }).start();
  };

  onNewFilter = () => {
    this.props.clearFilters();

    this.setState({
      createNewFilter: true,
      filterName: '',
      filterId: null,
      isDefaultFilter: false,
    })
  }

  handleTryAnotherLocation = () => {
    const { filterState, viewer: {me} } = this.props;

    let savedFiltersList = me && me.savedCircleFilters
    ? cloneDeep(me.savedCircleFilters).sort((a,b) => {return (me.defaultSavedCircleFilter && b.id===me.defaultSavedCircleFilter.id) ? 1 : 0})
    : this.state.defaultCircleFilters

    let filter = savedFiltersList.find(savedFilter => savedFilter.filterName === I18n.t('myCircles_defaultFilters_AroundMe'))
    
    this.setState({
      displayAskUserLocation: true,
      isLoading: false,
      applyingFilter: filter
    })
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
      <Text style={style.emptyMySportunitiesListText}>
        {linkText}
      </Text>
    </TouchableOpacity>
  )

  getEmptyCirclesList = () => {
    const {viewer, viewer:{ me: user }} = this.props ;
    
    const isLocationAvailable = this.props.placeFilter && this.props.placeFilter.lat ;
    
    return (
      <View style={style.emptyCirclesContainer}>
          <View style={style.emptyCirclesImageContainer}>
            <Image source={images.error_black} style={style.emptyCirclesImage} />
          </View>
          <Text style={style.emptyCirclesListTextHeader}>{I18n.t('sportunitiesEmptyCirclesTitle')}</Text>
          {this.getLinkWithIcon(images.add_circle, I18n.t('sportunitiesEmptyCirclesCreate'), () => this.props.navigation.navigate('newCircle',{openNewCircle: this.openNewCircle}))}
          {this.getLinkWithIcon(images.search, I18n.t('sportunitiesEmptyCirclesJoin'), () => this.props.navigation.navigate('searchModule', {navigation: this.props.navigation, placeholder: I18n.t('searchCircle'), openOnTab: 'Groups'}))}
          {this.getLinkWithIcon(images.sportunity_group, I18n.t('sportunitiesEmptyCirclesFind'), this.handleTryAnotherLocation)}
          {this.getLinkWithIcon(images.filter, I18n.t('sportunitiesEmptyCirclesChangeFilters'), this.openFilters)}
          
          {!user && (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Button style={style.emptyCirclesButton} onPress={() => this.props.navigation.navigate('createProfile')}>
                {I18n.t('register')}
              </Button>
              <Button style={style.emptyCirclesButton} onPress={() => this.props.navigation.navigate('settings')}>
                {I18n.t('login')}
              </Button>
            </View>
          )}
      </View>
    )
  }

  onShowStepperModal = () => {
    this.setState({ showStepperModal: true });
  }

  onCloseStepperModal = () => {
    this.setState({ showStepperModal: false });
  }

  render(){
    const { viewer, viewer:{ me }, isFilterActive, circleType, selectedCircles, stepsPercentage, nextStepToDo, showProgressBar } = this.props;
    const { searchText } = this.state;
    
    let circles = [];
    let circlesUserIsIn = [] ;
    let circlesSuperUser = [];
    let circlesFromClub = []
    let publicCircles = []
    let circleCount = 0 ;
    
    if (me) {
      if (me.circles && me.circles.edges && circleType.indexOf('MY_CIRCLES') >= 0) {
        circles = me.circles.edges.map(edge => edge.node) ;
        circleCount += me.circles.count; 
      }
      if (me.circlesUserIsIn && me.circlesUserIsIn.edges && circleType.indexOf('CIRCLES_I_AM_IN') >= 0) {
        circlesUserIsIn = me.circlesUserIsIn.edges.map(edge => edge.node).filter(circle => circles.findIndex(c => c.id === circle.id) < 0);
        circleCount += me.circlesUserIsIn.count;
      }
      if (me.circlesSuperUser && me.circlesSuperUser.edges && circleType.indexOf('CHILDREN_CIRCLES') >= 0) {
        circlesSuperUser = me.circlesSuperUser.edges.map(edge => edge.node).filter(circle => circles.findIndex(c => c.id === circle.id) < 0) ;
        circleCount += me.circlesSuperUser.count; 
      }
      if (me.circlesFromClub && me.circlesFromClub.edges && circleType.indexOf('CHILDREN_CIRCLES') >= 0) {
        circlesFromClub = me.circlesFromClub.edges.map(edge => edge.node).filter(circle => circles.findIndex(c => c.id === circle.id) < 0);
        circleCount += me.circlesFromClub.count
      }
    }
    if (viewer.circles && viewer.circles.edges && viewer.circles.edges.length > 0 && circleType.indexOf('PUBLIC_CIRCLES') >= 0) {
      publicCircles = viewer.circles.edges
      .map(edge => edge.node)
      .filter(circle => 
        circles.findIndex(c => c.id === circle.id) < 0 && 
        circlesUserIsIn.findIndex(c => c.id === circle.id) < 0 && 
        circlesSuperUser.findIndex(c => c.id === circle.id) < 0 && 
        circlesFromClub.findIndex(c => c.id === circle.id));

      circleCount += viewer.circles.count; 
    }
      
    const navbarTranslate = this.state.clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT],
      outputRange: [0, -NAVBAR_HEIGHT],
      extrapolate: 'clamp',
  });

  let savedFiltersList = me && me.savedCircleFilters
  ? cloneDeep(me.savedCircleFilters).sort((a,b) => {return (me.defaultSavedCircleFilter && b.id===me.defaultSavedCircleFilter.id) ? 1 : 0})
  : this.state.defaultCircleFilters

  let filteredCircle = searchText && circles && circles.filter((circle, ind) => circle.mode.toUpperCase().includes(searchText.toUpperCase()));
  let contentData = (searchText ? filteredCircle : circles);

  return (
      <View style={{flex: 1}}>
        {viewer && viewer.me && showProgressBar && stepsPercentage !== 100 &&
          <View style={{ padding: metrics.baseMargin, alignItems: 'center', backgroundColor: colors.silver, paddingBottom: 0 }}>
            <ProgressBar
              percentage={stepsPercentage}
              mainText={nextStepToDo}
              onPress={this.onShowStepperModal}
              toShowRightButton={this.props.permissionToHideProgress}
              rightButtonText={I18n.t('stepper_hide')}
              rightButtonPress={() => globals.object('hideStepperForEver').call('hideStepperForEver')}
            />
          </View>
        }

        {viewer && viewer.me &&
          <Stepper
            viewer={viewer}
            visible={this.state.showStepperModal}
            onClose={this.onCloseStepperModal}
          />
        }

        <View style={this.props.from && this.props.from === "new-sportunity-invitations" ? style.modalContainer : style.container}>

          <AnimatedListView 
            contentContainerStyle={style.scrollViewContainer}
            style={{elevation: 1}}
            onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                )}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            onScrollEndDrag={this._onScrollEndDrag}
            scrollEventThrottle={1}
          >

            {this.state.displayAskUserLocation &&
              <View style={style.askLocationContainer}>
                <AskUserLocation
                  updateLocation={this.updateLocation}
                  label={I18n.t('circlesAddLocationTitle')}
                />
              </View>
            }
            {this.state.isLoading &&
              <View style={{marginTop: 20}}>
                <ActivityIndicator
                  size="large"
                  animating={this.state.isLoading}
                  color={colors.blue}
                />
              </View>
            }
            {!this.state.isLoading && !this.state.displayAskUserLocation && circleCount === 0 && 
              this.getEmptyCirclesList()
            }
            {!this.state.displayAskUserLocation && !this.state.isLoading && contentData.map((circle, index) => (
                <CirclesItem 
                  key={index}
                  circle={circle}
                  goToCircles={this.goToCircle}
                  userIsOwner={true}
                  onUnsubscribe={this.unSubscribe}
                  userIsSuperUser={false}
                  userIsMember={false}
                  subscribe={this.subscribe}
                  user={me}
                  isSelected={!!selectedCircles && selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                  inviteToActivity={this.props.inviteToActivity}
                />
              ))
            }
            {!this.state.displayAskUserLocation && !this.state.isLoading && circlesUserIsIn && circlesUserIsIn.filter(circleUserIsIn => this.props.from && this.props.from === "new-sportunity-invitations" ? circleUserIsIn.isCircleUsableByMembers : true).map((circle, index) => (
                <CirclesItem 
                  key={index}
                  circle={circle}
                  goToCircles={this.goToCircle}
                  userIsOwner={false}
                  onUnsubscribe={this.unSubscribe}
                  userIsSuperUser={false}
                  userIsMember={true}
                  subscribe={this.subscribe}
                  user={me}
                  isSelected={!!selectedCircles && selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                  inviteToActivity={this.props.inviteToActivity}
                />
              ))
            }
            {!this.state.displayAskUserLocation && !this.state.isLoading && circlesSuperUser && circlesSuperUser.map((circle, index) => (
                <CirclesItem 
                  key={index}
                  circle={circle}
                  goToCircles={this.goToCircle}
                  userIsOwner={false}
                  onUnsubscribe={this.unSubscribe}
                  userIsSuperUser={true}
                  userIsMember={false}
                  subscribe={this.subscribe}
                  user={me}
                  isSelected={!!selectedCircles && selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                  inviteToActivity={this.props.inviteToActivity}
                />
              ))
            }
            {!this.state.displayAskUserLocation && !this.state.isLoading && circlesFromClub && circlesFromClub.map((circle, index) => (
              <CirclesItem 
                  key={index}
                  circle={circle}
                  goToCircles={this.goToCircle}
                  userIsOwner={false}
                  onUnsubscribe={this.unSubscribe}
                  userIsSuperUser={true}
                  userIsMember={false}
                  subscribe={this.subscribe}
                  user={me}
                  isSelected={!!selectedCircles && selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                  inviteToActivity={this.props.inviteToActivity}
                />
              ))
            }
            {!this.state.displayAskUserLocation && !this.state.isLoading && publicCircles && publicCircles.filter(publicCircle => this.props.from && this.props.from === "new-sportunity-invitations" ? publicCircle.isCircleUsableByMembers : true).map((circle, index) => (
                <CirclesItem 
                  key={index}
                  circle={circle}
                  goToCircles={this.goToCircle}
                  onUnsubscribe={this.unSubscribe}
                  userIsOwner={me && me.id === circle.owner.id}
                  userIsSuperUser={me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0}
                  userIsMember={me && circle.members.findIndex(member => member.id === me.id) >= 0}
                  subscribe={this.subscribe}
                  user={me}
                  isSelected={!!selectedCircles && selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                  inviteToActivity={this.props.inviteToActivity}
                />
            ))}
            {!this.state.displayAskUserLocation && (this.state.isLoadingMore
            ? !this.state.isLoading &&
              <View style={{marginTop: 20}}>
                <ActivityIndicator
                  size="large"
                  animating={this.state.isLoadingMore}
                  color={colors.blue}
                />
              </View>
            : !this.state.isLoading && viewer.circles && viewer.circles.pageInfo && viewer.circles.pageInfo.hasNextPage && (circleType.indexOf('PUBLIC_CIRCLES') >= 0) &&
                <TouchableOpacity style={style.loadMoreContainer} onPress={this.seeMore}>
                  <Text style={style.loadMoreText}>{I18n.t('loadMore')}</Text>
                </TouchableOpacity>
            )} 
          
        </AnimatedListView>

        {/*me && 
          <Animated.View style={{width: '100%', top: 60, backgroundColor: colors.background, ...Platform.select({ios: {zIndex: 20},android: {elevation: 2, shadowOpacity: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }}}), position: 'absolute', height: 38, transform: [{translateY:navbarTranslate}] }}>
              {/* <SavedFilterList 
                filterList={savedFiltersList}
                appliedFilterId={this.props.appliedCircleFilterId}
                isFilterActive={isFilterActive}
                onFilterTouched={this.applyDefaultSavedCircleFilter}
                openFilterPage={this.openFilters}
                user={me} 
              /> */}
            {/* <ScrollableTabView tabBarActiveTextColor={{ backgroundColor: 'red', height: 15 }}>
              <Text tabLabel='All'>All</Text>
              <Text tabLabel='People'>People</Text>
              <Text tabLabel='Activities'>Activities</Text>
              <Text tabLabel='Groups'>Groups</Text>
              <Text tabLabel='Venues'>Venues</Text>
            </ScrollableTabView> */}
            {/* <SportunityTabView tabBarInactiveTextColor={colors.background} tabBarUnderlineStyle tabBarPosition='overlayTop' style={{width: '100%', top: 60, backgroundColor: colors.background, ...Platform.select({ios: {zIndex: 20},android: {elevation: 2, shadowOpacity: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }}}), position: 'absolute', height: 38, transform: [{translateY:navbarTranslate}] }}>
              <View tabLabel='All'><Text>all</Text></View>
              <View tabLabel='People'><Text>people</Text></View>
              <View tabLabel='Activities'><Text>activities</Text></View>
              <View tabLabel='Groups'><Text>groups</Text></View>
              <View tabLabel='Venues'><Text>venues</Text></View>
            </SportunityTabView>             }
          </Animated.View>
        */}
        <Animated.View style={{width: '100%', backgroundColor: colors.background, ...Platform.select({ios: {zIndex: 20},android: {elevation: 2, shadowOpacity: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }}}), position: 'absolute', height: 38, transform: [{translateY:navbarTranslate}] }}>
            <SavedFilterList 
              filterList={savedFiltersList}
              appliedFilterId={this.props.appliedCircleFilterId}
              isFilterActive={isFilterActive}
              onFilterTouched={this.applyDefaultSavedCircleFilter}
              openFilterPage={this.openFilters}
              user={me} 
            />
        </Animated.View>

        {/* <View style={[style.searchBarContainer, Platform.select({ios: {zIndex: 40}, android: {elevation: 3}})]}>
            <Image source={icons.search} style={style.searchBarIcon}/>
            <TextInput
                style={style.searchBarInput}
                placeholder={I18n.t('searchPublicCirclesName')}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={this.changeNameCompletion}
                value={this.props.nameCompletion}
                />
        </View> */}

        {this.state.displayTerms && 
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.displayTerms}
                onRequestClose={() => this.setState({displayTerms: false})}
              >
              <View style={Platform.OS === 'android' ? style.headerAndroid : style.headerIOS}>
                <TouchableOpacity
                  onPress={() => this.setState({displayTerms: false})}
                  style={style.closeIcon}>
                  <Image source={icons.down_arrow}/>
                </TouchableOpacity>
                <Text style={style.title}>
                  {I18n.t('circleTerms')}
                </Text>
              </View>
              
              <View style={style.modalContainer}>
                <TermsOfUse
                  title={I18n.t('circleTerms')}
                  viewer={viewer}
                  circle={this.state.displayTermsOfCircle}
                  language={this.props.language}
                  validateTerms={this.validateTerms}
                />
              </View>
            </Modal>
          }

        <Modal 
          visible={this.state.isCircleModalVisible}
          animationType={'slide'}
          transparent={false}
          onRequestClose={this.closeModal} 
        >
          <CirclesDetailPage
            circleId={this.state.selectedCircleId}
            viewer={this.props.viewer}
            onCloseModal={this.closeModal}
            deleteCircle={(circle) => {this.deleteCircle(circle);}}
            unSubscribe={this.unSubscribe}
            />
        </Modal>

        {this.props.from && this.props.from === "new-sportunity-invitations" && this.state.isCirclesFilterModalVisible && 
        <Modal
          visible={this.state.isCirclesFilterModalVisible}
          animationType={'slide'}
          transparent={false}
          onRequestClose={() => this.setState({isCirclesFilterModalVisible: false})} 
          >
            <View style={Platform.OS === 'android' ? style.headerAndroid : style.headerIOS}>
              <TouchableOpacity
                onPress={() => this.setState({isCirclesFilterModalVisible: false})}
                style={style.closeIcon}>
                <Image source={icons.down_arrow}/>
              </TouchableOpacity>
              <Text style={style.title}>
                {I18n.t('invitations')}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <PublicCircleFilters
                viewer={this.props.viewer}
                availableQueries={[]}
                onRequestClose={() => this.setState({isCirclesFilterModalVisible: false})} 
                from={this.props.from}
                />
            </View>
          </Modal>
        }

        {/*!this.props.from &&
          <View>
            <SportunityFilterKind 
              language={I18n.locale}
              navigation={this.props.navigation}
              user={viewer.me}
            />
          </View>
        */}

        
        {(!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations") && this.props.viewer.me && 
            <FloatingMenu>
              <Add Action={() => this.props.navigation.navigate('newCircle',{openNewCircle: this.openNewCircle}) } />
            </FloatingMenu>
          }
        </View>
      </View>
    )

  }
}

CirclesPage.propTypes = {
  viewer: PropTypes.object,
  relay: PropTypes.object.isRequired,
};

// state to props
const stateToProps = (state) => ({
  isFilterActive: state.publicCirclesFiltersState.isFilterActive,
  appliedCircleFilterName: state.publicCirclesFiltersState.appliedCircleFilterName, 
  appliedCircleFilterId: state.publicCirclesFiltersState.appliedCircleFilterId, 
  circleType: state.publicCirclesFiltersState.filters.circleType, 
  placeFilter: state.publicCirclesFiltersState.filters.location,
  sportFilter: state.publicCirclesFiltersState.filters.sport,
  type: state.publicCirclesFiltersState.filters.type,
  nameCompletion: state.publicCirclesFiltersState.filters.nameCompletion,  
  users: state.publicCirclesFiltersState.filters.users,
  language: state.sportunityLocale.language,   
  userCountry: state.sportunityLocale.userCountry,
  userLocation: state.sportunityLocale.userLocation,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
  stepsPercentage: state.sportunityProfile.stepsPercentage,
  nextStepToDo: state.sportunityProfile.nextStepToDo,
  showProgressBar: state.sportunityProfile.showProgressBar,
  permissionToHideProgress: state.sportunityProfile.permissionToHideProgress,
  shouldOpenCirclesOnPublicFilter: state.publicCirclesFiltersState.shouldOpenCirclesOnPublicFilter
});

// dispatchToProps
const dispatchToProps = (dispatch) => ({
  clearFilters: bindActionCreators(clearFilters, dispatch),
  updatePublicCirclesFilterStatus: bindActionCreators(updatePublicCirclesFilterStatus, dispatch),
  changePlaceName: bindActionCreators(changePlaceName, dispatch),
  changePlaceRadius: bindActionCreators(changePlaceRadius, dispatch),
  changePlacePosition: bindActionCreators(changePlacePosition, dispatch),
  clearPlaceFilter: bindActionCreators(clearPlaceFilter, dispatch),
  addPublicCircleSportFilter: bindActionCreators(addPublicCircleSportFilter, dispatch),
  removeSportFilter: bindActionCreators(removeSportFilter, dispatch),
  clearSportFilter: bindActionCreators(clearSportFilter, dispatch),
  changeCircleNameCompletion: bindActionCreators(changeCircleNameCompletion, dispatch),
  changeMemberType: bindActionCreators(changeMemberType, dispatch),
  changeCircleType: bindActionCreators(changeCircleType, dispatch),
  applySavedCircleFilter: bindActionCreators(applySavedCircleFilter, dispatch),
  removeAppliedSavedCircleFilter: bindActionCreators(removeAppliedSavedCircleFilter, dispatch),
  toggleProgressBarDisplay: bindActionCreators(toggleProgressBarDisplay, dispatch),
  givePermissionToHideProgress: bindActionCreators(givePermissionToHideProgress, dispatch),
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
  openCirclesOnPublicFilter: bindActionCreators(openCirclesOnPublicFilter, dispatch),
  addSubAccount: bindActionCreators(addSubAccount, dispatch),
})

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(CirclesPage);

const CirclesPageViewTemp = createRefetchContainer(withNavigation(ReduxContainer), {
  /* TODO manually deal with:
  ...PublicCircleFilters_viewer
  */
  viewer: graphql`
    fragment CirclesPageView_viewer on Viewer @argumentDefinitions(
      queryPublic: {type: "Boolean!", defaultValue: false},
      queryMyCircles: {type: "Boolean!", defaultValue: false}, 
      queryCirclesImIn: {type: "Boolean!", defaultValue: false}, 
      queryCirclesSuperUser: {type: "Boolean!", defaultValue: false},
      queryMain: {type: "Boolean!", defaultValue: false},
      filter: {type: "CirclesFilter"},
      publicFilter: {type: "CirclesFilter"},
      myCirclesFilter: {type: "CirclesFilter"},
      circleNumber: {type: "Int", defaultValue: 10}
    ){
      id,
      ...CirclesDetailPage_viewer
      ...Stepper_viewer
      circles (first: $circleNumber, filter: $publicFilter) @include(if: $queryMain) {
        count
        pageInfo {
            hasNextPage
        }
        edges @include(if: $queryPublic) {
            node {
              id
              ...CirclesItem_circle
              isCircleUsableByMembers
              owner {
                id
              }
              coOwners {
                id
              }
              members {
                id
              }
              termsOfUses {
                id
                name
                link
                content
                acceptedBy {
                  user {
                    id
                  }
                }
              }
            }
        }
      }
      me {
        id
        profileType
        basicCircleSavedFiltersCreated
        savedCircleFilters {
          id
          filterName
          location {
            lat
            lng
            radius
          }
          sport {
            sport {
              id
              name {
                EN
                FR
              }
              levels {
                id
                EN {
                  name,
                  description,
                  skillLevel
                },
                FR {
                  name,
                  description,
                  skillLevel
                }
              }
            }
            levels {
              id
              EN {
                name,
                description,
                skillLevel
              },
              FR {
                name,
                description,
                skillLevel
              }
            }
          }
          circleType
          memberTypes
          modes
          owners {
            id
            pseudo
          }
        }
        defaultSavedCircleFilter {
          id
          filterName
          sport {
            sport {
              id,
              name {
                EN,
                FR
              },
              logo
              levels {
                id
                EN {
                  name,
                  description,
                  skillLevel
                },
                FR {
                  name,
                  description,
                  skillLevel
                }
              }
            },
            levels {
              id
              EN {
                name,
                description,
                skillLevel
              },
              FR {
                name,
                description,
                skillLevel
              }
            }
          }
          location {
            lat,
            lng,
            radius,
          }
          circleType
          memberType
        }
        subAccounts {
          id
        }
        circles (last: 100, filter: $myCirclesFilter) @include(if: $queryMain) {
          count
          edges @include(if: $queryMyCircles) {
            node {
              ...CirclesItem_circle
              id
              owner {
                id
                avatar
                pseudo
              }
              isCircleAccessibleFromUrl
              mode
              type
              coOwners {
                id
              }
              members {
                id
              }
              memberParents {
                id
              }                
            }
          }
        }
        circlesUserIsIn (last: 100, filter: $filter) @include(if: $queryMain) {
          count
          edges @include(if: $queryCirclesImIn) {
            node {
              ...CirclesItem_circle
              isCircleAccessibleFromUrl
              isCircleUsableByMembers
              id
            }
          }
        }
        circlesSuperUser(last: 100, filter: $filter) @include(if: $queryMain) {
          count
          edges @include(if: $queryCirclesSuperUser) {
            node {
              ...CirclesItem_circle
              isCircleAccessibleFromUrl
              id
            }
          }
        }
        circlesFromClub(last: 100, filter: $filter) @include(if: $queryMain) {
          count
          edges @include(if: $queryCirclesSuperUser) {
            node {
              ...CirclesItem_circle
              isCircleAccessibleFromUrl
              id
            }
          }
        }
      }
    }`
  }, 
  graphql`
    query CirclesPageViewRefetchQuery (
      $queryPublic: Boolean!,
      $queryMyCircles: Boolean!,
      $queryCirclesImIn: Boolean!,
      $queryCirclesSuperUser: Boolean!,
      $queryMain: Boolean!,
      $filter: CirclesFilter,
      $publicFilter: CirclesFilter,
      $myCirclesFilter: CirclesFilter,
      $circleNumber: Int
    ) {
      viewer {
        ...CirclesPageView_viewer @arguments(
          queryPublic: $queryPublic,
          queryMyCircles: $queryMyCircles, 
          queryCirclesImIn: $queryCirclesImIn,
          queryCirclesSuperUser: $queryCirclesSuperUser,
          queryMain: $queryMain, 
          filter: $filter,
          publicFilter: $publicFilter,
          myCirclesFilter: $myCirclesFilter,
          circleNumber: $circleNumber
        )
      }
    }
  `
);

export default class extends Component {

  render() {
    const {navigation} = this.props;
    let selectPublicFilter = navigation.getParam('selectPublicFilter', false)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CirclesPageViewQuery (
            $queryPublic: Boolean!,
            $queryMyCircles: Boolean!,
            $queryCirclesImIn: Boolean!,
            $queryCirclesSuperUser: Boolean!,
            $queryMain: Boolean!,
            $filter: CirclesFilter,
            $publicFilter: CirclesFilter,
            $myCirclesFilter: CirclesFilter,
            $circleNumber: Int
          ){
            viewer {
              ...CirclesPageView_viewer @arguments(
              queryPublic: $queryPublic,
              queryMyCircles: $queryMyCircles, 
              queryCirclesImIn: $queryCirclesImIn,
              queryCirclesSuperUser: $queryCirclesSuperUser,
              queryMain: $queryMain, 
              filter: $filter,
              publicFilter: $publicFilter,
              myCirclesFilter: $myCirclesFilter,
              circleNumber: $circleNumber
            )
            }
          }
        `}
        variables={{
          queryPublic: false,
          queryMyCircles: false, 
          queryCirclesImIn: false, 
          queryCirclesSuperUser: false,
          queryMain: false,
          filter: {},
          publicFilter: {},
          myCirclesFilter: {},
          circleNumber: 10
        }}
        render={({error, props}) => {
          if (props) {
            return <CirclesPageViewTemp viewer={props.viewer} query={props} {...this.props} />;
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

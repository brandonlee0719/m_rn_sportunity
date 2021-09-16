import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent, { pure } from 'sportunity/src/lib/PureComponent'
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { View, AsyncStorage, Text, Image, ActivityIndicator, Animated, Platform, TouchableOpacity } from 'react-native';
import Toast from 'react-native-simple-toast';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';

import filterKind from '../../../customPropType/FilterKind';
import kind from '../../../enums/sportunityFilterKinds';
import FloatingMenu from '../../../presentational/Button/FloatingMenu';
import Add from '../../../presentational/Button/Add';
import SavedFilterList from '../SavedFilterList/SavedFilterList';
import SportunityFilterKind from './SportunityFilterKind';
import SportunitiesListView from './SportunityListView';
import SportunityCalendar from './SportunityCalendar';
import AppVersionCheck from './AppVersionCheck';

import NoLoginPage from '../NoLoginPage/NoLoginPage';
import create from '../../../action/createActivity';
import { allowUpdatingPrice } from 'sportunity/src/action/newActivityActions.js';
import {  addSubAccountFilter } from 'sportunity/src/action/FiltersStateActions.js'
import { toggleProgressBarDisplay, givePermissionToHideProgress, updateStepsCompleted } from '../../../action/profileActions';
import I18n from 'react-native-i18n';
import style, { scrollableTabSpecificStyles, DefaultHeaderStyle } from './style';
import DrawerIcon from '../../Drawer/DrawerIcon';
import {cloneDeep} from 'lodash';

import * as globals from '../../../lib/globalsjs/globals'

import { images, colors, metrics, fonts } from '../../../theme';
import Stepper from '../../Stepper';
import ProgressBar from '../../ProgressBar';

const NAVBAR_HEIGHT = 38;

class SportunityPage extends PureComponent{
  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  constructor(props){
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
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
      defaultFilters: [],
      tutorialStep: 0,
      showSwipeTutorial: false,
      showStepperModal: true,
    }
  }

  componentDidMount = async () => {
    const { viewer } = this.props;
    setTimeout(async () => {
      const defaultFiltersString = await AsyncStorage.getItem('defaultFilters');
      if (defaultFiltersString) {
        const defaultFilters = JSON.parse(defaultFiltersString).filters;
        this.setState({ defaultFilters });
        this.props.onApplyFilter(defaultFilters[0]);
      }
    }, 500);

    if (this.props.viewer.me) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        querySubAccounts: true,
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
      );
    }

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

    let showSwipeTutorial = await AsyncStorage.getItem('neverShowSwipeTutorialAgain');
    if (!showSwipeTutorial) {
      this.setState({showSwipeTutorial: true});
    }

    this.checkWetherToShowHideProgressButton();
    this.toShowProgressBar();
  } 

  componentDidUpdate(prevProps) {
    const { viewer } = this.props;
    if (viewer && viewer.me) {
      if (!isEqual(this.props.tutorialSteps, prevProps.tutorialSteps)) {
        this.setState({ showStepperModal: true });
      }

      if (viewer.me.isPublicProfileComplete && get(this.props, 'tutorialSteps.fulfilProfileStep') === false) {
        this.props.updateStepsCompleted({
          ...this.props.tutorialSteps,
          fulfilProfileStep: true,
        });
      }
    }

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
      } 
      else {
        givePermissionToHideProgress(false);
      }
    } 
    else if (viewer.me && viewer.me.profileType !== 'PERSON') {
      if (stepsPercentage > 33){
        givePermissionToHideProgress(true);
      } 
      else {
        givePermissionToHideProgress(false);
      }
    }
  }

  toShowProgressBar = () => {
    const { stepsPercentage, toggleProgressBarDisplay } = this.props;
    if (stepsPercentage === 100) {
      toggleProgressBarDisplay(false);
    } else {
      toggleProgressBarDisplay(true);
    }
  }

  onPressSwipeTutorialButton = () => {
    if (this.state.tutorialStep === 0) {
      this.setState({
        tutorialStep: 1
      })
    }
    else {
      this.setState({
        showSwipeTutorial: false,
        tutorialStep: 0
      })
      AsyncStorage.setItem('neverShowSwipeTutorialAgain', JSON.stringify(true));
    }
  }

  handleScrollLoad = () => {
    this.props.handleScrollLoad();
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

  openFilterPage = () => {
    if (this.props.viewer && this.props.viewer.me && this.props.viewer.me.id) {
      this.props.navigation.navigate('filters',{activeKind: this.props.selectedKind, onApplyFilter: this.props.onApplyFilter})
    }
    else {
      Toast.show(I18n.t('filterLoginFirst'))
    }
  }

  onShowStepperModal = () => {
    this.setState({ showStepperModal: true });
  }

  onCloseStepperModal = () => {
    this.setState({ showStepperModal: false });
  }

  applyDefaultFilter = () => {
    this.props.onApplyFilter(this.state.defaultFilters.find(filter => filter.id === "myEvents_defaultFilters_aroundMe"));
    
  }

  render(){
    const { selectedKind, showProgressBar, sportunities , showTabBar, count, loadMore, allowUpdatingPrice, viewer, isFilterActive, isLoadingFilter, stepsPercentage, nextStepToDo } = this.props;
    const sportunityPageStyle = viewer.me? { marginTop: 0 } : {};
  
    const navbarTranslate = this.state.clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT],
      outputRange: [0, -NAVBAR_HEIGHT],
      extrapolate: 'clamp',
    });
    let savedFiltersList = viewer.me && viewer.me.savedFilters ? cloneDeep(viewer.me.savedFilters)
      //.filter(savedFilter => (selectedKind === 'Organized' && savedFilter.page === 'ORGANIZED') || (selectedKind === 'Available' && savedFilter.page === 'FIND'))
      .sort((a,b) => {return (viewer.me.defaultSavedFilter && b.id===viewer.me.defaultSavedFilter.id) ? 1 : 0})
      : this.state.defaultFilters;

    return (
      <View style={[style.sportunityPageView, sportunityPageStyle]}>

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

        {!isLoadingFilter && this.state.showSwipeTutorial && this.props.sportunities && this.props.sportunities.count > 0 && viewer && viewer.me && 
          <View style={style.overlay}>
            <View style={style.tutorialContainer}>
              <Image style={style.tutorialImage} source={this.state.tutorialStep === 0 ? images.tutorialSwipeRight : images.tutorialSwipeLeft} />
              <View style={style.tutorialTextContainer}>
                {this.state.tutorialStep === 0 && <Image source={images.checkWhite} style={style.tutorialImageCheck}/>}
                <Text style={style.tutorialText} numberOfLines={2} textBreakStrategy={"balanced"}>{I18n.t('swipeTutorialStep'+this.state.tutorialStep)}</Text>
                {this.state.tutorialStep === 1 && <Image source={images.close_white} style={style.tutorialImageCross}/>}
              </View>
              <TouchableOpacity onPress={this.onPressSwipeTutorialButton} style={style.tutorialButtonContainer}>
                <Text style={style.tutorialButtonText}>
                  {this.state.tutorialStep === 0 ? I18n.t('tutorialNext') : I18n.t('tutorialExit')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }

        <View style={style.upperHalfPage}>
          
          {isLoadingFilter
          ? <View style={style.loadingContainer}>
              <ActivityIndicator
                animating={isLoadingFilter}
                size="large"
                color={colors.blue}
              />
            </View>
          : <SportunitiesListView
              handleScrollLoad={this.handleScrollLoad}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
              )}
              onMomentumScrollBegin={this._onMomentumScrollBegin}
              onMomentumScrollEnd={this._onMomentumScrollEnd}
              onScrollEndDrag={this._onScrollEndDrag}
              loadMore={loadMore}
              isLoadingMore={this.props.isLoadingMore}
              tabLabel="List"
              sportunities={this.props.displayAskUserLocation ? null : !!sportunities ? sportunities : null}
              selectedKind={selectedKind}
              count={count}
              viewer={viewer}
              user={viewer.me}
              displayAskUserLocation={this.props.displayAskUserLocation}
              onDisplayAskUserLocation={this.props.onDisplayAskUserLocation}
              setDefaultAddress={this.props.setDefaultAddress}
              onApplyFilter={this.props.onApplyFilter}
              applyDefaultFilter={this.applyDefaultFilter}
              navigation={this.props.navigation}
              onGetUserLocation={this.props.onGetUserLocation}
              showSwipeTutorial={this.state.showSwipeTutorial && viewer && viewer.me}
              hideTutorial={() => this.setState({showSwipeTutorial: false})}
              tutorialStep={this.state.tutorialStep}
            />
          }
          <Animated.View style={{width: '100%', backgroundColor: colors.background, ...Platform.select({ios: {zIndex: 2},android: {elevation: 2, shadowOpacity: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }}}), position: 'absolute', height: 38, transform: [{translateY:navbarTranslate}] }}>
              <SavedFilterList 
                filterList={savedFiltersList}
                appliedFilterId={this.props.appliedFilterId}
                isFilterActive={isFilterActive}
                onFilterTouched={this.props.onApplyFilter}
                openFilterPage={this.openFilterPage}
                user={viewer.me} 
              />
          </Animated.View>
        </View>
      </View>
    );
  }
}


const stateToProps = (state) => ({
  appliedFilterId: state.filtersState.appliedFilterId,
  isFilterActive: state.filtersState.isFilterActive,
  language: state.sportunityLocale.language,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
  stepsPercentage: state.sportunityProfile.stepsPercentage,
  nextStepToDo: state.sportunityProfile.nextStepToDo,
  showProgressBar: state.sportunityProfile.showProgressBar,
  permissionToHideProgress: state.sportunityProfile.permissionToHideProgress,
});

const dispatchToProps = (dispatch) => ({
  createActivity: (activity) => dispatch(create(activity)),
  allowUpdatingPrice: bindActionCreators(allowUpdatingPrice, dispatch),
  addSubAccountFilter: bindActionCreators(addSubAccountFilter, dispatch),
  toggleProgressBarDisplay: bindActionCreators(toggleProgressBarDisplay, dispatch),
  givePermissionToHideProgress: bindActionCreators(givePermissionToHideProgress, dispatch),
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

SportunityPage.propTypes = {
  selectedKind: filterKind,
  sportunities: PropTypes.object,
  showTabBar: PropTypes.bool.isRequired,
};

const SportunityPageContainer = createRefetchContainer(connect(stateToProps, dispatchToProps)(SportunityPage), {
    sportunities: graphql`
      fragment SportunityPage_sportunities on SportunityConnection{
        ...SportunityListView_sportunities
        count
        edges {
          node {
            id
          }
        }
      }`,
    viewer: graphql`
      fragment SportunityPage_viewer on Viewer @argumentDefinitions(
        querySubAccounts: {type: "Boolean!", defaultValue: false}
      ) {
        id
        ...Stepper_viewer
        me {
          ...SportunityListView_user
          id,
          avatar
          profileType
          mangoId
          isProfileComplete
          isPublicProfileComplete
          subAccounts @include(if: $querySubAccounts) {
            id
            pseudo
          }
          savedFilters {
            id
            filterName
            status
            statuses
            users {
              id
              pseudo
            }
            subAccounts {
              id
              pseudo
            }
            circles (last: 20) { 
              edges {
                node {
                  id
                  name
                  owner {
                    id
                    pseudo
                    avatar
                  }
                }
              }
            }
            page
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
            dates {
              from
              to
            }
            price {
              from
              to
            }
            sportunityTypes {
              id
              name {
                FR
                EN
              }
            }
          }
          defaultSavedFilter {
            id
            filterName
            status
            statuses
            users {
              id
              pseudo
            }
            subAccounts {
              id
              pseudo
            }
            circles (last: 20) { 
              edges {
                node {
                  id
                  name
                  owner {
                    id
                    pseudo
                    avatar
                  }
                }
              }
            }
            page
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
            dates {
              from
              to
            }
            price {
              from
              to
            }
            sportunityTypes {
              id
              name {
                FR
                EN
              }
            }
          }
        }
      ...SportunityListView_viewer
    }
    `
  }, graphql`
    query SportunityPageRefetchQuery ($querySubAccounts: Boolean!) {
      viewer {
        ...SportunityPage_viewer @arguments(querySubAccounts: $querySubAccounts)
      }
    }
  `);



export default SportunityPageContainer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, ScrollView, Alert, Animated } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
} from 'react-relay'; 
import {withNavigation} from 'react-navigation'
import environment from 'sportunity/src/createRelayEnvironment'
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import Prompt from 'react-native-prompt';
import Geocoder from 'react-native-geocoder';
import { cloneDeep } from 'lodash';

import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import translations from 'sportunity/src/translations.js';
import FilterSportunityTypes from './FilterSportunityTypes';
import FilterDetailCircles from './FilterDetailCircles';
import SportunityPageView from '../../SportunityPageView';
import SportunityAccordion from '../../SportunityAccordion';
import SportunityButton from '../../SportunityButton';

import FilterSubAccounts from './FilterSubAccounts';
import FilterDetailPlaces from './FilterDetailPlaces';
import FilterDetailDates from './FilterDetailDates';
import FilterDetailSports from './FilterDetailSports';
import FilterDetailRestrictions from './FilterDetailRestrictions';
import FilterDetailKind from './FilterDetailKind';
import SavedFilterList from '../SavedFilterList/SavedFilterList';
import Field from '../../forms/Field';

import SaveFilterMutation from './SavedFilterList/SaveFilterMutation';
import SetDefaultFilterMutation from './SavedFilterList/SetDefaultFilterMutation'

import { styles } from './style';
import { images, colors } from '../../../theme';

import {  clearFilters,
          changeFilterDates,
          clearDateFilter,
          addSportFilter,
          removeSportFilter,
          clearSportFilter,
          changePlaceName,
          changePlaceRadius,
          changePlacePosition,
          clearPlaceFilter,
          updateFilterStatus,
          changeFilterPrice,
          changeSportunityTypesFilter,
          changeSexRestrictionFilter,
          changeAgeRestrictionFilter,
          clearRestrictionFilter,
          addCircleFilter,
          removeCircleFilter,
          clearCircleFilter,
          addSubAccountFilter,
          removeSubAccountFilter,
          clearSubAccountFilter,
          applySavedFilter,
          updateAppliedFilterName,
          removeAppliedSavedFilter,
          changeStatusFilter,
          clearStatusFilter
  } from 'sportunity/src/action/FiltersStateActions.js'

const AnimatedListView = Animated.createAnimatedComponent(ScrollView);

Geocoder.fallbackToGoogle("AIzaSyCjT33JyzdH2YAREwWrKjvJ5uBdI_7Ifpc");

const NAVBAR_HEIGHT = 38;

class FiltersPage extends PureComponent {
  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  constructor(props){
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      isOnFiltersPage: true,
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
      createNewFilter: false,
      isDefaultFilter: false,
      filterId: null,
      filterName: '',
      isSavingFilters: false
    }
  }

  componentDidMount = () => {
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
    
    // if (this.props.appliedFilterId) {
    //   this.setState({
    //     isDefaultFilter: this.props.viewer.me && this.props.viewer.me.defaultSavedFilter && this.props.appliedFilterId === this.props.viewer.me.defaultSavedFilter.id,
    //     filterName: this.props.appliedFilterName,
    //     filterId: this.props.appliedFilterId
    //   })
    // }
    // else {
      this.onNewFilter()
    // }
  }

  componentWillUnmount() {
    // Don't forget to remove the listeners!
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  onDateSelected = (previous, current) => {
    let dateFilter = { from:null, to:null };

    dateFilter.from = previous.toString()
    dateFilter.to = current.toString()
    this.props.changeFilterDates(dateFilter);
  }

  clearDateFilter = () => {
    this.props.clearDateFilter();
  }
  removeSportFilter = (index) => {
    this.props.removeSportFilter(index);
  }
  changePlaceRadius = (radius) => {
    this.props.changePlaceRadius(radius);
  };
  changePlacePosition = (lat, lng) => {
    this.props.changePlacePosition(lat, lng);
  };
  clearPlaceFilter = () => {
    this.props.clearPlaceFilter();
  };
  applyFilter = () => {
    if (this.props.ageRestriction && this.props.ageRestriction.from < 0)
        Alert.alert(I18n.t('alert'), I18n.t('minNumberAlert'))
    else if (this.props.ageRestriction && this.props.ageRestriction.from >= this.props.ageRestriction.to)
        Alert.alert(I18n.t('alert'), I18n.t('yearMaxLowerThanMin'))
    else {
      this.props.updateFilterStatus(true);
      this.props.navigation.goBack()
    }

  }

  resetFilter = () => {
    this.props.clearFilters();
    this.setState({
      appliedFilter: null
    })
    this.props.navigation.goBack()

  }

  // SAVED FILTERS
  onApplySavedFilter = (filter) => {
    const {
          clearFilters,
          changeFilterDates,
          addSportFilter,
          changePlaceName,
          changePlaceRadius,
          changePlacePosition,
          changeFilterPrice,
          changeStatusFilter,
          addSubAccountFilter, 
          changeSportunityTypesFilter,
          addCircleFilter,
          applySavedFilter} = this.props ;

    clearFilters();

    filter.dates && filter.dates.from && filter.dates.to && changeFilterDates({from: filter.dates.from, to: filter.dates.to});

    filter.sport && filter.sport[0] && filter.sport[0].sport &&
      addSportFilter({
        sportID: filter.sport[0].sport.id,
        level: filter.sport[0].levels.length > 0
          ? filter.sport[0].levels.map(level => level.id)
          : filter.sport[0].sport.levels.map(level => level.id)
      })
      
    if ((filter.status && filter.status === 'Available') || (filter.statuses && filter.statuses.indexOf('Available') >= 0)) {
      if (this.props.userLocation && (!filter.location || !filter.location.lat)) {
        let city, country;
        Geocoder.geocodePosition({lat: this.props.userLocation.latitude, lng: this.props.userLocation.longitude}).then(results => {
          for (var a=0 ; a<results.length; a++) {
            if (results[a].locality && results[a].country) {
              city = results[a].locality;
              country = results[a].country;
              break;
            }
          }
          if (city && country)
            changePlaceName(city+', '+country);
        })

        changePlacePosition(this.props.userLocation.latitude, this.props.userLocation.longitude);
        changePlaceRadius(200)
      }
    }
    

    if (filter.location && filter.location) {
      let city, country;
      Geocoder.geocodePosition({lat: filter.location.lat, lng: filter.location.lng}).then(results => {
        for (var a=0 ; a<results.length; a++) {
          if (results[a].locality && results[a].country) {
            city = results[a].locality;
            country = results[a].country;
            break;
          }
        }
        if (city && country)
          changePlaceName(city+', '+country);
      })
    }

    filter.sportunityTypes && filter.sportunityTypes.length > 0 && changeSportunityTypesFilter(filter.sportunityTypes.map(type => type.id))

    filter.location && filter.location.lat && filter.location.lng && changePlacePosition(filter.location.lat, filter.location.lng);
    filter.location && filter.location.radius && changePlaceRadius(filter.location.radius);

    filter.statuses && changeStatusFilter(filter.statuses)

    filter.subAccounts && filter.subAccounts.forEach(subAccount => addSubAccountFilter(subAccount.id))
    
    filter.circles && filter.circles.edges && filter.circles.edges.forEach(edge => addCircleFilter(edge.node.id))

    filter.filterName && applySavedFilter(filter);
  }

  onDisplayFilterNamePrompt = () => {
    this.setState({
      askFilterNamePromptOpen: true
    })
  }

  onRemoveSavedFilter = (id) => {
    Alert.alert(
      I18n.t('deleteFilterConfirmTitle'),
      I18n.t('deleteFilterConfirmText'),
      [
        { text: I18n.t('yes'), onPress: () => this.removeSavedFilter(id) },
        { text: I18n.t('no'), onPress: () => {}}
      ]
    )
  } 
  
  removeSavedFilter = id => {
    const { savedFilters } = this.props.viewer.me ;
    
    let filtersArray = savedFilters.map(filter => {
      return {
        userFilterId: filter.id,
        filterName: filter.filterName,
        dates: filter.dates ? {
          from: filter.dates.from,
          to: filter.dates.to
        } : null,
        location: filter.location ? {
          lat: filter.location.lat,
          lng: filter.location.lng,
          radius: filter.location.radius
        } : null,
        price: filter.price ? {
          from: filter.price.from,
          to: filter.price.to
        } : null,
        sport: filter.sport && filter.sport[0] ? {
          sportID: filter.sport[0].sport.id,
          level: filter.sport[0].levels.map(level => level.id)
        } : null,
        statuses: filter.statuses ? filter.statuses : null,
        page: filter.page,
        circles: filter.circles && filter.circles.edges && filter.circles.edges.length > 0
          ? filter.circles.edges.map(edge => edge.node.id)
          : null
      }
    })
    let index = filtersArray.findIndex(filter => filter.userFilterId === id)
    if (index >= 0) {
      filtersArray.splice(index, 1);
    }
    
    this.saveFilters(filtersArray);
    this.props.clearFilters();
  }

  saveNewFilter = () => {
    this.setState({isSavingFilters: true})
    let {filters} = this.props ;

    if (this.state.filterName === '' || !this.state.filterName) {
      Toast.show(I18n.t('filterMissingName'));
      this.setState({isSavingFilters: false})
      return ;
    }

    if ((!filters.dates || !filters.dates.from || !filters.dates.to)
        && (!filters.location || !filters.location.lat || !filters.location.lng || !filters.location.radius)
        && (!filters.sport || filters.sport.length === 0)
        && (!filters.users || filters.users.length === 0)
        && (!filters.sexRestriction || filters.sexRestriction === '')
        && (!filters.ageRestriction || (filters.ageRestriction.from === 0 && filters.ageRestriction.to === 100))
        && (!filters.selectedStatus)
    ) {
      Toast.show(I18n.t('filterMissingField'));
      this.setState({isSavingFilters: false})
      return
    }
    
    this.onValidateSaveFilter(this.state.filterName)
  }

  onValidateSaveFilter = (filterName) => {
    const { viewer, dateFilter, placeFilter, sportFilter, appliedFilterName, appliedFilterId, selectedStatus } = this.props;
    const { savedFilters } = this.props.viewer.me ;
    const userID = this.props.viewer.me.id;

    let filtersArray = savedFilters
    .filter(filter => this.state.filterId ? filter.id !== this.state.filterId : true)
    .map(filter => {
      return {
        userFilterId: filter.id,
        filterName: filter.filterName,
        dates: filter.dates 
          ? {
            from: filter.dates.from,
            to: filter.dates.to
          } 
          : null,
        location: filter.location 
          ? {
            lat: filter.location.lat,
            lng: filter.location.lng,
            radius: filter.location.radius
          } 
          : null,
        price: filter.price 
          ? {
            from: filter.price.from,
            to: filter.price.to
          } 
          : null,
        sport: filter.sport && filter.sport[0] 
          ? {
            sportID: filter.sport[0].sport.id,
            level: filter.sport[0].levels.map(level => level.id)
          } 
          : null,
        statuses: filter.statuses || null,
        page: filter.page,
        circles: filter.circles && filter.circles.edges && filter.circles.edges.length > 0
          ? filter.circles.edges.map(edge => edge.node.id)
          : null,
        sportunityTypes: filter.sportunityTypes && filter.sportunityTypes.length > 0 
          ? filter.sportunityTypes.map(type => type.id)
          : null,
        subAccounts: filter.subAccounts && filter.subAccounts.length > 0
          ? filter.subAccounts.map(subAccount => subAccount.id)
          : null
      }
    })
    
    const newFilter = {
      userFilterId: this.state.filterId || null,
      dates: dateFilter.from && dateFilter.to && dateFilter|| null,
      location: placeFilter ? {
        lat: placeFilter.lat,
        lng: placeFilter.lng,
        radius: placeFilter.radius
      } : null,
      sport: sportFilter || null,
      filterName: filterName || null,
      statuses: selectedStatus || null,
      page: this.props.activeKind === 'Available' ? 'FIND' : 'ORGANIZED',
      circles: this.props.circles,
      sportunityTypes: this.props.sportunityTypes,
      subAccounts: this.props.subAccounts
    };

    this.props.updateAppliedFilterName(filterName)
    this.state.filterId && this.props.applySavedFilter({id: this.state.filterId, filterName})

    this.props.onApplyFilter({...newFilter, id: newFilter.userFilterId});

    filtersArray.push(newFilter)

    this.saveFilters(filtersArray);
  }

  saveFilters = (filtersArray) => {
    const userID = this.props.viewer.me.id;
    const viewer = this.props.viewer ;
    
    SaveFilterMutation.commit({
      userID,
      user: {
        savedFilters: filtersArray,
      }
    },
    () => {
      // this.toggleLoading(false);
      Toast.show(I18n.t('filterSuccess'));
      if (!this.props.appliedFilterId) {
        const previousFilterList = this.props.viewer.me.savedFilters; 
        setTimeout(() => {
          
          let newFilter = this.props.viewer.me.savedFilters &&
            this.props.viewer.me.savedFilters.find(filter => previousFilterList.findIndex(previousFilter => previousFilter.id === filter.id) < 0);

          if (newFilter) {
            this.onApplySavedFilter(newFilter)
            if (this.state.isDefaultFilter) {
              this.setDefaultFilter(newFilter.id)
            }
          }

          this.props.navigation.goBack()
        }, 500)
      }
      else {
        if (this.state.isDefaultFilter) {
          this.setDefaultFilter(this.props.appliedFilterId)
        }
        this.props.navigation.goBack()
      }
    },
    error => {
      // this.toggleLoading(false);
      this.setState({isSavingFilters: false})
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  setDefaultFilter = (filterId) => {
    const userID = this.props.viewer.me.id;
    const filterIDVar = filterId ;
    const viewer = this.props.viewer ;
    
    SetDefaultFilterMutation.commit({
      userID,
      filterIDVar,
    },
    () => {
      // this.toggleLoading(false);
      Toast.show(I18n.t('filterSuccess'));
    },
    error => {
      // this.toggleLoading(false);
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  updateDefaultFilter = value => {
    this.setState({isDefaultFilter:value})
    if (!!this.state.filterId) {
      this.setDefaultFilter(this.state.filterId)
    }
  }

  onFilterClick = filter => {
    this.setState({
      createNewFilter: false,
      isDefaultFilter: this.props.viewer.me && this.props.viewer.me.defaultSavedFilter && filter.id === this.props.viewer.me.defaultSavedFilter.id,
      filterName: filter.filterName,
      filterId: filter.id
    })
    this.onApplySavedFilter(filter);
  }

  onNewFilter = () => {
    // this.props.clearFilters();

    this.setState({
      createNewFilter: true,
      filterName: '',
      filterId: null,
      isDefaultFilter: false,
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

  render() {
    // vars
    const props = this.props;
    const { viewer, dateFilter, placeFilter, sportFilter, savedFilters, activeKind } = this.props;
    // sports
    // let { sports } = viewer;
    // sports = this.normalizeSports(sports);
    // dates
    let isDateFilterSelected = dateFilter.to !== null && dateFilter.from !== null
    const startDate = new Date(); // Date from which you can select dates.

    // location
    const isPlaceSelected = placeFilter.name !== null && placeFilter.lat !== null && placeFilter.lng !== null

    const navbarTranslate = this.state.clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT],
      outputRange: [0, -NAVBAR_HEIGHT],
      extrapolate: 'clamp',
    });

    const selectedFilterCanBeDeleted = 
      !!this.state.filterId && 
      viewer.me && viewer.me.savedFilters && 
      viewer.me.savedFilters.find(savedFilter => savedFilter.id === this.state.filterId) 
    ? viewer.me.savedFilters.find(savedFilter => savedFilter.id === this.state.filterId).canBeDeleted
    : !!this.state.filterId;

    return (
      <SportunityPageView>
        {viewer && viewer.me && 
            <Animated.View style={{width: '100%', backgroundColor: colors.background, zIndex: 20, position: 'absolute', height: 38, transform: [{translateY:navbarTranslate}] }}>
                <SavedFilterList 
                  filterList={viewer.me.savedFilters}
                  appliedFilterId={this.state.filterId}
                  onFilterTouched={this.onFilterClick}
                  user={viewer.me} 
                  hideFilterButton={true}
                  hideNewFilterButton={false}
                  onNewFilter={this.onNewFilter}
                  isNewFilter={this.state.createNewFilter}
                />
            </Animated.View>
          }
        { viewer.me && (this.state.createNewFilter || !!this.state.filterId) &&
          <AnimatedListView 
            contentContainerStyle={styles.scrollViewContainer}
            onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                )}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            onScrollEndDrag={this._onScrollEndDrag}
            scrollEventThrottle={1}
          >
            <View style={{marginBottom: 15}}>
              <Field 
                type={"text"}
                title={I18n.t('filtersName')}
                value={this.state.filterName}
                onChange={(text) => this.setState({filterName:text})} 
              />
              <Field 
                type={"switch"}
                title={I18n.t('defaultFilter')}
                value={this.state.isDefaultFilter}
                onChange={this.updateDefaultFilter} 
              />
            </View>

            {activeKind === 'Organized' && viewer && viewer.me &&
              <View>
                <FilterDetailKind
                  viewer={viewer}
                  language={props.language}
                  changeStatusFilter={props.changeStatusFilter}
                  clearStatusFilter={props.clearStatusFilter}
                  selectedStatus={props.selectedStatus}
                />
              </View>
            }

            {/*------------------------ CIRCLES FILTERS ------------------------*/}
            {
              activeKind === 'Organized' && viewer && viewer.me &&
              <View>
                <FilterDetailCircles
                  viewer={viewer}
                  circles={viewer.me.circlesUserIsIn}
                  language={props.language}
                  selectedCircles={props.circles}
                  addCircleFilter={props.addCircleFilter}
                  removeCircleFilter={props.removeCircleFilter}
                  clearCircleFilter={props.clearCircleFilter}
                />
              </View>
            }

            {/*------------------------ SUBACCOUNTS FILTERS ------------------------*/}
            {
              activeKind === 'Organized' && viewer && viewer.me &&
              <View>
                <FilterSubAccounts
                  viewer={viewer}
                  subAccounts={viewer.me.subAccounts}
                  language={props.language}
                  selectedSubAccounts={props.subAccounts}
                  addSubAccountFilter={props.addSubAccountFilter}
                  removeSubAccountFilter={props.removeSubAccountFilter}
                  clearSubAccountFilter={props.clearSubAccountFilter}
                />
              </View>
            }

            {/*------------------------ SPORTS ------------------------*/}

            <FilterDetailSports
              filters={sportFilter}
              viewer={viewer}
              onRemoveSportFilter={this.removeSportFilter}
              clearSportFilter={props.clearSportFilter}
              action={() => this.props.navigation.navigate('filterSports')}
              />

            {/*------------------------ SPORTUNITY TYPES ------------------------*/}
            {activeKind === 'Organized' && viewer.me && viewer.me.canQuerySportunityTypeFilter &&
              <FilterSportunityTypes
                viewer={viewer}
                selectedSportunityTypes={props.sportunityTypes}
                changeSportunityTypesFilter={props.changeSportunityTypesFilter}
                language={this.props.language}
              />
            }

            {/*------------------------ DATES ------------------------*/}

            <View>
              <FilterDetailDates
                from={dateFilter.from}
                to={dateFilter.to}
                startDate={startDate}
                onDateSelected={this.onDateSelected}
                clearDateFilter={this.clearDateFilter}
                selectedStatus={props.selectedStatus}
              />
            </View>

            {/*------------------------ PLACE ------------------------*/}

            <FilterDetailPlaces
              changePlaceRadius={props.changePlaceRadius}
              changePlacePosition={props.changePlacePosition}
              clearPlaceFilter={props.clearPlaceFilter}
              changePlaceName={props.changePlaceName}
              radius={placeFilter.radius}
              lat={placeFilter.lat}
              lng={placeFilter.lng}
              placeName={placeFilter.name}
              isPlaceSelected={isPlaceSelected}
            />

            {/*------------------------ ADVANCED SETTINGS ------------------------*/}

            <FilterDetailRestrictions
              changeSexRestriction={props.changeSexRestrictionFilter}
              changeAgeRestriction={props.changeAgeRestrictionFilter}
              ageRestriction={props.ageRestriction}
              sexRestriction={props.sexRestriction}
              clearRestrictionFilter={props.clearRestrictionFilter}
            />
          </AnimatedListView>
        }
        { viewer.me && !this.state.createNewFilter && !!this.state.filterId && !this.state.isSavingFilters && selectedFilterCanBeDeleted
        ? <View style={styles.saveFilterButtonsContainer}>
            <SportunityButton 
              buttonStyle={styles.button}
              onPress={this.saveNewFilter}
            >
              <Text style={styles.buttonText}>
                {I18n.t(this.state.createNewFilter ? 'saveFilter' : 'modifyFilter')}
              </Text>
            </SportunityButton>
            
            <SportunityButton 
              buttonStyle={styles.redButton}
              onPress={() => this.onRemoveSavedFilter(this.state.filterId)}
            >
              <Text style={styles.buttonText}>
                {I18n.t('deleteFilter')}
              </Text>
            </SportunityButton>
          </View>
        : null
        }
        { viewer.me && this.state.createNewFilter && !this.state.filterId && !this.state.isSavingFilters 
        ? <View style={styles.saveFilterButtonsContainer}>
            <SportunityButton 
              buttonStyle={styles.button}
              onPress={this.saveNewFilter}
            >
              <Text style={styles.buttonText}>
                {I18n.t(this.state.createNewFilter ? 'saveFilter' : 'modifyFilter')}
              </Text>
            </SportunityButton>
          </View> 
        : null
        }
      </SportunityPageView>
    );
  }
}

// propTypes
FiltersPage.propTypes = {
};

// state to props
const stateToProps = (state) => ({
  placeFilter: state.filtersState.filters.location,
  sportFilter: state.filtersState.filters.sport,
  dateFilter: state.filtersState.filters.dates,
  sexRestriction: state.filtersState.filters.sexRestriction,
  ageRestriction: state.filtersState.filters.ageRestriction,
  users: state.filtersState.filters.users,
  circles: state.filtersState.filters.circles,
  sportunityTypes: state.filtersState.filters.sportunityTypes,
  selectedStatus: state.filtersState.filters.selectedStatus,
  filters: state.filtersState.filters,
  language: state.sportunityLocale.language,
  appliedFilterName: state.filtersState.appliedFilterName,
  appliedFilterId: state.filtersState.appliedFilterId,
  subAccounts: state.filtersState.filters.subAccounts,
  userLocation: state.sportunityLocale.userLocation
});

// dispatchToProps
const dispatchToProps = (dispatch) => ({
  changeFilterDates: bindActionCreators(changeFilterDates, dispatch),
  clearDateFilter: bindActionCreators(clearDateFilter, dispatch),
  addSportFilter: bindActionCreators(addSportFilter, dispatch),
  removeSportFilter: bindActionCreators(removeSportFilter, dispatch),
  clearSportFilter: bindActionCreators(clearSportFilter, dispatch),
  changePlaceRadius: bindActionCreators(changePlaceRadius, dispatch),
  changePlacePosition: bindActionCreators(changePlacePosition, dispatch),
  clearPlaceFilter: bindActionCreators(clearPlaceFilter, dispatch),
  changePlaceName: bindActionCreators(changePlaceName, dispatch),
  updateFilterStatus: bindActionCreators(updateFilterStatus, dispatch),
  clearFilters: bindActionCreators(clearFilters, dispatch),
  changeFilterPrice: bindActionCreators(changeFilterPrice, dispatch),
  changeAgeRestrictionFilter: bindActionCreators(changeAgeRestrictionFilter, dispatch),
  changeSexRestrictionFilter: bindActionCreators(changeSexRestrictionFilter, dispatch),
  changeSportunityTypesFilter: bindActionCreators(changeSportunityTypesFilter, dispatch),
  clearRestrictionFilter: bindActionCreators(clearRestrictionFilter, dispatch),
  addCircleFilter: bindActionCreators(addCircleFilter, dispatch),
  removeCircleFilter: bindActionCreators(removeCircleFilter, dispatch),
  clearCircleFilter: bindActionCreators(clearCircleFilter, dispatch),
  addSubAccountFilter: bindActionCreators(addSubAccountFilter, dispatch),
  removeSubAccountFilter: bindActionCreators(removeSubAccountFilter, dispatch),
  clearSubAccountFilter: bindActionCreators(clearSubAccountFilter, dispatch),
  applySavedFilter: bindActionCreators(applySavedFilter, dispatch),
  removeAppliedSavedFilter: bindActionCreators(removeAppliedSavedFilter, dispatch),
  clearStatusFilter: bindActionCreators(clearStatusFilter, dispatch),
  changeStatusFilter: bindActionCreators(changeStatusFilter, dispatch),
  updateAppliedFilterName: bindActionCreators(updateAppliedFilterName, dispatch),
})

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(FiltersPage);

const IndexPageTemp = createFragmentContainer(withNavigation(ReduxContainer), 
  {viewer: graphql`fragment FiltersPage_viewer on Viewer {
    ...FilterDetailSports_viewer
    ...SavedFilterList_viewer
    ...FilterSportunityTypes_viewer
   
    me {
      id,
      pseudo,
      avatar,
      description,
      profileType
      canQuerySportunityTypeFilter
      circlesUserIsIn (last:20) {
        ...FilterDetailCircles_circles
      } 
      defaultSavedFilter { 
        id
      }
      subAccounts {
        id,
        pseudo
      }
      savedFilters {
        id
        filterName
        canBeDeleted
        status
        statuses
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
        sportunityTypes {
          id
          name {
            FR
            EN
          }
        }
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
      }
    }
  }`,
});

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('filters')
    }
  }
  render() {
    const {navigation} = this.props
    let activeKind = navigation.getParam('activeKind', null)
    let onApplyFilter = navigation.getParam('onApplyFilter', null)
    return (
      <QueryRenderer
        environment={environment}
        variables={{}}
        query={graphql`
          query FiltersPageQuery{
            viewer {
              ...FiltersPage_viewer
            }
          }
        `}
        render={({error, props}) => {
          if (props) {
            return <IndexPageTemp activeKind={activeKind} onApplyFilter={onApplyFilter} query={props} viewer={props.viewer} {...this.props}/>;
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

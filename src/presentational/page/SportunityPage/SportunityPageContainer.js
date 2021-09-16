import { withNavigation } from 'react-navigation';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { Alert, AsyncStorage, Text } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer, 
} from 'react-relay';
import Geocoder from 'react-native-geocoder';
import Permissions from 'react-native-permissions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFrom, updatePopupCompleteProfileIsDiplayed } from 'sportunity/src/action/profileActions';
import {  clearFilters, changeFilterDates, addSportFilter, changePlaceName, changePlaceRadius, changePlacePosition, changeFilterPrice, applySavedFilter, changeStatusFilter, addSubAccountFilter, addCircleFilter, changeSportunityTypesFilter} from 'sportunity/src/action/FiltersStateActions.js'
import { updateLocale, updateUserCountry, updateUserCurrency, updateUserLocation } from 'sportunity/src/action/localeActions.js';
import change from 'sportunity/src/action/changeSportunityFilterKind';
import { isEqual, cloneDeep } from 'lodash';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import SportunityDrawer from 'sportunity/src/presentational/Drawer';
import SportunityPage from './SportunityPage';
import UpdateLanguageMutation from './UpdateLanguageMutation';
import UpdateCountryMutation from './UpdateCountryMutation';
import SaveFilterMutation from '../FiltersPage/SavedFilterList/SaveFilterMutation';
import SetDefaultFilterMutation from '../FiltersPage/SavedFilterList/SetDefaultFilterMutation';
import I18n from 'react-native-i18n';
import moment from 'moment';
import 'moment/min/locales.min';

import * as globals from '../../../lib/globalsjs/globals'

Geocoder.fallbackToGoogle("AIzaSyCjT33JyzdH2YAREwWrKjvJ5uBdI_7Ifpc");

const geoLocationOptions = {
  timeout: 20000,
  maximumAge: 3600000,
  enableHighAccuracy: false,
};

class SportunityPageView extends PureComponent{
  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }
  constructor() {
    super()
    this.state = {
      isLoading: false,
      isLoadingMore: false,
      applySavedFilter: false,
      displayAskUserLocation: false,
      count: 5,
      applyingFilter: null
    }
  }

  async componentDidMount() {
    globals.register({ name: 'refetchEvents', data: {refetchEvents: this.handleScrollLoad}});
    this.setState({
      isLoading: true
    })
    
    setTimeout(() => this.checkUserInformations(), 50); 

    setTimeout(() => {
      this._createDefaultFilters();
      if (this.props.query.viewer && this.props.query.viewer.me && !this.props.query.viewer.me.basicSavedFiltersCreated) {}
      else if (this.props.query.viewer && this.props.query.viewer.me && this.props.query.viewer.me.defaultSavedFilter) {
        this.setState({applySavedFilter: true})
        setTimeout(() => this.applyDefaultSavedFilter(this.props.query.viewer.me.defaultSavedFilter), 50);
      }
      else if (this.props.selectedKind === 'Organized') {
        this.launchFirstQuery();
      }
    }, 400); 
    //setTimeout(() => this.checkUserInformations(shouldLaunchFirstQuery), 50); 
    
    let superToken = await AsyncStorage.getItem('superToken');
    let token = await AsyncStorage.getItem('token')
    /*if (token === superToken) {
      if(this.props.query.viewer.me && this.props.query.viewer.me.sports.length === 0 && !this.props.popupCompleteProfileIsDiplayed) {
        this.props.updateFrom('') // needed only if we choose to redirect user coming from login screen
        this.props.updatePopupCompleteProfileIsDiplayed(true);
        return(
          Alert.alert(
            I18n.t('info'),
            I18n.t('addSportToProfile'),
            [
              {text: 'OK', onPress: () => Actions.meProfile()},
            ],
            { cancelable: false }
          )
        )*
      }
    }*/
    if (this.props.from === 'login') {
      this.props.updateFrom('')
      this.props.changeKind('Organized')
    }

    if (!this.props.query.viewer || !this.props.query.viewer.me) {
      fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(json => {
            this.props.updateUserCountry(json.country)
            this.props.updateUserCurrency(this.getCountryCurrency(json.country))
          })  
    }  

    if (this.props.from && this.props.from.indexOf('event') >= 0 && this.props.from.split('/') && this.props.from.split('/').length === 2 && this.props.from.split('/')[1]) {
      setTimeout(() => {
        this.props.navigation.navigate('eventdetail' ,{ id: this.props.from.split('/')[1]});
        this.props.updateFrom('')
      }, 500);
    }
    if (this.props.from && this.props.from.indexOf('circle') >= 0 && this.props.from.split('/') && this.props.from.split('/').length === 2 && this.props.from.split('/')[1]) {
      setTimeout(() => {
        this.props.navigation.navigate('circledetail', { id: this.props.from.split('/')[1], circleId: this.props.from.split('/')[1]});
        this.props.updateFrom('')
      }, 500);
    }
  }

  getLocationPermissionAndroid = async (onGranted, onRejected) => {
    try {
      const locationAccess = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (locationAccess === PermissionsAndroid.RESULTS.GRANTED) {
        typeof onGranted === 'function' && onGranted();
      } else {
        typeof onRejected === 'function' && onRejected();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  getLocationPermissionIos = async (onGranted, onRejected) => {
    const locationAccess = await Permissions.request('location');
    if (locationAccess === locationAccess === 'authorized') {
      typeof onGranted === 'function' && onGranted();
    } else {
      typeof onRejected === 'function' && onRejected();
    }
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      this.saveLocation,
      error => console.log(error),
      geoLocationOptions,
    );
  }

  getLocationPermission = (onGranted, onRejected) => {
    const isAndroid = Platform.OS === 'android';
    return isAndroid ? this.getLocationPermissionAndroid(onGranted, onRejected) : this.getLocationPermissionIos(onGranted, onRejected);
  }

  saveLocation = async ({ coords: { latitude, longitude } }) => {
    const { city, country } = await this.getLocaleFromLatLng({ latitude, longitude });
    this.props.updateUserLocation({
      latitude,
      longitude,
      city,
      country,
    });
  }

  getLocaleFromLatLng = ({ latitude, longitude }) => {
    return new Promise((resolve, reject) => {
      Geocoder.geocodePosition({ lat: latitude, lng: longitude }).then((results) => {
        let city, country;
        for (var a = 0 ; a < results.length; a++) {
          if (results[a].locality && results[a].country) {
            city = results[a].locality;
            country = results[a].country;
            resolve({ city, country });
            break;
          }
        }
        reject('No city or country corresponding to latitute and longitude!');
      });
    });
  }
  
  getUserLocation = async ({ useLowAccuracy }) => {
    const options = useLowAccuracy === true ? { ...geoLocationOptions, enableHighAccuracy: false } : geoLocationOptions;
    const onGranted = () => {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const { city, country } = await this.getLocaleFromLatLng({ latitude, longitude });
          this.setDefaultAddress({ latitude, longitude, city, country });
        },
        error => this.handleGPSNotAvailable({ alreadyUsingLowAccuracy: useLowAccuracy, error }),
        options,
      );
    }
 
    this.getLocationPermission(onGranted, this.locationPermissionAlert);
  }

  checkUserInformations = async (shouldLaunchFirstQuery = false) => {
    if (this.props.query.viewer.me && this.props.query.viewer.me.appLanguage && this.props.language !== this.props.query.viewer.me.appLanguage) {
      this.props.updateLocale(this.props.query.viewer.me.appLanguage.toLowerCase())
      I18n.locale = this.props.query.viewer.me.appLanguage.toLowerCase() ;
      moment.locale(this.props.query.viewer.me.appLanguage.toLowerCase())
      this.props.screenProps.updateLanguage(this.props.query.viewer.me.appLanguage.toLowerCase())
    }

    let userLocation
    if (await AsyncStorage.getItem('userLocation'))
      userLocation = JSON.parse(await AsyncStorage.getItem('userLocation')); 

    if (userLocation) {
      this.props.updateUserLocation({
        latitude: userLocation.latitude, 
        longitude: userLocation.longitude, 
        city: userLocation.city,
        country: userLocation.country
      })
      this.props.updateUserCountry(userLocation.country)
      this.props.updateUserCurrency(this.getCountryCurrency(userLocation.country))
      
      if (!this.state.applySavedFilter) {
        if (this.props.selectedKind !== 'Organized') {
          this.props.changePlaceName(userLocation.city);
          this.props.changePlacePosition(userLocation.latitude, userLocation.longitude);
        }
        else if (shouldLaunchFirstQuery)
          this.launchFirstQuery();
      }
    }
    else {
      if (this.props.query.viewer.me && this.props.query.viewer.me.publicAddress && this.props.query.viewer.me.publicAddress.position && this.props.query.viewer.me.publicAddress.position.lat) {
        AsyncStorage.setItem('userLocation', JSON.stringify({
          latitude: this.props.query.viewer.me.publicAddress.position.lat,
          longitude: this.props.query.viewer.me.publicAddress.position.lng,
          city: this.props.query.viewer.me.publicAddress.city,
          country: this.props.query.viewer.me.appCountry ? this.props.query.viewer.me.appCountry : this.props.query.viewer.me.publicAddress.country
        }));
        this.props.updateUserLocation({
          latitude: this.props.query.viewer.me.publicAddress.position.lat, 
          longitude: this.props.query.viewer.me.publicAddress.position.lng, 
          city: this.props.query.viewer.me.publicAddress.city,
          country: this.props.query.viewer.me.appCountry ? this.props.query.viewer.me.appCountry : this.props.query.viewer.me.publicAddress.country
        })
        this.props.updateUserCountry(this.props.query.viewer.me.appCountry ? this.props.query.viewer.me.appCountry : this.props.query.viewer.me.publicAddress.country)
        this.props.updateUserCurrency(this.getCountryCurrency(this.props.query.viewer.me.appCountry ? this.props.query.viewer.me.appCountry : this.props.query.viewer.me.publicAddress.country))

        if (!this.state.applySavedFilter) {
          if (this.props.selectedKind !== 'Organized') {
            this.props.changePlaceName(this.props.query.viewer.me.publicAddress.city);
            this.props.changePlacePosition(this.props.query.viewer.me.publicAddress.position.lat, this.props.query.viewer.me.publicAddress.position.lng);
            this.props.changePlaceRadius(100);
          }
          else if (shouldLaunchFirstQuery)
            this.launchFirstQuery();
        }
      }
      /* else if (!userLocation) {
        this.setState({
          displayAskUserLocation: true,
          isLoading: false
        })
      } */
      else if (shouldLaunchFirstQuery)
        this.launchFirstQuery();
    }
  }

  displayAskUserLocation = () => {
    this.setState({
      displayAskUserLocation: true,
    })
  }

  setDefaultAddress = (userAddress) => {
    const {viewer} = this.props.query
    AsyncStorage.setItem('userLocation', JSON.stringify({
      latitude: userAddress.latitude,
      longitude: userAddress.longitude,
      city: userAddress.city,
      country: userAddress.country
    }));
    // debugger;
    if (this.state.applyingFilter) {
      const newFilter = {
        id: this.state.applyingFilter.id,
        userFilterId: this.state.applyingFilter.id,
        dates: this.state.applyingFilter.dates,
        location: {
          lat: userAddress.latitude,
          lng: userAddress.longitude,
          radius: 200
        },
        sport: this.state.applyingFilter.sport,
        filterName: this.state.applyingFilter.filterName,
        statuses: this.state.applyingFilter.statuses,
        page: this.state.applyingFilter.page
      };

      this.applyDefaultSavedFilter(newFilter)
    }

    this.props.updateUserLocation({
      latitude: userAddress.latitude, 
      longitude: userAddress.longitude, 
      city: userAddress.city,
      country: userAddress.country
    })
    this.props.updateUserCountry(userAddress.country)
    this.props.updateUserCurrency(this.getCountryCurrency(userAddress.country))

    /*this.props.changePlaceName(userAddress.city);
    this.props.changePlacePosition(userAddress.latitude, userAddress.longitude);
    this.props.changePlaceRadius(100);*/

    this.setState({
      displayAskUserLocation: false
    })
    //this.launchFirstQuery();
  }

  getCountryCurrency = countryCode => {
    if (countryCode === 'CH')
      return 'CHF'
    else 
      return 'EUR'
  }

  _changeUserCountry = (e, currency) => {
    if (this.props.query.viewer.me) {
      UpdateCountryMutation.commit({
        userID: this.props.query.viewer.me.id,
        user: {
          appCountry: e,
          appCurrency: currency
        },
      },
      (response) => {
      },
      error => {
        let errors = JSON.parse(error.getError().source);
        console.log(errors);
      });
    };
  }

  _createDefaultFilters = () => {
    let savedFilters = [];
    // debugger;

    if ((this.props.query.viewer && this.props.query.viewer.me && !this.props.query.viewer.me.basicSavedFiltersCreated)) {
      if (this.props.query.viewer.me.savedFilters && this.props.query.viewer.me.savedFilters.length > 0) {
        this.props.query.viewer.me.savedFilters
          .forEach(item => savedFilters.push({
            userFilterId: item.id,
            filterName: item.filterName,
            statuses: item.statuses,
            subAccounts: item.subAccounts.map(user => user.id),
            users: item.users.map(user => user.id),
            sportunityTypes: item.sportunityTypes.map(user => user.id),
            page: item.page,
          }))
      }

      if (this.props.query.viewer.me.profileType === 'PERSON') {
        savedFilters.push({
          filterName: I18n.t('myEvents_defaultFilters_all'),
          statuses: ["Organized","Booked","Invited","CoOrganizer","AskedCoOrganizer", "Survey", "Declined", "Cancelled"],
          subAccounts: [],
          users: [],
          sportunityTypes: [],
          page: 'ORGANIZED',
          canBeDeleted: false
        });
        savedFilters.push({
          filterName: I18n.t('myEvents_defaultFilters_aroundMe'),
          statuses: ["Available"],
          subAccounts: [],
          users: [],
          sportunityTypes: [],
          page: 'ORGANIZED',
          canBeDeleted: false
        });
        if (this.props.query.viewer.me.subAccounts && this.props.query.viewer.me.subAccounts.length > 0) {
          savedFilters.push({
            filterName: I18n.t('myEvents_defaultFilters_children'),
            statuses: ["Invited", "Booked"],
            subAccounts: this.props.query.viewer.me.subAccounts.map(sub => sub.id),
            users: [],
            sportunityTypes: [],
            page: 'ORGANIZED',
            canBeDeleted: false
          });
        }
      }
      else if (this.props.query.viewer.me.profileType === 'ORGANIZATION') {
        let sportunityTypeMatch = this.props.query.viewer.sportunityTypes.find(type => type.name.EN === "Match")
        let sportunityTypeTraining = this.props.query.viewer.sportunityTypes.find(type => type.name.EN === "Training")
        let {canQuerySportunityTypeFilter} = this.props.query.viewer.me
        savedFilters.push({
          filterName: I18n.t('myEvents_defaultFilters_all'),
          statuses: ["Organized","Booked","Invited","CoOrganizer","AskedCoOrganizer", "Survey", "Declined", "Cancelled"],
          subAccounts: [],
          users: [],
          sportunityTypes: [],
          page: 'ORGANIZED',
          canBeDeleted: false
        });
        savedFilters.push({
          filterName: I18n.t('myEvents_defaultFilters_aroundMe'),
          statuses: ["Available"],
          subAccounts: [],
          users: [],
          sportunityTypes: [],
          page: 'ORGANIZED',
          canBeDeleted: false
        });
        // savedFilters.push({
        //   filterName: I18n.t('myEvents_defaultFilters_organized'),
        //   statuses: ["Organized"],
        //   subAccounts: [],
        //   users: [],
        //   sportunityTypes: [],
        //   page: 'ORGANIZED'
        // });
        // if (canQuerySportunityTypeFilter && sportunityTypeMatch)
        //   savedFilters.push({
        //     filterName: I18n.t('myEvents_defaultFilters_competition'),
        //     statuses: ["Organized"],
        //     subAccounts: [],
        //     users: [],
        //     sportunityTypes: [sportunityTypeMatch.id],
        //     page: 'ORGANIZED'
        //   });
        // if (canQuerySportunityTypeFilter && sportunityTypeTraining)
        //   savedFilters.push({
        //     filterName: I18n.t('myEvents_defaultFilters_training'),
        //     statuses: ["Organized"],
        //     subAccounts: [],
        //     users: [],
        //     sportunityTypes: [sportunityTypeTraining.id],
        //     page: 'ORGANIZED'
        //   });
        if (this.props.query.viewer.me.subAccounts && this.props.query.viewer.me.subAccounts.length > 0) {
          savedFilters.push({
            filterName: I18n.t('myEvents_defaultFilters_teams'),
            statuses: ["Organized"],
            subAccounts: this.props.query.viewer.me.subAccounts.map(sub => sub.id),
            users: [],
            sportunityTypes: [],
            page: 'ORGANIZED',
            canBeDeleted: false
          });
        }
        // if (canQuerySportunityTypeFilter && sportunityTypeMatch)
        //   savedFilters.push({
        //     filterName: I18n.t('myEvents_defaultFilters_match'),
        //     statuses: ["Invited"],
        //     subAccounts: [],
        //     users: [],
        //     sportunityTypes: [sportunityTypeMatch.id],
        //     page: 'ORGANIZED'
        //   });
      }
      else if (this.props.query.viewer.me.profileType === 'BUSINESS') {
        savedFilters.push({
          filterName: I18n.t('myEvents_defaultFilters_all'),
          statuses: ["Organized","Booked","Invited","CoOrganizer","AskedCoOrganizer", "Survey", "Declined", "Cancelled"],
          subAccounts: [],
          users: [],
          sportunityTypes: [],
          page: 'ORGANIZED',
          canBeDeleted: false
        });
        savedFilters.push({
          filterName: I18n.t('myEvents_defaultFilters_aroundMe'),
          statuses: ["Available"],
          subAccounts: [],
          users: [],
          sportunityTypes: [],
          page: 'ORGANIZED',
          canBeDeleted: false
        });
        // savedFilters.push({
        //   filterName: I18n.t('myEvents_defaultFilters_organized'),
        //   statuses: ["Organized"],
        //   subAccounts: [],
        //   users: [],
        //   sportunityTypes: [],
        //   page: 'ORGANIZED'
        // });
        if (this.props.query.viewer.me.subAccounts && this.props.query.viewer.me.subAccounts.length > 0) {
          savedFilters.push({
            filterName: I18n.t('myEvents_defaultFilters_subAccounts'),
            statuses: ["Organized"],
            subAccounts: this.props.query.viewer.me.subAccounts.map(sub => sub.id),
            users: [],
            sportunityTypes: [],
            page: 'ORGANIZED',
            canBeDeleted: false
          });
        }
      }

      if (savedFilters.length > 0) {
        this.saveFilters(savedFilters, true, (props) => {
          if (props.query.viewer.me.savedFilters.length > 0) {
            let defaultFilter = props.query.viewer.me.savedFilters.find(filter => filter.filterName === I18n.t('myEvents_defaultFilters_all'))
            if (defaultFilter) {
              this.setDefaultFilter(defaultFilter.id, () => {
                setTimeout(() => this.applyDefaultSavedFilter(this.props.query.viewer.me.defaultSavedFilter), 50);
              })
            }
          }
        });
      }
    }

    if (!this.props.query.viewer.me) {
      let defaultFilters = []
      defaultFilters.push({
        id: 'myEvents_defaultFilters_all',
        type: 'default',
        filterName: I18n.t('myEvents_defaultFilters_all'),
        statuses: ["Organized","Booked","Invited","CoOrganizer","AskedCoOrganizer", "Survey", "Declined", "Cancelled"],
        subAccounts: [],
        users: [],
        sportunityTypes: [],
        page: 'ORGANIZED'
      });
      defaultFilters.push({
        id: 'myEvents_defaultFilters_aroundMe',
        type: 'default',
        filterName: I18n.t('myEvents_defaultFilters_aroundMe'),
        statuses: ["Available"],
        subAccounts: [],
        users: [],
        sportunityTypes: [],
        page: 'ORGANIZED'
      });

      AsyncStorage.setItem('defaultFilters', JSON.stringify({ filters: defaultFilters }));
    }
    else {
      AsyncStorage.removeItem('defaultFilters')
    }
  }
  
  saveFilters = (filtersArray, basicSavedFiltersCreated = false, callback) => {
    const userID = this.props.query.viewer.me.id;
    const viewer = this.props.query.viewer ;
    
    SaveFilterMutation.commit(
      basicSavedFiltersCreated 
      ? {
        userID: userID,
        user: {
          savedFilters: filtersArray,
          basicSavedFiltersCreated: basicSavedFiltersCreated
        }
      }
      : {
        userID: userID,
        user: {
          savedFilters: filtersArray,
        }
      },
      () => {
        if (typeof callback !== 'undefined') 
          setTimeout(() => callback(this.props), 150);
        else
          Toast.show(I18n.t('filterSuccess'));
      },
      error => {
        // this.toggleLoading(false);
        let errors = JSON.parse(error.getError().source);
        console.log(errors);
      });
  }

  setDefaultFilter = (filterId, callback) => {
    const userID = this.props.query.viewer.me.id;
    const filterIDVar = filterId ;
    const viewer = this.props.query.viewer ;
    
    SetDefaultFilterMutation.commit({
      userID,
      filterIDVar,
    },
    () => {
      // this.toggleLoading(false);
      if (typeof callback !== 'undefined') 
        callback() ;
      else
        Toast.show(I18n.t('filterSuccess'));
    },
    error => {
      // this.toggleLoading(false);
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  launchFirstQuery = () => {
    if (!this.state.displayAskUserLocation) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true,
        filter: {status: 'Available'},
        orderBy: 'BEGINNING_DATE_ASC'
      });
      this.props.relay.refetch(
        refetchVariables,
        null,
        () => {
          setTimeout(() => {// Needed to wait for Relay to re-fetch data in this.props.query.viewer
            this.setState({isLoading: false})
        }, 50);
        },
        {force: false}
      );
    }
  }

  applyDefaultSavedFilter = (filterP) => {
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
      addCircleFilter,
      changeSportunityTypesFilter,
      applySavedFilter,
      filterApplied,
    } = this.props ;

    clearFilters();
    this.setState({
      displayAskUserLocation: false,
      applyingFilter: null
    })
    
    const filter = cloneDeep(filterP);
    const isLocationFilterApplied = filterApplied === I18n.t('myEvents_defaultFilters_aroundMe');

    if ((filter.status && filter.status === 'Available') || (filter.statuses && filter.statuses.indexOf('Available') >= 0)) {
      if (!!filter.location && !!filter.location.lat) {
        filter.location.lat && filter.location.lng && changePlacePosition(filter.location.lat, filter.location.lng);
        if (filter.location.radius)
          changePlaceRadius(filter.location.radius);
        else {
          filter.location.radius = 200; 
          changePlaceRadius(200);
        }
      }
      else if (!isLocationFilterApplied && this.props.userLocation && this.props.userLocation.latitude) {
        changePlacePosition(this.props.userLocation.latitude, this.props.userLocation.longitude);
        changePlaceRadius(200);
        filter.location = {
          lat: this.props.userLocation.latitude,
          lng: this.props.userLocation.longitude,
          radius: 200

        }
        this.setState({ applyingFilter: filter });
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

    filter.dates && filter.dates.from && filter.dates.to && changeFilterDates({from: filter.dates.from, to: filter.dates.to});

    filter.sport && filter.sport[0] && filter.sport[0].sport &&
      addSportFilter({
        sportID: filter.sport[0].sport.id,
        level: filter.sport[0].levels && filter.sport[0].levels.length > 0
          ? filter.sport[0].levels.map(level => level.id)
          : filter.sport[0].sport.levels.map(level => level.id)
      })

    filter.statuses && changeStatusFilter(filter.statuses)

    filter.subAccounts && filter.subAccounts.forEach(subAccount => addSubAccountFilter(subAccount.id))

    filter.circles && filter.circles.edges && filter.circles.edges.forEach(edge => addCircleFilter(edge.node.id))

    filter.sportunityTypes && filter.sportunityTypes.length > 0 && changeSportunityTypesFilter(filter.sportunityTypes.map(type => type.id))

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
          filter.filterName && applySavedFilter(filter);
        }
      })
    }
    else {
      filter.filterName && applySavedFilter(filter);
    }
    this.updateFilter(filter)
  }

  loadMore = () => {
    
    this.setState({isLoadingMore: true})
    const refetchVariables = fragmentVariables => {
      return ({
      ...this.context.relay.variables,
      count: this.state.count + 10,
      query: true,
    })};
    this.props.relay.refetch(
      refetchVariables,
      null,
      () => {
        this.setState({isLoadingMore: false})
      },
      {force: false}
    );
    this.setState({count: this.state.count + 10})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language && this.props.query.viewer.me && this.props.query.viewer.me.appLanguage.toUpperCase() !== nextProps.language.toUpperCase()) {
      UpdateLanguageMutation.commit({
        user: {
          appLanguage: nextProps.language.toUpperCase()
        },
        userID: this.props.query.viewer.me.id,
      },
      () => {
        console.log('Ok')
      },
      (err) => {
        console.log("Ko", err)
      },
      )
    }
    //this.updateFilter(this.props, nextProps)
  }

  handleScrollLoad = () => {
    if (this.props.selectedKind === 'Organized' && this.context.relay.variables.filter.status === 'Available') {
      let newFilter = {
        statuses: ['Booked', 'Organized', 'Invited', 'Declined', 'CoOrganizer', 'AskedCoOrganizer','Cancelled']
      }

      this.setState({isLoading: true})
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true,
        filter: newFilter,
        orderBy: 'BEGINNING_DATE_ASC'
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null, 
        () => {
          setTimeout(() => {// Needed to wait for Relay to re-fetch data in this.props.query.viewer
            this.setState({isLoading: false})
        }, 50);
        }, 
        {force: false}
      );
    }
    else {
      this.props.relay.refetch(
        this.context.relay.variables,
        null,
        () => this.setState({isLoading: false}),
        {force: false}
      );
    }
  }

  updateFilter(filter) {
    // apply new filter 
      this.setState({applySavedFilter: false})
      
      let statusFilter = 'Organized'
      let orderBy = 'BEGINNING_DATE_ASC';

      let newFilter = cloneDeep(Object.assign({}, filter));

      if (filter.selectedStatus)  {
        statusFilter = filter.selectedStatus;
        newFilter = cloneDeep(Object.assign({statuses: statusFilter}, filter));

        if (statusFilter && (statusFilter.length === 1 && 
					(statusFilter[0] === 'Past' || statusFilter[0] === 'Cancelled') || 
          (statusFilter.length === 2 && (statusFilter.indexOf('Past') >= 0 && statusFilter.indexOf('Cancelled') >= 0))))
          orderBy = 'BEGINNING_DATE_DESC'
      }
      if (filter.statuses && (filter.statuses.length === 1 && 
        (filter.statuses[0] === 'Past' || filter.statuses[0] === 'Cancelled') || 
        (filter.statuses.length === 2 && (filter.statuses.indexOf('Past') >= 0 && filter.statuses.indexOf('Cancelled') >= 0)))) {
        
        orderBy = 'BEGINNING_DATE_DESC'
      }
      
      if (!newFilter.sport || !newFilter.sport.length) delete newFilter.sport

      if (!newFilter.dates || newFilter.dates.to === null) delete newFilter.dates
      if (newFilter.location && newFilter.location.name) delete newFilter.location.name;
      if ((newFilter.location && (newFilter.location.lat === null || newFilter.location.lng === null)) || !newFilter.location) delete newFilter.location

      if (newFilter.ageRestriction && newFilter.ageRestriction.from === 0 && newFilter.ageRestriction.to === 100) delete newFilter.ageRestriction;

      if (newFilter.sexRestriction === null) delete newFilter.sexRestriction;

      if (newFilter.users && newFilter.users.length === 0) delete newFilter.users;

      if (newFilter.selectedStatus) delete newFilter.selectedStatus   

      if (!!newFilter.userFilterId || newFilter.userFilterId === null) delete newFilter.userFilterId
      if (!!newFilter.id || newFilter.id === null) delete newFilter.id

      if (newFilter.circles && newFilter.circles.length === 0) 
        delete newFilter.circles
      else if (newFilter.circles && newFilter.circles.edges)
        newFilter.circles = newFilter.circles.edges.map(edge => edge.node.id)
      else 
        delete newFilter.circles

      if (newFilter.subAccounts && newFilter.subAccounts.length === 0) 
        delete newFilter.subAccounts
      else if (newFilter.subAccounts && newFilter.subAccounts.length > 0)
        newFilter.subAccounts = newFilter.subAccounts.map(subAccount => subAccount.id)

      if (newFilter.sportunityTypes && newFilter.sportunityTypes.length > 0) 
        newFilter.sportunityTypes = newFilter.sportunityTypes.map(type => type.id)
      //delete newFilter.sportunityTypes

      if (newFilter.filterName) delete newFilter.filterName 
      if (newFilter.id) delete newFilter.id
      if (newFilter.page) delete newFilter.page
      if (newFilter.type) delete newFilter.type; 

      if (!isEqual(newFilter, this.props.variables.filter)) {
        
        this.setState({isLoading: true})
        const refetchVariables = fragmentVariables => ({
          ...fragmentVariables,
          query: true,
          filter: newFilter,
          orderBy
        });
        
        this.props.relay.refetch(
          refetchVariables,
          null, 
          () => {
            this.setState({isLoading: false})
            setTimeout(() => {// Needed to wait for Relay to re-fetch data in this.props.query.viewer
              const refetchVariables = fragmentVariables => ({
                ...this.context.relay.variables,
                count: 10
              });
              this.props.relay.refetch(
                refetchVariables,
                null, 
                () => {
                    this.setState({count: 10})
                }, 
                {force: false}
              );
            }, 50);
          }, 
          {force: false}
        );
      }
   // }
  }

  render(){
    const { viewer:{ sportunities, me }, viewer } = this.props.query;
    const { selectedKind } = this.props; 

    return (
      <SportunityPage
        isLoadingFilter={this.state.isLoading}
        isLoadingMore={this.state.isLoadingMore}
        showTabBar={true}
        handleScrollLoad={this.handleScrollLoad}
        loadMore={this.loadMore}
        sportunities={sportunities || null}
        selectedKind={selectedKind}
        count={this.state.count}
        viewer={viewer}
        displayAskUserLocation={this.state.displayAskUserLocation}
        onDisplayAskUserLocation={this.displayAskUserLocation}
        setDefaultAddress={this.setDefaultAddress}
        navigation={this.props.navigation}
        onApplyFilter={this.applyDefaultSavedFilter}
        showSwipeTutorial={this.state.showSwipeTutorial}
      />
    );
  }
}

const stateToProps = (state) => ({
  selectedKind: state.sportunityList.selectedKind,
  filters: state.filtersState.filters,
  sportFilters: state.filtersState.filters.sport,
  sportLocation: state.filtersState.filters.location,
  from: state.sportunityProfile.from,
  popupCompleteProfileIsDiplayed: state.sportunityProfile.popupCompleteProfileIsDiplayed,
  language: state.sportunityLocale.language,
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
  userLocation: state.sportunityLocale.userLocation,
  filterApplied: state.filtersState.appliedFilterName,
});

const dispatchToProps = (dispatch) => ({
  updateFrom: bindActionCreators(updateFrom, dispatch),
  updatePopupCompleteProfileIsDiplayed: bindActionCreators(updatePopupCompleteProfileIsDiplayed, dispatch),
  updateLocale: bindActionCreators(updateLocale, dispatch),
  updateUserCountry: bindActionCreators(updateUserCountry, dispatch),
  updateUserCurrency: bindActionCreators(updateUserCurrency, dispatch),
  updateUserLocation: bindActionCreators(updateUserLocation, dispatch),
  changeKind: (kind) => dispatch(change(kind)),
  changeFilterDates: bindActionCreators(changeFilterDates, dispatch),
  addSportFilter: bindActionCreators(addSportFilter, dispatch),
  changePlaceRadius: bindActionCreators(changePlaceRadius, dispatch),
  changePlacePosition: bindActionCreators(changePlacePosition, dispatch),
  changePlaceName: bindActionCreators(changePlaceName, dispatch),
  clearFilters: bindActionCreators(clearFilters, dispatch),
  changeFilterPrice: bindActionCreators(changeFilterPrice, dispatch),
  applySavedFilter: bindActionCreators(applySavedFilter, dispatch),
  changeStatusFilter: bindActionCreators(changeStatusFilter, dispatch),
  addSubAccountFilter: bindActionCreators(addSubAccountFilter, dispatch),
  addCircleFilter: bindActionCreators(addCircleFilter, dispatch),
  changeSportunityTypesFilter: bindActionCreators(changeSportunityTypesFilter, dispatch)
});

const SportunitiesPageTemp = createRefetchContainer(
  withNavigation(connect(stateToProps, dispatchToProps)(SportunityPageView)), 
  graphql`
    fragment SportunityPageContainer_query on Query  
      @argumentDefinitions(
        query: {type: "Boolean!", defaultValue: false},
        count: {type: "Int!", defaultValue: 5},
        filter: {type: Filter},
        orderBy: {type: Sportunities_Order}
      )
      {
        viewer {
          ...SportunityPage_viewer
          sportunityTypes (sportType: COLLECTIVE){
            id
            name{FR,EN}
          }
          sportunities (first: $count, filter: $filter, orderBy: $orderBy) @include(if: $query){
            count
            ...SportunityPage_sportunities
          }
          me {
            id,
            appLanguage
            appCountry
            appCurrency
            avatar
            profileType
            publicAddress {
              city, 
              country,
              position {
                lat,
                lng
              }
            }
            subAccounts {
              id,
              pseudo
            }
            basicSavedFiltersCreated
            savedFilters {
              id
              page
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
              location {
                lat,
                lng, 
                radius
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
            }
            defaultSavedFilter {
              id
              filterName
              status
              statuses
              page
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
            sports {
              sport {
                id
              }
            },
          }
        }
      }
    `,
    graphql`
      query SportunityPageContainerRefetchQuery ($count: Int!, $filter: Filter, $orderBy: Sportunities_Order, $query: Boolean!) {
        ...SportunityPageContainer_query @arguments(count: $count, filter: $filter, orderBy: $orderBy, query: $query)
      }
    `
)

export default class extends Component {
  /*static navigationOptions = {
    header: null
  };*/
  
  render() {
    let variables = {
      count: 5,
      filter: null,
      orderBy: 'BEGINNING_DATE_ASC',
      query: false
    }
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SportunityPageContainerQuery($count: Int!, $filter: Filter, $orderBy: Sportunities_Order, $query: Boolean!) {
            ...SportunityPageContainer_query @arguments(count: $count, filter: $filter, orderBy: $orderBy, query: $query)
          }
        `}
        variables={variables}
        render={({error, props}) => {
          if (props) {
            return <SportunitiesPageTemp query={props} {...this.props} variables={variables}/>;
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

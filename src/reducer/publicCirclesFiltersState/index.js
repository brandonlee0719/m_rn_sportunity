import {
    PUBLIC_CIRCLES_FILTER_ADD_SPORT,
    PUBLIC_CIRCLES_FILTER_REMOVE_SPORT,
    PUBLIC_CIRCLES_FILTER_CLEAR_SPORT,
    PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_RADIUS,
    PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_POSITION,
    PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_NAME,
    PUBLIC_CIRCLES_FILTER_CLEAR_PLACE,
    PUBLIC_CIRCLES_FILTER_CLEAR_ALL,
    PUBLIC_CIRCLES_FILTER_CHANGE_TYPE, 
    PUBLIC_CIRCLES_FILTER_CHANGE_NAME, 
    PUBLIC_CIRCLES_FILTER_UPDATE_STATUS,
    PUBLIC_CIRCLES_FILTER_CHANGE_CIRCLE_TYPE,
    PUBLIC_CIRCLES_FILTER_APPLY_SAVED_FILTER,
    PUBLIC_CIRCLES_FILTER_ADD_SUBACCOUNT,
    PUBLIC_CIRCLES_FILTER_REMOVE_SUBACCOUNT,
    PUBLIC_CIRCLES_FILTER_CLEAR_SUBACCOUNTS,
    PUBLIC_CIRCLES_FILTER_APPLY_PUBLIC_FILTER, 
  } from '../../action/publicCirclesFiltersStateActions';
import { merge, cloneDeep, isEqual } from 'lodash';
  
const initialState = {
    isFilterActive: false,
    filters: {
      circleType: [], 
      type: null,
      nameCompletion: null,
      location: {
        lat: null,
        lng: null,
        radius: 100,
        name:null
      },
      sport: [
      ],
      users: []
    },
    appliedCircleFilterName: null,
    appliedCircleFilterId: null,
    shouldOpenCirclesOnPublicFilter: false
};

export default (state = initialState, action) => {
  
  switch (action.type) {
  
  
      // clear all filter
      case PUBLIC_CIRCLES_FILTER_CLEAR_ALL: {
        let newState = cloneDeep(state)
        newState.filters.location = { lat: null, lng: null, radius: 100, name:null}
        newState.filters.sport = []
        newState.filters.users = []
        newState.filters.type = null; 
        newState.filters.nameCompletion = null;
        newState.filters.circleType = [];
        newState.isFilterActive = false;
        newState.appliedCircleFilterName = null;
        newState.appliedCircleFilterId = null
        return newState
      }
  
      case PUBLIC_CIRCLES_FILTER_UPDATE_STATUS: {
        let newState = cloneDeep(state)
        
        if (isEqual(newState.filters, initialState.filters))
          newState.isFilterActive = false;
        else
          newState.isFilterActive = true;

        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;
        
          return newState
      }

      case PUBLIC_CIRCLES_FILTER_CHANGE_CIRCLE_TYPE: {
        let newState = cloneDeep(state);
        newState.filters.circleType = cloneDeep(action.value)
        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;

        return newState
      }

      // ------------------------------ TYPE -------------------------- //
      case PUBLIC_CIRCLES_FILTER_CHANGE_TYPE: {
        let newState = cloneDeep(state);
        newState.filters.type = action.value
        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;

        return newState
      }

      // ------------------------------ NAME -------------------------- //
      case PUBLIC_CIRCLES_FILTER_CHANGE_NAME: {
        let newState = cloneDeep(state);
        newState.filters.nameCompletion = action.value

        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;

        return newState
      }

      // ------------------------------ SUBACCOUNTS -------------------------- //
      case PUBLIC_CIRCLES_FILTER_ADD_SUBACCOUNT: {
        let newState = cloneDeep(state);
        newState.filters.users.push(action.value)
        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;

        return newState
      }
      case PUBLIC_CIRCLES_FILTER_REMOVE_SUBACCOUNT: {
        let newState = cloneDeep(state);
        let index = newState.filters.users.indexOf(action.value);
        if (index >= 0)
          newState.filters.users.splice(index, 1)
        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;

        return newState
      }
      case PUBLIC_CIRCLES_FILTER_CLEAR_SUBACCOUNTS: {
        let newState = cloneDeep(state);
        newState.filters.users = [];
        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;

        return newState
      }
  
      // ------------------------------ LOCATION -------------------------- //
  
      // change place radius
      case PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_RADIUS: {
        const { radius } = action
        let newState = cloneDeep(state)
        newState.filters.location.radius = radius
        if (radius !== initialState.filters.location.radius)
          newState.isFilterActive = true

        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;
  
        return newState
      }
  
      // change place position (lat and lng)
      case PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_POSITION: {
        const { lat, lng } = action
        let newState = cloneDeep(state)
        newState.filters.location.lat = lat
        newState.filters.location.lng = lng
        newState.isFilterActive = true
        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;
  
        return newState
      }
  
      // change place name
      case PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_NAME: {
        const { name } = action
        let newState = cloneDeep(state)
        newState.filters.location.name = name
        newState.isFilterActive = true

        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;
  
        return newState
      }
  
      // clear place filter
      case PUBLIC_CIRCLES_FILTER_CLEAR_PLACE: {
        let newState = cloneDeep(state)
        newState.filters.location = { lat: null, lng: null, radius: 100, name:null}
  
        if (isEqual(newState.filters, initialState.filters))
          newState.isFilterActive = false

        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;
  
        return newState
      }
  
      // ------------------------------ SPORT -------------------------- //
  
      // add sport
      case PUBLIC_CIRCLES_FILTER_ADD_SPORT:
        return merge({}, 
          state, 
          {isFilterActive: true}, 
          // {appliedCircleFilterName: null},
          // {appliedCircleFilterId: null},
          {filters: { sport: [...state.filters.sport, action.sportFilter] }}
        );
      
      // remove sport
      case PUBLIC_CIRCLES_FILTER_REMOVE_SPORT: {
        const { sportFilterIndex } = action;
        let newState = cloneDeep(state);
        // remove the sport filter from the array by its index
        newState.filters.sport.splice(sportFilterIndex, 1);
      // newState.appliedCircleFilterName = null;
      // newState.appliedCircleFilterId = null;

        return newState
      }
  
      // clear sport
      case PUBLIC_CIRCLES_FILTER_CLEAR_SPORT: {
        let newState = cloneDeep(state);
        newState.filters.sport = [];
  
        if (isEqual(newState.filters, initialState.filters))
          newState.isFilterActive = false

        // newState.appliedCircleFilterName = null;
        // newState.appliedCircleFilterId = null;
  
        return newState;
      }

      case PUBLIC_CIRCLES_FILTER_APPLY_SAVED_FILTER: {
        let newState = cloneDeep(state);
        newState.appliedCircleFilterName = action.filter.filterName;
        newState.appliedCircleFilterId = action.filter.id;
        newState.isFilterActive = true
        return newState;
      }

      case PUBLIC_CIRCLES_FILTER_APPLY_PUBLIC_FILTER: {
        let newState = cloneDeep(state);
        newState.shouldOpenCirclesOnPublicFilter = action.shouldOpenCirclesOnPublicFilter
        return newState;
      }

      default: {
        return state;
      }
  
    }
};
  
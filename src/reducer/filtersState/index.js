import {
  FILTER_CHANGE_DATE,
  FILTER_CHANGE_HOUR,
  FILTER_CHANGE_PRICE,
  FILTER_CHANGE_PLACE_RADIUS,
  FILTER_CHANGE_PLACE_POSITION,
  FILTER_CHANGE_PLACE_NAME,
  FILTER_ADD_SPORT,
  FILTER_REMOVE_SPORT,
  FILTER_CLEAR_SPORT,
  FILTER_CLEAR_DATE,
  FILTER_CLEAR_PLACE,
  FILTER_CLEAR_ALL,
  UPDATE_FILTER_STATUS,
  FILTER_CHANGE_SEX_RESTRICTION,
  FILTER_CHANGE_AGE_RESTRICTION,
  FILTER_CLEAR_RESTRICTIONS,
  FILTER_ADD_CIRCLE,
  FILTER_REMOVE_CIRCLE,
  FILTER_CLEAR_CIRCLES,
  FILTER_ADD_SUBACCOUNT,
  FILTER_REMOVE_SUBACCOUNT,
  FILTER_CLEAR_SUBACCOUNTS,
  FILTER_APPLY_SAVED_FILTER,
  FILTER_UPDATE_APPLIED_FILTER_NAME,
  FILTER_REMOVE_APPLIED_SAVED_FILTER,
  FILTER_CHANGE_SELECTED_STATUS,
  FILTER_CHANGE_SELECTED_SPORTUNITY_TYPES,
  FILTER_CLEAR_SELECTED_STATUS
} from '../../action/FiltersStateActions';
import { merge, cloneDeep, isEqual } from 'lodash';

const initialState = {
  isFilterActive: false,
  filters: {
    location: {
      lat: null,
      lng: null,
      radius: 100,
      name:null
    },
    sport: [
    ],
    // price: {
    //   // from: int
    //   // to: int
    // },
    dates: {
      from: null,
      to: null
    },
    users: [],
    circles: [],
    sexRestriction: null,
    ageRestriction: {from: 0, to: 100},
    selectedStatus: ['Booked', 'Organized', 'Invited', 'Declined', 'CoOrganizer', 'AskedCoOrganizer', 'Cancelled'],
    sportunityTypes: [],
    subAccounts: [],
    // hours: {
    //   // from: int
    //   // to: int
    // },
    // filterCircles: []
  },
  savedFilters: [
    // { id: 1, caption: 'Beach Volley' },
  ],
  appliedFilterName: null,
  appliedFilterId: null
};

export default (state = initialState, action) => {
  switch (action.type) {


    // ------------------------------ ALL -------------------------- //

    // clear all filter
    case FILTER_CLEAR_ALL: {
      let newState = cloneDeep(state)
      newState.filters.location = { lat: null, lng: null, radius: 100, name:null}
      newState.filters.dates = { from: null, to :null }
      newState.filters.sport = []
      newState.isFilterActive = false
      newState.filters.sexRestriction = null;
      newState.filters.ageRestriction = {from: 0, to: 100};
      newState.filters.users = [];
      newState.appliedFilterName= null;
      newState.appliedFilterId = null;
      newState.filters.selectedStatus = ['Booked', 'Organized', 'Invited', 'Declined', 'CoOrganizer', 'AskedCoOrganizer', 'Cancelled'];
      newState.filters.sportunityTypes = [];
      newState.filters.subAccounts = [];
      newState.filters.circles = [];
      return newState
    }

    case UPDATE_FILTER_STATUS: {
      let newState = cloneDeep(state)
      if (isEqual(newState.filters, initialState.filters) && state.appliedFilterName === null)
        newState.isFilterActive = false;
      else
        newState.isFilterActive = true;

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;
        
      return newState
    }

    // ------------------------------ DATE -------------------------- //

    // change date
    case FILTER_CHANGE_DATE: {
      //const newDates = {filters: { dates: action.changedDates }};
      let newState = cloneDeep(state)
      newState.filters.dates = action.changedDates;
      newState.isFilterActive = true
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      //return merge({}, state, newDates);
      return newState
    }
    // clear date
    case FILTER_CLEAR_DATE: {
      //let newDates = {filters: { dates: {from: null, to :null} }};
      let newState = cloneDeep(state)
      newState.filters.dates = {from: null, to :null}
      if (isEqual(newState, initialState.filters))
        newDates.isFilterActive = false

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      //return merge({}, state, newDates);
      return newState;
    }

    // ------------------------------ HOUR -------------------------- //

    // change hour
    case FILTER_CHANGE_HOUR: {
      const { changedHours } = action;
      return {
        ...state,
        minHour: changedHours[0],
        maxHour: changedHours[1],
        appliedFilterName: null,
        appliedFilterId: null,
      };
    }

    // ------------------------------ PRICE -------------------------- //

    case FILTER_CHANGE_PRICE: {
      const { changedPrices } = action;
      return {
        ...state,
        appliedFilterName: null,
        appliedFilterId: null,
        minHour: changedPrices[0],
        maxHour: changedPrices[1],
      };
    }

    // ------------------------------ LOCATION -------------------------- //

    // change place radius
    case FILTER_CHANGE_PLACE_RADIUS: {
      const { radius } = action
      let newState = cloneDeep(state)
      newState.filters.location.radius = radius
      if (radius !== initialState.filters.location.radius)
        newState.isFilterActive = true
      
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState
    }

    // change place position (lat and lng)
    case FILTER_CHANGE_PLACE_POSITION: {
      const { lat, lng } = action
      let newState = cloneDeep(state)
      newState.filters.location.lat = lat
      newState.filters.location.lng = lng
      newState.isFilterActive = true
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState
    }

    // change place name
    case FILTER_CHANGE_PLACE_NAME: {
      const { name } = action
      let newState = cloneDeep(state)
      newState.filters.location.name = name
      newState.isFilterActive = true
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState
    }

    // clear place filter
    case FILTER_CLEAR_PLACE: {
      let newState = cloneDeep(state)
      newState.filters.location = { lat: null, lng: null, radius: 100, name:null}

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;
      return newState
    }

    // ------------------------------ SPORT -------------------------- //

    // add sport
    case FILTER_ADD_SPORT:
      return merge({}, 
        state, 
        {isFilterActive: true}, 
        {appliedFilterName:null},
        {appliedFilterId: null},
        {filters: { sport: [...state.filters.sport, action.sportFilter] }}
      );
    
    // remove sport
    case FILTER_REMOVE_SPORT: {
      const { sportFilterIndex } = action;
      let newState = cloneDeep(state);
      // remove the sport filter from the array by its index
      newState.filters.sport.splice(sportFilterIndex, 1);
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;
      return newState
    }

    // clear sport
    case FILTER_CLEAR_SPORT: {
      let newState = cloneDeep(state);
      newState.filters.sport = [];

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState;
    }

    // --------------------------- RESTRICTIONS ---------------------------//
    case FILTER_CHANGE_SEX_RESTRICTION: {
      const {sexRestriction} = action ;
      let newState = cloneDeep(state);
      newState.filters.sexRestriction = sexRestriction;
      newState.isFilterActive = true
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;
      return newState ;
    }
    case FILTER_CHANGE_AGE_RESTRICTION: {
      const {ageRestriction} = action;
      let newState = cloneDeep(state);
      newState.filters.ageRestriction = ageRestriction;
      newState.isFilterActive = true
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;
      return newState ;
    }
    case FILTER_CLEAR_RESTRICTIONS: {
      let newState = cloneDeep(state);
      newState.filters.ageRestriction = {from: 0, to: 100};
      newState.filters.sexRestriction = null;

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState ;
    }

    // ---------------------------CIRCLES ---------------------------//
    case FILTER_ADD_CIRCLE: {
      return merge({}, state, {isFilterActive: true}, {filters: { circles: [...state.filters.circles, action.user] }});
    }
    case FILTER_REMOVE_CIRCLE: {
      const { user } = action;
      let newState = cloneDeep(state);
      let optionIndex = newState.filters.circles && newState.filters.circles.findIndex(userId => user === userId) ;    
      newState.filters.circles.splice(optionIndex, 1);
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;
      return newState
    }
    case FILTER_CLEAR_CIRCLES: {
      let newState = cloneDeep(state);
      newState.filters.circles = [];

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false
      
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState;
    }

    // ---------------------------SUBACCOUNTS ---------------------------//
    case FILTER_ADD_SUBACCOUNT: {
      if (state.filters.subAccounts.indexOf(action.user) < 0) {
        return merge(
          {}, 
          state, 
          {isFilterActive: true}, 
          {filters: { subAccounts: [...state.filters.subAccounts, action.user] }},
          {appliedFilterName: null},
          {appliedFilterId: null}
        );
      }
      else return state;
    }
    case FILTER_REMOVE_SUBACCOUNT: {
      const { user } = action;
      let newState = cloneDeep(state);
      let optionIndex = newState.filters.subAccounts && newState.filters.subAccounts.findIndex(userId => user === userId) ;    
      newState.filters.subAccounts.splice(optionIndex, 1);
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState
    }
    case FILTER_CLEAR_SUBACCOUNTS: {
      let newState = cloneDeep(state);
      newState.filters.subAccounts = [];

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false
      
      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState;
    }

    // ---------------------------SAVED FILTERS ---------------------------//
    case FILTER_APPLY_SAVED_FILTER: {
      let newState = cloneDeep(state);
      newState.appliedFilterName = action.filter.filterName;
      newState.appliedFilterId = action.filter.id;
      newState.isFilterActive = true
      return newState;
    }

    case FILTER_UPDATE_APPLIED_FILTER_NAME: {
      let newState = cloneDeep(state);
      newState.appliedFilterName = action.name;

      return newState;
    }
    
    case FILTER_REMOVE_APPLIED_SAVED_FILTER: {
      let newState = cloneDeep(state);
      newState.appliedFilterName = null;
      newState.appliedFilterId= null;

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false

      return newState;
    }

    // --------------------------- STATUS FILTERS ---------------------------//
    case FILTER_CHANGE_SELECTED_STATUS: {
      let newState = cloneDeep(state);
      newState.filters.selectedStatus = action.selectedStatus
      if (action.selectedStatus !== initialState.filters.selectedStatus)
        newState.isFilterActive = true

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState;
    }
    case FILTER_CLEAR_SELECTED_STATUS: {
      let newState = cloneDeep(state);
      newState.filters.selectedStatus = ['Booked', 'Organized', 'Invited', 'Declined', 'CoOrganizer', 'AskedCoOrganizer', 'Cancelled'];

      if (isEqual(newState.filters, initialState.filters))
        newState.isFilterActive = false;

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState;
    }

    // ------------------------ SPORTUNITY TYPES FILTERS ---------------------------//
    case FILTER_CHANGE_SELECTED_SPORTUNITY_TYPES: {
      let newState = cloneDeep(state);
      newState.filters.sportunityTypes = action.sportunityTypes
      if (action.sportunityTypes !== initialState.filters.sportunityTypes)
        newState.isFilterActive = true

      newState.appliedFilterName = null;
      newState.appliedFilterId = null;

      return newState;
    }
    

    default: {
      return state;
    }
  }
};

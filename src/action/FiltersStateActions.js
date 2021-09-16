// Actions Names
export const FILTER_CHANGE_DATE = 'FILTER_CHANGE_DATE';
export const FILTER_CHANGE_HOUR = 'FILTER_CHANGE_HOUR';
export const FILTER_CHANGE_PRICE = 'FILTER_CHANGE_PRICE';
export const FILTER_CHANGE_PLACE_RADIUS = 'FILTER_CHANGE_PLACE_RADIUS';
export const FILTER_ADD_SPORT = 'FILTER_ADD_SPORT';
export const FILTER_REMOVE_SPORT = 'FILTER_REMOVE_SPORT';
export const FILTER_CLEAR_SPORT = 'FILTER_CLEAR_SPORT';
export const FILTER_CLEAR_DATE = 'FILTER_CLEAR_DATE';
export const FILTER_CHANGE_PLACE_POSITION = 'FILTER_CHANGE_PLACE_POSITION';
export const FILTER_CHANGE_PLACE_NAME = 'FILTER_CHANGE_PLACE_NAME';
export const FILTER_CLEAR_PLACE = 'FILTER_CLEAR_PLACE';
export const FILTER_CLEAR_ALL = 'FILTER_CLEAR_ALL';
export const UPDATE_FILTER_STATUS = 'UPDATE_FILTER_STATUS';
export const FILTER_CHANGE_SEX_RESTRICTION = 'FILTER_CHANGE_SEX_RESTRICTION';
export const FILTER_CHANGE_AGE_RESTRICTION = 'FILTER_CHANGE_AGE_RESTRICTION';
export const FILTER_CLEAR_RESTRICTIONS = 'FILTER_CLEAR_RESTRICTIONS';
export const FILTER_ADD_CIRCLE = 'FILTER_ADD_CIRCLE';
export const FILTER_REMOVE_CIRCLE = 'FILTER_REMOVE_CIRCLE';
export const FILTER_CLEAR_CIRCLES = 'FILTER_CLEAR_CIRCLES';
export const FILTER_ADD_SUBACCOUNT = 'FILTER_ADD_SUBACCOUNT';
export const FILTER_REMOVE_SUBACCOUNT = 'FILTER_REMOVE_SUBACCOUNT';
export const FILTER_CLEAR_SUBACCOUNTS = 'FILTER_CLEAR_SUBACCOUNTS';
export const FILTER_APPLY_SAVED_FILTER = 'FILTER_APPLY_SAVED_FILTER';
export const FILTER_UPDATE_APPLIED_FILTER_NAME = 'FILTER_UPDATE_APPLIED_FILTER_NAME';
export const FILTER_REMOVE_APPLIED_SAVED_FILTER = 'FILTER_REMOVE_APPLIED_SAVED_FILTER';
export const FILTER_CHANGE_SELECTED_STATUS = 'FILTER_CHANGE_SELECTED_STATUS';
export const FILTER_CHANGE_SELECTED_SPORTUNITY_TYPES = 'FILTER_CHANGE_SELECTED_SPORTUNITY_TYPES';
export const FILTER_CLEAR_SELECTED_STATUS = 'FILTER_CLEAR_SELECTED_STATUS';


// Actions Creators


// ------------------------------ ALL -------------------------- //

export const clearFilters = () => ({
  type: FILTER_CLEAR_ALL,
});

export const updateFilterStatus = (value) => ({
  type: UPDATE_FILTER_STATUS,
  value,
});

// ------------------------------ DATE -------------------------- //

export const changeFilterDates = (changedDates) => ({
  type: FILTER_CHANGE_DATE,
  changedDates,
});

export const clearDateFilter = () => ({
  type: FILTER_CLEAR_DATE,
});

// ------------------------------ HOUR -------------------------- //

export const changeFilterHour = (changedHours) => ({
  type: FILTER_CHANGE_HOUR,
  changedHours,
});

// ------------------------------ PRICE -------------------------- //


export const changeFilterPrice = (changedPrices) => ({
  type: FILTER_CHANGE_PRICE,
  changedPrices,
});

// ------------------------------ PLACE -------------------------- //

export const changePlaceName = (name) => ({
  type: FILTER_CHANGE_PLACE_NAME,
  name,
});

export const changePlaceRadius = (radius) => ({
  type: FILTER_CHANGE_PLACE_RADIUS,
  radius,
});

export const changePlacePosition = (lat, lng) => ({
  type: FILTER_CHANGE_PLACE_POSITION,
  lat,
  lng,
});

export const clearPlaceFilter = () => ({
  type: FILTER_CLEAR_PLACE,
});


// ------------------------------ SPORT -------------------------- //


export const addSportFilter = (sportFilter) => ({
  type: FILTER_ADD_SPORT,
  sportFilter,
});

export const removeSportFilter = (sportFilterIndex) => ({
  type: FILTER_REMOVE_SPORT,
  sportFilterIndex,
});


export const clearSportFilter = () => ({
  type: FILTER_CLEAR_SPORT,
});

// ------------------------------ RESTRICTIONS -------------------------- //
export const changeSexRestrictionFilter = (sexRestriction) => ({
  type: FILTER_CHANGE_SEX_RESTRICTION,
  sexRestriction
});
export const changeAgeRestrictionFilter = (ageRestriction) => ({
  type: FILTER_CHANGE_AGE_RESTRICTION,
  ageRestriction
});
export const clearRestrictionFilter = () => ({
  type: FILTER_CLEAR_RESTRICTIONS
})

// ------------------------------ CIRCLES -------------------------- //
export const addCircleFilter = (user) => ({
  type: FILTER_ADD_CIRCLE,
  user
});
export const removeCircleFilter = (user) => ({
  type: FILTER_REMOVE_CIRCLE,
  user
});
export const clearCircleFilter = () => ({
  type: FILTER_CLEAR_CIRCLES
})

// ------------------------------ SUB-ACCOUNTS -------------------------- //
export const addSubAccountFilter = (user) => ({
  type: FILTER_ADD_SUBACCOUNT,
  user
});
export const removeSubAccountFilter = (user) => ({
  type: FILTER_REMOVE_SUBACCOUNT, 
  user
})
export const clearSubAccountFilter = () => ({
  type: FILTER_CLEAR_SUBACCOUNTS
})

// ------------------------------ SAVED FILTERS -------------------------- //
export const applySavedFilter = (filter) => ({
  type: FILTER_APPLY_SAVED_FILTER,
  filter
})
export const removeAppliedSavedFilter = () => ({
  type: FILTER_CLEAR_ALL
})
export const updateAppliedFilterName = name => ({
  type: FILTER_UPDATE_APPLIED_FILTER_NAME,
  name
})

// ------------------------------ STATUS FILTERS -------------------------- //
export const changeStatusFilter = (selectedStatus) => ({
  type: FILTER_CHANGE_SELECTED_STATUS,
  selectedStatus
})

export const clearStatusFilter = () => ({
  type: FILTER_CLEAR_SELECTED_STATUS  
})

// ------------------------- SPORTUNITY TYPES FILTERS -------------------------- //
export const changeSportunityTypesFilter = (sportunityTypes) => ({
  type: FILTER_CHANGE_SELECTED_SPORTUNITY_TYPES,
  sportunityTypes
})

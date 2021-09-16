// Actions Names
export const PUBLIC_CIRCLES_FILTER_CHANGE_CIRCLE_TYPE = 'PUBLIC_CIRCLES_FILTER_CHANGE_CIRCLE_TYPE';
export const PUBLIC_CIRCLES_FILTER_CHANGE_TYPE = 'PUBLIC_CIRCLES_FILTER_CHANGE_TYPE';
export const PUBLIC_CIRCLES_FILTER_CHANGE_NAME = 'PUBLIC_CIRCLES_FILTER_CHANGE_NAME';
export const PUBLIC_CIRCLES_FILTER_ADD_SPORT = 'PUBLIC_CIRCLES_FILTER_ADD_SPORT';
export const PUBLIC_CIRCLES_FILTER_REMOVE_SPORT = 'PUBLIC_CIRCLES_FILTER_REMOVE_SPORT';
export const PUBLIC_CIRCLES_FILTER_CLEAR_SPORT = 'PUBLIC_CIRCLES_FILTER_CLEAR_SPORT';
export const PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_RADIUS = 'PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_RADIUS';
export const PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_POSITION = 'PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_POSITION';
export const PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_NAME = 'PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_NAME';
export const PUBLIC_CIRCLES_FILTER_CLEAR_PLACE = 'PUBLIC_CIRCLES_FILTER_CLEAR_PLACE';
export const PUBLIC_CIRCLES_FILTER_CLEAR_ALL = 'PUBLIC_CIRCLES_FILTER_CLEAR_ALL';
export const PUBLIC_CIRCLES_FILTER_UPDATE_STATUS = 'PUBLIC_CIRCLES_FILTER_UPDATE_STATUS';
export const PUBLIC_CIRCLES_FILTER_APPLY_SAVED_FILTER = 'PUBLIC_CIRCLES_FILTER_APPLY_SAVED_FILTER';
export const PUBLIC_CIRCLES_FILTER_APPLY_PUBLIC_FILTER = 'PUBLIC_CIRCLES_FILTER_APPLY_PUBLIC_FILTER';
export const PUBLIC_CIRCLES_FILTER_ADD_SUBACCOUNT = 'PUBLIC_CIRCLES_FILTER_ADD_SUBACCOUNT';
export const PUBLIC_CIRCLES_FILTER_REMOVE_SUBACCOUNT = 'PUBLIC_CIRCLES_FILTER_REMOVE_SUBACCOUNT';
export const PUBLIC_CIRCLES_FILTER_CLEAR_SUBACCOUNTS = 'PUBLIC_CIRCLES_FILTER_CLEAR_SUBACCOUNTS';

// Actions Creators

// ------------------------------ ALL -------------------------- //

export const clearFilters = () => ({
  type: PUBLIC_CIRCLES_FILTER_CLEAR_ALL,
});

export const updatePublicCirclesFilterStatus = (value) => ({
    type: PUBLIC_CIRCLES_FILTER_UPDATE_STATUS,
    value
});

// ------------------------------ TYPE -------------------------- //
export const changeCircleType = value => ({
  type: PUBLIC_CIRCLES_FILTER_CHANGE_CIRCLE_TYPE,
  value
})

// ------------------------------ TYPE -------------------------- //
export const changeMemberType = value => ({
  type: PUBLIC_CIRCLES_FILTER_CHANGE_TYPE,
  value
})

// ------------------------------ NAME -------------------------- //
export const changeCircleNameCompletion = value => ({
  type: PUBLIC_CIRCLES_FILTER_CHANGE_NAME,
  value
})

// ------------------------------ SUBACCOUNTS -------------------------- //
export const addSubAccount = value => ({
  type: PUBLIC_CIRCLES_FILTER_ADD_SUBACCOUNT,
  value
})
export const removeSubAccount = value => ({
  type: PUBLIC_CIRCLES_FILTER_REMOVE_SUBACCOUNT,
  value
})
export const clearSubAccounts = value => ({
  type: PUBLIC_CIRCLES_FILTER_CLEAR_SUBACCOUNTS,
  value
})

// ------------------------------ PLACE -------------------------- //

export const changePlaceName = (name) => ({
  type: PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_NAME,
  name,
});

export const changePlaceRadius = (radius) => ({
  type: PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_RADIUS,
  radius,
});

export const changePlacePosition = (lat, lng) => ({
  type: PUBLIC_CIRCLES_FILTER_CHANGE_PLACE_POSITION,
  lat,
  lng,
});

export const clearPlaceFilter = () => ({
  type: PUBLIC_CIRCLES_FILTER_CLEAR_PLACE,
});


// ------------------------------ SPORT -------------------------- //


export const addPublicCircleSportFilter = (sportFilter) => ({
  type: PUBLIC_CIRCLES_FILTER_ADD_SPORT,
  sportFilter,
});

export const removeSportFilter = (sportFilterIndex) => ({
  type: PUBLIC_CIRCLES_FILTER_REMOVE_SPORT,
  sportFilterIndex,
});


export const clearSportFilter = () => ({
  type: PUBLIC_CIRCLES_FILTER_CLEAR_SPORT,
});

// ------------------------------ SAVED FILTERS -------------------------- //
export const applySavedCircleFilter = (filter) => ({
  type: PUBLIC_CIRCLES_FILTER_APPLY_SAVED_FILTER,
  filter
})
export const removeAppliedSavedCircleFilter = () => ({
  type: PUBLIC_CIRCLES_FILTER_CLEAR_ALL,
})
export const openCirclesOnPublicFilter = (shouldOpenCirclesOnPublicFilter) => ({
  type: PUBLIC_CIRCLES_FILTER_APPLY_PUBLIC_FILTER,
  shouldOpenCirclesOnPublicFilter
})  
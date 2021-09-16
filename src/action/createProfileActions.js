import * as types from './actionNames';
/**
 * Triggered when user saves profile image
 */
export function updateProfileImageUrl(url) {
  return {
    type: types.UPDATE_PROFILE_IMAGE_URL,
    url,
  };
}

/**
 * Triggered when avatar image is pressed
 */
export function updateAvatar(uri) {
  return {
    type: types.UPDATE_AVATAR,
    uri,
  };
}

/**
 * Triggered when pseudo input text changes
 */
export function updatePseudo(text) {
  return {
    type: types.UPDATE_PSEUDO,
    text,
  };
}

/**
 * Triggered when name input text changes
 */
export function updateName(text) {
  return {
    type: types.UPDATE_NAME,
    text,
  };
}

/**
 * Triggered when email input text changes
 */
export function updateEmail(text) {
  return {
    type: types.UPDATE_EMAIL,
    text,
  };
}
/**
 * Triggered when password input text changes
 */
export function updatePassword(text) {
  return {
    type: types.UPDATE_PASSWORD,
    text,
  };
}

/**
 * Triggered when phone input text changes
 */
export function updatePhone(number) {
  return {
    type: types.UPDATE_PHONE,
    number,
  };
}

/**
 * Action for adding address
 */
export function updateAddress(item) {
  return {
    type: types.UPDATE_ADDRESS,
    item,
  };
}

/**
 * Triggered when description text area changes
 */
export function updateDescription(text) {
  return {
    type: types.UPDATE_DESCRIPTION,
    text,
  };
}

/**
 * Triggered when birthday date is selected
 */
export function updateBirthday(date) {
  return {
    type: types.UPDATE_BIRTHDAY,
    date,
  };
}

/**
 * Triggered when langages are selected
 */
export function updateLanguages(items) {
  return {
    type: types.UPDATE_LANGUAGES,
    items,
  };
}

/**
 * Triggered when sports are selected
 */
export function updateSports(text) {
  return {
    type: types.UPDATE_SPORTS,
    text,
  };
}

/**
 * Triggered when sport remove button is pressed
 */
export function removeSport(index) {
  return {
    type: types.REMOVE_SPORT,
    index,
  };
}

/**
 * Triggered when payment remove button is pressed
 */
export function removePayment(index) {
  return {
    type: types.REMOVE_PAYMENT,
    index,
  };
}

/**
 * Triggered when sport remove button is pressed
 */
export function removePayoff(index) {
  return {
    type: types.REMOVE_PAYOFF,
    index,
  };
}

/**
 * Triggered when profile is created is successful
 */
export function signupSuccess(userData) {
  return {
    type: types.SIGNUP_SUCCESS,
    userData,
  };
}

/**
 * Triggered when profile creation has failed
 */
export function signupError(error) {
  return {
    type: types.SIGNUP_ERROR,
    error,
  };
}

/**
 * Triggered when network request is active
 * Used for activity indicator
 */
export function creatingProfile(value) {
  return {
    type: types.CREATING_PROFILE,
    value,
  };
}
/**
 * Used to create sub accounts
 */
export function creatingSubAccount(value) {
  return {
    type: types.CREATING_SUB_ACCOUNT,
    value
  }
}
/**
 * Used for validating inputs
 */
export function validateInputs(errors) {
  return {
    type: types.VALIDATE_CREATE_PROFILE_INPUTS,
    errors,
  };
}

export function resetInputs() {
  return {
    type: types.RESET_PROFILE_CREATION
  }
}
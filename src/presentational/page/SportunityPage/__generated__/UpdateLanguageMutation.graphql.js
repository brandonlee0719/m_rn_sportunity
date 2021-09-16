/**
 * @flow
 * @relayHash dc716a58a2780496989eb3ff1d2786e4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CertificateValidation = "PENDING" | "REJECTED" | "VALIDATED" | "%future added value";
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
export type ManagementAuthorizationLevels = "ADMIN" | "READER" | "WRITER" | "%future added value";
export type Sex = "FEMALE" | "MALE" | "OTHER" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type SupportedLanguage = "DE" | "EN" | "ES" | "FR" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
export type supportedCountries = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "%future added value";
export type userStatus = "DELETED" | "SUSPENDED" | "VALID" | "%future added value";
export type upUserInput = {
  userID?: ?string,
  token?: ?string,
  user?: ?UpdateUserInput,
  clientMutationId?: ?string,
};
export type UpdateUserInput = {
  firstName?: ?string,
  lastName?: ?string,
  pseudo?: ?string,
  email?: ?any,
  password?: ?string,
  appCountry?: ?supportedCountries,
  appCurrency?: ?Currency,
  languages?: ?$ReadOnlyArray<?string>,
  appLanguage?: ?SupportedLanguage,
  description?: ?string,
  avatar?: ?string,
  blackList?: ?$ReadOnlyArray<?string>,
  followers?: ?string,
  phonePrefix?: ?number,
  phoneNumber?: ?number,
  birthday?: ?string,
  hideMyAge?: ?boolean,
  sex?: ?Sex,
  address?: ?AddressInput,
  publicAddress?: ?AddressInput,
  fees?: ?number,
  paymentModelFees?: ?number,
  sports?: ?$ReadOnlyArray<?SportDescriptorInput>,
  profileType?: ?UserProfileType,
  isEmailValidated?: ?boolean,
  isTrustedUserToCreateActivities?: ?boolean,
  isTrustedUserToCreateCircles?: ?boolean,
  creation_status?: ?UserStatusInput,
  feedbacks?: ?$ReadOnlyArray<?FeedbackInput>,
  savedFilters?: ?$ReadOnlyArray<?UserFilterInput>,
  savedCircleFilters?: ?$ReadOnlyArray<?SavedCircleFilterInput>,
  basicSavedFiltersCreated?: ?boolean,
  basicCircleSavedFiltersCreated?: ?boolean,
  nationality?: ?string,
  occupation?: ?string,
  incomeRange?: ?number,
  business?: ?BusinessInput,
  shouldDeclareVAT?: ?boolean,
  authorized_managers?: ?$ReadOnlyArray<?AuthorizedManagerInput>,
  calendar?: ?CalendarInput,
  notification_preferences?: ?NotificationPreferencesInput,
  email_preferences?: ?EmailPreferencesInput,
  areStatisticsActivated?: ?boolean,
  areAvailabilityStatisticsActivated?: ?boolean,
  areTermsOfUseActivated?: ?boolean,
  areCompositionsActivated?: ?boolean,
  homePagePreference?: ?HomePagePreference,
  userPreferences?: ?UserPreferencesInput,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type SportDescriptorInput = {
  sport: string,
  levels?: ?$ReadOnlyArray<?string>,
  certificates?: ?$ReadOnlyArray<?CertificateDescriptorInput>,
  positions?: ?$ReadOnlyArray<?string>,
  assistantType?: ?$ReadOnlyArray<?string>,
};
export type CertificateDescriptorInput = {
  certificate: string,
  validation?: ?CertificateValidation,
};
export type UserStatusInput = {
  status?: ?userStatus,
  reason?: ?string,
};
export type FeedbackInput = {
  text: string,
  rating: number,
  author: string,
  createdAt: string,
};
export type UserFilterInput = {
  userFilterId?: ?string,
  filterName?: ?string,
  canBeDeleted?: ?boolean,
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  price?: ?IntIntervalInput,
  dates?: ?StringIntervalInput,
  hours?: ?IntIntervalInput,
  status?: ?SportunityStatus,
  statuses?: ?$ReadOnlyArray<?SportunityStatus>,
  page?: ?HomePagePreference,
  subAccounts?: ?$ReadOnlyArray<?string>,
  circles?: ?$ReadOnlyArray<?string>,
  sportunityTypes?: ?$ReadOnlyArray<?string>,
  users?: ?$ReadOnlyArray<?string>,
  position?: ?number,
};
export type LocationConstraint = {
  lat?: ?number,
  lng?: ?number,
  radius?: ?number,
};
export type SportConstraint = {
  sportID?: ?string,
  level?: ?$ReadOnlyArray<?string>,
};
export type IntIntervalInput = {
  from: number,
  to: number,
};
export type StringIntervalInput = {
  from: string,
  to: string,
};
export type SavedCircleFilterInput = {
  userCircleFilterId?: ?string,
  filterName?: ?string,
  canBeDeleted?: ?boolean,
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  circleType?: ?$ReadOnlyArray<?CircleListTypeEnum>,
  memberType?: ?CircleTypeEnum,
  memberTypes?: ?$ReadOnlyArray<?CircleTypeEnum>,
  modes?: ?$ReadOnlyArray<?CircleKind>,
  owners?: ?$ReadOnlyArray<?string>,
  position?: ?number,
};
export type BusinessInput = {
  businessName?: ?string,
  businessEmail?: ?any,
  headquarterAddress?: ?AddressInput,
  VATNumber?: ?string,
};
export type AuthorizedManagerInput = {
  user?: ?string,
  authorization_level?: ?ManagementAuthorizationLevels,
};
export type CalendarInput = {
  sportunities?: ?$ReadOnlyArray<?string>,
  users?: ?$ReadOnlyArray<?string>,
  preferences?: ?CalendarPreferencesInput,
};
export type CalendarPreferencesInput = {
  own_synchronized_status?: ?$ReadOnlyArray<?SportunityStatus>
};
export type NotificationPreferencesInput = {
  sportunityNewMainOrganizer?: ?boolean,
  sportunityNewSecondaryOrganizer?: ?boolean,
  sportunityNewVenueOrganizer?: ?boolean,
  sportunityNewInvited?: ?boolean,
  sportunityNewFollower?: ?boolean,
  sportunityCancelMainOrganizer?: ?boolean,
  sportunityCancelSecondaryOrganizer?: ?boolean,
  sportunityCancelParticipant?: ?boolean,
  sportunityBooked?: ?boolean,
  sportunityBookedOrganizer?: ?boolean,
  sportunityBookerCancel?: ?boolean,
  sportunityBookerCancelOrganizer?: ?boolean,
  sportunityModifiedMainOrganizer?: ?boolean,
  sportunityModifiedSecondaryOrganizer?: ?boolean,
  sportunityModifiedVenueOrganizer?: ?boolean,
  sportunityModifiedParticipant?: ?boolean,
  paymentConfirmationOnDDay?: ?boolean,
  paymentReceivedMainOrganizer?: ?boolean,
  paymentReceivedSecondaryOrganizer?: ?boolean,
  certificateValidated?: ?boolean,
  sportunityCompleteStatistics?: ?boolean,
  sportunityVoteForManOfTheGame?: ?boolean,
};
export type EmailPreferencesInput = {
  sportunityNewMainOrganizer?: ?boolean,
  sportunityNewSecondaryOrganizer?: ?boolean,
  sportunityNewVenueOrganizer?: ?boolean,
  sportunityNewInvited?: ?boolean,
  sportunityNewFollower?: ?boolean,
  sportunityCancelMainOrganizer?: ?boolean,
  sportunityCancelSecondaryOrganizer?: ?boolean,
  sportunityCancelParticipant?: ?boolean,
  sportunityBooked?: ?boolean,
  sportunityBookedOrganizer?: ?boolean,
  sportunityBookerCancel?: ?boolean,
  sportunityBookerCancelOrganizer?: ?boolean,
  chatUnReadMessage?: ?boolean,
  sportunityModifiedMainOrganizer?: ?boolean,
  sportunityModifiedSecondaryOrganizer?: ?boolean,
  sportunityModifiedVenueOrganizer?: ?boolean,
  sportunityModifiedParticipant?: ?boolean,
  paymentConfirmationOnDDay?: ?boolean,
  paymentReceivedMainOrganizer?: ?boolean,
  paymentReceivedSecondaryOrganizer?: ?boolean,
  certificateValidated?: ?boolean,
};
export type UserPreferencesInput = {
  areSubAccountsActivated?: ?boolean
};
export type UpdateLanguageMutationVariables = {|
  input: upUserInput
|};
export type UpdateLanguageMutationResponse = {|
  +upUser: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +appLanguage: ?SupportedLanguage,
    |},
  |}
|};
export type UpdateLanguageMutation = {|
  variables: UpdateLanguageMutationVariables,
  response: UpdateLanguageMutationResponse,
|};
*/


/*
mutation UpdateLanguageMutation(
  $input: upUserInput!
) {
  upUser(input: $input) {
    clientMutationId
    user {
      id
      appLanguage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "upUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "upUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "upUserInput!"
      }
    ],
    "concreteType": "upUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "appLanguage",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateLanguageMutation",
  "id": null,
  "text": "mutation UpdateLanguageMutation(\n  $input: upUserInput!\n) {\n  upUser(input: $input) {\n    clientMutationId\n    user {\n      id\n      appLanguage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateLanguageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateLanguageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a10965a4a6ce6f535572e791e0d7604';
module.exports = node;

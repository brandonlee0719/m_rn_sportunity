/**
 * @flow
 * @relayHash a43d3d5bd7ea884ed6e409fa77c0fa78
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
export type SaveCircleFilterMutationVariables = {|
  input: upUserInput
|};
export type SaveCircleFilterMutationResponse = {|
  +upUser: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +basicCircleSavedFiltersCreated: ?boolean,
      +savedCircleFilters: ?$ReadOnlyArray<?{|
        +id: string,
        +filterName: ?string,
        +location: ?{|
          +lat: ?number,
          +lng: ?number,
          +radius: ?number,
        |},
        +sport: ?$ReadOnlyArray<?{|
          +sport: ?{|
            +id: string,
            +name: ?{|
              +EN: ?string,
              +FR: ?string,
            |},
            +logo: string,
            +levels: ?$ReadOnlyArray<?{|
              +id: string,
              +EN: ?{|
                +name: ?string,
                +description: ?string,
                +skillLevel: number,
              |},
              +FR: ?{|
                +name: ?string,
                +description: ?string,
                +skillLevel: number,
              |},
            |}>,
          |},
          +levels: ?$ReadOnlyArray<?{|
            +id: string,
            +EN: ?{|
              +name: ?string,
              +description: ?string,
              +skillLevel: number,
            |},
            +FR: ?{|
              +name: ?string,
              +description: ?string,
              +skillLevel: number,
            |},
          |}>,
        |}>,
        +circleType: ?$ReadOnlyArray<?CircleListTypeEnum>,
        +memberTypes: ?$ReadOnlyArray<?CircleTypeEnum>,
        +modes: ?$ReadOnlyArray<?CircleKind>,
        +owners: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
        |}>,
      |}>,
    |},
  |}
|};
export type SaveCircleFilterMutation = {|
  variables: SaveCircleFilterMutationVariables,
  response: SaveCircleFilterMutationResponse,
|};
*/


/*
mutation SaveCircleFilterMutation(
  $input: upUserInput!
) {
  upUser(input: $input) {
    clientMutationId
    user {
      id
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
              id
            }
            logo
            levels {
              id
              EN {
                name
                description
                skillLevel
              }
              FR {
                name
                description
                skillLevel
              }
            }
          }
          levels {
            id
            EN {
              name
              description
              skillLevel
            }
            FR {
              name
              description
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "upUserInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "basicCircleSavedFiltersCreated",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lat",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lng",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v10 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v10
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v10
    }
  ]
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberTypes",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modes",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owners",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v3,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pseudo",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SaveCircleFilterMutation",
  "id": null,
  "text": "mutation SaveCircleFilterMutation(\n  $input: upUserInput!\n) {\n  upUser(input: $input) {\n    clientMutationId\n    user {\n      id\n      basicCircleSavedFiltersCreated\n      savedCircleFilters {\n        id\n        filterName\n        location {\n          lat\n          lng\n          radius\n        }\n        sport {\n          sport {\n            id\n            name {\n              EN\n              FR\n              id\n            }\n            logo\n            levels {\n              id\n              EN {\n                name\n                description\n                skillLevel\n              }\n              FR {\n                name\n                description\n                skillLevel\n              }\n            }\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        circleType\n        memberTypes\n        modes\n        owners {\n          id\n          pseudo\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SaveCircleFilterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "upUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "upUserPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedCircleFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": true,
                "selections": [
                  v3,
                  v5,
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleFilterSport",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sport",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v7,
                              v8
                            ]
                          },
                          v9,
                          v11
                        ]
                      },
                      v11
                    ]
                  },
                  v12,
                  v13,
                  v14,
                  v15
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SaveCircleFilterMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "upUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "upUserPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedCircleFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": true,
                "selections": [
                  v3,
                  v5,
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleFilterSport",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sport",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v7,
                              v8,
                              v3
                            ]
                          },
                          v9,
                          v11
                        ]
                      },
                      v11
                    ]
                  },
                  v12,
                  v13,
                  v14,
                  v15
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '950368916b05418c96c71f7296ea9fd7';
module.exports = node;

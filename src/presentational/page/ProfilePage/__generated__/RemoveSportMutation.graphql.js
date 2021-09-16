/**
 * @flow
 * @relayHash 4a99c1a1a52c75d424fc786dda8b2a9c
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
export type RemoveSportMutationVariables = {|
  input: upUserInput
|};
export type RemoveSportMutationResponse = {|
  +upUser: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +sports: ?$ReadOnlyArray<?{|
        +sport: ?{|
          +id: string,
          +name: ?{|
            +id: string,
            +EN: ?string,
            +FR: ?string,
          |},
          +logo: string,
          +positions: ?$ReadOnlyArray<?{|
            +id: string,
            +EN: ?string,
            +FR: ?string,
          |}>,
          +certificates: ?$ReadOnlyArray<?{|
            +id: string,
            +name: ?{|
              +id: string,
              +EN: ?string,
              +FR: ?string,
            |},
          |}>,
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
        +positions: ?$ReadOnlyArray<?{|
          +id: string,
          +EN: ?string,
          +FR: ?string,
        |}>,
        +certificates: ?$ReadOnlyArray<?{|
          +validation: CertificateValidation,
          +certificate: ?{|
            +id: string,
            +name: ?{|
              +id: string,
              +EN: ?string,
              +FR: ?string,
            |},
          |},
        |}>,
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
    |},
  |}
|};
export type RemoveSportMutation = {|
  variables: RemoveSportMutationVariables,
  response: RemoveSportMutationResponse,
|};
*/


/*
mutation RemoveSportMutation(
  $input: upUserInput!
) {
  upUser(input: $input) {
    clientMutationId
    user {
      id
      sports {
        sport {
          id
          name {
            id
            EN
            FR
          }
          logo
          positions {
            id
            EN
            FR
          }
          certificates {
            id
            name {
              id
              EN
              FR
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
        positions {
          id
          EN
          FR
        }
        certificates {
          validation
          certificate {
            id
            name {
              id
              EN
              FR
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "EN",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "FR",
    "args": null,
    "storageKey": null
  }
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v2
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v2
},
v5 = [
  v1,
  v3
],
v6 = [
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
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v6
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v6
    }
  ]
},
v8 = [
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sports",
            "storageKey": null,
            "args": null,
            "concreteType": "SportDescriptor",
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
                  v1,
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "logo",
                    "args": null,
                    "storageKey": null
                  },
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Certificate",
                    "plural": true,
                    "selections": v5
                  },
                  v7
                ]
              },
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "certificates",
                "storageKey": null,
                "args": null,
                "concreteType": "CertificateDescriptor",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "validation",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificate",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Certificate",
                    "plural": false,
                    "selections": v5
                  }
                ]
              },
              v7
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveSportMutation",
  "id": null,
  "text": "mutation RemoveSportMutation(\n  $input: upUserInput!\n) {\n  upUser(input: $input) {\n    clientMutationId\n    user {\n      id\n      sports {\n        sport {\n          id\n          name {\n            id\n            EN\n            FR\n          }\n          logo\n          positions {\n            id\n            EN\n            FR\n          }\n          certificates {\n            id\n            name {\n              id\n              EN\n              FR\n            }\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        positions {\n          id\n          EN\n          FR\n        }\n        certificates {\n          validation\n          certificate {\n            id\n            name {\n              id\n              EN\n              FR\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveSportMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v8
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveSportMutation",
    "argumentDefinitions": v0,
    "selections": v8
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e91412ae2816b49635047b410991b9fb';
module.exports = node;

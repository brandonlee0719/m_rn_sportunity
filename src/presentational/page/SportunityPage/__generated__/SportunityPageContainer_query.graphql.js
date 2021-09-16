/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportunityPage_sportunities$ref = any;
type SportunityPage_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type SupportedLanguage = "DE" | "EN" | "ES" | "FR" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
export type supportedCountries = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityPageContainer_query$ref: FragmentReference;
export type SportunityPageContainer_query = {|
  +viewer: ?{|
    +sportunityTypes: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +FR: ?string,
        +EN: ?string,
      |},
    |}>,
    +sportunities?: ?{|
      +count: ?number,
      +$fragmentRefs: SportunityPage_sportunities$ref,
    |},
    +me: ?{|
      +id: string,
      +appLanguage: ?SupportedLanguage,
      +appCountry: ?supportedCountries,
      +appCurrency: ?Currency,
      +avatar: ?string,
      +profileType: ?UserProfileType,
      +publicAddress: ?{|
        +city: string,
        +country: string,
        +position: ?{|
          +lat: ?number,
          +lng: ?number,
        |},
      |},
      +subAccounts: ?$ReadOnlyArray<?{|
        +id: string,
        +pseudo: string,
      |}>,
      +basicSavedFiltersCreated: ?boolean,
      +savedFilters: ?$ReadOnlyArray<?{|
        +id: string,
        +page: ?HomePagePreference,
        +filterName: ?string,
        +status: ?SportunityStatus,
        +statuses: ?$ReadOnlyArray<?SportunityStatus>,
        +users: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
        |}>,
        +subAccounts: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
        |}>,
        +circles: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
              +owner: ?{|
                +id: string,
                +pseudo: string,
                +avatar: ?string,
              |},
            |}
          |}>
        |},
        +location: ?{|
          +lat: ?number,
          +lng: ?number,
          +radius: ?number,
        |},
        +dates: ?{|
          +from: ?string,
          +to: ?string,
        |},
        +price: ?{|
          +from: ?number,
          +to: ?number,
        |},
        +sportunityTypes: ?$ReadOnlyArray<?{|
          +id: string,
          +name: ?{|
            +FR: ?string,
            +EN: ?string,
          |},
        |}>,
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
      |}>,
      +defaultSavedFilter: ?{|
        +id: string,
        +filterName: ?string,
        +status: ?SportunityStatus,
        +statuses: ?$ReadOnlyArray<?SportunityStatus>,
        +page: ?HomePagePreference,
        +circles: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
              +owner: ?{|
                +id: string,
                +pseudo: string,
                +avatar: ?string,
              |},
            |}
          |}>
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
        +location: ?{|
          +lat: ?number,
          +lng: ?number,
          +radius: ?number,
        |},
        +dates: ?{|
          +from: ?string,
          +to: ?string,
        |},
        +price: ?{|
          +from: ?number,
          +to: ?number,
        |},
      |},
      +sports: ?$ReadOnlyArray<?{|
        +sport: ?{|
          +id: string
        |}
      |}>,
    |},
    +$fragmentRefs: SportunityPage_viewer$ref,
  |},
  +$refType: SportunityPageContainer_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v3 = [
  v0,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "name",
    "storageKey": null,
    "args": null,
    "concreteType": "TranslatedString",
    "plural": false,
    "selections": [
      v1,
      v2
    ]
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v8 = [
  v0,
  v7
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v8
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "statuses",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "circles",
  "storageKey": "circles(last:20)",
  "args": [
    {
      "kind": "Literal",
      "name": "last",
      "value": 20,
      "type": "Int"
    }
  ],
  "concreteType": "CircleConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "CircleEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Circle",
          "plural": false,
          "selections": [
            v0,
            v14,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "owner",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [
                v0,
                v7,
                v6
              ]
            }
          ]
        }
      ]
    }
  ]
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "FilterLatLng",
  "plural": false,
  "selections": [
    v4,
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v17 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "from",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "to",
    "args": null,
    "storageKey": null
  }
],
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "dates",
  "storageKey": null,
  "args": null,
  "concreteType": "StringInterval",
  "plural": false,
  "selections": v17
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "IntInterval",
  "plural": false,
  "selections": v17
},
v20 = [
  v14,
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
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v20
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v20
    }
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "FilterSport",
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
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "name",
          "storageKey": null,
          "args": null,
          "concreteType": "TranslatedString",
          "plural": false,
          "selections": [
            v2,
            v1
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logo",
          "args": null,
          "storageKey": null
        },
        v21
      ]
    },
    v21
  ]
};
return {
  "kind": "Fragment",
  "name": "SportunityPageContainer_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": 5
    },
    {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "Filter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "Sportunities_Order",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "Viewer",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "SportunityPage_viewer",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunityTypes",
          "storageKey": "sportunityTypes(sportType:\"COLLECTIVE\")",
          "args": [
            {
              "kind": "Literal",
              "name": "sportType",
              "value": "COLLECTIVE",
              "type": "SportTypeEnum"
            }
          ],
          "concreteType": "SportunityType",
          "plural": true,
          "selections": v3
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "me",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "publicAddress",
              "storageKey": null,
              "args": null,
              "concreteType": "AddressModel",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "city",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "country",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "position",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "PositionType",
                  "plural": false,
                  "selections": [
                    v4,
                    v5
                  ]
                }
              ]
            },
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "appCountry",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "appCurrency",
              "args": null,
              "storageKey": null
            },
            v6,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "profileType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "appLanguage",
              "args": null,
              "storageKey": null
            },
            v9,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "basicSavedFiltersCreated",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "savedFilters",
              "storageKey": null,
              "args": null,
              "concreteType": "UserFilter",
              "plural": true,
              "selections": [
                v9,
                v0,
                v10,
                v11,
                v12,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "users",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": true,
                  "selections": v8
                },
                v13,
                v15,
                v16,
                v18,
                v19,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "sportunityTypes",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportunityType",
                  "plural": true,
                  "selections": v3
                },
                v22
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "defaultSavedFilter",
              "storageKey": null,
              "args": null,
              "concreteType": "UserFilter",
              "plural": false,
              "selections": [
                v0,
                v10,
                v11,
                v12,
                v13,
                v15,
                v22,
                v16,
                v18,
                v19
              ]
            },
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
                    v0
                  ]
                }
              ]
            }
          ]
        },
        {
          "kind": "Condition",
          "passingValue": true,
          "condition": "query",
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sportunities",
              "storageKey": null,
              "args": [
                {
                  "kind": "Variable",
                  "name": "filter",
                  "variableName": "filter",
                  "type": "Filter"
                },
                {
                  "kind": "Variable",
                  "name": "first",
                  "variableName": "count",
                  "type": "Int"
                },
                {
                  "kind": "Variable",
                  "name": "orderBy",
                  "variableName": "orderBy",
                  "type": "Sportunities_Order"
                }
              ],
              "concreteType": "SportunityConnection",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "count",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "SportunityPage_sportunities",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a07d8add31a33ae603e91dc28e0edeb';
module.exports = node;

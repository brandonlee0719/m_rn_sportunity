/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TopContent_sportunity$ref: FragmentReference;
export type TopContent_sportunity = {|
  +id: string,
  +title: string,
  +status: ?string,
  +beginning_date: any,
  +price: ?{|
    +currency: ?Currency,
    +cents: number,
  |},
  +survey: ?{|
    +isSurveyTransformed: ?boolean,
    +surveyDates: ?$ReadOnlyArray<?{|
      +beginning_date: ?string,
      +ending_date: ?string,
    |}>,
  |},
  +organizers: ?$ReadOnlyArray<?{|
    +organizer: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
      +areStatisticsActivated: ?boolean,
      +statisticPreferences: ?{|
        +private: ?boolean
      |},
    |},
    +isAdmin: boolean,
  |}>,
  +paymentStatus: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string
    |},
    +status: ?PaymentStatus,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
  |}>,
  +venue: ?{|
    +id: string,
    +name: string,
  |},
  +infrastructure: ?{|
    +id: string,
    +name: string,
  |},
  +address: ?{|
    +address: string,
    +country: string,
    +city: string,
    +zip: ?string,
    +position: ?{|
      +lat: ?number,
      +lng: ?number,
    |},
  |},
  +participantRange: ?{|
    +from: ?number,
    +to: ?number,
  |},
  +sportunityType: ?{|
    +id: string,
    +name: ?{|
      +EN: ?string,
      +FR: ?string,
    |},
  |},
  +sportunityTypeStatus: ?{|
    +id: string,
    +name: ?{|
      +EN: ?string,
      +FR: ?string,
    |},
  |},
  +score: ?{|
    +currentTeam: ?number,
    +adversaryTeam: ?number,
  |},
  +sport: ?{|
    +sport: ?{|
      +logo: string
    |},
    +allLevelSelected: ?boolean,
    +levels: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?{|
        +name: ?string,
        +skillLevel: number,
      |},
      +FR: ?{|
        +name: ?string,
        +skillLevel: number,
      |},
    |}>,
  |},
  +$refType: TopContent_sportunity$ref,
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  v0,
  v1
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v7 = [
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
    ]
  }
],
v8 = [
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "TopContent_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "venue",
      "storageKey": null,
      "args": null,
      "concreteType": "Venue",
      "plural": false,
      "selections": v2
    },
    v0,
    v3,
    v4,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "price",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": false,
      "selections": [
        v5,
        v6
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "survey",
      "storageKey": null,
      "args": null,
      "concreteType": "Survey",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isSurveyTransformed",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "surveyDates",
          "storageKey": null,
          "args": null,
          "concreteType": "SurveyDatesOutput",
          "plural": true,
          "selections": [
            v4,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "ending_date",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "organizers",
      "storageKey": null,
      "args": null,
      "concreteType": "Organizer",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "organizer",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "pseudo",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "avatar",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "areStatisticsActivated",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "statisticPreferences",
              "storageKey": null,
              "args": null,
              "concreteType": "StatisticPreferences",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "private",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isAdmin",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "paymentStatus",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityPaymentStatus",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            v0
          ]
        },
        v3,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "price",
          "storageKey": null,
          "args": null,
          "concreteType": "Price",
          "plural": false,
          "selections": [
            v6,
            v5
          ]
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "infrastructure",
      "storageKey": null,
      "args": null,
      "concreteType": "Infrastructure",
      "plural": false,
      "selections": v2
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "address",
      "storageKey": null,
      "args": null,
      "concreteType": "AddressModel",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "address",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "city",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "zip",
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
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "participantRange",
      "storageKey": null,
      "args": null,
      "concreteType": "IntInterval",
      "plural": false,
      "selections": [
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
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunityType",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityType",
      "plural": false,
      "selections": v7
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunityTypeStatus",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityTypeStatus",
      "plural": false,
      "selections": v7
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "score",
      "storageKey": null,
      "args": null,
      "concreteType": "Score",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currentTeam",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "adversaryTeam",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunitySport",
      "plural": false,
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "logo",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "allLevelSelected",
          "args": null,
          "storageKey": null
        },
        {
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
              "selections": v8
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "FR",
              "storageKey": null,
              "args": null,
              "concreteType": "SportLevel",
              "plural": false,
              "selections": v8
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '771fbaa6ace666423a347783bbf32ee7';
module.exports = node;

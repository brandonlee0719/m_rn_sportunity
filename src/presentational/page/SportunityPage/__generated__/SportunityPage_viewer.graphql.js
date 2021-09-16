/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportunityListView_user$ref = any;
type SportunityListView_viewer$ref = any;
type Stepper_viewer$ref = any;
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityPage_viewer$ref: FragmentReference;
export type SportunityPage_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +avatar: ?string,
    +profileType: ?UserProfileType,
    +mangoId: ?string,
    +isProfileComplete: ?boolean,
    +isPublicProfileComplete: ?boolean,
    +subAccounts?: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
    |}>,
    +savedFilters: ?$ReadOnlyArray<?{|
      +id: string,
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
      +page: ?HomePagePreference,
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
      +sportunityTypes: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?{|
          +FR: ?string,
          +EN: ?string,
        |},
      |}>,
    |}>,
    +defaultSavedFilter: ?{|
      +id: string,
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
      +page: ?HomePagePreference,
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
      +sportunityTypes: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?{|
          +FR: ?string,
          +EN: ?string,
        |},
      |}>,
    |},
    +$fragmentRefs: SportunityListView_user$ref,
  |},
  +$fragmentRefs: Stepper_viewer$ref & SportunityListView_viewer$ref,
  +$refType: SportunityPage_viewer$ref,
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
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v4 = [
  v0,
  v3
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v8 = [
  v2,
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
v9 = {
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
},
v10 = [
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
v11 = [
  {
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
              v2,
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
                  v3,
                  v1
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "status",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "statuses",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": v4
  },
  v5,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "filterName",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "page",
    "args": null,
    "storageKey": null
  },
  {
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
              v6,
              v7
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "logo",
            "args": null,
            "storageKey": null
          },
          v9
        ]
      },
      v9
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "location",
    "storageKey": null,
    "args": null,
    "concreteType": "FilterLatLng",
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
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "dates",
    "storageKey": null,
    "args": null,
    "concreteType": "StringInterval",
    "plural": false,
    "selections": v10
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "price",
    "storageKey": null,
    "args": null,
    "concreteType": "IntInterval",
    "plural": false,
    "selections": v10
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sportunityTypes",
    "storageKey": null,
    "args": null,
    "concreteType": "SportunityType",
    "plural": true,
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
          v7,
          v6
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "SportunityPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "querySubAccounts",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "Stepper_viewer",
      "args": null
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
          "kind": "FragmentSpread",
          "name": "SportunityListView_user",
          "args": null
        },
        v0,
        v1,
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
          "name": "mangoId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isProfileComplete",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isPublicProfileComplete",
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
          "selections": v11
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "defaultSavedFilter",
          "storageKey": null,
          "args": null,
          "concreteType": "UserFilter",
          "plural": false,
          "selections": v11
        },
        {
          "kind": "Condition",
          "passingValue": true,
          "condition": "querySubAccounts",
          "selections": [
            v5
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "SportunityListView_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '12307e12e703dde8adec673f1986b709';
module.exports = node;

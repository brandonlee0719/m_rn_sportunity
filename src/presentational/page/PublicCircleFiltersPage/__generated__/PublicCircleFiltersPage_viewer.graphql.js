/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FilterDetailSports_viewer$ref = any;
type PublicCirclesFilter_viewer$ref = any;
type SavedFilterList_viewer$ref = any;
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PublicCircleFiltersPage_viewer$ref: FragmentReference;
export type PublicCircleFiltersPage_viewer = {|
  +me: ?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
    +profileType: ?UserProfileType,
    +isSubAccount: ?boolean,
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +circles: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +name: ?string,
            +memberCount: number,
          |}
        |}>
      |},
    |}>,
    +masterAccount: ?{|
      +id: string,
      +subAccounts: ?$ReadOnlyArray<?{|
        +id: string,
        +pseudo: string,
        +circles: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
              +memberCount: number,
            |}
          |}>
        |},
      |}>,
    |},
    +defaultSavedCircleFilter: ?{|
      +id: string
    |},
    +savedCircleFilters: ?$ReadOnlyArray<?{|
      +id: string,
      +filterName: ?string,
      +canBeDeleted: ?boolean,
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
      +circleType: ?$ReadOnlyArray<?CircleListTypeEnum>,
      +memberType: ?CircleTypeEnum,
      +owners: ?$ReadOnlyArray<?{|
        +id: string,
        +pseudo: string,
      |}>,
    |}>,
  |},
  +$fragmentRefs: FilterDetailSports_viewer$ref & SavedFilterList_viewer$ref & PublicCirclesFilter_viewer$ref,
  +$refType: PublicCircleFiltersPage_viewer$ref,
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
  "name": "pseudo",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circles",
      "storageKey": "circles(last:30)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 30,
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "memberCount",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
v4 = [
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
v5 = {
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
      "selections": v4
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v4
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "PublicCircleFiltersPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FilterDetailSports_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SavedFilterList_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PublicCirclesFilter_viewer",
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
        v0,
        v1,
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
          "name": "profileType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isSubAccount",
          "args": null,
          "storageKey": null
        },
        v3,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "masterAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            v0,
            v3
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "defaultSavedCircleFilter",
          "storageKey": null,
          "args": null,
          "concreteType": "UserCircleFilter",
          "plural": false,
          "selections": [
            v0
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "savedCircleFilters",
          "storageKey": null,
          "args": null,
          "concreteType": "UserCircleFilter",
          "plural": true,
          "selections": [
            v0,
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
              "name": "canBeDeleted",
              "args": null,
              "storageKey": null
            },
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
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "logo",
                      "args": null,
                      "storageKey": null
                    },
                    v5
                  ]
                },
                v5
              ]
            },
            {
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "circleType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "memberType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "owners",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": true,
              "selections": [
                v0,
                v1
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
(node/*: any*/).hash = 'f9a56e1e9e7ff565f42e6b702425764c';
module.exports = node;

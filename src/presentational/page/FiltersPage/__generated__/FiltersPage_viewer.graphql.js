/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FilterDetailCircles_circles$ref = any;
type FilterDetailSports_viewer$ref = any;
type FilterSportunityTypes_viewer$ref = any;
type SavedFilterList_viewer$ref = any;
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type FiltersPage_viewer$ref: FragmentReference;
export type FiltersPage_viewer = {|
  +me: ?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
    +description: ?string,
    +profileType: ?UserProfileType,
    +canQuerySportunityTypeFilter: ?boolean,
    +circlesUserIsIn: ?{|
      +$fragmentRefs: FilterDetailCircles_circles$ref
    |},
    +defaultSavedFilter: ?{|
      +id: string
    |},
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
    |}>,
    +savedFilters: ?$ReadOnlyArray<?{|
      +id: string,
      +filterName: ?string,
      +canBeDeleted: ?boolean,
      +status: ?SportunityStatus,
      +statuses: ?$ReadOnlyArray<?SportunityStatus>,
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
    |}>,
  |},
  +$fragmentRefs: FilterDetailSports_viewer$ref & SavedFilterList_viewer$ref & FilterSportunityTypes_viewer$ref,
  +$refType: FiltersPage_viewer$ref,
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
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v1
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v9 = [
  v6,
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v10 = {
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
      "selections": v9
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v9
    }
  ]
},
v11 = [
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
];
return {
  "kind": "Fragment",
  "name": "FiltersPage_viewer",
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
      "name": "FilterSportunityTypes_viewer",
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
        v2,
        v3,
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
          "name": "canQuerySportunityTypeFilter",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circlesUserIsIn",
          "storageKey": "circlesUserIsIn(last:20)",
          "args": v4,
          "concreteType": "CircleConnection",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "FilterDetailCircles_circles",
              "args": null
            }
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
            v0
          ]
        },
        v5,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "savedFilters",
          "storageKey": null,
          "args": null,
          "concreteType": "UserFilter",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "circles",
              "storageKey": "circles(last:20)",
              "args": v4,
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
                        v6,
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
                            v1,
                            v2
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
              "name": "canBeDeleted",
              "args": null,
              "storageKey": null
            },
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
                    v8
                  ]
                }
              ]
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
                        v8,
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
                    v10
                  ]
                },
                v10
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
              "selections": v11
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "price",
              "storageKey": null,
              "args": null,
              "concreteType": "IntInterval",
              "plural": false,
              "selections": v11
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '404e344e115802020593d14305c26031';
module.exports = node;

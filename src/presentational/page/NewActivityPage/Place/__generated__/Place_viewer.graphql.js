/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type SlotStatus = "CANCELLED" | "PAST" | "PENDING" | "PLANNED" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Place_viewer$ref: FragmentReference;
export type Place_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +profileType: ?UserProfileType,
  |},
  +infrastructures?: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +venue: ?{|
      +id: string,
      +name: string,
      +address: ?{|
        +address: string,
        +city: string,
        +zip: ?string,
        +country: string,
      |},
    |},
    +logo: ?string,
    +sport: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +EN: ?string,
        +FR: ?string,
      |},
      +logo: string,
    |}>,
  |}>,
  +slots?: ?$ReadOnlyArray<?{|
    +id: string,
    +status: ?SlotStatus,
    +venue: ?{|
      +id: string,
      +name: string,
      +address: ?{|
        +address: string,
        +city: string,
        +zip: ?string,
        +country: string,
      |},
      +owner: ?{|
        +id: string,
        +pseudo: string,
      |},
    |},
    +infrastructure: ?{|
      +id: string,
      +name: string,
      +logo: ?string,
      +sport: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?{|
          +EN: ?string,
          +FR: ?string,
        |},
        +logo: string,
      |}>,
    |},
    +from: any,
    +end: any,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
    +serie_information: ?{|
      +firstDate: ?any,
      +lastDate: ?any,
      +remainingSlots: ?number,
    |},
  |}>,
  +$refType: Place_viewer$ref,
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
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "Filter"
  }
],
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
      "kind": "ScalarField",
      "alias": null,
      "name": "country",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "Sport",
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
    v4
  ]
};
return {
  "kind": "Fragment",
  "name": "Place_viewer",
  "type": "Viewer",
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
      "name": "filter",
      "type": "Filter",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "profileType",
          "args": null,
          "storageKey": null
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
          "name": "infrastructures",
          "storageKey": null,
          "args": v1,
          "concreteType": "Infrastructure",
          "plural": true,
          "selections": [
            v0,
            v2,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "venue",
              "storageKey": null,
              "args": null,
              "concreteType": "Venue",
              "plural": false,
              "selections": [
                v0,
                v2,
                v3
              ]
            },
            v4,
            v5
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "slots",
          "storageKey": null,
          "args": v1,
          "concreteType": "Slot",
          "plural": true,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "status",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "venue",
              "storageKey": null,
              "args": null,
              "concreteType": "Venue",
              "plural": false,
              "selections": [
                v0,
                v2,
                v3,
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
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "pseudo",
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
              "name": "infrastructure",
              "storageKey": null,
              "args": null,
              "concreteType": "Infrastructure",
              "plural": false,
              "selections": [
                v0,
                v2,
                v4,
                v5
              ]
            },
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
              "name": "end",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "price",
              "storageKey": null,
              "args": null,
              "concreteType": "Price",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "cents",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "currency",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "serie_information",
              "storageKey": null,
              "args": null,
              "concreteType": "serie_information",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "firstDate",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "lastDate",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "remainingSlots",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '7bf0ec9bcf1144b2a409fe24a1949363';
module.exports = node;

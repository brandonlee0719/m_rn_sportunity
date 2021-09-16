/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type AskedInformationType = "ADDRESS" | "BOOLEAN" | "CUSTOM" | "DATE" | "DOCUMENT" | "NUMBER" | "PHONE_NUMBER" | "TEXT" | "%future added value";
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CircleOptions_circle$ref: FragmentReference;
export type CircleOptions_circle = {|
  +id: string,
  +description: ?string,
  +mode: CircleKind,
  +isCircleUpdatableByMembers: ?boolean,
  +isCircleUsableByMembers: ?boolean,
  +isCircleAccessibleFromUrl: ?boolean,
  +sport: ?{|
    +sport: ?{|
      +id: string,
      +name: ?{|
        +EN: ?string,
        +FR: ?string,
      |},
    |},
    +levels: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?{|
        +name: ?string
      |},
      +FR: ?{|
        +name: ?string
      |},
    |}>,
  |},
  +address: ?{|
    +address: string,
    +zip: ?string,
    +city: string,
    +country: string,
  |},
  +circlePreferences: ?{|
    +isChildrenCircle: ?boolean
  |},
  +askedInformation: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +type: ?AskedInformationType,
    +filledByOwner: ?boolean,
  |}>,
  +membersInformation: ?$ReadOnlyArray<?{|
    +id: string,
    +information: ?string,
    +user: ?{|
      +id: string
    |},
    +value: ?string,
  |}>,
  +$refType: CircleOptions_circle$ref,
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
  v1
];
return {
  "kind": "Fragment",
  "name": "CircleOptions_circle",
  "type": "Circle",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isCircleAccessibleFromUrl",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isCircleUpdatableByMembers",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isCircleUsableByMembers",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "CircleSport",
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
          ]
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
              "selections": v2
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "FR",
              "storageKey": null,
              "args": null,
              "concreteType": "SportLevel",
              "plural": false,
              "selections": v2
            }
          ]
        }
      ]
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
          "name": "zip",
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
          "name": "country",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circlePreferences",
      "storageKey": null,
      "args": null,
      "concreteType": "CirclePreferences",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isChildrenCircle",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "askedInformation",
      "storageKey": null,
      "args": null,
      "concreteType": "askedInformation",
      "plural": true,
      "selections": [
        v0,
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "filledByOwner",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "membersInformation",
      "storageKey": null,
      "args": null,
      "concreteType": "membersInformation",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "information",
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
            v0
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "value",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '53c8a37fc962076847627c1801bfd432';
module.exports = node;

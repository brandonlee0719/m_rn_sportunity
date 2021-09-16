/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type ButtonSportunity_sportunity$ref: FragmentReference;
export type ButtonSportunity_sportunity = {|
  +id: string,
  +status: ?string,
  +waiting: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +cancel_date: ?any,
  +canceling: ?$ReadOnlyArray<?{|
    +canceling_user: ?{|
      +id: string
    |},
    +status: ?cancelBookinStatus,
    +cancelation_date: ?any,
  |}>,
  +price: ?{|
    +cents: number,
    +currency: ?Currency,
  |},
  +organizers: ?$ReadOnlyArray<?{|
    +organizer: ?{|
      +pseudo: string
    |},
    +isAdmin: boolean,
  |}>,
  +participants: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
  |}>,
  +$refType: ButtonSportunity_sportunity$ref,
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
  "name": "status",
  "args": null,
  "storageKey": null
},
v2 = [
  v0
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ButtonSportunity_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "waiting",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v2
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cancel_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "canceling",
      "storageKey": null,
      "args": null,
      "concreteType": "Canceling",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "canceling_user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v2
        },
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cancelation_date",
          "args": null,
          "storageKey": null
        }
      ]
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
            v3
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
      "name": "participants",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": [
        v0,
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "avatar",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'affa9aa6533536458760353876169e70';
module.exports = node;

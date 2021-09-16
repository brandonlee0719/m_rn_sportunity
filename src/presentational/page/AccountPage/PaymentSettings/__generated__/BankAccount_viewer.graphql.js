/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BankAccount_viewer$ref: FragmentReference;
export type BankAccount_viewer = {|
  +me: ?{|
    +id: string,
    +bankAccount: ?{|
      +id: string,
      +ownerName: ?string,
      +addressLine1: ?string,
      +addressLine2: ?string,
      +city: ?string,
      +postalCode: ?string,
      +country: ?string,
      +IBAN: ?string,
      +BIC: ?string,
    |},
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +bankAccount: ?{|
        +id: string,
        +ownerName: ?string,
        +addressLine1: ?string,
        +addressLine2: ?string,
        +city: ?string,
        +postalCode: ?string,
        +country: ?string,
        +IBAN: ?string,
        +BIC: ?string,
      |},
    |}>,
    +masterAccount: ?{|
      +id: string,
      +pseudo: string,
      +bankAccount: ?{|
        +id: string,
        +ownerName: ?string,
        +addressLine1: ?string,
        +addressLine2: ?string,
        +city: ?string,
        +postalCode: ?string,
        +country: ?string,
        +IBAN: ?string,
        +BIC: ?string,
      |},
    |},
  |},
  +$refType: BankAccount_viewer$ref,
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
  "kind": "LinkedField",
  "alias": null,
  "name": "bankAccount",
  "storageKey": null,
  "args": null,
  "concreteType": "BankAccount",
  "plural": false,
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ownerName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "addressLine1",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "addressLine2",
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
      "name": "postalCode",
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
      "name": "IBAN",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "BIC",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = [
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  v1
];
return {
  "kind": "Fragment",
  "name": "BankAccount_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "kind": "LinkedField",
          "alias": null,
          "name": "subAccounts",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": v2
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "masterAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v2
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4301d624a927e86dc8a3d099d8c82298';
module.exports = node;

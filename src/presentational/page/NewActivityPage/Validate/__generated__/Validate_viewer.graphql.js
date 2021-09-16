/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Validate_viewer$ref: FragmentReference;
export type Validate_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +isProfileComplete: ?boolean,
    +bankAccount: ?{|
      +id: string
    |},
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string,
      +cardType: ?string,
      +cardMask: ?string,
      +expirationDate: ?string,
    |}>,
  |},
  +sportunity?: ?{|
    +participants: ?$ReadOnlyArray<?{|
      +id: string
    |}>
  |},
  +$refType: Validate_viewer$ref,
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
  v0
];
return {
  "kind": "Fragment",
  "name": "Validate_viewer",
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
      "name": "sportunityID",
      "type": "ID",
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
          "name": "isProfileComplete",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "bankAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "BankAccount",
          "plural": false,
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "paymentMethods",
          "storageKey": null,
          "args": null,
          "concreteType": "PaymentMethod",
          "plural": true,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cardType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cardMask",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "expirationDate",
              "args": null,
              "storageKey": null
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
          "name": "sportunity",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "sportunityID",
              "type": "ID"
            }
          ],
          "concreteType": "Sportunity",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "participants",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": true,
              "selections": v1
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '87a881ffe60fe13893f96626e782569c';
module.exports = node;

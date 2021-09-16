/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ButtonSportunity_sportunity$ref = any;
type ButtonSportunity_user$ref = any;
type ButtonSportunity_viewer$ref = any;
type ConfirmBookingPageHeader_sportunity$ref = any;
type PriceView_sportunity$ref = any;
type PriceView_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type ConfirmBookingPage_viewer$ref: FragmentReference;
export type ConfirmBookingPage_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +firstName: ?string,
    +lastName: ?string,
    +address: ?{|
      +country: string
    |},
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string,
      +cardType: ?string,
      +cardMask: ?string,
      +expirationDate: ?string,
    |}>,
    +$fragmentRefs: ButtonSportunity_user$ref,
  |},
  +sportunity: ?{|
    +id: string,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
    +status: ?string,
    +$fragmentRefs: ConfirmBookingPageHeader_sportunity$ref & ButtonSportunity_sportunity$ref & PriceView_sportunity$ref,
  |},
  +$fragmentRefs: ButtonSportunity_viewer$ref & PriceView_viewer$ref,
  +$refType: ConfirmBookingPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ConfirmBookingPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "ButtonSportunity_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PriceView_viewer",
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "firstName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lastName",
          "args": null,
          "storageKey": null
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
              "name": "country",
              "args": null,
              "storageKey": null
            }
          ]
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
        },
        {
          "kind": "FragmentSpread",
          "name": "ButtonSportunity_user",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunity",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id",
          "type": "ID"
        }
      ],
      "concreteType": "Sportunity",
      "plural": false,
      "selections": [
        v0,
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
          "kind": "ScalarField",
          "alias": null,
          "name": "status",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ConfirmBookingPageHeader_sportunity",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ButtonSportunity_sportunity",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PriceView_sportunity",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '98883a8f19c0c8e35fec4f659367ba8a';
module.exports = node;

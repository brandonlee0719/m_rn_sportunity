/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentMethodsList_paymentMethods$ref: FragmentReference;
export type PaymentMethodsList_paymentMethods = $ReadOnlyArray<{|
  +id: string,
  +cardType: ?string,
  +cardMask: ?string,
  +expirationDate: ?string,
  +$refType: PaymentMethodsList_paymentMethods$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PaymentMethodsList_paymentMethods",
  "type": "PaymentMethod",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = '9c26185ecc90daab631422c3a8cbca3c';
module.exports = node;

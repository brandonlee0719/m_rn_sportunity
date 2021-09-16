/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PriceView_sportunity$ref: FragmentReference;
export type PriceView_sportunity = {|
  +kind: SportunityKind,
  +price: ?{|
    +currency: ?Currency,
    +cents: number,
  |},
  +paymentStatus: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string
    |},
    +status: ?PaymentStatus,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
  |}>,
  +invited_circles: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +mode: CircleKind,
        +memberCount: number,
        +type: ?CircleTypeEnum,
        +owner: ?{|
          +id: string,
          +avatar: ?string,
          +pseudo: string,
        |},
        +members: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
        |}>,
      |}
    |}>
  |},
  +price_for_circle: ?$ReadOnlyArray<?{|
    +circle: ?{|
      +id: string
    |},
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
  |}>,
  +$refType: PriceView_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  v2
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v1,
    v0
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PriceView_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "kind",
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
        v0,
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "paymentStatus",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityPaymentStatus",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v3
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "status",
          "args": null,
          "storageKey": null
        },
        v4
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "invited_circles",
      "storageKey": "invited_circles(last:100)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 100,
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
                v2,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
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
                  "name": "memberCount",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "type",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "owner",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": [
                    v2,
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "avatar",
                      "args": null,
                      "storageKey": null
                    },
                    v5
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "members",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": true,
                  "selections": [
                    v2,
                    v5
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "price_for_circle",
      "storageKey": null,
      "args": null,
      "concreteType": "PriceForCircle",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circle",
          "storageKey": null,
          "args": null,
          "concreteType": "Circle",
          "plural": false,
          "selections": v3
        },
        v4
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f13e45f3dfc956588612cd98a3ffabb';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ButtonSportunity_user$ref = any;
type ParticipantsList_user$ref = any;
type TopContent_user$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailInfo_user$ref: FragmentReference;
export type EventDetailInfo_user = {|
  +id: string,
  +avatar: ?string,
  +pseudo: string,
  +areStatisticsActivated: ?boolean,
  +profileType: ?UserProfileType,
  +calendar: ?{|
    +users: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +sportunities: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string
        |}
      |}>
    |},
  |},
  +$fragmentRefs: ButtonSportunity_user$ref & ParticipantsList_user$ref & TopContent_user$ref,
  +$refType: EventDetailInfo_user$ref,
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
  "name": "EventDetailInfo_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ButtonSportunity_user",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParticipantsList_user",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TopContent_user",
      "args": null
    },
    v0,
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
      "name": "pseudo",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "areStatisticsActivated",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "calendar",
      "storageKey": null,
      "args": null,
      "concreteType": "Calendar",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunities",
          "storageKey": "sportunities(last:1000)",
          "args": [
            {
              "kind": "Literal",
              "name": "last",
              "value": 1000,
              "type": "Int"
            }
          ],
          "concreteType": "SportunityConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "SportunityEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Sportunity",
                  "plural": false,
                  "selections": v1
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
(node/*: any*/).hash = 'e9a171c58751d3b9a5a8936454ecdaf1';
module.exports = node;

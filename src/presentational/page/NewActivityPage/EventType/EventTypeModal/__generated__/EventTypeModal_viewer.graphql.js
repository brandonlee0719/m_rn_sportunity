/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SearchModule_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventTypeModal_viewer$ref: FragmentReference;
export type EventTypeModal_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +opponentCircles?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +memberCount: number,
          +name: ?string,
        |}
      |}>
    |},
    +opponentCirclesFromClub?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +memberCount: number,
          +owner: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
        |}
      |}>
    |},
  |},
  +$fragmentRefs: SearchModule_viewer$ref,
  +$refType: EventTypeModal_viewer$ref,
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
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": [
      "TEAMS",
      "CLUBS"
    ],
    "type": "[CircleTypeEnum]"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EventTypeModal_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SearchModule_viewer",
      "args": null
    },
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
          "kind": "Condition",
          "passingValue": true,
          "condition": "query",
          "selections": [
            {
              "kind": "LinkedField",
              "alias": "opponentCircles",
              "name": "circles",
              "storageKey": "circles(last:20,type:[\"TEAMS\",\"CLUBS\"])",
              "args": v1,
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
                        v2,
                        v3
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": "opponentCirclesFromClub",
              "name": "circlesFromClub",
              "storageKey": "circlesFromClub(last:20,type:[\"TEAMS\",\"CLUBS\"])",
              "args": v1,
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
                        v3,
                        v2,
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
                            },
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
                    }
                  ]
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
(node/*: any*/).hash = '7bbd1243ca8a7daaaa95e9067b58c4f9';
module.exports = node;

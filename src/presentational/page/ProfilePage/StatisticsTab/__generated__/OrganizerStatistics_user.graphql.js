/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizerStatistics_user$ref: FragmentReference;
export type OrganizerStatistics_user = {|
  +id: string,
  +pseudo: string,
  +circles: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +memberCount: number,
      |}
    |}>
  |},
  +defaultStatisticFilter: ?{|
    +id: string,
    +name: ?string,
    +date_begin: ?any,
    +date_end: ?any,
    +circleList: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string
        |}
      |}>
    |},
  |},
  +statisticFilters: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +date_begin: ?any,
    +date_end: ?any,
    +circleList: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
        |}
      |}>
    |},
  |}>,
  +$refType: OrganizerStatistics_user$ref,
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
    "name": "first",
    "value": 10,
    "type": "Int"
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
  "kind": "ScalarField",
  "alias": null,
  "name": "date_begin",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date_end",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "OrganizerStatistics_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
      "kind": "LinkedField",
      "alias": null,
      "name": "circles",
      "storageKey": "circles(first:10)",
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "memberCount",
                  "args": null,
                  "storageKey": null
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
      "name": "defaultStatisticFilter",
      "storageKey": null,
      "args": null,
      "concreteType": "StatisticFilter",
      "plural": false,
      "selections": [
        v0,
        v2,
        v3,
        v4,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circleList",
          "storageKey": "circleList(first:10)",
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
                    v0
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
      "name": "statisticFilters",
      "storageKey": null,
      "args": null,
      "concreteType": "StatisticFilter",
      "plural": true,
      "selections": [
        v0,
        v2,
        v3,
        v4,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circleList",
          "storageKey": "circleList(first:10)",
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
                    v2
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
(node/*: any*/).hash = '2d2f10b4e41f1401b9e21ddfc3be0b0d';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type SportTypeEnum = "COLLECTIVE" | "COMBAT" | "OTHER" | "RACKETSPORT" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityStatisticsModal_sportunity$ref: FragmentReference;
export type SportunityStatisticsModal_sportunity = {|
  +id: string,
  +title: string,
  +beginning_date: any,
  +ending_date: any,
  +sport: ?{|
    +sport: ?{|
      +type: ?SportTypeEnum,
      +sportunityTypes: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?{|
          +FR: ?string,
          +EN: ?string,
        |},
      |}>,
    |}
  |},
  +sportunityType: ?{|
    +id: string,
    +name: ?{|
      +FR: ?string,
      +EN: ?string,
    |},
    +statuses: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +FR: ?string,
        +EN: ?string,
      |},
    |}>,
    +isScoreRelevant: ?boolean,
  |},
  +sportunityTypeStatus: ?{|
    +id: string,
    +name: ?{|
      +FR: ?string,
      +EN: ?string,
    |},
  |},
  +score: ?{|
    +currentTeam: ?number,
    +adversaryTeam: ?number,
  |},
  +$refType: SportunityStatisticsModal_sportunity$ref,
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
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "FR",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "EN",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = [
  v0,
  v1
];
return {
  "kind": "Fragment",
  "name": "SportunityStatisticsModal_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "beginning_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ending_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunitySport",
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
              "name": "sportunityTypes",
              "storageKey": null,
              "args": null,
              "concreteType": "SportunityType",
              "plural": true,
              "selections": v2
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunityType",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityType",
      "plural": false,
      "selections": [
        v0,
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "statuses",
          "storageKey": null,
          "args": null,
          "concreteType": "SportunityTypeStatus",
          "plural": true,
          "selections": v2
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isScoreRelevant",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunityTypeStatus",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityTypeStatus",
      "plural": false,
      "selections": v2
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "score",
      "storageKey": null,
      "args": null,
      "concreteType": "Score",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currentTeam",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "adversaryTeam",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af916b7896ab5f45a84185b4a661d1f0';
module.exports = node;

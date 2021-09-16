/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EventTypeModal_viewer$ref = any;
export type SportTypeEnum = "COLLECTIVE" | "COMBAT" | "OTHER" | "RACKETSPORT" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventType_viewer$ref: FragmentReference;
export type EventType_viewer = {|
  +id: string,
  +sport: ?{|
    +type: ?SportTypeEnum,
    +sportunityTypes: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +FR: ?string,
        +EN: ?string,
      |},
      +isScoreRelevant: ?boolean,
    |}>,
  |},
  +$fragmentRefs: EventTypeModal_viewer$ref,
  +$refType: EventType_viewer$ref,
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
  "name": "EventType_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "sportID",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "EventTypeModal_viewer",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "sportID",
          "type": "ID"
        }
      ],
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
          "selections": [
            v0,
            {
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isScoreRelevant",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0242146495a04e13b15e2fd1ff83a13f';
module.exports = node;

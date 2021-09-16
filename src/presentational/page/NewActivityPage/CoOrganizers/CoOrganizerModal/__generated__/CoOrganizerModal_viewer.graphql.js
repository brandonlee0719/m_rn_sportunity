/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SearchModule_viewer$ref = any;
export type SportTypeEnum = "COLLECTIVE" | "COMBAT" | "OTHER" | "RACKETSPORT" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CoOrganizerModal_viewer$ref: FragmentReference;
export type CoOrganizerModal_viewer = {|
  +id: string,
  +me: ?{|
    +id: string
  |},
  +sport?: ?{|
    +id: string,
    +type: ?SportTypeEnum,
    +assistantTypes: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +EN: ?string,
        +FR: ?string,
        +DE: ?string,
        +ES: ?string,
      |},
    |}>,
  |},
  +$fragmentRefs: SearchModule_viewer$ref,
  +$refType: CoOrganizerModal_viewer$ref,
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
  "name": "CoOrganizerModal_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "sportID",
      "type": "ID",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "SearchModule_viewer",
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
        v0
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
            v0,
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
              "name": "assistantTypes",
              "storageKey": null,
              "args": null,
              "concreteType": "AssistantType",
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
                      "name": "EN",
                      "args": null,
                      "storageKey": null
                    },
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
                      "name": "DE",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "ES",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '121d2a0799ad4482baae20efa632837f';
module.exports = node;

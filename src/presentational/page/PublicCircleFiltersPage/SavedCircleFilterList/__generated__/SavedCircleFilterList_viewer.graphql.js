/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SavedCircleFilterList_viewer$ref: FragmentReference;
export type SavedCircleFilterList_viewer = {|
  +sports: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?{|
          +EN: ?string,
          +FR: ?string,
        |},
        +logo: string,
        +levels: ?$ReadOnlyArray<?{|
          +id: string,
          +EN: ?{|
            +name: ?string
          |},
          +FR: ?{|
            +name: ?string
          |},
        |}>,
      |}
    |}>
  |},
  +$refType: SavedCircleFilterList_viewer$ref,
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
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "SavedCircleFilterList_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "ids",
      "type": "[String]"
    },
    {
      "kind": "RootArgument",
      "name": "queryLanguage",
      "type": "SupportedLanguage"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sports",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "ids",
          "variableName": "ids",
          "type": "[String]"
        },
        {
          "kind": "Variable",
          "name": "language",
          "variableName": "queryLanguage",
          "type": "SupportedLanguage"
        },
        {
          "kind": "Literal",
          "name": "last",
          "value": 20,
          "type": "Int"
        }
      ],
      "concreteType": "SportConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "SportEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Sport",
              "plural": false,
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
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "logo",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "levels",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Translated",
                  "plural": true,
                  "selections": [
                    v0,
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "EN",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "SportLevel",
                      "plural": false,
                      "selections": v1
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "FR",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "SportLevel",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd18343c33aaeb85786cbeccaef53d0ef';
module.exports = node;

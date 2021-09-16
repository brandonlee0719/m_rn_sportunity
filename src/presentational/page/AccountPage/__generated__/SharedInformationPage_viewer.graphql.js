/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type AskedInformationType = "ADDRESS" | "BOOLEAN" | "CUSTOM" | "DATE" | "DOCUMENT" | "NUMBER" | "PHONE_NUMBER" | "TEXT" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SharedInformationPage_viewer$ref: FragmentReference;
export type SharedInformationPage_viewer = {|
  +me: ?{|
    +id: string,
    +circlesUserIsIn: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +owner: ?{|
            +pseudo: string
          |},
          +askedInformation: ?$ReadOnlyArray<?{|
            +id: string,
            +name: ?string,
            +type: ?AskedInformationType,
            +filledByOwner: ?boolean,
            +answers: ?$ReadOnlyArray<?string>,
            +form: ?{|
              +id: string,
              +name: ?string,
            |},
          |}>,
          +membersInformation: ?$ReadOnlyArray<?{|
            +id: string,
            +information: ?string,
            +user: ?{|
              +id: string
            |},
            +value: ?string,
          |}>,
        |}
      |}>
    |},
  |},
  +$refType: SharedInformationPage_viewer$ref,
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
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SharedInformationPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "kind": "LinkedField",
          "alias": null,
          "name": "circlesUserIsIn",
          "storageKey": "circlesUserIsIn(last:100)",
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
                    v0,
                    v1,
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "owner",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "User",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "pseudo",
                          "args": null,
                          "storageKey": null
                        }
                      ]
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "askedInformation",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "askedInformation",
                      "plural": true,
                      "selections": [
                        v0,
                        v1,
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "type",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "filledByOwner",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "answers",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "form",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "CircleInformationFormOutput",
                          "plural": false,
                          "selections": [
                            v0,
                            v1
                          ]
                        }
                      ]
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "membersInformation",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "membersInformation",
                      "plural": true,
                      "selections": [
                        v0,
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "information",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "user",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": false,
                          "selections": [
                            v0
                          ]
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "value",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d3e654ff72e60ef3a9f7627aad86e98';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CircleAndMemberList_viewer$ref: FragmentReference;
export type CircleAndMemberList_viewer = {|
  +id: string,
  +circle?: ?{|
    +members: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |}>
  |},
  +$refType: CircleAndMemberList_viewer$ref,
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
  "name": "CircleAndMemberList_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryCircle",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "circleId",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryCircle",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circle",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "circleId",
              "type": "ID"
            }
          ],
          "concreteType": "Circle",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "members",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": true,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '582e171a74ed524ead1a788667a06da1';
module.exports = node;

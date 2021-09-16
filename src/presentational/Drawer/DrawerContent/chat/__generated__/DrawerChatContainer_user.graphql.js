/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawerChatContainer_user$ref: FragmentReference;
export type DrawerChatContainer_user = {|
  +id: string,
  +unreadChats?: ?number,
  +$refType: DrawerChatContainer_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DrawerChatContainer_user",
  "type": "User",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "query",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "unreadChats",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5a4771e08455a1b27aa1cd5d91a85d6b';
module.exports = node;

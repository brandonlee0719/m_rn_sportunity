/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EventDetailInfo_sportunity$ref = any;
type EventDetailInfo_user$ref = any;
type EventDetailInfo_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailInfoContainer_query$ref: FragmentReference;
export type EventDetailInfoContainer_query = {|
  +viewer: ?{|
    +id: string,
    +me: ?{|
      +$fragmentRefs: EventDetailInfo_user$ref
    |},
    +sportunity: ?{|
      +$fragmentRefs: EventDetailInfo_sportunity$ref
    |},
    +chat: ?{|
      +id: string
    |},
    +$fragmentRefs: EventDetailInfo_viewer$ref,
  |},
  +$refType: EventDetailInfoContainer_query$ref,
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
  "name": "EventDetailInfoContainer_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "sportunityId",
      "type": "ID",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "sportunityChatId",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "sportunityRelaunchId",
      "type": "String!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "Viewer",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "FragmentSpread",
          "name": "EventDetailInfo_viewer",
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
            {
              "kind": "FragmentSpread",
              "name": "EventDetailInfo_user",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunity",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "sportunityId",
              "type": "ID"
            }
          ],
          "concreteType": "Sportunity",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "EventDetailInfo_sportunity",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "chat",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "sportunityId",
              "variableName": "sportunityChatId",
              "type": "String"
            }
          ],
          "concreteType": "Chat",
          "plural": false,
          "selections": [
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0b24a464eb9d3d7ca75f8bdcb43a2353';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EventDetailPageView_sportunity$ref = any;
type EventDetailPageView_user$ref = any;
type EventDetailPageView_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailPageContainer_viewer$ref: FragmentReference;
export type EventDetailPageContainer_viewer = {|
  +id: string,
  +me: ?{|
    +$fragmentRefs: EventDetailPageView_user$ref
  |},
  +sportunity: ?{|
    +$fragmentRefs: EventDetailPageView_sportunity$ref
  |},
  +chat: ?{|
    +id: string
  |},
  +$fragmentRefs: EventDetailPageView_viewer$ref,
  +$refType: EventDetailPageContainer_viewer$ref,
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
  "name": "EventDetailPageContainer_viewer",
  "type": "Viewer",
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
    v0,
    {
      "kind": "FragmentSpread",
      "name": "EventDetailPageView_viewer",
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
          "name": "EventDetailPageView_user",
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
          "name": "EventDetailPageView_sportunity",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '169599b54846f0f26ad3ee9f5cd600a4';
module.exports = node;

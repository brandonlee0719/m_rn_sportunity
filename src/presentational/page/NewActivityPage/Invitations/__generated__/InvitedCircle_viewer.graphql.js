/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type InvitedCircleDetails_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type InvitedCircle_viewer$ref: FragmentReference;
export type InvitedCircle_viewer = {|
  +id: string,
  +me: ?{|
    +pseudo: string,
    +avatar: ?string,
  |},
  +$fragmentRefs: InvitedCircleDetails_viewer$ref,
  +$refType: InvitedCircle_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "InvitedCircle_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
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
    },
    {
      "kind": "FragmentSpread",
      "name": "InvitedCircleDetails_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1920a3bed10d03a4d8f309d321e7b7af';
module.exports = node;

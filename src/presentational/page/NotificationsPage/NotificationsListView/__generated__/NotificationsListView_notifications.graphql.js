/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type NotificationItemView_notification$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NotificationsListView_notifications$ref: FragmentReference;
export type NotificationsListView_notifications = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: NotificationItemView_notification$ref
    |}
  |}>,
  +$refType: NotificationsListView_notifications$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NotificationsListView_notifications",
  "type": "NotificationConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "NotificationEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Notification",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "NotificationItemView_notification",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ba9c7fc61f8516ddba7e55df5bbd7b31';
module.exports = node;

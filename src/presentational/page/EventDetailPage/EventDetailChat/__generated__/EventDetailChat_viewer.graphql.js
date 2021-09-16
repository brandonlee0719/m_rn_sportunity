/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailChat_viewer$ref: FragmentReference;
export type EventDetailChat_viewer = {|
  +me: ?{|
    +id: string
  |},
  +sportunity: ?{|
    +id: string,
    +organizers: ?$ReadOnlyArray<?{|
      +isAdmin: boolean,
      +organizer: ?{|
        +id: string
      |},
      +permissions: ?{|
        +detailsAccess: ?{|
          +view: ?boolean,
          +edit: ?boolean,
        |},
        +chatAccess: ?{|
          +view: ?boolean,
          +edit: ?boolean,
        |},
        +memberAccess: ?{|
          +view: ?boolean,
          +edit: ?boolean,
        |},
        +carPoolingAccess: ?{|
          +view: ?boolean,
          +edit: ?boolean,
        |},
        +imageAccess: ?{|
          +view: ?boolean,
          +edit: ?boolean,
        |},
        +compositionAccess: ?{|
          +view: ?boolean,
          +edit: ?boolean,
        |},
      |},
    |}>,
  |},
  +chat: ?{|
    +id: string
  |},
  +$refType: EventDetailChat_viewer$ref,
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
  v0
],
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "EventDetailChat_viewer",
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
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v1
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
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "organizers",
          "storageKey": null,
          "args": null,
          "concreteType": "Organizer",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isAdmin",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "organizer",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": v1
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "permissions",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersPermissions",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "detailsAccess",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersDetailsAccess",
                  "plural": false,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "chatAccess",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersChatAccess",
                  "plural": false,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "memberAccess",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersMemberAccess",
                  "plural": false,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "carPoolingAccess",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersCarPoolingAccess",
                  "plural": false,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "imageAccess",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersImageAccess",
                  "plural": false,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "compositionAccess",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersCompositionAccess",
                  "plural": false,
                  "selections": v2
                }
              ]
            }
          ]
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
      "selections": v1
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1943ce6abe535b2a0d960051d9c387d';
module.exports = node;

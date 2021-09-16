/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CalendarSync_user$ref: FragmentReference;
export type CalendarSync_user = {|
  +id: string,
  +circlesUserIsIn: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +owner: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
      |}
    |}>
  |},
  +calendar: ?{|
    +users: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
    |}>,
    +preferences: ?{|
      +own_synchronized_status: ?$ReadOnlyArray<?SportunityStatus>
    |},
  |},
  +profileType: ?UserProfileType,
  +$refType: CalendarSync_user$ref,
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CalendarSync_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circlesUserIsIn",
      "storageKey": "circlesUserIsIn(first:100)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
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
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "owner",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": [
                    v0,
                    v1,
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "calendar",
      "storageKey": null,
      "args": null,
      "concreteType": "Calendar",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": [
            v0,
            v1
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "preferences",
          "storageKey": null,
          "args": null,
          "concreteType": "CalendarPreferences",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "own_synchronized_status",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profileType",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6d508dfad3a4626bdc70958203a0c0e';
module.exports = node;

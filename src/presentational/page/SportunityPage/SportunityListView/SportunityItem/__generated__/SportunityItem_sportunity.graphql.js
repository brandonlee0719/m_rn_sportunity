/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BottomContent_sportunity$ref = any;
type TopContent_sportunity$ref = any;
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityItem_sportunity$ref: FragmentReference;
export type SportunityItem_sportunity = {|
  +id: string,
  +title: string,
  +status: ?string,
  +cancel_date: ?any,
  +game_information: ?{|
    +opponent: ?{|
      +organizerPseudo: ?string,
      +unknownOpponent: ?boolean,
      +lookingForAnOpponent: ?boolean,
      +organizer: ?{|
        +id: string,
        +pseudo: string,
        +avatar: ?string,
      |},
      +invitedOpponents: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +members: ?$ReadOnlyArray<?{|
              +id: string
            |}>,
          |}
        |}>
      |},
    |}
  |},
  +organizers: ?$ReadOnlyArray<?{|
    +organizer: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +isAdmin: boolean,
    +role: OrganizerRole,
    +secondaryOrganizerType: ?{|
      +id: string,
      +name: ?{|
        +FR: ?string,
        +EN: ?string,
        +DE: ?string,
        +ES: ?string,
      |},
    |},
    +customSecondaryOrganizerType: ?string,
  |}>,
  +$fragmentRefs: TopContent_sportunity$ref & BottomContent_sportunity$ref,
  +$refType: SportunityItem_sportunity$ref,
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
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
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
};
return {
  "kind": "Fragment",
  "name": "SportunityItem_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cancel_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "game_information",
      "storageKey": null,
      "args": null,
      "concreteType": "GameInformation",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "opponent",
          "storageKey": null,
          "args": null,
          "concreteType": "SportunityOpponentOutput",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "organizerPseudo",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "unknownOpponent",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lookingForAnOpponent",
              "args": null,
              "storageKey": null
            },
            v1,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "invitedOpponents",
              "storageKey": "invitedOpponents(last:5)",
              "args": [
                {
                  "kind": "Literal",
                  "name": "last",
                  "value": 5,
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
                          "name": "members",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": true,
                          "selections": [
                            v0
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "organizers",
      "storageKey": null,
      "args": null,
      "concreteType": "Organizer",
      "plural": true,
      "selections": [
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isAdmin",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "role",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "secondaryOrganizerType",
          "storageKey": null,
          "args": null,
          "concreteType": "AssistantType",
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
                  "name": "FR",
                  "args": null,
                  "storageKey": null
                },
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
                  "name": "DE",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "ES",
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
          "name": "customSecondaryOrganizerType",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "TopContent_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BottomContent_sportunity",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '652332944bf41114294f6848921f3486';
module.exports = node;

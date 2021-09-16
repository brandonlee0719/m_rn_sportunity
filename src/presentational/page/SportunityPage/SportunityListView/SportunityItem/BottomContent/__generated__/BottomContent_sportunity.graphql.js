/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type BottomContent_sportunity$ref: FragmentReference;
export type BottomContent_sportunity = {|
  +nbShares: ?number,
  +status: ?string,
  +survey: ?{|
    +isSurveyTransformed: ?boolean,
    +surveyDates: ?$ReadOnlyArray<?{|
      +answers: ?$ReadOnlyArray<?{|
        +user: ?{|
          +id: string,
          +pseudo: string,
        |},
        +answer: ?invitedUserAnswer,
      |}>
    |}>,
  |},
  +participants: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +waiting: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +willing: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +canceling: ?$ReadOnlyArray<?{|
    +canceling_user: ?{|
      +id: string
    |},
    +status: ?cancelBookinStatus,
    +cancelation_date: ?any,
  |}>,
  +participantRange: ?{|
    +from: ?number,
    +to: ?number,
  |},
  +organizers: ?$ReadOnlyArray<?{|
    +isAdmin: boolean,
    +organizer: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
  |}>,
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
  +$refType: BottomContent_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = [
  v1
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v1,
    v2,
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
  "name": "BottomContent_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "nbShares",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "survey",
      "storageKey": null,
      "args": null,
      "concreteType": "Survey",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isSurveyTransformed",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "surveyDates",
          "storageKey": null,
          "args": null,
          "concreteType": "SurveyDatesOutput",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "answers",
              "storageKey": null,
              "args": null,
              "concreteType": "SurveyAnswer",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "user",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": [
                    v1,
                    v2
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "answer",
                  "args": null,
                  "storageKey": null
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
      "name": "participants",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v3
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "waiting",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v3
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "willing",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v3
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "canceling",
      "storageKey": null,
      "args": null,
      "concreteType": "Canceling",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "canceling_user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v3
        },
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cancelation_date",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "participantRange",
      "storageKey": null,
      "args": null,
      "concreteType": "IntInterval",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "from",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "to",
          "args": null,
          "storageKey": null
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isAdmin",
          "args": null,
          "storageKey": null
        },
        v4
      ]
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
            v4,
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
                        v1,
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "members",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": true,
                          "selections": v3
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
(node/*: any*/).hash = '04ae6dacf0b8fd6b971c75bae14a9ac5';
module.exports = node;

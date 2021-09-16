/**
 * @flow
 * @relayHash f0fd0ca1c7edfc0285e7ec2576a19729
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type organizerPickSurveyDateInput = {
  sportunityID: string,
  beginning_date?: ?string,
  ending_date?: ?string,
  clientMutationId?: ?string,
};
export type OrganizerPicksSurveyDateMutationVariables = {|
  input: organizerPickSurveyDateInput
|};
export type OrganizerPicksSurveyDateMutationResponse = {|
  +organizerPickDate: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +beginning_date: any,
        +ending_date: any,
        +survey: ?{|
          +isSurveyTransformed: ?boolean,
          +surveyDates: ?$ReadOnlyArray<?{|
            +beginning_date: ?string,
            +ending_date: ?string,
            +answers: ?$ReadOnlyArray<?{|
              +user: ?{|
                +id: string,
                +pseudo: string,
                +avatar: ?string,
              |},
              +answer: ?invitedUserAnswer,
            |}>,
          |}>,
        |},
      |}
    |},
  |}
|};
export type OrganizerPicksSurveyDateMutation = {|
  variables: OrganizerPicksSurveyDateMutationVariables,
  response: OrganizerPicksSurveyDateMutationResponse,
|};
*/


/*
mutation OrganizerPicksSurveyDateMutation(
  $input: organizerPickSurveyDateInput!
) {
  organizerPickDate(input: $input) {
    clientMutationId
    edge {
      node {
        beginning_date
        ending_date
        survey {
          isSurveyTransformed
          surveyDates {
            beginning_date
            ending_date
            answers {
              user {
                id
                pseudo
                avatar
              }
              answer
            }
          }
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "organizerPickSurveyDateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "organizerPickSurveyDateInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ending_date",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
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
        v3,
        v4,
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
                v5,
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrganizerPicksSurveyDateMutation",
  "id": null,
  "text": "mutation OrganizerPicksSurveyDateMutation(\n  $input: organizerPickSurveyDateInput!\n) {\n  organizerPickDate(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        beginning_date\n        ending_date\n        survey {\n          isSurveyTransformed\n          surveyDates {\n            beginning_date\n            ending_date\n            answers {\n              user {\n                id\n                pseudo\n                avatar\n              }\n              answer\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizerPicksSurveyDateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizerPickDate",
        "storageKey": null,
        "args": v1,
        "concreteType": "organizerPickSurveyDatePayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v3,
                  v4,
                  v6
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizerPicksSurveyDateMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizerPickDate",
        "storageKey": null,
        "args": v1,
        "concreteType": "organizerPickSurveyDatePayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v3,
                  v4,
                  v6,
                  v5
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a279bab447504180b8d6bb2c6ac543a8';
module.exports = node;

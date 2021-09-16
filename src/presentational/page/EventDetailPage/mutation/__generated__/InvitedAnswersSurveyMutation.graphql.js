/**
 * @flow
 * @relayHash 142b2e5b27597967ea3ae00b7088ea89
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type invitedAnswersSurveyInput = {
  sportunityID: string,
  userId: string,
  answers: $ReadOnlyArray<?SurveyInvitedAnswers>,
  clientMutationId?: ?string,
};
export type SurveyInvitedAnswers = {
  beginning_date?: ?string,
  ending_date?: ?string,
  answer: invitedUserAnswer,
};
export type InvitedAnswersSurveyMutationVariables = {|
  input: invitedAnswersSurveyInput
|};
export type InvitedAnswersSurveyMutationResponse = {|
  +invitedAnswersSurvey: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
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
        |}
      |}
    |},
  |}
|};
export type InvitedAnswersSurveyMutation = {|
  variables: InvitedAnswersSurveyMutationVariables,
  response: InvitedAnswersSurveyMutationResponse,
|};
*/


/*
mutation InvitedAnswersSurveyMutation(
  $input: invitedAnswersSurveyInput!
) {
  invitedAnswersSurvey(input: $input) {
    clientMutationId
    edge {
      node {
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
    "type": "invitedAnswersSurveyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "invitedAnswersSurveyInput!"
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
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
          "kind": "ScalarField",
          "alias": null,
          "name": "beginning_date",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "ending_date",
          "args": null,
          "storageKey": null
        },
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
                v3,
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
  "name": "InvitedAnswersSurveyMutation",
  "id": null,
  "text": "mutation InvitedAnswersSurveyMutation(\n  $input: invitedAnswersSurveyInput!\n) {\n  invitedAnswersSurvey(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        survey {\n          isSurveyTransformed\n          surveyDates {\n            beginning_date\n            ending_date\n            answers {\n              user {\n                id\n                pseudo\n                avatar\n              }\n              answer\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InvitedAnswersSurveyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "invitedAnswersSurvey",
        "storageKey": null,
        "args": v1,
        "concreteType": "invitedAnswersSurveyPayload",
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
                  v4
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
    "name": "InvitedAnswersSurveyMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "invitedAnswersSurvey",
        "storageKey": null,
        "args": v1,
        "concreteType": "invitedAnswersSurveyPayload",
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
                  v4,
                  v3
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
(node/*: any*/).hash = 'eec1fab9efca48bb8d5f960243d02673';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SurveyView_sportunity$ref: FragmentReference;
export type SurveyView_sportunity = {|
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
  +organizers: ?$ReadOnlyArray<?{|
    +organizer: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |}
  |}>,
  +invited: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +answer: ?invitedUserAnswer,
  |}>,
  +$refType: SurveyView_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
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
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": v0
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "answer",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "SurveyView_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
              "selections": v1
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "organizer",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v0
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "invited",
      "storageKey": null,
      "args": null,
      "concreteType": "Invited",
      "plural": true,
      "selections": v1
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db6d50d82798e65337086ff9c0a65b49';
module.exports = node;

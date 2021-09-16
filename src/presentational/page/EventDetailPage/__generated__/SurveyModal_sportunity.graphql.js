/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SurveyModal_sportunity$ref: FragmentReference;
export type SurveyModal_sportunity = {|
  +survey: ?{|
    +isSurveyTransformed: ?boolean,
    +surveyDates: ?$ReadOnlyArray<?{|
      +beginning_date: ?string,
      +ending_date: ?string,
      +answers: ?$ReadOnlyArray<?{|
        +answer: ?invitedUserAnswer
      |}>,
    |}>,
  |},
  +invited: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string
    |}
  |}>,
  +$refType: SurveyModal_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SurveyModal_sportunity",
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
              "selections": [
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
      "name": "invited",
      "storageKey": null,
      "args": null,
      "concreteType": "Invited",
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ac6528b4cbd4e9ab724cae00b48765bb';
module.exports = node;

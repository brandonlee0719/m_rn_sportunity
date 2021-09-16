/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type OrganizerStatistics_user$ref = any;
type ParticipantStatistics_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatisticsTab_user$ref: FragmentReference;
export type StatisticsTab_user = {|
  +id: string,
  +pseudo: string,
  +userStatistics?: ?{|
    +hasData: ?boolean,
    +percentageOfOrganized: ?number,
    +globalNote: ?number,
    +averageTime: ?{|
      +FR: ?string,
      +EN: ?string,
    |},
    +steps: ?$ReadOnlyArray<?{|
      +step: ?{|
        +FR: ?string,
        +EN: ?string,
      |},
      +value: ?number,
    |}>,
    +membersUserParticipatesWith: ?$ReadOnlyArray<?{|
      +user: ?{|
        +id: string,
        +pseudo: string,
        +avatar: ?string,
      |},
      +number: ?number,
    |}>,
    +numberOfParticipated: ?number,
    +averageNumberOfParticipatedWeek: ?number,
    +averageNumberOfParticipatedMonth: ?number,
    +averageNumberOfParticipatedYear: ?number,
  |},
  +$fragmentRefs: OrganizerStatistics_user$ref & ParticipantStatistics_user$ref,
  +$refType: StatisticsTab_user$ref,
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
},
v2 = [
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
  }
];
return {
  "kind": "Fragment",
  "name": "StatisticsTab_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryStats",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "OrganizerStatistics_user",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParticipantStatistics_user",
      "args": null
    },
    v0,
    v1,
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryStats",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "userStatistics",
          "storageKey": null,
          "args": null,
          "concreteType": "UserStatistics",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasData",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "percentageOfOrganized",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "globalNote",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "averageTime",
              "storageKey": null,
              "args": null,
              "concreteType": "TranslatedString",
              "plural": false,
              "selections": v2
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "steps",
              "storageKey": null,
              "args": null,
              "concreteType": "UserStatisticsSteps",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "step",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "TranslatedString",
                  "plural": false,
                  "selections": v2
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "value",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "membersUserParticipatesWith",
              "storageKey": null,
              "args": null,
              "concreteType": "MembersUserParticipatesWith",
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
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "number",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "numberOfParticipated",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "averageNumberOfParticipatedWeek",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "averageNumberOfParticipatedMonth",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "averageNumberOfParticipatedYear",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '3ce15a645ef930f5c02382ae81d9f9fc';
module.exports = node;

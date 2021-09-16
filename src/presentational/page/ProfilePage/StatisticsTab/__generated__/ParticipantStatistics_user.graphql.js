/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CirclesItem_circle$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type ParticipantStatistics_user$ref: FragmentReference;
export type ParticipantStatistics_user = {|
  +id: string,
  +pseudo: string,
  +circlesUserIsIn: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +memberCount: number,
        +isCircleAccessibleFromUrl: ?boolean,
        +owner: ?{|
          +id: string,
          +profileType: ?UserProfileType,
          +pseudo: string,
        |},
        +coOwners: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
        +members: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
        +memberParents: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
        +$fragmentRefs: CirclesItem_circle$ref,
      |}
    |}>,
    +count: ?number,
  |},
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
  +$refType: ParticipantStatistics_user$ref,
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
  v0
],
v3 = [
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
  "name": "ParticipantStatistics_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "queryStats",
      "type": "Boolean"
    }
  ],
  "selections": [
    v0,
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circlesUserIsIn",
      "storageKey": "circlesUserIsIn(first:20)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 20,
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
                {
                  "kind": "FragmentSpread",
                  "name": "CirclesItem_circle",
                  "args": null
                },
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "memberCount",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isCircleAccessibleFromUrl",
                  "args": null,
                  "storageKey": null
                },
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
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "profileType",
                      "args": null,
                      "storageKey": null
                    },
                    v1
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "coOwners",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": true,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "members",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": true,
                  "selections": v2
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "memberParents",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": true,
                  "selections": v2
                }
              ]
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "count",
          "args": null,
          "storageKey": null
        }
      ]
    },
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
              "selections": v3
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
                  "selections": v3
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
(node/*: any*/).hash = 'd9a210df584cd0fb82fd8fd12568cb4f';
module.exports = node;

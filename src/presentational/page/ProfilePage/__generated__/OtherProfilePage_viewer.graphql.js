/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FeedbacksList_feedbacks$ref = any;
type Languages_languages$ref = any;
type Report_reporters$ref = any;
type SportsList_sports$ref = any;
type SportunityListView_sportunities$ref = any;
type SportunityListView_user$ref = any;
type SportunityListView_viewer$ref = any;
type StatisticsTab_user$ref = any;
type StatisticsTab_viewer$ref = any;
export type Sex = "FEMALE" | "MALE" | "OTHER" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type OtherProfilePage_viewer$ref: FragmentReference;
export type OtherProfilePage_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +blackList: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +calendar: ?{|
      +users: ?$ReadOnlyArray<?{|
        +id: string
      |}>,
      +sportunities: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string
          |}
        |}>
      |},
    |},
  |},
  +sportunities?: ?{|
    +$fragmentRefs: SportunityListView_sportunities$ref
  |},
  +user: ?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
    +description: ?string,
    +profileType: ?UserProfileType,
    +birthday: ?any,
    +sex: Sex,
    +blackList: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +publicAddress: ?{|
      +city: string,
      +country: string,
    |},
    +reporters: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Report_reporters$ref
    |}>,
    +sportunityNumber: ?number,
    +languages: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Languages_languages$ref
    |}>,
    +sports: ?$ReadOnlyArray<?{|
      +$fragmentRefs: SportsList_sports$ref
    |}>,
    +feedbacks: ?{|
      +$fragmentRefs: FeedbacksList_feedbacks$ref
    |},
    +followers: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +$fragmentRefs: StatisticsTab_user$ref & SportunityListView_user$ref,
  |},
  +$fragmentRefs: SportunityListView_viewer$ref & StatisticsTab_viewer$ref,
  +$refType: OtherProfilePage_viewer$ref,
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
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "blackList",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v1
};
return {
  "kind": "Fragment",
  "name": "OtherProfilePage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "userId",
      "type": "String!",
      "defaultValue": "_"
    },
    {
      "kind": "LocalArgument",
      "name": "querySportunities",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryStats",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "sportunityFilter",
      "type": "Filter",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "SportunityListView_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatisticsTab_viewer",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0,
        v2,
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
              "selections": v1
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sportunities",
              "storageKey": "sportunities(last:1000)",
              "args": [
                {
                  "kind": "Literal",
                  "name": "last",
                  "value": 1000,
                  "type": "Int"
                }
              ],
              "concreteType": "SportunityConnection",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportunityEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Sportunity",
                      "plural": false,
                      "selections": v1
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
      "name": "user",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "userId",
          "type": "String!"
        }
      ],
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "sex",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "StatisticsTab_user",
          "args": [
            {
              "kind": "Variable",
              "name": "queryStats",
              "variableName": "queryStats",
              "type": null
            }
          ]
        },
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "profileType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "birthday",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "SportunityListView_user",
          "args": null
        },
        v2,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "publicAddress",
          "storageKey": null,
          "args": null,
          "concreteType": "AddressModel",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "city",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "country",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "reporters",
          "storageKey": null,
          "args": null,
          "concreteType": "ReporterUser",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Report_reporters",
              "args": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "sportunityNumber",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "languages",
          "storageKey": null,
          "args": null,
          "concreteType": "Language",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Languages_languages",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sports",
          "storageKey": null,
          "args": null,
          "concreteType": "SportDescriptor",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SportsList_sports",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "feedbacks",
          "storageKey": null,
          "args": null,
          "concreteType": "Feedbacks",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "FeedbacksList_feedbacks",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "followers",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": v1
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "querySportunities",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunities",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "sportunityFilter",
              "type": "Filter"
            },
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            },
            {
              "kind": "Variable",
              "name": "userId",
              "variableName": "userId",
              "type": "String"
            }
          ],
          "concreteType": "SportunityConnection",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SportunityListView_sportunities",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '25ea30e94d9cbb08270ba568daee3fa5';
module.exports = node;

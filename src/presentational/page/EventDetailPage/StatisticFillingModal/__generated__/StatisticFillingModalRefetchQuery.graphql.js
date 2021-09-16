/**
 * @flow
 * @relayHash a0ecdb13023acdeae203268683ae8ca4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StatisticFillingModal_viewer$ref = any;
export type StatisticFillingModalRefetchQueryVariables = {|
  sportunityStatisticsId?: ?string,
  querySportunityStatistics: boolean,
|};
export type StatisticFillingModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: StatisticFillingModal_viewer$ref
  |}
|};
export type StatisticFillingModalRefetchQuery = {|
  variables: StatisticFillingModalRefetchQueryVariables,
  response: StatisticFillingModalRefetchQueryResponse,
|};
*/


/*
query StatisticFillingModalRefetchQuery(
  $sportunityStatisticsId: String
  $querySportunityStatistics: Boolean!
) {
  viewer {
    ...StatisticFillingModal_viewer_2xMtqB
    id
  }
}

fragment StatisticFillingModal_viewer_2xMtqB on Viewer {
  ...SportunityStatisticsModal_viewer
  ...ParticipantsStatisticsModal_viewer
  sportunityStatistics(sportunityID: $sportunityStatisticsId) @include(if: $querySportunityStatistics) {
    statisticName {
      id
      name
    }
    participant {
      id
      pseudo
      avatar
    }
    value
  }
}

fragment SportunityStatisticsModal_viewer on Viewer {
  id
}

fragment ParticipantsStatisticsModal_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityStatisticsId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "querySportunityStatistics",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StatisticFillingModalRefetchQuery",
  "id": null,
  "text": "query StatisticFillingModalRefetchQuery(\n  $sportunityStatisticsId: String\n  $querySportunityStatistics: Boolean!\n) {\n  viewer {\n    ...StatisticFillingModal_viewer_2xMtqB\n    id\n  }\n}\n\nfragment StatisticFillingModal_viewer_2xMtqB on Viewer {\n  ...SportunityStatisticsModal_viewer\n  ...ParticipantsStatisticsModal_viewer\n  sportunityStatistics(sportunityID: $sportunityStatisticsId) @include(if: $querySportunityStatistics) {\n    statisticName {\n      id\n      name\n    }\n    participant {\n      id\n      pseudo\n      avatar\n    }\n    value\n  }\n}\n\nfragment SportunityStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment ParticipantsStatisticsModal_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StatisticFillingModalRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "StatisticFillingModal_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "querySportunityStatistics",
                "variableName": "querySportunityStatistics",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityStatisticsId",
                "variableName": "sportunityStatisticsId",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StatisticFillingModalRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "querySportunityStatistics",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityStatistics",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "sportunityID",
                    "variableName": "sportunityStatisticsId",
                    "type": "String"
                  }
                ],
                "concreteType": "Statistic",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "statisticName",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participant",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      v1,
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
                    "name": "value",
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9c498af7ec955b8dda48cc1f1e94f06';
module.exports = node;

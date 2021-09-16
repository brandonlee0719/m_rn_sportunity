/**
 * @flow
 * @relayHash 830467409121e142853b06b0a02fc42e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventStatistics_viewer$ref = any;
export type EventStatisticsRefetchQueryVariables = {|
  sportunityStatisticsId?: ?string,
  querySportunityStatistics: boolean,
|};
export type EventStatisticsRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventStatistics_viewer$ref
  |}
|};
export type EventStatisticsRefetchQuery = {|
  variables: EventStatisticsRefetchQueryVariables,
  response: EventStatisticsRefetchQueryResponse,
|};
*/


/*
query EventStatisticsRefetchQuery(
  $sportunityStatisticsId: String
  $querySportunityStatistics: Boolean!
) {
  viewer {
    ...EventStatistics_viewer_2xMtqB
    id
  }
}

fragment EventStatistics_viewer_2xMtqB on Viewer {
  id
  me {
    id
    pseudo
    email
    avatar
  }
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
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventStatisticsRefetchQuery",
  "id": null,
  "text": "query EventStatisticsRefetchQuery(\n  $sportunityStatisticsId: String\n  $querySportunityStatistics: Boolean!\n) {\n  viewer {\n    ...EventStatistics_viewer_2xMtqB\n    id\n  }\n}\n\nfragment EventStatistics_viewer_2xMtqB on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    avatar\n  }\n  sportunityStatistics(sportunityID: $sportunityStatisticsId) @include(if: $querySportunityStatistics) {\n    statisticName {\n      id\n      name\n    }\n    participant {\n      id\n      pseudo\n      avatar\n    }\n    value\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventStatisticsRefetchQuery",
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
            "name": "EventStatistics_viewer",
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
    "name": "EventStatisticsRefetchQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
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
                "name": "email",
                "args": null,
                "storageKey": null
              },
              v3
            ]
          },
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
                      v2,
                      v3
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
(node/*: any*/).hash = 'de172d236fadb8498180151ac3c77d50';
module.exports = node;

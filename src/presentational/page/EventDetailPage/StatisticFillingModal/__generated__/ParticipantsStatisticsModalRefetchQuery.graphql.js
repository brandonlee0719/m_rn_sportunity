/**
 * @flow
 * @relayHash 68a0c62accbee0a43e90f71941b01f90
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ParticipantsStatisticsModal_viewer$ref = any;
export type ParticipantsStatisticsModalRefetchQueryVariables = {|
  participantsStatisticsModalId?: ?string,
  queryParticipantsStatisticsModal: boolean,
|};
export type ParticipantsStatisticsModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ParticipantsStatisticsModal_viewer$ref
  |}
|};
export type ParticipantsStatisticsModalRefetchQuery = {|
  variables: ParticipantsStatisticsModalRefetchQueryVariables,
  response: ParticipantsStatisticsModalRefetchQueryResponse,
|};
*/


/*
query ParticipantsStatisticsModalRefetchQuery(
  $participantsStatisticsModalId: String
  $queryParticipantsStatisticsModal: Boolean!
) {
  viewer {
    ...ParticipantsStatisticsModal_viewer_37cwl1
    id
  }
}

fragment ParticipantsStatisticsModal_viewer_37cwl1 on Viewer {
  id
  sportunityStatistics(sportunityID: $participantsStatisticsModalId) @include(if: $queryParticipantsStatisticsModal) {
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
    "name": "participantsStatisticsModalId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryParticipantsStatisticsModal",
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
  "name": "ParticipantsStatisticsModalRefetchQuery",
  "id": null,
  "text": "query ParticipantsStatisticsModalRefetchQuery(\n  $participantsStatisticsModalId: String\n  $queryParticipantsStatisticsModal: Boolean!\n) {\n  viewer {\n    ...ParticipantsStatisticsModal_viewer_37cwl1\n    id\n  }\n}\n\nfragment ParticipantsStatisticsModal_viewer_37cwl1 on Viewer {\n  id\n  sportunityStatistics(sportunityID: $participantsStatisticsModalId) @include(if: $queryParticipantsStatisticsModal) {\n    statisticName {\n      id\n      name\n    }\n    participant {\n      id\n      pseudo\n      avatar\n    }\n    value\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ParticipantsStatisticsModalRefetchQuery",
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
            "name": "ParticipantsStatisticsModal_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "participantsStatisticsModalId",
                "variableName": "participantsStatisticsModalId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryParticipantsStatisticsModal",
                "variableName": "queryParticipantsStatisticsModal",
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
    "name": "ParticipantsStatisticsModalRefetchQuery",
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
            "condition": "queryParticipantsStatisticsModal",
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
                    "variableName": "participantsStatisticsModalId",
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
(node/*: any*/).hash = '1fbad90bdfa1e1fc7d313be9a6531b9b';
module.exports = node;

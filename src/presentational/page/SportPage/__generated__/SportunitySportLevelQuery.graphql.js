/**
 * @flow
 * @relayHash 4e85308cb817c23eeb16fdd4e1ad2b5c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportunitySportLevel_viewer$ref = any;
export type SportunitySportLevelQueryVariables = {|
  querySport: boolean,
  sportId?: ?string,
|};
export type SportunitySportLevelQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SportunitySportLevel_viewer$ref
  |}
|};
export type SportunitySportLevelQuery = {|
  variables: SportunitySportLevelQueryVariables,
  response: SportunitySportLevelQueryResponse,
|};
*/


/*
query SportunitySportLevelQuery(
  $querySport: Boolean!
  $sportId: ID
) {
  viewer {
    ...SportunitySportLevel_viewer_2aTrpD
    id
  }
}

fragment SportunitySportLevel_viewer_2aTrpD on Viewer {
  id
  sport(id: $sportId) @include(if: $querySport) {
    ...SportList_sport
    id
  }
}

fragment SportList_sport on Sport {
  id
  name {
    id
    EN
    FR
  }
  logo
  levels {
    id
    EN {
      name
      description
      skillLevel
    }
    FR {
      name
      description
      skillLevel
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "querySport",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportId",
    "type": "ID",
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
v2 = [
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
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SportunitySportLevelQuery",
  "id": null,
  "text": "query SportunitySportLevelQuery(\n  $querySport: Boolean!\n  $sportId: ID\n) {\n  viewer {\n    ...SportunitySportLevel_viewer_2aTrpD\n    id\n  }\n}\n\nfragment SportunitySportLevel_viewer_2aTrpD on Viewer {\n  id\n  sport(id: $sportId) @include(if: $querySport) {\n    ...SportList_sport\n    id\n  }\n}\n\nfragment SportList_sport on Sport {\n  id\n  name {\n    id\n    EN\n    FR\n  }\n  logo\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SportunitySportLevelQuery",
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
            "name": "SportunitySportLevel_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "querySport",
                "variableName": "querySport",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportId",
                "variableName": "sportId",
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
    "name": "SportunitySportLevelQuery",
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
            "condition": "querySport",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sport",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "sportId",
                    "type": "ID"
                  }
                ],
                "concreteType": "Sport",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "name",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TranslatedString",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "EN",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "FR",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "logo",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "levels",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Translated",
                    "plural": true,
                    "selections": [
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "EN",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v2
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v2
                      }
                    ]
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
(node/*: any*/).hash = 'aab7b05997a05745a85ddf1f8668251e';
module.exports = node;

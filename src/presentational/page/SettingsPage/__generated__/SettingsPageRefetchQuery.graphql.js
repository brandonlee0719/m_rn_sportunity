/**
 * @flow
 * @relayHash a628ff2ac47a167d6e9a6b3546803774
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SettingsPage_query$ref = any;
export type SettingsPageRefetchQueryVariables = {|
  queryMe: boolean
|};
export type SettingsPageRefetchQueryResponse = {|
  +$fragmentRefs: SettingsPage_query$ref
|};
export type SettingsPageRefetchQuery = {|
  variables: SettingsPageRefetchQueryVariables,
  response: SettingsPageRefetchQueryResponse,
|};
*/


/*
query SettingsPageRefetchQuery(
  $queryMe: Boolean!
) {
  ...SettingsPage_query_2PKOPq
}

fragment SettingsPage_query_2PKOPq on Query {
  viewer {
    me @include(if: $queryMe) {
      id
      pseudo
      homePagePreference
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryMe",
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
  "name": "SettingsPageRefetchQuery",
  "id": null,
  "text": "query SettingsPageRefetchQuery(\n  $queryMe: Boolean!\n) {\n  ...SettingsPage_query_2PKOPq\n}\n\nfragment SettingsPage_query_2PKOPq on Query {\n  viewer {\n    me @include(if: $queryMe) {\n      id\n      pseudo\n      homePagePreference\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SettingsPageRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SettingsPage_query",
        "args": [
          {
            "kind": "Variable",
            "name": "queryMe",
            "variableName": "queryMe",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SettingsPageRefetchQuery",
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
            "condition": "queryMe",
            "selections": [
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
                    "name": "homePagePreference",
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
(node/*: any*/).hash = '2d043ec05021d1e7efde71a679c279d6';
module.exports = node;

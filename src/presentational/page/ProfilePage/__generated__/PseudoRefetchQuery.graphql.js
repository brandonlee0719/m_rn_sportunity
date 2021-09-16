/**
 * @flow
 * @relayHash c767f25a8628de99b419c6d658c2379a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Pseudo_viewer$ref = any;
export type PseudoRefetchQueryVariables = {|
  pseudo?: ?string,
  requestUserExists: boolean,
|};
export type PseudoRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Pseudo_viewer$ref
  |}
|};
export type PseudoRefetchQuery = {|
  variables: PseudoRefetchQueryVariables,
  response: PseudoRefetchQueryResponse,
|};
*/


/*
query PseudoRefetchQuery(
  $pseudo: String
  $requestUserExists: Boolean!
) {
  viewer {
    ...Pseudo_viewer_11KTup
    id
  }
}

fragment Pseudo_viewer_11KTup on Viewer {
  userExists(pseudo: $pseudo) @include(if: $requestUserExists)
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "pseudo",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "requestUserExists",
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
  "name": "PseudoRefetchQuery",
  "id": null,
  "text": "query PseudoRefetchQuery(\n  $pseudo: String\n  $requestUserExists: Boolean!\n) {\n  viewer {\n    ...Pseudo_viewer_11KTup\n    id\n  }\n}\n\nfragment Pseudo_viewer_11KTup on Viewer {\n  userExists(pseudo: $pseudo) @include(if: $requestUserExists)\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PseudoRefetchQuery",
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
            "name": "Pseudo_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "pseudo",
                "variableName": "pseudo",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "requestUserExists",
                "variableName": "requestUserExists",
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
    "name": "PseudoRefetchQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1
            ]
          },
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "requestUserExists",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "userExists",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "pseudo",
                    "variableName": "pseudo",
                    "type": "String"
                  }
                ],
                "storageKey": null
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
(node/*: any*/).hash = '420eaf581a554ffc2412cd8f96fd0fe3';
module.exports = node;

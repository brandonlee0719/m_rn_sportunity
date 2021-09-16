/**
 * @flow
 * @relayHash 1a8ea061fca775e32144aa567b6ed22c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateProfilePage_viewer$ref = any;
export type CreateProfilePageRefetchQueryVariables = {|
  pseudo?: ?string,
  email?: ?string,
  requestUserExists: boolean,
|};
export type CreateProfilePageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CreateProfilePage_viewer$ref
  |}
|};
export type CreateProfilePageRefetchQuery = {|
  variables: CreateProfilePageRefetchQueryVariables,
  response: CreateProfilePageRefetchQueryResponse,
|};
*/


/*
query CreateProfilePageRefetchQuery(
  $pseudo: String
  $email: String
  $requestUserExists: Boolean!
) {
  viewer {
    ...CreateProfilePage_viewer_1PEI4o
    id
  }
}

fragment CreateProfilePage_viewer_1PEI4o on Viewer {
  id
  userExists(pseudo: $pseudo, email: $email) @include(if: $requestUserExists)
  me {
    id
    pseudo
    email
    phoneNumber
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
    "name": "email",
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
  "name": "CreateProfilePageRefetchQuery",
  "id": null,
  "text": "query CreateProfilePageRefetchQuery(\n  $pseudo: String\n  $email: String\n  $requestUserExists: Boolean!\n) {\n  viewer {\n    ...CreateProfilePage_viewer_1PEI4o\n    id\n  }\n}\n\nfragment CreateProfilePage_viewer_1PEI4o on Viewer {\n  id\n  userExists(pseudo: $pseudo, email: $email) @include(if: $requestUserExists)\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProfilePageRefetchQuery",
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
            "name": "CreateProfilePage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "email",
                "variableName": "email",
                "type": null
              },
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
    "name": "CreateProfilePageRefetchQuery",
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
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phoneNumber",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
                    "name": "email",
                    "variableName": "email",
                    "type": "String"
                  },
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
(node/*: any*/).hash = 'c03522bdf830bc65c9fbc881b01b518a';
module.exports = node;

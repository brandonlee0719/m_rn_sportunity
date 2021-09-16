/**
 * @flow
 * @relayHash dd57c1d8e80e513768f2245d1a3dd45b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Validate_viewer$ref = any;
export type ValidateRefetchQueryVariables = {|
  query: boolean,
  sportunityID?: ?string,
|};
export type ValidateRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Validate_viewer$ref
  |}
|};
export type ValidateRefetchQuery = {|
  variables: ValidateRefetchQueryVariables,
  response: ValidateRefetchQueryResponse,
|};
*/


/*
query ValidateRefetchQuery(
  $query: Boolean!
  $sportunityID: ID
) {
  viewer {
    ...Validate_viewer_176crA
    id
  }
}

fragment Validate_viewer_176crA on Viewer {
  id
  me {
    id
    isProfileComplete
    bankAccount {
      id
    }
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
  sportunity(id: $sportunityID) @include(if: $query) {
    participants {
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityID",
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
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ValidateRefetchQuery",
  "id": null,
  "text": "query ValidateRefetchQuery(\n  $query: Boolean!\n  $sportunityID: ID\n) {\n  viewer {\n    ...Validate_viewer_176crA\n    id\n  }\n}\n\nfragment Validate_viewer_176crA on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n  sportunity(id: $sportunityID) @include(if: $query) {\n    participants {\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ValidateRefetchQuery",
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
            "name": "Validate_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityID",
                "variableName": "sportunityID",
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
    "name": "ValidateRefetchQuery",
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
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "bankAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "BankAccount",
                "plural": false,
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentMethods",
                "storageKey": null,
                "args": null,
                "concreteType": "PaymentMethod",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "expirationDate",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunity",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "sportunityID",
                    "type": "ID"
                  }
                ],
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participants",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v2
                  },
                  v1
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
(node/*: any*/).hash = '8de59421f441c034f78c187d11574192';
module.exports = node;

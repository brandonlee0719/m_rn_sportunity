/**
 * @flow
 * @relayHash 9df3fa91c012ddf5725ed8fdc750f13d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentMethodPage_viewer$ref = any;
export type PaymentMethodPageQueryVariables = {||};
export type PaymentMethodPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PaymentMethodPage_viewer$ref
  |}
|};
export type PaymentMethodPageQuery = {|
  variables: PaymentMethodPageQueryVariables,
  response: PaymentMethodPageQueryResponse,
|};
*/


/*
query PaymentMethodPageQuery {
  viewer {
    ...PaymentMethodPage_viewer
    id
  }
}

fragment PaymentMethodPage_viewer on Viewer {
  me {
    id
  }
  cardRegistration {
    cardRegistrationId
    preregistrationData
    accessKey
    cardRegistrationURL
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PaymentMethodPageQuery",
  "id": null,
  "text": "query PaymentMethodPageQuery {\n  viewer {\n    ...PaymentMethodPage_viewer\n    id\n  }\n}\n\nfragment PaymentMethodPage_viewer on Viewer {\n  me {\n    id\n  }\n  cardRegistration {\n    cardRegistrationId\n    preregistrationData\n    accessKey\n    cardRegistrationURL\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentMethodPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "name": "PaymentMethodPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentMethodPageQuery",
    "argumentDefinitions": [],
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
              v0
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cardRegistration",
            "storageKey": null,
            "args": null,
            "concreteType": "cardRegistration",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cardRegistrationId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "preregistrationData",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "accessKey",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cardRegistrationURL",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '107c5e8509d78aa6f8d41d84c6f24416';
module.exports = node;

/**
 * @flow
 * @relayHash e8a104ae92cff7f03a231957aa9c62c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ForgotPassword_viewer$ref = any;
export type ForgotPasswordQueryVariables = {||};
export type ForgotPasswordQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ForgotPassword_viewer$ref
  |}
|};
export type ForgotPasswordQuery = {|
  variables: ForgotPasswordQueryVariables,
  response: ForgotPasswordQueryResponse,
|};
*/


/*
query ForgotPasswordQuery {
  viewer {
    ...ForgotPassword_viewer
    id
  }
}

fragment ForgotPassword_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "ForgotPasswordQuery",
  "id": null,
  "text": "query ForgotPasswordQuery {\n  viewer {\n    ...ForgotPassword_viewer\n    id\n  }\n}\n\nfragment ForgotPassword_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ForgotPasswordQuery",
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
            "name": "ForgotPassword_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ForgotPasswordQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '7f31325ec618865cbd5a9ac8c9ddcf35';
module.exports = node;

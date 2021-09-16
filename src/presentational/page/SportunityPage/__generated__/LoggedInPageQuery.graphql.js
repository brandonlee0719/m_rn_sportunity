/**
 * @flow
 * @relayHash 99902b24331d717419ba7a142fffb4de
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LoggedInPage_query$ref = any;
export type LoggedInPageQueryVariables = {||};
export type LoggedInPageQueryResponse = {|
  +$fragmentRefs: LoggedInPage_query$ref
|};
export type LoggedInPageQuery = {|
  variables: LoggedInPageQueryVariables,
  response: LoggedInPageQueryResponse,
|};
*/


/*
query LoggedInPageQuery {
  ...LoggedInPage_query
}

fragment LoggedInPage_query on Query {
  viewer {
    me {
      id
      pseudo
      homePagePreference
    }
    id
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
  "name": "LoggedInPageQuery",
  "id": null,
  "text": "query LoggedInPageQuery {\n  ...LoggedInPage_query\n}\n\nfragment LoggedInPage_query on Query {\n  viewer {\n    me {\n      id\n      pseudo\n      homePagePreference\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoggedInPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LoggedInPage_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LoggedInPageQuery",
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
              v0,
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
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '626228700ed7100a6b615e3c45b74357';
module.exports = node;

/**
 * @flow
 * @relayHash 9141062a851dfb477794b3bad76d7204
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SubaccountsManagment_user$ref = any;
type SubaccountsManagment_viewer$ref = any;
export type SubaccountsManagmentRefetchQueryVariables = {||};
export type SubaccountsManagmentRefetchQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +$fragmentRefs: SubaccountsManagment_user$ref
    |},
    +$fragmentRefs: SubaccountsManagment_viewer$ref,
  |}
|};
export type SubaccountsManagmentRefetchQuery = {|
  variables: SubaccountsManagmentRefetchQueryVariables,
  response: SubaccountsManagmentRefetchQueryResponse,
|};
*/


/*
query SubaccountsManagmentRefetchQuery {
  viewer {
    ...SubaccountsManagment_viewer
    me {
      ...SubaccountsManagment_user
      id
    }
    id
  }
}

fragment SubaccountsManagment_viewer on Viewer {
  id
  ...CreateProfilePage_viewer
}

fragment SubaccountsManagment_user on User {
  id
  subAccounts {
    id
    pseudo
    avatar
  }
  profileType
}

fragment CreateProfilePage_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    phoneNumber
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SubaccountsManagmentRefetchQuery",
  "id": null,
  "text": "query SubaccountsManagmentRefetchQuery {\n  viewer {\n    ...SubaccountsManagment_viewer\n    me {\n      ...SubaccountsManagment_user\n      id\n    }\n    id\n  }\n}\n\nfragment SubaccountsManagment_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment SubaccountsManagment_user on User {\n  id\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n  profileType\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SubaccountsManagmentRefetchQuery",
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
            "name": "SubaccountsManagment_viewer",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "SubaccountsManagment_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SubaccountsManagmentRefetchQuery",
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
          v0,
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
              v1,
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v0,
                  v1,
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
                "name": "profileType",
                "args": null,
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
(node/*: any*/).hash = '886cdee898fb61cfc216d84752c48082';
module.exports = node;

/**
 * @flow
 * @relayHash 9d77db6620d1556f53935f7770e3fd98
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PersonalInformationPage_viewer$ref = any;
export type PersonalInformationPageQueryVariables = {||};
export type PersonalInformationPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PersonalInformationPage_viewer$ref
  |}
|};
export type PersonalInformationPageQuery = {|
  variables: PersonalInformationPageQueryVariables,
  response: PersonalInformationPageQueryResponse,
|};
*/


/*
query PersonalInformationPageQuery {
  viewer {
    ...PersonalInformationPage_viewer
    id
  }
}

fragment PersonalInformationPage_viewer on Viewer {
  me {
    id
    isProfileComplete
    profileType
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
  "name": "PersonalInformationPageQuery",
  "id": null,
  "text": "query PersonalInformationPageQuery {\n  viewer {\n    ...PersonalInformationPage_viewer\n    id\n  }\n}\n\nfragment PersonalInformationPage_viewer on Viewer {\n  me {\n    id\n    isProfileComplete\n    profileType\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PersonalInformationPageQuery",
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
            "name": "PersonalInformationPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PersonalInformationPageQuery",
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
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
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
(node/*: any*/).hash = '093c59da77d75f634f534e273fb2431e';
module.exports = node;

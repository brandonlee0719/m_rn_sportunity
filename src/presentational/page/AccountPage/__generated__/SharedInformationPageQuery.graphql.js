/**
 * @flow
 * @relayHash 3f1a17ab3fc0b16106ceba107877c822
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SharedInformationPage_viewer$ref = any;
export type SharedInformationPageQueryVariables = {||};
export type SharedInformationPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SharedInformationPage_viewer$ref
  |}
|};
export type SharedInformationPageQuery = {|
  variables: SharedInformationPageQueryVariables,
  response: SharedInformationPageQueryResponse,
|};
*/


/*
query SharedInformationPageQuery {
  viewer {
    ...SharedInformationPage_viewer
    id
  }
}

fragment SharedInformationPage_viewer on Viewer {
  me {
    id
    circlesUserIsIn(last: 100) {
      edges {
        node {
          id
          name
          owner {
            pseudo
            id
          }
          askedInformation {
            id
            name
            type
            filledByOwner
            answers
            form {
              id
              name
            }
          }
          membersInformation {
            id
            information
            user {
              id
            }
            value
          }
        }
      }
    }
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
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SharedInformationPageQuery",
  "id": null,
  "text": "query SharedInformationPageQuery {\n  viewer {\n    ...SharedInformationPage_viewer\n    id\n  }\n}\n\nfragment SharedInformationPage_viewer on Viewer {\n  me {\n    id\n    circlesUserIsIn(last: 100) {\n      edges {\n        node {\n          id\n          name\n          owner {\n            pseudo\n            id\n          }\n          askedInformation {\n            id\n            name\n            type\n            filledByOwner\n            answers\n            form {\n              id\n              name\n            }\n          }\n          membersInformation {\n            id\n            information\n            user {\n              id\n            }\n            value\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SharedInformationPageQuery",
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
            "name": "SharedInformationPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SharedInformationPageQuery",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  }
                ],
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v0,
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "pseudo",
                                "args": null,
                                "storageKey": null
                              },
                              v0
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "askedInformation",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "askedInformation",
                            "plural": true,
                            "selections": [
                              v0,
                              v1,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "type",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "filledByOwner",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "answers",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "form",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "CircleInformationFormOutput",
                                "plural": false,
                                "selections": [
                                  v0,
                                  v1
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "membersInformation",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "membersInformation",
                            "plural": true,
                            "selections": [
                              v0,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "information",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "user",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": [
                                  v0
                                ]
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "value",
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
(node/*: any*/).hash = '82c7c4e3afe3dc0f69299f96c0556948';
module.exports = node;

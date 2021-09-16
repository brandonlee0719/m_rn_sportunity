/**
 * @flow
 * @relayHash 41d464c1da62a1ef38d0a1c65050b0db
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CirclesItem_circle$ref = any;
export type CirclesItemRefetchQueryVariables = {|
  queryDetails: boolean,
  itemID: string,
|};
export type CirclesItemRefetchQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: CirclesItem_circle$ref
  |}
|};
export type CirclesItemRefetchQuery = {|
  variables: CirclesItemRefetchQueryVariables,
  response: CirclesItemRefetchQueryResponse,
|};
*/


/*
query CirclesItemRefetchQuery(
  $queryDetails: Boolean!
  $itemID: ID!
) {
  node(id: $itemID) {
    __typename
    ...CirclesItem_circle_1ft31x
    id
  }
}

fragment CirclesItem_circle_1ft31x on Circle {
  id
  name
  memberCount
  mode
  isCircleUsableByMembers
  isCircleAccessibleFromUrl
  type
  owner {
    id
    avatar
    pseudo
  }
  coOwners {
    id
  }
  members {
    id
  }
  memberParents {
    id
  }
  termsOfUses @include(if: $queryDetails) {
    id
    name
    link
    content
    acceptedBy {
      user {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryDetails",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "itemID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "itemID",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CirclesItemRefetchQuery",
  "id": null,
  "text": "query CirclesItemRefetchQuery(\n  $queryDetails: Boolean!\n  $itemID: ID!\n) {\n  node(id: $itemID) {\n    __typename\n    ...CirclesItem_circle_1ft31x\n    id\n  }\n}\n\nfragment CirclesItem_circle_1ft31x on Circle {\n  id\n  name\n  memberCount\n  mode\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  type\n  owner {\n    id\n    avatar\n    pseudo\n  }\n  coOwners {\n    id\n  }\n  members {\n    id\n  }\n  memberParents {\n    id\n  }\n  termsOfUses @include(if: $queryDetails) {\n    id\n    name\n    link\n    content\n    acceptedBy {\n      user {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CirclesItemRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CirclesItem_circle",
            "args": [
              {
                "kind": "Variable",
                "name": "queryDetails",
                "variableName": "queryDetails",
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
    "name": "CirclesItemRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "InlineFragment",
            "type": "Circle",
            "selections": [
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
                "name": "memberCount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mode",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isCircleUsableByMembers",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isCircleAccessibleFromUrl",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "avatar",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "pseudo",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "coOwners",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "memberParents",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v4
              },
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "queryDetails",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "termsOfUses",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleTermsOfUse",
                    "plural": true,
                    "selections": [
                      v2,
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "link",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "content",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "acceptedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TermsOfUseAcceptedBy",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "user",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v4
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
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0f65179b3e7dd4bb7ff88892764a1593';
module.exports = node;

/**
 * @flow
 * @relayHash 5237717e7f55a894c3bc97bba52d9898
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type bookCarPoolingInput = {
  sportunityID: string,
  carPoolingID: string,
  userID: string,
  clientMutationId?: ?string,
};
export type BookCarPoolingMutationVariables = {|
  input: bookCarPoolingInput
|};
export type BookCarPoolingMutationResponse = {|
  +bookCarPooling: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +carPoolings: ?$ReadOnlyArray<?{|
          +id: string,
          +driver: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +address: ?{|
            +address: string,
            +city: string,
            +zip: ?string,
            +country: string,
          |},
          +starting_date: ?any,
          +number_of_sits: ?number,
          +passengers: ?$ReadOnlyArray<?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |}>,
        |}>
      |}
    |},
  |}
|};
export type BookCarPoolingMutation = {|
  variables: BookCarPoolingMutationVariables,
  response: BookCarPoolingMutationResponse,
|};
*/


/*
mutation BookCarPoolingMutation(
  $input: bookCarPoolingInput!
) {
  bookCarPooling(input: $input) {
    clientMutationId
    edge {
      node {
        carPoolings {
          id
          driver {
            id
            pseudo
            avatar
          }
          address {
            address
            city
            zip
            country
          }
          starting_date
          number_of_sits
          passengers {
            id
            pseudo
            avatar
          }
        }
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
    "name": "input",
    "type": "bookCarPoolingInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "bookCarPoolingInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  v3,
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
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "carPoolings",
  "storageKey": null,
  "args": null,
  "concreteType": "CarPooling",
  "plural": true,
  "selections": [
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "driver",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v4
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "address",
      "storageKey": null,
      "args": null,
      "concreteType": "AddressModel",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "address",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "city",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "zip",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "country",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "starting_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "number_of_sits",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v4
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "BookCarPoolingMutation",
  "id": null,
  "text": "mutation BookCarPoolingMutation(\n  $input: bookCarPoolingInput!\n) {\n  bookCarPooling(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        carPoolings {\n          id\n          driver {\n            id\n            pseudo\n            avatar\n          }\n          address {\n            address\n            city\n            zip\n            country\n          }\n          starting_date\n          number_of_sits\n          passengers {\n            id\n            pseudo\n            avatar\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookCarPoolingMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookCarPooling",
        "storageKey": null,
        "args": v1,
        "concreteType": "bookCarPoolingPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v5
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookCarPoolingMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookCarPooling",
        "storageKey": null,
        "args": v1,
        "concreteType": "bookCarPoolingPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v5,
                  v3
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
(node/*: any*/).hash = '222013c465f9ac94736df37a58048acc';
module.exports = node;

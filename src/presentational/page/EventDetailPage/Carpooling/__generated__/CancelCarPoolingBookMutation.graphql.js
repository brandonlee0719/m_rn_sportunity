/**
 * @flow
 * @relayHash cdaf7b5b9b007f82ba76ae759a1f49ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type cancelCarPoolingBookInput = {
  sportunityID: string,
  carPoolingID: string,
  userID: string,
  clientMutationId?: ?string,
};
export type CancelCarPoolingBookMutationVariables = {|
  input: cancelCarPoolingBookInput
|};
export type CancelCarPoolingBookMutationResponse = {|
  +cancelCarPoolingBook: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +id: string,
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
        |}>,
      |}
    |},
  |}
|};
export type CancelCarPoolingBookMutation = {|
  variables: CancelCarPoolingBookMutationVariables,
  response: CancelCarPoolingBookMutationResponse,
|};
*/


/*
mutation CancelCarPoolingBookMutation(
  $input: cancelCarPoolingBookInput!
) {
  cancelCarPoolingBook(input: $input) {
    clientMutationId
    edge {
      node {
        id
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
    "type": "cancelCarPoolingBookInput!",
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
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "cancelCarPoolingBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "cancelCarPoolingBookInput!"
      }
    ],
    "concreteType": "cancelCarPoolingBookPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
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
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "carPoolings",
                "storageKey": null,
                "args": null,
                "concreteType": "CarPooling",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "driver",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v2
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
                    "selections": v2
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CancelCarPoolingBookMutation",
  "id": null,
  "text": "mutation CancelCarPoolingBookMutation(\n  $input: cancelCarPoolingBookInput!\n) {\n  cancelCarPoolingBook(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        carPoolings {\n          id\n          driver {\n            id\n            pseudo\n            avatar\n          }\n          address {\n            address\n            city\n            zip\n            country\n          }\n          starting_date\n          number_of_sits\n          passengers {\n            id\n            pseudo\n            avatar\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CancelCarPoolingBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "CancelCarPoolingBookMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '32fed6382cc8a53b8a297d8b9556df82';
module.exports = node;

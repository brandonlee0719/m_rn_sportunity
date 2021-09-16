/**
 * @flow
 * @relayHash 3a759e553194e35325a73cfd88794002
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateCarPoolingInput = {
  sportunityID: string,
  carPoolingID: string,
  carPooling?: ?CarPoolingInput,
  clientMutationId?: ?string,
};
export type CarPoolingInput = {
  driver?: ?string,
  address?: ?AddressInput,
  starting_date?: ?string,
  number_of_sits?: ?number,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type ModifyCarPoolingMutationVariables = {|
  input: updateCarPoolingInput
|};
export type ModifyCarPoolingMutationResponse = {|
  +updateCarPooling: ?{|
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
export type ModifyCarPoolingMutation = {|
  variables: ModifyCarPoolingMutationVariables,
  response: ModifyCarPoolingMutationResponse,
|};
*/


/*
mutation ModifyCarPoolingMutation(
  $input: updateCarPoolingInput!
) {
  updateCarPooling(input: $input) {
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
    "type": "updateCarPoolingInput!",
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
    "name": "updateCarPooling",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "updateCarPoolingInput!"
      }
    ],
    "concreteType": "updateCarPoolingPayload",
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
  "name": "ModifyCarPoolingMutation",
  "id": null,
  "text": "mutation ModifyCarPoolingMutation(\n  $input: updateCarPoolingInput!\n) {\n  updateCarPooling(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        carPoolings {\n          id\n          driver {\n            id\n            pseudo\n            avatar\n          }\n          address {\n            address\n            city\n            zip\n            country\n          }\n          starting_date\n          number_of_sits\n          passengers {\n            id\n            pseudo\n            avatar\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ModifyCarPoolingMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "ModifyCarPoolingMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '36e05fe7abc856af68d6aad962fc8f12';
module.exports = node;

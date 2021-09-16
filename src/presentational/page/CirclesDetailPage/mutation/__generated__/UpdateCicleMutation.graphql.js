/**
 * @flow
 * @relayHash c3d64369b17fc1afdc3832a76a1b0b8a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type ValidationStatus = "PENDING" | "REJECTED" | "TO_BE_VALIDATED" | "VALIDATED" | "%future added value";
export type updateCircleInput = {
  circleId: string,
  circle?: ?CircleInput,
  clientMutationId?: ?string,
};
export type CircleInput = {
  name: string,
  owner?: ?string,
  description?: ?string,
  mode?: ?CircleKind,
  type?: ?CircleTypeEnum,
  address?: ?AddressInput,
  sport?: ?CircleSportInput,
  isCircleUpdatableByMembers?: ?boolean,
  isCircleUsableByMembers?: ?boolean,
  isCircleAccessibleFromUrl?: ?boolean,
  isChatActive?: ?boolean,
  subCircles?: ?$ReadOnlyArray<?string>,
  circlesInPrivateMode?: ?$ReadOnlyArray<?string>,
  creation_status?: ?CircleStatusInput,
  circlePreferences?: ?CirclePreferencesInput,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type CircleSportInput = {
  sport: string,
  levels?: ?$ReadOnlyArray<?string>,
};
export type CircleStatusInput = {
  status?: ?ValidationStatus,
  reason?: ?string,
};
export type CirclePreferencesInput = {
  isChildrenCircle?: ?boolean
};
export type UpdateCicleMutationVariables = {|
  input: updateCircleInput
|};
export type UpdateCicleMutationResponse = {|
  +updateCircle: ?{|
    +edge: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +mode: CircleKind,
        +isCircleAccessibleFromUrl: ?boolean,
        +isCircleUsableByMembers: ?boolean,
        +circlePreferences: ?{|
          +isChildrenCircle: ?boolean
        |},
        +sport: ?{|
          +sport: ?{|
            +id: string,
            +logo: string,
            +name: ?{|
              +EN: ?string,
              +FR: ?string,
            |},
          |},
          +levels: ?$ReadOnlyArray<?{|
            +id: string,
            +EN: ?{|
              +name: ?string,
              +skillLevel: number,
            |},
            +FR: ?{|
              +name: ?string,
              +skillLevel: number,
            |},
          |}>,
        |},
        +address: ?{|
          +address: string,
          +city: string,
          +zip: ?string,
          +country: string,
        |},
        +description: ?string,
      |}
    |}
  |}
|};
export type UpdateCicleMutation = {|
  variables: UpdateCicleMutationVariables,
  response: UpdateCicleMutationResponse,
|};
*/


/*
mutation UpdateCicleMutation(
  $input: updateCircleInput!
) {
  updateCircle(input: $input) {
    edge {
      node {
        id
        name
        mode
        isCircleAccessibleFromUrl
        isCircleUsableByMembers
        circlePreferences {
          isChildrenCircle
        }
        sport {
          sport {
            id
            logo
            name {
              EN
              FR
              id
            }
          }
          levels {
            id
            EN {
              name
              skillLevel
            }
            FR {
              name
              skillLevel
            }
          }
        }
        address {
          address
          city
          zip
          country
        }
        description
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
    "type": "updateCircleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateCircleInput!"
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleAccessibleFromUrl",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "circlePreferences",
  "storageKey": null,
  "args": null,
  "concreteType": "CirclePreferences",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isChildrenCircle",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v11 = [
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v11
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v11
    }
  ]
},
v13 = {
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
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateCicleMutation",
  "id": null,
  "text": "mutation UpdateCicleMutation(\n  $input: updateCircleInput!\n) {\n  updateCircle(input: $input) {\n    edge {\n      node {\n        id\n        name\n        mode\n        isCircleAccessibleFromUrl\n        isCircleUsableByMembers\n        circlePreferences {\n          isChildrenCircle\n        }\n        sport {\n          sport {\n            id\n            logo\n            name {\n              EN\n              FR\n              id\n            }\n          }\n          levels {\n            id\n            EN {\n              name\n              skillLevel\n            }\n            FR {\n              name\n              skillLevel\n            }\n          }\n        }\n        address {\n          address\n          city\n          zip\n          country\n        }\n        description\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCicleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCircle",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateCirclePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "CircleEdge",
            "plural": false,
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
                  v2,
                  v3,
                  v4,
                  v5,
                  v6,
                  v7,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleSport",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sport",
                        "plural": false,
                        "selections": [
                          v2,
                          v8,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v9,
                              v10
                            ]
                          }
                        ]
                      },
                      v12
                    ]
                  },
                  v13,
                  v14
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
    "name": "UpdateCicleMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCircle",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateCirclePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "CircleEdge",
            "plural": false,
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
                  v2,
                  v3,
                  v4,
                  v5,
                  v6,
                  v7,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleSport",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sport",
                        "plural": false,
                        "selections": [
                          v2,
                          v8,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v9,
                              v10,
                              v2
                            ]
                          }
                        ]
                      },
                      v12
                    ]
                  },
                  v13,
                  v14
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
(node/*: any*/).hash = '0af09d7cb415d934d9ca633ed6cbdb2c';
module.exports = node;

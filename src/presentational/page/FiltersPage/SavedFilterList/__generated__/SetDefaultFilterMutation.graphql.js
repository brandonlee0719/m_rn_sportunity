/**
 * @flow
 * @relayHash 0d824e569b0ea5bcd6441903b797d4cc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type setDefaultFilterInput = {
  filterID?: ?string,
  clientMutationId?: ?string,
};
export type SetDefaultFilterMutationVariables = {|
  input: setDefaultFilterInput
|};
export type SetDefaultFilterMutationResponse = {|
  +setDefaultFilter: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +defaultSavedFilter: ?{|
          +id: string,
          +filterName: ?string,
          +status: ?SportunityStatus,
          +statuses: ?$ReadOnlyArray<?SportunityStatus>,
          +page: ?HomePagePreference,
          +circles: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +id: string,
                +name: ?string,
                +owner: ?{|
                  +id: string,
                  +pseudo: string,
                  +avatar: ?string,
                |},
              |}
            |}>
          |},
          +sport: ?$ReadOnlyArray<?{|
            +sport: ?{|
              +id: string,
              +name: ?{|
                +EN: ?string,
                +FR: ?string,
              |},
              +logo: string,
              +levels: ?$ReadOnlyArray<?{|
                +id: string,
                +EN: ?{|
                  +name: ?string,
                  +description: ?string,
                  +skillLevel: number,
                |},
                +FR: ?{|
                  +name: ?string,
                  +description: ?string,
                  +skillLevel: number,
                |},
              |}>,
            |},
            +levels: ?$ReadOnlyArray<?{|
              +id: string,
              +EN: ?{|
                +name: ?string,
                +description: ?string,
                +skillLevel: number,
              |},
              +FR: ?{|
                +name: ?string,
                +description: ?string,
                +skillLevel: number,
              |},
            |}>,
          |}>,
          +location: ?{|
            +lat: ?number,
            +lng: ?number,
            +radius: ?number,
          |},
          +dates: ?{|
            +from: ?string,
            +to: ?string,
          |},
          +price: ?{|
            +from: ?number,
            +to: ?number,
          |},
        |},
      |}
    |},
  |}
|};
export type SetDefaultFilterMutation = {|
  variables: SetDefaultFilterMutationVariables,
  response: SetDefaultFilterMutationResponse,
|};
*/


/*
mutation SetDefaultFilterMutation(
  $input: setDefaultFilterInput!
) {
  setDefaultFilter(input: $input) {
    clientMutationId
    viewer {
      me {
        id
        defaultSavedFilter {
          id
          filterName
          status
          statuses
          page
          circles(last: 20) {
            edges {
              node {
                id
                name
                owner {
                  id
                  pseudo
                  avatar
                }
              }
            }
          }
          sport {
            sport {
              id
              name {
                EN
                FR
                id
              }
              logo
              levels {
                id
                EN {
                  name
                  description
                  skillLevel
                }
                FR {
                  name
                  description
                  skillLevel
                }
              }
            }
            levels {
              id
              EN {
                name
                description
                skillLevel
              }
              FR {
                name
                description
                skillLevel
              }
            }
          }
          location {
            lat
            lng
            radius
          }
          dates {
            from
            to
          }
          price {
            from
            to
          }
        }
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "setDefaultFilterInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "setDefaultFilterInput!"
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "statuses",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "circles",
  "storageKey": "circles(last:20)",
  "args": [
    {
      "kind": "Literal",
      "name": "last",
      "value": 20,
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
            v3,
            v8,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "owner",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [
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
              ]
            }
          ]
        }
      ]
    }
  ]
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v13 = [
  v8,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v13
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v13
    }
  ]
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "FilterLatLng",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lat",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lng",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v16 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "from",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "to",
    "args": null,
    "storageKey": null
  }
],
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "dates",
  "storageKey": null,
  "args": null,
  "concreteType": "StringInterval",
  "plural": false,
  "selections": v16
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "IntInterval",
  "plural": false,
  "selections": v16
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SetDefaultFilterMutation",
  "id": null,
  "text": "mutation SetDefaultFilterMutation(\n  $input: setDefaultFilterInput!\n) {\n  setDefaultFilter(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        defaultSavedFilter {\n          id\n          filterName\n          status\n          statuses\n          page\n          circles(last: 20) {\n            edges {\n              node {\n                id\n                name\n                owner {\n                  id\n                  pseudo\n                  avatar\n                }\n              }\n            }\n          }\n          sport {\n            sport {\n              id\n              name {\n                EN\n                FR\n                id\n              }\n              logo\n              levels {\n                id\n                EN {\n                  name\n                  description\n                  skillLevel\n                }\n                FR {\n                  name\n                  description\n                  skillLevel\n                }\n              }\n            }\n            levels {\n              id\n              EN {\n                name\n                description\n                skillLevel\n              }\n              FR {\n                name\n                description\n                skillLevel\n              }\n            }\n          }\n          location {\n            lat\n            lng\n            radius\n          }\n          dates {\n            from\n            to\n          }\n          price {\n            from\n            to\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SetDefaultFilterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "setDefaultFilter",
        "storageKey": null,
        "args": v1,
        "concreteType": "setDefaultFilterPayload",
        "plural": false,
        "selections": [
          v2,
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
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "defaultSavedFilter",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserFilter",
                    "plural": false,
                    "selections": [
                      v3,
                      v4,
                      v5,
                      v6,
                      v7,
                      v9,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FilterSport",
                        "plural": true,
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
                              v3,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "name",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TranslatedString",
                                "plural": false,
                                "selections": [
                                  v10,
                                  v11
                                ]
                              },
                              v12,
                              v14
                            ]
                          },
                          v14
                        ]
                      },
                      v15,
                      v17,
                      v18
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
  "operation": {
    "kind": "Operation",
    "name": "SetDefaultFilterMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "setDefaultFilter",
        "storageKey": null,
        "args": v1,
        "concreteType": "setDefaultFilterPayload",
        "plural": false,
        "selections": [
          v2,
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
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "defaultSavedFilter",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserFilter",
                    "plural": false,
                    "selections": [
                      v3,
                      v4,
                      v5,
                      v6,
                      v7,
                      v9,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FilterSport",
                        "plural": true,
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
                              v3,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "name",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TranslatedString",
                                "plural": false,
                                "selections": [
                                  v10,
                                  v11,
                                  v3
                                ]
                              },
                              v12,
                              v14
                            ]
                          },
                          v14
                        ]
                      },
                      v15,
                      v17,
                      v18
                    ]
                  }
                ]
              },
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '80234add3b4f6fc7f2fd9558e6084d5a';
module.exports = node;

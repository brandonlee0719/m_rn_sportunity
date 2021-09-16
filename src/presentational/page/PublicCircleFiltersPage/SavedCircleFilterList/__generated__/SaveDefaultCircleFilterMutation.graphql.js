/**
 * @flow
 * @relayHash a6462d6b3e4b2b43cc6d21a427ae118a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type setDefaultCircleFilterInput = {
  filterID?: ?string,
  clientMutationId?: ?string,
};
export type SaveDefaultCircleFilterMutationVariables = {|
  input: setDefaultCircleFilterInput
|};
export type SaveDefaultCircleFilterMutationResponse = {|
  +setDefaultCircleFilter: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +defaultSavedCircleFilter: ?{|
          +id: string,
          +filterName: ?string,
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
          +circleType: ?$ReadOnlyArray<?CircleListTypeEnum>,
          +memberType: ?CircleTypeEnum,
        |},
      |}
    |},
  |}
|};
export type SaveDefaultCircleFilterMutation = {|
  variables: SaveDefaultCircleFilterMutationVariables,
  response: SaveDefaultCircleFilterMutationResponse,
|};
*/


/*
mutation SaveDefaultCircleFilterMutation(
  $input: setDefaultCircleFilterInput!
) {
  setDefaultCircleFilter(input: $input) {
    clientMutationId
    viewer {
      me {
        id
        defaultSavedCircleFilter {
          id
          filterName
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
          circleType
          memberType
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
    "type": "setDefaultCircleFilterInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "setDefaultCircleFilterInput!"
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
  "name": "EN",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v8 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
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
v9 = {
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
      "selections": v8
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v8
    }
  ]
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
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
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberType",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SaveDefaultCircleFilterMutation",
  "id": null,
  "text": "mutation SaveDefaultCircleFilterMutation(\n  $input: setDefaultCircleFilterInput!\n) {\n  setDefaultCircleFilter(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        defaultSavedCircleFilter {\n          id\n          filterName\n          sport {\n            sport {\n              id\n              name {\n                EN\n                FR\n                id\n              }\n              logo\n              levels {\n                id\n                EN {\n                  name\n                  description\n                  skillLevel\n                }\n                FR {\n                  name\n                  description\n                  skillLevel\n                }\n              }\n            }\n            levels {\n              id\n              EN {\n                name\n                description\n                skillLevel\n              }\n              FR {\n                name\n                description\n                skillLevel\n              }\n            }\n          }\n          location {\n            lat\n            lng\n            radius\n          }\n          circleType\n          memberType\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SaveDefaultCircleFilterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "setDefaultCircleFilter",
        "storageKey": null,
        "args": v1,
        "concreteType": "setDefaultCircleFilterPayload",
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
                    "name": "defaultSavedCircleFilter",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserCircleFilter",
                    "plural": false,
                    "selections": [
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CircleFilterSport",
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
                                  v5,
                                  v6
                                ]
                              },
                              v7,
                              v9
                            ]
                          },
                          v9
                        ]
                      },
                      v10,
                      v11,
                      v12
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
    "name": "SaveDefaultCircleFilterMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "setDefaultCircleFilter",
        "storageKey": null,
        "args": v1,
        "concreteType": "setDefaultCircleFilterPayload",
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
                    "name": "defaultSavedCircleFilter",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserCircleFilter",
                    "plural": false,
                    "selections": [
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CircleFilterSport",
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
                                  v5,
                                  v6,
                                  v3
                                ]
                              },
                              v7,
                              v9
                            ]
                          },
                          v9
                        ]
                      },
                      v10,
                      v11,
                      v12
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
(node/*: any*/).hash = '27ea458341f0ccf404cd89b59af45846';
module.exports = node;

/**
 * @flow
 * @relayHash 09c42c61d18add90a03c1976112d2054
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ButtonFeedback_organizers$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type secondaryOrganizerPickRoleInput = {
  sportunityID: string,
  pendingOrganizerID: string,
  clientMutationId?: ?string,
};
export type SecondaryOrganizerPickRoleMutationVariables = {|
  input: secondaryOrganizerPickRoleInput
|};
export type SecondaryOrganizerPickRoleMutationResponse = {|
  +secondaryOrganizerPickRole: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +organizers: ?$ReadOnlyArray<?{|
          +isAdmin: boolean,
          +secondaryOrganizerType: ?{|
            +id: string,
            +name: ?{|
              +FR: ?string,
              +EN: ?string,
              +DE: ?string,
              +ES: ?string,
            |},
          |},
          +customSecondaryOrganizerType: ?string,
          +price: ?{|
            +cents: number,
            +currency: ?Currency,
          |},
          +organizer: ?{|
            +id: string,
            +pseudo: string,
            +sportunityNumber: ?number,
            +feedbacks: ?{|
              +averageRating: ?number,
              +count: number,
            |},
            +sports: ?$ReadOnlyArray<?{|
              +levels: ?$ReadOnlyArray<?{|
                +EN: ?{|
                  +name: ?string
                |}
              |}>
            |}>,
            +address: ?{|
              +address: string,
              +country: string,
              +city: string,
              +zip: ?string,
              +position: ?{|
                +lat: ?number,
                +lng: ?number,
              |},
            |},
            +avatar: ?string,
            +followers: ?$ReadOnlyArray<?{|
              +id: string
            |}>,
          |},
          +permissions: ?{|
            +detailsAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +chatAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +memberAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +carPoolingAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +imageAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +compositionAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
          |},
          +$fragmentRefs: ButtonFeedback_organizers$ref,
        |}>,
        +pendingOrganizers: ?$ReadOnlyArray<?{|
          +id: string,
          +circles: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +id: string,
                +members: ?$ReadOnlyArray<?{|
                  +id: string
                |}>,
                +name: ?string,
                +memberCount: number,
              |}
            |}>
          |},
          +isAdmin: boolean,
          +role: OrganizerRole,
          +secondaryOrganizerType: ?{|
            +id: string,
            +name: ?{|
              +FR: ?string,
              +EN: ?string,
              +DE: ?string,
              +ES: ?string,
            |},
          |},
          +customSecondaryOrganizerType: ?string,
          +price: ?{|
            +cents: number,
            +currency: ?Currency,
          |},
          +permissions: ?{|
            +detailsAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +chatAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +memberAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +carPoolingAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +imageAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +compositionAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
          |},
        |}>,
        +status: ?string,
      |}
    |},
  |}
|};
export type SecondaryOrganizerPickRoleMutation = {|
  variables: SecondaryOrganizerPickRoleMutationVariables,
  response: SecondaryOrganizerPickRoleMutationResponse,
|};
*/


/*
mutation SecondaryOrganizerPickRoleMutation(
  $input: secondaryOrganizerPickRoleInput!
) {
  secondaryOrganizerPickRole(input: $input) {
    clientMutationId
    edge {
      node {
        organizers {
          isAdmin
          secondaryOrganizerType {
            id
            name {
              FR
              EN
              DE
              ES
              id
            }
          }
          customSecondaryOrganizerType
          price {
            cents
            currency
          }
          organizer {
            id
            pseudo
            sportunityNumber
            feedbacks {
              averageRating
              count
            }
            sports {
              levels {
                EN {
                  name
                }
                id
              }
            }
            address {
              address
              country
              city
              zip
              position {
                lat
                lng
              }
            }
            avatar
            followers {
              id
            }
          }
          permissions {
            detailsAccess {
              view
              edit
            }
            chatAccess {
              view
              edit
            }
            memberAccess {
              view
              edit
            }
            carPoolingAccess {
              view
              edit
            }
            imageAccess {
              view
              edit
            }
            compositionAccess {
              view
              edit
            }
          }
          ...ButtonFeedback_organizers
          id
        }
        pendingOrganizers {
          id
          circles(last: 20) {
            edges {
              node {
                id
                members {
                  id
                }
                name
                memberCount
              }
            }
          }
          isAdmin
          role
          secondaryOrganizerType {
            id
            name {
              FR
              EN
              DE
              ES
              id
            }
          }
          customSecondaryOrganizerType
          price {
            cents
            currency
          }
          permissions {
            detailsAccess {
              view
              edit
            }
            chatAccess {
              view
              edit
            }
            memberAccess {
              view
              edit
            }
            carPoolingAccess {
              view
              edit
            }
            imageAccess {
              view
              edit
            }
            compositionAccess {
              view
              edit
            }
          }
        }
        status
        id
      }
    }
  }
}

fragment ButtonFeedback_organizers on Organizer {
  isAdmin
  organizer {
    id
    pseudo
    feedbacks {
      feedbacksList(last: 1000) {
        edges {
          node {
            author {
              id
            }
            id
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
    "type": "secondaryOrganizerPickRoleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "secondaryOrganizerPickRoleInput!"
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
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "secondaryOrganizerType",
  "storageKey": null,
  "args": null,
  "concreteType": "AssistantType",
  "plural": false,
  "selections": [
    v4,
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
        v7,
        v8
      ]
    }
  ]
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cents",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currency",
      "args": null,
      "storageKey": null
    }
  ]
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityNumber",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averageRating",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "EN",
  "storageKey": null,
  "args": null,
  "concreteType": "SportLevel",
  "plural": false,
  "selections": [
    v16
  ]
},
v18 = {
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
      "name": "country",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "position",
      "storageKey": null,
      "args": null,
      "concreteType": "PositionType",
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
        }
      ]
    }
  ]
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v20 = [
  v4
],
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "followers",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v20
},
v22 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
],
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "permissions",
  "storageKey": null,
  "args": null,
  "concreteType": "coOrganizersPermissions",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "detailsAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersDetailsAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "chatAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersChatAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "memberAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersMemberAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carPoolingAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersCarPoolingAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "imageAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersImageAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "compositionAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersCompositionAccess",
      "plural": false,
      "selections": v22
    }
  ]
},
v24 = {
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
            v4,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "members",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": true,
              "selections": v20
            },
            v16,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "memberCount",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "permissions",
  "storageKey": null,
  "args": null,
  "concreteType": "pendingCoOrganizersPermissions",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "detailsAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersDetailsAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "chatAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersChatAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "memberAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersMemberAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carPoolingAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersCarPoolingAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "imageAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersImageAccess",
      "plural": false,
      "selections": v22
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "compositionAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersCompositionAccess",
      "plural": false,
      "selections": v22
    }
  ]
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "secondaryOrganizerType",
  "storageKey": null,
  "args": null,
  "concreteType": "AssistantType",
  "plural": false,
  "selections": [
    v4,
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
        v7,
        v8,
        v4
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SecondaryOrganizerPickRoleMutation",
  "id": null,
  "text": "mutation SecondaryOrganizerPickRoleMutation(\n  $input: secondaryOrganizerPickRoleInput!\n) {\n  secondaryOrganizerPickRole(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        organizers {\n          isAdmin\n          secondaryOrganizerType {\n            id\n            name {\n              FR\n              EN\n              DE\n              ES\n              id\n            }\n          }\n          customSecondaryOrganizerType\n          price {\n            cents\n            currency\n          }\n          organizer {\n            id\n            pseudo\n            sportunityNumber\n            feedbacks {\n              averageRating\n              count\n            }\n            sports {\n              levels {\n                EN {\n                  name\n                }\n                id\n              }\n            }\n            address {\n              address\n              country\n              city\n              zip\n              position {\n                lat\n                lng\n              }\n            }\n            avatar\n            followers {\n              id\n            }\n          }\n          permissions {\n            detailsAccess {\n              view\n              edit\n            }\n            chatAccess {\n              view\n              edit\n            }\n            memberAccess {\n              view\n              edit\n            }\n            carPoolingAccess {\n              view\n              edit\n            }\n            imageAccess {\n              view\n              edit\n            }\n            compositionAccess {\n              view\n              edit\n            }\n          }\n          ...ButtonFeedback_organizers\n          id\n        }\n        pendingOrganizers {\n          id\n          circles(last: 20) {\n            edges {\n              node {\n                id\n                members {\n                  id\n                }\n                name\n                memberCount\n              }\n            }\n          }\n          isAdmin\n          role\n          secondaryOrganizerType {\n            id\n            name {\n              FR\n              EN\n              DE\n              ES\n              id\n            }\n          }\n          customSecondaryOrganizerType\n          price {\n            cents\n            currency\n          }\n          permissions {\n            detailsAccess {\n              view\n              edit\n            }\n            chatAccess {\n              view\n              edit\n            }\n            memberAccess {\n              view\n              edit\n            }\n            carPoolingAccess {\n              view\n              edit\n            }\n            imageAccess {\n              view\n              edit\n            }\n            compositionAccess {\n              view\n              edit\n            }\n          }\n        }\n        status\n        id\n      }\n    }\n  }\n}\n\nfragment ButtonFeedback_organizers on Organizer {\n  isAdmin\n  organizer {\n    id\n    pseudo\n    feedbacks {\n      feedbacksList(last: 1000) {\n        edges {\n          node {\n            author {\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SecondaryOrganizerPickRoleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "secondaryOrganizerPickRole",
        "storageKey": null,
        "args": v1,
        "concreteType": "secondaryOrganizerPickRolePayload",
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organizer",
                    "plural": true,
                    "selections": [
                      v3,
                      v9,
                      v10,
                      v11,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v4,
                          v12,
                          v13,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacks",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedbacks",
                            "plural": false,
                            "selections": [
                              v14,
                              v15
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sports",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportDescriptor",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "levels",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Translated",
                                "plural": true,
                                "selections": [
                                  v17
                                ]
                              }
                            ]
                          },
                          v18,
                          v19,
                          v21
                        ]
                      },
                      v23,
                      {
                        "kind": "FragmentSpread",
                        "name": "ButtonFeedback_organizers",
                        "args": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pendingOrganizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PendingOrganizer",
                    "plural": true,
                    "selections": [
                      v4,
                      v24,
                      v3,
                      v25,
                      v9,
                      v10,
                      v11,
                      v26
                    ]
                  },
                  v27
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
    "name": "SecondaryOrganizerPickRoleMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "secondaryOrganizerPickRole",
        "storageKey": null,
        "args": v1,
        "concreteType": "secondaryOrganizerPickRolePayload",
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organizer",
                    "plural": true,
                    "selections": [
                      v3,
                      v28,
                      v10,
                      v11,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v4,
                          v12,
                          v13,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacks",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedbacks",
                            "plural": false,
                            "selections": [
                              v14,
                              v15,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "feedbacksList",
                                "storageKey": "feedbacksList(last:1000)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "last",
                                    "value": 1000,
                                    "type": "Int"
                                  }
                                ],
                                "concreteType": "FeedbackConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "FeedbackEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Feedback",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "author",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "User",
                                            "plural": false,
                                            "selections": v20
                                          },
                                          v4
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sports",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportDescriptor",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "levels",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Translated",
                                "plural": true,
                                "selections": [
                                  v17,
                                  v4
                                ]
                              }
                            ]
                          },
                          v18,
                          v19,
                          v21
                        ]
                      },
                      v23,
                      v4
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pendingOrganizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PendingOrganizer",
                    "plural": true,
                    "selections": [
                      v4,
                      v24,
                      v3,
                      v25,
                      v28,
                      v10,
                      v11,
                      v26
                    ]
                  },
                  v27,
                  v4
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
(node/*: any*/).hash = '00740768f3fd690dcd2693603a435587';
module.exports = node;

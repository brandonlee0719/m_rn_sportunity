/**
 * @flow
 * @relayHash b197758892902502cb6846ae558d4bbf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventDetailCarpoolingContainer_query$ref = any;
export type EventDetailCarpoolingContainerRefetchQueryVariables = {|
  sportunityId?: ?string,
  sportunityChatId?: ?string,
  sportunityRelaunchId: string,
  query: boolean,
|};
export type EventDetailCarpoolingContainerRefetchQueryResponse = {|
  +$fragmentRefs: EventDetailCarpoolingContainer_query$ref
|};
export type EventDetailCarpoolingContainerRefetchQuery = {|
  variables: EventDetailCarpoolingContainerRefetchQueryVariables,
  response: EventDetailCarpoolingContainerRefetchQueryResponse,
|};
*/


/*
query EventDetailCarpoolingContainerRefetchQuery(
  $sportunityId: ID
  $query: Boolean!
) {
  ...EventDetailCarpoolingContainer_query_4tXwtP
}

fragment EventDetailCarpoolingContainer_query_4tXwtP on Query {
  viewer {
    id
    ...EventDetailCarpooling_viewer
    me @include(if: $query) {
      ...EventDetailCarpooling_user
      id
    }
  sportunity(id: $sportunityId) @include(if: $query) {
      ...EventDetailCarpooling_sportunity
      id
    }
  }
}

fragment EventDetailCarpooling_viewer on Viewer {
  ...Carpooling_viewer
}

fragment EventDetailCarpooling_user on User {
  id
  avatar
  pseudo
  profileType
}

fragment EventDetailCarpooling_sportunity on Sportunity {
  ...Carpooling_sportunity
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
  address {
    address
    country
    city
    zip
    position {
      lat
      lng
    }
    ...DetailCellItem_address
  }
  participants {
    id
    pseudo
    avatar
  }
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
}

fragment Carpooling_sportunity on Sportunity {
  id
  beginning_date
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

fragment DetailCellItem_address on AddressModel {
  address
  city
  country
  position {
    lat
    lng
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

fragment Carpooling_viewer on Viewer {
  id
  me {
    id
    address {
      country
      city
      address
      zip
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityChatId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityRelaunchId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "zip",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v8 = [
  v1,
  v7,
  v6
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": [
    v4,
    v2,
    v3,
    v5,
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
v10 = [
  v1
],
v11 = [
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventDetailCarpoolingContainerRefetchQuery",
  "id": null,
  "text": "query EventDetailCarpoolingContainerRefetchQuery(\n  $sportunityId: ID\n  $query: Boolean!\n) {\n  ...EventDetailCarpoolingContainer_query_4tXwtP\n}\n\nfragment EventDetailCarpoolingContainer_query_4tXwtP on Query {\n  viewer {\n    id\n    ...EventDetailCarpooling_viewer\n    me @include(if: $query) {\n      ...EventDetailCarpooling_user\n      id\n    }\n  sportunity(id: $sportunityId) @include(if: $query) {\n      ...EventDetailCarpooling_sportunity\n      id\n    }\n  }\n}\n\nfragment EventDetailCarpooling_viewer on Viewer {\n  ...Carpooling_viewer\n}\n\nfragment EventDetailCarpooling_user on User {\n  id\n  avatar\n  pseudo\n  profileType\n}\n\nfragment EventDetailCarpooling_sportunity on Sportunity {\n  ...Carpooling_sportunity\n  id\n  carPoolings {\n    id\n    driver {\n      id\n      pseudo\n      avatar\n    }\n    address {\n      address\n      city\n      zip\n      country\n    }\n    starting_date\n    number_of_sits\n    passengers {\n      id\n      pseudo\n      avatar\n    }\n  }\n  address {\n    address\n    country\n    city\n    zip\n    position {\n      lat\n      lng\n    }\n    ...DetailCellItem_address\n  }\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  organizers {\n    isAdmin\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    price {\n      cents\n      currency\n    }\n    organizer {\n      id\n      pseudo\n      sportunityNumber\n      feedbacks {\n        averageRating\n        count\n      }\n      sports {\n        levels {\n          EN {\n            name\n          }\n          id\n        }\n      }\n      address {\n        address\n        country\n        city\n        zip\n        position {\n          lat\n          lng\n        }\n      }\n      avatar\n      followers {\n        id\n      }\n    }\n    permissions {\n      detailsAccess {\n        view\n        edit\n      }\n      chatAccess {\n        view\n        edit\n      }\n      memberAccess {\n        view\n        edit\n      }\n      carPoolingAccess {\n        view\n        edit\n      }\n      imageAccess {\n        view\n        edit\n      }\n      compositionAccess {\n        view\n        edit\n      }\n    }\n    ...ButtonFeedback_organizers\n    id\n  }\n}\n\nfragment Carpooling_sportunity on Sportunity {\n  id\n  beginning_date\n  carPoolings {\n    id\n    driver {\n      id\n      pseudo\n      avatar\n    }\n    address {\n      address\n      city\n      zip\n      country\n    }\n    starting_date\n    number_of_sits\n    passengers {\n      id\n      pseudo\n      avatar\n    }\n  }\n}\n\nfragment DetailCellItem_address on AddressModel {\n  address\n  city\n  country\n  position {\n    lat\n    lng\n  }\n}\n\nfragment ButtonFeedback_organizers on Organizer {\n  isAdmin\n  organizer {\n    id\n    pseudo\n    feedbacks {\n      feedbacksList(last: 1000) {\n        edges {\n          node {\n            author {\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Carpooling_viewer on Viewer {\n  id\n  me {\n    id\n    address {\n      country\n      city\n      address\n      zip\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventDetailCarpoolingContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "EventDetailCarpoolingContainer_query",
        "args": [
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "query",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "sportunityChatId",
            "variableName": "sportunityChatId",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "sportunityId",
            "variableName": "sportunityId",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "sportunityRelaunchId",
            "variableName": "sportunityRelaunchId",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EventDetailCarpoolingContainerRefetchQuery",
    "argumentDefinitions": v0,
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "address",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v4,
                  v5
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
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
                  v6,
                  v7,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "profileType",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunity",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "sportunityId",
                    "type": "ID"
                  }
                ],
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "beginning_date",
                    "args": null,
                    "storageKey": null
                  },
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
                        "selections": v8
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
                          v4,
                          v3,
                          v5,
                          v2
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
                        "selections": v8
                      }
                    ]
                  },
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participants",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v8
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organizer",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "isAdmin",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": false,
                        "selections": [
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "FR",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "EN",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "DE",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "ES",
                                "args": null,
                                "storageKey": null
                              },
                              v1
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "customSecondaryOrganizerType",
                        "args": null,
                        "storageKey": null
                      },
                      {
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v1,
                          v7,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "sportunityNumber",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacks",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedbacks",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "averageRating",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "count",
                                "args": null,
                                "storageKey": null
                              },
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
                                            "selections": v10
                                          },
                                          v1
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
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "EN",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "name",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  },
                                  v1
                                ]
                              }
                            ]
                          },
                          v9,
                          v6,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "followers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v10
                          }
                        ]
                      },
                      {
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
                            "selections": v11
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "chatAccess",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "coOrganizersChatAccess",
                            "plural": false,
                            "selections": v11
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "memberAccess",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "coOrganizersMemberAccess",
                            "plural": false,
                            "selections": v11
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "carPoolingAccess",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "coOrganizersCarPoolingAccess",
                            "plural": false,
                            "selections": v11
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "imageAccess",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "coOrganizersImageAccess",
                            "plural": false,
                            "selections": v11
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "compositionAccess",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "coOrganizersCompositionAccess",
                            "plural": false,
                            "selections": v11
                          }
                        ]
                      },
                      v1
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
(node/*: any*/).hash = 'bd8b5594be379614a5513d4f42f8443d';
module.exports = node;

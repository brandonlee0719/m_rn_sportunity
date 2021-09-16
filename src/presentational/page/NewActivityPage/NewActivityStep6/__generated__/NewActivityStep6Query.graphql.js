/**
 * @flow
 * @relayHash 91f99ccb62a9d9ba0cc869ecc1b6998f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewActivityStep6_viewer$ref = any;
export type NewActivityStep6QueryVariables = {||};
export type NewActivityStep6QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewActivityStep6_viewer$ref
  |}
|};
export type NewActivityStep6Query = {|
  variables: NewActivityStep6QueryVariables,
  response: NewActivityStep6QueryResponse,
|};
*/


/*
query NewActivityStep6Query {
  viewer {
    ...NewActivityStep6_viewer
    id
  }
}

fragment NewActivityStep6_viewer on Viewer {
  ...CoOrganizerModal_viewer
  ...Prices_viewer
  ...Price_viewer
  ...AdvancedSettings_viewer
  ...SelectTemplate_viewer
  me {
    id
    fees
    profileType
    ...AdvancedSettings_user
  }
}

fragment CoOrganizerModal_viewer on Viewer {
  id
  ...SearchModule_viewer
  me {
    id
  }
}

fragment Prices_viewer on Viewer {
  id
  me {
    fees
    id
  }
}

fragment Price_viewer on Viewer {
  id
  ...PriceModal_viewer
  me {
    fees
    id
  }
}

fragment AdvancedSettings_viewer on Viewer {
  id
  ...AdvancedSettingsModal_viewer
}

fragment SelectTemplate_viewer on Viewer {
  id
  me {
    id
    ...SelectTemplateModal_user
    sportunityTemplates {
      id
    }
  }
}

fragment AdvancedSettings_user on User {
  id
}

fragment SelectTemplateModal_user on User {
  id
  sportunityTemplates {
    id
    title
    description
    kind
    fees
    privacy_switch_preference {
      privacy_switch_type
      switch_privacy_x_days_before
    }
    invited {
      user {
        ...UserCard_user
        id
        pseudo
        avatar
      }
      answer
    }
    invited_circles(last: 10) {
      edges {
        node {
          id
          name
          members {
            id
          }
          owner {
            id
            pseudo
            avatar
          }
          type
          memberCount
        }
      }
    }
    price_for_circle {
      circle {
        id
      }
      price {
        cents
        currency
      }
      participantByDefault
    }
    notification_preference {
      notification_type
      send_notification_x_days_before
    }
    participantRange {
      from
      to
    }
    hide_participant_list
    price {
      currency
      cents
    }
    sport {
      sport {
        id
        name {
          EN
          DE
          FR
          id
        }
        logo
      }
      positions {
        id
        EN
        FR
        DE
      }
      certificates {
        id
        name {
          EN
          FR
          DE
          id
        }
      }
      levels {
        id
        EN {
          name
          skillLevel
          description
        }
        FR {
          name
          skillLevel
          description
        }
        DE {
          name
          skillLevel
          description
        }
      }
    }
    ageRestriction {
      from
      to
    }
    sexRestriction
    address {
      address
      country
      city
      position {
        lat
        lng
      }
    }
    organizers {
      organizer {
        id
        pseudo
      }
      isAdmin
      role
      price {
        cents
        currency
      }
      secondaryOrganizerType {
        id
        name {
          id
          FR
          EN
          DE
          ES
        }
      }
      customSecondaryOrganizerType
      id
    }
    pendingOrganizers {
      id
      circles(last: 20) {
        edges {
          node {
            id
            name
            memberCount
            type
            members {
              id
            }
          }
        }
      }
      isAdmin
      role
      price {
        cents
        currency
      }
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
    }
    sportunityType {
      id
      isScoreRelevant
      name {
        FR
        EN
        id
      }
    }
    game_information {
      opponent {
        organizer {
          id
          pseudo
          avatar
        }
        organizerPseudo
        lookingForAnOpponent
        invitedOpponents(last: 5) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
        unknownOpponent
      }
    }
  }
}

fragment UserCard_user on User {
  id
  pseudo
  firstName
  lastName
  avatar
  circlesUserIsIn(first: 3) {
    count
    edges {
      node {
        id
        name
      }
    }
  }
  sports {
    sport {
      id
      logo
    }
  }
}

fragment AdvancedSettingsModal_viewer on Viewer {
  id
}

fragment PriceModal_viewer on Viewer {
  id
  ...Prices_viewer
}

fragment SearchModule_viewer on Viewer {
  id
  ...SportunityItem_viewer
  ...FilterDetailSports_viewer
  me {
    id
    profileType
    ...SportunityItem_user
  }
  selectedCircle: circle {
    id
    name
    owner {
      id
      pseudo
      avatar
    }
    members {
      id
      pseudo
      avatar
      profileType
    }
    memberCount
  }
}

fragment SportunityItem_viewer on Viewer {
  ...TopContent_viewer
}

fragment FilterDetailSports_viewer on Viewer {
  filterSport: sport {
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
      }
      FR {
        name
      }
    }
  }
}

fragment SportunityItem_user on User {
  ...TopContent_user
  ...BottomContent_user
}

fragment TopContent_user on User {
  id
}

fragment BottomContent_user on User {
  id
}

fragment TopContent_viewer on Viewer {
  id
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
  "name": "EN",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fees",
  "args": null,
  "storageKey": null
},
v8 = [
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
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v12 = [
  v0
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v12
},
v14 = [
  v0,
  v10,
  v11
],
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v14
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v18,
    v19
  ]
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v22 = [
  v4,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  v9
],
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NewActivityStep6Query",
  "id": null,
  "text": "query NewActivityStep6Query {\n  viewer {\n    ...NewActivityStep6_viewer\n    id\n  }\n}\n\nfragment NewActivityStep6_viewer on Viewer {\n  ...CoOrganizerModal_viewer\n  ...Prices_viewer\n  ...Price_viewer\n  ...AdvancedSettings_viewer\n  ...SelectTemplate_viewer\n  me {\n    id\n    fees\n    profileType\n    ...AdvancedSettings_user\n  }\n}\n\nfragment CoOrganizerModal_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n  me {\n    id\n  }\n}\n\nfragment Prices_viewer on Viewer {\n  id\n  me {\n    fees\n    id\n  }\n}\n\nfragment Price_viewer on Viewer {\n  id\n  ...PriceModal_viewer\n  me {\n    fees\n    id\n  }\n}\n\nfragment AdvancedSettings_viewer on Viewer {\n  id\n  ...AdvancedSettingsModal_viewer\n}\n\nfragment SelectTemplate_viewer on Viewer {\n  id\n  me {\n    id\n    ...SelectTemplateModal_user\n    sportunityTemplates {\n      id\n    }\n  }\n}\n\nfragment AdvancedSettings_user on User {\n  id\n}\n\nfragment SelectTemplateModal_user on User {\n  id\n  sportunityTemplates {\n    id\n    title\n    description\n    kind\n    fees\n    privacy_switch_preference {\n      privacy_switch_type\n      switch_privacy_x_days_before\n    }\n    invited {\n      user {\n        ...UserCard_user\n        id\n        pseudo\n        avatar\n      }\n      answer\n    }\n    invited_circles(last: 10) {\n      edges {\n        node {\n          id\n          name\n          members {\n            id\n          }\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          type\n          memberCount\n        }\n      }\n    }\n    price_for_circle {\n      circle {\n        id\n      }\n      price {\n        cents\n        currency\n      }\n      participantByDefault\n    }\n    notification_preference {\n      notification_type\n      send_notification_x_days_before\n    }\n    participantRange {\n      from\n      to\n    }\n    hide_participant_list\n    price {\n      currency\n      cents\n    }\n    sport {\n      sport {\n        id\n        name {\n          EN\n          DE\n          FR\n          id\n        }\n        logo\n      }\n      positions {\n        id\n        EN\n        FR\n        DE\n      }\n      certificates {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n          description\n        }\n        FR {\n          name\n          skillLevel\n          description\n        }\n        DE {\n          name\n          skillLevel\n          description\n        }\n      }\n    }\n    ageRestriction {\n      from\n      to\n    }\n    sexRestriction\n    address {\n      address\n      country\n      city\n      position {\n        lat\n        lng\n      }\n    }\n    organizers {\n      organizer {\n        id\n        pseudo\n      }\n      isAdmin\n      role\n      price {\n        cents\n        currency\n      }\n      secondaryOrganizerType {\n        id\n        name {\n          id\n          FR\n          EN\n          DE\n          ES\n        }\n      }\n      customSecondaryOrganizerType\n      id\n    }\n    pendingOrganizers {\n      id\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n            type\n            members {\n              id\n            }\n          }\n        }\n      }\n      isAdmin\n      role\n      price {\n        cents\n        currency\n      }\n      secondaryOrganizerType {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      customSecondaryOrganizerType\n    }\n    sportunityType {\n      id\n      isScoreRelevant\n      name {\n        FR\n        EN\n        id\n      }\n    }\n    game_information {\n      opponent {\n        organizer {\n          id\n          pseudo\n          avatar\n        }\n        organizerPseudo\n        lookingForAnOpponent\n        invitedOpponents(last: 5) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n            }\n          }\n        }\n        unknownOpponent\n      }\n    }\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  pseudo\n  firstName\n  lastName\n  avatar\n  circlesUserIsIn(first: 3) {\n    count\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  sports {\n    sport {\n      id\n      logo\n    }\n  }\n}\n\nfragment AdvancedSettingsModal_viewer on Viewer {\n  id\n}\n\nfragment PriceModal_viewer on Viewer {\n  id\n  ...Prices_viewer\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewActivityStep6Query",
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
            "name": "NewActivityStep6_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewActivityStep6Query",
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
          v0,
          {
            "kind": "LinkedField",
            "alias": "filterSport",
            "name": "sport",
            "storageKey": null,
            "args": null,
            "concreteType": "Sport",
            "plural": false,
            "selections": [
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "name",
                "storageKey": null,
                "args": null,
                "concreteType": "TranslatedString",
                "plural": false,
                "selections": [
                  v1,
                  v2,
                  v0
                ]
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "levels",
                "storageKey": null,
                "args": null,
                "concreteType": "Translated",
                "plural": true,
                "selections": [
                  v0,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "EN",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v5
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v5
                  }
                ]
              }
            ]
          },
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
              v6,
              v7,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTemplates",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTemplate",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participantRange",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "IntInterval",
                    "plural": false,
                    "selections": v8
                  },
                  v0,
                  v9,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "kind",
                    "args": null,
                    "storageKey": null
                  },
                  v7,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "privacy_switch_preference",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplatePrivacySwitchPreferenceOutput",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "privacy_switch_type",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "switch_privacy_x_days_before",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "invited",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateInvited",
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
                        "selections": [
                          v0,
                          v10,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "firstName",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "lastName",
                            "args": null,
                            "storageKey": null
                          },
                          v11,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "circlesUserIsIn",
                            "storageKey": "circlesUserIsIn(first:3)",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 3,
                                "type": "Int"
                              }
                            ],
                            "concreteType": "CircleConnection",
                            "plural": false,
                            "selections": [
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
                                      v4
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
                                "name": "sport",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Sport",
                                "plural": false,
                                "selections": [
                                  v0,
                                  v3
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "answer",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "invited_circles",
                    "storageKey": "invited_circles(last:10)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 10,
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
                              v4,
                              v13,
                              v15,
                              v16,
                              v17
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price_for_circle",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplatePriceForCircle",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "circle",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": v12
                      },
                      v20,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "participantByDefault",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "notification_preference",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateNotificationPreferenceOutput",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "notification_type",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "send_notification_x_days_before",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hide_participant_list",
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
                      v19,
                      v18
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunitySport",
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
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v1,
                              v21,
                              v2,
                              v0
                            ]
                          },
                          v3
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "positions",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": true,
                        "selections": [
                          v0,
                          v1,
                          v2,
                          v21
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": [
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v1,
                              v2,
                              v21,
                              v0
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "levels",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Translated",
                        "plural": true,
                        "selections": [
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v22
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v22
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v22
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "ageRestriction",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "IntInterval",
                    "plural": false,
                    "selections": v8
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sexRestriction",
                    "args": null,
                    "storageKey": null
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
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v0,
                          v10
                        ]
                      },
                      v23,
                      v24,
                      v20,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": false,
                        "selections": [
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v0,
                              v2,
                              v1,
                              v21,
                              v25
                            ]
                          }
                        ]
                      },
                      v26,
                      v0
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
                      v0,
                      {
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
                                  v0,
                                  v4,
                                  v17,
                                  v16,
                                  v13
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v23,
                      v24,
                      v20,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": false,
                        "selections": [
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v2,
                              v1,
                              v21,
                              v25,
                              v0
                            ]
                          }
                        ]
                      },
                      v26
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunityType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityType",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "isScoreRelevant",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v2,
                          v1,
                          v0
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "game_information",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateGameInformation",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "opponent",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportunityTemplateOpponentOutput",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "organizer",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v14
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "organizerPseudo",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "lookingForAnOpponent",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "invitedOpponents",
                            "storageKey": "invitedOpponents(last:5)",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "last",
                                "value": 5,
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
                                      v4,
                                      v17
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "unknownOpponent",
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
          {
            "kind": "LinkedField",
            "alias": "selectedCircle",
            "name": "circle",
            "storageKey": null,
            "args": null,
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              v0,
              v4,
              v15,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v0,
                  v10,
                  v11,
                  v6
                ]
              },
              v17
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1183aaefcd7284ea43515b66ee46e9a8';
module.exports = node;

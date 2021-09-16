/**
 * @flow
 * @relayHash 42bceb8d6bae418de055908f9f1f9f8e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AccountPage_viewer$ref = any;
export type AccountPageQueryVariables = {||};
export type AccountPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AccountPage_viewer$ref
  |}
|};
export type AccountPageQuery = {|
  variables: AccountPageQueryVariables,
  response: AccountPageQueryResponse,
|};
*/


/*
query AccountPageQuery {
  viewer {
    ...AccountPage_viewer
    id
  }
}

fragment AccountPage_viewer on Viewer {
  ...Statistics_viewer
  ...AuthorizedUsers_viewer
  ...SubaccountsManagment_viewer
  me {
    id
    ...Statistics_user
    ...AuthorizedUsers_user
    ...CalendarSync_user
    ...SubaccountsManagment_user
    firstName
    lastName
    nationality
    email
    birthday
    shouldDeclareVAT
    address {
      country
    }
    isProfileComplete
    profileType
    isSubAccount
  }
}

fragment Statistics_viewer on Viewer {
  id
  statisticPreferences(userID: "") {
    private
    isManOfTheGameActivated
    userStats {
      stat0 {
        name
        id
      }
      stat1 {
        name
        id
      }
      stat2 {
        name
        id
      }
      stat3 {
        name
        id
      }
      stat4 {
        name
        id
      }
      stat5 {
        name
        id
      }
    }
  }
}

fragment AuthorizedUsers_viewer on Viewer {
  id
  ...AuthorizedUsersModal_viewer
}

fragment SubaccountsManagment_viewer on Viewer {
  id
  ...CreateProfilePage_viewer
}

fragment Statistics_user on User {
  id
  areStatisticsActivated
}

fragment AuthorizedUsers_user on User {
  id
  authorized_managers {
    user {
      id
      pseudo
      avatar
    }
    authorization_level
  }
  ...AuthorizedUsersModal_user
}

fragment CalendarSync_user on User {
  id
  circlesUserIsIn(first: 100) {
    edges {
      node {
        id
        owner {
          id
          pseudo
          avatar
        }
      }
    }
  }
  calendar {
    users {
      id
      pseudo
    }
    preferences {
      own_synchronized_status
    }
  }
  profileType
}

fragment SubaccountsManagment_user on User {
  id
  subAccounts {
    id
    pseudo
    avatar
  }
  profileType
}

fragment AuthorizedUsersModal_user on User {
  id
  authorized_managers {
    user {
      id
      pseudo
      avatar
    }
    authorization_level
  }
}

fragment CreateProfilePage_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    phoneNumber
  }
}

fragment AuthorizedUsersModal_viewer on Viewer {
  id
  ...SearchModule_viewer
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  v1,
  v0
],
v3 = [
  v1
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v6 = [
  v0,
  v4,
  v5
],
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v6
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AccountPageQuery",
  "id": null,
  "text": "query AccountPageQuery {\n  viewer {\n    ...AccountPage_viewer\n    id\n  }\n}\n\nfragment AccountPage_viewer on Viewer {\n  ...Statistics_viewer\n  ...AuthorizedUsers_viewer\n  ...SubaccountsManagment_viewer\n  me {\n    id\n    ...Statistics_user\n    ...AuthorizedUsers_user\n    ...CalendarSync_user\n    ...SubaccountsManagment_user\n    firstName\n    lastName\n    nationality\n    email\n    birthday\n    shouldDeclareVAT\n    address {\n      country\n    }\n    isProfileComplete\n    profileType\n    isSubAccount\n  }\n}\n\nfragment Statistics_viewer on Viewer {\n  id\n  statisticPreferences(userID: \"\") {\n    private\n    isManOfTheGameActivated\n    userStats {\n      stat0 {\n        name\n        id\n      }\n      stat1 {\n        name\n        id\n      }\n      stat2 {\n        name\n        id\n      }\n      stat3 {\n        name\n        id\n      }\n      stat4 {\n        name\n        id\n      }\n      stat5 {\n        name\n        id\n      }\n    }\n  }\n}\n\nfragment AuthorizedUsers_viewer on Viewer {\n  id\n  ...AuthorizedUsersModal_viewer\n}\n\nfragment SubaccountsManagment_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment Statistics_user on User {\n  id\n  areStatisticsActivated\n}\n\nfragment AuthorizedUsers_user on User {\n  id\n  authorized_managers {\n    user {\n      id\n      pseudo\n      avatar\n    }\n    authorization_level\n  }\n  ...AuthorizedUsersModal_user\n}\n\nfragment CalendarSync_user on User {\n  id\n  circlesUserIsIn(first: 100) {\n    edges {\n      node {\n        id\n        owner {\n          id\n          pseudo\n          avatar\n        }\n      }\n    }\n  }\n  calendar {\n    users {\n      id\n      pseudo\n    }\n    preferences {\n      own_synchronized_status\n    }\n  }\n  profileType\n}\n\nfragment SubaccountsManagment_user on User {\n  id\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n  profileType\n}\n\nfragment AuthorizedUsersModal_user on User {\n  id\n  authorized_managers {\n    user {\n      id\n      pseudo\n      avatar\n    }\n    authorization_level\n  }\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n\nfragment AuthorizedUsersModal_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AccountPageQuery",
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
            "name": "AccountPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AccountPageQuery",
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
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": "statisticPreferences(userID:\"\")",
            "args": [
              {
                "kind": "Literal",
                "name": "userID",
                "value": "",
                "type": "String"
              }
            ],
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "private",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isManOfTheGameActivated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userStats",
                "storageKey": null,
                "args": null,
                "concreteType": "userStats",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat0",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat1",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat2",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat3",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat4",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat5",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  }
                ]
              }
            ]
          },
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
                    "name": "FR",
                    "args": null,
                    "storageKey": null
                  },
                  v0
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "logo",
                "args": null,
                "storageKey": null
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
                    "selections": v3
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v3
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v6
              },
              v0,
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phoneNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "areStatisticsActivated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "authorized_managers",
                "storageKey": null,
                "args": null,
                "concreteType": "AuthorizedManager",
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
                    "selections": v6
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "authorization_level",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(first:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100,
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
                          v7
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "calendar",
                "storageKey": null,
                "args": null,
                "concreteType": "Calendar",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "users",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v0,
                      v4
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "preferences",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CalendarPreferences",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "own_synchronized_status",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              v8,
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "nationality",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "birthday",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shouldDeclareVAT",
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
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
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
              v1,
              v7,
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
                  v4,
                  v5,
                  v8
                ]
              },
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0712a7c0636d9601094ecf93f77d0274';
module.exports = node;

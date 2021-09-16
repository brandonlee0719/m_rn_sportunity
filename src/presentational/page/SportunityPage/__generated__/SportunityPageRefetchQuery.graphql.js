/**
 * @flow
 * @relayHash a3b847b7e698ee7cd31a2e0de6cf717b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportunityPage_viewer$ref = any;
export type SportunityPageRefetchQueryVariables = {|
  querySubAccounts: boolean
|};
export type SportunityPageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SportunityPage_viewer$ref
  |}
|};
export type SportunityPageRefetchQuery = {|
  variables: SportunityPageRefetchQueryVariables,
  response: SportunityPageRefetchQueryResponse,
|};
*/


/*
query SportunityPageRefetchQuery(
  $querySubAccounts: Boolean!
) {
  viewer {
    ...SportunityPage_viewer_LsECG
    id
  }
}

fragment SportunityPage_viewer_LsECG on Viewer {
  id
  ...Stepper_viewer
  me {
    ...SportunityListView_user
    id
    avatar
    profileType
    mangoId
    isProfileComplete
    isPublicProfileComplete
    subAccounts @include(if: $querySubAccounts) {
      id
      pseudo
    }
    savedFilters {
      id
      filterName
      status
      statuses
      users {
        id
        pseudo
      }
      subAccounts {
        id
        pseudo
      }
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
      page
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
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
    }
    defaultSavedFilter {
      id
      filterName
      status
      statuses
      users {
        id
        pseudo
      }
      subAccounts {
        id
        pseudo
      }
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
      page
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
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
    }
  }
  ...SportunityListView_viewer
}

fragment Stepper_viewer on Viewer {
  id
  me {
    id
    profileType
    mangoId
    pseudo
    tutorialSteps {
      createFormStep
      setupMembersSubscriptionStep
      fulfilProfileStep
      addOfficialDocumentsStep
      createSubAccountStep
      shareAccessStep
      createCircleStep
      organizeStep
      setupStatisticsStep
      joinAPrivateCircleStep
      joinAPublicCircleStep
      giveAvailabilitiesStep
      bookSportunityStep
    }
    subAccounts {
      id
    }
    isSubAccount
  }
}

fragment SportunityListView_user on User {
  id
  profileType
  description
  ...SportunityItem_user
}

fragment SportunityListView_viewer on Viewer {
  id
  ...SportunityItem_viewer
}

fragment SportunityItem_viewer on Viewer {
  ...TopContent_viewer
}

fragment TopContent_viewer on Viewer {
  id
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "querySubAccounts",
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = [
  v1,
  v3
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v9 = [
  v5,
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v9
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v9
    }
  ]
},
v11 = [
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
v12 = [
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
              v1,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v1,
                  v3,
                  v4
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "status",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "statuses",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": v6
  },
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
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "filterName",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "page",
    "args": null,
    "storageKey": null
  },
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
              v7,
              v8,
              v1
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "logo",
            "args": null,
            "storageKey": null
          },
          v10
        ]
      },
      v10
    ]
  },
  {
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
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "dates",
    "storageKey": null,
    "args": null,
    "concreteType": "StringInterval",
    "plural": false,
    "selections": v11
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "price",
    "storageKey": null,
    "args": null,
    "concreteType": "IntInterval",
    "plural": false,
    "selections": v11
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sportunityTypes",
    "storageKey": null,
    "args": null,
    "concreteType": "SportunityType",
    "plural": true,
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
          v8,
          v7,
          v1
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SportunityPageRefetchQuery",
  "id": null,
  "text": "query SportunityPageRefetchQuery(\n  $querySubAccounts: Boolean!\n) {\n  viewer {\n    ...SportunityPage_viewer_LsECG\n    id\n  }\n}\n\nfragment SportunityPage_viewer_LsECG on Viewer {\n  id\n  ...Stepper_viewer\n  me {\n    ...SportunityListView_user\n    id\n    avatar\n    profileType\n    mangoId\n    isProfileComplete\n    isPublicProfileComplete\n    subAccounts @include(if: $querySubAccounts) {\n      id\n      pseudo\n    }\n    savedFilters {\n      id\n      filterName\n      status\n      statuses\n      users {\n        id\n        pseudo\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            owner {\n              id\n              pseudo\n              avatar\n            }\n          }\n        }\n      }\n      page\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      dates {\n        from\n        to\n      }\n      price {\n        from\n        to\n      }\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n    }\n    defaultSavedFilter {\n      id\n      filterName\n      status\n      statuses\n      users {\n        id\n        pseudo\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            owner {\n              id\n              pseudo\n              avatar\n            }\n          }\n        }\n      }\n      page\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      dates {\n        from\n        to\n      }\n      price {\n        from\n        to\n      }\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n    }\n  }\n  ...SportunityListView_viewer\n}\n\nfragment Stepper_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    mangoId\n    pseudo\n    tutorialSteps {\n      createFormStep\n      setupMembersSubscriptionStep\n      fulfilProfileStep\n      addOfficialDocumentsStep\n      createSubAccountStep\n      shareAccessStep\n      createCircleStep\n      organizeStep\n      setupStatisticsStep\n      joinAPrivateCircleStep\n      joinAPublicCircleStep\n      giveAvailabilitiesStep\n      bookSportunityStep\n    }\n    subAccounts {\n      id\n    }\n    isSubAccount\n  }\n}\n\nfragment SportunityListView_user on User {\n  id\n  profileType\n  description\n  ...SportunityItem_user\n}\n\nfragment SportunityListView_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SportunityPageRefetchQuery",
    "type": "Query",
    "metadata": null,
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
          {
            "kind": "FragmentSpread",
            "name": "SportunityPage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "querySubAccounts",
                "variableName": "querySubAccounts",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SportunityPageRefetchQuery",
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
              v2,
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tutorialSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "TutorialSteps",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createFormStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fulfilProfileStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addOfficialDocumentsStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createSubAccountStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "shareAccessStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "setupMembersSubscriptionStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "organizeStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "setupStatisticsStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "joinAPrivateCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "joinAPublicCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "giveAvailabilitiesStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bookSportunityStep",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
              v4,
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
                "name": "isPublicProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": true,
                "selections": v12
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": false,
                "selections": v12
              },
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "querySubAccounts",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v3
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
(node/*: any*/).hash = '01c757f7bea21b30de90d462ac1748e1';
module.exports = node;

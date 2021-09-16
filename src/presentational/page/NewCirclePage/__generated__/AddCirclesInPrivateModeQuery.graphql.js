/**
 * @flow
 * @relayHash 716381fcba2fe0e0ab1ceeef82f986ce
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddCirclesInPrivateMode_viewer$ref = any;
export type AddCirclesInPrivateModeQueryVariables = {||};
export type AddCirclesInPrivateModeQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AddCirclesInPrivateMode_viewer$ref
  |}
|};
export type AddCirclesInPrivateModeQuery = {|
  variables: AddCirclesInPrivateModeQueryVariables,
  response: AddCirclesInPrivateModeQueryResponse,
|};
*/


/*
query AddCirclesInPrivateModeQuery {
  viewer {
    ...AddCirclesInPrivateMode_viewer
    id
  }
}

fragment AddCirclesInPrivateMode_viewer on Viewer {
  ...NewCircleInvitations_viewer
  me {
    id
    fees
    profileType
    ...NewCircleInvitations_user
  }
}

fragment NewCircleInvitations_viewer on Viewer {
  id
  ...NewCircleInvitationModal_viewer
}

fragment NewCircleInvitations_user on User {
  id
  profileType
  pseudo
  email
  circlesUserIsIn(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        owner {
          id
          pseudo
          avatar
        }
        isCircleUsableByMembers
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
  circlesFromClub(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        owner {
          id
          pseudo
          avatar
        }
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
  circles(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        mode
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
}

fragment NewCircleInvitationModal_viewer on Viewer {
  ...Invitee_viewer
  ...InvitedCircle_viewer
  ...SearchModule_viewer
}

fragment Invitee_viewer on Viewer {
  id
}

fragment InvitedCircle_viewer on Viewer {
  id
  me {
    pseudo
    avatar
    id
  }
  ...InvitedCircleDetails_viewer
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

fragment InvitedCircleDetails_viewer on Viewer {
  id
  ...AddMemberModal_viewer
  me {
    id
    pseudo
    email
    profileType
  }
}

fragment AddMemberModal_viewer on Viewer {
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v0,
    v1,
    v2
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
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
v11 = {
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
            v10,
            v0
          ]
        }
      ]
    }
  ]
},
v12 = [
  v6
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AddCirclesInPrivateModeQuery",
  "id": null,
  "text": "query AddCirclesInPrivateModeQuery {\n  viewer {\n    ...AddCirclesInPrivateMode_viewer\n    id\n  }\n}\n\nfragment AddCirclesInPrivateMode_viewer on Viewer {\n  ...NewCircleInvitations_viewer\n  me {\n    id\n    fees\n    profileType\n    ...NewCircleInvitations_user\n  }\n}\n\nfragment NewCircleInvitations_viewer on Viewer {\n  id\n  ...NewCircleInvitationModal_viewer\n}\n\nfragment NewCircleInvitations_user on User {\n  id\n  profileType\n  pseudo\n  email\n  circlesUserIsIn(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        isCircleUsableByMembers\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circlesFromClub(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circles(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        mode\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment NewCircleInvitationModal_viewer on Viewer {\n  ...Invitee_viewer\n  ...InvitedCircle_viewer\n  ...SearchModule_viewer\n}\n\nfragment Invitee_viewer on Viewer {\n  id\n}\n\nfragment InvitedCircle_viewer on Viewer {\n  id\n  me {\n    pseudo\n    avatar\n    id\n  }\n  ...InvitedCircleDetails_viewer\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment InvitedCircleDetails_viewer on Viewer {\n  id\n  ...AddMemberModal_viewer\n  me {\n    id\n    pseudo\n    email\n    profileType\n  }\n}\n\nfragment AddMemberModal_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddCirclesInPrivateModeQuery",
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
            "name": "AddCirclesInPrivateMode_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddCirclesInPrivateModeQuery",
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
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              v2,
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": v4,
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
                      v5,
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
                          v6,
                          v7,
                          v8,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUsableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          v9,
                          v11
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesFromClub",
                "storageKey": "circlesFromClub(last:100)",
                "args": v4,
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
                      v5,
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
                          v6,
                          v7,
                          v8,
                          v9,
                          v11
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:100)",
                "args": v4,
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
                      v5,
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
                          v6,
                          v7,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          v9,
                          v11
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
                  v10,
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
                    "selections": v12
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v12
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
              v6,
              v8,
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
                  v1,
                  v2,
                  v3
                ]
              },
              v9
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7120d732ba835314f17553c717dd3c03';
module.exports = node;

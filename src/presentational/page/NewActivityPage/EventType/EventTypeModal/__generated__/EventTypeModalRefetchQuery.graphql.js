/**
 * @flow
 * @relayHash 5a763941a1a8aed241d340ad91620c7b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventTypeModal_viewer$ref = any;
export type EventTypeModalRefetchQueryVariables = {|
  query: boolean
|};
export type EventTypeModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventTypeModal_viewer$ref
  |}
|};
export type EventTypeModalRefetchQuery = {|
  variables: EventTypeModalRefetchQueryVariables,
  response: EventTypeModalRefetchQueryResponse,
|};
*/


/*
query EventTypeModalRefetchQuery(
  $query: Boolean!
) {
  viewer {
    ...EventTypeModal_viewer_1Qr5xf
    id
  }
}

fragment EventTypeModal_viewer_1Qr5xf on Viewer {
  ...SearchModule_viewer
  id
  me {
    id
    opponentCircles: circles(last: 20, type: [TEAMS, CLUBS]) @include(if: $query) {
      edges {
        node {
          id
          memberCount
          name
        }
      }
    }
  opponentCirclesFromClub: circlesFromClub(last: 20, type: [TEAMS, CLUBS]) @include(if: $query) {
      edges {
        node {
          id
          name
          memberCount
          owner {
            id
            pseudo
            avatar
          }
        }
      }
    }
  }
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
var v0 = [
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  v2
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": [
      "TEAMS",
      "CLUBS"
    ],
    "type": "[CircleTypeEnum]"
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v1,
    v7,
    v8
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventTypeModalRefetchQuery",
  "id": null,
  "text": "query EventTypeModalRefetchQuery(\n  $query: Boolean!\n) {\n  viewer {\n    ...EventTypeModal_viewer_1Qr5xf\n    id\n  }\n}\n\nfragment EventTypeModal_viewer_1Qr5xf on Viewer {\n  ...SearchModule_viewer\n  id\n  me {\n    id\n    opponentCircles: circles(last: 20, type: [TEAMS, CLUBS]) @include(if: $query) {\n      edges {\n        node {\n          id\n          memberCount\n          name\n        }\n      }\n    }\n  opponentCirclesFromClub: circlesFromClub(last: 20, type: [TEAMS, CLUBS]) @include(if: $query) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n          owner {\n            id\n            pseudo\n            avatar\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventTypeModalRefetchQuery",
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
            "name": "EventTypeModal_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
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
    "name": "EventTypeModalRefetchQuery",
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
            "alias": "filterSport",
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
              {
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
              v1,
              v4,
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "query",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": "opponentCircles",
                    "name": "circles",
                    "storageKey": "circles(last:20,type:[\"TEAMS\",\"CLUBS\"])",
                    "args": v5,
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
                              v6,
                              v2
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "opponentCirclesFromClub",
                    "name": "circlesFromClub",
                    "storageKey": "circlesFromClub(last:20,type:[\"TEAMS\",\"CLUBS\"])",
                    "args": v5,
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
                              v2,
                              v6,
                              v9
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
          {
            "kind": "LinkedField",
            "alias": "selectedCircle",
            "name": "circle",
            "storageKey": null,
            "args": null,
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              v1,
              v2,
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v7,
                  v8,
                  v4
                ]
              },
              v6
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '773addcff50aa8e4ad352a8863073061';
module.exports = node;

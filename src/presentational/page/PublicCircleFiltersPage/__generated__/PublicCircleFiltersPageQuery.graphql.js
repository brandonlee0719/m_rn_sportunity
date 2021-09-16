/**
 * @flow
 * @relayHash 3c540d84fc754a2cdd0fc2c9e6235a35
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PublicCircleFiltersPage_viewer$ref = any;
export type PublicCircleFiltersPageQueryVariables = {||};
export type PublicCircleFiltersPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PublicCircleFiltersPage_viewer$ref
  |}
|};
export type PublicCircleFiltersPageQuery = {|
  variables: PublicCircleFiltersPageQueryVariables,
  response: PublicCircleFiltersPageQueryResponse,
|};
*/


/*
query PublicCircleFiltersPageQuery {
  viewer {
    ...PublicCircleFiltersPage_viewer
    id
  }
}

fragment PublicCircleFiltersPage_viewer on Viewer {
  ...FilterDetailSports_viewer
  ...SavedFilterList_viewer
  ...PublicCirclesFilter_viewer
  me {
    id
    pseudo
    avatar
    profileType
    isSubAccount
    subAccounts {
      id
      pseudo
      circles(last: 30) {
        edges {
          node {
            id
            name
            memberCount
          }
        }
      }
    }
    masterAccount {
      id
      subAccounts {
        id
        pseudo
        circles(last: 30) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
      }
    }
    defaultSavedCircleFilter {
      id
    }
    savedCircleFilters {
      id
      filterName
      canBeDeleted
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
      owners {
        id
        pseudo
      }
    }
  }
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

fragment SavedFilterList_viewer on Viewer {
  sports(last: 20) {
    edges {
      node {
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
  }
}

fragment PublicCirclesFilter_viewer on Viewer {
  id
  me {
    id
    sports {
      ...SportList_sports
    }
  }
}

fragment SportList_sports on SportDescriptor {
  sport {
    id
    name {
      id
      EN
      FR
    }
    logo
    positions {
      id
      EN
      FR
    }
    certificates {
      id
      name {
        id
        EN
        FR
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
  positions {
    id
    EN
    FR
  }
  certificates {
    validation
    certificate {
      id
      name {
        id
        EN
        FR
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
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
  v5
],
v7 = [
  v0,
  v3,
  v4,
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
        "selections": v6
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FR",
        "storageKey": null,
        "args": null,
        "concreteType": "SportLevel",
        "plural": false,
        "selections": v6
      }
    ]
  }
],
v8 = [
  v0,
  v1,
  v2
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v8
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v8
},
v11 = [
  v0,
  v9
],
v12 = [
  v5,
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
v13 = {
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
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v14,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circles",
      "storageKey": "circles(last:30)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 30,
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
                v5,
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
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PublicCircleFiltersPageQuery",
  "id": null,
  "text": "query PublicCircleFiltersPageQuery {\n  viewer {\n    ...PublicCircleFiltersPage_viewer\n    id\n  }\n}\n\nfragment PublicCircleFiltersPage_viewer on Viewer {\n  ...FilterDetailSports_viewer\n  ...SavedFilterList_viewer\n  ...PublicCirclesFilter_viewer\n  me {\n    id\n    pseudo\n    avatar\n    profileType\n    isSubAccount\n    subAccounts {\n      id\n      pseudo\n      circles(last: 30) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n          }\n        }\n      }\n    }\n    masterAccount {\n      id\n      subAccounts {\n        id\n        pseudo\n        circles(last: 30) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n            }\n          }\n        }\n      }\n    }\n    defaultSavedCircleFilter {\n      id\n    }\n    savedCircleFilters {\n      id\n      filterName\n      canBeDeleted\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      circleType\n      memberType\n      owners {\n        id\n        pseudo\n      }\n    }\n  }\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SavedFilterList_viewer on Viewer {\n  sports(last: 20) {\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n          }\n          FR {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment PublicCirclesFilter_viewer on Viewer {\n  id\n  me {\n    id\n    sports {\n      ...SportList_sports\n    }\n  }\n}\n\nfragment SportList_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n    logo\n    positions {\n      id\n      EN\n      FR\n    }\n    certificates {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        description\n        skillLevel\n      }\n      FR {\n        name\n        description\n        skillLevel\n      }\n    }\n  }\n  positions {\n    id\n    EN\n    FR\n  }\n  certificates {\n    validation\n    certificate {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PublicCircleFiltersPageQuery",
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
            "name": "PublicCircleFiltersPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PublicCircleFiltersPageQuery",
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
            "kind": "LinkedField",
            "alias": "filterSport",
            "name": "sport",
            "storageKey": null,
            "args": null,
            "concreteType": "Sport",
            "plural": false,
            "selections": v7
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sports",
            "storageKey": "sports(last:20)",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 20,
                "type": "Int"
              }
            ],
            "concreteType": "SportConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SportEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": v7
                  }
                ]
              }
            ]
          },
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
              v0,
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
                      v9,
                      v4,
                      v10,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": v11
                      },
                      v13
                    ]
                  },
                  v10,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CertificateDescriptor",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "validation",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificate",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": false,
                        "selections": v11
                      }
                    ]
                  },
                  v13
                ]
              },
              v14,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatar",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              v15,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "masterAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v0,
                  v15
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedCircleFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": false,
                "selections": [
                  v0
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedCircleFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": true,
                "selections": [
                  v0,
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
                    "name": "canBeDeleted",
                    "args": null,
                    "storageKey": null
                  },
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
                          v0,
                          v3,
                          v4,
                          v13
                        ]
                      },
                      v13
                    ]
                  },
                  {
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "circleType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "memberType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owners",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v0,
                      v14
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
(node/*: any*/).hash = '93a1d3cd6419f929d2b0b60921920176';
module.exports = node;

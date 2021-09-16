/**
 * @flow
 * @relayHash 68af14826ddab453b48e42fbf07ab798
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FiltersPage_viewer$ref = any;
export type FiltersPageQueryVariables = {||};
export type FiltersPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: FiltersPage_viewer$ref
  |}
|};
export type FiltersPageQuery = {|
  variables: FiltersPageQueryVariables,
  response: FiltersPageQueryResponse,
|};
*/


/*
query FiltersPageQuery {
  viewer {
    ...FiltersPage_viewer
    id
  }
}

fragment FiltersPage_viewer on Viewer {
  ...FilterDetailSports_viewer
  ...SavedFilterList_viewer
  ...FilterSportunityTypes_viewer
  me {
    id
    pseudo
    avatar
    description
    profileType
    canQuerySportunityTypeFilter
    circlesUserIsIn(last: 20) {
      ...FilterDetailCircles_circles
    }
    defaultSavedFilter {
      id
    }
    subAccounts {
      id
      pseudo
    }
    savedFilters {
      id
      filterName
      canBeDeleted
      status
      statuses
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
      sportunityTypes {
        id
        name {
          FR
          EN
          id
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

fragment FilterSportunityTypes_viewer on Viewer {
  sportunityTypes(sportType: COLLECTIVE) {
    id
    name {
      FR
      EN
      id
    }
  }
}

fragment FilterDetailCircles_circles on CircleConnection {
  edges {
    node {
      id
      name
      type
      memberCount
      owner {
        id
        avatar
        pseudo
      }
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
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  }
],
v9 = [
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
      v0
    ]
  }
],
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
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v10
  ]
},
v14 = [
  v5,
  v12,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v15 = {
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
      "selections": v14
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v14
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FiltersPageQuery",
  "id": null,
  "text": "query FiltersPageQuery {\n  viewer {\n    ...FiltersPage_viewer\n    id\n  }\n}\n\nfragment FiltersPage_viewer on Viewer {\n  ...FilterDetailSports_viewer\n  ...SavedFilterList_viewer\n  ...FilterSportunityTypes_viewer\n  me {\n    id\n    pseudo\n    avatar\n    description\n    profileType\n    canQuerySportunityTypeFilter\n    circlesUserIsIn(last: 20) {\n      ...FilterDetailCircles_circles\n    }\n    defaultSavedFilter {\n      id\n    }\n    subAccounts {\n      id\n      pseudo\n    }\n    savedFilters {\n      id\n      filterName\n      canBeDeleted\n      status\n      statuses\n      subAccounts {\n        id\n        pseudo\n      }\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            owner {\n              id\n              pseudo\n              avatar\n            }\n          }\n        }\n      }\n      page\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      dates {\n        from\n        to\n      }\n      price {\n        from\n        to\n      }\n    }\n  }\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SavedFilterList_viewer on Viewer {\n  sports(last: 20) {\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n          }\n          FR {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment FilterSportunityTypes_viewer on Viewer {\n  sportunityTypes(sportType: COLLECTIVE) {\n    id\n    name {\n      FR\n      EN\n      id\n    }\n  }\n}\n\nfragment FilterDetailCircles_circles on CircleConnection {\n  edges {\n    node {\n      id\n      name\n      type\n      memberCount\n      owner {\n        id\n        avatar\n        pseudo\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FiltersPageQuery",
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
            "name": "FiltersPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FiltersPageQuery",
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
            "args": v8,
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunityTypes",
            "storageKey": "sportunityTypes(sportType:\"COLLECTIVE\")",
            "args": [
              {
                "kind": "Literal",
                "name": "sportType",
                "value": "COLLECTIVE",
                "type": "SportTypeEnum"
              }
            ],
            "concreteType": "SportunityType",
            "plural": true,
            "selections": v9
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
              v10,
              v11,
              v12,
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
                "name": "canQuerySportunityTypeFilter",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:20)",
                "args": v8,
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
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "memberCount",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v0,
                              v11,
                              v10
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
                "name": "defaultSavedFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": false,
                "selections": [
                  v0
                ]
              },
              v13,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circles",
                    "storageKey": "circles(last:20)",
                    "args": v8,
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
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "owner",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": [
                                  v0,
                                  v10,
                                  v11
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "canBeDeleted",
                    "args": null,
                    "storageKey": null
                  },
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
                  v13,
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
                    "name": "sportunityTypes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityType",
                    "plural": true,
                    "selections": v9
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
                          v0,
                          v3,
                          v4,
                          v15
                        ]
                      },
                      v15
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
                    "selections": v16
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "IntInterval",
                    "plural": false,
                    "selections": v16
                  }
                ]
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6a23fa550de6f7dbe0a57d016cf6cff';
module.exports = node;

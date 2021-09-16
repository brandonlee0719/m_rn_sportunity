/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CirclesDetailPage_viewer$ref = any;
type CirclesItem_circle$ref = any;
type Stepper_viewer$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CirclesPageView_viewer$ref: FragmentReference;
export type CirclesPageView_viewer = {|
  +id: string,
  +circles?: ?{|
    +count: ?number,
    +pageInfo: {|
      +hasNextPage: boolean
    |},
    +edges?: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +isCircleUsableByMembers: ?boolean,
        +owner: ?{|
          +id: string
        |},
        +coOwners: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
        +members: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
        +termsOfUses: ?$ReadOnlyArray<?{|
          +id: string,
          +name: ?string,
          +link: ?string,
          +content: ?string,
          +acceptedBy: ?$ReadOnlyArray<?{|
            +user: ?{|
              +id: string
            |}
          |}>,
        |}>,
        +$fragmentRefs: CirclesItem_circle$ref,
      |}
    |}>,
  |},
  +me: ?{|
    +id: string,
    +profileType: ?UserProfileType,
    +basicCircleSavedFiltersCreated: ?boolean,
    +savedCircleFilters: ?$ReadOnlyArray<?{|
      +id: string,
      +filterName: ?string,
      +location: ?{|
        +lat: ?number,
        +lng: ?number,
        +radius: ?number,
      |},
      +sport: ?$ReadOnlyArray<?{|
        +sport: ?{|
          +id: string,
          +name: ?{|
            +EN: ?string,
            +FR: ?string,
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
      +circleType: ?$ReadOnlyArray<?CircleListTypeEnum>,
      +memberTypes: ?$ReadOnlyArray<?CircleTypeEnum>,
      +modes: ?$ReadOnlyArray<?CircleKind>,
      +owners: ?$ReadOnlyArray<?{|
        +id: string,
        +pseudo: string,
      |}>,
    |}>,
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
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +circles?: ?{|
      +count: ?number,
      +edges?: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +owner: ?{|
            +id: string,
            +avatar: ?string,
            +pseudo: string,
          |},
          +isCircleAccessibleFromUrl: ?boolean,
          +mode: CircleKind,
          +type: ?CircleTypeEnum,
          +coOwners: ?$ReadOnlyArray<?{|
            +id: string
          |}>,
          +members: ?$ReadOnlyArray<?{|
            +id: string
          |}>,
          +memberParents: ?$ReadOnlyArray<?{|
            +id: string
          |}>,
          +$fragmentRefs: CirclesItem_circle$ref,
        |}
      |}>,
    |},
    +circlesUserIsIn?: ?{|
      +count: ?number,
      +edges?: ?$ReadOnlyArray<?{|
        +node: ?{|
          +isCircleAccessibleFromUrl: ?boolean,
          +isCircleUsableByMembers: ?boolean,
          +id: string,
          +$fragmentRefs: CirclesItem_circle$ref,
        |}
      |}>,
    |},
    +circlesSuperUser?: ?{|
      +count: ?number,
      +edges?: ?$ReadOnlyArray<?{|
        +node: ?{|
          +isCircleAccessibleFromUrl: ?boolean,
          +id: string,
          +$fragmentRefs: CirclesItem_circle$ref,
        |}
      |}>,
    |},
    +circlesFromClub?: ?{|
      +count: ?number,
      +edges?: ?$ReadOnlyArray<?{|
        +node: ?{|
          +isCircleAccessibleFromUrl: ?boolean,
          +id: string,
          +$fragmentRefs: CirclesItem_circle$ref,
        |}
      |}>,
    |},
  |},
  +$fragmentRefs: CirclesDetailPage_viewer$ref & Stepper_viewer$ref,
  +$refType: CirclesPageView_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
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
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v2 = {
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
v3 = {
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
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  v4,
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
v6 = {
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
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v9 = [
  v0
],
v10 = {
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "FragmentSpread",
  "name": "CirclesItem_circle",
  "args": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleAccessibleFromUrl",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "coOwners",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v9
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v9
},
v16 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "CirclesFilter"
  },
  v10
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v18 = [
  v11,
  {
    "kind": "Condition",
    "passingValue": true,
    "condition": "queryCirclesSuperUser",
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
              v12,
              v13,
              v0
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "CirclesPageView_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryPublic",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryMyCircles",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryCirclesImIn",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryCirclesSuperUser",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryMain",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "CirclesFilter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "publicFilter",
      "type": "CirclesFilter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "myCirclesFilter",
      "type": "CirclesFilter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "circleNumber",
      "type": "Int",
      "defaultValue": 10
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "CirclesDetailPage_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Stepper_viewer",
      "args": null
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
          "name": "basicCircleSavedFiltersCreated",
          "args": null,
          "storageKey": null
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
            v1,
            v2,
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
                    v6
                  ]
                },
                v6
              ]
            },
            v7,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "memberTypes",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "modes",
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
                v8
              ]
            }
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
            v0,
            v1,
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
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "logo",
                      "args": null,
                      "storageKey": null
                    },
                    v6
                  ]
                },
                v6
              ]
            },
            v2,
            v7,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "memberType",
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
          "selections": v9
        },
        {
          "kind": "Condition",
          "passingValue": true,
          "condition": "queryMain",
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "circles",
              "storageKey": null,
              "args": [
                {
                  "kind": "Variable",
                  "name": "filter",
                  "variableName": "myCirclesFilter",
                  "type": "CirclesFilter"
                },
                v10
              ],
              "concreteType": "CircleConnection",
              "plural": false,
              "selections": [
                v11,
                {
                  "kind": "Condition",
                  "passingValue": true,
                  "condition": "queryMyCircles",
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
                            v12,
                            v0,
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
                                {
                                  "kind": "ScalarField",
                                  "alias": null,
                                  "name": "avatar",
                                  "args": null,
                                  "storageKey": null
                                },
                                v8
                              ]
                            },
                            v13,
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "mode",
                              "args": null,
                              "storageKey": null
                            },
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "type",
                              "args": null,
                              "storageKey": null
                            },
                            v14,
                            v15,
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "memberParents",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "User",
                              "plural": true,
                              "selections": v9
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
              "alias": null,
              "name": "circlesUserIsIn",
              "storageKey": null,
              "args": v16,
              "concreteType": "CircleConnection",
              "plural": false,
              "selections": [
                v11,
                {
                  "kind": "Condition",
                  "passingValue": true,
                  "condition": "queryCirclesImIn",
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
                            v12,
                            v13,
                            v17,
                            v0
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
              "name": "circlesSuperUser",
              "storageKey": null,
              "args": v16,
              "concreteType": "CircleConnection",
              "plural": false,
              "selections": v18
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "circlesFromClub",
              "storageKey": null,
              "args": v16,
              "concreteType": "CircleConnection",
              "plural": false,
              "selections": v18
            }
          ]
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryMain",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circles",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "publicFilter",
              "type": "CirclesFilter"
            },
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "circleNumber",
              "type": "Int"
            }
          ],
          "concreteType": "CircleConnection",
          "plural": false,
          "selections": [
            v11,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "pageInfo",
              "storageKey": null,
              "args": null,
              "concreteType": "PageInfo",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasNextPage",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "Condition",
              "passingValue": true,
              "condition": "queryPublic",
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
                        v12,
                        v17,
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "owner",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": false,
                          "selections": v9
                        },
                        v14,
                        v15,
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "termsOfUses",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "CircleTermsOfUse",
                          "plural": true,
                          "selections": [
                            v0,
                            v4,
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "link",
                              "args": null,
                              "storageKey": null
                            },
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "content",
                              "args": null,
                              "storageKey": null
                            },
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "acceptedBy",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "TermsOfUseAcceptedBy",
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
                                  "selections": v9
                                }
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
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '43acdff06773c3fcba3e910766452d0f';
module.exports = node;

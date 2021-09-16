/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CirclesItem_circle$ref = any;
type FilterDetailSports_viewer$ref = any;
type SportunityItem_sportunity$ref = any;
type SportunityItem_user$ref = any;
type SportunityItem_viewer$ref = any;
type UserCard_user$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchModule_viewer$ref: FragmentReference;
export type SearchModule_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +profileType: ?UserProfileType,
    +$fragmentRefs: SportunityItem_user$ref,
  |},
  +superMe?: ?{|
    +id: ?string,
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: ?string
    |}>,
  |},
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
          +id: string,
          +pseudo: string,
          +avatar: ?string,
          +profileType: ?UserProfileType,
        |}>,
        +memberParents: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
        +$fragmentRefs: CirclesItem_circle$ref,
      |}
    |}>,
  |},
  +users?: ?{|
    +count: ?number,
    +edges?: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +profileType: ?UserProfileType,
        +$fragmentRefs: UserCard_user$ref,
      |}
    |}>,
  |},
  +sportunities?: ?{|
    +count: ?number,
    +edges?: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: SportunityItem_sportunity$ref,
      |}
    |}>,
  |},
  +opponents?: ?{|
    +count: ?number,
    +edges?: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +avatar: ?string,
        +pseudo: string,
      |}
    |}>,
  |},
  +selectedCircle: ?{|
    +id: string,
    +name: ?string,
    +owner: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +members: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
      +profileType: ?UserProfileType,
    |}>,
    +memberCount: number,
  |},
  +$fragmentRefs: SportunityItem_viewer$ref & FilterDetailSports_viewer$ref,
  +$refType: SearchModule_viewer$ref,
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
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v2,
    v3,
    v1
  ]
},
v5 = [
  v0
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v7 = [
  v0,
  v3,
  v2
],
v8 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "firstUsers",
  "type": "Int"
},
v9 = {
  "kind": "Variable",
  "name": "pseudo",
  "variableName": "text",
  "type": "String"
};
return {
  "kind": "Fragment",
  "name": "SearchModule_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryMain",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryUsers",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "text",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "firstUsers",
      "type": "Int",
      "defaultValue": 5
    },
    {
      "kind": "LocalArgument",
      "name": "userType",
      "type": "UserProfileType",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "queryCircles",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "circlesFilter",
      "type": "CirclesFilter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "firstCircles",
      "type": "Int",
      "defaultValue": 5
    },
    {
      "kind": "LocalArgument",
      "name": "querySportunities",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "sportunityFilter",
      "type": "Filter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "firstSportunities",
      "type": "Int",
      "defaultValue": 5
    },
    {
      "kind": "LocalArgument",
      "name": "circleId",
      "type": "ID",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "queryOpponents",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "sportId",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "superToken",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "SportunityItem_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FilterDetailSports_viewer",
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
        v1,
        {
          "kind": "FragmentSpread",
          "name": "SportunityItem_user",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "selectedCircle",
      "name": "circle",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "circleId",
          "type": "ID"
        }
      ],
      "concreteType": "Circle",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
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
            v2,
            v3
          ]
        },
        v4,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "memberCount",
          "args": null,
          "storageKey": null
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
          "name": "superMe",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "superToken",
              "variableName": "superToken",
              "type": "String"
            }
          ],
          "concreteType": "SuperUser",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "subAccounts",
              "storageKey": null,
              "args": null,
              "concreteType": "SubAccounts",
              "plural": true,
              "selections": v5
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circles",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "circlesFilter",
              "type": "CirclesFilter"
            },
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "firstCircles",
              "type": "Int"
            }
          ],
          "concreteType": "CircleConnection",
          "plural": false,
          "selections": [
            v6,
            {
              "kind": "Condition",
              "passingValue": true,
              "condition": "queryCircles",
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
                        {
                          "kind": "FragmentSpread",
                          "name": "CirclesItem_circle",
                          "args": null
                        },
                        v0,
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "owner",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": false,
                          "selections": v7
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "isCircleAccessibleFromUrl",
                          "args": null,
                          "storageKey": null
                        },
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
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "coOwners",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": true,
                          "selections": v5
                        },
                        v4,
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "memberParents",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": true,
                          "selections": v5
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
          "name": "users",
          "storageKey": null,
          "args": [
            v8,
            v9,
            {
              "kind": "Variable",
              "name": "userType",
              "variableName": "userType",
              "type": "UserProfileType"
            }
          ],
          "concreteType": "UserConnection",
          "plural": false,
          "selections": [
            v6,
            {
              "kind": "Condition",
              "passingValue": true,
              "condition": "queryUsers",
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "UserEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "User",
                      "plural": false,
                      "selections": [
                        v0,
                        v1,
                        {
                          "kind": "FragmentSpread",
                          "name": "UserCard_user",
                          "args": null
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
          "name": "sportunities",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "sportunityFilter",
              "type": "Filter"
            },
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "firstSportunities",
              "type": "Int"
            }
          ],
          "concreteType": "SportunityConnection",
          "plural": false,
          "selections": [
            v6,
            {
              "kind": "Condition",
              "passingValue": true,
              "condition": "querySportunities",
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportunityEdge",
                  "plural": true,
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
                        v0,
                        {
                          "kind": "FragmentSpread",
                          "name": "SportunityItem_sportunity",
                          "args": null
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
          "name": "opponents",
          "storageKey": null,
          "args": [
            v8,
            v9,
            {
              "kind": "Variable",
              "name": "sportId",
              "variableName": "sportId",
              "type": "String"
            }
          ],
          "concreteType": "UserConnection",
          "plural": false,
          "selections": [
            v6,
            {
              "kind": "Condition",
              "passingValue": true,
              "condition": "queryOpponents",
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "UserEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "User",
                      "plural": false,
                      "selections": v7
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
(node/*: any*/).hash = 'cb05400b186f62fd25d6f00e77f017ed';
module.exports = node;

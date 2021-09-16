/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportunityItem_sportunity$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityListView_sportunities$ref: FragmentReference;
export type SportunityListView_sportunities = {|
  +count: ?number,
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +status: ?string,
      +price: ?{|
        +cents: number,
        +currency: ?Currency,
      |},
      +invited: ?$ReadOnlyArray<?{|
        +user: ?{|
          +id: string
        |}
      |}>,
      +paymentStatus: ?$ReadOnlyArray<?{|
        +user: ?{|
          +id: string
        |},
        +status: ?PaymentStatus,
        +price: ?{|
          +cents: number,
          +currency: ?Currency,
        |},
      |}>,
      +survey: ?{|
        +isSurveyTransformed: ?boolean,
        +surveyDates: ?$ReadOnlyArray<?{|
          +answers: ?$ReadOnlyArray<?{|
            +user: ?{|
              +id: string
            |}
          |}>
        |}>,
      |},
      +game_information: ?{|
        +opponent: ?{|
          +lookingForAnOpponent: ?boolean,
          +invitedOpponents: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +id: string,
                +members: ?$ReadOnlyArray<?{|
                  +id: string
                |}>,
              |}
            |}>
          |},
        |}
      |},
      +organizers: ?$ReadOnlyArray<?{|
        +organizer: ?{|
          +id: string,
          +pseudo: string,
        |},
        +isAdmin: boolean,
        +role: OrganizerRole,
        +price: ?{|
          +currency: ?Currency,
          +cents: number,
        |},
        +secondaryOrganizerType: ?{|
          +id: string,
          +name: ?{|
            +id: string,
            +EN: ?string,
            +FR: ?string,
          |},
        |},
        +customSecondaryOrganizerType: ?string,
        +permissions: ?{|
          +chatAccess: ?{|
            +view: ?boolean,
            +edit: ?boolean,
          |},
          +memberAccess: ?{|
            +view: ?boolean,
            +edit: ?boolean,
          |},
          +carPoolingAccess: ?{|
            +view: ?boolean,
            +edit: ?boolean,
          |},
          +imageAccess: ?{|
            +view: ?boolean,
            +edit: ?boolean,
          |},
          +detailsAccess: ?{|
            +view: ?boolean,
            +edit: ?boolean,
          |},
          +compositionAccess: ?{|
            +view: ?boolean,
            +edit: ?boolean,
          |},
        |},
      |}>,
      +$fragmentRefs: SportunityItem_sportunity$ref,
    |}
  |}>,
  +$refType: SportunityListView_sportunities$ref,
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
  "name": "status",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v2,
    v3
  ]
},
v5 = [
  v0
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v5
},
v7 = [
  v6
],
v8 = [
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
  "kind": "Fragment",
  "name": "SportunityListView_sportunities",
  "type": "SportunityConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
            v1,
            v4,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "invited",
              "storageKey": null,
              "args": null,
              "concreteType": "Invited",
              "plural": true,
              "selections": v7
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "paymentStatus",
              "storageKey": null,
              "args": null,
              "concreteType": "SportunityPaymentStatus",
              "plural": true,
              "selections": [
                v6,
                v1,
                v4
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "survey",
              "storageKey": null,
              "args": null,
              "concreteType": "Survey",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isSurveyTransformed",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "surveyDates",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SurveyDatesOutput",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "answers",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "SurveyAnswer",
                      "plural": true,
                      "selections": v7
                    }
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
              "concreteType": "GameInformation",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "opponent",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportunityOpponentOutput",
                  "plural": false,
                  "selections": [
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
                                {
                                  "kind": "LinkedField",
                                  "alias": null,
                                  "name": "members",
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
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "pseudo",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isAdmin",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "role",
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
                    v3,
                    v2
                  ]
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
                  "name": "permissions",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "coOrganizersPermissions",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "chatAccess",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "coOrganizersChatAccess",
                      "plural": false,
                      "selections": v8
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "memberAccess",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "coOrganizersMemberAccess",
                      "plural": false,
                      "selections": v8
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "carPoolingAccess",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "coOrganizersCarPoolingAccess",
                      "plural": false,
                      "selections": v8
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "imageAccess",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "coOrganizersImageAccess",
                      "plural": false,
                      "selections": v8
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "detailsAccess",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "coOrganizersDetailsAccess",
                      "plural": false,
                      "selections": v8
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "compositionAccess",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "coOrganizersCompositionAccess",
                      "plural": false,
                      "selections": v8
                    }
                  ]
                }
              ]
            },
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bae3f93a7b389ed82140c17d87874463';
module.exports = node;

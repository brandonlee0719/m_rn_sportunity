/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type UserCard_user$ref = any;
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityNotificationPreference = "Automatically" | "Manually" | "Now" | "%future added value";
export type SportunityPrivacySwitchPreference = "Automatically" | "Manually" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectTemplateModal_user$ref: FragmentReference;
export type SelectTemplateModal_user = {|
  +id: string,
  +sportunityTemplates: ?$ReadOnlyArray<?{|
    +id: string,
    +title: ?string,
    +description: ?string,
    +kind: SportunityKind,
    +fees: ?number,
    +privacy_switch_preference: ?{|
      +privacy_switch_type: ?SportunityPrivacySwitchPreference,
      +switch_privacy_x_days_before: ?number,
    |},
    +invited: ?$ReadOnlyArray<?{|
      +user: ?{|
        +id: string,
        +pseudo: string,
        +avatar: ?string,
        +$fragmentRefs: UserCard_user$ref,
      |},
      +answer: ?invitedUserAnswer,
    |}>,
    +invited_circles: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +members: ?$ReadOnlyArray<?{|
            +id: string
          |}>,
          +owner: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +type: ?CircleTypeEnum,
          +memberCount: number,
        |}
      |}>
    |},
    +price_for_circle: ?$ReadOnlyArray<?{|
      +circle: ?{|
        +id: string
      |},
      +price: ?{|
        +cents: number,
        +currency: ?Currency,
      |},
      +participantByDefault: ?boolean,
    |}>,
    +notification_preference: ?{|
      +notification_type: ?SportunityNotificationPreference,
      +send_notification_x_days_before: ?number,
    |},
    +participantRange: ?{|
      +from: ?number,
      +to: ?number,
    |},
    +hide_participant_list: ?boolean,
    +price: ?{|
      +currency: ?Currency,
      +cents: number,
    |},
    +sport: ?{|
      +sport: ?{|
        +id: string,
        +name: ?{|
          +EN: ?string,
          +DE: ?string,
          +FR: ?string,
        |},
        +logo: string,
      |},
      +positions: ?$ReadOnlyArray<?{|
        +id: string,
        +EN: ?string,
        +FR: ?string,
        +DE: ?string,
      |}>,
      +certificates: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?{|
          +EN: ?string,
          +FR: ?string,
          +DE: ?string,
        |},
      |}>,
      +levels: ?$ReadOnlyArray<?{|
        +id: string,
        +EN: ?{|
          +name: ?string,
          +skillLevel: number,
          +description: ?string,
        |},
        +FR: ?{|
          +name: ?string,
          +skillLevel: number,
          +description: ?string,
        |},
        +DE: ?{|
          +name: ?string,
          +skillLevel: number,
          +description: ?string,
        |},
      |}>,
    |},
    +ageRestriction: ?{|
      +from: ?number,
      +to: ?number,
    |},
    +sexRestriction: ?SexRestriction,
    +address: ?{|
      +address: string,
      +country: string,
      +city: string,
      +position: ?{|
        +lat: ?number,
        +lng: ?number,
      |},
    |},
    +organizers: ?$ReadOnlyArray<?{|
      +organizer: ?{|
        +id: string,
        +pseudo: string,
      |},
      +isAdmin: boolean,
      +role: OrganizerRole,
      +price: ?{|
        +cents: number,
        +currency: ?Currency,
      |},
      +secondaryOrganizerType: ?{|
        +id: string,
        +name: ?{|
          +id: string,
          +FR: ?string,
          +EN: ?string,
          +DE: ?string,
          +ES: ?string,
        |},
      |},
      +customSecondaryOrganizerType: ?string,
    |}>,
    +pendingOrganizers: ?$ReadOnlyArray<?{|
      +id: string,
      +circles: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +name: ?string,
            +memberCount: number,
            +type: ?CircleTypeEnum,
            +members: ?$ReadOnlyArray<?{|
              +id: string
            |}>,
          |}
        |}>
      |},
      +isAdmin: boolean,
      +role: OrganizerRole,
      +price: ?{|
        +cents: number,
        +currency: ?Currency,
      |},
      +secondaryOrganizerType: ?{|
        +id: string,
        +name: ?{|
          +FR: ?string,
          +EN: ?string,
          +DE: ?string,
          +ES: ?string,
        |},
      |},
      +customSecondaryOrganizerType: ?string,
    |}>,
    +sportunityType: ?{|
      +id: string,
      +isScoreRelevant: ?boolean,
      +name: ?{|
        +FR: ?string,
        +EN: ?string,
      |},
    |},
    +game_information: ?{|
      +opponent: ?{|
        +organizer: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +organizerPseudo: ?string,
        +lookingForAnOpponent: ?boolean,
        +invitedOpponents: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
              +memberCount: number,
            |}
          |}>
        |},
        +unknownOpponent: ?boolean,
      |}
    |},
  |}>,
  +$refType: SelectTemplateModal_user$ref,
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
v1 = [
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
  v0
],
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v6
},
v8 = [
  v0,
  v3,
  v4
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v11,
    v12
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v17 = [
  v5,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  v2
],
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SelectTemplateModal_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
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
          "selections": v1
        },
        v0,
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "kind",
          "args": null,
          "storageKey": null
        },
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
                {
                  "kind": "FragmentSpread",
                  "name": "UserCard_user",
                  "args": null
                },
                v0,
                v3,
                v4
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
                    v5,
                    v7,
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "owner",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "User",
                      "plural": false,
                      "selections": v8
                    },
                    v9,
                    v10
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
              "selections": v6
            },
            v13,
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
            v12,
            v11
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
                    v14,
                    v15,
                    v16
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "logo",
                  "args": null,
                  "storageKey": null
                }
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
                v14,
                v16,
                v15
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
                    v14,
                    v16,
                    v15
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
                  "selections": v17
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "FR",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportLevel",
                  "plural": false,
                  "selections": v17
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "DE",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportLevel",
                  "plural": false,
                  "selections": v17
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
          "selections": v1
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
                v3
              ]
            },
            v18,
            v19,
            v13,
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
                    v16,
                    v14,
                    v15,
                    v20
                  ]
                }
              ]
            },
            v21
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
                        v5,
                        v10,
                        v9,
                        v7
                      ]
                    }
                  ]
                }
              ]
            },
            v18,
            v19,
            v13,
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
                    v16,
                    v14,
                    v15,
                    v20
                  ]
                }
              ]
            },
            v21
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
                v16,
                v14
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
                  "selections": v8
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
                            v5,
                            v10
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '175cdb39ad0223ada7b3c56b90df1c75';
module.exports = node;

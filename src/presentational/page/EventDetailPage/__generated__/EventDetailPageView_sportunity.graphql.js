/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AdvancedSettingsView_sportunity$ref = any;
type ButtonFeedback_organizers$ref = any;
type ButtonFeedback_venue$ref = any;
type ButtonSportunity_sportunity$ref = any;
type Carpooling_sportunity$ref = any;
type Compositions_sportunity$ref = any;
type DateSportunity_sportunity$ref = any;
type DescriptionView_sportunity$ref = any;
type DetailCellItem_address$ref = any;
type Header_sportunity$ref = any;
type PriceView_sportunity$ref = any;
type StatisticFillingModal_sportunity$ref = any;
type StatusView_sportunity$ref = any;
type SurveyModal_sportunity$ref = any;
type SurveyView_sportunity$ref = any;
type UserCard_user$ref = any;
type VoteForManOfTheGame_sportunity$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityNotificationPreference = "Automatically" | "Manually" | "Now" | "%future added value";
export type SportunityPrivacySwitchPreference = "Automatically" | "Manually" | "%future added value";
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailPageView_sportunity$ref: FragmentReference;
export type EventDetailPageView_sportunity = {|
  +id: string,
  +title: string,
  +description: string,
  +status: ?string,
  +survey: ?{|
    +isSurveyTransformed: ?boolean,
    +surveyDates: ?$ReadOnlyArray<?{|
      +beginning_date: ?string,
      +ending_date: ?string,
    |}>,
  |},
  +participants: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
  |}>,
  +ageRestriction: ?{|
    +from: ?number,
    +to: ?number,
  |},
  +sexRestriction: ?SexRestriction,
  +participantRange: ?{|
    +from: ?number,
    +to: ?number,
  |},
  +waiting: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
  |}>,
  +willing: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
  |}>,
  +canceling: ?$ReadOnlyArray<?{|
    +canceling_user: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +status: ?cancelBookinStatus,
    +cancelation_date: ?any,
  |}>,
  +invited: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
      +$fragmentRefs: UserCard_user$ref,
    |},
    +answer: ?invitedUserAnswer,
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
  +invited_circles: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +mode: CircleKind,
        +memberCount: number,
        +type: ?CircleTypeEnum,
        +owner: ?{|
          +id: string,
          +avatar: ?string,
          +pseudo: string,
        |},
        +members: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
        |}>,
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
  +sport: ?{|
    +allLevelSelected: ?boolean,
    +sport: ?{|
      +id: string,
      +logo: string,
      +name: ?{|
        +EN: ?string
      |},
    |},
    +levels: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?{|
        +name: ?string,
        +skillLevel: number,
      |},
      +FR: ?{|
        +name: ?string,
        +skillLevel: number,
      |},
    |}>,
    +positions: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?string,
    |}>,
    +certificates: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +EN: ?string
      |},
    |}>,
  |},
  +kind: SportunityKind,
  +beginning_date: any,
  +ending_date: any,
  +number_of_occurences: ?number,
  +is_repeated_occurence_number: ?number,
  +hide_participant_list: ?boolean,
  +carPoolings: ?$ReadOnlyArray<?{|
    +id: string,
    +driver: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +address: ?{|
      +address: string,
      +city: string,
      +zip: ?string,
      +country: string,
    |},
    +starting_date: ?any,
    +number_of_sits: ?number,
    +passengers: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |}>,
  |}>,
  +price: ?{|
    +cents: number,
    +currency: ?Currency,
  |},
  +fees: ?number,
  +address: ?{|
    +address: string,
    +country: string,
    +city: string,
    +zip: ?string,
    +position: ?{|
      +lat: ?number,
      +lng: ?number,
    |},
    +$fragmentRefs: DetailCellItem_address$ref,
  |},
  +venue: ?{|
    +feedbacks: ?{|
      +count: number
    |},
    +id: string,
    +name: string,
    +address: ?{|
      +address: string,
      +city: string,
      +country: string,
    |},
    +$fragmentRefs: ButtonFeedback_venue$ref,
  |},
  +infrastructure: ?{|
    +id: string,
    +name: string,
    +logo: ?string,
  |},
  +slot: ?{|
    +id: string,
    +from: any,
    +end: any,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
  |},
  +compositions: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +organizers: ?$ReadOnlyArray<?{|
    +isAdmin: boolean,
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
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
    +organizer: ?{|
      +id: string,
      +pseudo: string,
      +sportunityNumber: ?number,
      +feedbacks: ?{|
        +averageRating: ?number,
        +count: number,
      |},
      +sports: ?$ReadOnlyArray<?{|
        +levels: ?$ReadOnlyArray<?{|
          +EN: ?{|
            +name: ?string
          |}
        |}>
      |}>,
      +address: ?{|
        +address: string,
        +country: string,
        +city: string,
        +zip: ?string,
        +position: ?{|
          +lat: ?number,
          +lng: ?number,
        |},
      |},
      +avatar: ?string,
      +followers: ?$ReadOnlyArray<?{|
        +id: string
      |}>,
    |},
    +role: OrganizerRole,
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
    +$fragmentRefs: ButtonFeedback_organizers$ref,
  |}>,
  +pendingOrganizers: ?$ReadOnlyArray<?{|
    +id: string,
    +circles: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +members: ?$ReadOnlyArray<?{|
            +id: string
          |}>,
          +name: ?string,
          +memberCount: number,
        |}
      |}>
    |},
    +isAdmin: boolean,
    +role: OrganizerRole,
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
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
  |}>,
  +notification_preference: ?{|
    +notification_type: ?SportunityNotificationPreference,
    +send_notification_x_days_before: ?number,
    +last_post: ?any,
  |},
  +privacy_switch_preference: ?{|
    +privacy_switch_type: ?SportunityPrivacySwitchPreference,
    +switch_privacy_x_days_before: ?number,
  |},
  +sportunityType: ?{|
    +id: string
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
      +unknownOpponent: ?boolean,
      +invitedOpponents: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +name: ?string,
            +memberCount: number,
            +members: ?$ReadOnlyArray<?{|
              +id: string
            |}>,
          |}
        |}>
      |},
    |}
  |},
  +$fragmentRefs: Header_sportunity$ref & StatusView_sportunity$ref & DescriptionView_sportunity$ref & DateSportunity_sportunity$ref & AdvancedSettingsView_sportunity$ref & PriceView_sportunity$ref & StatisticFillingModal_sportunity$ref & Carpooling_sportunity$ref & SurveyView_sportunity$ref & SurveyModal_sportunity$ref & Compositions_sportunity$ref & ButtonSportunity_sportunity$ref & VoteForManOfTheGame_sportunity$ref,
  +$refType: EventDetailPageView_sportunity$ref,
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
  "name": "status",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ending_date",
  "args": null,
  "storageKey": null
},
v6 = [
  v0,
  v1,
  v2
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "from",
  "args": null,
  "storageKey": null
},
v8 = [
  v7,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "to",
    "args": null,
    "storageKey": null
  }
],
v9 = [
  v0
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cents",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currency",
      "args": null,
      "storageKey": null
    }
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v14
  ]
},
v16 = [
  v11,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "zip",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v21 = {
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
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v24 = {
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "FR",
          "args": null,
          "storageKey": null
        },
        v14,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "DE",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "ES",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v27 = [
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
],
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v9
};
return {
  "kind": "Fragment",
  "name": "EventDetailPageView_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "invited",
      "storageKey": null,
      "args": null,
      "concreteType": "Invited",
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
            v1,
            v2
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
      "kind": "FragmentSpread",
      "name": "Header_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DescriptionView_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DateSportunity_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AdvancedSettingsView_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PriceView_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatisticFillingModal_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Carpooling_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SurveyView_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SurveyModal_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Compositions_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ButtonSportunity_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "VoteForManOfTheGame_sportunity",
      "args": null
    },
    v0,
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
      "name": "description",
      "args": null,
      "storageKey": null
    },
    v3,
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
            v4,
            v5
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "participants",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v6
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ageRestriction",
      "storageKey": null,
      "args": null,
      "concreteType": "IntInterval",
      "plural": false,
      "selections": v8
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
      "name": "participantRange",
      "storageKey": null,
      "args": null,
      "concreteType": "IntInterval",
      "plural": false,
      "selections": v8
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "waiting",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v6
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "willing",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v6
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "canceling",
      "storageKey": null,
      "args": null,
      "concreteType": "Canceling",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "canceling_user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v6
        },
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cancelation_date",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "StatusView_sportunity",
      "args": null
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v9
        },
        v3,
        v10
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "invited_circles",
      "storageKey": "invited_circles(last:100)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
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
                v11,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "mode",
                  "args": null,
                  "storageKey": null
                },
                v12,
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
                  "name": "owner",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": [
                    v0,
                    v2,
                    v1
                  ]
                },
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
                    v1
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
      "name": "price_for_circle",
      "storageKey": null,
      "args": null,
      "concreteType": "PriceForCircle",
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
          "selections": v9
        },
        v10,
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
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunitySport",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "allLevelSelected",
          "args": null,
          "storageKey": null
        },
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
            v13,
            v15
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
              "selections": v16
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "FR",
              "storageKey": null,
              "args": null,
              "concreteType": "SportLevel",
              "plural": false,
              "selections": v16
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
            v14
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
            v15
          ]
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "kind",
      "args": null,
      "storageKey": null
    },
    v4,
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "number_of_occurences",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_repeated_occurence_number",
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
      "name": "carPoolings",
      "storageKey": null,
      "args": null,
      "concreteType": "CarPooling",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "driver",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v6
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
            v17,
            v18,
            v19,
            v20
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "starting_date",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "number_of_sits",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "passengers",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": v6
        }
      ]
    },
    v10,
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
      "name": "address",
      "storageKey": null,
      "args": null,
      "concreteType": "AddressModel",
      "plural": false,
      "selections": [
        v17,
        v20,
        v18,
        v19,
        v21,
        {
          "kind": "FragmentSpread",
          "name": "DetailCellItem_address",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "venue",
      "storageKey": null,
      "args": null,
      "concreteType": "Venue",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "feedbacks",
          "storageKey": null,
          "args": null,
          "concreteType": "Feedbacks",
          "plural": false,
          "selections": [
            v22
          ]
        },
        v0,
        v11,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "address",
          "storageKey": null,
          "args": null,
          "concreteType": "AddressModel",
          "plural": false,
          "selections": [
            v17,
            v18,
            v20
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "ButtonFeedback_venue",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "infrastructure",
      "storageKey": null,
      "args": null,
      "concreteType": "Infrastructure",
      "plural": false,
      "selections": [
        v0,
        v11,
        v13
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "slot",
      "storageKey": null,
      "args": null,
      "concreteType": "Slot",
      "plural": false,
      "selections": [
        v0,
        v7,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "end",
          "args": null,
          "storageKey": null
        },
        v10
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "compositions",
      "storageKey": null,
      "args": null,
      "concreteType": "CompositionOutput",
      "plural": true,
      "selections": v9
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
        v23,
        v24,
        v25,
        v10,
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
            v1,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "sportunityNumber",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "feedbacks",
              "storageKey": null,
              "args": null,
              "concreteType": "Feedbacks",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "averageRating",
                  "args": null,
                  "storageKey": null
                },
                v22
              ]
            },
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
                  "name": "levels",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Translated",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "EN",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "SportLevel",
                      "plural": false,
                      "selections": [
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
              "name": "address",
              "storageKey": null,
              "args": null,
              "concreteType": "AddressModel",
              "plural": false,
              "selections": [
                v17,
                v20,
                v18,
                v19,
                v21
              ]
            },
            v2,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "followers",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": true,
              "selections": v9
            }
          ]
        },
        v26,
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
              "selections": v27
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "memberAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersMemberAccess",
              "plural": false,
              "selections": v27
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "carPoolingAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersCarPoolingAccess",
              "plural": false,
              "selections": v27
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "imageAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersImageAccess",
              "plural": false,
              "selections": v27
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "detailsAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersDetailsAccess",
              "plural": false,
              "selections": v27
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "compositionAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersCompositionAccess",
              "plural": false,
              "selections": v27
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "ButtonFeedback_organizers",
          "args": null
        }
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
                    v28,
                    v11,
                    v12
                  ]
                }
              ]
            }
          ]
        },
        v23,
        v26,
        v24,
        v25,
        v10
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "notification_preference",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityNotificationPreferenceOutput",
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "last_post",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "privacy_switch_preference",
      "storageKey": null,
      "args": null,
      "concreteType": "PrivacySwitchPreferenceOutput",
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
      "name": "sportunityType",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityType",
      "plural": false,
      "selections": v9
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
              "kind": "LinkedField",
              "alias": null,
              "name": "organizer",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": v6
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
              "kind": "ScalarField",
              "alias": null,
              "name": "unknownOpponent",
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
                        v11,
                        v12,
                        v28
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
(node/*: any*/).hash = '9f2fbc005295dd119a3f464619004802';
module.exports = node;

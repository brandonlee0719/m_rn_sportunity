/**
 * @flow
 * @relayHash fd45ded1cd70eddd9df8fdf0fd88bbab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleMemberStatus = "ACTIVE" | "INACTIVE" | "INJURED" | "OTHER" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityMode = "FCFS" | "ORGANIZER_PICK" | "RANDOM" | "%future added value";
export type SportunityNotificationPreference = "Automatically" | "Manually" | "Now" | "%future added value";
export type SportunityPrivacySwitchPreference = "Automatically" | "Manually" | "%future added value";
export type ValidationStatus = "PENDING" | "REJECTED" | "TO_BE_VALIDATED" | "VALIDATED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type updateSportunityInput = {
  sportunityID: string,
  sportunity?: ?SportunityUpdateInput,
  notify_people?: ?boolean,
  clientMutationId?: ?string,
};
export type SportunityUpdateInput = {
  title?: ?string,
  description?: ?string,
  address?: ?AddressInput,
  venue?: ?string,
  infrastructure?: ?string,
  slot?: ?string,
  organizers?: ?$ReadOnlyArray<?OrganizerInput>,
  pendingOrganizers?: ?$ReadOnlyArray<?PendingOrganizerInput>,
  secondaryOrganizersPaymentMethod?: ?string,
  secondaryOrganizersPaymentByWallet?: ?boolean,
  sport?: ?SportunitySportInput,
  nbShares?: ?number,
  price?: ?PriceInput,
  participantRange?: ?IntIntervalInput,
  mode?: ?SportunityMode,
  kind?: ?SportunityKind,
  randomDate?: ?string,
  ageRestriction?: ?IntIntervalInput,
  sexRestriction?: ?SexRestriction,
  beginning_date?: ?string,
  ending_date?: ?string,
  survey_dates?: ?$ReadOnlyArray<?SurveyDatesUpdateInput>,
  cancel_date?: ?string,
  fees?: ?number,
  participants?: ?string,
  canceling?: ?string,
  canceling_reason?: ?string,
  invited?: ?$ReadOnlyArray<?InvitedInput>,
  invited_circles?: ?$ReadOnlyArray<?string>,
  price_for_circle?: ?$ReadOnlyArray<?InvitedCircleInput>,
  creation_status?: ?SportunityStatusInput,
  paymentMethodId?: ?string,
  paymentByWallet?: ?boolean,
  notification_preference?: ?NotificationPreferenceUpdateInput,
  privacy_switch_preference?: ?PrivacySwitchPreferenceUpdateInput,
  modifyRepeatedSportunities?: ?boolean,
  hide_participant_list?: ?boolean,
  sportunityType?: ?string,
  sportunityTypeStatus?: ?string,
  score?: ?ScoreInput,
  game_information?: ?GameInformationUpdateInput,
  externalReference?: ?string,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type OrganizerInput = {
  organizer: string,
  isAdmin: boolean,
  role: OrganizerRole,
  price?: ?PriceInput,
  secondaryOrganizerType?: ?string,
  customSecondaryOrganizerType?: ?string,
  permissions?: ?coOrganizersInputPermissions,
};
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type coOrganizersInputPermissions = {
  detailsAccess?: ?coOrganizersInputDetailsAccess,
  chatAccess?: ?coOrganizersInputChatAccess,
  memberAccess?: ?coOrganizersInputMemberAccess,
  carPoolingAccess?: ?coOrganizersInputCarPoolingAccess,
  imageAccess?: ?coOrganizersInputImageAccess,
  compositionAccess?: ?coOrganizersInputCompositionAccess,
};
export type coOrganizersInputDetailsAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputChatAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputMemberAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputCarPoolingAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputImageAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputCompositionAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type PendingOrganizerInput = {
  id?: ?string,
  circles: $ReadOnlyArray<?string>,
  isAdmin: boolean,
  role: OrganizerRole,
  price?: ?PriceInput,
  secondaryOrganizerType?: ?string,
  customSecondaryOrganizerType?: ?string,
  permissions?: ?pendingCoOrganizersInputPermissions,
};
export type pendingCoOrganizersInputPermissions = {
  detailsAccess?: ?pendingCoOrganizersInputDetailsAccess,
  chatAccess?: ?pendingCoOrganizersInputChatAccess,
  memberAccess?: ?pendingCoOrganizersInputMemberAccess,
  carPoolingAccess?: ?pendingCoOrganizersInputCarPoolingAccess,
  imageAccess?: ?pendingCoOrganizersInputImageAccess,
  compositionAccess?: ?pendingCoOrganizersInputCompositionAccess,
};
export type pendingCoOrganizersInputDetailsAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputChatAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputMemberAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputCarPoolingAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputImageAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputCompositionAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type SportunitySportInput = {
  sport: string,
  allLevelSelected?: ?boolean,
  levels?: ?$ReadOnlyArray<?string>,
  certificates?: ?$ReadOnlyArray<?string>,
  positions?: ?$ReadOnlyArray<?string>,
};
export type IntIntervalInput = {
  from: number,
  to: number,
};
export type SurveyDatesUpdateInput = {
  beginning_date?: ?string,
  ending_date?: ?string,
};
export type InvitedInput = {
  user?: ?string,
  pseudo?: ?string,
  answer: invitedUserAnswer,
};
export type InvitedCircleInput = {
  circle?: ?string,
  price?: ?PriceInput,
  participantByDefault?: ?boolean,
  excludedParticipantByDefault?: ?excludedParticipantByDefaultInput,
  excludedInvitees?: ?excludedInviteesInput,
};
export type excludedParticipantByDefaultInput = {
  excludedStatus?: ?$ReadOnlyArray<?CircleMemberStatus>,
  excludedMembers?: ?$ReadOnlyArray<?string>,
  excludeParents?: ?boolean,
};
export type excludedInviteesInput = {
  excludedStatus?: ?$ReadOnlyArray<?CircleMemberStatus>,
  excludedMembers?: ?$ReadOnlyArray<?string>,
  excludeParents?: ?boolean,
};
export type SportunityStatusInput = {
  status?: ?ValidationStatus,
  reason?: ?string,
};
export type NotificationPreferenceUpdateInput = {
  notification_type?: ?SportunityNotificationPreference,
  send_notification_x_days_before?: ?number,
};
export type PrivacySwitchPreferenceUpdateInput = {
  privacy_switch_type?: ?SportunityPrivacySwitchPreference,
  switch_privacy_x_days_before?: ?number,
};
export type ScoreInput = {
  currentTeam?: ?number,
  adversaryTeam?: ?number,
};
export type GameInformationUpdateInput = {
  opponent?: ?SportunityOpponentUpdateInput
};
export type SportunityOpponentUpdateInput = {
  organizer?: ?string,
  organizerEmail?: ?string,
  organizerPseudo?: ?string,
  event?: ?string,
  lookingForAnOpponent?: ?boolean,
  unknownOpponent?: ?boolean,
  invitedOpponents?: ?$ReadOnlyArray<?string>,
};
export type UpdateSportunityResultMutationVariables = {|
  input: updateSportunityInput
|};
export type UpdateSportunityResultMutationResponse = {|
  +updateSportunity: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +sportunityTypeStatus: ?{|
          +id: string,
          +name: ?{|
            +FR: ?string,
            +EN: ?string,
          |},
        |},
        +score: ?{|
          +currentTeam: ?number,
          +adversaryTeam: ?number,
        |},
      |}
    |},
  |}
|};
export type UpdateSportunityResultMutation = {|
  variables: UpdateSportunityResultMutationVariables,
  response: UpdateSportunityResultMutationResponse,
|};
*/


/*
mutation UpdateSportunityResultMutation(
  $input: updateSportunityInput!
) {
  updateSportunity(input: $input) {
    clientMutationId
    edge {
      node {
        sportunityTypeStatus {
          id
          name {
            FR
            EN
            id
          }
        }
        score {
          currentTeam
          adversaryTeam
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateSportunityInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateSportunityInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "score",
  "storageKey": null,
  "args": null,
  "concreteType": "Score",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currentTeam",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "adversaryTeam",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateSportunityResultMutation",
  "id": null,
  "text": "mutation UpdateSportunityResultMutation(\n  $input: updateSportunityInput!\n) {\n  updateSportunity(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        sportunityTypeStatus {\n          id\n          name {\n            FR\n            EN\n            id\n          }\n        }\n        score {\n          currentTeam\n          adversaryTeam\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSportunityResultMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunity",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunityPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunityTypeStatus",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTypeStatus",
                    "plural": false,
                    "selections": [
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v4,
                          v5
                        ]
                      }
                    ]
                  },
                  v6
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSportunityResultMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunity",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunityPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunityTypeStatus",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTypeStatus",
                    "plural": false,
                    "selections": [
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v4,
                          v5,
                          v3
                        ]
                      }
                    ]
                  },
                  v6,
                  v3
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
(node/*: any*/).hash = 'e76a828bf45ea309562367da1cbef9d8';
module.exports = node;

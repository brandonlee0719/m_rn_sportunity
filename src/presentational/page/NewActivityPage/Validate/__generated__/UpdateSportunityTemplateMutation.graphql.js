/**
 * @flow
 * @relayHash 9d99752439361e1eb87402d2adb6975d
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
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type updateSportunityTemplateInput = {
  sportunityTemplateId: string,
  sportunityTemplate?: ?SportunityTemplateInput,
  clientMutationId?: ?string,
};
export type SportunityTemplateInput = {
  title: string,
  description: string,
  address?: ?AddressInput,
  organizers: $ReadOnlyArray<?OrganizerInput>,
  pendingOrganizers?: ?$ReadOnlyArray<?PendingOrganizerInput>,
  secondaryOrganizersPaymentMethod?: ?string,
  secondaryOrganizersPaymentByWallet?: ?boolean,
  sport: SportunitySportInput,
  price?: ?PriceInput,
  participantRange: IntIntervalInput,
  mode: SportunityMode,
  kind: SportunityKind,
  ageRestriction: IntIntervalInput,
  sexRestriction?: ?SexRestriction,
  invited?: ?$ReadOnlyArray<?InvitedInput>,
  invited_circles?: ?$ReadOnlyArray<?string>,
  price_for_circle?: ?$ReadOnlyArray<?InvitedCircleInput>,
  hide_participant_list?: ?boolean,
  notification_preference?: ?SportunityTemplateNotificationPreferenceInput,
  privacy_switch_preference?: ?SportunityTemplatePrivacySwitchPreferenceInput,
  sportunityType?: ?string,
  game_information?: ?SportunityTemplateGameInformationInput,
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
export type SportunityTemplateNotificationPreferenceInput = {
  notification_type?: ?SportunityNotificationPreference,
  send_notification_x_days_before?: ?number,
};
export type SportunityTemplatePrivacySwitchPreferenceInput = {
  privacy_switch_type?: ?SportunityPrivacySwitchPreference,
  switch_privacy_x_days_before?: ?number,
};
export type SportunityTemplateGameInformationInput = {
  opponent?: ?SportunityTemplateOpponentInput
};
export type SportunityTemplateOpponentInput = {
  organizer?: ?string,
  organizerEmail?: ?string,
  organizerPseudo?: ?string,
  event?: ?string,
  lookingForAnOpponent?: ?boolean,
  unknownOpponent?: ?boolean,
  invitedOpponents?: ?$ReadOnlyArray<?string>,
};
export type UpdateSportunityTemplateMutationVariables = {|
  input: updateSportunityTemplateInput
|};
export type UpdateSportunityTemplateMutationResponse = {|
  +updateSportunityTemplate: ?{|
    +viewer: ?{|
      +me: ?{|
        +id: string
      |}
    |}
  |}
|};
export type UpdateSportunityTemplateMutation = {|
  variables: UpdateSportunityTemplateMutationVariables,
  response: UpdateSportunityTemplateMutationResponse,
|};
*/


/*
mutation UpdateSportunityTemplateMutation(
  $input: updateSportunityTemplateInput!
) {
  updateSportunityTemplate(input: $input) {
    viewer {
      me {
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateSportunityTemplateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateSportunityTemplateInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v2
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateSportunityTemplateMutation",
  "id": null,
  "text": "mutation UpdateSportunityTemplateMutation(\n  $input: updateSportunityTemplateInput!\n) {\n  updateSportunityTemplate(input: $input) {\n    viewer {\n      me {\n        id\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSportunityTemplateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunityTemplate",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunityTemplatePayload",
        "plural": false,
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
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSportunityTemplateMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunityTemplate",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunityTemplatePayload",
        "plural": false,
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
              v3,
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46afaa46bea07073f0b262f54b60fb9b';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Stepper_viewer$ref: FragmentReference;
export type Stepper_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +profileType: ?UserProfileType,
    +mangoId: ?string,
    +pseudo: string,
    +tutorialSteps: ?{|
      +createFormStep: ?boolean,
      +setupMembersSubscriptionStep: ?boolean,
      +fulfilProfileStep: ?boolean,
      +addOfficialDocumentsStep: ?boolean,
      +createSubAccountStep: ?boolean,
      +shareAccessStep: ?boolean,
      +createCircleStep: ?boolean,
      +organizeStep: ?boolean,
      +setupStatisticsStep: ?boolean,
      +joinAPrivateCircleStep: ?boolean,
      +joinAPublicCircleStep: ?boolean,
      +giveAvailabilitiesStep: ?boolean,
      +bookSportunityStep: ?boolean,
    |},
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +isSubAccount: ?boolean,
  |},
  +$refType: Stepper_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Stepper_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "kind": "ScalarField",
          "alias": null,
          "name": "profileType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "mangoId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "pseudo",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "tutorialSteps",
          "storageKey": null,
          "args": null,
          "concreteType": "TutorialSteps",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "createCircleStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "createFormStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "fulfilProfileStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "addOfficialDocumentsStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "createSubAccountStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "shareAccessStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "setupMembersSubscriptionStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "organizeStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "setupStatisticsStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "joinAPrivateCircleStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "joinAPublicCircleStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "giveAvailabilitiesStep",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "bookSportunityStep",
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
          "selections": [
            v0
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isSubAccount",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a03b903390ab9d77a9abfcdf31936b44';
module.exports = node;

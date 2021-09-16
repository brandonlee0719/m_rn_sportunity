/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyPreferences_user$ref: FragmentReference;
export type MyPreferences_user = {|
  +id: string,
  +userPreferences: ?{|
    +areSubAccountsActivated: ?boolean
  |},
  +homePagePreference: ?HomePagePreference,
  +profileType: ?UserProfileType,
  +$refType: MyPreferences_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MyPreferences_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "userPreferences",
      "storageKey": null,
      "args": null,
      "concreteType": "UserPreferences",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "areSubAccountsActivated",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "homePagePreference",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profileType",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '086f6318671eaabb7d2525aa4824cc1c';
module.exports = node;

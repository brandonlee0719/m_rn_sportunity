/**
 * @flow
 * @relayHash dbf65a384b2dcd772fdee43583e981a2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateStatisticPreferencesInput = {
  statisticPreferences?: ?StatisticPreferencesInput,
  userID: string,
  clientMutationId?: ?string,
};
export type StatisticPreferencesInput = {
  private?: ?boolean,
  isManOfTheGameActivated?: ?boolean,
  userStats?: ?UserStatsPrefsInput,
  availabilityStats?: ?UserAvailabilityStatsPrefsInput,
};
export type UserStatsPrefsInput = {
  stat1?: ?string,
  stat2?: ?string,
  stat3?: ?string,
  stat4?: ?string,
  stat5?: ?string,
};
export type UserAvailabilityStatsPrefsInput = {
  stat1?: ?string,
  stat2?: ?string,
  stat3?: ?string,
  stat4?: ?string,
  stat5?: ?string,
};
export type UpdateStatisticPreferencesMutationVariables = {|
  input: updateStatisticPreferencesInput
|};
export type UpdateStatisticPreferencesMutationResponse = {|
  +updateStatisticPreferences: ?{|
    +clientMutationId: ?string,
    +statisticPreferences: ?{|
      +private: ?boolean,
      +isManOfTheGameActivated: ?boolean,
      +userStats: ?{|
        +stat0: ?{|
          +name: ?string
        |},
        +stat1: ?{|
          +name: ?string
        |},
        +stat2: ?{|
          +name: ?string
        |},
        +stat3: ?{|
          +name: ?string
        |},
        +stat4: ?{|
          +name: ?string
        |},
        +stat5: ?{|
          +name: ?string
        |},
      |},
    |},
  |}
|};
export type UpdateStatisticPreferencesMutation = {|
  variables: UpdateStatisticPreferencesMutationVariables,
  response: UpdateStatisticPreferencesMutationResponse,
|};
*/


/*
mutation UpdateStatisticPreferencesMutation(
  $input: updateStatisticPreferencesInput!
) {
  updateStatisticPreferences(input: $input) {
    clientMutationId
    statisticPreferences {
      private
      isManOfTheGameActivated
      userStats {
        stat0 {
          name
          id
        }
        stat1 {
          name
          id
        }
        stat2 {
          name
          id
        }
        stat3 {
          name
          id
        }
        stat4 {
          name
          id
        }
        stat5 {
          name
          id
        }
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
    "type": "updateStatisticPreferencesInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateStatisticPreferencesInput!"
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
  "name": "private",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isManOfTheGameActivated",
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
  v5,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateStatisticPreferencesMutation",
  "id": null,
  "text": "mutation UpdateStatisticPreferencesMutation(\n  $input: updateStatisticPreferencesInput!\n) {\n  updateStatisticPreferences(input: $input) {\n    clientMutationId\n    statisticPreferences {\n      private\n      isManOfTheGameActivated\n      userStats {\n        stat0 {\n          name\n          id\n        }\n        stat1 {\n          name\n          id\n        }\n        stat2 {\n          name\n          id\n        }\n        stat3 {\n          name\n          id\n        }\n        stat4 {\n          name\n          id\n        }\n        stat5 {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateStatisticPreferencesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateStatisticPreferences",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateStatisticPreferencesPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": null,
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userStats",
                "storageKey": null,
                "args": null,
                "concreteType": "userStats",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat0",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat1",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat2",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat3",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat4",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat5",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v6
                  }
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
    "name": "UpdateStatisticPreferencesMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateStatisticPreferences",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateStatisticPreferencesPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": null,
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userStats",
                "storageKey": null,
                "args": null,
                "concreteType": "userStats",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat0",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat1",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat2",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat3",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat4",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat5",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '016aee76e5e6b797e234b28fee1874c7';
module.exports = node;

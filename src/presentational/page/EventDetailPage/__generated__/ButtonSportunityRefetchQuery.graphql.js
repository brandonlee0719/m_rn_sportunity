/**
 * @flow
 * @relayHash 1567e3102035471f6dec2a719ea72d57
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ButtonSportunity_sportunity$ref = any;
type ButtonSportunity_viewer$ref = any;
export type ButtonSportunityRefetchQueryVariables = {|
  buttonSportunitySportunityId: string,
  queryIsCoOrganizerOnSerie: boolean,
  sportunityID?: ?string,
|};
export type ButtonSportunityRefetchQueryResponse = {|
  +viewer: ?{|
    +sportunity: ?{|
      +$fragmentRefs: ButtonSportunity_sportunity$ref
    |},
    +$fragmentRefs: ButtonSportunity_viewer$ref,
  |}
|};
export type ButtonSportunityRefetchQuery = {|
  variables: ButtonSportunityRefetchQueryVariables,
  response: ButtonSportunityRefetchQueryResponse,
|};
*/


/*
query ButtonSportunityRefetchQuery(
  $sportunityID: ID
) {
  viewer {
    ...ButtonSportunity_viewer_34qogA
    sportunity(id: $sportunityID) {
      ...ButtonSportunity_sportunity
      id
    }
    id
  }
}

fragment ButtonSportunity_viewer_34qogA on Viewer {
  id
  me {
    id
    isProfileComplete
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
}

fragment ButtonSportunity_sportunity on Sportunity {
  id
  status
  waiting {
    id
  }
  cancel_date
  canceling {
    canceling_user {
      id
    }
    status
    cancelation_date
  }
  price {
    cents
    currency
  }
  organizers {
    organizer {
      pseudo
      id
    }
    isAdmin
    id
  }
  participants {
    id
    pseudo
    avatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "buttonSportunitySportunityId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryIsCoOrganizerOnSerie",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityID",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "sportunityID",
    "type": "ID"
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
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v4 = [
  v2
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ButtonSportunityRefetchQuery",
  "id": null,
  "text": "query ButtonSportunityRefetchQuery(\n  $sportunityID: ID\n) {\n  viewer {\n    ...ButtonSportunity_viewer_34qogA\n    sportunity(id: $sportunityID) {\n      ...ButtonSportunity_sportunity\n      id\n    }\n    id\n  }\n}\n\nfragment ButtonSportunity_viewer_34qogA on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n}\n\nfragment ButtonSportunity_sportunity on Sportunity {\n  id\n  status\n  waiting {\n    id\n  }\n  cancel_date\n  canceling {\n    canceling_user {\n      id\n    }\n    status\n    cancelation_date\n  }\n  price {\n    cents\n    currency\n  }\n  organizers {\n    organizer {\n      pseudo\n      id\n    }\n    isAdmin\n    id\n  }\n  participants {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ButtonSportunityRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
          {
            "kind": "FragmentSpread",
            "name": "ButtonSportunity_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "buttonSportunitySportunityId",
                "variableName": "buttonSportunitySportunityId",
                "type": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": v1,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ButtonSportunity_sportunity",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ButtonSportunityRefetchQuery",
    "argumentDefinitions": v0,
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
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentMethods",
                "storageKey": null,
                "args": null,
                "concreteType": "PaymentMethod",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "expirationDate",
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
            "name": "sportunity",
            "storageKey": null,
            "args": v1,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "waiting",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v4
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cancel_date",
                "args": null,
                "storageKey": null
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
                    "selections": v4
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
                      v5,
                      v2
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isAdmin",
                    "args": null,
                    "storageKey": null
                  },
                  v2
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
                "selections": [
                  v2,
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "avatar",
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '22d277b58a441335f5786e2e3fb5bcc1';
module.exports = node;

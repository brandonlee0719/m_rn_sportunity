/**
 * @flow
 * @relayHash fd6f6b5ea5095f29b48c9f03dec28540
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type userBooksEventInput = {
  sportunityID: string,
  participantID: string,
  paymentMethodId?: ?string,
  paymentByWallet?: ?boolean,
  clientMutationId?: ?string,
};
export type UserBooksEventMutationVariables = {|
  input: userBooksEventInput
|};
export type UserBooksEventMutationResponse = {|
  +userBooksEvent: ?{|
    +clientMutationId: ?string,
    +secure3DURL: ?string,
    +sportunity: ?{|
      +id: string,
      +status: ?string,
      +participants: ?$ReadOnlyArray<?{|
        +id: string,
        +pseudo: string,
        +avatar: ?string,
      |}>,
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
        |},
        +answer: ?invitedUserAnswer,
      |}>,
      +canUserVoteForManOfTheGame: ?boolean,
      +manOfTheGameVotes: ?$ReadOnlyArray<?{|
        +voter: ?{|
          +id: string
        |},
        +votedFor: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +date: ?any,
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
      +price: ?{|
        +cents: number,
        +currency: ?Currency,
      |},
    |},
  |}
|};
export type UserBooksEventMutation = {|
  variables: UserBooksEventMutationVariables,
  response: UserBooksEventMutationResponse,
|};
*/


/*
mutation UserBooksEventMutation(
  $input: userBooksEventInput!
) {
  userBooksEvent(input: $input) {
    clientMutationId
    secure3DURL
    sportunity {
      id
      status
      participants {
        id
        pseudo
        avatar
      }
      waiting {
        id
        pseudo
        avatar
      }
      willing {
        id
        pseudo
        avatar
      }
      canceling {
        canceling_user {
          id
          pseudo
          avatar
        }
        status
        cancelation_date
      }
      invited {
        user {
          id
          pseudo
          avatar
        }
        answer
      }
      canUserVoteForManOfTheGame
      manOfTheGameVotes {
        voter {
          id
        }
        votedFor {
          id
          pseudo
          avatar
        }
        date
      }
      paymentStatus {
        user {
          id
        }
        status
        price {
          cents
          currency
        }
        id
      }
      price {
        cents
        currency
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
    "type": "userBooksEventInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "userBooksEventInput!"
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
  "name": "secure3DURL",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = [
  v4,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v7 = {
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
      "selections": v5
    },
    v6,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cancelation_date",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "participants",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v5
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "waiting",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v5
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "willing",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v5
},
v11 = {
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
      "selections": v5
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
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "canUserVoteForManOfTheGame",
  "args": null,
  "storageKey": null
},
v13 = [
  v4
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "manOfTheGameVotes",
  "storageKey": null,
  "args": null,
  "concreteType": "manOfTheGameVotes",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "voter",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v13
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "votedFor",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v5
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v13
},
v16 = {
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UserBooksEventMutation",
  "id": null,
  "text": "mutation UserBooksEventMutation(\n  $input: userBooksEventInput!\n) {\n  userBooksEvent(input: $input) {\n    clientMutationId\n    secure3DURL\n    sportunity {\n      id\n      status\n      participants {\n        id\n        pseudo\n        avatar\n      }\n      waiting {\n        id\n        pseudo\n        avatar\n      }\n      willing {\n        id\n        pseudo\n        avatar\n      }\n      canceling {\n        canceling_user {\n          id\n          pseudo\n          avatar\n        }\n        status\n        cancelation_date\n      }\n      invited {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        answer\n      }\n      canUserVoteForManOfTheGame\n      manOfTheGameVotes {\n        voter {\n          id\n        }\n        votedFor {\n          id\n          pseudo\n          avatar\n        }\n        date\n      }\n      paymentStatus {\n        user {\n          id\n        }\n        status\n        price {\n          cents\n          currency\n        }\n        id\n      }\n      price {\n        cents\n        currency\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserBooksEventMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userBooksEvent",
        "storageKey": null,
        "args": v1,
        "concreteType": "userBooksEventPayload",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": null,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v7,
              v4,
              v8,
              v9,
              v10,
              v6,
              v11,
              v12,
              v14,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityPaymentStatus",
                "plural": true,
                "selections": [
                  v15,
                  v6,
                  v16
                ]
              },
              v16
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserBooksEventMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userBooksEvent",
        "storageKey": null,
        "args": v1,
        "concreteType": "userBooksEventPayload",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": null,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v7,
              v4,
              v8,
              v9,
              v10,
              v6,
              v11,
              v12,
              v14,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityPaymentStatus",
                "plural": true,
                "selections": [
                  v15,
                  v6,
                  v16,
                  v4
                ]
              },
              v16
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '127807ee33a56652de0da6899211a074';
module.exports = node;

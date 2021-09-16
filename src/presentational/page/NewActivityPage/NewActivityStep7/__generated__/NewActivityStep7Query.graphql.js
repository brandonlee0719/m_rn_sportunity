/**
 * @flow
 * @relayHash b30e3a98773e64b204cda28574fe77b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewActivityStep7_viewer$ref = any;
export type NewActivityStep7QueryVariables = {||};
export type NewActivityStep7QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewActivityStep7_viewer$ref
  |}
|};
export type NewActivityStep7Query = {|
  variables: NewActivityStep7QueryVariables,
  response: NewActivityStep7QueryResponse,
|};
*/


/*
query NewActivityStep7Query {
  viewer {
    ...NewActivityStep7_viewer
    id
  }
}

fragment NewActivityStep7_viewer on Viewer {
  ...Validate_viewer
  me {
    id
    fees
    profileType
  }
}

fragment Validate_viewer on Viewer {
  id
  me {
    id
    isProfileComplete
    bankAccount {
      id
    }
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NewActivityStep7Query",
  "id": null,
  "text": "query NewActivityStep7Query {\n  viewer {\n    ...NewActivityStep7_viewer\n    id\n  }\n}\n\nfragment NewActivityStep7_viewer on Viewer {\n  ...Validate_viewer\n  me {\n    id\n    fees\n    profileType\n  }\n}\n\nfragment Validate_viewer on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewActivityStep7Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "name": "NewActivityStep7_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewActivityStep7Query",
    "argumentDefinitions": [],
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
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "bankAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "BankAccount",
                "plural": false,
                "selections": [
                  v0
                ]
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
                  v0,
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
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
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c83fe5cd06a48662cf4782670cfdadc';
module.exports = node;

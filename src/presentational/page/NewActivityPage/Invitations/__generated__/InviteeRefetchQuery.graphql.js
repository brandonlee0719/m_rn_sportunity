/**
 * @flow
 * @relayHash 8f97805ba52a7e77fa5a6398b21b2c04
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Invitee_viewer$ref = any;
export type InviteeRefetchQueryVariables = {|
  requestUserExists: boolean,
  pseudo?: ?string,
|};
export type InviteeRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Invitee_viewer$ref
  |}
|};
export type InviteeRefetchQuery = {|
  variables: InviteeRefetchQueryVariables,
  response: InviteeRefetchQueryResponse,
|};
*/


/*
query InviteeRefetchQuery(
  $requestUserExists: Boolean!
  $pseudo: String
) {
  viewer {
    ...Invitee_viewer_11KTup
    id
  }
}

fragment Invitee_viewer_11KTup on Viewer {
  id
  userExists(pseudo: $pseudo) @include(if: $requestUserExists)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "requestUserExists",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "pseudo",
    "type": "String",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InviteeRefetchQuery",
  "id": null,
  "text": "query InviteeRefetchQuery(\n  $requestUserExists: Boolean!\n  $pseudo: String\n) {\n  viewer {\n    ...Invitee_viewer_11KTup\n    id\n  }\n}\n\nfragment Invitee_viewer_11KTup on Viewer {\n  id\n  userExists(pseudo: $pseudo) @include(if: $requestUserExists)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InviteeRefetchQuery",
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
            "name": "Invitee_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "pseudo",
                "variableName": "pseudo",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "requestUserExists",
                "variableName": "requestUserExists",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InviteeRefetchQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "requestUserExists",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "userExists",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "pseudo",
                    "variableName": "pseudo",
                    "type": "String"
                  }
                ],
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
(node/*: any*/).hash = '4331544f33daf3c29b7f89c1a7245700';
module.exports = node;

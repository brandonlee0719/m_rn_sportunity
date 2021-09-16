/**
 * @flow
 * @relayHash 5fd2ebab5bf328c0cd165f793400e10c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type removeSportunityTemplateInput = {
  sportunityTemplateId: string,
  clientMutationId?: ?string,
};
export type DeleteSportunityTemplateMutationVariables = {|
  input: removeSportunityTemplateInput
|};
export type DeleteSportunityTemplateMutationResponse = {|
  +removeSportunityTemplate: ?{|
    +viewer: ?{|
      +id: string,
      +me: ?{|
        +id: string,
        +sportunityTemplates: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
      |},
    |}
  |}
|};
export type DeleteSportunityTemplateMutation = {|
  variables: DeleteSportunityTemplateMutationVariables,
  response: DeleteSportunityTemplateMutationResponse,
|};
*/


/*
mutation DeleteSportunityTemplateMutation(
  $input: removeSportunityTemplateInput!
) {
  removeSportunityTemplate(input: $input) {
    viewer {
      id
      me {
        id
        sportunityTemplates {
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
    "type": "removeSportunityTemplateInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeSportunityTemplate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "removeSportunityTemplateInput!"
      }
    ],
    "concreteType": "removeSportunityTemplatePayload",
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTemplates",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTemplate",
                "plural": true,
                "selections": [
                  v1
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteSportunityTemplateMutation",
  "id": null,
  "text": "mutation DeleteSportunityTemplateMutation(\n  $input: removeSportunityTemplateInput!\n) {\n  removeSportunityTemplate(input: $input) {\n    viewer {\n      id\n      me {\n        id\n        sportunityTemplates {\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteSportunityTemplateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteSportunityTemplateMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '13bbaad83a67e39716c561b3b493bc6f';
module.exports = node;

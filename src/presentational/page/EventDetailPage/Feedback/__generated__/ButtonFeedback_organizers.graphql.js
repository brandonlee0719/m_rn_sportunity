/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ButtonFeedback_organizers$ref: FragmentReference;
export type ButtonFeedback_organizers = $ReadOnlyArray<{|
  +isAdmin: boolean,
  +organizer: ?{|
    +id: string,
    +pseudo: string,
    +feedbacks: ?{|
      +feedbacksList: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +author: ?{|
              +id: string
            |}
          |}
        |}>
      |}
    |},
  |},
  +$refType: ButtonFeedback_organizers$ref,
|}>;
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
  "name": "ButtonFeedback_organizers",
  "type": "Organizer",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isAdmin",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "organizer",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0,
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
          "name": "feedbacks",
          "storageKey": null,
          "args": null,
          "concreteType": "Feedbacks",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "feedbacksList",
              "storageKey": "feedbacksList(last:1000)",
              "args": [
                {
                  "kind": "Literal",
                  "name": "last",
                  "value": 1000,
                  "type": "Int"
                }
              ],
              "concreteType": "FeedbackConnection",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "FeedbackEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Feedback",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "author",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "User",
                          "plural": false,
                          "selections": [
                            v0
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cea8d71470a94afe29d25fa3a9f43334';
module.exports = node;

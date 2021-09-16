/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventStatistics_sportunity$ref: FragmentReference;
export type EventStatistics_sportunity = {|
  +id: string,
  +score: ?{|
    +currentTeam: ?number,
    +adversaryTeam: ?number,
  |},
  +sportunityTypeStatus: ?{|
    +id: string,
    +name: ?{|
      +id: string,
      +EN: ?string,
      +FR: ?string,
    |},
  |},
  +game_information: ?{|
    +opponent: ?{|
      +organizer: ?{|
        +id: string,
        +pseudo: string,
        +email: ?any,
        +avatar: ?string,
      |},
      +organizerPseudo: ?string,
      +lookingForAnOpponent: ?boolean,
      +unknownOpponent: ?boolean,
    |}
  |},
  +$refType: EventStatistics_sportunity$ref,
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
  "name": "EventStatistics_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "score",
      "storageKey": null,
      "args": null,
      "concreteType": "Score",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currentTeam",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "adversaryTeam",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunityTypeStatus",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityTypeStatus",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "name",
          "storageKey": null,
          "args": null,
          "concreteType": "TranslatedString",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "EN",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "FR",
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
      "name": "game_information",
      "storageKey": null,
      "args": null,
      "concreteType": "GameInformation",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "opponent",
          "storageKey": null,
          "args": null,
          "concreteType": "SportunityOpponentOutput",
          "plural": false,
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
                v0,
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
                  "name": "email",
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
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "organizerPseudo",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lookingForAnOpponent",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "unknownOpponent",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e40960371269db23f8059ad1e320c369';
module.exports = node;

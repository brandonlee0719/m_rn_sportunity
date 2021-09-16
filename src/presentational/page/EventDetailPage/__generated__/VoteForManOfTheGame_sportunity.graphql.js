/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type VoteForManOfTheGame_sportunity$ref: FragmentReference;
export type VoteForManOfTheGame_sportunity = {|
  +id: string,
  +ending_date: any,
  +participants: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
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
  +organizers: ?$ReadOnlyArray<?{|
    +organizer: ?{|
      +id: string
    |},
    +isAdmin: boolean,
  |}>,
  +$refType: VoteForManOfTheGame_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
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
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  v0
];
return {
  "kind": "Fragment",
  "name": "VoteForManOfTheGame_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ending_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "participants",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v1
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "canUserVoteForManOfTheGame",
      "args": null,
      "storageKey": null
    },
    {
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
          "selections": v2
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "votedFor",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v1
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
          "selections": v2
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isAdmin",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c3ea9d9d136900a4af7acfd06608035d';
module.exports = node;

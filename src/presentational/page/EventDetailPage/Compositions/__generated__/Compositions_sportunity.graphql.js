/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Compositions_sportunity$ref: FragmentReference;
export type Compositions_sportunity = {|
  +id: string,
  +compositions: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +fieldImage: ?string,
    +users: ?$ReadOnlyArray<?{|
      +user: ?{|
        +id: string,
        +pseudo: string,
        +avatar: ?string,
      |},
      +position: ?{|
        +xPercentage: ?number,
        +yPercentage: ?number,
      |},
    |}>,
  |}>,
  +$refType: Compositions_sportunity$ref,
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
  "name": "Compositions_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "compositions",
      "storageKey": null,
      "args": null,
      "concreteType": "CompositionOutput",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fieldImage",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": null,
          "concreteType": "CompositionUsers",
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
                  "name": "avatar",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "position",
              "storageKey": null,
              "args": null,
              "concreteType": "CompositionUserPosition",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "xPercentage",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "yPercentage",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd8517bd065c0f0361f6799d82f4cf484';
module.exports = node;

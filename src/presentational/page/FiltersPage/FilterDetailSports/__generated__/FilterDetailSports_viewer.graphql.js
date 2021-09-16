/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FilterDetailSports_viewer$ref: FragmentReference;
export type FilterDetailSports_viewer = {|
  +filterSport: ?{|
    +id: string,
    +name: ?{|
      +EN: ?string,
      +FR: ?string,
    |},
    +logo: string,
    +levels: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?{|
        +name: ?string
      |},
      +FR: ?{|
        +name: ?string
      |},
    |}>,
  |},
  +$refType: FilterDetailSports_viewer$ref,
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
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "FilterDetailSports_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "filterSport",
      "name": "sport",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id",
          "type": "ID"
        }
      ],
      "concreteType": "Sport",
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logo",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "levels",
          "storageKey": null,
          "args": null,
          "concreteType": "Translated",
          "plural": true,
          "selections": [
            v0,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "EN",
              "storageKey": null,
              "args": null,
              "concreteType": "SportLevel",
              "plural": false,
              "selections": v1
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "FR",
              "storageKey": null,
              "args": null,
              "concreteType": "SportLevel",
              "plural": false,
              "selections": v1
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '745d63d8312fe9d664dc7467a69946d8';
module.exports = node;

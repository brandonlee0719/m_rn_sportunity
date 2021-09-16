/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LanguagesPage_viewer$ref: FragmentReference;
export type LanguagesPage_viewer = {|
  +id: string,
  +languages: ?$ReadOnlyArray<?{|
    +id: string,
    +code: ?string,
    +name: ?string,
  |}>,
  +me: ?{|
    +id: string,
    +languages: ?$ReadOnlyArray<?{|
      +id: string,
      +code: ?string,
      +name: ?string,
    |}>,
  |},
  +$refType: LanguagesPage_viewer$ref,
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
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "languages",
  "storageKey": null,
  "args": null,
  "concreteType": "Language",
  "plural": true,
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "code",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "LanguagesPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
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
        v0,
        v1
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8e729e9c44f24bb2e452dfabc19c515';
module.exports = node;

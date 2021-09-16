/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SelectTemplateModal_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectTemplate_viewer$ref: FragmentReference;
export type SelectTemplate_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +sportunityTemplates: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +$fragmentRefs: SelectTemplateModal_user$ref,
  |},
  +$refType: SelectTemplate_viewer$ref,
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
  "name": "SelectTemplate_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "FragmentSpread",
          "name": "SelectTemplateModal_user",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunityTemplates",
          "storageKey": null,
          "args": null,
          "concreteType": "SportunityTemplate",
          "plural": true,
          "selections": [
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e7b7da944f6c6f8633b22e0c32abe9a';
module.exports = node;

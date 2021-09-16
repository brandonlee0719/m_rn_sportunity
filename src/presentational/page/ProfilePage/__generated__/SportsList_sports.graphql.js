/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CertificateValidation = "PENDING" | "REJECTED" | "VALIDATED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportsList_sports$ref: FragmentReference;
export type SportsList_sports = $ReadOnlyArray<{|
  +sport: ?{|
    +id: string,
    +name: ?{|
      +id: string,
      +EN: ?string,
      +FR: ?string,
    |},
    +logo: string,
    +positions: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?string,
      +FR: ?string,
    |}>,
    +certificates: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?{|
        +id: string,
        +EN: ?string,
        +FR: ?string,
      |},
    |}>,
    +levels: ?$ReadOnlyArray<?{|
      +id: string,
      +EN: ?{|
        +name: ?string,
        +description: ?string,
        +skillLevel: number,
      |},
      +FR: ?{|
        +name: ?string,
        +description: ?string,
        +skillLevel: number,
      |},
    |}>,
  |},
  +positions: ?$ReadOnlyArray<?{|
    +id: string,
    +EN: ?string,
    +FR: ?string,
  |}>,
  +certificates: ?$ReadOnlyArray<?{|
    +validation: CertificateValidation,
    +certificate: ?{|
      +id: string,
      +name: ?{|
        +id: string,
        +EN: ?string,
        +FR: ?string,
      |},
    |},
  |}>,
  +levels: ?$ReadOnlyArray<?{|
    +id: string,
    +EN: ?{|
      +name: ?string,
      +description: ?string,
      +skillLevel: number,
    |},
    +FR: ?{|
      +name: ?string,
      +description: ?string,
      +skillLevel: number,
    |},
  |}>,
  +$refType: SportsList_sports$ref,
|}>;
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
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v1
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v1
},
v4 = [
  v0,
  v2
],
v5 = [
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
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v6 = {
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
      "selections": v5
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v5
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "SportsList_sports",
  "type": "SportDescriptor",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "Sport",
      "plural": false,
      "selections": [
        v0,
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logo",
          "args": null,
          "storageKey": null
        },
        v3,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "certificates",
          "storageKey": null,
          "args": null,
          "concreteType": "Certificate",
          "plural": true,
          "selections": v4
        },
        v6
      ]
    },
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "certificates",
      "storageKey": null,
      "args": null,
      "concreteType": "CertificateDescriptor",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "validation",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "certificate",
          "storageKey": null,
          "args": null,
          "concreteType": "Certificate",
          "plural": false,
          "selections": v4
        }
      ]
    },
    v6
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '20ca897439a9a1161e403a02e772a5b4';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AddChild_user$ref = any;
type AddChild_viewer$ref = any;
type AddMember_user$ref = any;
type AddMember_viewer$ref = any;
type ChatDetailPageContainer_viewer$ref = any;
type CircleDetails_circle$ref = any;
type CircleOptions_circle$ref = any;
type CircleOptions_viewer$ref = any;
type Subscribe_viewer$ref = any;
export type AskedInformationType = "ADDRESS" | "BOOLEAN" | "CUSTOM" | "DATE" | "DOCUMENT" | "NUMBER" | "PHONE_NUMBER" | "TEXT" | "%future added value";
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CirclesDetailPage_viewer$ref: FragmentReference;
export type CirclesDetailPage_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +pseudo: string,
    +profileType: ?UserProfileType,
    +isSubAccount: ?boolean,
    +$fragmentRefs: AddMember_user$ref & AddChild_user$ref,
  |},
  +chat: ?{|
    +id: string
  |},
  +circle: ?{|
    +id: string,
    +publicShortCode: ?string,
    +name: ?string,
    +mode: CircleKind,
    +type: ?CircleTypeEnum,
    +isCircleUpdatableByMembers: ?boolean,
    +isCircleAccessibleFromUrl: ?boolean,
    +isCircleUsableByMembers: ?boolean,
    +sport: ?{|
      +sport: ?{|
        +id: string,
        +name: ?{|
          +EN: ?string,
          +FR: ?string,
        |},
      |},
      +levels: ?$ReadOnlyArray<?{|
        +EN: ?{|
          +name: ?string
        |},
        +FR: ?{|
          +name: ?string
        |},
      |}>,
    |},
    +address: ?{|
      +address: string,
      +zip: ?string,
      +city: string,
      +country: string,
    |},
    +circlePreferences: ?{|
      +isChildrenCircle: ?boolean
    |},
    +owner: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +coOwners: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +memberCount: number,
    +members: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +email: ?any,
      +firstName: ?string,
      +lastName: ?string,
      +avatar: ?string,
      +lastConnexionDate: ?any,
    |}>,
    +memberParents: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
      +lastConnexionDate: ?any,
    |}>,
    +askedInformation: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?string,
      +type: ?AskedInformationType,
      +filledByOwner: ?boolean,
    |}>,
    +membersInformation: ?$ReadOnlyArray<?{|
      +id: string,
      +information: ?string,
      +user: ?{|
        +id: string
      |},
      +value: ?string,
    |}>,
    +termsOfUses: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?string,
      +link: ?string,
      +content: ?string,
      +acceptedBy: ?$ReadOnlyArray<?{|
        +user: ?{|
          +id: string
        |}
      |}>,
    |}>,
    +$fragmentRefs: CircleOptions_circle$ref & CircleDetails_circle$ref,
  |},
  +$fragmentRefs: ChatDetailPageContainer_viewer$ref & CircleOptions_viewer$ref & AddMember_viewer$ref & Subscribe_viewer$ref & AddChild_viewer$ref,
  +$refType: CirclesDetailPage_viewer$ref,
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
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = [
  v0
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = [
  v3
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v2
};
return {
  "kind": "Fragment",
  "name": "CirclesDetailPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "chatId",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "circleId",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "ChatDetailPageContainer_viewer",
      "args": null
    },
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
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "profileType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isSubAccount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "AddMember_user",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "AddChild_user",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "chat",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "circleId",
          "variableName": "chatId",
          "type": "String"
        }
      ],
      "concreteType": "Chat",
      "plural": false,
      "selections": v2
    },
    {
      "kind": "LinkedField",
      "alias": "circle",
      "name": "circle",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "circleId",
          "type": "ID"
        }
      ],
      "concreteType": "Circle",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "circlePreferences",
          "storageKey": null,
          "args": null,
          "concreteType": "CirclePreferences",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isChildrenCircle",
              "args": null,
              "storageKey": null
            }
          ]
        },
        v0,
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "mode",
          "args": null,
          "storageKey": null
        },
        v4,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isCircleUpdatableByMembers",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isCircleAccessibleFromUrl",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isCircleUsableByMembers",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sport",
          "storageKey": null,
          "args": null,
          "concreteType": "CircleSport",
          "plural": false,
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
                }
              ]
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
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "address",
          "storageKey": null,
          "args": null,
          "concreteType": "AddressModel",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "address",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "zip",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "city",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "country",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "publicShortCode",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "owner",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            v0,
            v1,
            v6
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "coOwners",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": v2
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "memberCount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "members",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": [
            v0,
            v1,
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
              "name": "firstName",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lastName",
              "args": null,
              "storageKey": null
            },
            v6,
            v7
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "memberParents",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": [
            v0,
            v1,
            v6,
            v7
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "askedInformation",
          "storageKey": null,
          "args": null,
          "concreteType": "askedInformation",
          "plural": true,
          "selections": [
            v0,
            v3,
            v4,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "filledByOwner",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "membersInformation",
          "storageKey": null,
          "args": null,
          "concreteType": "membersInformation",
          "plural": true,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "information",
              "args": null,
              "storageKey": null
            },
            v8,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "value",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "termsOfUses",
          "storageKey": null,
          "args": null,
          "concreteType": "CircleTermsOfUse",
          "plural": true,
          "selections": [
            v0,
            v3,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "link",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "content",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "acceptedBy",
              "storageKey": null,
              "args": null,
              "concreteType": "TermsOfUseAcceptedBy",
              "plural": true,
              "selections": [
                v8
              ]
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "CircleOptions_circle",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "CircleDetails_circle",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "CircleOptions_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AddMember_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Subscribe_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AddChild_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e391f9f229fdadedd1cc5c4999351613';
module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AdvancedSettingsView_sportunity$ref = any;
type StatusView_sportunity$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type DescriptionView_sportunity$ref: FragmentReference;
export type DescriptionView_sportunity = {|
  +description: string,
  +ageRestriction: ?{|
    +from: ?number,
    +to: ?number,
  |},
  +organizers: ?$ReadOnlyArray<?{|
    +isAdmin: boolean,
    +role: OrganizerRole,
    +permissions: ?{|
      +detailsAccess: ?{|
        +view: ?boolean,
        +edit: ?boolean,
      |},
      +chatAccess: ?{|
        +view: ?boolean,
        +edit: ?boolean,
      |},
      +memberAccess: ?{|
        +view: ?boolean,
        +edit: ?boolean,
      |},
      +carPoolingAccess: ?{|
        +view: ?boolean,
        +edit: ?boolean,
      |},
      +imageAccess: ?{|
        +view: ?boolean,
        +edit: ?boolean,
      |},
      +compositionAccess: ?{|
        +view: ?boolean,
        +edit: ?boolean,
      |},
    |},
    +secondaryOrganizerType: ?{|
      +id: string,
      +name: ?{|
        +FR: ?string,
        +EN: ?string,
        +DE: ?string,
        +ES: ?string,
      |},
    |},
    +customSecondaryOrganizerType: ?string,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
    +organizer: ?{|
      +id: string,
      +pseudo: string,
      +sportunityNumber: ?number,
      +feedbacks: ?{|
        +averageRating: ?number,
        +count: number,
      |},
      +sports: ?$ReadOnlyArray<?{|
        +levels: ?$ReadOnlyArray<?{|
          +EN: ?{|
            +name: ?string
          |}
        |}>
      |}>,
      +address: ?{|
        +address: string,
        +country: string,
        +city: string,
        +zip: ?string,
        +position: ?{|
          +lat: ?number,
          +lng: ?number,
        |},
      |},
      +avatar: ?string,
      +followers: ?$ReadOnlyArray<?{|
        +id: string
      |}>,
    |},
  |}>,
  +$fragmentRefs: StatusView_sportunity$ref & AdvancedSettingsView_sportunity$ref,
  +$refType: DescriptionView_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "DescriptionView_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatusView_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AdvancedSettingsView_sportunity",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ageRestriction",
      "storageKey": null,
      "args": null,
      "concreteType": "IntInterval",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "from",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "to",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "isAdmin",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "role",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "permissions",
          "storageKey": null,
          "args": null,
          "concreteType": "coOrganizersPermissions",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "detailsAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersDetailsAccess",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "chatAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersChatAccess",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "memberAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersMemberAccess",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "carPoolingAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersCarPoolingAccess",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "imageAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersImageAccess",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "compositionAccess",
              "storageKey": null,
              "args": null,
              "concreteType": "coOrganizersCompositionAccess",
              "plural": false,
              "selections": v0
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "secondaryOrganizerType",
          "storageKey": null,
          "args": null,
          "concreteType": "AssistantType",
          "plural": false,
          "selections": [
            v1,
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
                  "name": "FR",
                  "args": null,
                  "storageKey": null
                },
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
                  "name": "DE",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "ES",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "customSecondaryOrganizerType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "price",
          "storageKey": null,
          "args": null,
          "concreteType": "Price",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cents",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "currency",
              "args": null,
              "storageKey": null
            }
          ]
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
            v1,
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
              "name": "sportunityNumber",
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "averageRating",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "count",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sports",
              "storageKey": null,
              "args": null,
              "concreteType": "SportDescriptor",
              "plural": true,
              "selections": [
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
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "name",
                          "args": null,
                          "storageKey": null
                        }
                      ]
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
                  "name": "country",
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
                  "name": "zip",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "position",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "PositionType",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "lat",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "lng",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "avatar",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "followers",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ebfc23d7eb1ec03a664c5641352735d1';
module.exports = node;

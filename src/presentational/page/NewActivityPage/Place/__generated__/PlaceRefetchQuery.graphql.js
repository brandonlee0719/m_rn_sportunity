/**
 * @flow
 * @relayHash 448bb66beb1160420a52c1a7998eeebc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Place_viewer$ref = any;
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type Filter = {
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  status?: ?SportunityStatus,
  searchByName?: ?string,
  statuses?: ?$ReadOnlyArray<?SportunityStatus>,
  price?: ?IntIntervalInput,
  dates?: ?StringIntervalInput,
  hours?: ?IntIntervalInput,
  kind?: ?SportunityKind,
  sexRestriction?: ?SexRestriction,
  ageRestriction?: ?IntIntervalInput,
  users?: ?$ReadOnlyArray<?string>,
  circles?: ?$ReadOnlyArray<?string>,
  subAccounts?: ?$ReadOnlyArray<?string>,
  opponents?: ?$ReadOnlyArray<?string>,
  sportunityTypes?: ?$ReadOnlyArray<?string>,
};
export type LocationConstraint = {
  lat?: ?number,
  lng?: ?number,
  radius?: ?number,
};
export type SportConstraint = {
  sportID?: ?string,
  level?: ?$ReadOnlyArray<?string>,
};
export type IntIntervalInput = {
  from: number,
  to: number,
};
export type StringIntervalInput = {
  from: string,
  to: string,
};
export type PlaceRefetchQueryVariables = {|
  query: boolean,
  filter?: ?Filter,
|};
export type PlaceRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Place_viewer$ref
  |}
|};
export type PlaceRefetchQuery = {|
  variables: PlaceRefetchQueryVariables,
  response: PlaceRefetchQueryResponse,
|};
*/


/*
query PlaceRefetchQuery(
  $query: Boolean!
  $filter: Filter
) {
  viewer {
    ...Place_viewer_zUQoY
    id
  }
}

fragment Place_viewer_zUQoY on Viewer {
  id
  me {
    id
    profileType
  }
  infrastructures(filter: $filter) @include(if: $query) {
    id
    name
    venue {
      id
      name
      address {
        address
        city
        zip
        country
      }
    }
    logo
    sport {
      id
      name {
        EN
        FR
        id
      }
      logo
    }
  }
  slots(filter: $filter) @include(if: $query) {
    id
    status
    venue {
      id
      name
      address {
        address
        city
        zip
        country
      }
      owner {
        id
        pseudo
      }
    }
    infrastructure {
      id
      name
      logo
      sport {
        id
        name {
          EN
          FR
          id
        }
        logo
      }
    }
    from
    end
    price {
      cents
      currency
    }
    serie_information {
      firstDate
      lastDate
      remainingSlots
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "Filter",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "Filter"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
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
      "kind": "ScalarField",
      "alias": null,
      "name": "country",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "Sport",
  "plural": true,
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
        },
        v1
      ]
    },
    v5
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlaceRefetchQuery",
  "id": null,
  "text": "query PlaceRefetchQuery(\n  $query: Boolean!\n  $filter: Filter\n) {\n  viewer {\n    ...Place_viewer_zUQoY\n    id\n  }\n}\n\nfragment Place_viewer_zUQoY on Viewer {\n  id\n  me {\n    id\n    profileType\n  }\n  infrastructures(filter: $filter) @include(if: $query) {\n    id\n    name\n    venue {\n      id\n      name\n      address {\n        address\n        city\n        zip\n        country\n      }\n    }\n    logo\n    sport {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n      logo\n    }\n  }\n  slots(filter: $filter) @include(if: $query) {\n    id\n    status\n    venue {\n      id\n      name\n      address {\n        address\n        city\n        zip\n        country\n      }\n      owner {\n        id\n        pseudo\n      }\n    }\n    infrastructure {\n      id\n      name\n      logo\n      sport {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n        logo\n      }\n    }\n    from\n    end\n    price {\n      cents\n      currency\n    }\n    serie_information {\n      firstDate\n      lastDate\n      remainingSlots\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlaceRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Place_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "filter",
                "variableName": "filter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlaceRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
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
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "infrastructures",
                "storageKey": null,
                "args": v2,
                "concreteType": "Infrastructure",
                "plural": true,
                "selections": [
                  v1,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "venue",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Venue",
                    "plural": false,
                    "selections": [
                      v1,
                      v3,
                      v4
                    ]
                  },
                  v5,
                  v6
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "slots",
                "storageKey": null,
                "args": v2,
                "concreteType": "Slot",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "venue",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Venue",
                    "plural": false,
                    "selections": [
                      v1,
                      v3,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "owner",
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
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "infrastructure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Infrastructure",
                    "plural": false,
                    "selections": [
                      v1,
                      v3,
                      v5,
                      v6
                    ]
                  },
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
                    "name": "end",
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
                    "name": "serie_information",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "serie_information",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "firstDate",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lastDate",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "remainingSlots",
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
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7d60c6a1e22cf3a7ba6b9e2e1850d1e1';
module.exports = node;

/**
 * @flow
 * @relayHash 14bd376e6d11fbe96da8248351f9dbab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportunityPageContainer_query$ref = any;
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type Sportunities_Order = "BEGINNING_DATE_ASC" | "BEGINNING_DATE_DESC" | "CREATION_DATE_ASC" | "CREATION_DATE_DESC" | "%future added value";
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
export type SportunityPageContainerRefetchQueryVariables = {|
  count: number,
  filter?: ?Filter,
  orderBy?: ?Sportunities_Order,
  query: boolean,
|};
export type SportunityPageContainerRefetchQueryResponse = {|
  +$fragmentRefs: SportunityPageContainer_query$ref
|};
export type SportunityPageContainerRefetchQuery = {|
  variables: SportunityPageContainerRefetchQueryVariables,
  response: SportunityPageContainerRefetchQueryResponse,
|};
*/


/*
query SportunityPageContainerRefetchQuery(
  $count: Int!
  $filter: Filter
  $orderBy: Sportunities_Order
  $query: Boolean!
) {
  ...SportunityPageContainer_query_25j1CH
}

fragment SportunityPageContainer_query_25j1CH on Query {
  viewer {
    ...SportunityPage_viewer
    sportunityTypes(sportType: COLLECTIVE) {
      id
      name {
        FR
        EN
        id
      }
    }
    sportunities(first: $count, filter: $filter, orderBy: $orderBy) @include(if: $query) {
      count
      ...SportunityPage_sportunities
    }
    me {
      id
      appLanguage
      appCountry
      appCurrency
      avatar
      profileType
      publicAddress {
        city
        country
        position {
          lat
          lng
        }
      }
      subAccounts {
        id
        pseudo
      }
      basicSavedFiltersCreated
      savedFilters {
        id
        page
        filterName
        status
        statuses
        users {
          id
          pseudo
        }
        subAccounts {
          id
          pseudo
        }
        circles(last: 20) {
          edges {
            node {
              id
              name
              owner {
                id
                pseudo
                avatar
              }
            }
          }
        }
        location {
          lat
          lng
          radius
        }
        dates {
          from
          to
        }
        price {
          from
          to
        }
        sportunityTypes {
          id
          name {
            FR
            EN
            id
          }
        }
        sport {
          sport {
            id
            name {
              EN
              FR
              id
            }
            logo
            levels {
              id
              EN {
                name
                description
                skillLevel
              }
              FR {
                name
                description
                skillLevel
              }
            }
          }
          levels {
            id
            EN {
              name
              description
              skillLevel
            }
            FR {
              name
              description
              skillLevel
            }
          }
        }
      }
      defaultSavedFilter {
        id
        filterName
        status
        statuses
        page
        circles(last: 20) {
          edges {
            node {
              id
              name
              owner {
                id
                pseudo
                avatar
              }
            }
          }
        }
        sport {
          sport {
            id
            name {
              EN
              FR
              id
            }
            logo
            levels {
              id
              EN {
                name
                description
                skillLevel
              }
              FR {
                name
                description
                skillLevel
              }
            }
          }
          levels {
            id
            EN {
              name
              description
              skillLevel
            }
            FR {
              name
              description
              skillLevel
            }
          }
        }
        location {
          lat
          lng
          radius
        }
        dates {
          from
          to
        }
        price {
          from
          to
        }
      }
      sports {
        sport {
          id
        }
      }
    }
    id
  }
}

fragment SportunityPage_viewer on Viewer {
  id
  ...Stepper_viewer
  me {
    ...SportunityListView_user
    id
    avatar
    profileType
    mangoId
    isProfileComplete
    isPublicProfileComplete
    savedFilters {
      id
      filterName
      status
      statuses
      users {
        id
        pseudo
      }
      subAccounts {
        id
        pseudo
      }
      circles(last: 20) {
        edges {
          node {
            id
            name
            owner {
              id
              pseudo
              avatar
            }
          }
        }
      }
      page
      sport {
        sport {
          id
          name {
            EN
            FR
            id
          }
          logo
          levels {
            id
            EN {
              name
              description
              skillLevel
            }
            FR {
              name
              description
              skillLevel
            }
          }
        }
        levels {
          id
          EN {
            name
            description
            skillLevel
          }
          FR {
            name
            description
            skillLevel
          }
        }
      }
      location {
        lat
        lng
        radius
      }
      dates {
        from
        to
      }
      price {
        from
        to
      }
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
    }
    defaultSavedFilter {
      id
      filterName
      status
      statuses
      users {
        id
        pseudo
      }
      subAccounts {
        id
        pseudo
      }
      circles(last: 20) {
        edges {
          node {
            id
            name
            owner {
              id
              pseudo
              avatar
            }
          }
        }
      }
      page
      sport {
        sport {
          id
          name {
            EN
            FR
            id
          }
          logo
          levels {
            id
            EN {
              name
              description
              skillLevel
            }
            FR {
              name
              description
              skillLevel
            }
          }
        }
        levels {
          id
          EN {
            name
            description
            skillLevel
          }
          FR {
            name
            description
            skillLevel
          }
        }
      }
      location {
        lat
        lng
        radius
      }
      dates {
        from
        to
      }
      price {
        from
        to
      }
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
    }
  }
  ...SportunityListView_viewer
}

fragment SportunityPage_sportunities on SportunityConnection {
  ...SportunityListView_sportunities
  count
  edges {
    node {
      id
    }
  }
}

fragment SportunityListView_sportunities on SportunityConnection {
  count
  edges {
    node {
      id
      status
      price {
        cents
        currency
      }
      invited {
        user {
          id
        }
      }
      paymentStatus {
        user {
          id
        }
        status
        price {
          cents
          currency
        }
        id
      }
      survey {
        isSurveyTransformed
        surveyDates {
          answers {
            user {
              id
            }
          }
        }
      }
      game_information {
        opponent {
          lookingForAnOpponent
          invitedOpponents(last: 5) {
            edges {
              node {
                id
                members {
                  id
                }
              }
            }
          }
        }
      }
      organizers {
        organizer {
          id
          pseudo
        }
        isAdmin
        role
        price {
          currency
          cents
        }
        secondaryOrganizerType {
          id
          name {
            id
            EN
            FR
          }
        }
        customSecondaryOrganizerType
        permissions {
          chatAccess {
            view
            edit
          }
          memberAccess {
            view
            edit
          }
          carPoolingAccess {
            view
            edit
          }
          imageAccess {
            view
            edit
          }
          detailsAccess {
            view
            edit
          }
          compositionAccess {
            view
            edit
          }
        }
        id
      }
      ...SportunityItem_sportunity
    }
  }
}

fragment SportunityItem_sportunity on Sportunity {
  id
  title
  status
  cancel_date
  game_information {
    opponent {
      organizerPseudo
      unknownOpponent
      lookingForAnOpponent
      organizer {
        id
        pseudo
        avatar
      }
      invitedOpponents(last: 5) {
        edges {
          node {
            id
            members {
              id
            }
          }
        }
      }
    }
  }
  organizers {
    organizer {
      id
      pseudo
      avatar
    }
    isAdmin
    role
    secondaryOrganizerType {
      id
      name {
        FR
        EN
        DE
        ES
        id
      }
    }
    customSecondaryOrganizerType
    id
  }
  ...TopContent_sportunity
  ...BottomContent_sportunity
}

fragment TopContent_sportunity on Sportunity {
  id
  title
  status
  beginning_date
  price {
    currency
    cents
  }
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
    }
  }
  organizers {
    organizer {
      id
      pseudo
      avatar
      areStatisticsActivated
      statisticPreferences {
        private
      }
    }
    isAdmin
    id
  }
  paymentStatus {
    user {
      id
    }
    status
    price {
      cents
      currency
    }
    id
  }
  venue {
    id
    name
  }
  infrastructure {
    id
    name
  }
  address {
    address
    country
    city
    zip
    position {
      lat
      lng
    }
  }
  participantRange {
    from
    to
  }
  sportunityType {
    id
    name {
      EN
      FR
      id
    }
  }
  sportunityTypeStatus {
    id
    name {
      EN
      FR
      id
    }
  }
  score {
    currentTeam
    adversaryTeam
  }
  sport {
    sport {
      logo
      id
    }
    allLevelSelected
    levels {
      id
      EN {
        name
        skillLevel
      }
      FR {
        name
        skillLevel
      }
    }
  }
}

fragment BottomContent_sportunity on Sportunity {
  nbShares
  status
  survey {
    isSurveyTransformed
    surveyDates {
      answers {
        user {
          id
          pseudo
        }
        answer
      }
    }
  }
  participants {
    id
  }
  waiting {
    id
  }
  willing {
    id
  }
  canceling {
    canceling_user {
      id
    }
    status
    cancelation_date
  }
  participantRange {
    from
    to
  }
  organizers {
    isAdmin
    organizer {
      id
      pseudo
      avatar
    }
    id
  }
  game_information {
    opponent {
      organizerPseudo
      unknownOpponent
      lookingForAnOpponent
      organizer {
        id
        pseudo
        avatar
      }
      invitedOpponents(last: 5) {
        edges {
          node {
            id
            members {
              id
            }
          }
        }
      }
    }
  }
}

fragment Stepper_viewer on Viewer {
  id
  me {
    id
    profileType
    mangoId
    pseudo
    tutorialSteps {
      createFormStep
      setupMembersSubscriptionStep
      fulfilProfileStep
      addOfficialDocumentsStep
      createSubAccountStep
      shareAccessStep
      createCircleStep
      organizeStep
      setupStatisticsStep
      joinAPrivateCircleStep
      joinAPublicCircleStep
      giveAvailabilitiesStep
      bookSportunityStep
    }
    subAccounts {
      id
    }
    isSubAccount
  }
}

fragment SportunityListView_user on User {
  id
  profileType
  description
  ...SportunityItem_user
}

fragment SportunityListView_viewer on Viewer {
  id
  ...SportunityItem_viewer
}

fragment SportunityItem_viewer on Viewer {
  ...TopContent_viewer
}

fragment TopContent_viewer on Viewer {
  id
}

fragment SportunityItem_user on User {
  ...TopContent_user
  ...BottomContent_user
}

fragment TopContent_user on User {
  id
}

fragment BottomContent_user on User {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "Filter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "Sportunities_Order",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = [
  v1,
  v2
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v3
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = [
  v1,
  v2,
  v6
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v10,
    v11,
    v1
  ]
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v15 = [
  v7,
  v5,
  v14
],
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v15
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v15
    }
  ]
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v19 = [
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
],
v20 = [
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
      v11,
      v10,
      v1
    ]
  }
],
v21 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "circles",
    "storageKey": "circles(last:20)",
    "args": [
      {
        "kind": "Literal",
        "name": "last",
        "value": 20,
        "type": "Int"
      }
    ],
    "concreteType": "CircleConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "CircleEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              v1,
              v7,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": v8
              }
            ]
          }
        ]
      }
    ]
  },
  v1,
  v9,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "statuses",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": v3
  },
  v4,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "filterName",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "page",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sport",
    "storageKey": null,
    "args": null,
    "concreteType": "FilterSport",
    "plural": true,
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
          v1,
          v12,
          v13,
          v16
        ]
      },
      v16
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "location",
    "storageKey": null,
    "args": null,
    "concreteType": "FilterLatLng",
    "plural": false,
    "selections": [
      v17,
      v18,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "radius",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "dates",
    "storageKey": null,
    "args": null,
    "concreteType": "StringInterval",
    "plural": false,
    "selections": v19
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "price",
    "storageKey": null,
    "args": null,
    "concreteType": "IntInterval",
    "plural": false,
    "selections": v19
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sportunityTypes",
    "storageKey": null,
    "args": null,
    "concreteType": "SportunityType",
    "plural": true,
    "selections": v20
  }
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "position",
  "storageKey": null,
  "args": null,
  "concreteType": "PositionType",
  "plural": false,
  "selections": [
    v17,
    v18
  ]
},
v25 = [
  v1
],
v26 = [
  v1,
  v7
],
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v27,
    v28
  ]
},
v30 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v25
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v32 = [
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
v33 = [
  v1,
  v12
],
v34 = [
  v7,
  v14
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SportunityPageContainerRefetchQuery",
  "id": null,
  "text": "query SportunityPageContainerRefetchQuery(\n  $count: Int!\n  $filter: Filter\n  $orderBy: Sportunities_Order\n  $query: Boolean!\n) {\n  ...SportunityPageContainer_query_25j1CH\n}\n\nfragment SportunityPageContainer_query_25j1CH on Query {\n  viewer {\n    ...SportunityPage_viewer\n    sportunityTypes(sportType: COLLECTIVE) {\n      id\n      name {\n        FR\n        EN\n        id\n      }\n    }\n    sportunities(first: $count, filter: $filter, orderBy: $orderBy) @include(if: $query) {\n      count\n      ...SportunityPage_sportunities\n    }\n    me {\n      id\n      appLanguage\n      appCountry\n      appCurrency\n      avatar\n      profileType\n      publicAddress {\n        city\n        country\n        position {\n          lat\n          lng\n        }\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      basicSavedFiltersCreated\n      savedFilters {\n        id\n        page\n        filterName\n        status\n        statuses\n        users {\n          id\n          pseudo\n        }\n        subAccounts {\n          id\n          pseudo\n        }\n        circles(last: 20) {\n          edges {\n            node {\n              id\n              name\n              owner {\n                id\n                pseudo\n                avatar\n              }\n            }\n          }\n        }\n        location {\n          lat\n          lng\n          radius\n        }\n        dates {\n          from\n          to\n        }\n        price {\n          from\n          to\n        }\n        sportunityTypes {\n          id\n          name {\n            FR\n            EN\n            id\n          }\n        }\n        sport {\n          sport {\n            id\n            name {\n              EN\n              FR\n              id\n            }\n            logo\n            levels {\n              id\n              EN {\n                name\n                description\n                skillLevel\n              }\n              FR {\n                name\n                description\n                skillLevel\n              }\n            }\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n      }\n      defaultSavedFilter {\n        id\n        filterName\n        status\n        statuses\n        page\n        circles(last: 20) {\n          edges {\n            node {\n              id\n              name\n              owner {\n                id\n                pseudo\n                avatar\n              }\n            }\n          }\n        }\n        sport {\n          sport {\n            id\n            name {\n              EN\n              FR\n              id\n            }\n            logo\n            levels {\n              id\n              EN {\n                name\n                description\n                skillLevel\n              }\n              FR {\n                name\n                description\n                skillLevel\n              }\n            }\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        location {\n          lat\n          lng\n          radius\n        }\n        dates {\n          from\n          to\n        }\n        price {\n          from\n          to\n        }\n      }\n      sports {\n        sport {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment SportunityPage_viewer on Viewer {\n  id\n  ...Stepper_viewer\n  me {\n    ...SportunityListView_user\n    id\n    avatar\n    profileType\n    mangoId\n    isProfileComplete\n    isPublicProfileComplete\n    savedFilters {\n      id\n      filterName\n      status\n      statuses\n      users {\n        id\n        pseudo\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            owner {\n              id\n              pseudo\n              avatar\n            }\n          }\n        }\n      }\n      page\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      dates {\n        from\n        to\n      }\n      price {\n        from\n        to\n      }\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n    }\n    defaultSavedFilter {\n      id\n      filterName\n      status\n      statuses\n      users {\n        id\n        pseudo\n      }\n      subAccounts {\n        id\n        pseudo\n      }\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            owner {\n              id\n              pseudo\n              avatar\n            }\n          }\n        }\n      }\n      page\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      dates {\n        from\n        to\n      }\n      price {\n        from\n        to\n      }\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n    }\n  }\n  ...SportunityListView_viewer\n}\n\nfragment SportunityPage_sportunities on SportunityConnection {\n  ...SportunityListView_sportunities\n  count\n  edges {\n    node {\n      id\n    }\n  }\n}\n\nfragment SportunityListView_sportunities on SportunityConnection {\n  count\n  edges {\n    node {\n      id\n      status\n      price {\n        cents\n        currency\n      }\n      invited {\n        user {\n          id\n        }\n      }\n      paymentStatus {\n        user {\n          id\n        }\n        status\n        price {\n          cents\n          currency\n        }\n        id\n      }\n      survey {\n        isSurveyTransformed\n        surveyDates {\n          answers {\n            user {\n              id\n            }\n          }\n        }\n      }\n      game_information {\n        opponent {\n          lookingForAnOpponent\n          invitedOpponents(last: 5) {\n            edges {\n              node {\n                id\n                members {\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n      organizers {\n        organizer {\n          id\n          pseudo\n        }\n        isAdmin\n        role\n        price {\n          currency\n          cents\n        }\n        secondaryOrganizerType {\n          id\n          name {\n            id\n            EN\n            FR\n          }\n        }\n        customSecondaryOrganizerType\n        permissions {\n          chatAccess {\n            view\n            edit\n          }\n          memberAccess {\n            view\n            edit\n          }\n          carPoolingAccess {\n            view\n            edit\n          }\n          imageAccess {\n            view\n            edit\n          }\n          detailsAccess {\n            view\n            edit\n          }\n          compositionAccess {\n            view\n            edit\n          }\n        }\n        id\n      }\n      ...SportunityItem_sportunity\n    }\n  }\n}\n\nfragment SportunityItem_sportunity on Sportunity {\n  id\n  title\n  status\n  cancel_date\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  ...TopContent_sportunity\n  ...BottomContent_sportunity\n}\n\nfragment TopContent_sportunity on Sportunity {\n  id\n  title\n  status\n  beginning_date\n  price {\n    currency\n    cents\n  }\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n      areStatisticsActivated\n      statisticPreferences {\n        private\n      }\n    }\n    isAdmin\n    id\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  address {\n    address\n    country\n    city\n    zip\n    position {\n      lat\n      lng\n    }\n  }\n  participantRange {\n    from\n    to\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  sport {\n    sport {\n      logo\n      id\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment BottomContent_sportunity on Sportunity {\n  nbShares\n  status\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  participants {\n    id\n  }\n  waiting {\n    id\n  }\n  willing {\n    id\n  }\n  canceling {\n    canceling_user {\n      id\n    }\n    status\n    cancelation_date\n  }\n  participantRange {\n    from\n    to\n  }\n  organizers {\n    isAdmin\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    id\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Stepper_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    mangoId\n    pseudo\n    tutorialSteps {\n      createFormStep\n      setupMembersSubscriptionStep\n      fulfilProfileStep\n      addOfficialDocumentsStep\n      createSubAccountStep\n      shareAccessStep\n      createCircleStep\n      organizeStep\n      setupStatisticsStep\n      joinAPrivateCircleStep\n      joinAPublicCircleStep\n      giveAvailabilitiesStep\n      bookSportunityStep\n    }\n    subAccounts {\n      id\n    }\n    isSubAccount\n  }\n}\n\nfragment SportunityListView_user on User {\n  id\n  profileType\n  description\n  ...SportunityItem_user\n}\n\nfragment SportunityListView_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SportunityPageContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SportunityPageContainer_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "orderBy",
            "variableName": "orderBy",
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
  },
  "operation": {
    "kind": "Operation",
    "name": "SportunityPageContainerRefetchQuery",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tutorialSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "TutorialSteps",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createFormStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fulfilProfileStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addOfficialDocumentsStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createSubAccountStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "shareAccessStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "setupMembersSubscriptionStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "organizeStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "setupStatisticsStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "joinAPrivateCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "joinAPublicCircleStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "giveAvailabilitiesStep",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bookSportunityStep",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              v5,
              v6,
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
                "name": "isPublicProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": true,
                "selections": v21
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserFilter",
                "plural": false,
                "selections": v21
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appLanguage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCountry",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCurrency",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "publicAddress",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  v22,
                  v23,
                  v24
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "basicSavedFiltersCreated",
                "args": null,
                "storageKey": null
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
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": v25
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunityTypes",
            "storageKey": "sportunityTypes(sportType:\"COLLECTIVE\")",
            "args": [
              {
                "kind": "Literal",
                "name": "sportType",
                "value": "COLLECTIVE",
                "type": "SportTypeEnum"
              }
            ],
            "concreteType": "SportunityType",
            "plural": true,
            "selections": v20
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunities",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": "Filter"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  },
                  {
                    "kind": "Variable",
                    "name": "orderBy",
                    "variableName": "orderBy",
                    "type": "Sportunities_Order"
                  }
                ],
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "count",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sportunity",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "infrastructure",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Infrastructure",
                            "plural": false,
                            "selections": v26
                          },
                          v1,
                          v29,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "invited",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Invited",
                            "plural": true,
                            "selections": [
                              v30
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "paymentStatus",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityPaymentStatus",
                            "plural": true,
                            "selections": [
                              v30,
                              v9,
                              v29,
                              v1
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "survey",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Survey",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "isSurveyTransformed",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "surveyDates",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SurveyDatesOutput",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "answers",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SurveyAnswer",
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
                                        "selections": v3
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "answer",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  },
                                  v31,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "ending_date",
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
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "lookingForAnOpponent",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "invitedOpponents",
                                    "storageKey": "invitedOpponents(last:5)",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "last",
                                        "value": 5,
                                        "type": "Int"
                                      }
                                    ],
                                    "concreteType": "CircleConnection",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "edges",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "CircleEdge",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "node",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Circle",
                                            "plural": false,
                                            "selections": [
                                              v1,
                                              {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "members",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "User",
                                                "plural": true,
                                                "selections": v25
                                              }
                                            ]
                                          }
                                        ]
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
                                    "name": "unknownOpponent",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "organizer",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": false,
                                    "selections": v8
                                  }
                                ]
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
                                "selections": [
                                  v1,
                                  v2,
                                  v6,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "areStatisticsActivated",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "statisticPreferences",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "StatisticPreferences",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "private",
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
                                "name": "price",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Price",
                                "plural": false,
                                "selections": [
                                  v28,
                                  v27
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
                                      v1,
                                      v10,
                                      v11,
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
                                "name": "permissions",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "coOrganizersPermissions",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "chatAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersChatAccess",
                                    "plural": false,
                                    "selections": v32
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "memberAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersMemberAccess",
                                    "plural": false,
                                    "selections": v32
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "carPoolingAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersCarPoolingAccess",
                                    "plural": false,
                                    "selections": v32
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "imageAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersImageAccess",
                                    "plural": false,
                                    "selections": v32
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "detailsAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersDetailsAccess",
                                    "plural": false,
                                    "selections": v32
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "compositionAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersCompositionAccess",
                                    "plural": false,
                                    "selections": v32
                                  }
                                ]
                              },
                              v1
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "title",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "cancel_date",
                            "args": null,
                            "storageKey": null
                          },
                          v31,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "venue",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Venue",
                            "plural": false,
                            "selections": v26
                          },
                          v9,
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
                              v23,
                              v22,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "zip",
                                "args": null,
                                "storageKey": null
                              },
                              v24
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "participantRange",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "IntInterval",
                            "plural": false,
                            "selections": v19
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunityType",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityType",
                            "plural": false,
                            "selections": v33
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunityTypeStatus",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityTypeStatus",
                            "plural": false,
                            "selections": v33
                          },
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
                            "name": "sport",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunitySport",
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
                                  v13,
                                  v1
                                ]
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "allLevelSelected",
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
                                  v1,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "EN",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v34
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "FR",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v34
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "nbShares",
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
                            "selections": v25
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "waiting",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v25
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "willing",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v25
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "canceling",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Canceling",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "canceling_user",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": v25
                              },
                              v9,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "cancelation_date",
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
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6cf2711f26094ff01282693e14e962fb';
module.exports = node;

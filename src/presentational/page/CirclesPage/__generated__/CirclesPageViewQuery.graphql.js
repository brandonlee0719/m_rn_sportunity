/**
 * @flow
 * @relayHash 7e50075eec39caa365904da886deb03c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CirclesPageView_viewer$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type CirclesFilter = {
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  type?: ?CircleTypeEnum,
  code?: ?string,
  types?: ?$ReadOnlyArray<?CircleTypeEnum>,
  circleType?: ?$ReadOnlyArray<?CircleListTypeEnum>,
  nameCompletion?: ?string,
  modes?: ?$ReadOnlyArray<?CircleKind>,
  owners?: ?$ReadOnlyArray<?string>,
  isCircleUsableByMember?: ?boolean,
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
export type CirclesPageViewQueryVariables = {|
  queryPublic: boolean,
  queryMyCircles: boolean,
  queryCirclesImIn: boolean,
  queryCirclesSuperUser: boolean,
  queryMain: boolean,
  filter?: ?CirclesFilter,
  publicFilter?: ?CirclesFilter,
  myCirclesFilter?: ?CirclesFilter,
  circleNumber?: ?number,
|};
export type CirclesPageViewQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CirclesPageView_viewer$ref
  |}
|};
export type CirclesPageViewQuery = {|
  variables: CirclesPageViewQueryVariables,
  response: CirclesPageViewQueryResponse,
|};
*/


/*
query CirclesPageViewQuery(
  $queryPublic: Boolean!
  $queryMyCircles: Boolean!
  $queryCirclesImIn: Boolean!
  $queryCirclesSuperUser: Boolean!
  $queryMain: Boolean!
  $filter: CirclesFilter
  $publicFilter: CirclesFilter
  $myCirclesFilter: CirclesFilter
  $circleNumber: Int
) {
  viewer {
    ...CirclesPageView_viewer_Psykq
    id
  }
}

fragment CirclesPageView_viewer_Psykq on Viewer {
  id
  ...CirclesDetailPage_viewer
  ...Stepper_viewer
  circles(first: $circleNumber, filter: $publicFilter) @include(if: $queryMain) {
    count
    pageInfo {
      hasNextPage
    }
    edges @include(if: $queryPublic) {
      node {
        id
        ...CirclesItem_circle
        isCircleUsableByMembers
        owner {
          id
        }
        coOwners {
          id
        }
        members {
          id
        }
        termsOfUses {
          id
          name
          link
          content
          acceptedBy {
            user {
              id
            }
          }
        }
      }
    }
  }
  me {
    id
    profileType
    basicCircleSavedFiltersCreated
    savedCircleFilters {
      id
      filterName
      location {
        lat
        lng
        radius
      }
      sport {
        sport {
          id
          name {
            EN
            FR
            id
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
      circleType
      memberTypes
      modes
      owners {
        id
        pseudo
      }
    }
    defaultSavedCircleFilter {
      id
      filterName
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
      circleType
      memberType
    }
    subAccounts {
      id
    }
    circles(last: 100, filter: $myCirclesFilter) @include(if: $queryMain) {
      count
      edges @include(if: $queryMyCircles) {
        node {
          ...CirclesItem_circle
          id
          owner {
            id
            avatar
            pseudo
          }
          isCircleAccessibleFromUrl
          mode
          type
          coOwners {
            id
          }
          members {
            id
          }
          memberParents {
            id
          }
        }
      }
    }
  circlesUserIsIn(last: 100, filter: $filter) @include(if: $queryMain) {
      count
      edges @include(if: $queryCirclesImIn) {
        node {
          ...CirclesItem_circle
          isCircleAccessibleFromUrl
          isCircleUsableByMembers
          id
        }
      }
    }
  circlesSuperUser(last: 100, filter: $filter) @include(if: $queryMain) {
      count
      edges @include(if: $queryCirclesSuperUser) {
        node {
          ...CirclesItem_circle
          isCircleAccessibleFromUrl
          id
        }
      }
    }
  circlesFromClub(last: 100, filter: $filter) @include(if: $queryMain) {
      count
      edges @include(if: $queryCirclesSuperUser) {
        node {
          ...CirclesItem_circle
          isCircleAccessibleFromUrl
          id
        }
      }
    }
  }
}

fragment CirclesDetailPage_viewer on Viewer {
  id
  ...ChatDetailPageContainer_viewer
  me {
    id
    pseudo
    profileType
    isSubAccount
    ...AddMember_user
    ...AddChild_user
  }
  chat {
    id
  }
  circle: circle {
    id
    publicShortCode
    name
    mode
    type
    isCircleUpdatableByMembers
    isCircleAccessibleFromUrl
    isCircleUsableByMembers
    sport {
      sport {
        id
        name {
          EN
          FR
          id
        }
      }
      levels {
        EN {
          name
        }
        FR {
          name
        }
        id
      }
    }
    address {
      address
      zip
      city
      country
    }
    circlePreferences {
      isChildrenCircle
    }
    owner {
      id
      pseudo
      avatar
    }
    coOwners {
      id
    }
    memberCount
    members {
      id
      pseudo
      email
      firstName
      lastName
      avatar
      lastConnexionDate
    }
    memberParents {
      id
      pseudo
      avatar
      lastConnexionDate
    }
    askedInformation {
      id
      name
      type
      filledByOwner
    }
    membersInformation {
      id
      information
      user {
        id
      }
      value
    }
    termsOfUses {
      id
      name
      link
      content
      acceptedBy {
        user {
          id
        }
      }
    }
    ...CircleOptions_circle
    ...CircleDetails_circle
  }
  ...CircleOptions_viewer
  ...AddMember_viewer
  ...Subscribe_viewer
  ...AddChild_viewer
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

fragment CirclesItem_circle on Circle {
  id
  name
  memberCount
  mode
  isCircleUsableByMembers
  isCircleAccessibleFromUrl
  type
  owner {
    id
    avatar
    pseudo
  }
  coOwners {
    id
  }
  members {
    id
  }
  memberParents {
    id
  }
}

fragment ChatDetailPageContainer_viewer on Viewer {
  ...ChatDetailPage_viewer
}

fragment AddMember_user on User {
  id
  email
  pseudo
  profileType
}

fragment AddChild_user on User {
  id
  email
  pseudo
  subAccounts {
    id
    pseudo
    avatar
  }
}

fragment CircleOptions_circle on Circle {
  id
  description
  mode
  isCircleUpdatableByMembers
  isCircleUsableByMembers
  isCircleAccessibleFromUrl
  sport {
    sport {
      id
      name {
        EN
        FR
        id
      }
    }
    levels {
      id
      EN {
        name
      }
      FR {
        name
      }
    }
  }
  address {
    address
    zip
    city
    country
  }
  circlePreferences {
    isChildrenCircle
  }
  askedInformation {
    id
    name
    type
    filledByOwner
  }
  membersInformation {
    id
    information
    user {
      id
    }
    value
  }
}

fragment CircleDetails_circle on Circle {
  id
  description
  type
  mode
  isCircleUsableByMembers
  publicShortCode
  address {
    address
    city
    country
    position {
      lat
      lng
    }
  }
  sport {
    sport {
      id
      logo
      name {
        EN
        FR
        id
      }
    }
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

fragment CircleOptions_viewer on Viewer {
  id
  ...AdminMembersInformation_viewer
  ...CircleSport_viewer
}

fragment AddMember_viewer on Viewer {
  id
  ...SearchModule_viewer
}

fragment Subscribe_viewer on Viewer {
  me {
    id
    pseudo
    avatar
  }
}

fragment AddChild_viewer on Viewer {
  ...AddChildModal_viewer
}

fragment AddChildModal_viewer on Viewer {
  id
  ...CreateProfilePage_viewer
}

fragment CreateProfilePage_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    phoneNumber
  }
}

fragment SearchModule_viewer on Viewer {
  id
  ...SportunityItem_viewer
  ...FilterDetailSports_viewer
  me {
    id
    profileType
    ...SportunityItem_user
  }
  selectedCircle: circle {
    id
    name
    owner {
      id
      pseudo
      avatar
    }
    members {
      id
      pseudo
      avatar
      profileType
    }
    memberCount
  }
}

fragment SportunityItem_viewer on Viewer {
  ...TopContent_viewer
}

fragment FilterDetailSports_viewer on Viewer {
  filterSport: sport {
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
      }
      FR {
        name
      }
    }
  }
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

fragment TopContent_viewer on Viewer {
  id
}

fragment AdminMembersInformation_viewer on Viewer {
  id
}

fragment CircleSport_viewer on Viewer {
  id
  me {
    id
    sports {
      ...SportList_sports
    }
  }
}

fragment SportList_sports on SportDescriptor {
  sport {
    id
    name {
      id
      EN
      FR
    }
    logo
    positions {
      id
      EN
      FR
    }
    certificates {
      id
      name {
        id
        EN
        FR
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
  positions {
    id
    EN
    FR
  }
  certificates {
    validation
    certificate {
      id
      name {
        id
        EN
        FR
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

fragment ChatDetailPage_viewer on Viewer {
  me {
    id
  }
  ...MessagesList_viewer
}

fragment MessagesList_viewer on Viewer {
  me {
    id
    pseudo
    avatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryPublic",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryMyCircles",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCirclesImIn",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCirclesSuperUser",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryMain",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "CirclesFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "publicFilter",
    "type": "CirclesFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "myCirclesFilter",
    "type": "CirclesFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circleNumber",
    "type": "Int",
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
  "name": "EN",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v4 = [
  v1,
  v2,
  v3
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v4
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v4
},
v8 = [
  v1,
  v5
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v12 = [
  v9,
  v10,
  v11
],
v13 = {
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
      "selections": v12
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v12
    }
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v18 = [
  v1,
  v17,
  v14
],
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
  "plural": false,
  "selections": [
    v20,
    v21,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v2,
    v3,
    v1
  ]
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleAccessibleFromUrl",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v32 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v1,
    v14,
    v17
  ]
},
v33 = [
  v1
],
v34 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "coOwners",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v33
},
v35 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v33
},
v36 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "memberParents",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v33
},
v37 = [
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
          v27,
          v1,
          v28,
          v29,
          v30,
          v9,
          v31,
          v32,
          v34,
          v35,
          v36
        ]
      }
    ]
  }
],
v38 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "CirclesFilter"
  },
  v25
],
v39 = [
  v26,
  {
    "kind": "Condition",
    "passingValue": true,
    "condition": "queryCirclesSuperUser",
    "selections": v37
  }
],
v40 = [
  v9,
  v11
],
v41 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v18
},
v42 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v43 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v33
},
v44 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "termsOfUses",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleTermsOfUse",
  "plural": true,
  "selections": [
    v1,
    v9,
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
        v43
      ]
    }
  ]
},
v45 = [
  v9
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CirclesPageViewQuery",
  "id": null,
  "text": "query CirclesPageViewQuery(\n  $queryPublic: Boolean!\n  $queryMyCircles: Boolean!\n  $queryCirclesImIn: Boolean!\n  $queryCirclesSuperUser: Boolean!\n  $queryMain: Boolean!\n  $filter: CirclesFilter\n  $publicFilter: CirclesFilter\n  $myCirclesFilter: CirclesFilter\n  $circleNumber: Int\n) {\n  viewer {\n    ...CirclesPageView_viewer_Psykq\n    id\n  }\n}\n\nfragment CirclesPageView_viewer_Psykq on Viewer {\n  id\n  ...CirclesDetailPage_viewer\n  ...Stepper_viewer\n  circles(first: $circleNumber, filter: $publicFilter) @include(if: $queryMain) {\n    count\n    pageInfo {\n      hasNextPage\n    }\n    edges @include(if: $queryPublic) {\n      node {\n        id\n        ...CirclesItem_circle\n        isCircleUsableByMembers\n        owner {\n          id\n        }\n        coOwners {\n          id\n        }\n        members {\n          id\n        }\n        termsOfUses {\n          id\n          name\n          link\n          content\n          acceptedBy {\n            user {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  me {\n    id\n    profileType\n    basicCircleSavedFiltersCreated\n    savedCircleFilters {\n      id\n      filterName\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    defaultSavedCircleFilter {\n      id\n      filterName\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      circleType\n      memberType\n    }\n    subAccounts {\n      id\n    }\n    circles(last: 100, filter: $myCirclesFilter) @include(if: $queryMain) {\n      count\n      edges @include(if: $queryMyCircles) {\n        node {\n          ...CirclesItem_circle\n          id\n          owner {\n            id\n            avatar\n            pseudo\n          }\n          isCircleAccessibleFromUrl\n          mode\n          type\n          coOwners {\n            id\n          }\n          members {\n            id\n          }\n          memberParents {\n            id\n          }\n        }\n      }\n    }\n  circlesUserIsIn(last: 100, filter: $filter) @include(if: $queryMain) {\n      count\n      edges @include(if: $queryCirclesImIn) {\n        node {\n          ...CirclesItem_circle\n          isCircleAccessibleFromUrl\n          isCircleUsableByMembers\n          id\n        }\n      }\n    }\n  circlesSuperUser(last: 100, filter: $filter) @include(if: $queryMain) {\n      count\n      edges @include(if: $queryCirclesSuperUser) {\n        node {\n          ...CirclesItem_circle\n          isCircleAccessibleFromUrl\n          id\n        }\n      }\n    }\n  circlesFromClub(last: 100, filter: $filter) @include(if: $queryMain) {\n      count\n      edges @include(if: $queryCirclesSuperUser) {\n        node {\n          ...CirclesItem_circle\n          isCircleAccessibleFromUrl\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment CirclesDetailPage_viewer on Viewer {\n  id\n  ...ChatDetailPageContainer_viewer\n  me {\n    id\n    pseudo\n    profileType\n    isSubAccount\n    ...AddMember_user\n    ...AddChild_user\n  }\n  chat {\n    id\n  }\n  circle: circle {\n    id\n    publicShortCode\n    name\n    mode\n    type\n    isCircleUpdatableByMembers\n    isCircleAccessibleFromUrl\n    isCircleUsableByMembers\n    sport {\n      sport {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n      }\n      levels {\n        EN {\n          name\n        }\n        FR {\n          name\n        }\n        id\n      }\n    }\n    address {\n      address\n      zip\n      city\n      country\n    }\n    circlePreferences {\n      isChildrenCircle\n    }\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    coOwners {\n      id\n    }\n    memberCount\n    members {\n      id\n      pseudo\n      email\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n    }\n    memberParents {\n      id\n      pseudo\n      avatar\n      lastConnexionDate\n    }\n    askedInformation {\n      id\n      name\n      type\n      filledByOwner\n    }\n    membersInformation {\n      id\n      information\n      user {\n        id\n      }\n      value\n    }\n    termsOfUses {\n      id\n      name\n      link\n      content\n      acceptedBy {\n        user {\n          id\n        }\n      }\n    }\n    ...CircleOptions_circle\n    ...CircleDetails_circle\n  }\n  ...CircleOptions_viewer\n  ...AddMember_viewer\n  ...Subscribe_viewer\n  ...AddChild_viewer\n}\n\nfragment Stepper_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    mangoId\n    pseudo\n    tutorialSteps {\n      createFormStep\n      setupMembersSubscriptionStep\n      fulfilProfileStep\n      addOfficialDocumentsStep\n      createSubAccountStep\n      shareAccessStep\n      createCircleStep\n      organizeStep\n      setupStatisticsStep\n      joinAPrivateCircleStep\n      joinAPublicCircleStep\n      giveAvailabilitiesStep\n      bookSportunityStep\n    }\n    subAccounts {\n      id\n    }\n    isSubAccount\n  }\n}\n\nfragment CirclesItem_circle on Circle {\n  id\n  name\n  memberCount\n  mode\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  type\n  owner {\n    id\n    avatar\n    pseudo\n  }\n  coOwners {\n    id\n  }\n  members {\n    id\n  }\n  memberParents {\n    id\n  }\n}\n\nfragment ChatDetailPageContainer_viewer on Viewer {\n  ...ChatDetailPage_viewer\n}\n\nfragment AddMember_user on User {\n  id\n  email\n  pseudo\n  profileType\n}\n\nfragment AddChild_user on User {\n  id\n  email\n  pseudo\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment CircleOptions_circle on Circle {\n  id\n  description\n  mode\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  sport {\n    sport {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n  address {\n    address\n    zip\n    city\n    country\n  }\n  circlePreferences {\n    isChildrenCircle\n  }\n  askedInformation {\n    id\n    name\n    type\n    filledByOwner\n  }\n  membersInformation {\n    id\n    information\n    user {\n      id\n    }\n    value\n  }\n}\n\nfragment CircleDetails_circle on Circle {\n  id\n  description\n  type\n  mode\n  isCircleUsableByMembers\n  publicShortCode\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment CircleOptions_viewer on Viewer {\n  id\n  ...AdminMembersInformation_viewer\n  ...CircleSport_viewer\n}\n\nfragment AddMember_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n}\n\nfragment Subscribe_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment AddChild_viewer on Viewer {\n  ...AddChildModal_viewer\n}\n\nfragment AddChildModal_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment AdminMembersInformation_viewer on Viewer {\n  id\n}\n\nfragment CircleSport_viewer on Viewer {\n  id\n  me {\n    id\n    sports {\n      ...SportList_sports\n    }\n  }\n}\n\nfragment SportList_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n    logo\n    positions {\n      id\n      EN\n      FR\n    }\n    certificates {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        description\n        skillLevel\n      }\n      FR {\n        name\n        description\n        skillLevel\n      }\n    }\n  }\n  positions {\n    id\n    EN\n    FR\n  }\n  certificates {\n    validation\n    certificate {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment ChatDetailPage_viewer on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CirclesPageViewQuery",
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
            "name": "CirclesPageView_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleNumber",
                "variableName": "circleNumber",
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
                "name": "myCirclesFilter",
                "variableName": "myCirclesFilter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "publicFilter",
                "variableName": "publicFilter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCirclesImIn",
                "variableName": "queryCirclesImIn",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCirclesSuperUser",
                "variableName": "queryCirclesSuperUser",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryMain",
                "variableName": "queryMain",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryMyCircles",
                "variableName": "queryMyCircles",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryPublic",
                "variableName": "queryPublic",
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
    "name": "CirclesPageViewQuery",
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
                    "selections": [
                      v1,
                      v5,
                      v6,
                      v7,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": v8
                      },
                      v13
                    ]
                  },
                  v7,
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
                        "selections": v8
                      }
                    ]
                  },
                  v13
                ]
              },
              v1,
              v14,
              v15,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              v16,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v18
              },
              v17,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phoneNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "basicCircleSavedFiltersCreated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedCircleFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": true,
                "selections": [
                  v1,
                  v19,
                  v22,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleFilterSport",
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
                          v23,
                          v13
                        ]
                      },
                      v13
                    ]
                  },
                  v24,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "memberTypes",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "modes",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owners",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v1,
                      v17
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedCircleFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": false,
                "selections": [
                  v1,
                  v19,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleFilterSport",
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
                          v23,
                          v6,
                          v13
                        ]
                      },
                      v13
                    ]
                  },
                  v22,
                  v24,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "memberType",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "queryMain",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circles",
                    "storageKey": null,
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "filter",
                        "variableName": "myCirclesFilter",
                        "type": "CirclesFilter"
                      },
                      v25
                    ],
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": [
                      v26,
                      {
                        "kind": "Condition",
                        "passingValue": true,
                        "condition": "queryMyCircles",
                        "selections": v37
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesUserIsIn",
                    "storageKey": null,
                    "args": v38,
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": [
                      v26,
                      {
                        "kind": "Condition",
                        "passingValue": true,
                        "condition": "queryCirclesImIn",
                        "selections": v37
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesSuperUser",
                    "storageKey": null,
                    "args": v38,
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": v39
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesFromClub",
                    "storageKey": null,
                    "args": v38,
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": v39
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": null,
            "concreteType": "Chat",
            "plural": false,
            "selections": v33
          },
          {
            "kind": "LinkedField",
            "alias": "circle",
            "name": "circle",
            "storageKey": null,
            "args": null,
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
              v1,
              v9,
              v29,
              v31,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isCircleUpdatableByMembers",
                "args": null,
                "storageKey": null
              },
              v27,
              v30,
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
                      v1,
                      v23,
                      v6
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
                        "selections": v40
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v40
                      },
                      v1
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
                      v20,
                      v21
                    ]
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
              v41,
              v34,
              v28,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v17,
                  v16,
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
                  v14,
                  v42
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
                  v1,
                  v17,
                  v14,
                  v42
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
                  v1,
                  v9,
                  v31,
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
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "information",
                    "args": null,
                    "storageKey": null
                  },
                  v43,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v44,
              v10
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "filterSport",
            "name": "sport",
            "storageKey": null,
            "args": null,
            "concreteType": "Sport",
            "plural": false,
            "selections": [
              v1,
              v23,
              v6,
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
                    "selections": v45
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v45
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "selectedCircle",
            "name": "circle",
            "storageKey": null,
            "args": null,
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              v1,
              v9,
              v41,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v17,
                  v14,
                  v15
                ]
              },
              v28
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryMain",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "publicFilter",
                    "type": "CirclesFilter"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "circleNumber",
                    "type": "Int"
                  }
                ],
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  v26,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "Condition",
                    "passingValue": true,
                    "condition": "queryPublic",
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
                              v31,
                              v1,
                              v28,
                              v29,
                              v30,
                              v27,
                              v9,
                              v32,
                              v34,
                              v35,
                              v36,
                              v44
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
(node/*: any*/).hash = '6734065970c8ba374edc56eb14c4ec68';
module.exports = node;

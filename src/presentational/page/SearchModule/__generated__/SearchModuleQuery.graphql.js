/**
 * @flow
 * @relayHash af176399f5fd5dc653fdd23e9fb24b3d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchModule_viewer$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityStatus = "AskedCoOrganizer" | "Available" | "Booked" | "Cancelled" | "CoOrganizer" | "Declined" | "Invited" | "MySportunities" | "Organized" | "Past" | "Survey" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
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
export type IntIntervalInput = {
  from: number,
  to: number,
};
export type StringIntervalInput = {
  from: string,
  to: string,
};
export type SearchModuleQueryVariables = {|
  queryMain: boolean,
  queryUsers: boolean,
  text?: ?string,
  firstUsers?: ?number,
  userType?: ?UserProfileType,
  queryCircles: boolean,
  circlesFilter?: ?CirclesFilter,
  firstCircles?: ?number,
  querySportunities: boolean,
  sportunityFilter?: ?Filter,
  firstSportunities?: ?number,
  circleId?: ?string,
  queryOpponents: boolean,
  sportId?: ?string,
  superToken?: ?string,
|};
export type SearchModuleQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SearchModule_viewer$ref
  |}
|};
export type SearchModuleQuery = {|
  variables: SearchModuleQueryVariables,
  response: SearchModuleQueryResponse,
|};
*/


/*
query SearchModuleQuery(
  $queryMain: Boolean!
  $queryUsers: Boolean!
  $text: String
  $firstUsers: Int
  $userType: UserProfileType
  $queryCircles: Boolean!
  $circlesFilter: CirclesFilter
  $firstCircles: Int
  $querySportunities: Boolean!
  $sportunityFilter: Filter
  $firstSportunities: Int
  $circleId: ID
  $queryOpponents: Boolean!
  $sportId: String
  $superToken: String
) {
  viewer {
    ...SearchModule_viewer_3piPK0
    id
  }
}

fragment SearchModule_viewer_3piPK0 on Viewer {
  id
  ...SportunityItem_viewer
  ...FilterDetailSports_viewer
  me {
    id
    profileType
    ...SportunityItem_user
  }
  superMe(superToken: $superToken) @include(if: $queryMain) {
    id
    subAccounts {
      id
    }
  }
  circles(filter: $circlesFilter, first: $firstCircles) @include(if: $queryMain) {
    count
    edges @include(if: $queryCircles) {
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
          pseudo
          avatar
          profileType
        }
        memberParents {
          id
        }
      }
    }
  }
  users(pseudo: $text, first: $firstUsers, userType: $userType) @include(if: $queryMain) {
    count
    edges @include(if: $queryUsers) {
      node {
        id
        profileType
        ...UserCard_user
      }
    }
  }
  sportunities(filter: $sportunityFilter, first: $firstSportunities) @include(if: $queryMain) {
    count
    edges @include(if: $querySportunities) {
      node {
        id
        ...SportunityItem_sportunity
      }
    }
  }
  opponents(sportId: $sportId, pseudo: $text, first: $firstUsers) @include(if: $queryMain) {
    count
    edges @include(if: $queryOpponents) {
      node {
        id
        avatar
        pseudo
      }
    }
  }
  selectedCircle: circle(id: $circleId) {
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

fragment UserCard_user on User {
  id
  pseudo
  firstName
  lastName
  avatar
  circlesUserIsIn(first: 3) {
    count
    edges {
      node {
        id
        name
      }
    }
  }
  sports {
    sport {
      id
      logo
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

fragment TopContent_user on User {
  id
}

fragment BottomContent_user on User {
  id
}

fragment TopContent_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryMain",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryUsers",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "text",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "firstUsers",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userType",
    "type": "UserProfileType",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCircles",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circlesFilter",
    "type": "CirclesFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "firstCircles",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "querySportunities",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityFilter",
    "type": "Filter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "firstSportunities",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryOpponents",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "superToken",
    "type": "String",
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
v4 = {
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = [
  v6
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v11 = [
  v1,
  v9,
  v10
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v1,
    v9,
    v10,
    v8
  ]
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v14 = [
  v1
],
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v16 = [
  v1,
  v10,
  v9
],
v17 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "firstUsers",
  "type": "Int"
},
v18 = {
  "kind": "Variable",
  "name": "pseudo",
  "variableName": "text",
  "type": "String"
},
v19 = [
  v1,
  v6
],
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v24 = [
  v1,
  v4
],
v25 = [
  v6,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchModuleQuery",
  "id": null,
  "text": "query SearchModuleQuery(\n  $queryMain: Boolean!\n  $queryUsers: Boolean!\n  $text: String\n  $firstUsers: Int\n  $userType: UserProfileType\n  $queryCircles: Boolean!\n  $circlesFilter: CirclesFilter\n  $firstCircles: Int\n  $querySportunities: Boolean!\n  $sportunityFilter: Filter\n  $firstSportunities: Int\n  $circleId: ID\n  $queryOpponents: Boolean!\n  $sportId: String\n  $superToken: String\n) {\n  viewer {\n    ...SearchModule_viewer_3piPK0\n    id\n  }\n}\n\nfragment SearchModule_viewer_3piPK0 on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  superMe(superToken: $superToken) @include(if: $queryMain) {\n    id\n    subAccounts {\n      id\n    }\n  }\n  circles(filter: $circlesFilter, first: $firstCircles) @include(if: $queryMain) {\n    count\n    edges @include(if: $queryCircles) {\n      node {\n        ...CirclesItem_circle\n        id\n        owner {\n          id\n          avatar\n          pseudo\n        }\n        isCircleAccessibleFromUrl\n        mode\n        type\n        coOwners {\n          id\n        }\n        members {\n          id\n          pseudo\n          avatar\n          profileType\n        }\n        memberParents {\n          id\n        }\n      }\n    }\n  }\n  users(pseudo: $text, first: $firstUsers, userType: $userType) @include(if: $queryMain) {\n    count\n    edges @include(if: $queryUsers) {\n      node {\n        id\n        profileType\n        ...UserCard_user\n      }\n    }\n  }\n  sportunities(filter: $sportunityFilter, first: $firstSportunities) @include(if: $queryMain) {\n    count\n    edges @include(if: $querySportunities) {\n      node {\n        id\n        ...SportunityItem_sportunity\n      }\n    }\n  }\n  opponents(sportId: $sportId, pseudo: $text, first: $firstUsers) @include(if: $queryMain) {\n    count\n    edges @include(if: $queryOpponents) {\n      node {\n        id\n        avatar\n        pseudo\n      }\n    }\n  }\n  selectedCircle: circle(id: $circleId) {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment CirclesItem_circle on Circle {\n  id\n  name\n  memberCount\n  mode\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  type\n  owner {\n    id\n    avatar\n    pseudo\n  }\n  coOwners {\n    id\n  }\n  members {\n    id\n  }\n  memberParents {\n    id\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  pseudo\n  firstName\n  lastName\n  avatar\n  circlesUserIsIn(first: 3) {\n    count\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  sports {\n    sport {\n      id\n      logo\n    }\n  }\n}\n\nfragment SportunityItem_sportunity on Sportunity {\n  id\n  title\n  status\n  cancel_date\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  ...TopContent_sportunity\n  ...BottomContent_sportunity\n}\n\nfragment TopContent_sportunity on Sportunity {\n  id\n  title\n  status\n  beginning_date\n  price {\n    currency\n    cents\n  }\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n      areStatisticsActivated\n      statisticPreferences {\n        private\n      }\n    }\n    isAdmin\n    id\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  address {\n    address\n    country\n    city\n    zip\n    position {\n      lat\n      lng\n    }\n  }\n  participantRange {\n    from\n    to\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  sport {\n    sport {\n      logo\n      id\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment BottomContent_sportunity on Sportunity {\n  nbShares\n  status\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  participants {\n    id\n  }\n  waiting {\n    id\n  }\n  willing {\n    id\n  }\n  canceling {\n    canceling_user {\n      id\n    }\n    status\n    cancelation_date\n  }\n  participantRange {\n    from\n    to\n  }\n  organizers {\n    isAdmin\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    id\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchModuleQuery",
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
            "name": "SearchModule_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "circlesFilter",
                "variableName": "circlesFilter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "firstCircles",
                "variableName": "firstCircles",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "firstSportunities",
                "variableName": "firstSportunities",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "firstUsers",
                "variableName": "firstUsers",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCircles",
                "variableName": "queryCircles",
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
                "name": "queryOpponents",
                "variableName": "queryOpponents",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySportunities",
                "variableName": "querySportunities",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryUsers",
                "variableName": "queryUsers",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportId",
                "variableName": "sportId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityFilter",
                "variableName": "sportunityFilter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "superToken",
                "variableName": "superToken",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "text",
                "variableName": "text",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "userType",
                "variableName": "userType",
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
    "name": "SearchModuleQuery",
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
            "alias": "filterSport",
            "name": "sport",
            "storageKey": null,
            "args": null,
            "concreteType": "Sport",
            "plural": false,
            "selections": [
              v1,
              v4,
              v5,
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
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v7
                  }
                ]
              }
            ]
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
              v1,
              v8
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "selectedCircle",
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
              v1,
              v6,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": v11
              },
              v12,
              v13
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
                "name": "superMe",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "superToken",
                    "variableName": "superToken",
                    "type": "String"
                  }
                ],
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubAccounts",
                    "plural": true,
                    "selections": v14
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "circlesFilter",
                    "type": "CirclesFilter"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "firstCircles",
                    "type": "Int"
                  }
                ],
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  v15,
                  {
                    "kind": "Condition",
                    "passingValue": true,
                    "condition": "queryCircles",
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
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "isCircleAccessibleFromUrl",
                                "args": null,
                                "storageKey": null
                              },
                              v1,
                              v13,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "mode",
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
                              v6,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "type",
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
                                "selections": v16
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "coOwners",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": true,
                                "selections": v14
                              },
                              v12,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "memberParents",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": true,
                                "selections": v14
                              }
                            ]
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
                "name": "users",
                "storageKey": null,
                "args": [
                  v17,
                  v18,
                  {
                    "kind": "Variable",
                    "name": "userType",
                    "variableName": "userType",
                    "type": "UserProfileType"
                  }
                ],
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  v15,
                  {
                    "kind": "Condition",
                    "passingValue": true,
                    "condition": "queryUsers",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "UserEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v1,
                              v8,
                              v9,
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
                              v10,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "circlesUserIsIn",
                                "storageKey": "circlesUserIsIn(first:3)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 3,
                                    "type": "Int"
                                  }
                                ],
                                "concreteType": "CircleConnection",
                                "plural": false,
                                "selections": [
                                  v15,
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
                                        "selections": v19
                                      }
                                    ]
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
                                    "name": "sport",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Sport",
                                    "plural": false,
                                    "selections": [
                                      v1,
                                      v5
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunities",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "sportunityFilter",
                    "type": "Filter"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "firstSportunities",
                    "type": "Int"
                  }
                ],
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": [
                  v15,
                  {
                    "kind": "Condition",
                    "passingValue": true,
                    "condition": "querySportunities",
                    "selections": [
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
                                "selections": v19
                              },
                              v1,
                              v20,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "cancel_date",
                                "args": null,
                                "storageKey": null
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
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "lookingForAnOpponent",
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
                                        "selections": v11
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
                                                    "selections": v14
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
                                      v9,
                                      v10,
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
                                          v3,
                                          v2,
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
                                          },
                                          v1
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
                                  v1
                                ]
                              },
                              v21,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "price",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Price",
                                "plural": false,
                                "selections": [
                                  v22,
                                  v23
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
                                      v21,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "ending_date",
                                        "args": null,
                                        "storageKey": null
                                      },
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
                                            "selections": [
                                              v1,
                                              v9
                                            ]
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "answer",
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
                                "name": "paymentStatus",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SportunityPaymentStatus",
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
                                    "selections": v14
                                  },
                                  v20,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "price",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Price",
                                    "plural": false,
                                    "selections": [
                                      v23,
                                      v22
                                    ]
                                  },
                                  v1
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "venue",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Venue",
                                "plural": false,
                                "selections": v19
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "title",
                                "args": null,
                                "storageKey": null
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
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "participantRange",
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
                                "name": "sportunityType",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SportunityType",
                                "plural": false,
                                "selections": v24
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "sportunityTypeStatus",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SportunityTypeStatus",
                                "plural": false,
                                "selections": v24
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
                                      v5,
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
                                        "selections": v25
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "FR",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "SportLevel",
                                        "plural": false,
                                        "selections": v25
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
                                "selections": v14
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "waiting",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": true,
                                "selections": v14
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "willing",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": true,
                                "selections": v14
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
                                    "selections": v14
                                  },
                                  v20,
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "opponents",
                "storageKey": null,
                "args": [
                  v17,
                  v18,
                  {
                    "kind": "Variable",
                    "name": "sportId",
                    "variableName": "sportId",
                    "type": "String"
                  }
                ],
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  v15,
                  {
                    "kind": "Condition",
                    "passingValue": true,
                    "condition": "queryOpponents",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "UserEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v16
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
(node/*: any*/).hash = '60799ff8c93988830d4bf9fc1c8bfe41';
module.exports = node;

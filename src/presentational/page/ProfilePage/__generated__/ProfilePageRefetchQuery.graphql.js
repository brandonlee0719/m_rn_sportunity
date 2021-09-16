/**
 * @flow
 * @relayHash 1e8bb9f88473e4ffdddf1ccc488ebc11
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProfilePage_viewer$ref = any;
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
export type ProfilePageRefetchQueryVariables = {|
  count?: ?number,
  userId: string,
  querySportunities: boolean,
  queryStats: boolean,
  sportunityFilter?: ?Filter,
|};
export type ProfilePageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ProfilePage_viewer$ref
  |}
|};
export type ProfilePageRefetchQuery = {|
  variables: ProfilePageRefetchQueryVariables,
  response: ProfilePageRefetchQueryResponse,
|};
*/


/*
query ProfilePageRefetchQuery(
  $count: Int
  $userId: String!
  $querySportunities: Boolean!
  $queryStats: Boolean!
  $sportunityFilter: Filter
) {
  viewer {
    ...ProfilePage_viewer_2enCln
    id
  }
}

fragment ProfilePage_viewer_2enCln on Viewer {
  id
  ...SportunityListView_viewer
  ...StatisticsTab_viewer
  ...Pseudo_viewer
  sportunities(first: $count, filter: $sportunityFilter, userId: $userId, orderBy: BEGINNING_DATE_DESC) @include(if: $querySportunities) {
    ...SportunityListView_sportunities
  }
  me {
    ...StatisticsTab_user_2e1WFo
    ...SportunityListView_user
    id
    pseudo
    avatar
    description
    birthday
    hideMyAge
    sex
    publicAddress {
      city
      country
    }
    languages {
      ...Languages_languages
      id
    }
    sports {
      ...SportsList_sports
    }
    feedbacks {
      ...FeedbacksList_feedbacks
    }
    sportunityNumber
    followers {
      id
    }
    calendar {
      users {
        id
      }
      sportunities(last: 1000) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}

fragment SportunityListView_viewer on Viewer {
  id
  ...SportunityItem_viewer
}

fragment StatisticsTab_viewer on Viewer {
  ...OrganizerStatistics_viewer
  ...ParticipantStatistics_viewer
}

fragment Pseudo_viewer on Viewer {
  me {
    id
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

fragment StatisticsTab_user_2e1WFo on User {
  ...OrganizerStatistics_user
  ...ParticipantStatistics_user
  id
  pseudo
  userStatistics @include(if: $queryStats) {
    hasData
    percentageOfOrganized
    globalNote
    averageTime {
      FR
      EN
      id
    }
    steps {
      step {
        FR
        EN
        id
      }
      value
    }
    membersUserParticipatesWith {
      user {
        id
        pseudo
        avatar
      }
      number
    }
    numberOfParticipated
    averageNumberOfParticipatedWeek
    averageNumberOfParticipatedMonth
    averageNumberOfParticipatedYear
  }
}

fragment SportunityListView_user on User {
  id
  profileType
  description
  ...SportunityItem_user
}

fragment Languages_languages on Language {
  id
  code
  name
}

fragment SportsList_sports on SportDescriptor {
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

fragment FeedbacksList_feedbacks on Feedbacks {
  count
  averageRating
  feedbacksList(first: 10) {
    edges {
      node {
        id
        text
        rating
        createdAt
        author {
          id
          pseudo
          avatar
        }
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

fragment OrganizerStatistics_user on User {
  id
  pseudo
  circles(first: 10) {
    edges {
      node {
        id
        name
        memberCount
      }
    }
  }
  defaultStatisticFilter {
    id
    name
    date_begin
    date_end
    circleList(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
  statisticFilters {
    id
    name
    date_begin
    date_end
    circleList(first: 10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}

fragment ParticipantStatistics_user on User {
  id
  pseudo
  circlesUserIsIn(first: 20) {
    edges {
      node {
        ...CirclesItem_circle
        id
        name
        memberCount
        isCircleAccessibleFromUrl
        owner {
          id
          profileType
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
    }
    count
  }
  userStatistics @include(if: $queryStats) {
    hasData
    percentageOfOrganized
    globalNote
    averageTime {
      FR
      EN
      id
    }
    steps {
      step {
        FR
        EN
        id
      }
      value
    }
    membersUserParticipatesWith {
      user {
        id
        pseudo
        avatar
      }
      number
    }
    numberOfParticipated
    averageNumberOfParticipatedWeek
    averageNumberOfParticipatedMonth
    averageNumberOfParticipatedYear
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

fragment OrganizerStatistics_viewer on Viewer {
  id
  me {
    id
  }
}

fragment ParticipantStatistics_viewer on Viewer {
  id
  me {
    id
  }
}

fragment SportunityItem_viewer on Viewer {
  ...TopContent_viewer
}

fragment TopContent_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
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
    "name": "queryStats",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityFilter",
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
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
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
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date_begin",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date_end",
  "args": null,
  "storageKey": null
},
v7 = [
  v1
],
v8 = [
  v1,
  v3
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v7
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v19 = [
  v1,
  v17,
  v18
],
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v19
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v19
},
v23 = [
  v1,
  v20
],
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v25 = [
  v3,
  v14,
  v24
],
v26 = {
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
},
v27 = [
  v1,
  v10,
  v9
],
v28 = [
  v18,
  v17,
  v1
],
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v29,
    v30
  ]
},
v32 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v7
},
v33 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v35 = [
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
v36 = [
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
      v17,
      v18,
      v1
    ]
  }
],
v37 = [
  v3,
  v24
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProfilePageRefetchQuery",
  "id": null,
  "text": "query ProfilePageRefetchQuery(\n  $count: Int\n  $userId: String!\n  $querySportunities: Boolean!\n  $queryStats: Boolean!\n  $sportunityFilter: Filter\n) {\n  viewer {\n    ...ProfilePage_viewer_2enCln\n    id\n  }\n}\n\nfragment ProfilePage_viewer_2enCln on Viewer {\n  id\n  ...SportunityListView_viewer\n  ...StatisticsTab_viewer\n  ...Pseudo_viewer\n  sportunities(first: $count, filter: $sportunityFilter, userId: $userId, orderBy: BEGINNING_DATE_DESC) @include(if: $querySportunities) {\n    ...SportunityListView_sportunities\n  }\n  me {\n    ...StatisticsTab_user_2e1WFo\n    ...SportunityListView_user\n    id\n    pseudo\n    avatar\n    description\n    birthday\n    hideMyAge\n    sex\n    publicAddress {\n      city\n      country\n    }\n    languages {\n      ...Languages_languages\n      id\n    }\n    sports {\n      ...SportsList_sports\n    }\n    feedbacks {\n      ...FeedbacksList_feedbacks\n    }\n    sportunityNumber\n    followers {\n      id\n    }\n    calendar {\n      users {\n        id\n      }\n      sportunities(last: 1000) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SportunityListView_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n}\n\nfragment StatisticsTab_viewer on Viewer {\n  ...OrganizerStatistics_viewer\n  ...ParticipantStatistics_viewer\n}\n\nfragment Pseudo_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment SportunityListView_sportunities on SportunityConnection {\n  count\n  edges {\n    node {\n      id\n      status\n      price {\n        cents\n        currency\n      }\n      invited {\n        user {\n          id\n        }\n      }\n      paymentStatus {\n        user {\n          id\n        }\n        status\n        price {\n          cents\n          currency\n        }\n        id\n      }\n      survey {\n        isSurveyTransformed\n        surveyDates {\n          answers {\n            user {\n              id\n            }\n          }\n        }\n      }\n      game_information {\n        opponent {\n          lookingForAnOpponent\n          invitedOpponents(last: 5) {\n            edges {\n              node {\n                id\n                members {\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n      organizers {\n        organizer {\n          id\n          pseudo\n        }\n        isAdmin\n        role\n        price {\n          currency\n          cents\n        }\n        secondaryOrganizerType {\n          id\n          name {\n            id\n            EN\n            FR\n          }\n        }\n        customSecondaryOrganizerType\n        permissions {\n          chatAccess {\n            view\n            edit\n          }\n          memberAccess {\n            view\n            edit\n          }\n          carPoolingAccess {\n            view\n            edit\n          }\n          imageAccess {\n            view\n            edit\n          }\n          detailsAccess {\n            view\n            edit\n          }\n          compositionAccess {\n            view\n            edit\n          }\n        }\n        id\n      }\n      ...SportunityItem_sportunity\n    }\n  }\n}\n\nfragment StatisticsTab_user_2e1WFo on User {\n  ...OrganizerStatistics_user\n  ...ParticipantStatistics_user\n  id\n  pseudo\n  userStatistics @include(if: $queryStats) {\n    hasData\n    percentageOfOrganized\n    globalNote\n    averageTime {\n      FR\n      EN\n      id\n    }\n    steps {\n      step {\n        FR\n        EN\n        id\n      }\n      value\n    }\n    membersUserParticipatesWith {\n      user {\n        id\n        pseudo\n        avatar\n      }\n      number\n    }\n    numberOfParticipated\n    averageNumberOfParticipatedWeek\n    averageNumberOfParticipatedMonth\n    averageNumberOfParticipatedYear\n  }\n}\n\nfragment SportunityListView_user on User {\n  id\n  profileType\n  description\n  ...SportunityItem_user\n}\n\nfragment Languages_languages on Language {\n  id\n  code\n  name\n}\n\nfragment SportsList_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n    logo\n    positions {\n      id\n      EN\n      FR\n    }\n    certificates {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        description\n        skillLevel\n      }\n      FR {\n        name\n        description\n        skillLevel\n      }\n    }\n  }\n  positions {\n    id\n    EN\n    FR\n  }\n  certificates {\n    validation\n    certificate {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment FeedbacksList_feedbacks on Feedbacks {\n  count\n  averageRating\n  feedbacksList(first: 10) {\n    edges {\n      node {\n        id\n        text\n        rating\n        createdAt\n        author {\n          id\n          pseudo\n          avatar\n        }\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment OrganizerStatistics_user on User {\n  id\n  pseudo\n  circles(first: 10) {\n    edges {\n      node {\n        id\n        name\n        memberCount\n      }\n    }\n  }\n  defaultStatisticFilter {\n    id\n    name\n    date_begin\n    date_end\n    circleList(first: 10) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n  statisticFilters {\n    id\n    name\n    date_begin\n    date_end\n    circleList(first: 10) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment ParticipantStatistics_user on User {\n  id\n  pseudo\n  circlesUserIsIn(first: 20) {\n    edges {\n      node {\n        ...CirclesItem_circle\n        id\n        name\n        memberCount\n        isCircleAccessibleFromUrl\n        owner {\n          id\n          profileType\n          pseudo\n        }\n        coOwners {\n          id\n        }\n        members {\n          id\n        }\n        memberParents {\n          id\n        }\n      }\n    }\n    count\n  }\n  userStatistics @include(if: $queryStats) {\n    hasData\n    percentageOfOrganized\n    globalNote\n    averageTime {\n      FR\n      EN\n      id\n    }\n    steps {\n      step {\n        FR\n        EN\n        id\n      }\n      value\n    }\n    membersUserParticipatesWith {\n      user {\n        id\n        pseudo\n        avatar\n      }\n      number\n    }\n    numberOfParticipated\n    averageNumberOfParticipatedWeek\n    averageNumberOfParticipatedMonth\n    averageNumberOfParticipatedYear\n  }\n}\n\nfragment CirclesItem_circle on Circle {\n  id\n  name\n  memberCount\n  mode\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  type\n  owner {\n    id\n    avatar\n    pseudo\n  }\n  coOwners {\n    id\n  }\n  members {\n    id\n  }\n  memberParents {\n    id\n  }\n}\n\nfragment SportunityItem_sportunity on Sportunity {\n  id\n  title\n  status\n  cancel_date\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    id\n  }\n  ...TopContent_sportunity\n  ...BottomContent_sportunity\n}\n\nfragment TopContent_sportunity on Sportunity {\n  id\n  title\n  status\n  beginning_date\n  price {\n    currency\n    cents\n  }\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n      areStatisticsActivated\n      statisticPreferences {\n        private\n      }\n    }\n    isAdmin\n    id\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  address {\n    address\n    country\n    city\n    zip\n    position {\n      lat\n      lng\n    }\n  }\n  participantRange {\n    from\n    to\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  sport {\n    sport {\n      logo\n      id\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment BottomContent_sportunity on Sportunity {\n  nbShares\n  status\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      answers {\n        user {\n          id\n          pseudo\n        }\n        answer\n      }\n    }\n  }\n  participants {\n    id\n  }\n  waiting {\n    id\n  }\n  willing {\n    id\n  }\n  canceling {\n    canceling_user {\n      id\n    }\n    status\n    cancelation_date\n  }\n  participantRange {\n    from\n    to\n  }\n  organizers {\n    isAdmin\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    id\n  }\n  game_information {\n    opponent {\n      organizerPseudo\n      unknownOpponent\n      lookingForAnOpponent\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment OrganizerStatistics_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment ParticipantStatistics_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProfilePageRefetchQuery",
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
            "name": "ProfilePage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
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
                "name": "queryStats",
                "variableName": "queryStats",
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
                "name": "userId",
                "variableName": "userId",
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
    "name": "ProfilePageRefetchQuery",
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
                "name": "birthday",
                "args": null,
                "storageKey": null
              },
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(first:10)",
                "args": v2,
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
                          v3,
                          v4
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultStatisticFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "StatisticFilter",
                "plural": false,
                "selections": [
                  v1,
                  v3,
                  v5,
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circleList",
                    "storageKey": "circleList(first:10)",
                    "args": v2,
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
                            "selections": v7
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
                "name": "statisticFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "StatisticFilter",
                "plural": true,
                "selections": [
                  v1,
                  v3,
                  v5,
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circleList",
                    "storageKey": "circleList(first:10)",
                    "args": v2,
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
                            "selections": v8
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
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(first:20)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleAccessibleFromUrl",
                            "args": null,
                            "storageKey": null
                          },
                          v1,
                          v4,
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
                          v3,
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
                            "selections": [
                              v1,
                              v9,
                              v10,
                              v11
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
                            "selections": v7
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
                            "selections": v7
                          }
                        ]
                      }
                    ]
                  },
                  v13
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "followers",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v7
              },
              v11,
              v14,
              v9,
              v10,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hideMyAge",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sex",
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
                  v15,
                  v16
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "languages",
                "storageKey": null,
                "args": null,
                "concreteType": "Language",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "code",
                    "args": null,
                    "storageKey": null
                  },
                  v3
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
                      v20,
                      v21,
                      v22,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": v23
                      },
                      v26
                    ]
                  },
                  v22,
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
                        "selections": v23
                      }
                    ]
                  },
                  v26
                ]
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
                  v13,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "averageRating",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "feedbacksList",
                    "storageKey": "feedbacksList(first:10)",
                    "args": v2,
                    "concreteType": "FeedbackConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FeedbackEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedback",
                            "plural": false,
                            "selections": [
                              v1,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "text",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "rating",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "createdAt",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "author",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": v27
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
                "kind": "ScalarField",
                "alias": null,
                "name": "sportunityNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "calendar",
                "storageKey": null,
                "args": null,
                "concreteType": "Calendar",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "users",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunities",
                    "storageKey": "sportunities(last:1000)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 1000,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "SportunityConnection",
                    "plural": false,
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
                            "selections": v7
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "queryStats",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "userStatistics",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserStatistics",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasData",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "percentageOfOrganized",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "globalNote",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "averageTime",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": v28
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "steps",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "UserStatisticsSteps",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "step",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": v28
                          },
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
                        "name": "membersUserParticipatesWith",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MembersUserParticipatesWith",
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
                            "selections": v27
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "number",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "numberOfParticipated",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "averageNumberOfParticipatedWeek",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "averageNumberOfParticipatedMonth",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "averageNumberOfParticipatedYear",
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
            "kind": "Condition",
            "passingValue": true,
            "condition": "querySportunities",
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
                    "variableName": "sportunityFilter",
                    "type": "Filter"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "BEGINNING_DATE_DESC",
                    "type": "Sportunities_Order"
                  },
                  {
                    "kind": "Variable",
                    "name": "userId",
                    "variableName": "userId",
                    "type": "String"
                  }
                ],
                "concreteType": "SportunityConnection",
                "plural": false,
                "selections": [
                  v13,
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
                            "selections": v8
                          },
                          v1,
                          v31,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "invited",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Invited",
                            "plural": true,
                            "selections": [
                              v32
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
                              v32,
                              v33,
                              v31,
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
                                        "selections": [
                                          v1,
                                          v10
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
                                  },
                                  v34,
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
                                              v12
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
                                    "selections": v27
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
                                  v10,
                                  v9,
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
                                  v30,
                                  v29
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
                                      v17,
                                      v18,
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
                                    "selections": v35
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "memberAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersMemberAccess",
                                    "plural": false,
                                    "selections": v35
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "carPoolingAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersCarPoolingAccess",
                                    "plural": false,
                                    "selections": v35
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "imageAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersImageAccess",
                                    "plural": false,
                                    "selections": v35
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "detailsAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersDetailsAccess",
                                    "plural": false,
                                    "selections": v35
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "compositionAccess",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "coOrganizersCompositionAccess",
                                    "plural": false,
                                    "selections": v35
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
                          v34,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "venue",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Venue",
                            "plural": false,
                            "selections": v8
                          },
                          v33,
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
                              v16,
                              v15,
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
                            "selections": v36
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunityTypeStatus",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportunityTypeStatus",
                            "plural": false,
                            "selections": v36
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
                                  v21,
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
                                    "selections": v37
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "FR",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SportLevel",
                                    "plural": false,
                                    "selections": v37
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
                            "selections": v7
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "waiting",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v7
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "willing",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v7
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
                                "selections": v7
                              },
                              v33,
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
(node/*: any*/).hash = '9563ccad8215c06c2f7506bd2ab8b22d';
module.exports = node;

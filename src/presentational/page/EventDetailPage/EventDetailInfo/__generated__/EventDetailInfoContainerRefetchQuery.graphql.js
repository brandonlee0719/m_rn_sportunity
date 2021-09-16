/**
 * @flow
 * @relayHash 05e0d8072737fa9da149447aa15c6e3d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventDetailInfoContainer_query$ref = any;
export type EventDetailInfoContainerRefetchQueryVariables = {|
  sportunityId?: ?string,
  sportunityChatId?: ?string,
  sportunityRelaunchId: string,
|};
export type EventDetailInfoContainerRefetchQueryResponse = {|
  +$fragmentRefs: EventDetailInfoContainer_query$ref
|};
export type EventDetailInfoContainerRefetchQuery = {|
  variables: EventDetailInfoContainerRefetchQueryVariables,
  response: EventDetailInfoContainerRefetchQueryResponse,
|};
*/


/*
query EventDetailInfoContainerRefetchQuery(
  $sportunityId: ID
  $sportunityChatId: String
) {
  ...EventDetailInfoContainer_query_2pTiHk
}

fragment EventDetailInfoContainer_query_2pTiHk on Query {
  viewer {
    id
    ...EventDetailInfo_viewer
    me {
      ...EventDetailInfo_user
      id
    }
    sportunity(id: $sportunityId) {
      ...EventDetailInfo_sportunity
      id
    }
    chat(sportunityId: $sportunityChatId) {
      id
    }
  }
}

fragment EventDetailInfo_viewer on Viewer {
  ...VoteForManOfTheGame_viewer
  ...PriceView_viewer
  ...ButtonSportunity_viewer
  ...ParticipantsList_viewer
  ...ButtonFeedback_viewer
  ...StatisticFillingModal_viewer
  ...EventStatistics_viewer
  ...TopContent_viewer
}

fragment EventDetailInfo_user on User {
  ...ButtonSportunity_user
  ...ParticipantsList_user
  ...TopContent_user
  id
  avatar
  pseudo
  areStatisticsActivated
  profileType
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

fragment EventDetailInfo_sportunity on Sportunity {
  ...Header_sportunity
  ...StatusView_sportunity
  ...DescriptionView_sportunity
  ...DateSportunity_sportunity
  ...AdvancedSettingsView_sportunity
  ...PriceView_sportunity
  ...StatisticFillingModal_sportunity
  ...EventStatistics_sportunity
  ...SurveyView_sportunity
  ...SurveyModal_sportunity
  ...Compositions_sportunity
  ...ButtonSportunity_sportunity
  ...VoteForManOfTheGame_sportunity
  ...TopContent_sportunity
  id
  title
  description
  status
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
    }
  }
  participants {
    id
    pseudo
    avatar
  }
  ageRestriction {
    from
    to
  }
  sexRestriction
  participantRange {
    from
    to
  }
  waiting {
    id
    pseudo
    avatar
  }
  willing {
    id
    pseudo
    avatar
  }
  canceling {
    canceling_user {
      id
      pseudo
      avatar
    }
    status
    cancelation_date
  }
  invited {
    user {
      ...UserCard_user
      id
      pseudo
      avatar
    }
    answer
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
  invited_circles(last: 100) {
    edges {
      node {
        id
        name
        mode
        memberCount
        type
        owner {
          id
          avatar
          pseudo
        }
        members {
          id
          pseudo
        }
      }
    }
  }
  price_for_circle {
    circle {
      id
    }
    price {
      cents
      currency
    }
    participantByDefault
  }
  sport {
    allLevelSelected
    sport {
      id
      logo
      name {
        EN
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
    positions {
      id
      EN
    }
    certificates {
      id
      name {
        EN
        id
      }
    }
  }
  kind
  beginning_date
  ending_date
  number_of_occurences
  is_repeated_occurence_number
  hide_participant_list
  price {
    cents
    currency
  }
  fees
  address {
    address
    country
    city
    zip
    position {
      lat
      lng
    }
    ...DetailCellItem_address
  }
  venue {
    feedbacks {
      count
    }
    id
    name
    address {
      address
      city
      country
    }
    ...ButtonFeedback_venue
  }
  infrastructure {
    id
    name
    logo
  }
  slot {
    id
    from
    end
    price {
      cents
      currency
    }
  }
  compositions {
    id
  }
  organizers {
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
    price {
      cents
      currency
    }
    organizer {
      id
      pseudo
      sportunityNumber
      avatar
      feedbacks {
        averageRating
        count
      }
      sports {
        levels {
          EN {
            name
          }
          id
        }
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
      followers {
        id
      }
    }
    permissions {
      detailsAccess {
        view
        edit
      }
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
      compositionAccess {
        view
        edit
      }
    }
    ...ButtonFeedback_organizers
    id
  }
  pendingOrganizers {
    id
    circles(last: 20) {
      edges {
        node {
          id
          members {
            id
          }
          name
          memberCount
        }
      }
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
    price {
      cents
      currency
    }
  }
  notification_preference {
    notification_type
    send_notification_x_days_before
    last_post
  }
  privacy_switch_preference {
    privacy_switch_type
    switch_privacy_x_days_before
  }
  sportunityType {
    id
  }
  game_information {
    opponent {
      organizer {
        id
        pseudo
        avatar
      }
      organizerPseudo
      lookingForAnOpponent
      unknownOpponent
      invitedOpponents(last: 5) {
        edges {
          node {
            id
            name
            memberCount
            members {
              id
            }
          }
        }
      }
    }
  }
}

fragment Header_sportunity on Sportunity {
  id
  kind
  title
  beginning_date
  ending_date
  images
  sport {
    allLevelSelected
    sport {
      name {
        EN
        FR
        id
      }
      logo
      id
    }
    ...levels_sport
  }
  participants {
    id
    pseudo
  }
  participantRange {
    from
    to
  }
}

fragment StatusView_sportunity on Sportunity {
  status
  kind
  participantRange {
    from
  }
}

fragment DescriptionView_sportunity on Sportunity {
  description
  ...StatusView_sportunity
  ...AdvancedSettingsView_sportunity
  ageRestriction {
    from
    to
  }
  organizers {
    isAdmin
    role
    permissions {
      detailsAccess {
        view
        edit
      }
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
      compositionAccess {
        view
        edit
      }
    }
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
    price {
      cents
      currency
    }
    organizer {
      id
      pseudo
      sportunityNumber
      feedbacks {
        averageRating
        count
      }
      sports {
        levels {
          EN {
            name
          }
          id
        }
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
      avatar
      followers {
        id
      }
    }
    id
  }
}

fragment DateSportunity_sportunity on Sportunity {
  beginning_date
  ending_date
  sport {
    sport {
      logo
      id
    }
  }
}

fragment AdvancedSettingsView_sportunity on Sportunity {
  ageRestriction {
    from
    to
  }
  sexRestriction
}

fragment PriceView_sportunity on Sportunity {
  kind
  price {
    currency
    cents
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
  invited_circles(last: 100) {
    edges {
      node {
        id
        name
        mode
        memberCount
        type
        owner {
          id
          avatar
          pseudo
        }
        members {
          id
          pseudo
        }
      }
    }
  }
  price_for_circle {
    circle {
      id
    }
    price {
      cents
      currency
    }
  }
}

fragment StatisticFillingModal_sportunity on Sportunity {
  id
  title
  beginning_date
  ending_date
  ...SportunityStatisticsModal_sportunity
  ...ParticipantsStatisticsModal_sportunity
}

fragment EventStatistics_sportunity on Sportunity {
  id
  score {
    currentTeam
    adversaryTeam
  }
  sportunityTypeStatus {
    id
    name {
      id
      EN
      FR
    }
  }
  game_information {
    opponent {
      organizer {
        id
        pseudo
        email
        avatar
      }
      organizerPseudo
      lookingForAnOpponent
      unknownOpponent
    }
  }
}

fragment SurveyView_sportunity on Sportunity {
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
      answers {
        user {
          id
          pseudo
          avatar
        }
        answer
      }
    }
  }
  organizers {
    organizer {
      id
      pseudo
      avatar
    }
    id
  }
  invited {
    user {
      id
      pseudo
      avatar
    }
    answer
  }
}

fragment SurveyModal_sportunity on Sportunity {
  survey {
    isSurveyTransformed
    surveyDates {
      beginning_date
      ending_date
      answers {
        answer
      }
    }
  }
  invited {
    user {
      id
    }
  }
}

fragment Compositions_sportunity on Sportunity {
  id
  compositions {
    id
    name
    fieldImage
    users {
      user {
        id
        pseudo
        avatar
      }
      position {
        xPercentage
        yPercentage
      }
    }
  }
}

fragment ButtonSportunity_sportunity on Sportunity {
  id
  status
  waiting {
    id
  }
  cancel_date
  canceling {
    canceling_user {
      id
    }
    status
    cancelation_date
  }
  price {
    cents
    currency
  }
  organizers {
    organizer {
      pseudo
      id
    }
    isAdmin
    id
  }
  participants {
    id
    pseudo
    avatar
  }
}

fragment VoteForManOfTheGame_sportunity on Sportunity {
  id
  ending_date
  participants {
    id
    pseudo
    avatar
  }
  canUserVoteForManOfTheGame
  manOfTheGameVotes {
    voter {
      id
    }
    votedFor {
      id
      pseudo
      avatar
    }
    date
  }
  organizers {
    organizer {
      id
    }
    isAdmin
    id
  }
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

fragment DetailCellItem_address on AddressModel {
  address
  city
  country
  position {
    lat
    lng
  }
}

fragment ButtonFeedback_venue on Venue {
  id
  name
}

fragment ButtonFeedback_organizers on Organizer {
  isAdmin
  organizer {
    id
    pseudo
    feedbacks {
      feedbacksList(last: 1000) {
        edges {
          node {
            author {
              id
            }
            id
          }
        }
      }
    }
  }
}

fragment SportunityStatisticsModal_sportunity on Sportunity {
  id
  title
  beginning_date
  ending_date
  sport {
    sport {
      type
      sportunityTypes {
        id
        name {
          FR
          EN
          id
        }
      }
      id
    }
  }
  sportunityType {
    id
    name {
      FR
      EN
      id
    }
    statuses {
      id
      name {
        FR
        EN
        id
      }
    }
    isScoreRelevant
  }
  sportunityTypeStatus {
    id
    name {
      FR
      EN
      id
    }
  }
  score {
    currentTeam
    adversaryTeam
  }
}

fragment ParticipantsStatisticsModal_sportunity on Sportunity {
  id
  title
  beginning_date
  ending_date
}

fragment levels_sport on SportunitySport {
  allLevelSelected
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

fragment ButtonSportunity_user on User {
  id
}

fragment ParticipantsList_user on User {
  id
  ...AddParticipants_user
}

fragment TopContent_user on User {
  id
}

fragment AddParticipants_user on User {
  id
  pseudo
  email
}

fragment VoteForManOfTheGame_viewer on Viewer {
  me {
    id
  }
  statisticPreferences {
    private
  }
}

fragment PriceView_viewer on Viewer {
  me {
    id
  }
}

fragment ButtonSportunity_viewer on Viewer {
  id
  me {
    id
    isProfileComplete
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
}

fragment ParticipantsList_viewer on Viewer {
  id
  ...AddParticipants_viewer
}

fragment ButtonFeedback_viewer on Viewer {
  id
  me {
    id
  }
}

fragment StatisticFillingModal_viewer on Viewer {
  ...SportunityStatisticsModal_viewer
  ...ParticipantsStatisticsModal_viewer
}

fragment EventStatistics_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    avatar
  }
}

fragment TopContent_viewer on Viewer {
  id
}

fragment SportunityStatisticsModal_viewer on Viewer {
  id
}

fragment ParticipantsStatisticsModal_viewer on Viewer {
  id
}

fragment AddParticipants_viewer on Viewer {
  id
  ...AddUser_viewer
}

fragment AddUser_viewer on Viewer {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityChatId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityRelaunchId",
    "type": "String!",
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "areStatisticsActivated",
  "args": null,
  "storageKey": null
},
v6 = [
  v1
],
v7 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 1000,
    "type": "Int"
  }
],
v8 = {
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
},
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
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v6
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ending_date",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v15,
    v14,
    v1
  ]
},
v19 = [
  v1,
  v18
],
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v21 = [
  v9,
  v20,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v22 = [
  v1,
  v2,
  v4
],
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "from",
  "args": null,
  "storageKey": null
},
v24 = [
  v23,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "to",
    "args": null,
    "storageKey": null
  }
],
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v28 = [
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
v29 = {
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
        v15,
        v14,
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
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v32 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v33 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v31,
    v32
  ]
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v36 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v37 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v38 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": [
    v35,
    v36,
    v37,
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
v39 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v22
},
v40 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "answer",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventDetailInfoContainerRefetchQuery",
  "id": null,
  "text": "query EventDetailInfoContainerRefetchQuery(\n  $sportunityId: ID\n  $sportunityChatId: String\n) {\n  ...EventDetailInfoContainer_query_2pTiHk\n}\n\nfragment EventDetailInfoContainer_query_2pTiHk on Query {\n  viewer {\n    id\n    ...EventDetailInfo_viewer\n    me {\n      ...EventDetailInfo_user\n      id\n    }\n    sportunity(id: $sportunityId) {\n      ...EventDetailInfo_sportunity\n      id\n    }\n    chat(sportunityId: $sportunityChatId) {\n      id\n    }\n  }\n}\n\nfragment EventDetailInfo_viewer on Viewer {\n  ...VoteForManOfTheGame_viewer\n  ...PriceView_viewer\n  ...ButtonSportunity_viewer\n  ...ParticipantsList_viewer\n  ...ButtonFeedback_viewer\n  ...StatisticFillingModal_viewer\n  ...EventStatistics_viewer\n  ...TopContent_viewer\n}\n\nfragment EventDetailInfo_user on User {\n  ...ButtonSportunity_user\n  ...ParticipantsList_user\n  ...TopContent_user\n  id\n  avatar\n  pseudo\n  areStatisticsActivated\n  profileType\n  calendar {\n    users {\n      id\n    }\n    sportunities(last: 1000) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment EventDetailInfo_sportunity on Sportunity {\n  ...Header_sportunity\n  ...StatusView_sportunity\n  ...DescriptionView_sportunity\n  ...DateSportunity_sportunity\n  ...AdvancedSettingsView_sportunity\n  ...PriceView_sportunity\n  ...StatisticFillingModal_sportunity\n  ...EventStatistics_sportunity\n  ...SurveyView_sportunity\n  ...SurveyModal_sportunity\n  ...Compositions_sportunity\n  ...ButtonSportunity_sportunity\n  ...VoteForManOfTheGame_sportunity\n  ...TopContent_sportunity\n  id\n  title\n  description\n  status\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n    }\n  }\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  ageRestriction {\n    from\n    to\n  }\n  sexRestriction\n  participantRange {\n    from\n    to\n  }\n  waiting {\n    id\n    pseudo\n    avatar\n  }\n  willing {\n    id\n    pseudo\n    avatar\n  }\n  canceling {\n    canceling_user {\n      id\n      pseudo\n      avatar\n    }\n    status\n    cancelation_date\n  }\n  invited {\n    user {\n      ...UserCard_user\n      id\n      pseudo\n      avatar\n    }\n    answer\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  invited_circles(last: 100) {\n    edges {\n      node {\n        id\n        name\n        mode\n        memberCount\n        type\n        owner {\n          id\n          avatar\n          pseudo\n        }\n        members {\n          id\n          pseudo\n        }\n      }\n    }\n  }\n  price_for_circle {\n    circle {\n      id\n    }\n    price {\n      cents\n      currency\n    }\n    participantByDefault\n  }\n  sport {\n    allLevelSelected\n    sport {\n      id\n      logo\n      name {\n        EN\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n    positions {\n      id\n      EN\n    }\n    certificates {\n      id\n      name {\n        EN\n        id\n      }\n    }\n  }\n  kind\n  beginning_date\n  ending_date\n  number_of_occurences\n  is_repeated_occurence_number\n  hide_participant_list\n  price {\n    cents\n    currency\n  }\n  fees\n  address {\n    address\n    country\n    city\n    zip\n    position {\n      lat\n      lng\n    }\n    ...DetailCellItem_address\n  }\n  venue {\n    feedbacks {\n      count\n    }\n    id\n    name\n    address {\n      address\n      city\n      country\n    }\n    ...ButtonFeedback_venue\n  }\n  infrastructure {\n    id\n    name\n    logo\n  }\n  slot {\n    id\n    from\n    end\n    price {\n      cents\n      currency\n    }\n  }\n  compositions {\n    id\n  }\n  organizers {\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    price {\n      cents\n      currency\n    }\n    organizer {\n      id\n      pseudo\n      sportunityNumber\n      avatar\n      feedbacks {\n        averageRating\n        count\n      }\n      sports {\n        levels {\n          EN {\n            name\n          }\n          id\n        }\n      }\n      address {\n        address\n        country\n        city\n        zip\n        position {\n          lat\n          lng\n        }\n      }\n      followers {\n        id\n      }\n    }\n    permissions {\n      detailsAccess {\n        view\n        edit\n      }\n      chatAccess {\n        view\n        edit\n      }\n      memberAccess {\n        view\n        edit\n      }\n      carPoolingAccess {\n        view\n        edit\n      }\n      imageAccess {\n        view\n        edit\n      }\n      compositionAccess {\n        view\n        edit\n      }\n    }\n    ...ButtonFeedback_organizers\n    id\n  }\n  pendingOrganizers {\n    id\n    circles(last: 20) {\n      edges {\n        node {\n          id\n          members {\n            id\n          }\n          name\n          memberCount\n        }\n      }\n    }\n    isAdmin\n    role\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    price {\n      cents\n      currency\n    }\n  }\n  notification_preference {\n    notification_type\n    send_notification_x_days_before\n    last_post\n  }\n  privacy_switch_preference {\n    privacy_switch_type\n    switch_privacy_x_days_before\n  }\n  sportunityType {\n    id\n  }\n  game_information {\n    opponent {\n      organizer {\n        id\n        pseudo\n        avatar\n      }\n      organizerPseudo\n      lookingForAnOpponent\n      unknownOpponent\n      invitedOpponents(last: 5) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n            members {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Header_sportunity on Sportunity {\n  id\n  kind\n  title\n  beginning_date\n  ending_date\n  images\n  sport {\n    allLevelSelected\n    sport {\n      name {\n        EN\n        FR\n        id\n      }\n      logo\n      id\n    }\n    ...levels_sport\n  }\n  participants {\n    id\n    pseudo\n  }\n  participantRange {\n    from\n    to\n  }\n}\n\nfragment StatusView_sportunity on Sportunity {\n  status\n  kind\n  participantRange {\n    from\n  }\n}\n\nfragment DescriptionView_sportunity on Sportunity {\n  description\n  ...StatusView_sportunity\n  ...AdvancedSettingsView_sportunity\n  ageRestriction {\n    from\n    to\n  }\n  organizers {\n    isAdmin\n    role\n    permissions {\n      detailsAccess {\n        view\n        edit\n      }\n      chatAccess {\n        view\n        edit\n      }\n      memberAccess {\n        view\n        edit\n      }\n      carPoolingAccess {\n        view\n        edit\n      }\n      imageAccess {\n        view\n        edit\n      }\n      compositionAccess {\n        view\n        edit\n      }\n    }\n    secondaryOrganizerType {\n      id\n      name {\n        FR\n        EN\n        DE\n        ES\n        id\n      }\n    }\n    customSecondaryOrganizerType\n    price {\n      cents\n      currency\n    }\n    organizer {\n      id\n      pseudo\n      sportunityNumber\n      feedbacks {\n        averageRating\n        count\n      }\n      sports {\n        levels {\n          EN {\n            name\n          }\n          id\n        }\n      }\n      address {\n        address\n        country\n        city\n        zip\n        position {\n          lat\n          lng\n        }\n      }\n      avatar\n      followers {\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment DateSportunity_sportunity on Sportunity {\n  beginning_date\n  ending_date\n  sport {\n    sport {\n      logo\n      id\n    }\n  }\n}\n\nfragment AdvancedSettingsView_sportunity on Sportunity {\n  ageRestriction {\n    from\n    to\n  }\n  sexRestriction\n}\n\nfragment PriceView_sportunity on Sportunity {\n  kind\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  invited_circles(last: 100) {\n    edges {\n      node {\n        id\n        name\n        mode\n        memberCount\n        type\n        owner {\n          id\n          avatar\n          pseudo\n        }\n        members {\n          id\n          pseudo\n        }\n      }\n    }\n  }\n  price_for_circle {\n    circle {\n      id\n    }\n    price {\n      cents\n      currency\n    }\n  }\n}\n\nfragment StatisticFillingModal_sportunity on Sportunity {\n  id\n  title\n  beginning_date\n  ending_date\n  ...SportunityStatisticsModal_sportunity\n  ...ParticipantsStatisticsModal_sportunity\n}\n\nfragment EventStatistics_sportunity on Sportunity {\n  id\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n  }\n  game_information {\n    opponent {\n      organizer {\n        id\n        pseudo\n        email\n        avatar\n      }\n      organizerPseudo\n      lookingForAnOpponent\n      unknownOpponent\n    }\n  }\n}\n\nfragment SurveyView_sportunity on Sportunity {\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n      answers {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        answer\n      }\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n    }\n    id\n  }\n  invited {\n    user {\n      id\n      pseudo\n      avatar\n    }\n    answer\n  }\n}\n\nfragment SurveyModal_sportunity on Sportunity {\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n      answers {\n        answer\n      }\n    }\n  }\n  invited {\n    user {\n      id\n    }\n  }\n}\n\nfragment Compositions_sportunity on Sportunity {\n  id\n  compositions {\n    id\n    name\n    fieldImage\n    users {\n      user {\n        id\n        pseudo\n        avatar\n      }\n      position {\n        xPercentage\n        yPercentage\n      }\n    }\n  }\n}\n\nfragment ButtonSportunity_sportunity on Sportunity {\n  id\n  status\n  waiting {\n    id\n  }\n  cancel_date\n  canceling {\n    canceling_user {\n      id\n    }\n    status\n    cancelation_date\n  }\n  price {\n    cents\n    currency\n  }\n  organizers {\n    organizer {\n      pseudo\n      id\n    }\n    isAdmin\n    id\n  }\n  participants {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment VoteForManOfTheGame_sportunity on Sportunity {\n  id\n  ending_date\n  participants {\n    id\n    pseudo\n    avatar\n  }\n  canUserVoteForManOfTheGame\n  manOfTheGameVotes {\n    voter {\n      id\n    }\n    votedFor {\n      id\n      pseudo\n      avatar\n    }\n    date\n  }\n  organizers {\n    organizer {\n      id\n    }\n    isAdmin\n    id\n  }\n}\n\nfragment TopContent_sportunity on Sportunity {\n  id\n  title\n  status\n  beginning_date\n  price {\n    currency\n    cents\n  }\n  survey {\n    isSurveyTransformed\n    surveyDates {\n      beginning_date\n      ending_date\n    }\n  }\n  organizers {\n    organizer {\n      id\n      pseudo\n      avatar\n      areStatisticsActivated\n      statisticPreferences {\n        private\n      }\n    }\n    isAdmin\n    id\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  venue {\n    id\n    name\n  }\n  infrastructure {\n    id\n    name\n  }\n  address {\n    address\n    country\n    city\n    zip\n    position {\n      lat\n      lng\n    }\n  }\n  participantRange {\n    from\n    to\n  }\n  sportunityType {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n  sport {\n    sport {\n      logo\n      id\n    }\n    allLevelSelected\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  pseudo\n  firstName\n  lastName\n  avatar\n  circlesUserIsIn(first: 3) {\n    count\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  sports {\n    sport {\n      id\n      logo\n    }\n  }\n}\n\nfragment DetailCellItem_address on AddressModel {\n  address\n  city\n  country\n  position {\n    lat\n    lng\n  }\n}\n\nfragment ButtonFeedback_venue on Venue {\n  id\n  name\n}\n\nfragment ButtonFeedback_organizers on Organizer {\n  isAdmin\n  organizer {\n    id\n    pseudo\n    feedbacks {\n      feedbacksList(last: 1000) {\n        edges {\n          node {\n            author {\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SportunityStatisticsModal_sportunity on Sportunity {\n  id\n  title\n  beginning_date\n  ending_date\n  sport {\n    sport {\n      type\n      sportunityTypes {\n        id\n        name {\n          FR\n          EN\n          id\n        }\n      }\n      id\n    }\n  }\n  sportunityType {\n    id\n    name {\n      FR\n      EN\n      id\n    }\n    statuses {\n      id\n      name {\n        FR\n        EN\n        id\n      }\n    }\n    isScoreRelevant\n  }\n  sportunityTypeStatus {\n    id\n    name {\n      FR\n      EN\n      id\n    }\n  }\n  score {\n    currentTeam\n    adversaryTeam\n  }\n}\n\nfragment ParticipantsStatisticsModal_sportunity on Sportunity {\n  id\n  title\n  beginning_date\n  ending_date\n}\n\nfragment levels_sport on SportunitySport {\n  allLevelSelected\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment ButtonSportunity_user on User {\n  id\n}\n\nfragment ParticipantsList_user on User {\n  id\n  ...AddParticipants_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment AddParticipants_user on User {\n  id\n  pseudo\n  email\n}\n\nfragment VoteForManOfTheGame_viewer on Viewer {\n  me {\n    id\n  }\n  statisticPreferences {\n    private\n  }\n}\n\nfragment PriceView_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment ButtonSportunity_viewer on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n}\n\nfragment ParticipantsList_viewer on Viewer {\n  id\n  ...AddParticipants_viewer\n}\n\nfragment ButtonFeedback_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment StatisticFillingModal_viewer on Viewer {\n  ...SportunityStatisticsModal_viewer\n  ...ParticipantsStatisticsModal_viewer\n}\n\nfragment EventStatistics_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    avatar\n  }\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment SportunityStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment ParticipantsStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment AddParticipants_viewer on Viewer {\n  id\n  ...AddUser_viewer\n}\n\nfragment AddUser_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventDetailInfoContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "EventDetailInfoContainer_query",
        "args": [
          {
            "kind": "Variable",
            "name": "sportunityChatId",
            "variableName": "sportunityChatId",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "sportunityId",
            "variableName": "sportunityId",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "sportunityRelaunchId",
            "variableName": "sportunityRelaunchId",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EventDetailInfoContainerRefetchQuery",
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
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentMethods",
                "storageKey": null,
                "args": null,
                "concreteType": "PaymentMethod",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "expirationDate",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v2,
              v3,
              v4,
              v5,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
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
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunities",
                    "storageKey": "sportunities(last:1000)",
                    "args": v7,
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
                            "selections": v6
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v8,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "sportunityId",
                "type": "ID"
              }
            ],
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
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
                          v3,
                          v4
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
                        "name": "lookingForAnOpponent",
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
                                  v9,
                                  v10,
                                  v11
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
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              v12,
              v13,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "images",
                "args": null,
                "storageKey": null
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "allLevelSelected",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v14,
                          v15,
                          v1
                        ]
                      },
                      v16,
                      v1,
                      v17,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sportunityTypes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportunityType",
                        "plural": true,
                        "selections": v19
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
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "EN",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v21
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v21
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "positions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TranslatedString",
                    "plural": true,
                    "selections": [
                      v1,
                      v14
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Certificate",
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
                          v14,
                          v1
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v22
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participantRange",
                "storageKey": null,
                "args": null,
                "concreteType": "IntInterval",
                "plural": false,
                "selections": v24
              },
              v25,
              v20,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "ageRestriction",
                "storageKey": null,
                "args": null,
                "concreteType": "IntInterval",
                "plural": false,
                "selections": v24
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sexRestriction",
                "args": null,
                "storageKey": null
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
                  v26,
                  v27,
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
                        "selections": v28
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "chatAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersChatAccess",
                        "plural": false,
                        "selections": v28
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "memberAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersMemberAccess",
                        "plural": false,
                        "selections": v28
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "carPoolingAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersCarPoolingAccess",
                        "plural": false,
                        "selections": v28
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "imageAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersImageAccess",
                        "plural": false,
                        "selections": v28
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "compositionAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersCompositionAccess",
                        "plural": false,
                        "selections": v28
                      }
                    ]
                  },
                  v29,
                  v30,
                  v33,
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
                          v34,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacksList",
                            "storageKey": "feedbacksList(last:1000)",
                            "args": v7,
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
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "author",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "User",
                                        "plural": false,
                                        "selections": v6
                                      },
                                      v1
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
                                  v9
                                ]
                              },
                              v1
                            ]
                          }
                        ]
                      },
                      v38,
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "followers",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": true,
                        "selections": v6
                      },
                      v5,
                      v8
                    ]
                  },
                  v1
                ]
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
                  v32,
                  v31
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
                    "selections": v6
                  },
                  v25,
                  v33,
                  v1
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited_circles",
                "storageKey": "invited_circles(last:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
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
                          v9,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          v10,
                          v17,
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
                              v4,
                              v2
                            ]
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
                              v1,
                              v2
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
                "name": "price_for_circle",
                "storageKey": null,
                "args": null,
                "concreteType": "PriceForCircle",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circle",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Circle",
                    "plural": false,
                    "selections": v6
                  },
                  v33,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "participantByDefault",
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
                "selections": [
                  v1,
                  v18,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "statuses",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTypeStatus",
                    "plural": true,
                    "selections": v19
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isScoreRelevant",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTypeStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTypeStatus",
                "plural": false,
                "selections": v19
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
                "kind": "ScalarField",
                "alias": null,
                "name": "kind",
                "args": null,
                "storageKey": null
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
                      v12,
                      v13,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "answers",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SurveyAnswer",
                        "plural": true,
                        "selections": [
                          v39,
                          v40
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited",
                "storageKey": null,
                "args": null,
                "concreteType": "Invited",
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
                      v2,
                      v4,
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
                          v34,
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
                                  v9
                                ]
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
                              v16
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v40
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "compositions",
                "storageKey": null,
                "args": null,
                "concreteType": "CompositionOutput",
                "plural": true,
                "selections": [
                  v1,
                  v9,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fieldImage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "users",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompositionUsers",
                    "plural": true,
                    "selections": [
                      v39,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "position",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CompositionUserPosition",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "xPercentage",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "yPercentage",
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
                "name": "waiting",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v22
              },
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
                    "selections": v22
                  },
                  v25,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cancelation_date",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "canUserVoteForManOfTheGame",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "manOfTheGameVotes",
                "storageKey": null,
                "args": null,
                "concreteType": "manOfTheGameVotes",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "voter",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "votedFor",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v22
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "date",
                    "args": null,
                    "storageKey": null
                  }
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
                "selections": [
                  v1,
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "feedbacks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Feedbacks",
                    "plural": false,
                    "selections": [
                      v34
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
                      v35,
                      v37,
                      v36
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
                  v9,
                  v16
                ]
              },
              v38,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "willing",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v22
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "number_of_occurences",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_repeated_occurence_number",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hide_participant_list",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "slot",
                "storageKey": null,
                "args": null,
                "concreteType": "Slot",
                "plural": false,
                "selections": [
                  v1,
                  v23,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "end",
                    "args": null,
                    "storageKey": null
                  },
                  v33
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pendingOrganizers",
                "storageKey": null,
                "args": null,
                "concreteType": "PendingOrganizer",
                "plural": true,
                "selections": [
                  v1,
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
                              v11,
                              v9,
                              v10
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  v26,
                  v27,
                  v29,
                  v30,
                  v33
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notification_preference",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityNotificationPreferenceOutput",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "notification_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "send_notification_x_days_before",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "last_post",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "privacy_switch_preference",
                "storageKey": null,
                "args": null,
                "concreteType": "PrivacySwitchPreferenceOutput",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "privacy_switch_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "switch_privacy_x_days_before",
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
            "name": "chat",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "sportunityId",
                "variableName": "sportunityChatId",
                "type": "String"
              }
            ],
            "concreteType": "Chat",
            "plural": false,
            "selections": v6
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d6e0a99402067fbfb55348b3c753ec2';
module.exports = node;

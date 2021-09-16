/**
 * @flow
 * @relayHash 819d9ebb2c00298b097023dfbc4fa051
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewActivityPage_viewer$ref = any;
export type NewActivityPageQueryVariables = {||};
export type NewActivityPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewActivityPage_viewer$ref
  |}
|};
export type NewActivityPageQuery = {|
  variables: NewActivityPageQueryVariables,
  response: NewActivityPageQueryResponse,
|};
*/


/*
query NewActivityPageQuery {
  viewer {
    ...NewActivityPage_viewer
    id
  }
}

fragment NewActivityPage_viewer on Viewer {
  ...Validate_viewer
  ...PlaceList_viewer
  ...CoOrganizerModal_viewer
  ...Prices_viewer
  ...Price_viewer
  ...Invitations_viewer
  ...AdvancedSettings_viewer
  ...EventType_viewer
  ...Place_viewer
  ...SelectTemplate_viewer
  me {
    id
    fees
    profileType
    ...Invitations_user
    ...AdvancedSettings_user
    ...EventType_user
  }
}

fragment Validate_viewer on Viewer {
  id
  me {
    id
    isProfileComplete
    bankAccount {
      id
    }
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
}

fragment PlaceList_viewer on Viewer {
  id
}

fragment CoOrganizerModal_viewer on Viewer {
  id
  ...SearchModule_viewer
  me {
    id
  }
}

fragment Prices_viewer on Viewer {
  id
  me {
    fees
    id
  }
}

fragment Price_viewer on Viewer {
  id
  ...PriceModal_viewer
  me {
    fees
    id
  }
}

fragment Invitations_viewer on Viewer {
  id
  ...InvitationModal_viewer
}

fragment AdvancedSettings_viewer on Viewer {
  id
  ...AdvancedSettingsModal_viewer
}

fragment EventType_viewer on Viewer {
  id
  ...EventTypeModal_viewer
  sport {
    type
    sportunityTypes {
      id
      name {
        FR
        EN
        id
      }
      isScoreRelevant
    }
    id
  }
}

fragment Place_viewer on Viewer {
  id
  me {
    id
    profileType
  }
}

fragment SelectTemplate_viewer on Viewer {
  id
  me {
    id
    ...SelectTemplateModal_user
    sportunityTemplates {
      id
    }
  }
}

fragment Invitations_user on User {
  id
  profileType
  pseudo
  email
  circlesUserIsIn(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        owner {
          id
          pseudo
          avatar
        }
        isCircleUsableByMembers
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
  circlesFromClub(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        owner {
          id
          pseudo
          avatar
        }
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
  circles(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        mode
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
}

fragment AdvancedSettings_user on User {
  id
}

fragment EventType_user on User {
  id
}

fragment SelectTemplateModal_user on User {
  id
  sportunityTemplates {
    id
    title
    description
    kind
    fees
    privacy_switch_preference {
      privacy_switch_type
      switch_privacy_x_days_before
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
    invited_circles(last: 10) {
      edges {
        node {
          id
          name
          members {
            id
          }
          owner {
            id
            pseudo
            avatar
          }
          type
          memberCount
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
    notification_preference {
      notification_type
      send_notification_x_days_before
    }
    participantRange {
      from
      to
    }
    hide_participant_list
    price {
      currency
      cents
    }
    sport {
      sport {
        id
        name {
          EN
          DE
          FR
          id
        }
        logo
      }
      positions {
        id
        EN
        FR
        DE
      }
      certificates {
        id
        name {
          EN
          FR
          DE
          id
        }
      }
      levels {
        id
        EN {
          name
          skillLevel
          description
        }
        FR {
          name
          skillLevel
          description
        }
        DE {
          name
          skillLevel
          description
        }
      }
    }
    ageRestriction {
      from
      to
    }
    sexRestriction
    address {
      address
      country
      city
      position {
        lat
        lng
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
        cents
        currency
      }
      secondaryOrganizerType {
        id
        name {
          id
          FR
          EN
          DE
          ES
        }
      }
      customSecondaryOrganizerType
      id
    }
    pendingOrganizers {
      id
      circles(last: 20) {
        edges {
          node {
            id
            name
            memberCount
            type
            members {
              id
            }
          }
        }
      }
      isAdmin
      role
      price {
        cents
        currency
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
    }
    sportunityType {
      id
      isScoreRelevant
      name {
        FR
        EN
        id
      }
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
        invitedOpponents(last: 5) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
        unknownOpponent
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

fragment EventTypeModal_viewer on Viewer {
  ...SearchModule_viewer
  id
  me {
    id
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

fragment AdvancedSettingsModal_viewer on Viewer {
  id
}

fragment InvitationModal_viewer on Viewer {
  ...Invitee_viewer
  ...InvitedCircle_viewer
  ...CirclesPageView_viewer
  ...SearchModule_viewer
  ...AddUser_viewer
}

fragment Invitee_viewer on Viewer {
  id
}

fragment InvitedCircle_viewer on Viewer {
  id
  me {
    pseudo
    avatar
    id
  }
  ...InvitedCircleDetails_viewer
}

fragment CirclesPageView_viewer on Viewer {
  id
  ...CirclesDetailPage_viewer
  ...Stepper_viewer
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
  }
}

fragment AddUser_viewer on Viewer {
  me {
    id
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

fragment InvitedCircleDetails_viewer on Viewer {
  id
  ...AddMemberModal_viewer
  me {
    id
    pseudo
    email
    profileType
  }
}

fragment AddMemberModal_viewer on Viewer {
  id
}

fragment PriceModal_viewer on Viewer {
  id
  ...Prices_viewer
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "name": "EN",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v3 = [
  v0,
  v1,
  v2
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v3
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
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v3
},
v7 = [
  v0,
  v4
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v11 = [
  v8,
  v9,
  v10
],
v12 = {
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
      "selections": v11
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v11
    }
  ]
},
v13 = [
  v0
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fees",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v19 = [
  v0,
  v16,
  v17
],
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
  "plural": false,
  "selections": [
    v21,
    v22,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v24 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v1,
    v2,
    v0
  ]
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v26 = [
  v0,
  v16
],
v27 = [
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
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v13
},
v31 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v19
},
v32 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v33 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v36 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v34,
    v35
  ]
},
v37 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v38 = [
  v8,
  v10,
  v9
],
v39 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v40 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v41 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v42 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "position",
  "storageKey": null,
  "args": null,
  "concreteType": "PositionType",
  "plural": false,
  "selections": [
    v21,
    v22
  ]
},
v43 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v44 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v45 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v46 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v47 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isScoreRelevant",
  "args": null,
  "storageKey": null
},
v48 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v2,
    v1,
    v0
  ]
},
v49 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v50 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v51 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v52 = {
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
            v2,
            v0
          ]
        }
      ]
    }
  ]
},
v53 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v54 = [
  v8
],
v55 = [
  v8,
  v10
],
v56 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v57 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v13
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NewActivityPageQuery",
  "id": null,
  "text": "query NewActivityPageQuery {\n  viewer {\n    ...NewActivityPage_viewer\n    id\n  }\n}\n\nfragment NewActivityPage_viewer on Viewer {\n  ...Validate_viewer\n  ...PlaceList_viewer\n  ...CoOrganizerModal_viewer\n  ...Prices_viewer\n  ...Price_viewer\n  ...Invitations_viewer\n  ...AdvancedSettings_viewer\n  ...EventType_viewer\n  ...Place_viewer\n  ...SelectTemplate_viewer\n  me {\n    id\n    fees\n    profileType\n    ...Invitations_user\n    ...AdvancedSettings_user\n    ...EventType_user\n  }\n}\n\nfragment Validate_viewer on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n}\n\nfragment PlaceList_viewer on Viewer {\n  id\n}\n\nfragment CoOrganizerModal_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n  me {\n    id\n  }\n}\n\nfragment Prices_viewer on Viewer {\n  id\n  me {\n    fees\n    id\n  }\n}\n\nfragment Price_viewer on Viewer {\n  id\n  ...PriceModal_viewer\n  me {\n    fees\n    id\n  }\n}\n\nfragment Invitations_viewer on Viewer {\n  id\n  ...InvitationModal_viewer\n}\n\nfragment AdvancedSettings_viewer on Viewer {\n  id\n  ...AdvancedSettingsModal_viewer\n}\n\nfragment EventType_viewer on Viewer {\n  id\n  ...EventTypeModal_viewer\n  sport {\n    type\n    sportunityTypes {\n      id\n      name {\n        FR\n        EN\n        id\n      }\n      isScoreRelevant\n    }\n    id\n  }\n}\n\nfragment Place_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n  }\n}\n\nfragment SelectTemplate_viewer on Viewer {\n  id\n  me {\n    id\n    ...SelectTemplateModal_user\n    sportunityTemplates {\n      id\n    }\n  }\n}\n\nfragment Invitations_user on User {\n  id\n  profileType\n  pseudo\n  email\n  circlesUserIsIn(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        isCircleUsableByMembers\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circlesFromClub(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circles(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        mode\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment AdvancedSettings_user on User {\n  id\n}\n\nfragment EventType_user on User {\n  id\n}\n\nfragment SelectTemplateModal_user on User {\n  id\n  sportunityTemplates {\n    id\n    title\n    description\n    kind\n    fees\n    privacy_switch_preference {\n      privacy_switch_type\n      switch_privacy_x_days_before\n    }\n    invited {\n      user {\n        ...UserCard_user\n        id\n        pseudo\n        avatar\n      }\n      answer\n    }\n    invited_circles(last: 10) {\n      edges {\n        node {\n          id\n          name\n          members {\n            id\n          }\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          type\n          memberCount\n        }\n      }\n    }\n    price_for_circle {\n      circle {\n        id\n      }\n      price {\n        cents\n        currency\n      }\n      participantByDefault\n    }\n    notification_preference {\n      notification_type\n      send_notification_x_days_before\n    }\n    participantRange {\n      from\n      to\n    }\n    hide_participant_list\n    price {\n      currency\n      cents\n    }\n    sport {\n      sport {\n        id\n        name {\n          EN\n          DE\n          FR\n          id\n        }\n        logo\n      }\n      positions {\n        id\n        EN\n        FR\n        DE\n      }\n      certificates {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n          description\n        }\n        FR {\n          name\n          skillLevel\n          description\n        }\n        DE {\n          name\n          skillLevel\n          description\n        }\n      }\n    }\n    ageRestriction {\n      from\n      to\n    }\n    sexRestriction\n    address {\n      address\n      country\n      city\n      position {\n        lat\n        lng\n      }\n    }\n    organizers {\n      organizer {\n        id\n        pseudo\n      }\n      isAdmin\n      role\n      price {\n        cents\n        currency\n      }\n      secondaryOrganizerType {\n        id\n        name {\n          id\n          FR\n          EN\n          DE\n          ES\n        }\n      }\n      customSecondaryOrganizerType\n      id\n    }\n    pendingOrganizers {\n      id\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n            type\n            members {\n              id\n            }\n          }\n        }\n      }\n      isAdmin\n      role\n      price {\n        cents\n        currency\n      }\n      secondaryOrganizerType {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      customSecondaryOrganizerType\n    }\n    sportunityType {\n      id\n      isScoreRelevant\n      name {\n        FR\n        EN\n        id\n      }\n    }\n    game_information {\n      opponent {\n        organizer {\n          id\n          pseudo\n          avatar\n        }\n        organizerPseudo\n        lookingForAnOpponent\n        invitedOpponents(last: 5) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n            }\n          }\n        }\n        unknownOpponent\n      }\n    }\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  pseudo\n  firstName\n  lastName\n  avatar\n  circlesUserIsIn(first: 3) {\n    count\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  sports {\n    sport {\n      id\n      logo\n    }\n  }\n}\n\nfragment EventTypeModal_viewer on Viewer {\n  ...SearchModule_viewer\n  id\n  me {\n    id\n  }\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment AdvancedSettingsModal_viewer on Viewer {\n  id\n}\n\nfragment InvitationModal_viewer on Viewer {\n  ...Invitee_viewer\n  ...InvitedCircle_viewer\n  ...CirclesPageView_viewer\n  ...SearchModule_viewer\n  ...AddUser_viewer\n}\n\nfragment Invitee_viewer on Viewer {\n  id\n}\n\nfragment InvitedCircle_viewer on Viewer {\n  id\n  me {\n    pseudo\n    avatar\n    id\n  }\n  ...InvitedCircleDetails_viewer\n}\n\nfragment CirclesPageView_viewer on Viewer {\n  id\n  ...CirclesDetailPage_viewer\n  ...Stepper_viewer\n  me {\n    id\n    profileType\n    basicCircleSavedFiltersCreated\n    savedCircleFilters {\n      id\n      filterName\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    defaultSavedCircleFilter {\n      id\n      filterName\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      circleType\n      memberType\n    }\n    subAccounts {\n      id\n    }\n  }\n}\n\nfragment AddUser_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment CirclesDetailPage_viewer on Viewer {\n  id\n  ...ChatDetailPageContainer_viewer\n  me {\n    id\n    pseudo\n    profileType\n    isSubAccount\n    ...AddMember_user\n    ...AddChild_user\n  }\n  chat {\n    id\n  }\n  circle: circle {\n    id\n    publicShortCode\n    name\n    mode\n    type\n    isCircleUpdatableByMembers\n    isCircleAccessibleFromUrl\n    isCircleUsableByMembers\n    sport {\n      sport {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n      }\n      levels {\n        EN {\n          name\n        }\n        FR {\n          name\n        }\n        id\n      }\n    }\n    address {\n      address\n      zip\n      city\n      country\n    }\n    circlePreferences {\n      isChildrenCircle\n    }\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    coOwners {\n      id\n    }\n    memberCount\n    members {\n      id\n      pseudo\n      email\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n    }\n    memberParents {\n      id\n      pseudo\n      avatar\n      lastConnexionDate\n    }\n    askedInformation {\n      id\n      name\n      type\n      filledByOwner\n    }\n    membersInformation {\n      id\n      information\n      user {\n        id\n      }\n      value\n    }\n    termsOfUses {\n      id\n      name\n      link\n      content\n      acceptedBy {\n        user {\n          id\n        }\n      }\n    }\n    ...CircleOptions_circle\n    ...CircleDetails_circle\n  }\n  ...CircleOptions_viewer\n  ...AddMember_viewer\n  ...Subscribe_viewer\n  ...AddChild_viewer\n}\n\nfragment Stepper_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    mangoId\n    pseudo\n    tutorialSteps {\n      createFormStep\n      setupMembersSubscriptionStep\n      fulfilProfileStep\n      addOfficialDocumentsStep\n      createSubAccountStep\n      shareAccessStep\n      createCircleStep\n      organizeStep\n      setupStatisticsStep\n      joinAPrivateCircleStep\n      joinAPublicCircleStep\n      giveAvailabilitiesStep\n      bookSportunityStep\n    }\n    subAccounts {\n      id\n    }\n    isSubAccount\n  }\n}\n\nfragment ChatDetailPageContainer_viewer on Viewer {\n  ...ChatDetailPage_viewer\n}\n\nfragment AddMember_user on User {\n  id\n  email\n  pseudo\n  profileType\n}\n\nfragment AddChild_user on User {\n  id\n  email\n  pseudo\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment CircleOptions_circle on Circle {\n  id\n  description\n  mode\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  sport {\n    sport {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n  address {\n    address\n    zip\n    city\n    country\n  }\n  circlePreferences {\n    isChildrenCircle\n  }\n  askedInformation {\n    id\n    name\n    type\n    filledByOwner\n  }\n  membersInformation {\n    id\n    information\n    user {\n      id\n    }\n    value\n  }\n}\n\nfragment CircleDetails_circle on Circle {\n  id\n  description\n  type\n  mode\n  isCircleUsableByMembers\n  publicShortCode\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment CircleOptions_viewer on Viewer {\n  id\n  ...AdminMembersInformation_viewer\n  ...CircleSport_viewer\n}\n\nfragment AddMember_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n}\n\nfragment Subscribe_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment AddChild_viewer on Viewer {\n  ...AddChildModal_viewer\n}\n\nfragment AddChildModal_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n\nfragment AdminMembersInformation_viewer on Viewer {\n  id\n}\n\nfragment CircleSport_viewer on Viewer {\n  id\n  me {\n    id\n    sports {\n      ...SportList_sports\n    }\n  }\n}\n\nfragment SportList_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n    logo\n    positions {\n      id\n      EN\n      FR\n    }\n    certificates {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        description\n        skillLevel\n      }\n      FR {\n        name\n        description\n        skillLevel\n      }\n    }\n  }\n  positions {\n    id\n    EN\n    FR\n  }\n  certificates {\n    validation\n    certificate {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment ChatDetailPage_viewer on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment InvitedCircleDetails_viewer on Viewer {\n  id\n  ...AddMemberModal_viewer\n  me {\n    id\n    pseudo\n    email\n    profileType\n  }\n}\n\nfragment AddMemberModal_viewer on Viewer {\n  id\n}\n\nfragment PriceModal_viewer on Viewer {\n  id\n  ...Prices_viewer\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewActivityPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "name": "NewActivityPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewActivityPageQuery",
    "argumentDefinitions": [],
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
                      v0,
                      v4,
                      v5,
                      v6,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": v7
                      },
                      v12
                    ]
                  },
                  v6,
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
                        "selections": v7
                      }
                    ]
                  },
                  v12
                ]
              },
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "bankAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "BankAccount",
                "plural": false,
                "selections": v13
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
                  v0,
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
              v14,
              v15,
              v16,
              v17,
              v18,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v19
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
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
                  v0,
                  v20,
                  v23,
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
                          v0,
                          v24,
                          v12
                        ]
                      },
                      v12
                    ]
                  },
                  v25,
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
                    "selections": v26
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
                  v0,
                  v20,
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
                          v0,
                          v24,
                          v5,
                          v12
                        ]
                      },
                      v12
                    ]
                  },
                  v23,
                  v25,
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
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTemplates",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTemplate",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participantRange",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "IntInterval",
                    "plural": false,
                    "selections": v27
                  },
                  v0,
                  v9,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "kind",
                    "args": null,
                    "storageKey": null
                  },
                  v15,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "privacy_switch_preference",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplatePrivacySwitchPreferenceOutput",
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "invited",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateInvited",
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
                          v0,
                          v16,
                          v28,
                          v29,
                          v17,
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
                                      v0,
                                      v8
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
                                  v0,
                                  v5
                                ]
                              }
                            ]
                          }
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "invited_circles",
                    "storageKey": "invited_circles(last:10)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 10,
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
                              v0,
                              v8,
                              v30,
                              v31,
                              v32,
                              v33
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
                    "concreteType": "SportunityTemplatePriceForCircle",
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
                        "selections": v13
                      },
                      v36,
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
                    "name": "notification_preference",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateNotificationPreferenceOutput",
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
                      }
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
                    "name": "hide_participant_list",
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
                      v35,
                      v34
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
                              v1,
                              v37,
                              v2,
                              v0
                            ]
                          },
                          v5
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
                          v0,
                          v1,
                          v2,
                          v37
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
                              v1,
                              v2,
                              v37,
                              v0
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
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v38
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v38
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v38
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "ageRestriction",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "IntInterval",
                    "plural": false,
                    "selections": v27
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
                    "name": "address",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AddressModel",
                    "plural": false,
                    "selections": [
                      v39,
                      v40,
                      v41,
                      v42
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
                        "selections": v26
                      },
                      v43,
                      v44,
                      v36,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
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
                              v0,
                              v2,
                              v1,
                              v37,
                              v45
                            ]
                          }
                        ]
                      },
                      v46,
                      v0
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
                      v0,
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
                                  v0,
                                  v8,
                                  v33,
                                  v32,
                                  v30
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v43,
                      v44,
                      v36,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
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
                              v2,
                              v1,
                              v37,
                              v45,
                              v0
                            ]
                          }
                        ]
                      },
                      v46
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
                      v0,
                      v47,
                      v48
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "game_information",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateGameInformation",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "opponent",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportunityTemplateOpponentOutput",
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
                            "selections": v19
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
                                      v0,
                                      v8,
                                      v33
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "unknownOpponent",
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
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": v49,
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
                      v50,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v0,
                          v8,
                          v32,
                          v31,
                          v51,
                          v33,
                          v52
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesFromClub",
                "storageKey": "circlesFromClub(last:100)",
                "args": v49,
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
                      v50,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v0,
                          v8,
                          v32,
                          v31,
                          v33,
                          v52
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:100)",
                "args": v49,
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
                      v50,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v0,
                          v8,
                          v32,
                          v53,
                          v33,
                          v52
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
            "alias": "filterSport",
            "name": "sport",
            "storageKey": null,
            "args": null,
            "concreteType": "Sport",
            "plural": false,
            "selections": [
              v0,
              v24,
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
                  v0,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "EN",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v54
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v54
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
              v0,
              v8,
              v31,
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
                  v16,
                  v17,
                  v14
                ]
              },
              v33
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
            "selections": v13
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
              v0,
              v8,
              v53,
              v32,
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
              v51,
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
                      v24,
                      v5
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
                        "selections": v55
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v55
                      },
                      v0
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
                  v39,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "zip",
                    "args": null,
                    "storageKey": null
                  },
                  v41,
                  v40,
                  v42
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "publicShortCode",
                "args": null,
                "storageKey": null
              },
              v31,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "coOwners",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v13
              },
              v33,
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
                  v16,
                  v18,
                  v28,
                  v29,
                  v17,
                  v56
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
                  v16,
                  v17,
                  v56
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
                  v8,
                  v32,
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
                  v57,
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
                  v8,
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
                      v57
                    ]
                  }
                ]
              },
              v9
            ]
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
              v32,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunityTypes",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityType",
                "plural": true,
                "selections": [
                  v0,
                  v48,
                  v47
                ]
              },
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '70904a320f049165f990a3e2629bbdd6';
module.exports = node;

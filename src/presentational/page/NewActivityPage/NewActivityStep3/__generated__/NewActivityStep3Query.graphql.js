/**
 * @flow
 * @relayHash 7bc100b06b773a3d7a347825f387c2de
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewActivityStep3_viewer$ref = any;
export type NewActivityStep3QueryVariables = {||};
export type NewActivityStep3QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewActivityStep3_viewer$ref
  |}
|};
export type NewActivityStep3Query = {|
  variables: NewActivityStep3QueryVariables,
  response: NewActivityStep3QueryResponse,
|};
*/


/*
query NewActivityStep3Query {
  viewer {
    ...NewActivityStep3_viewer
    id
  }
}

fragment NewActivityStep3_viewer on Viewer {
  ...Invitations_viewer
  me {
    id
    fees
    profileType
    ...Invitations_user
  }
}

fragment Invitations_viewer on Viewer {
  id
  ...InvitationModal_viewer
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

fragment AddUser_viewer on Viewer {
  me {
    id
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
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
v5 = [
  v0,
  v1,
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v8 = [
  v0,
  v6,
  v7
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v8
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v8
},
v12 = [
  v0,
  v9
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v16 = [
  v13,
  v14,
  v15
],
v17 = {
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
      "selections": v16
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v16
    }
  ]
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lat",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lng",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
  "plural": false,
  "selections": [
    v19,
    v20,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v6,
    v7,
    v0
  ]
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v24 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v5
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v30 = {
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
            v7,
            v0
          ]
        }
      ]
    }
  ]
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v32 = [
  v0
],
v33 = [
  v13,
  v15
],
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v32
},
v36 = [
  v13
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NewActivityStep3Query",
  "id": null,
  "text": "query NewActivityStep3Query {\n  viewer {\n    ...NewActivityStep3_viewer\n    id\n  }\n}\n\nfragment NewActivityStep3_viewer on Viewer {\n  ...Invitations_viewer\n  me {\n    id\n    fees\n    profileType\n    ...Invitations_user\n  }\n}\n\nfragment Invitations_viewer on Viewer {\n  id\n  ...InvitationModal_viewer\n}\n\nfragment Invitations_user on User {\n  id\n  profileType\n  pseudo\n  email\n  circlesUserIsIn(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        isCircleUsableByMembers\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circlesFromClub(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circles(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        mode\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment InvitationModal_viewer on Viewer {\n  ...Invitee_viewer\n  ...InvitedCircle_viewer\n  ...CirclesPageView_viewer\n  ...SearchModule_viewer\n  ...AddUser_viewer\n}\n\nfragment Invitee_viewer on Viewer {\n  id\n}\n\nfragment InvitedCircle_viewer on Viewer {\n  id\n  me {\n    pseudo\n    avatar\n    id\n  }\n  ...InvitedCircleDetails_viewer\n}\n\nfragment CirclesPageView_viewer on Viewer {\n  id\n  ...CirclesDetailPage_viewer\n  ...Stepper_viewer\n  me {\n    id\n    profileType\n    basicCircleSavedFiltersCreated\n    savedCircleFilters {\n      id\n      filterName\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    defaultSavedCircleFilter {\n      id\n      filterName\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n          logo\n          levels {\n            id\n            EN {\n              name\n              description\n              skillLevel\n            }\n            FR {\n              name\n              description\n              skillLevel\n            }\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n      location {\n        lat\n        lng\n        radius\n      }\n      circleType\n      memberType\n    }\n    subAccounts {\n      id\n    }\n  }\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment AddUser_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment CirclesDetailPage_viewer on Viewer {\n  id\n  ...ChatDetailPageContainer_viewer\n  me {\n    id\n    pseudo\n    profileType\n    isSubAccount\n    ...AddMember_user\n    ...AddChild_user\n  }\n  chat {\n    id\n  }\n  circle: circle {\n    id\n    publicShortCode\n    name\n    mode\n    type\n    isCircleUpdatableByMembers\n    isCircleAccessibleFromUrl\n    isCircleUsableByMembers\n    sport {\n      sport {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n      }\n      levels {\n        EN {\n          name\n        }\n        FR {\n          name\n        }\n        id\n      }\n    }\n    address {\n      address\n      zip\n      city\n      country\n    }\n    circlePreferences {\n      isChildrenCircle\n    }\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    coOwners {\n      id\n    }\n    memberCount\n    members {\n      id\n      pseudo\n      email\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n    }\n    memberParents {\n      id\n      pseudo\n      avatar\n      lastConnexionDate\n    }\n    askedInformation {\n      id\n      name\n      type\n      filledByOwner\n    }\n    membersInformation {\n      id\n      information\n      user {\n        id\n      }\n      value\n    }\n    termsOfUses {\n      id\n      name\n      link\n      content\n      acceptedBy {\n        user {\n          id\n        }\n      }\n    }\n    ...CircleOptions_circle\n    ...CircleDetails_circle\n  }\n  ...CircleOptions_viewer\n  ...AddMember_viewer\n  ...Subscribe_viewer\n  ...AddChild_viewer\n}\n\nfragment Stepper_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n    mangoId\n    pseudo\n    tutorialSteps {\n      createFormStep\n      setupMembersSubscriptionStep\n      fulfilProfileStep\n      addOfficialDocumentsStep\n      createSubAccountStep\n      shareAccessStep\n      createCircleStep\n      organizeStep\n      setupStatisticsStep\n      joinAPrivateCircleStep\n      joinAPublicCircleStep\n      giveAvailabilitiesStep\n      bookSportunityStep\n    }\n    subAccounts {\n      id\n    }\n    isSubAccount\n  }\n}\n\nfragment ChatDetailPageContainer_viewer on Viewer {\n  ...ChatDetailPage_viewer\n}\n\nfragment AddMember_user on User {\n  id\n  email\n  pseudo\n  profileType\n}\n\nfragment AddChild_user on User {\n  id\n  email\n  pseudo\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment CircleOptions_circle on Circle {\n  id\n  description\n  mode\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  sport {\n    sport {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n  address {\n    address\n    zip\n    city\n    country\n  }\n  circlePreferences {\n    isChildrenCircle\n  }\n  askedInformation {\n    id\n    name\n    type\n    filledByOwner\n  }\n  membersInformation {\n    id\n    information\n    user {\n      id\n    }\n    value\n  }\n}\n\nfragment CircleDetails_circle on Circle {\n  id\n  description\n  type\n  mode\n  isCircleUsableByMembers\n  publicShortCode\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment CircleOptions_viewer on Viewer {\n  id\n  ...AdminMembersInformation_viewer\n  ...CircleSport_viewer\n}\n\nfragment AddMember_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n}\n\nfragment Subscribe_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment AddChild_viewer on Viewer {\n  ...AddChildModal_viewer\n}\n\nfragment AddChildModal_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n\nfragment AdminMembersInformation_viewer on Viewer {\n  id\n}\n\nfragment CircleSport_viewer on Viewer {\n  id\n  me {\n    id\n    sports {\n      ...SportList_sports\n    }\n  }\n}\n\nfragment SportList_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n    logo\n    positions {\n      id\n      EN\n      FR\n    }\n    certificates {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        description\n        skillLevel\n      }\n      FR {\n        name\n        description\n        skillLevel\n      }\n    }\n  }\n  positions {\n    id\n    EN\n    FR\n  }\n  certificates {\n    validation\n    certificate {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment ChatDetailPage_viewer on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment InvitedCircleDetails_viewer on Viewer {\n  id\n  ...AddMemberModal_viewer\n  me {\n    id\n    pseudo\n    email\n    profileType\n  }\n}\n\nfragment AddMemberModal_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewActivityStep3Query",
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
            "name": "NewActivityStep3_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewActivityStep3Query",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              v1,
              v0,
              v2,
              v3,
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
                "selections": v5
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
                      v9,
                      v10,
                      v11,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": v12
                      },
                      v17
                    ]
                  },
                  v11,
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
                        "selections": v12
                      }
                    ]
                  },
                  v17
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phoneNumber",
                "args": null,
                "storageKey": null
              },
              v4,
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
                  v18,
                  v21,
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
                          v22,
                          v17
                        ]
                      },
                      v17
                    ]
                  },
                  v23,
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
                      v0,
                      v1
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
                  v0,
                  v18,
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
                          v22,
                          v10,
                          v17
                        ]
                      },
                      v17
                    ]
                  },
                  v21,
                  v23,
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
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": v24,
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
                      v25,
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
                          v13,
                          v26,
                          v27,
                          v28,
                          v29,
                          v30
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
                "args": v24,
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
                      v25,
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
                          v13,
                          v26,
                          v27,
                          v29,
                          v30
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
                "args": v24,
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
                      v25,
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
                          v13,
                          v26,
                          v31,
                          v29,
                          v30
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
            "name": "chat",
            "storageKey": null,
            "args": null,
            "concreteType": "Chat",
            "plural": false,
            "selections": v32
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
              v13,
              v31,
              v26,
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
              v28,
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
                      v22,
                      v10
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
                        "selections": v33
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v33
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
                      v19,
                      v20
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
              v27,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "coOwners",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v32
              },
              v29,
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
                  v2,
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
                  v4,
                  v34
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
                  v4,
                  v34
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
                  v13,
                  v26,
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
                  v35,
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
                  v13,
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
                      v35
                    ]
                  }
                ]
              },
              v14
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
              v22,
              v10,
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
                    "selections": v36
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v36
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
              v13,
              v27,
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
                  v4,
                  v3
                ]
              },
              v29
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c379d79bc5ace55b887d9e8733c3ee4';
module.exports = node;

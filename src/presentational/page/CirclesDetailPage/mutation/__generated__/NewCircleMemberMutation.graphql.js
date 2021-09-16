/**
 * @flow
 * @relayHash 5289a34e1d31207336e9016ed4732cc7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CirclesDetailPage_viewer$ref = any;
type CirclesItem_circle$ref = any;
export type addCircleMemberInput = {
  circleId: string,
  userId?: ?string,
  pseudo?: ?string,
  email?: ?string,
  parentId?: ?string,
  parentEmail?: ?string,
  parentPseudo?: ?string,
  clientMutationId?: ?string,
};
export type NewCircleMemberMutationVariables = {|
  input: addCircleMemberInput,
  queryDetails: boolean,
  circleId?: ?string,
|};
export type NewCircleMemberMutationResponse = {|
  +addCircleMember: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +$fragmentRefs: CirclesDetailPage_viewer$ref
    |},
    +edge: ?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: CirclesItem_circle$ref,
      |}
    |},
  |}
|};
export type NewCircleMemberMutation = {|
  variables: NewCircleMemberMutationVariables,
  response: NewCircleMemberMutationResponse,
|};
*/


/*
mutation NewCircleMemberMutation(
  $input: addCircleMemberInput!
  $queryDetails: Boolean!
  $circleId: ID
) {
  addCircleMember(input: $input) {
    clientMutationId
    viewer {
      ...CirclesDetailPage_viewer_2razqW
      id
    }
    edge {
      node {
        id
        ...CirclesItem_circle_1ft31x
      }
    }
  }
}

fragment CirclesDetailPage_viewer_2razqW on Viewer {
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
  circle: circle(id: $circleId) {
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

fragment CirclesItem_circle_1ft31x on Circle {
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
  termsOfUses @include(if: $queryDetails) {
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
    "name": "input",
    "type": "addCircleMemberInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryDetails",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "addCircleMemberInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v8 = [
  v3,
  v4,
  v5
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v11 = [
  v3,
  v9,
  v10
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v11
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": v11
},
v15 = [
  v3,
  v12
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skillLevel",
  "args": null,
  "storageKey": null
},
v19 = [
  v16,
  v17,
  v18
],
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v19
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v19
    }
  ]
},
v21 = [
  v3
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mode",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleAccessibleFromUrl",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCircleUsableByMembers",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v9,
    v10,
    v3
  ]
},
v27 = [
  v16,
  v18
],
v28 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v8
},
v29 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "coOwners",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v21
},
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v32 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v21
},
v33 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "termsOfUses",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleTermsOfUse",
  "plural": true,
  "selections": [
    v3,
    v16,
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
        v32
      ]
    }
  ]
},
v34 = [
  v16
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "NewCircleMemberMutation",
  "id": null,
  "text": "mutation NewCircleMemberMutation(\n  $input: addCircleMemberInput!\n  $queryDetails: Boolean!\n  $circleId: ID\n) {\n  addCircleMember(input: $input) {\n    clientMutationId\n    viewer {\n      ...CirclesDetailPage_viewer_2razqW\n      id\n    }\n    edge {\n      node {\n        id\n        ...CirclesItem_circle_1ft31x\n      }\n    }\n  }\n}\n\nfragment CirclesDetailPage_viewer_2razqW on Viewer {\n  id\n  ...ChatDetailPageContainer_viewer\n  me {\n    id\n    pseudo\n    profileType\n    isSubAccount\n    ...AddMember_user\n    ...AddChild_user\n  }\n  chat {\n    id\n  }\n  circle: circle(id: $circleId) {\n    id\n    publicShortCode\n    name\n    mode\n    type\n    isCircleUpdatableByMembers\n    isCircleAccessibleFromUrl\n    isCircleUsableByMembers\n    sport {\n      sport {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n      }\n      levels {\n        EN {\n          name\n        }\n        FR {\n          name\n        }\n        id\n      }\n    }\n    address {\n      address\n      zip\n      city\n      country\n    }\n    circlePreferences {\n      isChildrenCircle\n    }\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    coOwners {\n      id\n    }\n    memberCount\n    members {\n      id\n      pseudo\n      email\n      firstName\n      lastName\n      avatar\n      lastConnexionDate\n    }\n    memberParents {\n      id\n      pseudo\n      avatar\n      lastConnexionDate\n    }\n    askedInformation {\n      id\n      name\n      type\n      filledByOwner\n    }\n    membersInformation {\n      id\n      information\n      user {\n        id\n      }\n      value\n    }\n    termsOfUses {\n      id\n      name\n      link\n      content\n      acceptedBy {\n        user {\n          id\n        }\n      }\n    }\n    ...CircleOptions_circle\n    ...CircleDetails_circle\n  }\n  ...CircleOptions_viewer\n  ...AddMember_viewer\n  ...Subscribe_viewer\n  ...AddChild_viewer\n}\n\nfragment CirclesItem_circle_1ft31x on Circle {\n  id\n  name\n  memberCount\n  mode\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  type\n  owner {\n    id\n    avatar\n    pseudo\n  }\n  coOwners {\n    id\n  }\n  members {\n    id\n  }\n  memberParents {\n    id\n  }\n  termsOfUses @include(if: $queryDetails) {\n    id\n    name\n    link\n    content\n    acceptedBy {\n      user {\n        id\n      }\n    }\n  }\n}\n\nfragment ChatDetailPageContainer_viewer on Viewer {\n  ...ChatDetailPage_viewer\n}\n\nfragment AddMember_user on User {\n  id\n  email\n  pseudo\n  profileType\n}\n\nfragment AddChild_user on User {\n  id\n  email\n  pseudo\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment CircleOptions_circle on Circle {\n  id\n  description\n  mode\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  isCircleAccessibleFromUrl\n  sport {\n    sport {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n  address {\n    address\n    zip\n    city\n    country\n  }\n  circlePreferences {\n    isChildrenCircle\n  }\n  askedInformation {\n    id\n    name\n    type\n    filledByOwner\n  }\n  membersInformation {\n    id\n    information\n    user {\n      id\n    }\n    value\n  }\n}\n\nfragment CircleDetails_circle on Circle {\n  id\n  description\n  type\n  mode\n  isCircleUsableByMembers\n  publicShortCode\n  address {\n    address\n    city\n    country\n    position {\n      lat\n      lng\n    }\n  }\n  sport {\n    sport {\n      id\n      logo\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        skillLevel\n      }\n      FR {\n        name\n        skillLevel\n      }\n    }\n  }\n}\n\nfragment CircleOptions_viewer on Viewer {\n  id\n  ...AdminMembersInformation_viewer\n  ...CircleSport_viewer\n}\n\nfragment AddMember_viewer on Viewer {\n  id\n  ...SearchModule_viewer\n}\n\nfragment Subscribe_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment AddChild_viewer on Viewer {\n  ...AddChildModal_viewer\n}\n\nfragment AddChildModal_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment AdminMembersInformation_viewer on Viewer {\n  id\n}\n\nfragment CircleSport_viewer on Viewer {\n  id\n  me {\n    id\n    sports {\n      ...SportList_sports\n    }\n  }\n}\n\nfragment SportList_sports on SportDescriptor {\n  sport {\n    id\n    name {\n      id\n      EN\n      FR\n    }\n    logo\n    positions {\n      id\n      EN\n      FR\n    }\n    certificates {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n    levels {\n      id\n      EN {\n        name\n        description\n        skillLevel\n      }\n      FR {\n        name\n        description\n        skillLevel\n      }\n    }\n  }\n  positions {\n    id\n    EN\n    FR\n  }\n  certificates {\n    validation\n    certificate {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n    }\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment ChatDetailPage_viewer on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleMemberMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addCircleMember",
        "storageKey": null,
        "args": v1,
        "concreteType": "addCircleMemberPayload",
        "plural": false,
        "selections": [
          v2,
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
                "name": "CirclesDetailPage_viewer",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "circleId",
                    "variableName": "circleId",
                    "type": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "CircleEdge",
            "plural": false,
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
                  v3,
                  {
                    "kind": "FragmentSpread",
                    "name": "CirclesItem_circle",
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "queryDetails",
                        "variableName": "queryDetails",
                        "type": null
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
  "operation": {
    "kind": "Operation",
    "name": "NewCircleMemberMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addCircleMember",
        "storageKey": null,
        "args": v1,
        "concreteType": "addCircleMemberPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "me",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v3,
                  v4,
                  v5,
                  v6,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isSubAccount",
                    "args": null,
                    "storageKey": null
                  },
                  v7,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v8
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
                          v3,
                          v12,
                          v13,
                          v14,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "certificates",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Certificate",
                            "plural": true,
                            "selections": v15
                          },
                          v20
                        ]
                      },
                      v14,
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
                            "selections": v15
                          }
                        ]
                      },
                      v20
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "phoneNumber",
                    "args": null,
                    "storageKey": null
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
                "selections": v21
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
                  v3,
                  v16,
                  v22,
                  v23,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isCircleUpdatableByMembers",
                    "args": null,
                    "storageKey": null
                  },
                  v24,
                  v25,
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
                          v3,
                          v26,
                          v13
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
                            "selections": v27
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v27
                          },
                          v3
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
                    "name": "publicShortCode",
                    "args": null,
                    "storageKey": null
                  },
                  v28,
                  v29,
                  v30,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "members",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v3,
                      v4,
                      v7,
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
                      v5,
                      v31
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
                      v3,
                      v4,
                      v5,
                      v31
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
                      v3,
                      v16,
                      v23,
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
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "information",
                        "args": null,
                        "storageKey": null
                      },
                      v32,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "value",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  v33,
                  v17
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
                  v3,
                  v26,
                  v13,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "levels",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Translated",
                    "plural": true,
                    "selections": [
                      v3,
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
                "kind": "LinkedField",
                "alias": "selectedCircle",
                "name": "circle",
                "storageKey": null,
                "args": null,
                "concreteType": "Circle",
                "plural": false,
                "selections": [
                  v3,
                  v16,
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
                      v3,
                      v4,
                      v5,
                      v6
                    ]
                  },
                  v30
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "CircleEdge",
            "plural": false,
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
                  v23,
                  v3,
                  v30,
                  v22,
                  v25,
                  v24,
                  v16,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      v3,
                      v5,
                      v4
                    ]
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
                    "selections": v21
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "memberParents",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v21
                  },
                  {
                    "kind": "Condition",
                    "passingValue": true,
                    "condition": "queryDetails",
                    "selections": [
                      v33
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
(node/*: any*/).hash = 'ceb0ed483c7241bfbd714eecf719f7ed';
module.exports = node;

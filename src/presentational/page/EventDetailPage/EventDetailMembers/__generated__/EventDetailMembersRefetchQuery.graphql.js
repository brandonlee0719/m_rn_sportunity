/**
 * @flow
 * @relayHash 79363bc884b64431606de9a6a7fb036e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventDetailMembers_viewer$ref = any;
export type EventDetailMembersRefetchQueryVariables = {|
  sportunityRelaunchId: string,
  queryRelaunch: boolean,
|};
export type EventDetailMembersRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventDetailMembers_viewer$ref
  |}
|};
export type EventDetailMembersRefetchQuery = {|
  variables: EventDetailMembersRefetchQueryVariables,
  response: EventDetailMembersRefetchQueryResponse,
|};
*/


/*
query EventDetailMembersRefetchQuery(
  $sportunityRelaunchId: String!
  $queryRelaunch: Boolean!
) {
  viewer {
    ...EventDetailMembers_viewer_mn3kX
    id
  }
}

fragment EventDetailMembers_viewer_mn3kX on Viewer {
  ...VoteForManOfTheGame_viewer
  ...PriceView_viewer
  ...ButtonSportunity_viewer
  ...SearchModule_viewer
  ...ButtonFeedback_viewer
  ...StatisticFillingModal_viewer
  ...PriceModal_viewer
  relaunchInviteds(sportunityID: $sportunityRelaunchId) @include(if: $queryRelaunch) {
    id
  }
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

fragment PriceModal_viewer on Viewer {
  id
  ...Prices_viewer
}

fragment Prices_viewer on Viewer {
  id
  me {
    fees
    id
  }
}

fragment SportunityStatisticsModal_viewer on Viewer {
  id
}

fragment ParticipantsStatisticsModal_viewer on Viewer {
  id
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityRelaunchId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryRelaunch",
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
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  v3
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventDetailMembersRefetchQuery",
  "id": null,
  "text": "query EventDetailMembersRefetchQuery(\n  $sportunityRelaunchId: String!\n  $queryRelaunch: Boolean!\n) {\n  viewer {\n    ...EventDetailMembers_viewer_mn3kX\n    id\n  }\n}\n\nfragment EventDetailMembers_viewer_mn3kX on Viewer {\n  ...VoteForManOfTheGame_viewer\n  ...PriceView_viewer\n  ...ButtonSportunity_viewer\n  ...SearchModule_viewer\n  ...ButtonFeedback_viewer\n  ...StatisticFillingModal_viewer\n  ...PriceModal_viewer\n  relaunchInviteds(sportunityID: $sportunityRelaunchId) @include(if: $queryRelaunch) {\n    id\n  }\n}\n\nfragment VoteForManOfTheGame_viewer on Viewer {\n  me {\n    id\n  }\n  statisticPreferences {\n    private\n  }\n}\n\nfragment PriceView_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment ButtonSportunity_viewer on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n}\n\nfragment SearchModule_viewer on Viewer {\n  id\n  ...SportunityItem_viewer\n  ...FilterDetailSports_viewer\n  me {\n    id\n    profileType\n    ...SportunityItem_user\n  }\n  selectedCircle: circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n    members {\n      id\n      pseudo\n      avatar\n      profileType\n    }\n    memberCount\n  }\n}\n\nfragment ButtonFeedback_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment StatisticFillingModal_viewer on Viewer {\n  ...SportunityStatisticsModal_viewer\n  ...ParticipantsStatisticsModal_viewer\n}\n\nfragment PriceModal_viewer on Viewer {\n  id\n  ...Prices_viewer\n}\n\nfragment Prices_viewer on Viewer {\n  id\n  me {\n    fees\n    id\n  }\n}\n\nfragment SportunityStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment ParticipantsStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment SportunityItem_viewer on Viewer {\n  ...TopContent_viewer\n}\n\nfragment FilterDetailSports_viewer on Viewer {\n  filterSport: sport {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        name\n      }\n      FR {\n        name\n      }\n    }\n  }\n}\n\nfragment SportunityItem_user on User {\n  ...TopContent_user\n  ...BottomContent_user\n}\n\nfragment TopContent_user on User {\n  id\n}\n\nfragment BottomContent_user on User {\n  id\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventDetailMembersRefetchQuery",
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
            "name": "EventDetailMembers_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "queryRelaunch",
                "variableName": "queryRelaunch",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EventDetailMembersRefetchQuery",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
                "args": null,
                "storageKey": null
              }
            ]
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
          },
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "logo",
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
                    "selections": v4
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "FR",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportLevel",
                    "plural": false,
                    "selections": v4
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
              v3,
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
                  v5,
                  v6
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
                  v5,
                  v6,
                  v2
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "memberCount",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryRelaunch",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "relaunchInviteds",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "sportunityID",
                    "variableName": "sportunityRelaunchId",
                    "type": "String!"
                  }
                ],
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v1
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
(node/*: any*/).hash = '0617e5363e26a53fd338e963ef6c77bc';
module.exports = node;

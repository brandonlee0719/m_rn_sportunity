import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UserAccountMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id,
        firstName,
        lastName,
        mangoId
        address {
          address
          city
          zip
          country
          position {
            lat,
            lng
          }
        },
        birthday,
        shouldDeclareVAT,
        nationality,
        profileType,
        isProfileComplete,
      },
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input
    },
    updater: (store) => {
      const payload = store.getRootField('upUser');
      const newItem = payload.getLinkedRecord('user');
      let currentItem = store.get(input.userID);

      // currentItem.setValue(newItem.getValue('firstName'), 'firstName')
      // currentItem.setValue(newItem.getValue('lastName'), 'lastName')
      // currentItem.setLinkedRecord(newItem.getLinkedRecord('address'), 'address')
      // currentItem.setValue(newItem.getValue('birthday'), 'birthday')
      // currentItem.setValue(newItem.getValue('shouldDeclareVAT'), 'shouldDeclareVAT')
      // currentItem.setValue(newItem.getValue('nationality'), 'nationality')
      // currentItem.setValue(newItem.getValue('profileType'), 'profileType')
      // currentItem.setValue(newItem.getValue('isProfileComplete'), 'isProfileComplete')
      onCompleted()
    },
    onError
  })
}

export default {commit}
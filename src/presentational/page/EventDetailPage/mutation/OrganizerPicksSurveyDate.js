import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation OrganizerPicksSurveyDateMutation($input: organizerPickSurveyDateInput!) {
    organizerPickDate(input: $input) {
      clientMutationId,
      edge {
        node {
          beginning_date
          ending_date
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
        }
      }
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
      const payload = store.getRootField('organizerPickDate');
      const newSportunity = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let sportunity = store.get(input.sportunityID);

      sportunity.setLinkedRecord(newSportunity.getLinkedRecord('survey'), 'survey')
      sportunity.setValue(newSportunity.getValue('beginning_date'), 'beginning_date')
      sportunity.setValue(newSportunity.getValue('ending_date'), 'ending_date')
      onCompleted()
    },
    onError
  })
}

export default {commit}

import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation InvitedAnswersSurveyMutation($input: invitedAnswersSurveyInput!) {
    invitedAnswersSurvey(input: $input) {
      clientMutationId,
      edge {
        node {
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
      const payload = store.getRootField('invitedAnswersSurvey');
      const newSportunity = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let sportunity = store.get(input.sportunityID);

      sportunity.setLinkedRecord(newSportunity.getLinkedRecord('survey'), 'survey')
      onCompleted()
    },
    onError
  })
}

export default {commit}

import { commitMutation, graphql } from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateUserTutorialStepsMutation($input: updateTutorialStepInput!) {
    updateTutorialStep(input: $input) {
      clientMutationId
      user {
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
      }
    }
  }
`;

function commit(input, { onSuccess: onCompleted, onFailure: onError }) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        userID: input.userIDVar,
        tutorialSteps: input.tutorialVar,
      },
    },
    updater: store => {
      onCompleted();
    },
    onError,
  });
}

export default { commit };

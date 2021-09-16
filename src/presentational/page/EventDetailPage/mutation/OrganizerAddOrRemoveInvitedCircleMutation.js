import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
	mutation OrganizerAddOrRemoveInvitedCircleMutation($input: updateSportunityInput!) {
		updateSportunity(input: $input) {
            clientMutationId,
            edge {
                node {
                    id
                    status
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
                }
            }
		}
	}
`;

function commit(input, onCompleted, onError) {
    return commitMutation(environment, {
		mutation, 
		variables: { 
			input : {
                sportunityID: input.sportunity.id,
                sportunity: {
                    invited_circles: input.updateInvitedCirclesVar,
                    price_for_circle: input.updatePriceForCircleVar,
                    modifyRepeatedSportunities: false
                },
            }
		}, 
		updater: (store) => { 
			onCompleted() 
		}, 
		onError 
	}) 
}
  

export default {commit}
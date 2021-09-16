import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  createRefetchContainer,
  graphql,
} from 'react-relay'
import { metrics, colors, fonts } from 'sportunity/src/theme';
import I18n from 'sportunity/src/lib/I18n';

class CirclePaymentReference extends Component {
	constructor(props) {
        super(props)		
    }

    componentDidMount = () => {
        if (this.props.circleId) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                query: true,
                circleId: this.props.circleId
            });
              
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
    }

    render() {
        const {viewer, circleId} = this.props;

        return (
            <View style={styles.refContainer}>
                <Text style={styles.ref}>
                {viewer.circlePersonalReference 
                ?   I18n.t('accountMembershipFeesReference') + ': ' + viewer.circlePersonalReference
                :   null}
                </Text>
            </View>
        )
	}
}

const styles = StyleSheet.create({
    refContainer: {
        marginBottom: metrics.baseMargin
    },
    ref: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})


export default createRefetchContainer(CirclePaymentReference, {
        viewer: graphql`
            fragment CircleUserReference_viewer on Viewer @argumentDefinitions (
                circleId: {type: "String!", defaultValue: ""},
                query: {type: "Boolean!", defaultValue: false}
            ) {
                id
                circlePersonalReference(circleId: $circleId) @include(if: $query)
            }
        `
    },
    graphql`
        query CircleUserReferenceRefetchQuery($circleId: String!, $query: Boolean!) {
            viewer {
                ...CircleUserReference_viewer @arguments(circleId: $circleId, query: $query)
            }
        }
    `
)
				
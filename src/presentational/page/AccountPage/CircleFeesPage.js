import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { metrics, colors, fonts } from 'sportunity/src/theme';
import I18n from 'sportunity/src/lib/I18n';

import CardItem from '../../list/CardItem/CardItem'

class CircleFeesPage extends Component {

  render() {
    const { viewer } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <CardItem
          title={I18n.t('accountSharedInformation')}
          onPress={() => {
            this.props.navigation.navigate('sharedInformation')
          }}
        />
        <CardItem
          title={I18n.t('accountMembershipFees')}
          onPress={() => {
            this.props.navigation.navigate('circleMembershipFees')
          }}
        />
      </ScrollView>
    )
  }
}

const CircleFeesPageTemp = createFragmentContainer(withNavigation(CircleFeesPage), {
  viewer: graphql`
    fragment CircleFeesPage_viewer on Viewer {
      me {
        id,
      }
    }
  `,
})

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('accountCircleFees')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CircleFeesPageQuery{
            viewer {
              ...CircleFeesPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <CircleFeesPageTemp viewer={props.viewer} query={props} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    justifyContent: 'center',
  },
})

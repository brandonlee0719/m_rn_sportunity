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

const PersonalInformationPage = ({ viewer }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <CardItem
      title={I18n.t('accountPaymentInformation')}
      subtitle={viewer.me.isProfileComplete ? I18n.t('accountInformationCompleted') : I18n.t('accountInformationComplete')}
      onPress={() => this.props.navigation.navigate('paymentInformation')}
    />
    <CardItem
      title={I18n.t('accountSharedInformation')}
      subtitle=''
      onPress={() => this.props.navigation.navigate('sharedInformation')}
    />
  </ScrollView>
)

const PersonalInformationPageTemp = createFragmentContainer(withNavigation(PersonalInformationPage), {
  viewer: graphql`
    fragment PersonalInformationPage_viewer on Viewer {
      me {
        id,
        isProfileComplete,
        profileType,
      }
    }
  `,
})

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('accountPersonalInformation')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PersonalInformationPageQuery{
            viewer {
              ...PersonalInformationPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <PersonalInformationPageTemp viewer={props.viewer} query={props} {...this.props}/>;
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

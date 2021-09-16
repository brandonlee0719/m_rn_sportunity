import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import {
  QueryRenderer,
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { withNavigation } from 'react-navigation';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import translations from 'sportunity/src/translations.js';
import NewCircleNavBar from './NewCircleNavBar';
import Heading from '../../UI/Heading';
import styles from './styles';
import { colors } from 'sportunity/src/theme';
import { dispatchToActions } from '../../../action/utils';
import { updateNewCircleType } from '../../../action/newCircleActions';
import FormListItem from '../../UI/FormListItem';

class NewCircleStep3 extends Component {
  updateType = (e) => {
    this.props.updateNewCircleType(e.key);
  }

  render() {
    const {
      viewer,
      navigation,
      circleType,
    } = this.props;

    const memberTypeList = viewer.me && viewer.me.profileType === 'PERSON'
    ?   [
            {key: 0, label: I18n.t('circles_member_type_'+0)},
            {key: 1, label: I18n.t('circles_member_type_'+1)},
        ]
    :   [
        {key: 0, label: I18n.t('circles_member_type_'+0)},
        {key: 1, label: I18n.t('circles_member_type_'+1)},
        {key: 2, label: I18n.t('circles_member_type_'+2)},
        {key: 3, label: I18n.t('circles_member_type_'+3)},
        {key: 4, label: I18n.t('circles_member_type_'+4)}
    ]

    return (
      <NewCircleNavBar
        step={3}
        displayNextButton={true}
        onNextButtonPress={() => navigation.navigate('NewCircleStep4')}
      >
        <ScrollView>
          <View style={styles.pickerContainer}>
            <Heading text={I18n.t('circle_memberType')} />
            <Text style={styles.typeLabel}>
              {memberTypeList.find(item => item.key === circleType).label}
            </Text>
          </View>

          {
            memberTypeList.map(memeberType => (
              <FormListItem
                type={memeberType.key === circleType ? 'primary' : 'secondary'}
                title={memeberType.label}
                onPress={() => this.updateType(memeberType)}
              />
            ))
          }

        </ScrollView>
      </NewCircleNavBar>
    );
  }
}

const stateToProps = (state) => ({
  circleType: state.sportunityNewCircle.circleType,
});

const dispatchToProps = dispatchToActions({
  updateNewCircleType,
})

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps,
)(NewCircleStep3);


const NewCircleStep3Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewCircleStep3_viewer on Viewer {
      id
      me {
        id
        profileType
      }
    }
  `,
});


export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('newCircle')
    }
  }
  render() {
    let openNewCircle = this.props.navigation.getParam('openNewCircle', null)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query NewCircleStep3Query {
            viewer {
              ...NewCircleStep3_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <NewCircleStep3Container viewer={props.viewer} openNewCircle={openNewCircle} query={props} {...this.props}/>;
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

I18n.fallbacks = true
I18n.translations = translations;
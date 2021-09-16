import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import style from './style';
import Inputs from '../Inputs/Inputs.js';
import NewActivityWithNavBar from '../NewActivityWithNavBar';
import Heading from '../../../UI/Heading';
import SelectTemplateButton from '../Templates/SelectTemplate';


/**
* NewActivity root component
*/
class NewActivityStep1 extends Component {
  render() {
    const {
      viewer,
      activityTitle,
      activityDescription,
      areErrorsShown,
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
    } = this.props;

    const isLoggedIn = this.props.screenProps.isLoggedIn;
    const displayNextButton = activityTitle && activityDescription;

    const from = navigation.getParam('from', null);

    return(
      <NewActivityWithNavBar
        sportunityId={sportunityId}
        step={1}
        noValidate={from === 'step7'}
        updateSerie={updateSerie}
        reOrganizing={reOrganizing}
        isLoggedIn={isLoggedIn}
        displayNextButton={displayNextButton}
        navigation={navigation}
        onNextButtonPress={() => {
          navigation.navigate('NewActivityStep2', { sportunityId, updateSerie });
          //navigation.navigate('sportunitySports');
        }}
      >
        {viewer
        ? <ScrollView contentContainerStyle={style.container}>
            <Heading text={I18n.t('information')} />
            <Inputs />
            {
              areErrorsShown && (!activityTitle || !activityDescription) &&
                <Text style={style.errorText}>{I18n.t('enterTitleDescriptionErr')}</Text>
            }
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              {!sportunityId && <SelectTemplateButton viewer={viewer}/>}
            </View>
          </ScrollView>
        : <ActivityLoader isAnimating={true}/>
        }
      </NewActivityWithNavBar>
    )
  }
}

NewActivityStep1.propTypes = {
  viewer: PropTypes.object.isRequired,
  activityTitle: PropTypes.string.isRequired,
  activityDescription: PropTypes.string.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  fieldChanged: state.sportunityNewActivity.fieldChanged,
  activityTitle: state.sportunityNewActivity.activityTitle,
  activityDescription: state.sportunityNewActivity.activityDescription,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
});

const ReduxContainer = connect(
  stateToProps,
)(NewActivityStep1);

const NewActivityPageTemp = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep1_viewer on Viewer{
      me {
        id,
      }
      ...SelectTemplate_viewer
    }
  `,
});

export default class extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    let sportunityId = this.props.navigation.getParam('sportunityId', null)
    let updateSerie = this.props.navigation.getParam('updateSerie', null)

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query NewActivityStep1Query{
            viewer {
              ...NewActivityStep1_viewer
            }
          }
        `}
        variables={{
        }}
        render={({error, props}) => (
          <NewActivityPageTemp
            sportunityId={sportunityId}
            updateSerie={updateSerie}
            viewer={props ? props.viewer : null}
            query={props}
            setTitle={this.setTitle}
            {...this.props}
          />
        )}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;

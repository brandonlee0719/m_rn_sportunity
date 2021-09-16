import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import I18n from 'react-native-i18n';
import moment from 'moment';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import translations from 'sportunity/src/translations.js';
import NavBar from '../NavBar';
import Heading from '../../../UI/Heading';
import Date from '../Date/DateModal/DateModal.js';
import Button from '../Date/DateModal/Button/Button';

import style from './style';
import { dispatchToActions } from '../../../../action/utils';
import { resetAllFields } from '../../../../action/newActivityActions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class NewActivityStep5 extends Component {
  render() {
    const {
      viewer,
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
      areErrorsShown,
      newActivityDate,
      newActivityEndDate,
      newActivityDateForServer,
      newActivityEndDateForServer,
    } = this.props;

    const isLoggedIn = this.props.screenProps.isLoggedIn;

    return(
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <NavBar
          step={5}
          isLoggedIn={isLoggedIn}
          displayNextButton={true}
          onNextButtonPress={() => !!this.validationButton && this.validationButton.openCloseDateModal()}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          navigation={navigation}
        />
        {viewer 
        ? <ScrollView contentContainerStyle={style.container}>
            <Date heading={I18n.t('date')} onValidDate={() => navigation.navigate('NewActivityStep6', { sportunityId, updateSerie })} />
            {areErrorsShown && (!newActivityDate || !newActivityEndDate) 
            ? <Text style={style.errorText}>
                {I18n.t('enterDateErr')}
              </Text> 
            : null
            }
            {areErrorsShown && moment(newActivityEndDateForServer).isBefore(newActivityDateForServer) 
            ? <Text style={style.errorText}>
                {I18n.t('endingDateErr')}
              </Text> 
            : null
            }
            <View style={{
              overflow: 'hidden',
              left: 0,
              right: 0,
              position: 'absolute',
              top: SCREEN_HEIGHT,
              bottom: -SCREEN_HEIGHT,
            }}>
              <Button
                onValidDate={() => navigation.navigate('NewActivityStep6', { sportunityId, updateSerie })}
                onRef={ref => (this.validationButton = ref)}
              />
            </View>
          </ScrollView>
        : <ActivityLoader isAnimating={true}/>
        }
      </View>
    )
  }
}

NewActivityStep5.propTypes = {
  viewer: PropTypes.object.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
  resetAllFields: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({

  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToActions({
    resetAllFields
  }),
)(NewActivityStep5);

const NewActivityStep5Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep5_viewer on Viewer{
      me {
        id,
        fees,
        profileType
      }
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
          query NewActivityStep5Query{
            viewer {
              ...NewActivityStep5_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => (
          <NewActivityStep5Container 
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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import I18n from 'react-native-i18n';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import translations from 'sportunity/src/translations.js';
import NavBar from '../NavBar';
import Heading from '../../../UI/Heading';
import { colors } from 'sportunity/src/theme';

import style from './style';
import Sport from '../Sport/Sport.js';
import SportLevels from '../Sport/SportLevels.js';
import EventType from '../EventType'
import { dispatchToActions } from '../../../../action/utils';
import { resetAllFields, updateSportsFormValidity } from '../../../../action/newActivityActions';

class NewActivityStep2 extends Component {
  componentDidUpdate(prevProps) {
    const { sportName } = this.props;
    updateSportsFormValidity(!!sportName);
  }

  render() {
    const {
      viewer,
      sportunitySport,
      sportName,
      areErrorsShown,
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
      sportunityType,
      isSportsFormValid,
    } = this.props;

    const isLoggedIn = this.props.screenProps.isLoggedIn;

    return(
      <View style={{ flex: 1, backgroundColor: colors.snow }}>
        <NavBar
          step={2}
          isLoggedIn={isLoggedIn}
          displayNextButton={isSportsFormValid}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          navigation={navigation}
          onNextButtonPress={() => navigation.navigate('NewActivityStep3', { sportunityId, updateSerie,
             placeholder:viewer.me && viewer.me.profileType !== 'PERSON' ? I18n.t('summon_search_placeholder') : I18n.t('invitation_search_placeholder') })}
        />
        <ScrollView>
          <View style={style.container}>

          <Heading text={I18n.t('sport')} />
          <Sport 
            viewer={viewer} 
            navigation={this.props.navigation}
          />
          {!!sportName && 
            <SportLevels 
              viewer={viewer} 
              sportunitySport={sportunitySport}
              navigation={this.props.navigation}
            />
          }
          {
            areErrorsShown && !sportName ?
              <Text style={style.errorText}>{I18n.t('enterSportErr')}</Text> :
                null
          }

          {!!viewer && viewer.me && !!sportName &&
            <EventType viewer={viewer} user={viewer.me} />
          }
          </View>

          </ScrollView>
      </View>
    )
  }
}

NewActivityStep2.propTypes = {
  viewer: PropTypes.object.isRequired,
  sportName: PropTypes.string.isRequired,
  allLevels: PropTypes.array.isRequired,
  placeName: PropTypes.string.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
  resetAllFields: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  fieldChanged: state.sportunityNewActivity.fieldChanged, 
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  sportName: state.sportunityNewActivity.sportName,
  allLevels: state.sportunityNewActivity.allLevels,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
  sportunityType: state.sportunityNewActivity.sportunityType,
  isSportsFormValid: state.sportunityNewActivity.isSportsFormValid,
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToActions({
    resetAllFields,
    updateSportsFormValidity,
  }),
)(NewActivityStep2);

const NewActivityStep2Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep2_viewer on Viewer {
      ...EventType_viewer
      me {
        id,
        fees,
        profileType
        ...EventType_user
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
          query NewActivityStep2Query{
            viewer {
              ...NewActivityStep2_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => (
          <NewActivityStep2Container 
            sportunityId={sportunityId} 
            updateSerie={updateSerie} 
            viewer={props ? props.viewer : null} 
            query={props} 
            {...this.props} 
            setTitle={this.setTitle}
          />
        )}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;

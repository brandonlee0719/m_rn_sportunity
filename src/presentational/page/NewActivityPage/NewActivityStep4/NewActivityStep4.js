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
import Place from '../Place/Place'
import style from '../style';

class NewActivityStep4 extends Component {
  render() {
    const {
      viewer,
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
      placeName,
      areErrorsShown,
    } = this.props;

    const isLoggedIn = this.props.screenProps.isLoggedIn;
    const displayNextButton = !!placeName;

    return(
      <View style={style.container}>
        <NavBar
          step={4}
          isLoggedIn={isLoggedIn}
          displayNextButton={displayNextButton}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          navigation={navigation}
          onNextButtonPress={() => navigation.navigate('NewActivityStep5', { sportunityId, updateSerie })}
        />
        {viewer
        ? <ScrollView>
            <Heading text={I18n.t('place')} />

            <Place viewer={viewer} />
            {
              areErrorsShown && !placeName ?
                <Text style={style.errorText}>{I18n.t('enterPlaceErr')}</Text> :
                  null
            }
          </ScrollView>
        : <ActivityLoader isAnimating={true}/>
        }
      </View>
    )
  }
}

NewActivityStep4.propTypes = {
  viewer: PropTypes.object.isRequired,
  placeName: PropTypes.string.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  placeName: state.sportunityNewActivity.placeName,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
});

const ReduxContainer = connect(
  stateToProps,
)(NewActivityStep4);

const NewActivityStep4Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep4_viewer on Viewer{
      ...PlaceList_viewer
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
          query NewActivityStep4Query{
            viewer {
              ...NewActivityStep4_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => (
          <NewActivityStep4Container 
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

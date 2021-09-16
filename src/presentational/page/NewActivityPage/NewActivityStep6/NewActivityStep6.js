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

import Price from '../Price/Price.js';
import Number from '../Number/Number.js';
import Private from '../Private/Private.js';
import CoOrganizers from '../CoOrganizers';
import AdvancedSettings from '../AdvancedSettings/AdvancedSettings';

import style from '../style';

class NewActivityStep6 extends Component {
  render() {
    const {
      viewer,
      sportName,
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
      areErrorsShown,
      minimumNumber,
      maximumNumber,
      isExactlySwitchOn,
      isPriceUpdatable,
      isActivityPrivate,
      invitedCircles, 
      invitedCirclesAndPrices
    } = this.props;

    const isLoggedIn = this.props.screenProps.isLoggedIn;
    const displayNextButton = !!minimumNumber && !!maximumNumber;

    return(
      <View style={style.container}>
        <NavBar
          step={6}
          isLoggedIn={isLoggedIn}
          displayNextButton={displayNextButton}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          navigation={navigation}
          onNextButtonPress={() => navigation.navigate('NewActivityStep7', { sportunityId, updateSerie })}
        />
        {viewer
        ? <ScrollView>
            <Heading text={I18n.t('numberOfParticipants')} />

            <Number viewer={viewer} isUpdating={sportunityId ? true : false}/>
            {
              areErrorsShown && ((isExactlySwitchOn && !exactlyNumber) || (!isExactlySwitchOn && (!minimumNumber || !maximumNumber || minimumNumber > maximumNumber))) ?
                <Text style={style.errorText}>{I18n.t('numberOfParticipantErr')}</Text> :
                  null
            }

            <Private user={viewer.me}/>

            {isLoggedIn && sportName !== "" && <CoOrganizers user={viewer.me} viewer={viewer}/>}

            { minimumNumber && maximumNumber && isPriceUpdatable && (!isActivityPrivate || invitedCircles.length > 0)
              ? <Price viewer={viewer} />
              : null
            }

            {!isActivityPrivate && <AdvancedSettings viewer={viewer} user={viewer.me} />}

          </ScrollView>
        : <ActivityLoader isAnimating={true}/>
        }
      </View>
    )
  }
}

NewActivityStep6.propTypes = {
  viewer: PropTypes.object.isRequired,
  sportName: PropTypes.string.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  sportName: state.sportunityNewActivity.sportName,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
  exactlyNumber: state.sportunityNewActivity.exactlyNumber,
  isPriceUpdatable: state.sportunityNewActivity.isPriceUpdatable,
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  invitedCircles: state.sportunityNewActivity.invitedCircles,
});

const ReduxContainer = connect(
  stateToProps,
)(NewActivityStep6);

const NewActivityStep6Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep6_viewer on Viewer{
      ...CoOrganizerModal_viewer
      ...Prices_viewer,
      ...Price_viewer,
      ...AdvancedSettings_viewer
      ...SelectTemplate_viewer
      me {
        id,
        fees,
        profileType
        ...AdvancedSettings_user
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
          query NewActivityStep6Query{
            viewer {
              ...NewActivityStep6_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => (
          <NewActivityStep6Container
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

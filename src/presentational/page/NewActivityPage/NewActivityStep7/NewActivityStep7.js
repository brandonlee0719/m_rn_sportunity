import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Alert, View, Switch, Platform, Image } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
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
import validateStyle from 'sportunity/src/presentational/page/NewActivityPage/Validate/style.js';
import NavBar from '../NavBar';
import Heading from '../../../UI/Heading';
import Validate from '../Validate/Validate.js';
import FormListItem from '../../../UI/FormListItem';
import SaveTemplateButton from '../Templates/SaveButton';

import style from './style';
import { dispatchToActions } from '../../../../action/utils';
import { resetAllFields } from '../../../../action/newActivityActions';

class NewActivityStep7 extends Component {
  navigateToStep = (step) => {
    const { sportunityId, updateSerie, navigation } = this.props;
    navigation.push(`NewActivityStep${step}`, { sportunityId, updateSerie });
  }

  render() {
    const {
      viewer,
      activityTitle,
      activityDescription,
      placeName,
      newActivityDateForServer,
      newActivityEndDateForServer,
      minimumNumber,
      maximumNumber,
      sportName,
      sportunityId,
      updateSerie,
      reOrganizing,
      notifyPeopleSwitch,
      navigation,
      newActivityDate,
      newActivityEndDate,
      isRepeatSwitchOn,
      repeatValue,
      sportunityType,
      isActivityPrivate,
      isExactlySwitchOn,
      exactlyNumber,
      isUserParticipant,
      opponent,
      circleOfOpponents,
      isOpenMatch,
      unknownOpponent,
      sportunityTypeString,
    } = this.props;

    const isLoggedIn = this.props.screenProps.isLoggedIn;
    const isFormValid = activityTitle && activityDescription && !!sportName && !!placeName && !!minimumNumber && !!maximumNumber && !!newActivityDateForServer && !!newActivityEndDateForServer;

     const nextBtn =  <Validate
     sportunityId={sportunityId}
     viewer={viewer}
     isLoggedIn={isLoggedIn}
     updateSerie={updateSerie}
     notifyPeople={notifyPeopleSwitch}
     navigation={navigation}
   />
    return(
      <View style={style.container}>
        <NavBar
          step={7}
          isLoggedIn={isLoggedIn}
          displayNextButton={isFormValid}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          notifyPeople={notifyPeopleSwitch}
          viewer={viewer}
          navigation={navigation}
          lastStep={true}
          onNextButtonPress={() => {}}
        />
        {viewer
        ? <ScrollView>

            <FormListItem
              title={I18n.t('title')}
              subtitle={activityTitle}
              onPress={() => navigation.push('new_activity', { from: 'step7', sportunityId, updateSerie })}
            />

            <FormListItem
              title={I18n.t('description')}
              subtitle={activityDescription}
              onPress={() => navigation.push('new_activity', { from: 'step7', sportunityId, updateSerie })}
            />

            <FormListItem
              title={I18n.t('sport')}
              subtitle={sportName}
              onPress={() => this.navigateToStep(2)}
            />

            {!!sportunityTypeString && (
              <FormListItem
                title={I18n.t('sportunityType')}
                subtitle={() => (
                  <View>
                    <Text style={style.select}>
                      {sportunityTypeString}
                    </Text>
                  </View>
                )}
                onPress={() => this.navigateToStep(2)}
              />
            )}

            {sportunityType !== "NONE" && (!!opponent || !!circleOfOpponents || unknownOpponent) &&
              <FormListItem
                title={I18n.t('opponent')}
                onPress={() => this.navigateToStep(2)}
                subtitle={() => (
                  <View>
                    <Text style={style.select}>
                      {opponent
                        ? opponent.pseudo
                        : isOpenMatch
                          ? I18n.t("openMatch")
                          : circleOfOpponents
                            ? circleOfOpponents.name
                            : unknownOpponent && I18n.t("unknownOpponent")}
                    </Text>
                  </View>
                )}
              />
            }
            

            <FormListItem
              title={I18n.t('place')}
              subtitle={placeName}
              onPress={() => this.navigateToStep(4)}
            />

            <FormListItem
              title={I18n.t('date')}
              onPress={() => navigation.navigate('NewActivityStep5', { sportunityId, updateSerie })}
              subtitle={() => (
                <View>
                  {moment(newActivityDate, 'MMMM DD YYYY').isSame(moment(newActivityEndDate, 'MMMM DD YYYY'))
                  ?
                    <View>
                      <Text style={style.select}>{moment(newActivityDate, 'MMMM DD YYYY').format('dddd DD MMMM YYYY')}</Text>
                      <Text style={style.select}>
                        {I18n.t('from') + ' ' + 
                          moment(newActivityDate, 'MMMM DD YYYY HH:mm').format('HH:mm') + ' ' + 
                          I18n.t('to') + ' ' + 
                          moment(newActivityEndDate, 'MMMM DD YYYY HH:mm').format('HH:mm')
                          }
                          
                        </Text>
                    </View>
                  : <View>
                      <Text style={style.select}>
                        {I18n.t('starts')}: {newActivityDate}
                      </Text>
                      <Text style={style.select}>
                        {I18n.t('ends')}: {newActivityEndDate}
                      </Text>
                    </View>
                  }
                  {
                    isRepeatSwitchOn ?
                      <Text style={style.select}>
                        {repeatValue} {I18n.t('repeatWeekly').toLowerCase()}
                      </Text> : null
                  }
                </View>
              )}
            />

            <FormListItem
              title={I18n.t('numberOfParticipants')}
              onPress={() => this.navigateToStep(6)}
              subtitle={() => (
                <View>
                  {
                    !isExactlySwitchOn &&
                    (minimumNumber <= 0 || maximumNumber <= 0) ?
                      <Text style={style.select}>
                        {I18n.t('select')}
                      </Text> :
                        null
                  }
                  {
                    !isExactlySwitchOn &&
                    minimumNumber > 0 &&
                    maximumNumber > 0 ?
                      <Text style={style.select}>
                        {minimumNumber} - {maximumNumber}
                      </Text> :
                        null
                  }
                  {
                    isExactlySwitchOn &&
                    exactlyNumber <= 0 ?
                      <Text style={style.select}>
                        {I18n.t('select')}
                      </Text> :
                        null
                  }
                  {
                    isExactlySwitchOn &&
                    exactlyNumber > 0 ?
                      <Text style={style.select}>
                        {exactlyNumber}
                      </Text> :
                        null
                  }
                  {
                    isUserParticipant ?
                      <Text style={style.select}>
                        {I18n.t('includingYou')}
                      </Text> :
                        null
                  }
                </View>
              )}
            />

            <FormListItem
              title={I18n.t('privacySportunity')}
              subtitle={isActivityPrivate ? I18n.t('privateSportunity') : I18n.t('publicSportunity')}
              onPress={() => this.navigateToStep(6)}
            />


            {!sportunityId && <SaveTemplateButton />}


          </ScrollView>
        : <ActivityLoader isAnimating={true}/>
        }
      </View>
    )
  }
}

NewActivityStep7.propTypes = {
  viewer: PropTypes.object.isRequired,
  sportName: PropTypes.string.isRequired,
  allLevels: PropTypes.array.isRequired,
  placeName: PropTypes.string.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
  resetAllFields: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  fieldChanged: state.sportunityNewActivity.fieldChanged, 
  activityTitle: state.sportunityNewActivity.activityTitle,
  activityDescription: state.sportunityNewActivity.activityDescription,
  sportName: state.sportunityNewActivity.sportName,
  allLevels: state.sportunityNewActivity.allLevels,
  placeName: state.sportunityNewActivity.placeName,
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
  hideParticipantSwitchOn: state.sportunityNewActivity.hideParticipantSwitchOn,
  exactlyNumber: state.sportunityNewActivity.exactlyNumber,
  isPriceUpdatable: state.sportunityNewActivity.isPriceUpdatable,
  ageRestriction: state.sportunityNewActivity.ageRestriction,
  sexRestriction: state.sportunityNewActivity.sexRestriction,
  notifyPeopleSwitch: state.sportunityNewActivity.notifyPeopleSwitch,
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  isRepeatSwitchOn: state.sportunityNewActivity.isRepeatSwitchOn,
  repeatValue: state.sportunityNewActivity.repeatValue,
  sportunityType: state.sportunityNewActivity.sportunityType,
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  isUserParticipant: state.sportunityNewActivity.isUserParticipant,
  opponent: state.sportunityNewActivity.opponent,
  circleOfOpponents: state.sportunityNewActivity.circleOfOpponents,
  unknownOpponent: state.sportunityNewActivity.unknownOpponent,
  isOpenMatch: state.sportunityNewActivity.isOpenMatch,
  sportunityTypeString: state.sportunityNewActivity.sportunityTypeString,
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToActions({
    resetAllFields
  }),
)(NewActivityStep7);

const NewActivityStep7Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep7_viewer on Viewer{
      ...Validate_viewer
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
          query NewActivityStep7Query{
            viewer {
              ...NewActivityStep7_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => (
          <NewActivityStep7Container 
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

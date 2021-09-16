import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Alert, View, Switch, Platform, Image, BackHandler } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import moment from 'moment';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
// used for validate button
import validateStyle from 'sportunity/src/presentational/page/NewActivityPage/Validate/style.js';


import style from './style';
import Inputs from './Inputs/Inputs.js';
import Sport from './Sport/Sport.js';
import SportLevels from './Sport/SportLevels.js';
import Place from './Place/Place.js';
import PlaceList from './Place/PlaceModal/PlaceList/PlaceList.js';
import Date from './Date/Date.js';
// import Level from './Level/Level.js';
import Price from './Price/Price.js';
import Prices from './Price/PriceModal/Prices/Prices.js';
import Number from './Number/Number.js';
import Private from './Private/Private.js';
import CoOrganizers from './CoOrganizers';
import CoOrganizerModal from './CoOrganizers/CoOrganizerModal'
import Validate from './Validate/Validate.js';
import Invitations from './Invitations/Invitations'
import AdvancedSettings from './AdvancedSettings/AdvancedSettings';
import SaveTemplateButton from './Templates/SaveButton';
import SelectTemplateButton from './Templates/SelectTemplate';
import EventType from './EventType'
import { colors, images } from '../../../theme';
import { dispatchToActions } from '../../../action/utils';
import { updateNotifyPeopleSwitch, resetAllFields } from '../../../action/newActivityActions';


/**
* NewActivity root component
*/
export class NewActivityPage extends Component {
  componentDidMount() {
    this.handleAndroidBackButton()
  }

  componentWillUnmount = () => {
    this.props.resetAllFields();
    BackHandler.removeEventListener('hardwareBackPress', () => {});
  }

  renderTopMenu = () => (
    
    <View style={ Platform.OS === 'android' ? style.navBarContainerAndroid : style.navBarContainerIOS }>
      <TouchableOpacity
        onPress={this.onExit}
        style={style.navBarReturnButton}
      >
        <Image
          source={images.right_arrow}
          style={style.navBarReturnButtonIcon}
        />
      </TouchableOpacity>
      <Text style={ style.navBarTitle }>
        {this.props.sportunityId 
        ? this.props.updateSerie
          ? I18n.t('modifySerie')
          : I18n.t('modifyActivity')
        : this.props.reOrganizing
          ? I18n.t('organizeAgain')
          : I18n.t('newActivity')
        }
      </Text>
    </View>
  );

  handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.onExit();
      return true;
    });
  };

  onExit = () => {
    if (!this.props.fieldChanged) {
      this.props.navigation.goBack()
    }
    else {
      Alert.alert(
        I18n.t('accountAuthorizedUsersLeave'),
        I18n.t('accountAuthorizedUsersLeaveWithoutSaving'),
        [
            {text: I18n.t('yes'), onPress: () => this.props.navigation.goBack()},
            {text: I18n.t('no'), onPress: () => {return;}}
        ]
      )    
    }
  }

  render(){
    const {
      viewer,
      activityTitle,
      activityDescription,
      sportunitySport,
      sportName,
      // allLevels,
      placeName,
      newActivityDate,
      newActivityEndDate,
      newActivityDateForServer,
      newActivityEndDateForServer,
      minimumNumber,
      maximumNumber,
      areErrorsShown,
      isExactlySwitchOn,
      hideParticipantSwitchOn,
      exactlyNumber,
      sportunityId,
      isPriceUpdatable,
      ageRestriction,
      sexRestriction,
      notifyPeopleSwitch,
      updateNotifyPeopleSwitch,
      isActivityPrivate
    } = this.props;

    const isLoggedIn = viewer.me !== null;

    const displayValidateButton = activityTitle && activityDescription && !!sportName && !!placeName && !!minimumNumber && !!maximumNumber && !!newActivityDateForServer && !!newActivityEndDateForServer ; 

    return(
      <View style={{flex: 1}}>
        {this.renderTopMenu()}
        <ScrollView contentContainerStyle={[style.container, displayValidateButton ? {paddingBottom: 90} : {paddingBottom: 20}]}>

          <Inputs />
          {
            areErrorsShown && (!activityTitle || !activityDescription) &&
              <Text style={style.errorText}>{I18n.t('enterTitleDescriptionErr')}</Text>
          }

          {!sportunityId && <SelectTemplateButton viewer={viewer}/>}

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

          {viewer.me && 
            <EventType viewer={viewer} user={viewer.me} />
          }

          <Place viewer={viewer} />
          {
            areErrorsShown && !placeName ?
              <Text style={style.errorText}>{I18n.t('enterPlaceErr')}</Text> :
                null
          }

          <Date />
          {
            areErrorsShown && (!newActivityDate || !newActivityEndDate) ?
              <Text style={style.errorText}>{I18n.t('enterDateErr')}</Text> :
                null
          }
          {
            areErrorsShown && moment(newActivityEndDateForServer).isBefore(newActivityDateForServer) ?
              <Text style={style.errorText}>{I18n.t('endingDateErr')}</Text> :
                null
          }

          <Number viewer={viewer} isUpdating={sportunityId ? true : false}/>
          {
            areErrorsShown && ((isExactlySwitchOn && !exactlyNumber) || (!isExactlySwitchOn && (!minimumNumber || !maximumNumber || minimumNumber > maximumNumber))) ?
              <Text style={style.errorText}>{I18n.t('numberOfParticipantErr')}</Text> :
                null
          }

          <Invitations user={viewer.me} viewer={viewer} isLoggedIn={isLoggedIn} sportunityId={sportunityId}/>

          <Private user={viewer.me}/>

          {isLoggedIn && sportName !== "" && <CoOrganizers user={viewer.me} viewer={viewer}/>}

          { minimumNumber && maximumNumber && isPriceUpdatable && !isActivityPrivate 
            ? <Price viewer={viewer} />
            : null
          }

          {!isActivityPrivate && <AdvancedSettings viewer={viewer} user={viewer.me} />}

          {sportunityId && (
            <View style={style.inputRow}>
              <View style={style.textRow}>
                  <Text style={style.labelText}>
                      {I18n.t('sportunityNotifyPeople')}
                  </Text>
                  <Switch
                      onTintColor={colors.skyBlue}
                      value={notifyPeopleSwitch}
                      onValueChange={updateNotifyPeopleSwitch}
                      style={style.switchButton}
                      />
              </View>
              <Text style={style.explanationText}>
                {I18n.t('sportunityNotifyPeopleExplanation')}
              </Text>
            </View>
          )}

          {!sportunityId && <SaveTemplateButton />}
        </ScrollView>
        {/*
          areErrorsShown && <Text style={style.errorText}>Some mandatory fields are missing</Text>
          */}
        {displayValidateButton
        ? (isLoggedIn
          ? <Validate
              sportunityId={sportunityId}
              viewer={viewer}
              isLoggedIn={isLoggedIn}
              updateSerie={this.props.updateSerie}
              notifyPeople={notifyPeopleSwitch}
              navigation={this.props.navigation}
            /> 
          : <View style={validateStyle.floatingButton}>
            <TouchableOpacity
              style={validateStyle.button}
              onPress={() => {
                Toast.show(I18n.t('sportunityToastLogin'));
                this.props.navigation.navigate('settings')
              }}
            >
              <Text style={validateStyle.text}>
                {I18n.t('validate')}
              </Text>
            </TouchableOpacity>
          </View>
        )
        : null
        }
      </View>
    )
  }
}

NewActivityPage.propTypes = {
  viewer: PropTypes.object.isRequired,
  activityTitle: PropTypes.string.isRequired,
  activityDescription: PropTypes.string.isRequired,
  sportName: PropTypes.string.isRequired,
  allLevels: PropTypes.array.isRequired,
  placeName: PropTypes.string.isRequired,
  newActivityDate: PropTypes.string.isRequired,
  newActivityEndDate: PropTypes.string.isRequired,
  newActivityDateForServer: PropTypes.string.isRequired,
  newActivityEndDateForServer: PropTypes.string.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  areErrorsShown: PropTypes.bool.isRequired,
  isExactlySwitchOn: PropTypes.bool.isRequired,
  hideParticipantSwitchOn: PropTypes.bool.isRequired,
  exactlyNumber: PropTypes.number.isRequired,
  isPriceUpdatable: PropTypes.bool.isRequired,
  ageRestriction: PropTypes.object.isRequired,
  sexRestriction: PropTypes.string.isRequired,
  resetAllFields: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  fieldChanged: state.sportunityNewActivity.fieldChanged, 
  activityTitle: state.sportunityNewActivity.activityTitle,
  activityDescription: state.sportunityNewActivity.activityDescription,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
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
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToActions({
    updateNotifyPeopleSwitch,
    resetAllFields
  }),
)(NewActivityPage);

const NewActivityPageTemp = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityPage_viewer on Viewer{
      ...Validate_viewer,        
      ...PlaceList_viewer,
      ...CoOrganizerModal_viewer
      ...Prices_viewer,
      ...Price_viewer,
      ...Invitations_viewer,
      ...AdvancedSettings_viewer
      ...EventType_viewer
      ...Place_viewer
      ...SelectTemplate_viewer
      me {
        id,
        fees,
        profileType
        ...Invitations_user
        ...AdvancedSettings_user
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
          query NewActivityPageQuery{
            viewer {
              ...NewActivityPage_viewer
            }
          }
        `}
        variables={{
        }}
        render={({error, props}) => {
          if (props) {
            return <NewActivityPageTemp sportunityId={sportunityId} updateSerie={updateSerie} viewer={props.viewer} query={props} {...this.props} setTitle={this.setTitle}/>;
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

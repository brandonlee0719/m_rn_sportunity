import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Alert, View, Switch, Platform, Image } from 'react-native';
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
import Invitations from '../Invitations/Invitations'
import style from './style';
import { dispatchToActions } from '../../../../action/utils';
import { resetAllFields } from '../../../../action/newActivityActions';
import ActionButton from 'react-native-action-button';
import { colors, metrics, images } from 'sportunity/src/theme';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons';

class NewActivityStep3 extends Component {
  state = {
    friendsInvitationModalVisible: false,
    circlesInvitationModalVisible: true,
  };

  render() {
    const {
      viewer,
      sportName,
      sportunityId,
      updateSerie,
      reOrganizing,
      navigation,
    } = this.props;
    const {
      circlesInvitationModalVisible,
      friendsInvitationModalVisible
    } = this.state;


    const isLoggedIn = this.props.screenProps.isLoggedIn;
    const displayNextButton = true;

    return(
      <View style={{ flex: 1, backgroundColor: colors.snow }}>
      {!circlesInvitationModalVisible && <NavBar
          step={3}
          isLoggedIn={isLoggedIn}
          displayNextButton={displayNextButton}
          sportunityId={sportunityId}
          updateSerie={updateSerie}
          reOrganizing={reOrganizing}
          navigation={navigation}
          onNextButtonPress={() => navigation.navigate('NewActivityStep4', { sportunityId, updateSerie })}
        />}
        {viewer
        ? <ScrollView contentContainerStyle={style.container}>
            <Heading text={viewer.me && viewer.me.profileType !== 'PERSON' ? I18n.t('summon') : I18n.t('invitations')} />
            <Invitations 
              user={viewer.me}
              viewer={viewer}
              circlesInvitationModalVisible={circlesInvitationModalVisible}
              friendsInvitationModalVisible={friendsInvitationModalVisible}
              closeFriendsModal={this.closeFriendsModal}
              closeCirclesModal={this.closeCirclesModal}
              isLoggedIn={isLoggedIn} 
              sportunityId={sportunityId}
              navigation={navigation}
            />
          </ScrollView>
        : <ActivityLoader isAnimating={true}/>
        }
        { !circlesInvitationModalVisible && <ActionButton size={50} buttonColor={colors.skyBlue} style={[Platform.OS === 'android' ? { elevation: 2, zIndex: 10000 } : {}]}>
              <ActionButton.Item
                  size={35}
                  buttonColor={colors.skyBlue}
                  title={I18n.t('sportunityAddGroup')}
                  onPress={() => this.setState({circlesInvitationModalVisible:true})}
                >
                  <Image source={images.sportunity_group} style={{
                    width: 22,
                    height: 22,
                    tintColor: colors.snow,
                    marginBottom: 2
                  }}
                  />
                </ActionButton.Item>
              
              <ActionButton.Item
                  size={35}
                  buttonColor={colors.skyBlue}
                  title={I18n.t('sportunityAddInvitee')}
                  onPress={() => this.setState({friendsInvitationModalVisible:true})}
                >
                  <FAIcon name="user-plus" style={{
                    fontSize: 20,
                    height: 22,
                    color: colors.snow,
                  }}
                  />
                </ActionButton.Item>

            </ActionButton>}

        
      </View>
    )
  }
  closeFriendsModal = ()=>{
    this.setState({ friendsInvitationModalVisible: false})
  }

  closeCirclesModal = ()=>{
    this.setState({ circlesInvitationModalVisible: false})
  }

}

NewActivityStep3.propTypes = {
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
    resetAllFields
  }),
)(NewActivityStep3);

const NewActivityStep3Container = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment NewActivityStep3_viewer on Viewer{ 
      ...Invitations_viewer,
      me {
        id,
        fees,
        profileType
        ...Invitations_user
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
          query NewActivityStep3Query{
            viewer {
              ...NewActivityStep3_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => (
          <NewActivityStep3Container 
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

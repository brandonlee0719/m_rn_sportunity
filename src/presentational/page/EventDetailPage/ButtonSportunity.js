import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, ActivityIndicator, StyleSheet, Text, WebView, Modal } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cloneDeep from 'lodash/cloneDeep';

import { Header } from '../../Header';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { webAppUrl } from 'sportunity/conf/constants.json';
import translations from 'sportunity/src/translations.js';
import { updateStepsCompleted } from 'sportunity/src/action/profileActions';
import Button from '../../Button/roundedButton';
import UpdateSportunityMutation from './mutation/UpdateSportunity.js';
import UserBooksEventMutation from './mutation/UserBooksEventMutation.js'
import newOpponentSportunityMutation from './mutation/NewOpponentSportunityMutation.js';
import CancelBookingMutation from './mutation/CancelBooking.js';
import CancelSportunityMutation from './mutation/CancelSportunity.js';
import SecondaryOrganizerCancelRoleMutation from './mutation/SecondaryOrganizerCancelRole.js';
import SecondaryOrganizerPickRoleMutation from './mutation/SecondaryOrganizerPickRole.js';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';


//Refactoring tip: this button has complex logic, to be split out
//to general view component moved to presentational layer and page logic container
class ButtonSportunity extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isLoaderVisible: false,
      secure3DURL: null,
      isLoadingAfterPayment: false
    }
  }

  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef && this.props.onRef(undefined)
  }

  toggleLoader = (bool) => {
    this.setState({
      isLoaderVisible: bool,
    })
    this.props.changeLoadingStatus(bool);
  }

  /*
  * Main logic for sportunities
  */
  onPress = () => {
    this.toggleLoader(true);
    if(!this.props.viewer.me){
      this.toggleLoader(false);
      this.props.updateFrom('event/'+this.props.sportunity.id)
      Toast.show(I18n.t('sportunityToastLoginBookCancel'));
      this.props.navigation.navigate('settings',);
    } else {
      const { isParticipant, isOnWaitingList, isLoggedIn, sportunity, viewer, confirmation, 
          paymentMethodChoosen, paymentWithWallet, isPotentialOpponent, isSecondaryOrganizer, isPotentialSecondaryOrganizer } = this.props;

      if(!isLoggedIn) {
        this.toggleLoader(false);
        this.props.updateFrom('event/'+this.props.sportunity.id)
        return this.props.navigation.navigate('settings', {message: I18n.t('sportunityToastLoginBookCancel')}); 
      }

      if (isPotentialOpponent) {
        this.createOpponentSportunityWithDialog();
        return false;
      }

      if(isParticipant || isOnWaitingList) {
        this.toggleLoader(false);
        return this.cancelBooking()
      }

      /*if (isSecondaryOrganizer) {
        return this.cancelSecondaryOrganizerWithDialog();
      }*/
      if (isPotentialSecondaryOrganizer) {
        return this.validateSecondaryOrganizerWithDialog();
      }

      if (sportunity.price && sportunity.price.cents && viewer.me && viewer.me.isProfileComplete === false) {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCompleteProfile'));
        return this.props.navigation.navigate('paymentInformation', {
          paymentMethodOptional: true,
          bankAccountOptional: true,
          fromSportunityPage: I18n.t('book').toLowerCase(),
          hideNavBar:false,
          onSaveAccount: () => {
            this.props.navigation.goBack(); 
            this.props.navigation.navigate('choosePaymentMethod', { id: this.props.sportunity.id })
          }
        });
      }

      if (sportunity.price && sportunity.price.cents && !paymentMethodChoosen) {
        this.toggleLoader(false);
        return this.props.navigation.navigate('choosePaymentMethod', { id: this.props.sportunity.id })
      }

      if(sportunity.price && sportunity.price.cents && !viewer.me.paymentMethods.length && !paymentWithWallet) {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastAddPayment'));
        return this.props.navigation.navigate('myAccount', { 
          paymentMethodOptional: false, 
          bankAccountOptional: true, 
          fromSportunityPage: I18n.t('book').toLowerCase()
        });
      }

      if(sportunity.price && sportunity.price.cents && paymentMethodChoosen && !confirmation) {
        this.toggleLoader(false);
        // this.bookSportunityWithDialog()
        return this.props.navigation.navigate('confirmBooking', { id: this.props.sportunity.id })
      }
      
      if(sportunity.price && sportunity.price.cents && confirmation) {
        this.toggleLoader(false);
        this.bookSportunityWithDialog()
      }

      if(this.props.status === 'Waiting-List-Yellow' || this.props.status === 'Invited-Yellow'){
        this.toggleLoader(false);
        this.joinWaitingListWithDialog();
        return false;
      }

      if(this.props.status === 'Willing-List-Green'){
        this.toggleLoader(false);
        this.bookSportunityWithDialog();
        return false;
      }

      if(sportunity.price && sportunity.price.cents === 0) {
        this.toggleLoader(false);
        this.bookSportunityWithDialog();
      }
    }
  }

  /*
  * Step 2. Ready to book, asking user
  */
  bookSportunityWithDialog = () => {
    Alert.alert(
      I18n.t('sportunityAlertbookingValidation'),
      I18n.t('sportunityAlertBook'),
      [
        { text: I18n.t('yes'), onPress: () => this.update('add') },
        { text: I18n.t('no'), onPress: () => {} },
      ]
    )
  }

  joinWaitingListWithDialog = () => {
    Alert.alert(
      I18n.t('sportunityAlertbookingValidation'),
      I18n.t('sportunityAlertWaiting'),
      [
        { text: I18n.t('yes'), onPress: () => this.update('add') },
        { text: I18n.t('no'), onPress: () => {} },
      ]
    )
  }

  createOpponentSportunityWithDialog = () => {
    Alert.alert(
      I18n.t('sportunityAlertnewOpponentSportunityValidation'),
      I18n.t('sportunityAlertnewOpponentSportunity'),
      [
        { text: I18n.t('yes'), onPress: () => this.createOpponentSportunity() },
        { text: I18n.t('no'), onPress: () => {this.toggleLoader(false);} },
      ]
    )
  }

  validateSecondaryOrganizerWithDialog = () => {
    Alert.alert(
      I18n.t('confirm'),
      I18n.t('sportunityAlertAcceptCoOrganizationValidation'),
      [
        { text: I18n.t('yes'), onPress: () => this.validateSecondaryOrganizer() },
        { text: I18n.t('no'), onPress: () => {this.toggleLoader(false);} },
      ]
    )
  }

  cancelSecondaryOrganizerWithDialog = () => {
    Alert.alert(
      I18n.t('cancel'),
      I18n.t('sportunityAlertCancelCoOrganizationValidation'),
      [
        { text: I18n.t('yes'), onPress: () => this.cancelSecondaryOrganizerSerieOrSportunity() },
        { text: I18n.t('no'), onPress: () => {this.toggleLoader(false);} },
      ]
    )
  }

  cancelBooking = () => {
    Alert.alert(
      I18n.t('sportunityAlertCancel'),
      I18n.t('sportunityAlertCancelParticipation'),
      [
        { text: I18n.t('yes'), onPress: () => this.cancelBookingCommit() },
        { text: I18n.t('no'), onPress: () => {} },
      ]
    )
  }

  cancelSportunity = () => {
    Alert.alert(
      I18n.t('sportunityAlertCancel'),
      I18n.t('sportunityAlertCancelSportunity'),
      [
        { text: I18n.t('yes'), onPress: () => this.cancelSportunityCommit(false) },
        { text: I18n.t('no'), onPress: () => {} },
      ]
    )
  }

  cancelSerie = () => {
    Alert.alert(
        I18n.t('sportunityAlertCancel'),
        I18n.t('sportunityAlertCancelSportunitySerie').replace('{0}', this.props.serieOccurencesNumber),
        [
          { text: I18n.t('yes'), onPress: () => this.cancelSportunityCommit(true) },
          { text: I18n.t('no'), onPress: () => {}},
        ]
      )
  }

  update(type) {
    this.toggleLoader(true);
    const { viewer, user, sportunity, isParticipant, paymentWithWallet, paymentMethodId} = this.props;
    let params = { 
      sportunityID: sportunity.id,
      participantID: user.id,
    };

    let selectedPaymentMethod = paymentMethodId;
    if(sportunity.price.cents && !paymentWithWallet) {
      if (!selectedPaymentMethod)
        selectedPaymentMethod = viewer.me.paymentMethods[0].id;

      params.paymentMethodId = selectedPaymentMethod ;
    }
    if (sportunity.price.cents && paymentWithWallet) {
      params.paymentByWallet = paymentWithWallet
    }

    Toast.show(I18n.t('sportunityToastBookDoing'));

    UserBooksEventMutation.commit(
      params,
      (response) => {
        if (response.userBooksEvent && response.userBooksEvent.secure3DURL) {
          this.toggleLoader(false);
          this.setState({secure3DURL: response.userBooksEvent.secure3DURL})
        }
        else {
          setTimeout(() => {
            const refetchVariables = fragmentVariables => ({
              ...fragmentVariables,
              queryIsCoOrganizerOnSerie: true,
              buttonSportunitySportunityId: this.props.sportunity.id,
              sportunityID:this.props.sportunity.id,
            });

            this.props.relay.refetch(refetchVariables)            
            
            this.props.navigation.navigate('eventdetail', { id: this.props.sportunity.id })
            this.toggleLoader(false);
            Toast.show(I18n.t('sportunityToastBookSuccess'))
          }, 5000);
        }
      },
      (error) => {
        this.toggleLoader(false);
        Alert.alert(I18n.t('alert'), error[0].message)
      }
    );
  }

  closeModal = () => {
    this.setState({isLoadingAfterPayment: true})
    setTimeout(() => {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        queryIsCoOrganizerOnSerie: true,
        buttonSportunitySportunityId: this.props.sportunity.id,
        sportunityID:this.props.sportunity.id,
      });

      this.props.relay.refetch(refetchVariables)

      this.setState({secure3DURL: null, isLoadingAfterPayment: false})
      this.props.navigation.navigate('eventdetail', { id: this.props.sportunity.id })
      setTimeout(() => {
        Toast.show(I18n.t('sportunityToastBookSuccess'))
      }, 1000)
    }, 5000)
  }

  cancelBookingCommit(){
    this.toggleLoader(true);
    const { viewer, user, sportunity } = this.props;
    let params = { 
      sportunityID: sportunity.id,
      sportunity:{
        canceling: user.id,
      },
    };

    if (this.props.wasInvited) {
      params.sportunity.invited = {
        user: user.id,
        answer: "NO"
      }
    }

    Toast.show(I18n.t('sportunityToastCancelDoing'));

    CancelBookingMutation.commit(params,
      () => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCancelSuccess'));
        this.props.navigation.goBack()
      },
      error => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCancelFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  updateTutorialSteps = () => {
    const { tutorialSteps, updateStepsCompleted } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);

    newTutorialSteps['giveAvailabilitiesStep'] = true;
    updateStepsCompleted(newTutorialSteps);
  }

  validateSecondaryOrganizer = () => {
    this.toggleLoader(true);
    const { viewer, user, sportunity } = this.props;
    let params = { 
      sportunityID:sportunity.id,
      pendingOrganizerID: this.props.potentialSecondaryOrganizer.id 
    };
    
    Toast.show(I18n.t('sportunityToastValidationDoing'));
    
    SecondaryOrganizerPickRoleMutation.commit(params,
      () => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityAlertAcceptCoOrganizationSuccess'));
      },
      error => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCancelFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  cancelSecondaryOrganizerSerieOrSportunity = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      queryIsCoOrganizerOnSerie: true,
      buttonSportunitySportunityId: this.props.sportunity.id,
      sportunityID:this.props.sportunity.id,
    });

    this.props.relay.refetch(
      refetchVariables,
      null,
      () => {
        if (this.props.viewer.IsCoOrganizerOnSerie) {
          Alert.alert(
            I18n.t('cancel'),
            I18n.t('sportunityAlertCancelCoOrganizationValidationSerie'),
            [
              { text: I18n.t('yes'), onPress: () => this.cancelSecondaryOrganizer(true) },
              { text: I18n.t('no'), onPress: () => {this.cancelSecondaryOrganizer(false)} },
            ]
          )
        }
        else {
          this.cancelSecondaryOrganizer(false)
        }
      },
      {force: false}
    );
  }

  cancelSecondaryOrganizer = (cancelSerie) => {
    this.toggleLoader(true);
    const { viewer, user, sportunity } = this.props;

    let params = { 
      sportunityID: sportunity.id,
      cancelSerie: cancelSerie 
    };
    
    Toast.show(I18n.t('sportunityToastCancelDoing'));
    SecondaryOrganizerCancelRoleMutation.commit(params,
      () => {
        this.toggleLoader(false);
        this.props.refetch()
        Toast.show(I18n.t('sportunityAlertCancelCoOrganizationSuccess'));
        this.props.navigation.goBack()
      },
      error => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCancelFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  createOpponentSportunity() {
    this.toggleLoader(true);
    const { viewer, user, sportunity } = this.props;
    let params = { 
      sportunityId: sportunity.id,
     };

    Toast.show(I18n.t('sportunityAlertnewOpponentDoing'));

    newOpponentSportunityMutation.commit(params,
      () => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityAlertnewOpponentSuccess'));
        this.props.navigation.goBack()
      },
      error => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityAlertnewOpponentFailed'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  cancelSportunityCommit(cancelSerie) {
    this.toggleLoader(true);
    let params = { 
      sportunityID: this.props.sportunity.id,
      sportunity:{
        cancel_date: new Date(),
        modifyRepeatedSportunities: cancelSerie
      },
    };
    
    Toast.show(I18n.t('sportunityToastCancelDoing'));
    
    CancelSportunityMutation.commit(params,
      () => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCancelSuccess'));
        this.props.navigation.goBack()
      },
      error => {
        this.toggleLoader(false);
        Toast.show(I18n.t('sportunityToastCancelFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  render() {
    const { status, isOrganized, isParticipant, isOnWaitingList, isAuthorizedAdmin, isSecondaryOrganizer, 
        isPotentialSecondaryOrganizer, displayFloating, isLoading, isSurvey, isInvited, renderButton } = this.props;

    let redButton = false ;
    
    let button = I18n.t('book');

    if(status === 'Available-Black'){
      button = I18n.t('book');
    } else if(status === 'Waiting-List-Yellow' || status === 'Invited-Yellow'){
      button = I18n.t('joinWaiting');
    } else if(status === 'Full-Red') {
      button = '';
    } else if(isParticipant || isOnWaitingList){
      button = I18n.t('cancelParticipation');
      redButton = true;
    } else if(status === 'Waiting-List-Booked-Yellow'){
      button = I18n.t('widthrawFromWaiting');
      redButton = true;
    } else if(status === 'Organized-Grey' && isParticipant){
      button = I18n.t('cancelParticipation');
      redButton = true;
    } else if(status === 'Organized-Grey' && !isParticipant){
      button = I18n.t('book')
    } else if(status === 'Organized-Black' && isParticipant) {
      button = I18n.t('cancelParticipation');
      redButton = true;
    } else if(status === 'Organized-Black' && !isParticipant) {
      button = I18n.t('book');
    } else if(status === 'Organized-Yellow' && isParticipant){
      button = I18n.t('cancelParticipation');
      redButton = true;
    } else if(status === 'Organized-Yellow' && !isParticipant){
      button = I18n.t('book');
    } else if(status === 'Organized-Red' && isParticipant) {
      button = I18n.t('cancelParticipation');
      redButton = true;
    } else if(status === 'Willing-List-Green') {
      button = I18n.t('confirm')
    } else if (status.indexOf('Assistant') >= 0) {
      button = ''
    } else if (status.indexOf('Asked-CoOrganization') >= 0) {
      button = I18n.t('acceptCoOrganization')
    } else if (isInvited && !isParticipant) {
      button = I18n.t('available')
    }

    if (!!this.state.secure3DURL) {
      return (
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={!!this.state.secure3DURL}
          onRequestClose={() => !this.state.isLoadingAfterPayment && this.setState({secure3DURL: null})}
        >
          <Header 
            onPressFunc={() => !this.state.isLoadingAfterPayment && this.setState({secure3DURL: null})}
            imgSrc={images.down_arrow}
            text={I18n.t('paymentWithCard')}
          />
          <View style={{flex: 1}}>
            {this.state.isLoadingAfterPayment
            ? <ActivityLoader isAnimating={true}/>
            : <WebView
                source={{uri: this.state.secure3DURL}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onNavigationStateChange={e => e.url.indexOf(webAppUrl) >= 0 && this.closeModal()}
              />
            }
          </View>
        </Modal>
      )
    }

    if (typeof renderButton === 'function') {
      return (
        <React.Fragment>
          {status.indexOf('Assistant') >= 0 && renderButton({ text: I18n.t('cancelCoOrganizer'), onPress: this.cancelSecondaryOrganizerWithDialog, red: true })}
          {!(button === '') && !isOrganized && !isLoading && !isAuthorizedAdmin && !isSurvey &&
            renderButton({ text: button, onPress: this.onPress, red: redButton })
          }
          {isOrganized && isSurvey && !isLoading && !isAuthorizedAdmin &&
            renderButton({ text: I18n.t('sportunitySurveyTransform'), onPress: this.props.showTransformSurvey, red: redButton })
          }
          {isOrganized && !isLoading && !isAuthorizedAdmin &&
            renderButton({ text: I18n.t('sportunityCancelSportunity'), onPress: this.cancelSportunity, red: true })
          }
          {isAuthorizedAdmin && !isLoading &&
            renderButton({
              text: () => (
                <Text style={styles.text}>
                  {I18n.t('subAccountIsOrganizer').replace('{0}', this.props.sportunity.organizers.filter(o => o.isAdmin)[0].organizer.pseudo)}
                </Text>
              ),
            })
          }
        </React.Fragment>
      );
    }

    return (
      <View style={displayFloating ? styles.floatingButtonContainer : null}>
        {/*isLoading && 
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={colors.blue}
          />
        */}
        {status.indexOf('Assistant') >= 0 && 
          (displayFloating
          ? null
          : <Button redButton={true} onPress={this.cancelSecondaryOrganizerWithDialog}>
              {I18n.t('cancelCoOrganizer')}
            </Button>
          )
        }
        {!(button === '') && !isOrganized && !isLoading && !isAuthorizedAdmin && !isSurvey && 
        (isParticipant ?
          (displayFloating 
          ? null
          : <Button redButton={redButton} onPress={this.onPress}>
              {button}
            </Button>)
          : displayFloating 
            ? <Button redButton={redButton} onPress={this.onPress}>
                {button}
              </Button>
            : <View style={{height: 60}}/>
        )}
        {
          isOrganized && isSurvey && !displayFloating && !isLoading && !isAuthorizedAdmin &&
            <Button onPress={this.props.showTransformSurvey}>
              {I18n.t('sportunitySurveyTransform')}
            </Button>
        }
        {
          isOrganized && !displayFloating && !isLoading && !isAuthorizedAdmin &&
            <Button redButton={redButton} onPress={this.cancelSportunity}>
              {I18n.t('sportunityCancelSportunity')}
            </Button>
        }
        {isAuthorizedAdmin && !displayFloating && !isLoading &&
          <Text style={styles.text}>
            {I18n.t('subAccountIsOrganizer').replace('{0}', this.props.sportunity.organizers.filter(o => o.isAdmin)[0].organizer.pseudo)}
          </Text>}
      </View>

    )
  }
}

ButtonSportunity.propTypes = {
  viewer: PropTypes.object.isRequired,
  relay: PropTypes.object.isRequired,
  sportunity: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isParticipant: PropTypes.bool.isRequired,
  confirmation: PropTypes.bool,
  paymentMethodId: PropTypes.string,
};

const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: 'absolute',
    bottom: metrics.doubleBaseMargin, // metric to use.
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    paddingHorizontal: metrics.doubleBaseMargin,
    fontSize: fonts.size.medium,
    fontStyle: 'italic',
    marginBottom: metrics.doubleBaseMargin,
    color: colors.charcoal,
    textAlign: 'justify'
  }
})

const stateToProps = (state) => ({
  tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = (dispatch) => ({
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

const ReduxContainer = connect(stateToProps, dispatchToProps)(ButtonSportunity);
/**
*  RELAY CREATE CONTAINER
*/
export default createRefetchContainer(ReduxContainer, {
  viewer: graphql`
    fragment ButtonSportunity_viewer on Viewer @argumentDefinitions(
      buttonSportunitySportunityId: {type: "String!", defaultValue: ""},
      queryIsCoOrganizerOnSerie: {type: "Boolean", defaultValue: false}
    ) {
      id,
      
      me {
        id,
        isProfileComplete
        paymentMethods {
          id
          cardType
          cardMask
          expirationDate
        }
      }
      IsCoOrganizerOnSerie (sportunityId: $buttonSportunitySportunityId) @include(if: $queryIsCoOrganizerOnSerie)
    }
  `,
  user: graphql`
    fragment ButtonSportunity_user on User {
      id
      
    }
  `,
  sportunity: graphql`
    fragment ButtonSportunity_sportunity on Sportunity {
      id,
      status,
      waiting {
        id
      },
      cancel_date,
      canceling {
        canceling_user{
          id
        },
        status,
        cancelation_date,
      },
      price {
        cents
        currency
      }
      organizers {
        organizer {
          pseudo
        }
        isAdmin
      }
      participants {
        id
        pseudo
        avatar
      }
    }
  `},
  graphql`
    query ButtonSportunityRefetchQuery ($buttonSportunitySportunityId: String!, $queryIsCoOrganizerOnSerie: Boolean!, $sportunityID: ID) {
      viewer {
        ...ButtonSportunity_viewer @arguments(buttonSportunitySportunityId: $buttonSportunitySportunityId)
        sportunity(id: $sportunityID) {
          ...ButtonSportunity_sportunity
        }
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;
 
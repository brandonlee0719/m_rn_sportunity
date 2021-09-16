import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePriceModal, updateInvitedCirclesAndPrices, updateVenueCost, updatePricePerParticipant, updateFreeSwitch, updateOrganizerContribution } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import PriceModal from './PriceModal/PriceModal.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../UI/FormListItem';

const Price = ({
  isPriceModalVisible,
  updatePriceModal,
  isFreeSwitchOn,
  pricePerParticipant,
  minimumRevenue,
  maximumRevenue,
  minimumNumber,
  maximumNumber,
  isActivityPrivate,
  viewer,
  userCurrency,
  updateInvitedCirclesAndPrices,
  invitedCircles,
  invitedCirclesAndPrices,
  updateFreeSwitch,
  updateVenueCost,
  updatePricePerParticipant,
  updateOrganizerContribution,
  venueCost,
  organizerContribution,
  userCountry,
}) => {

  const openClosePriceModal = () => {
    if (isPriceModalVisible) {
      updatePriceModal(false);
    } else {
      updatePriceModal(true);
    }
  }

  return (
    <View>
      <PriceModal 
        viewer={viewer} 
        isPriceModalVisible={isPriceModalVisible}
        isActivityPrivate={isActivityPrivate}
        updatePriceModal={updatePriceModal}
        updateInvitedCirclesAndPrices={updateInvitedCirclesAndPrices}
        invitedCircles={invitedCircles}
        invitedCirclesAndPrices={invitedCirclesAndPrices}
        minimumRevenue={minimumRevenue}
        maximumRevenue={maximumRevenue}
        isFreeSwitchOn={isFreeSwitchOn}
        pricePerParticipant={pricePerParticipant}
        userCurrency={userCurrency}
        minimumNumber={minimumNumber}
        maximumNumber={maximumNumber}
        venueCost={venueCost}
        organizerContribution={organizerContribution}
        userCountry={userCountry}
        updateFreeSwitch={updateFreeSwitch}
        updateVenueCost={updateVenueCost}
        updatePricePerParticipant={updatePricePerParticipant}
        updateOrganizerContribution={updateOrganizerContribution}
        sportunityCreation={true}
      />
      <FormListItem
        onPress={openClosePriceModal}
        title={I18n.t('price')}
        subtitle={() => (
          <View>
            {!isFreeSwitchOn && pricePerParticipant !== 0 
            ? <View>
                <Text style={style.select}>
                  {I18n.t('youWillReceiveFrom')} {parseFloat(Math.round(minimumRevenue * 100) / 100).toFixed(2)} {I18n.t('to')} { parseFloat(Math.round(maximumRevenue * 100) / 100).toFixed(2) + ' ' + userCurrency}
                </Text>
              </View> 
            : <Text style={style.select}>
                {I18n.t('select')}
              </Text> 
            }
          </View>
        )}
      />
    </View>
  );
}

Price.propTypes = {
  updatePriceModal: PropTypes.func.isRequired,
  isFreeSwitchOn: PropTypes.bool.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
  minimumRevenue: PropTypes.number.isRequired,
  maximumRevenue: PropTypes.number.isRequired,
  isPriceModalVisible: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isPriceModalVisible: state.sportunityNewActivity.isPriceModalVisible,
  isFreeSwitchOn: state.sportunityNewActivity.isFreeSwitchOn,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  minimumRevenue: state.sportunityNewActivity.minimumRevenue,
  maximumRevenue: state.sportunityNewActivity.maximumRevenue,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  invitedCircles: state.sportunityNewActivity.invitedCircles,
  invitedCirclesAndPrices: state.sportunityNewActivity.invitedCirclesAndPrices,
  venueCost: state.sportunityNewActivity.venueCost,
  organizerContribution: state.sportunityNewActivity.organizerContribution,
});

const dispatchToProps = (dispatch) => ({
  updatePriceModal: bindActionCreators(updatePriceModal, dispatch),
  updateInvitedCirclesAndPrices: bindActionCreators(updateInvitedCirclesAndPrices, dispatch),
  updateFreeSwitch: bindActionCreators(updateFreeSwitch, dispatch),
  updateVenueCost: bindActionCreators(updateVenueCost, dispatch),
  updatePricePerParticipant: bindActionCreators(updatePricePerParticipant, dispatch),
  updateOrganizerContribution: bindActionCreators(updateOrganizerContribution, dispatch),
});

const ReduxContainer =  connect(
  stateToProps,
  dispatchToProps
)(Price);

export default createFragmentContainer(ReduxContainer, {
  viewer: graphql`
  fragment Price_viewer on Viewer {
      id,
      ...PriceModal_viewer
      me {
        fees
      }
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

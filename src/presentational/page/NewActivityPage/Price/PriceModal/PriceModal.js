import PropTypes from 'prop-types';
import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Modal, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import style from './style';

import Prices from './Prices/Prices.js';
import CirclesPrices from './CirclesPrices/CirclesPrices'
import Button from './Button/Button.js';

const PriceModal = ({ 
  updatePriceModal, 
  isPriceModalVisible, 
  viewer, 
  isActivityPrivate, 
  invitedCircles, 
  invitedCirclesAndPrices, 
  updateInvitedCirclesAndPrices,
  minimumRevenue,
  maximumRevenue,
  isFreeSwitchOn,
  pricePerParticipant,
  userCurrency,
  minimumNumber,
  maximumNumber,
  venueCost,
  organizerContribution,
  userCountry,
  updateFreeSwitch,
  updateVenueCost,
  updatePricePerParticipant,
  updateOrganizerContribution,
  sportunityCreation,
  validation
}) => {

  const openClosePriceModal = () => {
    if (isPriceModalVisible) {
      updatePriceModal(false);
    } else {
      updatePriceModal(true);
    }
  }

  return(
    <View style={{flex: 1}}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isPriceModalVisible}
        onRequestClose={openClosePriceModal}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openClosePriceModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            {I18n.t('price')}
          </Text>
        </View>
        <View style={{position: 'relative', flex: 1}}>
          <ScrollView contentContainerStyle={{paddingBottom: 70}}>
            {sportunityCreation && 
              <Prices 
                viewer={viewer}
                isActivityPrivate={isActivityPrivate}
                minimumRevenue={minimumRevenue}
                maximumRevenue={maximumRevenue}
                minimumNumber={minimumNumber}
                maximumNumber={maximumNumber}
                pricePerParticipant={pricePerParticipant}
                venueCost={venueCost}
                organizerContribution={organizerContribution}
                userCountry={userCountry}
                userCurrency={userCurrency}
                updateFreeSwitch={updateFreeSwitch}
                updateVenueCost={updateVenueCost}
                updatePricePerParticipant={updatePricePerParticipant}
                updateOrganizerContribution={updateOrganizerContribution}
                sportunityCreation={sportunityCreation}
              />
            }

            <CirclesPrices
              invitedCircles={invitedCircles}
              invitedCirclesAndPrices={invitedCirclesAndPrices}
              updateInvitedCirclesAndPrices={updateInvitedCirclesAndPrices}
              viewer={viewer}
              userCurrency={userCurrency}
              sportunityCreation={sportunityCreation}
            />
          </ScrollView>
          
          <Button 
            isPriceModalVisible={isPriceModalVisible}
            minimumRevenue={minimumRevenue}
            maximumRevenue={maximumRevenue}
            isFreeSwitchOn={isFreeSwitchOn}
            pricePerParticipant={pricePerParticipant}
            userCurrency={userCurrency}
            updatePriceModal={updatePriceModal}
            sportunityCreation={sportunityCreation}
            validation={validation}
          />
        </View>
      </Modal>

    </View>
  )
}

PriceModal.propTypes = {
  isPriceModalVisible: PropTypes.bool.isRequired,
  updatePriceModal: PropTypes.func.isRequired,
};

export default createFragmentContainer(PriceModal, {
  viewer: graphql`
    fragment PriceModal_viewer on Viewer {
      id,
      ...Prices_viewer
    }
  `
});

I18n.fallbacks = true
I18n.translations = translations;

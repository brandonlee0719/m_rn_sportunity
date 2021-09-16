import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class Prices extends React.Component {
  constructor() {
    super();
    this.state = {
      priceInput: ''
    }
  }

  componentDidMount = () => {
    const {pricePerParticipant} = this.props ;
    if (pricePerParticipant) 
      this.setState({
        priceInput: pricePerParticipant
      })
  }

  controlPricePerParticipant = (value) => {
    this.setState({
      priceInput: value
    })
  }

  handlePriceBlur = (e) => {
    if (this.props.sportunityCreation) {
      const {updatePricePerParticipant, minimumNumber, maximumNumber, venueCost, organizerContribution, viewer, updateFreeSwitch} = this.props ;
      const fee = viewer.me && viewer.me.fees || 20;
      
      let value = this.state.priceInput ;
      var regex = new RegExp(/^(\d+(?:[\.\,]\d{1,2})?)$/);
      
      if (!regex.test(value) && value !== "0" && value !== "") {
        Alert.alert(I18n.t('alert'), I18n.t('priceWrongFormat'));
        this.setState({
          priceInput: ''
        })
        updatePricePerParticipant(0, venueCost, minimumNumber, maximumNumber, organizerContribution, fee);
        return ;
      }
      else {
        let finalValue = parseInt(value * 100, 10) / 100;
        if(!finalValue){
          finalValue = 0;
        }

        updateFreeSwitch(finalValue === 0)
        updatePricePerParticipant(finalValue, venueCost, minimumNumber, maximumNumber, organizerContribution, fee);
      }
    }
  }

  render = () => {
    const {
      updateVenueCost,
      updatePricePerParticipant,
      minimumRevenue,
      maximumRevenue,
      minimumNumber,
      maximumNumber,
      pricePerParticipant,
      venueCost,
      organizerContribution,
      updateOrganizerContribution,
      isUserParticipant,
      viewer,
      isActivityPrivate
    } = this.props ;

    return(
      <View style={style.container}>
        {!isActivityPrivate 
        ? <View style={{marginBottom: 15}}>
            <Text style={style.text}>
              {I18n.t('publicPrice')}
            </Text>
            <View style={style.valuesContainer}>
              <Text style={style.keyText}>
                {I18n.t('pricePerParticipant')}
              </Text>

              <TextInput
                style={style.input}
                maxLength={5}
                autoCorrect={false}
                placeholderTextColor="silver"
                placeholder="0"
                autoCapitalize="none"
                selectionColor="#ffffff"
                keyboardType="numeric"
                underlineColorAndroid={colors.skyBlue}
                value={this.state.priceInput > 0 ? this.state.priceInput.toString() : null}
                onChangeText={this.controlPricePerParticipant}
                onBlur={this.handlePriceBlur}
              />
            </View>
          </View> 
        : null
        }
      </View>
    )
  }
}

Prices.propTypes = {
  updatePricePerParticipant: PropTypes.func.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
  venueCost: PropTypes.number.isRequired,
};

export default createFragmentContainer(Prices, {
  viewer: graphql`
  fragment Prices_viewer on Viewer {
      id,
      me {
        fees
      }
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

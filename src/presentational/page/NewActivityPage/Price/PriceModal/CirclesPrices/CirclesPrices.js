import PropTypes from 'prop-types';
import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Modal, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import {cloneDeep} from 'lodash'

import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import FormListItem from 'sportunity/src/presentational/UI/FormListItem';
import style from './style';
import { colors } from 'sportunity/src/theme';

const CirclesPrices = ({ viewer, invitedCircles, invitedCirclesAndPrices, updateInvitedCirclesAndPrices, userCurrency }) => {
  const updatePriceInput = (circle, value) => {
    if (isNaN(value)) return ;

    let index = invitedCirclesAndPrices.findIndex(item => item.circle.id === circle.id);
    let updatedPrices = cloneDeep(invitedCirclesAndPrices)
    updatedPrices[index].price.cents = value ;
    updateInvitedCirclesAndPrices({index: index, value: updatedPrices[index]})
  }
  
  return(
    <View>
      <Text style={style.text}>
        {I18n.t('priceForCircles')}
      </Text>
      
      {invitedCircles.map(invitedCircle => (
          <FormListItem
              onPress={() => {}}
              title={invitedCircle.name}
              subtitle={() => (
                  <View>
                      <Text style={style.select}>
                          {invitedCircle.owner.pseudo}
                      </Text>
                  </View>
              )}
              rightField={() => (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                          value={invitedCirclesAndPrices && invitedCirclesAndPrices.find(pfc => pfc.circle.id === invitedCircle.id) ? (invitedCirclesAndPrices.find(pfc => pfc.circle.id === invitedCircle.id).price.cents).toString() : null}
                          onChangeText={value => updatePriceInput(invitedCircle, value)}
                          onBlur={this.handlePriceBlur}
                      />
                      <Text style={style.select}>
                          {invitedCirclesAndPrices && invitedCirclesAndPrices.find(pfc => pfc.circle.id === invitedCircle.id) ? invitedCirclesAndPrices.find(pfc => pfc.circle.id === invitedCircle.id).price.currency : userCurrency}
                      </Text>
                  </View>
              )}
          />
      ))}
    </View>
  )
}

export default CirclesPrices

I18n.fallbacks = true
I18n.translations = translations;

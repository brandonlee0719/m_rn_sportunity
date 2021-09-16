import React from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';

import NextButton from '../../../NextButton';
import translations from 'sportunity/src/translations.js';
import Validate from '../Validate/Validate'
import { images } from '../../../../theme';
import Button from '../../../UI/Button';
import style from './style';

const NavBar = ({ step, onExit, isLoggedIn, displayNextButton, sportunityId, updateSerie, reOrganizing, navigation, onNextButtonPress, lastStep, viewer, notifyPeopleSwitch }) => {
  const handleBackButtonPress = typeof onExit === 'function' ? onExit : () => navigation.goBack();
  
  return (  
    <View style={ Platform.OS === 'android' ? style.navBarContainerAndroid : style.navBarContainerIOS }>
      <TouchableOpacity
        onPress={handleBackButtonPress}
        style={style.navBarReturnButton}
      >
        <Image
          source={images.right_arrow}
          style={style.navBarReturnButtonIcon}
        />
      </TouchableOpacity>
      <Text style={style.navBarTitle}>
        {sportunityId 
        ? updateSerie
          ? I18n.t('modifySerie')
          : I18n.t('modifyActivity')
        : reOrganizing
          ? I18n.t('organizeAgain')
          : I18n.t('newActivity')
        } - {`${I18n.t('step')} ${step} ${I18n.t('of')} 7`}
      </Text>
      <View style={style.navBarNextButtonContainer}>
        {displayNextButton
        ? (
            isLoggedIn
            ? lastStep
              ? <Validate
                  sportunityId={sportunityId}
                  viewer={viewer}
                  isLoggedIn={isLoggedIn}
                  updateSerie={updateSerie}
                  notifyPeople={notifyPeopleSwitch}
                  navigation={navigation}
                />
              : <NextButton onPress={onNextButtonPress} />
            : <Button
                text={I18n.t('next')}
                onPress={() => {
                  Toast.show(I18n.t('sportunityToastLogin'));
                  navigation.navigate('settings')
                }}
              />
          )
        : null
        }
      </View>
    </View>
  );
};

export default NavBar;

I18n.fallbacks = true
I18n.translations = translations;

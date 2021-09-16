import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import { metrics, fonts, colors } from '../../theme';
import Card from '../UI/Card';

const { width } = Dimensions.get('window');
const cardHeight = 120;

const Picture = ({ image, stepNumber }) => (
  <View style={styles.imageContainer}>
    <Text style={styles.imageText}>{stepNumber}.</Text>
    {
      typeof image === 'function'
      ? <View style={styles.image}>{image()}</View>
      : <Image source={image} style={styles.image}/>
    }
  </View>
);

class StepsListItem extends Component {
  render() {
    const { stepNumber, image, headingText, description, onPress, onSkipPress, isStepComplete } = this.props;
    return (
      <Card style={styles.container}>
        <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
          <Picture stepNumber={stepNumber} image={image} />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 4 }}>
              <Text style={styles.heading}>{headingText}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {isStepComplete
                ?
                  <View style={styles.checkMark}>
                    <Icon name="check" color={colors.skyBlue} size={35} />
                  </View>
                :
                  <TouchableOpacity style={styles.skipButton} onPress={onSkipPress}>
                    <Text style={styles.skipButtonText}>{I18n.t('stepper_modal_organize_skip')}</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: cardHeight,
    width: width + metrics.baseMargin,
    marginHorizontal: -metrics.baseMargin,
    marginTop: metrics.baseMargin,
  },
  touchableContainer: {
    padding: metrics.baseMargin,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    width: cardHeight - (2 * metrics.doubleBaseMargin),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: 60,
    height: 60,
    resizeMode: 'contain',
    tintColor: colors.charcoal,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageText: {
    fontWeight: 'bold',
    fontSize: fonts.size.h4,
  },
  heading: {
    color: colors.charcoal,
    fontWeight: 'bold',
    fontSize: fonts.size.medium,
  },
  description: {
    color: colors.charcoal,
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin / 2
  },
  skipButton: {
    position: 'absolute',
    bottom: -metrics.baseMargin,
    right: 0,
    paddingTop: metrics.doubleBaseMargin,
    //paddingLeft: metrics.doubleBaseMargin,
    paddingBottom: metrics.baseMargin,
    paddingRight: metrics.baseMargin,
  },
  skipButtonText: {
    textDecorationLine: 'underline',
    fontSize: fonts.size.small
  }
});

export default StepsListItem;

I18n.fallbacks = true;
I18n.translations = translations;

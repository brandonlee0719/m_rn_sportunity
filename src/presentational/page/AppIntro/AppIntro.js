import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text, Dimensions, TouchableOpacity, AsyncStorage, Platform } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { images, colors, fonts, metrics } from 'sportunity/src/theme';
import { updateLocale } from 'sportunity/src/action/localeActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import moment from 'moment';

import {withNavigation} from 'react-navigation'

const { width, height } = Dimensions.get('window')

class AppIntroPage extends Component {
  componentDidMount() {
    
  }

  onSkipBtnHandle = () => {
    AsyncStorage.setItem('neverShowAppIntroAgain', JSON.stringify(true));
    this.props.navigation.goBack()
  }

  doneBtnHandle = () => {
    AsyncStorage.setItem('neverShowAppIntroAgain', JSON.stringify(true));
    this.props.navigation.goBack()
  }

  onNeverShowAgain = () => {
    AsyncStorage.setItem('neverShowAppIntroAgain', JSON.stringify(true));
    this.props.navigation.goBack()
  }

  changeLanguage = () => {
    if (this.props.language === 'en') {
      I18n.locale = 'fr';
      this.props.updateLocale('fr')
      moment.locale('fr')
    }
    else if (this.props.language === 'fr') {
      I18n.locale = 'en';
      this.props.updateLocale('en')
      moment.locale('en')
    }
  }

  onSlideChangeHandle= (i, t) => {
  }
  nextBtnHandle = () => {}

  render() {
    const {language} = this.props;
    
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        dotColor={colors.lightGrey}
        activeDotColor={colors.blue}
        skipBtnLabel={I18n.t('skip')}
        doneBtnLabel={I18n.t('tutorialExit')}
        nextBtnLabel={I18n.t('tutorialNext')}
        showSkipButton={false}        
        showDoneButton={true}
        showDots={false}
        customStyles={Platform.OS === 'android' ? androidStyle : iOsStyle}
      >
        <View style={[styles.slide]}>
          <ImageBackground style={styles.image} source={language === 'en' ? images.tutorial1_EN : images.tutorial1_FR}>
          {language === 'fr'
          ? <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
              <Text style={styles.languageText}>
                {'FR | '}
              </Text>
              <Text style={styles.blackLanguageText}>
                {'EN'}
              </Text>
            </TouchableOpacity>
          : <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
              <Text style={styles.blackLanguageText}>
                {'FR'}
              </Text>
              <Text style={styles.languageText}>
                {' | EN'}
              </Text>
            </TouchableOpacity>
          }
          </ImageBackground>
        </View>

        <View style={[styles.slide]}>
          <ImageBackground style={styles.image} source={language === 'en' ? images.tutorial2_EN : images.tutorial2_FR}>
            {language === 'fr'
            ? <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
                <Text style={styles.languageText}>
                  {'FR | '}
                </Text>
                <Text style={styles.blackLanguageText}>
                  {'EN'}
                </Text>
              </TouchableOpacity>
            : <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
                <Text style={styles.blackLanguageText}>
                  {'FR'}
                </Text>
                <Text style={styles.languageText}>
                  {' | EN'}
                </Text>
              </TouchableOpacity>
            }
          </ImageBackground>
        </View>

        <View style={[styles.slide]}>
          <ImageBackground style={styles.image} source={language === 'en' ? images.tutorial3_EN : images.tutorial3_FR}>
            {language === 'fr'
            ? <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
                <Text style={styles.languageText}>
                  {'FR | '}
                </Text>
                <Text style={styles.blackLanguageText}>
                  {'EN'}
                </Text>
              </TouchableOpacity>
            : <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
                <Text style={styles.blackLanguageText}>
                  {'FR'}
                </Text>
                <Text style={styles.languageText}>
                  {' | EN'}
                </Text>
              </TouchableOpacity>
            }
          </ImageBackground>
        </View>
      </AppIntro>
    );
  }
}


const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'row',
    alignItems: 'center',

    // marginBottom: metrics.doubleBaseMargin,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: colors.grey,
  },
  wideIcon: {
    width: 30,
    height: 22
  },
  title: {
    textAlign: 'center',
    color: colors.charcoal,
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginLeft: 15
  },
  text: {
    textAlign: 'center',
    color: colors.charcoal,
    fontSize: fonts.size.normal,
    marginBottom: 5,
    backgroundColor: 'transparent',
    paddingHorizontal: 40
  },
  dontShowAgainContainer: {
    paddingBottom: 4, 
    paddingHorizontal: 10
  },
  dontShowAgainContainerAndroid: {
    paddingBottom: 4, 
    paddingHorizontal: 10,
    //marginTop: 40
  },
  dontShowAgain: {
    textAlign: 'center',
    fontSize: fonts.size.normal,
    marginBottom: metrics.baseMargin,
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
    color: colors.red
  },
  circle: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTopWidth: Math.sqrt(width * width / 2),
    borderTopColor: 'white',
    borderLeftWidth: Math.sqrt(width * width / 2),
    borderLeftColor: 'white',
    borderTopLeftRadius: width,
    transform: [{rotate: '45deg'}],
    left: (width - Math.sqrt(width * width / 2)) / 2,
    bottom: (420 - Math.sqrt(width * width / 2)) / 2
  },
  textContainer: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    flex: 1,
    height: 210,
    paddingBottom: 36,
    zIndex: 3
  },
  textContainerAndroid: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    flex: 1,
    height: 210,
    marginBottom: 36,
    zIndex: 3
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },
  nextButton: {
    backgroundColor: colors.blue, 
    width,
    paddingVertical: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontSize: 13
  },
  languageContainer: {
    position: 'absolute',
    /*width: 40,
    height: 40,
    borderRadius: 20,*/
    top: 25,
    right: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  languageText: {
    color: colors.white,
    fontSize: 16
  },
  blackLanguageText: {
    color: colors.black,
    fontSize: 16
  },
  circular: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
  },
  addition: {
    backgroundColor: colors.bloodOrange,
  },
  charSymbol: {
    color: colors.silver,
    fontSize: fonts.style.small.fontSize,
    fontFamily: fonts.style.small.fontFamily,
    fontWeight: 'bold',
    marginBottom: Platform.OS === 'android' ? 0 : 2
  },
});

const iOsStyle = {
  dotStyle: { 
    marginBottom: 0, 
    marginTop: 10,
    height: 8, 
    width: 8 
  },
  activeDotStyle: { width: 20 },
  paginationContainer: { 
    bottom: 54,
    height: 10,
    flex: 1,
    flexDirection: 'column'
  },
  nextButtonText: {
    fontSize: 13,
    fontWeight: 'normal',
    fontFamily: 'HelveticaNeue',
    color: colors.white,
  },
  controllText: {
    fontSize: 13,
    fontWeight: 'normal',
    fontFamily: 'HelveticaNeue',
    color: colors.white,
    paddingLeft: 30,
  },
  btnContainer: {
    position: 'absolute',
    bottom: -44,
    backgroundColor: colors.blue, 
    paddingHorizontal: metrics.doubleBaseMargin,
    height: 35
  },
  full: {
    height: 40,
    width: '100%'
  }
};

const androidStyle = {
  dotStyle: { marginBottom: metrics.doubleBaseMargin, height: 8, width: 8 },
  activeDotStyle: { width: 20 },
  paginationContainer: { 
    bottom: 0,
    height: 90,
    flex: 1,
    flexDirection: 'column'
  },
  nextButtonText: {
    fontSize: 13,
    fontWeight: 'normal',
    fontFamily: 'HelveticaNeue',
    color: colors.white,
  },
  controllText: {
    fontSize: 13,
    fontWeight: 'normal',
    fontFamily: 'HelveticaNeue',
    color: colors.white,
    paddingLeft: 30,
  },
  btnContainer: {
    //position: 'absolute',
    bottom: 20,
    // flex: 1,
    backgroundColor: colors.blue, 
    // width,
    paddingHorizontal: 40,
    paddingVertical: 5, 
    //marginTop: 20
  },
  full: {
    height: 40,
    width: '100%'
  },
}


const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
  updateLocale: bindActionCreators(updateLocale, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(withNavigation(AppIntroPage));


// renderLoading() {
//   return (<View style={{ flex: 1, padding: 30, marginTop: 100 }}>
//     <ActivityIndicator
//       animation={true}
//       color='#5e9fdf'
//       size="large"
//     />
//   </View>);
// }
//
// renderError(error, retry) {
//   return (<View style={{ flex: 1, padding: 30, marginTop: 100, alignItems: 'center' }}>
//     <Text style={{ color: '#5b5b5b', fontSize: 20, marginBottom: 10 }}>Error while fetching data from the server. Check your internet connection.</Text>
//     <TouchableOpacity onPress={retry}>
//       <Text style={{ color: '#5e9fdf', fontSize: 30 }}>Retry?</Text>
//     </TouchableOpacity>
//   </View>);
// }

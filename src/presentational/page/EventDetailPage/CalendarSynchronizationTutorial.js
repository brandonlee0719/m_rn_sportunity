import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { updateLocale } from 'sportunity/src/action/localeActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Text from 'react-native-text';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import {images, fonts, metrics, colors} from '../../../../src/theme';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';


class CalendarSynchronizationTutorial extends Component{
    constructor() {
        super()
        this.state = {
            checkboxChecked: false
        }
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

    render() {
        const { onClose, language, isVisible } = this.props;
        
        
        if (!isVisible)
            return <View/>
        else 
            return (
                <View style={styles.container} >
                    <ImageBackground style={styles.image} source={language === 'fr' ? images.tutorialCalendarSyncFR : images.tutorialCalendarSyncEN}>
                        <TouchableOpacity style={styles.languageContainer} onPress={this.changeLanguage}>
                            <Text style={styles.languageText}>
                                {language === 'fr' ? 'EN' : 'FR' }
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={() => this.setState({checkboxChecked: !this.state.checkboxChecked})}>
                            <View style={styles.checkbox}>
                                {this.state.checkboxChecked && 
                                    <Image source={images.check} style={styles.checkboxImage}/>
                                }
                            </View>
                            <Text style={styles.checkboxText}>
                                {I18n.t('tutorialDontShow')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.exitButton} onPress={() => onClose(this.state.checkboxChecked)}>
                            <Text style={styles.exitButtonText}>
                                {I18n.t('tutorialExit')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.85)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 100,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        flexDirection: 'row',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    languageContainer: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        top: 25,
        left: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageText: {
        color: colors.white,
        fontSize: 18
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: metrics.baseMargin
    },
    checkbox: {
        width: 15, 
        height: 15,
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 2,
        marginRight: 5,
        position: 'relative'
    },
    checkboxImage: {
        tintColor: colors.red,
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    checkboxText: {
        color: colors.red,
        ...fonts.style.medium
    },
    exitButton: {
        backgroundColor: colors.snow,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: metrics.baseMargin
    },
    exitButtonText: {
        color: colors.skyBlue,
        ...fonts.style.normal
    }

})

CalendarSynchronizationTutorial.propTypes = {
    onClose: PropTypes.func.isRequired
};


const stateToProps = (state) => ({
    language: state.sportunityLocale.language,
});
  
const dispatchToProps = (dispatch) => ({
    updateLocale: bindActionCreators(updateLocale, dispatch),
});

//export default CalendarSynchronizationTutorial;
export default connect(
    stateToProps,
    dispatchToProps
  )(CalendarSynchronizationTutorial);

I18n.fallbacks = true
I18n.translations = translations;

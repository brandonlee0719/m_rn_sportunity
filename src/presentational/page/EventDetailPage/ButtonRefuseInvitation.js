import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, ActivityIndicator, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { metrics, colors, fonts } from 'sportunity/src/theme';

import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

//Refactoring tip: this button has complex logic, to be split out
//to general view component moved to presentational layer and page logic container
class ButtonRefuseSportunity extends Component{

    constructor(props) {
        super(props);
    }

    onPress = () => {
        const {isCoOrganizer} = this.props ;

        Alert.alert(
            I18n.t('sportunityAlertRefuseInvitationValidation'),
            isCoOrganizer ? I18n.t('sportunityAlertRefuseCoOrganizationValidation') : I18n.t('sportunityAlertRefuseInvitationText'), 
            [
                { text: I18n.t('yes'), onPress: () => this.props.refuseInvitation() },
                { text: I18n.t('no'), onPress: () => {} },
            ]
        )
    }

    render() {
        const { sportunity, user, isLoading, isCoOrganizer, renderButton } = this.props;
        const text = isCoOrganizer ? I18n.t('declineCoOrganization') : I18n.t('notAvailable');
        
        return (
        <View style={{flex: 1}}>
            {isLoading 
            ?   <ActivityIndicator
                    animating={isLoading}
                    size="large"
                    color={colors.blue}
                />
            :   typeof renderButton === 'function' ? renderButton({ text, onPress: this.onPress }) : (
                    <View>
                        <TouchableOpacity style={style.button} onPress={this.onPress}>
                            <Text style={style.text}>
                                {text}
                            </Text>
                        </TouchableOpacity>
                        <View style={{height: 60}}/>
                    </View>
                )
            }
        </View>

        )
    }
}

ButtonRefuseSportunity.propTypes = {
    sportunity: PropTypes.object.isRequired,
    user: PropTypes.object,
};

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.red,
        // padding: metrics.baseMargin,
        // marginTop: -60,
        marginBottom: metrics.doubleBaseMargin,
        marginHorizontal: metrics.doubleBaseMargin,
        borderRadius: 50,
    },
    text: {
        fontSize: 15,
        color: colors.snow,
        textAlign: 'center',
    },
})

/**
*  RELAY CREATE CONTAINER
*/
export default ButtonRefuseSportunity;

I18n.fallbacks = true
I18n.translations = translations;

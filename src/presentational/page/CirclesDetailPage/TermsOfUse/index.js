import React from 'react';
import {
  Alert,
  View,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  WebView,
  Linking
} from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';

import { colors, images } from 'sportunity/src/theme';
import styles from './style';
import translations from 'sportunity/src/translations.js';
import SportunityButton from '../../../SportunityButton';

class CircleTermsOfUse extends React.Component {

    constructor() {
        super();
        this.state = {
            isCheckboxChecked: false
        }
    }

    componentDidMount = () => {
    }

    _handleCheckboxChange = () => {
        this.setState({
            isCheckboxChecked: !this.state.isCheckboxChecked
        })
    }

    openLink = (link) => {
        Linking.openURL(link);
    }

    render = () => {
        const {circle, language} = this.props ;

        return(
            <ScrollView style={styles.container}>
                <View style={styles.topContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {I18n.t('circleTermsTitle')}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {I18n.t('circleTermsText')}
                        </Text>
                    </View>

                    {circle.termsOfUses.map(term => (
                        <View style={styles.termContainer}>
                            <Text style={styles.termTitle}>
                                {term.name + ' : '}
                            </Text>
                            {term.link 
                            ?   <View>
                                    <TouchableOpacity style={styles.linkContainer} onPress={() => this.openLink(term.link)}>
                                        <Text style={styles.termLink}>
                                            {term.link}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            :   <View style={styles.contentContainer}>
                                    <Text style={styles.termContent}>
                                        {term.content}
                                    </Text>
                                </View>
                            }
                        </View>
                    ))}

                    <View style={styles.switchContainer}>
                        <Text style={styles.labelText}>
                            {I18n.t('circleTermsValidate')}
                        </Text>
                        <Switch
                            style={styles.switchButton}
                            onTintColor={colors.skyBlue}
                            value={this.state.isCheckboxChecked}
                            onValueChange={this._handleCheckboxChange}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <SportunityButton buttonStyle={styles.button} onPress={() => this.props.validateTerms(this.state.isCheckboxChecked)} >
                        <Text style={styles.buttonText}>
                            {I18n.t('circleTermsOk')}
                        </Text>
                    </SportunityButton>
                </View>
            </ScrollView>
        )
    }
}

export default CircleTermsOfUse

I18n.fallbacks = true
I18n.translations = translations;

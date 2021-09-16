import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import styles from './style';

class NoMemberView extends Component {
    
    render(){
        const { viewer } = this.props

        return (
            <View style={styles.noMemberContainer}>
                <Text style={styles.noMemberTitle}>
                    {I18n.t('circleNoMemberTitle')}
                </Text>
                <Text style={styles.noMemberText}>
                    {viewer.me.profileType === 'PERSON'
                    ?   I18n.t('circleNoMemberTextPeople').split(':').map(text =>
                            text === '{0}' ? <Text style={styles.blueText}>{'"' + I18n.t('circleAddFriends') + '"'}</Text> :
                            text === '{1}' ? <Text style={styles.blueText}>{'"' + I18n.t('circleShare') + '"'}</Text> :
                            text === '{2}' ? <Text style={styles.blueText}>{'"' + I18n.t('circleOptions') + '"'}</Text> :
                            text
                        )
                    :   I18n.t('circleNoMemberTextOthers').split(':').map(text =>
                            text === '{0}' ? <Text style={styles.blueText}>{'"' + I18n.t('circleAddMembers') + '"'}</Text> :
                            text === '{1}' ? <Text style={styles.blueText}>{'"' + I18n.t('circleShare') + '"'}</Text> :
                            text === '{2}' ? <Text style={styles.blueText}>{'"' + I18n.t('circleOptions') + '"'}</Text> :
                            text
                        )
                    }
                    <Text style={styles.blueText}>{'"' + I18n.t('circleAddFriends') + '"'}</Text>
                </Text>
            </View>
        );
    }
}
    

export default NoMemberView;

I18n.fallbacks = true
I18n.translations = translations;

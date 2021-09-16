import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import { colors, fonts } from 'sportunity/src/theme';

let styles

class BottomContent extends PureComponent {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    const { circle, userIsOwner, userIsSuperUser, userIsMember } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.column}>
            <Text style={styles.infoText}>
                {circle.mode === 'PUBLIC' 
                ? I18n.t('circles_public')
                : I18n.t('circles_private')}
            </Text>
            {circle.isCircleUsableByMembers 
            ?   <Text style={styles.infoText}>
                    {' - ' + I18n.t('circles_shared')}
                </Text> 
            : null}
        </View>
        <View style={styles.column}>
            <Text style={styles.infoText}>
                {userIsOwner
                ?   I18n.t('owner')
                :   userIsSuperUser
                    ?   I18n.t('coOwner')
                    :   userIsMember
                        ?   I18n.t('member')
                        :   ''
                }
            </Text>
        </View>
      </View>
    )
  }
}
export default BottomContent;


I18n.fallbacks = true
I18n.translations = translations;

styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    width: '100%',
    paddingVertical: 5
  },
  column: {
    flexDirection: 'row',
    //alignItems: 'center',
  },
  infoText: {
      color: colors.darkGreen,
      fontSize: 12
  }
};

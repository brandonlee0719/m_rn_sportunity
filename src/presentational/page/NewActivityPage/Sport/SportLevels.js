import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import icons from 'sportunity/src/theme/images';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../UI/FormListItem';

const SportLevels = ({ viewer, sportName, sportLevelNames, sportunitySport, navigation }) => {
    return(
        <FormListItem
            onPress={() => navigation.navigate('sportunitySportLevels', {selectedSport: sportunitySport, sportName})}
            title={I18n.t('optionalLevels')}
            subtitle={sportLevelNames.length === 0 
                ?   <Text style={style.select}>
                        {I18n.t('select')}
                    </Text>
                :   sportunitySport.allLevelSelected 
                    ?   <Text style={style.select}>
                            {I18n.t('noLevelRestriction')}
                        </Text>
                    :   <View>
                            <Text style={style.selectBlue}>
                                <Text style={style.black}>{
                                    I18n.t('from') + ' '}
                                </Text>  
                                {sportLevelNames[0]} 
                                <Text style={style.black}>
                                    {' ' + I18n.t('to') + ' '}
                                </Text>  
                                {sportLevelNames[sportLevelNames.length - 1]}
                            </Text>
                        </View>
                }
        rightIcon={icons.right_arrow_blue}
        />
    )
}

const stateToProps = (state) => ({
  sportName: state.sportunityNewActivity.sportName,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  sportLevelNames: state.sportunityNewActivity.sportLevelNames,
  sportPositionNames: state.sportunityNewActivity.sportPositionNames,
  sportCertificateNames: state.sportunityNewActivity.sportCertificateNames,
});

export default connect(
  stateToProps,
  null
)(SportLevels);

I18n.fallbacks = true
I18n.translations = translations;

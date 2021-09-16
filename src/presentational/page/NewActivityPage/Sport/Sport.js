import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import icons from 'sportunity/src/theme/images';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../UI/FormListItem';

const Sport = ({ viewer, sportName, sportLevelNames, sportPositionNames, sportCertificateNames, navigation }) => {
  return(
    <FormListItem
      onPress={() => navigation.navigate('sportunitySports')}
      title={I18n.t('sport')}
      subtitle={sportName === '' ? I18n.t('select') : () => (
        <View>
          <Text style={style.select}>
            {sportName}
          </Text>
          <View style={{ 'flexDirection': 'row' }}>
            {
              sportPositionNames.map((item) => {
                return(
                  <Text style={style.select} numberOfLines={1} key={item}>
                    {item}
                  </Text>
                )
              })
            }
          </View>
          <View style={{ 'flexDirection': 'row' }}>
            {
              sportCertificateNames.map((item) => {
                return(
                  <Text style={style.select} numberOfLines={1} key={item}>
                    {item}
                  </Text>
                )
              })
            }
          </View>
        </View>
      )}
      rightIcon={icons.right_arrow_blue}
    />
  )
}

Sport.propTypes = {
  sportName: PropTypes.string.isRequired,
  sportLevelNames: PropTypes.array.isRequired,
  sportPositionNames: PropTypes.array.isRequired,
  sportCertificateNames: PropTypes.array.isRequired,
  viewer: PropTypes.object.isRequired,
};

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
)(Sport);

I18n.fallbacks = true
I18n.translations = translations;

import React from 'react';
import { pure } from 'sportunity/src/lib/PureComponent'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import BlockMutation from './BlockMutation.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';

const Block = pure(({ viewer, userId, meId, blackList }) => {

  const blockUser = () => {

    let blackListVar = blackList.splice();
    blackListVar.push(userId);

    BlockMutation.commit({
      userID:meId,
      user: {
        blackList:blackListVar,
      },
    },
    () => {
      Toast.show(I18n.t('blockSuccess'));
    },
    error => {
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  return(
    <TouchableOpacity style={styles.container} onPress={blockUser}>
      <Text style={styles.text}>
        {I18n.t('blockUser')}
      </Text>
      <Image
        source={images.block}
      />
  </TouchableOpacity>
  )
})

export default Block;

const styles =  StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  text: {
    fontSize: fonts.regular,
    color: colors.skyBlue,
    flex: -1,
  },
});

I18n.fallbacks = true
I18n.translations = translations;

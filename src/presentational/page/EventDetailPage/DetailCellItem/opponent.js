import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import userType from '../../../../../src/customPropType/user';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import images from '../../../../../src/theme/images';
import { colors, metrics } from '../../../../../src/theme';
import { styles } from './styles';
import FormListItem from '../../../UI/FormListItem';
import Card from '../../../UI/Card';


const Opponent = ({ user, goToUser, unknown }) => {
  return(
    user
		?  <Card style={{ marginBottom: 0 }}>
					<FormListItem
						onPress={() => user && user.id && goToUser(user.id)}
						title={() => (
							<Text style={styles.opponentHeading}>{I18n.t('opponent')}</Text>
						)}
						subtitle={() => (
							<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
								{user.avatar
									? <Image style={styles.smallThumb} source={{ uri: user.avatar }} />
									: <Image style={[styles.smallThumb,{ tintColor: colors.grey }]} source={images.red_user} />
								}
								<Text style={styles.subtitleText} numberOfLines={1}>{user.pseudo}</Text>
							</View>
						)}
					/>
				</Card>
		:   unknown &&
				<Card style={{ marginBottom: 0 }}>
					<FormListItem
						title={() => (
							<Text style={styles.opponentHeading}>{I18n.t('opponent')}</Text>
						)}
						subtitle={() => (
							<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
								<Image style={[styles.smallThumb,{ tintColor: colors.grey }]} source={images.red_user} />
								<Text style={styles.subtitleText} numberOfLines={1}>{I18n.t('unknownOpponent')}</Text>
							</View>
						)}
					/>
				</Card>
  )
};

Opponent.propTypes = {
  user: userType,
  goToUser: PropTypes.func,

};

export default Opponent;

I18n.fallbacks = true
I18n.translations = translations;
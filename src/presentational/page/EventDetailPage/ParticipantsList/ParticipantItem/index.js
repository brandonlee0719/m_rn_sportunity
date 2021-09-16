import React from 'react';
import { 
  View, 
  TouchableOpacity,
} from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';

import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../../UI/FormListItem';
import { metrics, colors } from '../../../../../theme';

const ParticipantItem = ({ user, cancelParticipant, isOrganized, index, isPast, price, showDetails, goToUser }) => (
  <FormListItem
    containerStyle={{ borderWidth: 0, shadowOpacity: 0, elevation: 0 }}
    leftIcon={{ uri: user.avatar }}
    title={user.pseudo}
    type="secondary"
    onPress={() => typeof goToUser !== 'undefined' && goToUser(user.id)}
    rightIcon={() => (
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        {index === 1 && isOrganized && price && price.cents > 0 &&
          <Text style={{marginRight: metrics.baseMargin, color: colors.charcoal}}>
            {(price && price.cents || 0) + ' ' + price.currency}
          </Text>
        }
        {index === 1 && isOrganized && (!isPast || (isPast && price && price.cents === 0)) &&
          <TouchableOpacity onPress={() => cancelParticipant(user)} style={{ padding: metrics.baseMargin }}>
            <Icon name="close" size={22} color={colors.charcoal} />
          </TouchableOpacity>
        }
      </View>
    )}
  />
)


export default ParticipantItem;

I18n.fallbacks = true
I18n.translations = translations;

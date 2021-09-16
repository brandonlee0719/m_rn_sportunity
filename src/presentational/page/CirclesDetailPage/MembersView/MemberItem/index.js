import React from 'react';
import PropType from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';

import { images } from '../../../../../theme';
import { userType } from '../../../../../customPropType';
import styles from './style';
import FormListItem from '../../../../UI/FormListItem';

const Member = ({
  user,
  removeMember,
  userCanRemoveMember,
  fulfilledInfos,
  details,
  existingAskedInformation,
  hideFulFilledInfosIcon
}) => {

  return (
    <FormListItem
      type="secondary"
      containerStyle={{ borderWidth: 0, shadowOpacity: 0, elevation: 0 }}
      title={user.pseudo || user.email}
      leftIcon={() => (
        <View>
          {user.avatar
            ? <Image style={styles.thumbProfile} source={{uri: user.avatar}} />
            : <Image style={styles.thumbProfile} source={images.profile_photo} />
          }
        </View>
      )}
      subtitle={() => (
        <View>
          {details && !!details.length && (
            <View style={{ flexDirection: 'column', margin: 10 }}>
              {details.map((detail) => (
                <Text>{detail.question.name}: {detail.response.value}</Text>
              ))}
            </View>
          )}
        </View>
      )}
      rightIcon={() => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {existingAskedInformation && !details.length && !user.lastConnexionDate && (
            <Image style={styles.smallIconGreen} source={images.neverLoggedIn} />
          )}
          {!hideFulFilledInfosIcon && existingAskedInformation && !details.length && (
            <Image style={fulfilledInfos? styles.smallIconBlue : styles.smallIconDisable} source={images.fileText} />
          )}
          {userCanRemoveMember &&
            <TouchableOpacity style={styles.removeContainer} onPress={() => removeMember(user)}>
              {/*<Text style={styles.remove}>X</Text>*/}
              <Image style={styles.remove} source={images.close_x} />
            </TouchableOpacity>
          }
        </View>
      )}
    />
  )
};

Member.propTypes = {
  user: userType.isRequired,
  details: PropType.arrayOf(PropType.object),
};


export default Member;

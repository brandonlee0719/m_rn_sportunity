import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, } from 'react-native';
import Text from 'react-native-text';
import styles from './style';
import images from '../../../../../theme/images';
import {
  graphql,
  createFragmentContainer,
} from 'react-relay';

const UserItem = ({ user:{ avatar, pseudo } }) => {
  return(
    <View style={styles.photoContainer}>
      {avatar ?
       <Image style={styles.thumbProfile} source={{ uri: avatar }} />
       :
       <Image style={styles.thumbProfile} source={images.profile_photo} />
      }
      <View style={styles.nameProfile}>
        <Text numberOfLines={1}>{pseudo}</Text>
      </View>
    </View>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};


export default  createFragmentContainer(UserItem, {
  user: graphql`
    fragment UserItem_user on User{
      id,
      pseudo,
      avatar
    }`,
  }
)

import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import userType from '../../../../../src/customPropType/user';

import images from '../../../../../src/theme/images';
import { styles } from './styles';


const Organizer = ({ user, goToUser, sportunity, role }) => {
  
  let userLevels = []
  let fromLevel = ''
  let toLevel = ''
  user.sports && user.sports.map(sport => {
    if(sport.id === sportunity.sport.id) {
      sport.levels.map(level => {
        userLevels.push(level.EN.name);
      })
    }
  })
  fromLevel = userLevels[0]
  toLevel = userLevels[userLevels.length -1]

  return(
    user &&
    <TouchableOpacity onPress={() => goToUser(user.id)} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style={styles.thumb} source={{ uri: user.avatar }} />
        </View>
        <View style={styles.detailContainer}>
          {role &&
            <View style={styles.row}>
              <Text style={styles.role} numberOfLines={1}>{role}</Text>
            </View>
          }
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={1}>{user.pseudo}</Text>
          </View>
          <View style={styles.row}>
            {
              /*
              fromLevel && toLevel &&
                <Text style={styles.level}>
                  <Text style={styles.blackText}>From:</Text> {fromLevel} <Text style={styles.blackText}>to:</Text> {toLevel}
                </Text>
                */
            }
            {

              /*
              user.address &&
                <Text style={styles.level}>
                  {user.address.address} {`${user.address.zip} ${user.address.city}, ${user.address.country}`}
                </Text>
              */
            }
          </View>
          <View style={styles.rowBottom}>
            {
              user.sportunityNumber && user.sportunityNumber > 0
              ? <Image style={[styles.iconLocation,styles.iconOrange]} source={images.activities} />
              : <Image style={[styles.iconLocation,styles.iconGreen]} source={images.activities} />
            }
            <Text style={styles.location}>{user.sportunityNumber}</Text>
            <View style={styles.w_seperator} />
            {
              user.followers && user.followers.length > 0
              ?
                <Image style={[styles.iconLocation,styles.iconOrange]} source={images.favourite} />
              :
                <Image style={[styles.iconLocation,styles.iconGreen]} source={images.favourite} />
            }
            <Text style={styles.location}>{user.followers && user.followers.length}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

Organizer.propTypes = {
  user: userType,
  goToUser: PropTypes.func.isRequired,

};

export default Organizer
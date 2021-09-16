import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';
import UserItem from './UserItem';
import { userType } from '../../../../customPropType';

const UserList = ({ users }) =>
  <View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      style={styles.usersContainer}
      scrollsToTop={false}
    >
      { users && users.map((item, index) => <UserItem key={index} user={item} /> ) }
    </ScrollView>
  </View>
;

UserList.propTypes = {
  users: PropTypes.arrayOf(userType),
};


export default UserList;

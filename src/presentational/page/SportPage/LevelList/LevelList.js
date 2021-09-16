import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

import styles from './style';

const SportList = ({ viewer, searchText }) => {

  const addSport = () => {
    return false;
  }

  return(
    <ScrollView style={styles.container}>

      {
        viewer.sports.edges
          .filter((item) => item.node.logo.toLowerCase().indexOf(searchText) >= 0)
          .map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => addSport(item)}
            >
              <Text style={styles.name}>
                {item.node.id}
              </Text>

            </TouchableOpacity>
          ))
      }

    </ScrollView>
  )

};

SportList.propTypes = {
  viewer: PropTypes.object.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default createFragmentContainer(SportList, {
  viewer: graphql`
    fragment LevelList_viewer on Viewer{
      sports (last: 50){
        edges {
          node {
            id,
            name {
              FR,
              EN,
              DE,
              ES
            },
            logo
          }
        }
      }
    }
  `,
});

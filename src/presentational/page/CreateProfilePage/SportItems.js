import React from 'react';
import {
   View,
   TouchableOpacity,
   Image,
   StyleSheet,
} from 'react-native';
import Text from 'react-native-text';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';

const SportsItems = () => (
  <View style={styles.listContainer}>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Present your sport and level
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.sports.map((item, index) => (
      <View
        key={index}
        style={styles.sportItem}
      >

        <Text style={styles.sportText}>
          {item.name}

        </Text>

        <Text style={styles.sportText}>
          {item.level}
        </Text>

        <TouchableOpacity>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={images.close_x}
          />
        </TouchableOpacity>

      </View>
    ))}
    <TouchableOpacity onPress={() => {/* // TODO Actions.sports*/}}>
      <Text style={[styles.sportText, styles.addText]}>
        ADD
      </Text>
    </TouchableOpacity>

  </View>
);

export default SportsItems;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin,
    borderWidth: 1,
    borderColor: colors.steel,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: fonts.size.medium,
    margin: 3,
    color: colors.skyBlue,
  },
  sportItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 10,
  },
  sportText: {
    flex: 1,
    maxHeight: 30,
    fontSize: fonts.size.medium,
    margin: 8,
    color: colors.skyBlue,
  },
  addText: {
    textAlign: 'center',
    marginVertical: 5,
    borderColor: colors.steel,

  },
  // image: {
  //   height: 20,
  //   width: 30,
  //   marginRight: metrics.doubleBaseMargin,
  // },
  icon: {
    height: 15,
  },
});


// <Image
//   style={styles.image}
//   resizeMode="contain"
//   source={require(item.icon)}
// />

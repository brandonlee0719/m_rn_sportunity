import React from 'react';
import {
   View,
   Image,
   TouchableOpacity,
   StyleSheet,
} from 'react-native';
import Text from 'react-native-text';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';

const PayoffItems = () => (
  <View style={styles.listContainer}>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Payoff methods
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.payoffs.map((item, index) => (
      <View
        key={index}
        style={styles.payoffItem}
      >

        <Text style={styles.payoffText}>
          {item.number}
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

    <Text style={[styles.payoffText, styles.addText]}>
      ADD
    </Text>

  </View>
);

export default PayoffItems;

const styles =  StyleSheet.create({
  listContainer: {
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
    padding: 3,
    color: colors.skyBlue,
  },
  payoffItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 10,
    padding: 8,
  },
  payoffText: {
    flex: 1,
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
  },
  addText: {
    margin: 8,
    textAlign: 'center',
  },
  // image: {
  //   marginRight: 70,
  //   height: 20,
  //   width: 70,
  // },
  icon: {
    height: 15,
  },
});


// <Image
//   style={styles.image}
//   resizeMode="contain"
//   source={require(item.image)}
// />

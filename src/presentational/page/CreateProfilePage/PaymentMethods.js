import React from 'react';
import {
   View,
   TouchableOpacity,
   Image,
   StyleSheet,
} from 'react-native';
import Text from 'react-native-text';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { images, metrics, colors, fonts } from 'sportunity/src/theme';

const PaymentMethods = () => (
  <View style={styles.listContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Payment methods
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.payments.map((item, index) => (
      <View
        key={index}
        style={styles.paymentItem}
      >
        <Text
          style={styles.paymentText}
        >
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

    <Text style={[styles.paymentText, styles.addText]}>
      ADD
    </Text>
  </View>
);

export default PaymentMethods;

const styles = StyleSheet.create({
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
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 10,
    padding: 8,
  },
  paymentText: {
    flex: 1,
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
  },
  addText: {
    textAlign: 'center',
    margin: 8,
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

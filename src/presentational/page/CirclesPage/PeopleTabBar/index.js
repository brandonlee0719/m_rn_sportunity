import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, Image } from 'react-native';
import { colors, metrics, fonts } from 'sportunity/src/theme';
import { images } from '../../../../theme';


export const PeopleComponent  = ({ imgSrc, name, detailText, onPressFunc }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.leftContainer} onPress={onPressFunc}>
        <View style={styles.row}>
          <View style={styles.topContent}>
            <View style={styles.imageContainer}>
              {imgSrc 
                ? <Image style={styles.avatar} source={{uri: imgSrc}}/>
                : <Image style={styles.avatar} source={images.profile_photo} />
              }
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {name || 'N/A'}
              </Text>
              <View style={styles.ownerContainer}>
                <Text style={styles.ownerName} numberOfLines={2}>
                  {detailText || 'N/A'}
                </Text>
              </View>
              <Text style={styles.type} numberOfLines={1}>
                {detailText}
              <Text style={styles.typeName}>{detailText || 'N/A'}</Text>
              </Text>
            </View>
          </View>
        </View>        
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  markerOverlayContainer: {
    flexDirection: 'row',
    flex: 1,
    left: 0,
    right: 0,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
  },
  container:{
    flex: 1,
  },
  content: {
    height: 130,
    flex: 1,
    flexDirection: 'row',
    borderWidth: metrics.borderWidthRow,
    borderRadius: metrics.borderRowRadius,
    borderColor: colors.lightGrey,
    marginBottom: metrics.baseMargin,
    //padding: metrics.smallMargin,
    backgroundColor: colors.white,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 0.1,
  },
  selectedCircleContent: {
    height: 130,
    flex: 1,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    borderWidth: 0.5,
    borderRadius: metrics.borderRowRadius,
    borderColor: colors.bloodOrange,
    backgroundColor: colors.white,
    elevation: 2,
    shadowColor: colors.bloodOrange,
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 0.6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.smallMargin,
    flex: 8
  },
  imageContainer: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
  image: {
    width: metrics.images.large,
    height: metrics.images.medium,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  members:[fonts.style.normal, {
    color: colors.blue,
    fontWeight: 'bold',
    marginLeft: 14,
  }],
  titleContainer: {
    //
    justifyContent: 'center',
    paddingVertical: 12
  },
  title: [
    fonts.style.normal, 
    {
      fontWeight: 'bold',
      color: colors.blue,
    },
  ],
  ownerContainer: {
    //flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  ownerName: [
   // fonts.style.small, 
  ],
  avatar: {
    width: 60,
    height: 60,
    marginRight: 5,
    //resizeMode: 'contain',
    borderRadius: 30
  },
  type: [
    fonts.style.description, 
    {
      color: colors.charcoal,
      marginTop: 5
    },
  ],
  typeName: [
    fonts.style.description, 
    {
      color: colors.blue,
    },
  ],
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative'
  },
  topContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContainer: {
    padding: 10,
  },
  closeImage: {
    width: metrics.icons.small,
    height: metrics.icons.small,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: colors.skyBlue,
  },
  closeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  close: [fonts.style.h1, {
    color: colors.blue,
  }],
  ellipseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ellipseBar: {
    width: 6,
    height: 18,
    resizeMode: 'contain',
  },
  bottomContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer:{
    position: 'absolute',
    height: metrics.images.small,
    width: metrics.images.small,
    justifyContent: 'center',
    alignItems: 'center',
    top: 2, 
    right: 2
  },
  remove: {
  },
  subscribeContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 30,
    backgroundColor: colors.blue,
    marginTop: 35
  },
  subscribe: [fonts.style.small, {
    color: colors.white,
  }]
});
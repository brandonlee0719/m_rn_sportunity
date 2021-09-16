import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import {View, Image, StyleSheet} from 'react-native';
import Text from 'react-native-text';
import { metrics, colors, fonts } from 'sportunity/src/theme';

import icons from '../../../theme/images';
import SportunitySummary from '../../../customPropType/SportunitySummary';
import DateSportunity from '../../DateSportunity/DateSportunity';

const Header = (props) => {
  const { sportunity:{ price, title, sport_con: { sport }}} = props;
  return (
    <View style={styles.headerTop}>
      <Image style={styles.headerImage} source={{ uri: sport.logo }} />
      <Text style={styles.headerText}>{title}</Text>
      <DateSportunity noicon sportunity={props.sportunity}/>
    </View>
  )
}

Header.propTypes = {
  sportunity: SportunitySummary.isRequired,
};

export const styles = StyleSheet.create({
  headerTop: {
    marginTop: metrics.doubleBaseMargin,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: StyleSheet.flatten([fonts.style.h6, {
    color: colors.blue,
    marginVertical: metrics.doubleBaseMargin,
  }]),
  headerImage: {
    width: metrics.images.large,
    height: metrics.images.large,
    tintColor: colors.blue,
  }
});

export default createFragmentContainer(Header, {
  sportunity: graphql`fragment ConfirmBookingPageHeader_sportunity on Sportunity{
    title
    ...DateSportunity_sportunity
    sport_con: sport{
      sport {
        logo
      }
    }
  }`,
});

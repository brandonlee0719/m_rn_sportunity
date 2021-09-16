import PropTypes from 'prop-types';
import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Text from 'react-native-text';
import moment from 'moment'
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import { styles } from './style';


class TopContent extends PureComponent {
  constructor() {
    super()
    this.state = {
      organizer: null
    }
  }

  componentDidMount = () => {
    const {sportunity} = this.props
    if (sportunity && sportunity.organizers) {
      sportunity.organizers.forEach(organizer => {
        if (organizer.isAdmin && organizer.organizer.areStatisticsActivated) {
          this.setState({
            organizer: organizer.organizer
          })
        }
      })
    }
  }

  getUserSpecificPrice = (user, paymentStatus, price) => {
    if (paymentStatus) {
      let index = paymentStatus.findIndex(paymentStatus => {
        return paymentStatus.status !== 'Canceled' && user && paymentStatus && paymentStatus.price && user.id === paymentStatus.user.id;
      });
      if (index >= 0)
        return paymentStatus[index].price
      else
        return price ;
    }
    else return price ;
  }

  render = () => {
    const { onPress, slot, viewer, language } = this.props ;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
          {slot.serie_information && slot.serie_information.firstDate && moment(slot.serie_information.lastDate).format('MMMM DD YYYY') !== moment(slot.end).format('MMMM DD YYYY')
          ?   <View style={styles.row}>
                <Text style={styles.status}>
                  {I18n.t('serieSlot')}
              </Text>
              <View style={styles.datetimeContainer}>
                <Text style={styles.datetime}>
                  {I18n.t('from2') + ' ' + moment(slot.from).format('ddd DD MMM') + ' ' + I18n.t('to2') + ' ' + moment(slot.serie_information.lastDate).format('DD MMM')}
                </Text>
                <Text style={styles.datetime}>
                  {moment(slot.from).format('HH:mm') + '  -  ' + moment(slot.end).format('HH:mm')}
                </Text>
                <Text style={styles.datetime}>
                  {I18n.t('repetitionNumber') + ': ' + slot.serie_information.remainingSlots}
                </Text>
              </View>
            </View>
          :   <View style={styles.row}>
                <Text style={styles.status}>
                  {I18n.t('simpleSlot')}
                </Text>
              <View style={styles.datetimeContainer}>
                <Text style={styles.datetime}>
                  {moment(slot.from).format('ddd DD MMM')}
                </Text>
                <Text style={styles.datetime}>
                  {moment(slot.from).format('HH:mm') + '  -  ' + moment(slot.end).format('HH:mm')}
                </Text>
              </View>
              </View>
          }

        <View style={[styles.row, styles.row2]}>

          <View style={styles.imageContainer}>
            {slot.infrastructure && slot.infrastructure.logo 
            ? <Image style={styles.icon} source={{ uri: slot.infrastructure.logo }} />
            : <Image style={styles.icon} source={icons.infrastructure}/>
            }
          </View>

          <View style={styles.detailContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {slot.venue.name}
              </Text>
              <Text style={styles.title} numberOfLines={1}>
                {slot.infrastructure.name}
              </Text>
            <View style={styles.row}>
              <Image style={styles.iconLocation} source={icons.location} />
              <Text style={styles.location} numberOfLines={1}>
                {
                  slot.venue.address.city
                }
              </Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {slot.price.cents === 0
                ? I18n.t('free')
                : `${userPrice.cents/100} ${userPrice.currency}`
              }
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    );
  }
}

TopContent.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

export default connect(
  stateToProps,
  null
)(TopContent);

I18n.fallbacks = true
I18n.translations = translations;

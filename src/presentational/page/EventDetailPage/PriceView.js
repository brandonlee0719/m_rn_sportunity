import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Text from 'react-native-text';
import { styles } from './styles';

import {
  colors,
} from 'sportunity/src/theme';

class Price extends React.Component {
  constructor(props) {
    super(props)
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

  getCirclePrices = (sportunity, isAdmin) => {
    if (isAdmin && sportunity.price_for_circle && sportunity.price_for_circle.length > 0 && sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.length > 0) {
      let result = [];
      sportunity.price_for_circle.forEach(priceForCircle => {
        sportunity.invited_circles.edges.forEach(invitedCircle => {
          if (invitedCircle.node.id === priceForCircle.circle.id) {
            result.push({price: priceForCircle.price, circle: invitedCircle.node})
          }
        })
      })
      result.sort((a,b) => {
        return (b.price.cents - a.price.cents)
      })
      return result; 
    }
    else
      return [];
  }

  render = () => {
    const {sportunity, viewer, isAdmin} = this.props; 
    let userPrice = this.getUserSpecificPrice(viewer.me, sportunity.paymentStatus, sportunity.price);
    let circlePrices = this.getCirclePrices(sportunity, isAdmin);
    
    return (
      <View style={styles.priceList}>
        {isAdmin && sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.length > 0 && circlePrices.length === 0 &&
          <View>
            <View style={styles.rowMargin}>
              <Text style={styles.title} numberOfLines={1}>
                {I18n.t('invitedCircleOrCircles')}
              </Text>
            </View>
            {sportunity.invited_circles.edges.map((edge, index) => (
              <View style={styles.rowMargin} key={index}>
                <Text style={[...styles.price]} numberOfLines={1}>
                  {edge.node.name}
                </Text>
              </View>
            ))}
          </View>
        }
        {sportunity.kind === 'PUBLIC' &&
          <View style={styles.rowMargin}>
              <Text style={styles.title} numberOfLines={1}>
                {circlePrices.length > 0 ? I18n.t('publicPrice') : I18n.t('price')}
              </Text>
              <View style={styles.right_column}>
                <Text style={styles.price}>
                  {userPrice &&  userPrice.cents !== 0 ? `${userPrice.cents / 100} ${userPrice.currency}` : I18n.t('free')}
                </Text>
              </View>
            
          </View>
        }
        {
          circlePrices.length > 0 &&
            circlePrices.map((circlePrice, index) => (
              <View style={styles.rowMargin} key={index}>
                <Text style={styles.title} numberOfLines={1}>
                  {circlePrice.circle.name}
                </Text>
                <View style={styles.right_column}>
                  <Text style={styles.price}>
                    {circlePrice.price && circlePrice.price.cents !== 0 
                    ? `${circlePrice.price.cents / 100} ${circlePrice.price.currency}` 
                    : I18n.t('free')}
                  </Text>
                </View>
              </View>
            ))
        }
      </View>
    )
  }
};

Price.propTypes = {
  price: PropTypes.object,
};

export default createFragmentContainer(Price, {
  sportunity: graphql`fragment PriceView_sportunity on Sportunity{
    kind
    price {
      currency
      cents
    },
    paymentStatus {
      user {
        id
      }
      status
      price {
        cents,
        currency
      }
    }
    invited_circles (last: 100) {
      edges {
        node {
          id,
          name,
          mode
          memberCount
          type
          owner {
            id
            avatar
            pseudo
          }
          members {
            id
            pseudo
          }
        }
      }
    }
    price_for_circle {
      circle {
        id
      }
      price {
        cents, 
        currency
      }
    },
  }`,
  viewer: graphql`fragment PriceView_viewer on Viewer{
    me {
      id
    }  
  }`
});

I18n.fallbacks = true
I18n.translations = translations;
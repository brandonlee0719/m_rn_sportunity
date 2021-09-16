import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import { images } from 'sportunity/src/theme';
import { ListBlockItem } from '../ListBlock';

type PaymentMethod$Props = {
  card: PaymentMethod$Data,
  style?: StyleSheet,
  onPress?: (id: string) => void,
  onDelete?: (id: string) => void,
  deletable: boolean
};

//TODO: what is fallback card type image?
const PaymentMethod = (props: BankCard$Props) => {
  const {card: {cardType, cardMask, id}, onPress, onDelete, selected} = props;
  return (
    <ListBlockItem selected={selected} style={props.style}>
      <TouchableOpacity style={styles.row} onPress={() => onPress && onPress(id)}>
        <View style={styles.row}>
          <Image source={images[cardType] || images.master_card} />
          <Text style={styles.cardMask} >
            {cardMask || ' '}
          </Text>
        </View>
      </TouchableOpacity>
      { onDelete &&
        <TouchableOpacity style={styles.removeIcon} onPress={() => onDelete(id)}>
          <Image style={styles.rightButton} source={images.close_x} />
        </TouchableOpacity>
      }
    </ListBlockItem>
  )
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60
  },
  cardMask: {
    marginLeft: metrics.doubleBaseMargin,
    paddingRight: metrics.marginHorizontal,
    textAlign: 'right',
    color: colors.skyBlue,
    fontSize: fonts.size.medium
  },
  rightButton: {
    
  },
  removeIcon: {
      marginLeft: metrics.baseMargin,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default PaymentMethod;

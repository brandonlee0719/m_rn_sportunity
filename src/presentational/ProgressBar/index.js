import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors, metrics, fonts } from '../../theme';

const ProgressBar = ({
  percentage,
  mainText = '',
  rightButtonText,
  rightButtonPress,
  toShowRightButton = false,
  onPress = () => {},
}) => {
  const width = percentage || 0;
  return (
    <TouchableOpacity onPress={onPress} style={styles.progressBar}>
      <View style={[styles.filler, { width: `${width}%` }]} />
      <Text
        style={[styles.percent, { color: width ? colors.snow : colors.black }]}
      >
        {width + '%'}
      </Text>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
      {toShowRightButton && (
        <TouchableOpacity onPress={rightButtonPress} style={styles.rightButton}>
          <Text style={styles.rightButtonText}>{rightButtonText}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = {
  progressBar: {
    position: 'relative',
    height: 35,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.charcoal,
  },
  filler: {
    fontWeight: 'bold',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    height: '100%',
  },
  percent: {
    textAlign: 'center',
    position: 'absolute',
    left: metrics.baseMargin,
    top: 5,
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: metrics.baseMargin,
    paddingRight: 3,
  },
  rightButtonText: {
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  mainTextContainer: {
    position: 'absolute',
    left: 60,
    height: 30,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: fonts.size.small,
  },
};

export default ProgressBar;

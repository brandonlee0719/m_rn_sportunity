import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

import { metrics, colors, fonts, images } from 'sportunity/src/theme';

const HeaderButton = ({onPress, text}) => (
    <TouchableOpacity style={styles.rightIconContainer} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    rightIconContainer: {

    },
    text: {
        color: colors.white,
    }
})

export default HeaderButton;
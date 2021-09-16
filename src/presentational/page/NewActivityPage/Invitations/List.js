// @flow
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from 'react-native-text';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import { images } from 'sportunity/src/theme';

type ListBlock$Props = {
  title: string,
  header?: boolean,
  children: any
};

type ListBlockItem$Props = {
  style: StyleSheet,
  selected?: boolean,
  children: any
};

export const ListBlockItem = (props) => (
    <View
        style={StyleSheet.flatten([
            styles.row,
            props.selected ? styles.selected : {},
            props.style])
        }>
        {props.children}
    </View>
);


export const ListBlock = (props: ListBlock$Props) => {
    const {title, header=!!title} = props;
    return (
        <View style={styles.mainContainer}>
            { header &&
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
            }
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.steel,
        borderRadius: metrics.buttonRadius,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    headerContainer: {
        flexDirection: 'row',
        //marginHorizontal: 5,
        padding: 5,
        backgroundColor: colors.silver,
        borderBottomWidth: 1,
        borderColor: colors.steel,
    },
    headerText: {
        marginLeft: metrics.baseMargin,
        flex: 1,
        color: colors.charcoal,
        fontSize: fonts.size.medium,
        fontWeight: 'bold'
    },
    row: {
        //marginHorizontal: 5,
        //padding: metrics.baseMargin,
        backgroundColor: colors.snow,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.baseMargin,
        borderBottomWidth: 1,
        borderColor: colors.steel,
    },
    selected: {
        backgroundColor: colors.lightGreen,
    }
});
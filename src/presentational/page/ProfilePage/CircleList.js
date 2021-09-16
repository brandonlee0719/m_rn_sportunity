import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class CircleList extends PureComponent {

  state = {
    isOpen: true
  }

  calculateCircleList = (circles, userId) => {
    let circleList = []

    if (circles && circles.edges && circles.edges.length > 0) {
      circles.edges.forEach(circle => {
        if (circle.node.members.findIndex(member => member.id === userId) >= 0)
          circleList.push(circle)
      })
    }
    circleList.length > 2 && this.setState({ isOpen: false })
    return circleList;
  }

  render(){
    const { isOpen } = this.state;
    const { circles, viewer, userId } = this.props;
    const circleList = this.calculateCircleList(circles, userId)

    return(
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {I18n.t('inACircle')}
          </Text>
          {
            circleList.length > 1 && isOpen &&
              <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                <Image
                  style={styles.headerIcon}
                  source={images.down_arrow}
                />
              </TouchableOpacity>
          }

          {
            circleList.length > 1 && !isOpen &&
              <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                <Image
                  style={styles.headerIcon}
                  source={images.right_arrow_blue}
                />
              </TouchableOpacity>
          }

        </View>

        {
          isOpen && circleList.length > 0 ?
            circleList.map((item, index) => (
              <View
                style={styles.container}
                key={index}
              >
                <View style={styles.itemContainer}>
                  <Image source={images.circle} />
                  <Text style={styles.name} >
                    {item.node.name}
                  </Text>
                </View>
              </View>
            ))
            : <View style={[styles.container, styles.footer]}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemSubitleText}>
                    {I18n.t('noCircle')}
                  </Text>
                </View>
            </View>
        }

        {
          viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
            <TouchableOpacity
              style={styles.addContainer}
              onPress={() => this.props.navigation.navigate('newCircle')}
            >
              <Text style={styles.addText}>
                {I18n.t('addUpdateButton')}
              </Text>
            </TouchableOpacity>
        }

      </View>
    )
  }

}

CircleList.propTypes = {
  circles: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
};

export default createFragmentContainer(CircleList, {
  circles: graphql`
    fragment CircleList_circles on CircleConnection {
      edges {
        node {
          id,
          name,
          owner {
            id,
            firstName
          },
          mode
          members {
            id
          }
        }
      }
    }
  `,
})

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 5,
    padding: 5,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  headerIcon: {
    tintColor: colors.lightGreen,
    alignSelf: 'flex-end',
    marginRight: metrics.baseMargin,
  },
  container: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: metrics.baseMargin,
  },
  name: {
    marginLeft: metrics.doubleBaseMargin,
    flex: 1,
    color: colors.darkGrey,
    fontSize: fonts.size.medium,
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  addText: {
    marginLeft: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  itemSubitleText: {
    color: colors.darkGrey,
    fontSize: fonts.size.tiny,
  },
});

I18n.fallbacks = true
I18n.translations = translations;

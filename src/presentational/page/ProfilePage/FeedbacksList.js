import PropTypes from 'prop-types';
import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Rating from 'react-native-easy-rating';
import moment from 'moment';
import { images, colors, metrics, fonts } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class FeedbacksList extends PureComponent {

  state = {
    isOpen: false,
  }

  render(){
    const { isOpen } = this.state;
    const { viewer, feedbacks } = this.props;
    return(
      <View>
        {feedbacks.feedbacksList.edges.length > 0 &&
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {I18n.t('feedbacks')}:  {feedbacks.count}
            </Text>
            { feedbacks.averageRating > 0 &&
              <Text style={styles.averageText}>
                {I18n.t('average')}: {Math.round(feedbacks.averageRating*100)/100}
              </Text>
            }
            { feedbacks.averageRating > 0 &&
              <Rating
                iconWidth={6}
                iconHeight={6}
                editable={false}
                rating={feedbacks.averageRating}
              />
            }
            {
              feedbacks.feedbacksList.edges.length > 1 && isOpen &&
                <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                  <Image
                    style={styles.headerIcon}
                    source={images.down_arrow}
                  />
                </TouchableOpacity>
            }
            {
              feedbacks.feedbacksList.edges.length > 1 && !isOpen &&
                <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                  <Image
                    style={styles.headerIcon}
                    source={images.right_arrow_blue}
                  />
                </TouchableOpacity>
            }
          </View>
        }

        {
          feedbacks.feedbacksList.edges.length > 0 ?
            feedbacks.feedbacksList.edges.map((item, index) => (
              <View
                style={styles.container}
                key={index}
              >
                <View style={styles.itemContainer}>

                  <View style={styles.itemInfoContainer}>
                    <View style={styles.itemTitleContainer}>
                      <Text style={styles.itemTitleText}>
                        {item.node.author.pseudo}
                      </Text>
                      <Rating
                        iconWidth={6}
                        iconHeight={6}
                        editable={false}
                        rating={item.node.rating}
                      />
                    </View>
                    <Text style={styles.itemSubitleText}>
                      {moment(item.node.createdAt).format('MMM DD.YY. LT')}
                    </Text>
                    <Text style={styles.itemParagraphText}>
                      {item.node.text}
                    </Text>

                  </View>
                </View>
              </View>
            ))
            : null
        }

        {
          /*
            <View style={styles.footer} />
          */
        }

      </View>
    )
  }

}

FeedbacksList.propTypes = {
  feedbacks: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  averageText: {
    marginLeft: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
    marginRight: 5,
  },
  headerIcon: {
    tintColor: colors.lightGreen,
    alignSelf: 'flex-end',
    marginLeft: metrics.marginHorizontal,
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
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
  },
  photoContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.lightGreen,
    backgroundColor: colors.snow,
    marginRight: metrics.doubleBaseMargin,
  },
  itemInfoContainer: {
    flex: 1,
  },
  itemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemTitleText: {
    fontSize: fonts.size.small,
    color: colors.skyBlue,
    fontWeight: 'bold',
  },
  itemStarsIcon: {
    height: fonts.size.medium,
  },
  itemSubitleText: {
    color: colors.darkGrey,
    fontSize: fonts.size.tiny,
  },
  itemParagraphText: {
    fontSize: fonts.size.tiny,
    flexWrap: 'wrap',
  },
  footer: {
    marginHorizontal: 5,
    marginBottom: 5,
    padding: fonts.size.small,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
});

export default createFragmentContainer(FeedbacksList, {
  feedbacks: graphql`
    fragment FeedbacksList_feedbacks on Feedbacks {
      count,
      averageRating,
      feedbacksList(first: 10){
        edges {
          node {
            id,
            text,
            rating,
            createdAt,
            author{
              id,
              pseudo,
              avatar
            }
          }
        }
      }
    }
  `,
})

I18n.fallbacks = true
I18n.translations = translations;

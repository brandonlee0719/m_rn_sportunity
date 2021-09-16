/**
 * Created by BaeBae on 8/11/16.
 */
import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const borderWidth = 2;
const markerWidth = metrics.screenWidth * 0.3;
const markerHeight = markerWidth / 2.5;
const backgroundColor = colors.snow;
const borderColor = colors.blue;

const style_ = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth,
    width: markerWidth,
    height: markerHeight,
    borderRadius: markerHeight,
    alignSelf: 'stretch',
    backgroundColor,
    borderColor,
  },
  iconContainer: {
    marginLeft: 2,
    width: markerHeight * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerIcon: {
    width: markerHeight * 0.8,
    height: markerHeight * 0.42,
    tintColor: colors.blue,
  },
  triangle_holder:
    { marginLeft: markerHeight / 2.5,
     marginTop: -borderWidth,
    },
  triangle_surface:
    { position: 'absolute',
     top: 0,
     left: borderWidth * 1.5,
    },


});


export const triangle = { upper:
                            { width: (markerWidth / 4) - borderWidth,
                             height: (markerWidth / 8) - (borderWidth / 2),
                             color: backgroundColor,
                             direction: 'down',
                            },
                         below:
                            { width: (markerWidth / 4) + (borderWidth * 2),
                             height: (markerWidth / 8) + borderWidth,
                             color: borderColor,
                             direction: 'down',
                            },
                        };

export const styles = { ...style_,
                       text_date:
                          [fonts.style.small,
                           { textAlign: 'center',
                             color: colors.blue,
                            },
                          ],
                      }; // TODO, we do it this way cause StyleSheet.create do not allow
                        // to combine seeveral already defiined styles. (do not accept
                        // arrys)

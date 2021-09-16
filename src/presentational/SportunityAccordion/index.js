import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import Text from 'react-native-text';
import Collapsible from 'react-native-collapsible';
import Toast from 'react-native-simple-toast';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import { metrics, colors, fonts, images } from '../../theme';

const styles =  StyleSheet.create({
  container: {
    marginVertical: metrics.baseMargin,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.smallMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    paddingTop: metrics.smallMargin,
    paddingBottom: metrics.smallMargin,

  },
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.darkBlue,
    fontSize: fonts.size.medium,
  },
  numberText: {
    marginLeft: metrics.baseMargin,
    color: colors.bloodOrange,
    fontSize: fonts.size.medium,
    marginRight: metrics.smallMargin,
    alignSelf: 'flex-end',
  },
  headerIcon: {
    alignSelf: 'flex-end',
    marginRight: metrics.baseMargin,
    tintColor: colors.blue,
    height: fonts.size.medium,
  },

});

/**
 * SportunityAccordion Component
 */
class SportunityAccordion extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    underlayColor: PropTypes.string,
    renderHeader: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.node,
    length: PropTypes.number,
    title: PropTypes.string,
  }

  static defaultProps = {
    underlayColor: 'rgba(0, 0, 0, 0)',
    collapsed: true,
    length: 0,
  }

  /**
   * [constructor Component constructor, sets init state]
   */
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed,
    };
  }

  /**
   * [_toggleCollapsed Toggle collapsed state]
   */
  _toggleCollapsed() {
    if (this.props.canOpen) {
      this.setState({
        collapsed: !this.state.collapsed,
      });

      if (this.props.onChange) {
        this.props.onChange();
      }
    }
    else if (this.props.messageIfCantOpen)
      Toast.show(this.props.messageIfCantOpen)
  }

  /**
   * [render Renders the Component]
   */
  render() {
    const { title, length, children, renderHeader, underlayColor, ...collapsibleProps } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this._toggleCollapsed()}
          underlayColor={underlayColor}
        >
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>
                {title}
              </Text>
              { length !== null &&
                <Text style={styles.numberText}>
                  {length}
                </Text>
              }
              <Image
                style={styles.headerIcon}
                source={this.state.collapsed ? images.expand_arrow : images.right_arrow_blue}
              />
            </View>
          </View>
        </TouchableHighlight>
        {
          this.state.collapsed ?
          <View>
            {children}
          </View>
          :
          null
        }

      </View>
    );
  }
}

export default SportunityAccordion;

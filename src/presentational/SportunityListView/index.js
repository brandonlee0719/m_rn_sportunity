import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import styles from './style';

/**
 * [cloneWithData description]
 */
function cloneWithData(dataSource, data) {
  if (!data) {
    return dataSource.cloneWithRows([]);
  }
  if (Array.isArray(data)) {
    return dataSource.cloneWithRows(data);
  }
  return dataSource.cloneWithRowsAndSections(data);
}


/**
 * SportunityListView
 */
class SportunityListView extends Component {
  static propTypes = {
    data: PropTypes.array,
    renderEmptyList: PropTypes.func,
    renderFooter: PropTypes.func,
    contentInset: PropTypes.object,
    minContentHeight: PropTypes.number,
  }

  static defaultProps = {
    data: [],
    contentInset: { top: 0, bottom: 0 },
    renderSeparator: (sectionID, rowID) => <View style={styles.separator} key={rowID} />,
  }

  /**
   * [constructor description]
   */
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      contentHeight: 0,
      dataSource: cloneWithData(dataSource, props.data),
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }

  /**
   * [componentWillReceiveProps description]
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: cloneWithData(this.state.dataSource, nextProps.data),
      });
    }
  }

  /**
   * [onContentSizeChange description]
   */
  onContentSizeChange(contentWidth, contentHeight) {
    if (contentHeight !== this.state.contentHeight) {
      this.setState({ contentHeight });
    }
  }

  /**
   * [getScrollResponder description]
   */
  getScrollResponder() {
    return this.listview.getScrollResponder();
  }

  /**
   * [scrollTo description]
   */
  scrollTo(...args) {
    this.listview.scrollTo(...args);
  }

  /**
   * [renderFooter description]
   */
  renderFooter() {
    if (this.state.dataSource.getRowCount() === 0) {
      return this.props.renderEmptyList && this.props.renderEmptyList();
    }

    return this.props.renderFooter && this.props.renderFooter();
  }

/**
 * [render description]
 */
  render() {
    return (
      <ListView
        ref={(ref) => { this.listview = ref; }}
        initialListSize={10}
        {...this.props}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter}
        onContentSizeChange={this.onContentSizeChange}
      />
    );
  }
}


export default SportunityListView;

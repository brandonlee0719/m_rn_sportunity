import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay/classic';
import { View, TouchableOpacity, Image, Text, Platform, ActivityIndicator } from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import I18n from 'react-native-i18n';

import SportunityListView from '../SportunityPage/SportunityListView';
import { metrics, colors } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';

import styles from './style';

export class SportunityPageView extends Component{

  constructor() {
    super();
    this.state = {
      activeStatus: "Past",
      isLoading: false
    }
  }

  componentDidMount() {
    // TODO Actions.refresh({ title: I18n.t('drawerHistory') })
    this.props.relay.forceFetch({}, () => {});
  }

  handleScrollLoad = () => {
    this.props.relay.forceFetch({}, () => {});
  }

  loadMore = () => {
    this.props.relay.setVariables({
     count: this.props.relay.variables.count + 10,
    });
  }

  getMenuOptions = () => {
    let menuOptions = [] ;
    if (this.state.activeStatus !== 'Past') {
      menuOptions.push({
        value: 0,
        text: I18n.t('historyPast')
      })
    }
    if (this.state.activeStatus !== 'Declined') {
      menuOptions.push({
        value: 1,
        text: I18n.t('historyDeclined')
      })
    }
    if (this.state.activeStatus !== 'Cancelled') {
     menuOptions.push({
        value: 2,
        text: I18n.t('historyCancelled')
      })
    }
    
    return menuOptions; 
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.isLoading && !nextProps.relay.pendingVariables)
      this.setState({isLoading: false})
  }

  renderTopMenu = () => {
    return (
      <View style={ styles.hamburgerIcon }>
        <Menu onSelect={(value) => {
          if (value === 0) {        
            this.props.relay.setVariables({filter: {status: 'Past'}});
            this.setState({activeStatus: 'Past', isLoading: true});
          }
          else if (value === 1) {
            this.props.relay.setVariables({filter: {status: 'Declined'}});
            this.setState({activeStatus: 'Declined', isLoading: true});
          }
          else if (value === 2) {
            this.props.relay.setVariables({filter: {status: 'Cancelled'}});
            this.setState({activeStatus: 'Cancelled', isLoading: true});
          }             
        }}>
          <MenuTrigger>
            <Text style={styles.navOptionsButton}>   &#8942;   </Text>
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{marginTop:50}}>
            {this.getMenuOptions().map((option, index) => (
              <MenuOption key={index} value={option.value}>
                <Text>{option.text}</Text>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </View>
    );
  }

  close = () => {
    // TODO Actions.pop()
  }

  render(){
    const { viewer, viewer:{ sportunities } } = this.props;
    return (
      <MenuContext style={styles.modalContainer}>
        <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
          <TouchableOpacity
            onPress={this.close}
            style={styles.closeIcon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {I18n.t('history')}
          </Text>
            {this.renderTopMenu()}
        </View>
        <View style={{ flex: 1 }}>
          {this.state.isLoading && 
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                  animating={this.state.isLoading}
                  size="large"
                  color={colors.blue}
              />
            </View>
          }
          
          {!this.state.isLoading && 
            <SportunityListView
              sportunities={sportunities}
              selectedKind="Past"
              handleScrollLoad={this.handleScrollLoad}
              loadMore={this.loadMore}
              count={this.props.relay.variables.count}
              viewer={viewer}
            />
          }
        </View>
      </MenuContext>
      );
  }
}

SportunityPageView.propTypes = {
  viewer: PropTypes.object.isRequired,
};

export default  Relay.createContainer(SportunityPageView, {
  initialVariables: {
    count: 10,
    filter: {status: 'Past'}
  },
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      ${SportunityListView.getFragment('viewer')}
      sportunities (first: $count, filter: $filter) {
        ${SportunityListView.getFragment('sportunities')}
      }        
      me {
        id,
      }
    }`,
  },
});

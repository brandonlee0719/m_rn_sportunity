import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, ActivityIndicator } from 'react-native';
import Toast from 'react-native-simple-toast';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import ModalPicker from 'react-native-modal-selector';

import translations from 'sportunity/src/translations.js';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import NewCircleMutation from './NewCircleMutation';
import Button from '../../Button/roundedButton';
import Input from '../../Input';
import AdvancedSettingsModal from './NewCircleAdvancedSettingsModal';
import styles from './styles';
import { colors } from 'sportunity/src/theme';

import * as globals from '../../../lib/globalsjs/globals';

class NewCircleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isCirclePublic: false,
      isCircleAccessibleWithLink: true, 
      isCircleShared: true,
      address: null, 
      sport: null, 
      circleType: 0,
      isLoading: false
    }
  }

  _updatePublicSwitch = (e) => {
    this.setState({
      isCirclePublic: e,
      isCircleAccessibleWithLink: e ? true : this.state.isCircleAccessibleWithLink
    })
  }
  _updateAccessibleWithLinkSwitch = e => {
    this.setState({
      isCircleAccessibleWithLink: e
    })
  }
  _updateSharedSwitch = e => {
    this.setState({
      isCircleShared: e
    })
  }
  _updateType = e => {
    this.setState({
      circleType: e.key
    })
  }
  
  _updateAddress = e => {
    this.setState({
      address: e
    })
  }

  _updateSport = e => {
    this.setState({
      sport: e
    })
  }

  new() {

    !this.state.name && Toast.show(I18n.t('newCircleMissingName'));

    const viewer = this.props.viewer
    if(this.state.name != ''){
      this.setState({isLoading: true});

      const circleTypes = ['ADULTS', 'CHILDREN', 'TEAMS', 'CLUBS', 'COMPANIES'];
      
      NewCircleMutation.commit({
        circle: {
          name: this.state.name,
          mode: this.state.isCirclePublic ? 'PUBLIC' : 'PRIVATE',
          type: circleTypes[this.state.circleType],
          isCircleUsableByMembers: this.state.isCircleShared,
          isCircleAccessibleFromUrl: this.state.isCircleAccessibleWithLink,
          sport: this.state.sport 
          ? {sport: this.state.sport.sportID, levels: this.state.sport.level}
          : null,
          address: this.state.address,
        }},
        (response) => {
          Toast.show(I18n.t('newCircleSuccess'));
          this.setState({isLoading: false})
          setTimeout(() => {
            if (typeof this.props.openNewCircle !== 'undefined')
              this.props.openNewCircle();

            globals.object('refetchCircles').call('refetchCircles')
            this.props.navigation.goBack()
          }, 100); 
          console.log("response",response);
        },
        error => {
          console.log(error.getError()),
          Toast.show(I18n.t('newCircleFailed'));
          this.setState({isLoading: false})
        },
      )
    }
  }

  render() {
    const {viewer} = this.props; 

    const memberTypeList = viewer.me && viewer.me.profileType === 'PERSON'
    ?   [
            {key: 0, label: I18n.t('circles_member_type_'+0)},
            {key: 1, label: I18n.t('circles_member_type_'+1)},
        ]
    :   [
        {key: 0, label: I18n.t('circles_member_type_'+0)},
        {key: 1, label: I18n.t('circles_member_type_'+1)},
        {key: 2, label: I18n.t('circles_member_type_'+2)},
        {key: 3, label: I18n.t('circles_member_type_'+3)},
        {key: 4, label: I18n.t('circles_member_type_'+4)}
    ]

    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <AdvancedSettingsModal
            viewer={viewer}
            isCirclePublic={this.state.isCirclePublic}
            isCircleAccessibleWithLink={this.state.isCircleAccessibleWithLink}
            isCircleShared={this.state.isCircleShared}
            circleType={this.state.circleType}
            address={this.state.address}
            sport={this.state.sport}
            updatePublicSwitch={this._updatePublicSwitch}
            updateAccessibleWithLinkSwitch={this._updateAccessibleWithLinkSwitch}
            updateSharedSwitch={this._updateSharedSwitch}
            updateType={this._updateType}
            updateAddress={this._updateAddress}
            updateSport={this._updateSport}
            navigation={this.props.navigation}
          />
        
          <Input
            updateText={(name) => this.setState({ name })}
            placeholder={I18n.t('newCircleName')}
            maxLength={30}
            returnKeyType={'done'}
            onSubmitEditing={() => this.new()}
          />
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>
                {I18n.t('circle_memberType')}
            </Text>
            <ModalPicker
                data={memberTypeList}
                initValue={memberTypeList.find(item => item.key === this.state.circleType).label}
                onChange={this._updateType}
                cancelText={I18n.t('cancel')}
            />
          </View>
        </View>

        {this.state.isLoading
        ? <View style={{marginTop: 15}}>
            <ActivityIndicator
              color={colors.blue}
              size="large"
              animating={true}
            />
          </View>
        : <View style={{flex: 1}}>
            <Button onPress={() => this.new()}>
              {I18n.t('newCircle')}
            </Button>
          </View>
        }
      </View>
    )
  }
}

NewCircleView.propTypes = {
  viewer: PropTypes.object.isRequired,
  relay: PropTypes.object.isRequired,
};


/**
*  RELAY CREATE CONTAINER
*/
const NewCircleViewTemp = createFragmentContainer(withNavigation(NewCircleView), {
  viewer: graphql`
    fragment NewCircleView_viewer on Viewer {
      id
      me {
        id
        profileType
      }
      ...NewCircleAdvancedSettingsModal_viewer
    }
  `,
});


export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('newCircle')
    }
  }
  render() {
    let openNewCircle = this.props.navigation.getParam('openNewCircle', null)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query NewCircleViewQuery {
            viewer {
              ...NewCircleView_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <NewCircleViewTemp viewer={props.viewer} openNewCircle={openNewCircle} query={props} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;
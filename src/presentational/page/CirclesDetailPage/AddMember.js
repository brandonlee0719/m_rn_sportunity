import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { View, TouchableOpacity, Image, Modal } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';


import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import AddUserModal from 'sportunity/src/presentational/AddUser';
import SearchModule from '../SearchModule';
import Input, {styles as inputStyles} from '../../Input';
import {ListBlock, ListBlockItem} from '../../ListBlock';
import Button from '../../Button/roundedButton';
import styles from './style';

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  addMember = (user) =>  {
    !user && Toast.show(I18n.t('circlePseudoEmailEnter'))
    if(user){
      this.props.addMember( user );
      this.setState({ showModal:false })
    }
  };

  addMembers = (users) => {
    (!users || users.length === 0) && Toast.show(I18n.t('circlePseudoEmailEnter'))
    if(users){
      this.props.addMembers( users.map(user => user.id) );
      setTimeout(() => this.setState({ showTeamsCirclesModal:false, showModal:false }), 150)
    }
  }

  render() {
  	const { members, viewer, user, circle } = this.props;

  	return (
      <View  style={styles.margin}
        ref={node => { this._containerNode = node }}>
          {/* <AddUserModal
            viewer={viewer}
            self={this.props.user}
            show={this.state.showModal}
            onClose={() => this.setState({ showModal:false })}
            multi={true}
            title={user.profileType === 'PERSON' ? I18n.t('circleAddFriends') : I18n.t('circleAddMembers')}
            userType={circle.type === 'ADULTS' || circle.type === 'CHILDREN' ? 'PERSON' : circle.type === 'TEAMS' || circle.type === 'CLUBS' ? 'ORGANIZATION' : 'BUSINESS'}
            circleTypes={[circle.type]}
            queryUserCircles={true}
            queryCirclesFromClub={true}
            queryCirclesUserIsIn={true}
            onValidate={this.addMembers}
        /> */}
        {this.state.showModal && 
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => this.setState({ showModal: false})}
          >
            <SearchModule
              viewer={viewer}
              onClose={() => this.setState({ showModal: false})}
              openOnTab={"People"}
              hideTabs={["Activities"]}
              showMembersOnSelectCircle={true}
              userType={circle.type === 'ADULTS' || circle.type === 'CHILDREN' ? 'PERSON' : circle.type === 'TEAMS' || circle.type === 'CLUBS' ? 'ORGANIZATION' : 'BUSINESS'}
              types={circle.type === 'ADULTS' || circle.type === 'CHILDREN' ? ['ADULTS'] : circle.type === 'TEAMS' || circle.type === 'CLUBS' ? ['TEAMS', 'CLUBS'] : ['BUSINESS']}
              circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES']}
              queryOnOpen={true}
              selectUser={this.addMember}
            />
          </Modal>
        }
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.setState({ showModal:true })}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.text} allowFontScaling={false}>
                  {user && user.profileType === 'PERSON' ? I18n.t('circleAddFriends') : I18n.t('circleAddMembers')}
                </Text>
              </View>
          </TouchableOpacity>
      </View>
  	)
  }

}

export default createFragmentContainer(Add, {
  user: graphql`
    fragment AddMember_user on User {
      id
      email
      pseudo
      profileType
    }
  `,
  viewer: graphql`
    fragment AddMember_viewer on Viewer {
      id
      ...SearchModule_viewer
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

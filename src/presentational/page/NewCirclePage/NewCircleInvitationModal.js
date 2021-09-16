import PropTypes from 'prop-types';
import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';

import { colors, metrics, fonts } from 'sportunity/src/theme';
import { connect } from 'react-redux';
import { inputStyles } from '../../Input';
import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import { addCircleInPrivateMode, removeCircleInPrivateMode } from '../../../action/newCircleActions';

import InvitedCircle from '../NewActivityPage/Invitations/InvitedCircle';
import SearchModule from '../SearchModule';
import FormListItem from '../../UI/FormListItem';

class NewCircleInvitationModal extends React.Component {
  state = {
    pseudo: '',
    circle: 0, // 0 circle is dropdown's default label
    error: '',
    friendsInvitationModalVisible: false,
    circlesInvitationModalVisible: false,
    inviteeListIsOpen: false, 
    invitedCircleListIsOpen: false,
  };

  onError = (error) => {
    Toast.show(error);
  }

  openCircleInvitationModal = () => {
    if (this.props.isLoggedIn) {
      if ((this.props.circles && this.props.circles.length > 0) || (this.props.circlesFromClub && this.props.circlesFromClub.length > 0) || (this.props.circlesCurrentUserIsIn && this.props.circlesCurrentUserIsIn.length > 0)) {
        this.setState({ circlesInvitationModalVisible: true });
      }
      else 
        Toast.show(I18n.t('pleaseCreateCircle'))
    }
    else 
      Toast.show(I18n.t('sportunityToastLogin'))
  }

  selectCircle = (circle) => {
    const { circlesInPrivateMode, addCircleInPrivateMode, removeCircleInPrivateMode } = this.props;
    let index = circlesInPrivateMode.findIndex(selectedCircle => selectedCircle.id === circle.id);
    if (index >= 0) {
      removeCircleInPrivateMode(circle.id);
    }
    else {
      addCircleInPrivateMode(circle);
    }
  }

  closeCircleList = () => {
    this.setState({ circlesInvitationModalVisible: false});
  }

  render() {
    const { circlesInPrivateMode, invitedCircles, circles, circlesCurrentUserIsIn, circlesFromClub, self, viewer, sportunitySport } = this.props;
    const numCircleInvitations = invitedCircles ? invitedCircles.length : 0 ;

    return (
      <View>

        {((circles && circles.length > 0) || (circlesCurrentUserIsIn && circlesCurrentUserIsIn.length > 0) || (circlesFromClub && circlesFromClub.length > 0)) &&
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.circlesInvitationModalVisible}
            onRequestClose={this.closeCircleList}
          >
            <SearchModule
              inviteToActivity
              viewer={viewer}
              from={"new-sportunity-invitations"}
              selectCircle={this.selectCircle}
              selectedCircles={circlesInPrivateMode}
              onClose={this.closeCircleList}
              openOnTab={"Groups"}
              hideTabs={["Activities", "People"]}
              circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES']}
              // circleTypes={['MY_CIRCLES']}
              queryOnOpen={true}
            />
          </Modal>  
        }

        <ScrollView style={styles.container}>

          <FormListItem
            type="secondary"
            onPress={this.openCircleInvitationModal}
            title={`${I18n.t(!self || (self && self.profileType === 'PERSON') ? 'invitedCirclesTitle' : 'sportunitySummonedGroups')} (${numCircleInvitations})`}
            rightIcon={icons.plus}
          />

          {
            circlesInPrivateMode.length > 0 &&
            circlesInPrivateMode.filter((item, index) => this.state.invitedCircleListIsOpen || index < 2)
              .map((circle, index) => 
                <InvitedCircle
                  key={index}
                  viewer={this.props.viewer}
                  index={index}
                  circlePrice={circle.price}
                  circle={circle}
                  participantByDefault={circle.participantByDefault}
                  onError={this.onError}
                  updateCircleInviteePrice={this.props.updateCircleInviteePrice}
                  updateCircleAutomaticallyParticipant={this.props.updateCircleAutomaticallyParticipant}
                  selectCircle={this.selectCircle}
                  onRemove={this.selectCircle}
                  notShowDetails
                />
            )}

            {circlesInPrivateMode.length > 2 && (
              this.state.invitedCircleListIsOpen 
              ?
              <TouchableOpacity
                  style={styles.seeMoreOrLessButtonContainer}
                  onPress={()=>this.setState({invitedCircleListIsOpen: false})}
                >
                  <Text style={styles.smallText}>
                    {I18n.t('seeLess')}
                  </Text>
                </TouchableOpacity>
              :
              <TouchableOpacity
                  style={styles.seeMoreOrLessButtonContainer}
                  onPress={()=>this.setState({invitedCircleListIsOpen: true})}
                >
                  <Text style={styles.smallText}>
                    {I18n.t('seeMore')}
                  </Text>
                </TouchableOpacity>
            )}

          </ScrollView>       

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin
  },
  seeMoreOrLessButtonContainer: {
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    color: colors.charcoal
  },
});

NewCircleInvitationModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  circles: PropTypes.array.isRequired,
};

const stateToProps = (state) => ({
  circlesInPrivateMode: state.sportunityNewCircle.circlesInPrivateMode,
});

const mapDispatchToProps = {
  addCircleInPrivateMode,
  removeCircleInPrivateMode,
};

const ReduxContainer = connect(
  stateToProps,
  mapDispatchToProps
)(NewCircleInvitationModal);


export default createFragmentContainer(ReduxContainer, {
  viewer: graphql`
    fragment NewCircleInvitationModal_viewer on Viewer {
      ...Invitee_viewer
      ...InvitedCircle_viewer
      ...SearchModule_viewer
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

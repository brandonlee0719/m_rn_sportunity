import React, {Component} from 'react';
import { 
  View,
} from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../../../../Button/roundedButton';
import translations from 'sportunity/src/translations.js';
import AddUserModal from 'sportunity/src/presentational/AddUser';
import { images } from '../../../../../../src/theme';
import {
  graphql,
  createFragmentContainer,
} from 'react-relay';

import styles from './style';

class AddParticipants extends Component {
    constructor() {
        super();
        this.state = {
            displayModal: false,
        }
    }

    _handleDisplayModal = () => {
        this.setState({displayModal: true});
    }

    _handleCloseModal = () => {
        this.setState({displayModal: false});
    }

    addParticipants = (users) => {
        this._handleCloseModal();
        this.props.onAddParticipants(users)
    }

    render() {
        return(
            <View>
                <Button onPress={this._handleDisplayModal}>
                    {I18n.t('sportunityAddGoingParticipants')}
                </Button>
                {this.state.displayModal && 
                    <AddUserModal
                        viewer={this.props.viewer}
                        self={this.props.user}
                        show={this.state.displayModal}
                        onClose={this._handleCloseModal}
                        multi={true}
                        title={I18n.t('sportunityAddGoingParticipants')}
                        userType={'PERSON'}
                        circleTypes={['ADULTS', 'CHILDREN']}
                        queryUserCircles={true}
                        queryCirclesFromClub={true}
                        queryCirclesUserIsIn={true}
                        onValidate={this.addParticipants}
                    />
                }
            </View>
        )
    }
};

export default createFragmentContainer(AddParticipants, {
    viewer: graphql`
        fragment AddParticipants_viewer on Viewer {
            id
            ...AddUser_viewer
        }
    `,
    user: graphql`
        fragment AddParticipants_user on User {
            id
            pseudo
            email
        }
      `,
});
  

I18n.fallbacks = true
I18n.translations = translations;

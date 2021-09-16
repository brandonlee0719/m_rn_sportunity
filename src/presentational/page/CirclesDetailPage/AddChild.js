import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import AddChildModal from './AddChildModal'
import Input, {styles as inputStyles} from '../../Input';
import {ListBlock, ListBlockItem} from '../../ListBlock';
import Button from '../../Button/roundedButton';
import styles from './style';
import FormListItem from '../../UI/FormListItem';

class AddChild extends Component {
    static contextTypes = {
        relay: PropTypes.shape({
          variables: PropTypes.object,
        }),
      }

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isButtonSeeable: false,
        }
    }

    addMember = (user) =>  {
        !user && Toast.show(I18n.t('circlePseudoEmailEnter'))
        if (user) 
            this.props.addMember( user );
    };

    async componentDidMount() {
        if (this.props.isCurrentUserOwnerOrCoowner) {
            this.setState({isButtonSeeable: true})
        }
        else {
            let superToken = ''; 
            try {
                superToken = await AsyncStorage.getItem('superToken');
            }
            catch (err) {
                console.log("No superToken");
            }

            if (superToken !== '' && superToken) {
                this.props.relay.refetch({
                    superToken,
                    querySuperMe: true,
                    requestUsersAutocompletion: false
                },
                null,
                () => {
                    setTimeout(() => {
                        if (this.props.viewer.superMe && !this.props.viewer.superMe.isSubAccount)
                            this.setState({isButtonSeeable: true})
                    }, 250)
                },
                {force: false})
            }
        }
    }

    refreshChildren = () => {
        this.props.relay.refetch(fragmentVariables => this.context.relay.variables);
    }

    render() {
        const { members, viewer, user, isCurrentUserOwnerOrCoowner } = this.props;

        return (
        <View
            ref={node => { this._containerNode = node }}>
                {this.state.showModal &&
                    <AddChildModal
                        show={this.state.showModal}
                        addInvitee={this.addMember}
                        invitees={members}
                        onClose={() => this.setState({ showModal:false })}
                        self={this.props.user}
                        isCurrentUserOwnerOrCoowner={isCurrentUserOwnerOrCoowner}
                        viewer={viewer}
                        superMe={viewer.superMe}
                        refreshChildren={this.refreshChildren} 
                        addChildParent={this.props.addChildParent}/>
                }

            {this.state.isButtonSeeable &&
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.setState({ showModal:true })}
                >
                    <View style={styles.buttonIconContainer}>
                        <Text style={styles.text} allowFontScaling={false}>
                            {I18n.t('inviteChild')}
                        </Text>
                    </View>
                </TouchableOpacity>
            }

        </View>
        )
    }

}

export default createRefetchContainer(AddChild, {
    user: graphql`
        fragment AddChild_user on User {
            id
            email
            pseudo
            subAccounts {
                id
                pseudo
                avatar
            }
        }   
    `,
    viewer: graphql`
        fragment AddChild_viewer on Viewer @argumentDefinitions(
            superToken: {type: "String"},
            querySuperMe: {type: "Boolean!", defaultValue: false},
            pseudo: {type: "String"},
            requestUsersAutocompletion: {type: "Boolean!", defaultValue: false}
        ) {
        ...AddChildModal_viewer
        superMe (superToken: $superToken) @include(if: $querySuperMe) {
            id
            profileType, 
            isSubAccount,
        }
        users (pseudo: $pseudo, first: 10) @include(if: $requestUsersAutocompletion) {
            edges {
                node {
                    id
                    pseudo
                }
            }
        }
        }
    `,
    },
    graphql`
        query AddChildRefetchQuery ($superToken: String, $querySuperMe: Boolean!, $pseudo: String, $requestUsersAutocompletion: Boolean!) {
            viewer {
                ...AddChild_viewer @arguments(superToken: $superToken, pseudo: $pseudo, querySuperMe: $querySuperMe, requestUsersAutocompletion: $requestUsersAutocompletion)
                me {
                    ...AddChild_user
                }
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

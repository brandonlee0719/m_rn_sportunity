// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../Button/roundedButton';
import Input, {inputStyles} from '../../../Input';
import {ListBlock, ListBlockItem} from '../../../ListBlock';
import Invitee from './Invitee';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class FriendsInvitationModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            pseudo: '',
            circle: 0, // 0 circle is dropdown's default label
            error: '',
        }
    }
  

    onInvite = () => {
        if(this.state.pseudo) {
            if(this.state.pseudo.toLowerCase() === this.props.self.pseudo.toLowerCase() || this.state.pseudo.toLowerCase() === this.props.self.email.toLowerCase()) {
                Toast.show(I18n.t('inviteYourselfErr'));
                return ;
            }
                // return ;this.setState({ error: I18n.t('inviteYourselfErr') });
            this.props.addInvitee([this.state.pseudo]);
        }

        if(this.state.circle && this.props.circles[this.state.circle-1])
            this.props.addInvitee(this.props.circles[this.state.circle-1].members);

        this.setState({ pseudo:'', circle: 0, error:'' });

        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            pseudo: null,
            requestUsersAutocompletion: false,
            userType: null
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
        
        setTimeout(() => {
            this.props.onClose();
        }, 250)
    }

    onInviteInList = (user) => {
        this.setState({
            pseudo: user.pseudo
        });
        setTimeout(() => {
            if (this.props.returnId) {
                this.onReturnId(user)
            }
            else if (this.props.returnFullUser) {
                this.onReturnFullUser(user)
            }
            else {
                this.onInvite();
            }
        }, 250)
    }

    onReturnId = (user) => {
        if(user.id === this.props.self.id) {
            Toast.show(I18n.t('inviteYourselfErr'));
            return ;
        }

        this.props.addInvitee([user.id]);
        
        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            pseudo: null,
            requestUsersAutocompletion: false,
            userType: null
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
        
        setTimeout(() => {
            this.props.onClose();
        }, 250)
    }

    onReturnFullUser = (user) => {
        if(user.id === this.props.self.id) {
            Toast.show(I18n.t('inviteYourselfErr'));
            return ;
        }

        this.props.addInvitee(user);
        
        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            pseudo: null,
            requestUsersAutocompletion: false,
            userType: null
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
        
        setTimeout(() => {
            this.props.onClose();
        }, 250)
    }
    
    onWritingPseudo = (pseudo) => {
        this.setState({ pseudo});
        if (pseudo.length > 3) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo,
                requestUsersAutocompletion: true,
                userType: this.props.userType ? this.props.userType : null
            });
    
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
        else {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo: null,
                requestUsersAutocompletion: false,
                userType: null
            });
    
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
    }

    render() {
        const { show, onClose, addInvitee, invitees=[], circles } = this.props;
        const pickerCircles = [{ name: I18n.t('addFromCircle') }, ...circles];
        const numInvitations = invitees ? invitees.length : 0;
        
        return (
        <View>
            <Modal
            animationType={'slide'}
            transparent={false}
            visible={show}
            onRequestClose={onClose}
            circles={circles}>
                <View style={styles.header}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.icon}>
                    <Image source={images.down_arrow}/>
                </TouchableOpacity>

                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                </View>

                <View style={styles.searchBarContainer}>
                    <Image source={images.search} style={styles.searchIcon}/>

                    <TextInput
                        style={styles.input}
                        placeholder={I18n.t('searchMember')}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(text) => this.onWritingPseudo(text)}
                        underlineColorAndroid={colors.snow}
                    />

                </View>
                <View style={styles.listContainer}>
                    { this.props.viewer.users && 
                        this.props.viewer.users.edges.map((el,id) =>
                            <TouchableOpacity key={id} onPress={() => this.onInviteInList(el.node)}>
                                <ListBlockItem>
                                    <Text >
                                        {el.node.pseudo}
                                    </Text>
                                </ListBlockItem>
                            </TouchableOpacity>
                    )}
                </View>

                <Button onPress={this.onInvite}>
                    {I18n.t('validate')}
                </Button>

            </Modal>

        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    padding: 15,
  },
  input: {
    padding: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: 30,
    maxHeight: 30,
    color: colors.skyBlue,
  },
  searchIcon: {
    tintColor: colors.lightGreen,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 67,
    paddingTop: 11,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  listContainer: {
    flex: 1
  },
  picker: StyleSheet.flatten([inputStyles.inputContainer, {
    color: colors.skyBlue
  }]),
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

FriendsInvitationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  addInvitee: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  circles: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default createRefetchContainer(FriendsInvitationModal, {
    viewer: graphql`
        fragment FriendsInvitationModal_viewer on Viewer @argumentDefinitions(
            pseudo: {type: "String"},
            requestUsersAutocompletion: {type: "Boolean!", defaultValue: false},
            userType: {type: "UserProfileType"}
        ){
            users (pseudo: $pseudo, first: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {
                edges {
                    node {
                        id
                        pseudo
                        avatar
                    }
                }
            }
        }
    `},
    graphql`
        query FriendsInvitationModalRefetchQuery ($pseudo: String, $requestUsersAutocompletion: Boolean!, $userType: UserProfileType) {
            viewer {
                ...FriendsInvitationModal_viewer @arguments(pseudo: $pseudo, requestUsersAutocompletion: $requestUsersAutocompletion, userType: $userType)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

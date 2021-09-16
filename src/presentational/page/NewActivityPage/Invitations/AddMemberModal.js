// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker, TextInput, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../Button/roundedButton';
import Input, {inputStyles} from '../../../Input';
import {ListBlock, ListBlockItem} from '../../../ListBlock';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class AddMemberModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            pseudo: '',
            user: null
        }
    }
  

    onInvite = () => {
        if(this.state.pseudo) {
            if(this.state.pseudo.toLowerCase() === this.props.self.pseudo.toLowerCase() || this.state.pseudo.toLowerCase() === this.props.self.email.toLowerCase()) {
                Toast.show(I18n.t('inviteYourselfErr'));
                return ;
            }
                // return ;this.setState({ error: I18n.t('inviteYourselfErr') });
            if (this.state.user)
                this.props.addInvitee(this.state.user)
            else 
                this.props.addInvitee({pseudo: this.state.pseudo});
        }

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
            this.setState({ pseudo:'' });
        }, 250); 
        
        // setTimeout(() => {
        //     this.props.onClose();
        // }, 250)
    }

    onInviteInList = (user) => {
        this.setState({
            user: user, 
            pseudo: user.pseudo
        });
        setTimeout(() => {
            this.onInvite();
        }, 250)
    }
    
    onWritingPseudo = (pseudo) => {
        this.setState({ pseudo });
        if (pseudo.length >= 3) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo,
                requestUsersAutocompletion: true,
                userType: this.props.circle 
                ?   (this.props.circle.type === 'ADULTS' || this.props.circle.type === 'CHILDREN') ? 'PERSON'
                    :   (this.props.circle.type === 'TEAMS' || this.props.circle.type === 'CLUBS') ? 'ORGANIZATION'
                    :   this.props.circle.type === 'COMPANIES' ? 'BUSINESS' 
                        :   null
                :   null
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


    _filterUserList = (users, members) => {
        return users.map(user => {
            if (members.findIndex(member => (member.id === user.node.id || user.node.id === this.props.self.id)) >= 0)
                return false
            return user
        }).filter(i => Boolean(i))
    }

    onClose = () => {
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
        this.props.onClose()
    }

    render() {
        const { show, addInvitee, invitees=[] } = this.props;
        const filteredUserList = this.props.viewer.users ? this._filterUserList(this.props.viewer.users.edges, invitees) : [];

        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={this.onClose}
                >
                <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                    <TouchableOpacity
                        onPress={this.onClose}
                        style={styles.icon}>
                        <Image source={images.down_arrow}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>
                        {I18n.t('inviteFriends')}
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
                        value={this.state.pseudo}
                    />

                </View>
                <View style={styles.listContainer}>
                    { filteredUserList && 
                        filteredUserList.map((el,id) =>
                        <TouchableOpacity key={id} onPress={() => this.onInviteInList(el.node)}>
                            <ListBlockItem>
                                <Text>
                                    {el.node.pseudo}
                                </Text>
                            </ListBlockItem>
                        </TouchableOpacity>
                    )}
                </View>
                
                <Button onPress={this.onInvite}>
                    {I18n.t('invite')}
                </Button>

            </Modal>
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
  headerAndroid: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 0,
  },
  headerIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 64,
    paddingTop: 14,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  listContainer: {
    flex: 1
  },
  picker: StyleSheet.flatten([inputStyles.inputContainer, {
    color: colors.skyBlue
  }]),
  icon: {
    marginLeft: metrics.baseMargin,
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

AddMemberModal.propTypes = {
  show: PropTypes.bool.isRequired,
  addInvitee: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default createRefetchContainer(AddMemberModal, {
    viewer: graphql`
        fragment AddMemberModal_viewer on Viewer @argumentDefinitions(
            pseudo: {type: "String"},
            requestUsersAutocompletion: {type: "Boolean!", defaultValue: false},
            userType: {type: "UserProfileType"}
        ){
            id
            users (pseudo: $pseudo, first: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {
                edges {
                    node {
                        id
                        pseudo
                    }
                }
            }
        }`
    },
    graphql`
        query AddMemberModalRefetchQuery ($pseudo: String, $requestUsersAutocompletion: Boolean!, $userType: UserProfileType) {
            viewer {
                ...AddMemberModal_viewer @arguments(pseudo: $pseudo, requestUsersAutocompletion: $requestUsersAutocompletion, userType: $userType)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

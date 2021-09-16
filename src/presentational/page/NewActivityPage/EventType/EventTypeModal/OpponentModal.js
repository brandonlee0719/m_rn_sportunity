// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../../Button/roundedButton';
import Input, {inputStyles} from '../../../../Input';
import {ListBlock, ListBlockItem} from '../../../../ListBlock';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class OpponentModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            pseudo: '',
            isLoading: false
        }
    }

    componentDidMount() {
        if (this.props.sport && this.props.sport.sport) {
            this.setState({isLoading: true})

            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                requestUsersAutocompletion: true,
                requestUsersByEmail: false,
                sportId: this.props.sport.sport
            });
    
            this.props.relay.refetch(
                refetchVariables,
                null,
                () => this.setState({isLoading: false}),
                {force: false}
            );
        }
    }

    componentWillReceiveProps = nextProps => {
        if (this.props.show && !nextProps.show) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo: null,
                requestUsersAutocompletion: true,
                sportId: this.props.sport.sport,
                email: null,
                requestUsersByEmail: false
            });
    
            this.props.relay.refetch(
                refetchVariables,
                null,
                () => this.setState({isLoading: false}),
                {force: false}
            );
        }
    }

    onSetOpponent = (user) => {
        this.setState({
            pseudo: user.pseudo
        });
        setTimeout(() => {
            this.props.addOpponent(user);
            this.setState({ pseudo:''});
            
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo: null,
                requestUsersAutocompletion: false,
                email: null,
                requestUsersByEmail: false
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
        }, 250)
    }
    
    onWritingPseudo = (pseudo) => {        
        this.setState({ pseudo});

        if (pseudo.length >= 1) {
            this.setState({isLoading: true})
            if (isEmail.test(pseudo)) {
                const refetchVariables = fragmentVariables => ({
                    ...fragmentVariables,
                    email: pseudo,
                    requestUsersByEmail: true, 
                    requestUsersAutocompletion: false,
                });
        
                this.props.relay.refetch(
                    refetchVariables,
                    null,
                    () => this.setState({isLoading: false}),
                    {force: false}
                );
            }
            else {
                const refetchVariables = fragmentVariables => ({
                    ...fragmentVariables,
                    pseudo,
                    requestUsersAutocompletion: true,
                    requestUsersByEmail: false,
                    sportId: this.props.sport.sport
                });
        
                this.props.relay.refetch(
                    refetchVariables,
                    null,
                    () => this.setState({isLoading: false}),
                    {force: false}
                );
            }
        }
        else {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo: null,
                requestUsersAutocompletion: false,
                email: null,
                requestUsersByEmail: false
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
        const { show, onClose, viewer } = this.props;
        const { isLoading, pseudo } = this.state;

        let isEmailWritten = isEmail.test(pseudo);
        let autoCompletionList = isEmailWritten
            ?   viewer.users && viewer.users.edges.length > 0 
                ?   viewer.users.edges.map(edge => edge.node)
                :   []
            :   viewer.opponents && viewer.opponents.edges.length > 0 
                    ?   viewer.opponents.edges.map(edge => edge.node)
                    :   [];
            
        return (
        <View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={onClose}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.icon}>
                        <Image source={images.down_arrow}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>
                        {I18n.t('findOpponent')}
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
                    {pseudo.length > 0
                    ?   isLoading 
                        ?   <View style={styles.spinnerContainer}>
                                <ActivityIndicator
                                    animating={isLoading}
                                    size="large"
                                    color={colors.blue}
                                />
                            </View>
                        :   autoCompletionList.length > 0
                            ?   autoCompletionList.map((el, id) => (
                                    <TouchableOpacity key={id} onPress={() => this.onSetOpponent(el)}>
                                        <ListBlockItem>
                                            <Text >
                                                {isEmailWritten ? I18n.t('opponentFoundEmail') + ': ' + el.pseudo : el.pseudo}
                                            </Text>
                                        </ListBlockItem>
                                    </TouchableOpacity>
                                ))
                            :   <View style={styles.listContainer}>
                                    <Text style={styles.note}>
                                        {isEmailWritten ? I18n.t('opponentNotFoundEmail') : I18n.t('opponentNotFoundPseudo')}
                                    </Text>
                                    <TouchableOpacity onPress={() => this.onSetOpponent({pseudo})}>
                                        <ListBlockItem>
                                            <Text>
                                                {pseudo}
                                            </Text>
                                        </ListBlockItem>
                                    </TouchableOpacity>
                                </View>
                    :   null
                    }
                </View>

                <Button onPress={onClose}>
                    {I18n.t('cancel')}
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
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  note: {
    marginHorizontal: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin,
    fontStyle: 'italic',
    fontSize: 14,
    color: colors.charcoal,
    textAlign: 'justify'
  }
});

OpponentModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default createRefetchContainer(OpponentModal, {
        viewer: graphql`
            fragment OpponentModal_viewer on Viewer @argumentDefinitions(
                pseudo: {type: "String"},
                email: {type: "String"},
                requestUsersAutocompletion: {type: "Boolean!", defaultValue: false},
                requestUsersByEmail: {type: "Boolean!", defaultValue: false},
                sportId: {type: "String"}
            ){
            opponents (sportId: $sportId, pseudo: $pseudo, first: 8) @include(if: $requestUsersAutocompletion) {
                edges {
                    node {
                        id
                        avatar
                        pseudo
                    }
                }
            }
            users (email: $email, first: 10) @include(if: $requestUsersByEmail) {
                edges {
                    node {
                        id
                        avatar
                        pseudo
                    }
                }
            }
            }
        `,
    },
    graphql`
        query OpponentModalRefetchQuery ($pseudo: String, $email: String, $requestUsersAutocompletion: Boolean!, $requestUsersByEmail: Boolean!, $userType: UserProfileType) {
            viewer {
                ...OpponentModal_viewer @arguments(pseudo: $pseudo, email: $email, requestUsersAutocompletion: $requestUsersAutocompletion, requestUsersByEmail: $requestUsersByEmail, userType: $userType)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

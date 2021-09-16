// @flow
import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker, TextInput } from 'react-native';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../../Button/roundedButton';
import Input, {inputStyles} from '../../../../Input';
import {ListBlock, ListBlockItem} from '../../../../ListBlock';
import { Header } from '../../../../Header';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class AddAuthorizedUserModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            pseudo: '',
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.isModalVisible !== nextProps.isModalVisible) {
            this.setState({
                pseudo: '',
            })
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo: null,
                requestUsersAutocompletion: false
            });
              
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
    }
    
    onWritingPseudo = (pseudo) => {
        this.setState({pseudo});
        if (pseudo.length > 3) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                pseudo,
                requestUsersAutocompletion: true
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
                requestUsersAutocompletion: false
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
        return (
            <View>
                <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.props.isModalVisible}
                onRequestClose={this.props.onClose}
                >
                    <Header 
                        onPressFunc={this.props.onClose}
                        imgSrc={images.down_arrow}
                        text={I18n.t('accountAuthorizedUsersAddUser')}
                    />
                    {/* <View style={styles.header}>
                        <TouchableOpacity
                            onPress={this.props.onClose}
                            style={styles.icon}>
                            <Image source={images.down_arrow}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>
                            {I18n.t('accountAuthorizedUsersAddUser')}
                        </Text>
                    </View> */}

                    <View style={styles.searchBarContainer}>
                        <Image source={images.search} style={styles.searchIcon}/>

                        <TextInput
                            style={styles.input}
                            placeholder={I18n.t('accountAuthorizedUsersAddUserSearch')}
                            placeholderTextColor={colors.grey}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(text) => this.onWritingPseudo(text)}
                            underlineColorAndroid={colors.snow}
                        />

                    </View>
                    <View style={styles.listContainer}>
                        { this.props.viewer.users && 
                            this.props.viewer.users.edges.map((el,id) =>
                                <TouchableOpacity key={id} onPress={() => this.props.addUser(el.node)}>
                                    <ListBlockItem>
                                        <Text >
                                            {el.node.pseudo}
                                        </Text>
                                    </ListBlockItem>
                                </TouchableOpacity>
                        )}
                    </View>
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


export default createRefetchContainer(AddAuthorizedUserModal, {
    viewer: graphql`
        fragment AddUserModal_viewer on Viewer 
        @argumentDefinitions (
            pseudo: {type: "String", defaultValue: ""},
            requestUsersAutocompletion: {type: "Boolean!", defaultValue: false}
        ) {
            users (pseudo: $pseudo, last: 10) @include(if: $requestUsersAutocompletion) {
                edges {
                    node {
                        id
                        pseudo
                        avatar
                    }
                }
            }
        }
    `,
    },
    graphql`
      query AddUserModalRefetchQuery($pseudo: String, $requestUsersAutocompletion: Boolean!) {
        viewer {
          ...AddUserModal_viewer @arguments(pseudo: $pseudo, requestUsersAutocompletion: $requestUsersAutocompletion)
        }
      }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker, TextInput, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import CreateProfilePage from 'sportunity/src/presentational/page/CreateProfilePage/CreateProfilePage.js';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import Input, {inputStyles} from '../../Input';
import {ListBlock, ListBlockItem} from '../../ListBlock';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import {
    creatingSubAccount,
} from 'sportunity/src/action/createProfileActions';

class AddChildModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            selectedOption: 0,
            pseudo: '',
            user: null,
            createChild: false,
            parent1Email: '',
            parent2Email: '',
            childName: '',
            error: ''
        }
    }
  

    onInvite = () => {
        if(this.state.pseudo) {
            if(this.state.pseudo.toLowerCase() === this.props.self.pseudo.toLowerCase() || this.state.pseudo.toLowerCase() === this.props.self.email.toLowerCase()) {
                Toast.show(I18n.t('inviteYourselfErr'));
                return ;
            }
            if (this.state.user)
                this.props.addInvitee(this.state.user)
            else 
                this.props.addInvitee({pseudo: this.state.pseudo});
        }

        setTimeout(() => {
            this.setState({ pseudo:'' });
        }, 250); 
    }

    onInviteInList = (user) => {
        this.setState({
            user: user, 
            pseudo: user.pseudo,
            selectedOption: 0
        });
        setTimeout(() => {
            this.onInvite();
            this.onClose();
        }, 250)
    }
    
    _filterUserList = (users, members) => {
        return users.map(user => {
            if (members.findIndex(member => (member.id === user.id || user.id === this.props.self.id)) >= 0)
                return false
            return user
        }).filter(i => Boolean(i))
    }

    onClose = () => {
        this.setState({selectedOption: 0})
        this.props.onClose()
    }

    componentDidMount = () => {
        this.setState({selectedOption: this.props.isCurrentUserOwnerOrCoowner ? 2 : 1})
    }

    createNewChild = () => {
        this.props.creatingSubAccount(this.props.superMe.profileType)
        this.setState({createChild: true, selectedOption: 0})
    }

    closeChildCreationModal = () => {
        this.props.creatingSubAccount(false)
        this.setState({createChild: false, selectedOption: 1})
        this.props.refreshChildren()
    }

    onAddChild = () => {
        this.setState({error: ""})
        const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!this.state.parent1Email || this.state.parent1Email === '' || !this.state.childName || this.state.childName === '') {
            this.setState({error: I18n.t('sportunityCarpoolingEmptyFields')})
            return ;
        }

        if (!isEmail.test(this.state.parent1Email) || (this.state.parent2Email && !isEmail.test(this.state.parent2Email))) {
            this.setState({error: I18n.t('loginEmailValidationError')})
            return ;
        }
        
        this.props.addChildParent(this.state.parent1Email, this.state.parent2Email, this.state.childName);
        this.props.onClose()
    }

    render() {
        const { show, addInvitee, invitees=[], self } = this.props;
        const filteredSubAccounts = self.subAccounts && self.subAccounts.length ? this._filterUserList(self.subAccounts, invitees) : [];

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
                        {I18n.t('inviteChild')}
                    </Text>
                </View>
                
                {this.state.createChild &&
                   <CreateProfilePage 
                        viewer={this.props.viewer}
                        creatingFromCircle={true}
                        closeChildCreationModal={this.closeChildCreationModal}
                    />
                }

                {this.state.selectedOption === 1 && 
                    <View style={styles.content}>
                        <View style={styles.listContainer}>
                            { filteredSubAccounts && filteredSubAccounts.length > 0 &&
                                filteredSubAccounts.map((el,id) =>
                                    <TouchableOpacity key={id} onPress={() => this.onInviteInList(el)}>
                                        <ListBlockItem>
                                            <Text>
                                                {el.pseudo}
                                            </Text>
                                        </ListBlockItem>
                                    </TouchableOpacity>
                            )}
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.createNewChild()}>
                                <View style={styles.subContainer}>
                                    <Text style={styles.text}>
                                        {I18n.t('inviteChild')}
                                    </Text>
                                </View>
                                <Image
                                    style={styles.openIcon}
                                    source={images.right_arrow_blue}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                {this.state.selectedOption === 2 && 
                    <View style={styles.content}>
                        <View style={styles.listContainer}>
                            <Input
                                updateText={(e) => this.setState({parent1Email: e.trim()})}
                                placeholder={I18n.t('inviteChildParent1Email')}
                                noicon={true}
                                value={this.state.parent1Email}
                            />
                            <Input
                                updateText={(e) => this.setState({parent2Email: e.trim()})}
                                placeholder={I18n.t('inviteChildParent2Email')}
                                noicon={true}
                                value={this.state.parent2Email}
                            />
                            <Input
                                updateText={(e) => this.setState({childName: e})}
                                placeholder={I18n.t('inviteChildName')}
                                noicon={true}
                                value={this.state.childName}
                            />
                        </View>
                        {this.state.error !== '' &&
                            <View style={{alignContent:'center' ,alignItems:'center'}}>
                                <Text style={styles.error}>
                                    {this.state.error}
                                </Text>
                            </View>
                        }
                        <Button onPress={this.onAddChild}>
                            {I18n.t('invite')}
                        </Button>
                    </View>
                }

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  content: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'  
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
    // marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  error: {
    color: colors.red,
    // marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  openIcon: {
    marginLeft: metrics.baseMargin,
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
    flex: 1,
    marginTop: 15
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

AddChildModal.propTypes = {
  show: PropTypes.bool.isRequired,
  addInvitee: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
    creatingSubAccount: bindActionCreators(creatingSubAccount, dispatch),
});

const ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(AddChildModal);

export default createFragmentContainer(ReduxContainer, {
  viewer: graphql`
    fragment AddChildModal_viewer on Viewer {
      id
      ...CreateProfilePage_viewer
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

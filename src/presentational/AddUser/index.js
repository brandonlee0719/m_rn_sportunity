// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, Picker, TextInput, Platform, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import Toast from 'react-native-simple-toast';

import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from 'sportunity/src/presentational/Button/roundedButton';
import Input, {inputStyles} from 'sportunity/src/presentational/Input';
import {ListBlock, ListBlockItem} from 'sportunity/src/presentational/ListBlock';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import styles from './style'

class AddUserModal extends React.Component {
    static contextTypes = {
        relay: PropTypes.shape({
          variables: PropTypes.object,
        }),
    }

    constructor(props) {
        super(props)
        this.state={
            isLoading: false,
            pseudo: '',
            user: null,
            displayCircles: true,
            selectedCircle: null,
            displayValidate: false,
            selectedUsers: [],
            circleList: [],
            filteredUserList: []
        }
    }

    componentDidMount = () => {
        if (this.props.queryUserCircles || this.props.queryCirclesFromClub || this.props.queryCirclesUserIsIn) {
            this.setState({isLoading: true})

            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                queryUserCircles: this.props.queryUserCircles,
                queryCirclesFromClub: this.props.queryCirclesFromClub,
                queryCirclesUserIsIn: this.props.queryCirclesUserIsIn,
                requestUsersAutocompletion: false,
                queryCircle: false
            });

            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    setTimeout(() => {
                        const {viewer} = this.props ;

                        let circleList = [];
                        if (this.props.queryUserCircles && viewer.me && viewer.me.circles && viewer.me.circles.edges) 
                            circleList = circleList.concat(viewer.me.circles.edges.map(e => e.node)) ;
                        if (this.props.queryCirclesFromClub && viewer.me && viewer.me.circlesFromClub && viewer.me.circlesFromClub.edges) 
                            circleList = circleList.concat(viewer.me.circlesFromClub.edges.map(e => e.node)) ;
                        if (this.props.queryCirclesUserIsIn && viewer.me && viewer.me.circlesUserIsIn && viewer.me.circlesUserIsIn.edges) 
                            circleList = circleList.concat(viewer.me.circlesUserIsIn.edges.map(e => e.node)) ;

                        circleList = circleList.filter(circle => (!this.props.circleTypes || this.props.circleTypes.length === 0 || (this.props.circleTypes.length > 0 && this.props.circleTypes.findIndex(t => t === circle.type) >= 0)))
                
                        if (circleList && circleList.length > 0)
                            circleList = circleList.sort((a, b) => {
                                if (a.memberCount < b.memberCount)
                                    return 1; 
                                else if (a.memberCount > b.memberCount)
                                    return -1; 
                                else
                                    return 0;
                            })

                        this.setState({circleList, isLoading: false})
                    })
                },
                {force: false}
            );
            
        }
    }

    onClose = () => {
        if (this.state.selectedCircle) {
            this.setState({selectedCircle: null});
        }
        else {

            const refetchVariables = fragmentVariables => ({
                ...this.context.relay.variables,
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
    }
  
    onWritingPseudo = (pseudo) => {
        if (pseudo.length > 0) {
            if (!this.state.isLoading) 
                this.setState({isLoading: true});
                
            this.setState({ pseudo, displayCircles : false });

            let filteredUserList = [];

            if (this.state.circleList.length > 0) {
                this.state.circleList.forEach(circle => {
                    if (circle.members && circle.members.length > 0) {
                        circle.members.forEach(member => {
                            if ((!this.props.userType || (this.props.userType && member.profileType === this.props.userType)) && member.pseudo.toLowerCase().indexOf(pseudo.toLowerCase()) >= 0 && filteredUserList.findIndex(filteredUser => filteredUser.id === member.id) < 0)
                                filteredUserList.push(member);
                        })
                    }
                })
                this.setState({filteredUserList})
            }
            
            if (filteredUserList.length > 0) {
                this.setState({isLoading: false})
            }
            else {
                const refetchVariables = fragmentVariables => ({
                    ...this.context.relay.variables,
                    pseudo,
                    requestUsersAutocompletion: true,
                    userType: this.props.userType ? this.props.userType : null,
                });

                this.props.relay.refetch(
                    refetchVariables,
                    null,
                    () => this.setState({isLoading: false}),
                    {force: false}
                );
            }
        }
        else 
            this.setState({displayCircles : true, isLoading: false, pseudo})
    }

    _handleSelectUser = user => {
        if (this.state.selectedCircle) {
            if (this.props.multi) {
                let optionIndex = this.state.selectedUsers.findIndex(s => s.id === user.id) ;    
                
                let selectedUsers = this.state.selectedUsers;
        
                if (optionIndex >= 0) {
                    selectedUsers.splice(optionIndex, 1)
                    this.setState({
                        selectedUsers,
                        displayValidate: true
                    })
                }
                else {            
                    selectedUsers.push(user)
                    this.setState({
                        selectedUsers,
                        displayValidate: true
                    })
                }
            }
            else {
                this.props.onValidate(user)
            }
        }
        else {
            if (this.props.multi)
                this.props.onValidate([user])
            else
                this.props.onValidate(user)
        }
    }

    _handleSelectCircle = circle => {
        this.setState({selectedCircle: circle});
    }

    render() {
        const { show, viewer, multi, onValidate, self, title } = this.props ;
        const { displayCircles, selectedCircle, selectedUsers, isLoading, circleList, displayValidate, filteredUserList } = this.state ;

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
                        {selectedCircle ? selectedCircle.name : title}
                    </Text>
                </View>

                {!selectedCircle && 
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
                }
                <ScrollView style={styles.listContainer} contentContainerStyle={styles.listContainerContent} >
                    {isLoading 
                    ?   <View style={styles.loaderContainer}>
                            <ActivityIndicator
                                animating={true}
                                size="large"
                                color={colors.blue}
                            />
                        </View>
                    :   displayCircles 
                        ?   selectedCircle
                            ?   selectedCircle && selectedCircle.members && selectedCircle.members.length > 0 &&
                                    selectedCircle.members.map((member,id) => (
                                        <TouchableOpacity key={id} onPress={() => this._handleSelectUser(member)}>
                                            <View style={styles.itemContainer}>
                                                <View style={styles.colContainer}>
                                                    <View style={styles.imageContainer}>
                                                        {member.avatar 
                                                        ? <Image style={styles.bigAvatar} source={{uri: member.avatar}}/>
                                                        : <Image style={styles.bigAvatar} source={images.profile_photo} />
                                                        }
                                                    </View>
                                                    <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                        <Text style={selectedUsers.findIndex(s => s.id === member.id) >= 0 ? styles.boldName : styles.name}>
                                                            {member.pseudo}
                                                        </Text>
                                                    </View>
                                                </View>
                                                {selectedUsers.findIndex(s => s.id === member.id) >= 0 && 
                                                    <Image source={images.check} style={styles.checkboxImage}/>
                                                }                                        
                                            </View>
                                        </TouchableOpacity>
                                        )
                                    )
                            :   circleList && circleList.length > 0 &&
                                    circleList.map((circle, index) => 
                                        <TouchableOpacity key={index} onPress={() => this._handleSelectCircle(circle)}>
                                            <View style={styles.itemContainer}>
                                                <View style={styles.colContainer}>
                                                    <View style={styles.imageContainer}>
                                                        <ImageBackground style={styles.image} source={images.circleLarge}>
                                                            <Text style={styles.members}>{circle.memberCount}</Text>
                                                        </ImageBackground>
                                                    </View>
                                                    <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                        <Text style={styles.name}>
                                                            {circle.name}
                                                        </Text>
                                                        {(circle.owner && (circle.owner.id !== self.id || !self)) ?
                                                            <View style={styles.ownerContainer}>
                                                                {circle.owner && circle.owner.avatar 
                                                                    ? <Image style={styles.avatar} source={{uri: circle.owner.avatar}}/>
                                                                    : <Image style={styles.avatar} source={images.profile_photo} />
                                                                }
                                                                <Text style={styles.ownerName}>
                                                                    {circle.owner.pseudo || ''}
                                                                </Text>
                                                            </View>
                                                        : null}
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                        :   filteredUserList.length > 0
                            ?   filteredUserList.map((filteredUser,id) =>
                                        <TouchableOpacity key={id} onPress={() => this._handleSelectUser(filteredUser)}>
                                            <View style={styles.itemContainer}>
                                                <View style={styles.colContainer}>
                                                    <View style={styles.imageContainer}>
                                                        {filteredUser.avatar 
                                                        ? <Image style={styles.bigAvatar} source={{uri: filteredUser.avatar}}/>
                                                        : <Image style={styles.bigAvatar} source={images.profile_photo} />
                                                        }
                                                    </View>
                                                    <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                        <Text style={styles.name}>
                                                            {filteredUser.pseudo}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                            :   viewer.users && viewer.users.edges && 
                                    viewer.users.edges.map((el,id) =>
                                        <TouchableOpacity key={id} onPress={() => this._handleSelectUser(el.node)}>
                                            <View style={styles.itemContainer}>
                                                <View style={styles.colContainer}>
                                                    <View style={styles.imageContainer}>
                                                        {el.node.avatar 
                                                        ? <Image style={styles.bigAvatar} source={{uri: el.node.avatar}}/>
                                                        : <Image style={styles.bigAvatar} source={images.profile_photo} />
                                                        }
                                                    </View>
                                                    <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                        <Text style={styles.name}>
                                                            {el.node.pseudo}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                    }
                
                    {displayValidate &&
                        <Button onPress={() => onValidate(selectedUsers)}>
                            {I18n.t('validate')}
                        </Button>
                    }
                </ScrollView>
            </Modal>
        )
    }
}


AddUserModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userType: PropTypes.string, 
  circleTypes: PropTypes.array, 
  viewer: PropTypes.object.isRequired, 
  multi: PropTypes.bool.isRequired, 
  onValidate: PropTypes.func.isRequired,
  self: PropTypes.object, 
  title: PropTypes.string.isRequired,
  queryUserCircles: PropTypes.bool.isRequired,
  queryCirclesFromClub: PropTypes.bool.isRequired,
  queryCirclesUserIsIn: PropTypes.bool.isRequired,
};

export default createRefetchContainer(AddUserModal, {
  viewer: graphql`
    fragment AddUser_viewer on Viewer 
    @argumentDefinitions(
        pseudo: {type: "String"},
        requestUsersAutocompletion: {type: "Boolean!", defaultValue: false},
        userType: {type: "UserProfileType"},
        queryCircle: {type: "Boolean!", defaultValue: false}
        queryUserCircles: {type: "Boolean!", defaultValue: false}
        queryCirclesFromClub: {type: "Boolean!", defaultValue: false}
        queryCirclesUserIsIn: {type: "Boolean!", defaultValue: false}
    ){
      users (pseudo: $pseudo, last: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {
        edges {
          node {
              id
              avatar
              pseudo
          }
        }
      }
      me {
          id
          circles (last: 20) @include(if: $queryUserCircles) {
              edges {
                  node {
                      id
                      name
                      memberCount
                      type
                      members {
                          id
                          pseudo
                          avatar
                          profileType
                      }
                  }
              }
          }
          circlesFromClub (last: 200) @include(if: $queryCirclesFromClub) {
              edges {
                  node {
                      id
                      name 
                      memberCount
                      owner {
                          id
                          pseudo
                          avatar
                      }
                      members {
                          id
                          pseudo
                          avatar
                          profileType
                      }
                      type
                  }
              }
          }
          circlesUserIsIn (last: 100) @include (if: $queryCirclesUserIsIn) {
              edges {
                  node {
                      id
                      name 
                      memberCount
                      isCircleUsableByMembers
                      owner {
                          id
                          pseudo
                          avatar
                      }
                      members {
                          id
                          pseudo
                          avatar
                          profileType
                      }
                      type
                      mode
                  }
              }
            }
      }
    }
  `}, graphql`
        query AddUserRefetchQuery 
        ($pseudo: String,
        $requestUsersAutocompletion: Boolean!,
        $userType: UserProfileType,
        $queryCircle: Boolean!,
        $queryUserCircles: Boolean!,
        $queryCirclesFromClub: Boolean!,
        $queryCirclesUserIsIn: Boolean!)
         {
            viewer {
                ...AddUser_viewer @arguments (
                    pseudo: $pseudo, 
                    requestUsersAutocompletion: $requestUsersAutocompletion,
                    userType: $userType,
                    queryCircle: $queryCircle,
                    queryUserCircles: $queryUserCircles,
                    queryCirclesFromClub: $queryCirclesFromClub,
                    queryCirclesUserIsIn: $queryCirclesUserIsIn
                )
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

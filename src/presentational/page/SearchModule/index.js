import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation'
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, TouchableOpacity, Text, View, ActivityIndicator, ScrollView, Modal, Platform, Alert, AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';
import I18n from 'react-native-i18n';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import NavigationService from 'sportunity/src/NavigationService';

import environment from 'sportunity/src/createRelayEnvironment';
import translations from 'sportunity/src/translations.js';

import SportunityTabView from '../../SportunityTabView';
import Header from './SearchModuleHeader';
import HeaderButton from './HeaderButton';
import SearchModuleFilter from './SearchModuleFilter'

import CirclesItem from '../CirclesPage/CirclesItem';
import UserCard from './UserCard'
import SportunityItem from '../SportunityPage/SportunityListView/SportunityItem'

import UnsubscribeFromCircleMutation from '../CirclesPage/mutation/UnsubscribeFromCircle';
import TermsOfUse from '../CirclesDetailPage/TermsOfUse'
import NewCircleMemberMutation from '../CirclesDetailPage/mutation/NewCircleMember'

import addUserStyle from '../../AddUser/style'

import * as globals from '../../../lib/globalsjs/globals';
import { updateStepsCompleted } from '../../../action/profileActions';

const FilterIcon = ({onPress}) => {
    return <TouchableOpacity style={styles.rightIconContainer} onPress={onPress}>
        <Image 
            source={images.filter} 
            style={styles.rightIcon} 
        />
    </TouchableOpacity>
}

class SearchModuleView extends Component {
    static contextTypes = {
        relay: PropTypes.shape({
          variables: PropTypes.object,
        }),
    }

    typingTimer;
    doneTypingInterval = 800;

    constructor(props) {
        super(props)
        this.state = {
            activeTab: "Activities",
            placeholder: '',
            inputContent: '',
            isLoading: false,
            isLoadingMore: false,
            firstSportunities: 5,
            firstCircles: 5,
            firstUsers: 5,
            selectedCircle: null, 
            isLoadingCircle: false,
            displayTerms: false,
            displayTermsOfCircle: null,
            isSubscribingToCircleId: null,
            displayFilterModal: false,
            sportFilter: null,
            locationFilter: null,
            superToken: null
        }
    }

    async componentDidMount() {
        globals.register({ name: 'refetchSearchModule', data: {refetchSearchModule: this.refetchSearchModule}});
        
        let superToken = '';
        try {
            superToken = await AsyncStorage.getItem('superToken');
            this.setState({superToken})
        }
        catch (err) {
            console.log("No superToken");
        }

        const tabs = ["Activities", "Groups", "People"].filter(i => !this.props.hideTabs || this.props.hideTabs.indexOf(i) < 0) ;
        
        const initialPage = 
        this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && !!this.props.navigation.state.params.openOnTab
            ?   this.props.navigation.state.params.openOnTab
            :   !!this.props.openOnTab 
                ?   this.props.openOnTab
                :   this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0
                    ?   this.props.defaultCircleFilters[0].name
                    :   "Activities"

        this.setState({
            placeholder: this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.placeholder,
            activeTab: initialPage
        })
        
        if (this.props.queryOnOpen) {
            setTimeout(() => {
                this.setState({
                    isLoading: true
                })
                const refetchVariables = fragmentVariables => {
                    let variables = {
                        ...fragmentVariables,
                        queryMain: true, 
                        superToken: superToken, 
                        querySportunities: initialPage === "Activities",
                        sportunityFilter: {searchByName: ''},
                        firstSportunities: 5,
                        queryCircles: initialPage === "Groups" || (!!this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0),
                        circlesFilter: (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0)
                            ?   {
                                nameCompletion: '', 
                                code: '', 
                                circleType: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === initialPage).filter.circleTypes, 
                                sport: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === initialPage).filter.sport,
                                types: this.props.types
                            }  
                            :   {
                                nameCompletion: '', 
                                code: '', 
                                circleType: this.props.circleTypes || ['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES'], 
                                types: this.props.types
                            } ,
                        firstCircles: 5,
                        queryUsers: initialPage === "People",
                        queryOpponents: false,
                        text: '',
                        firstUsers: 5
                    }
                    if (this.props.userType)
                        variables.userType = this.props.userType
                    if (this.props.from === 'new-sportunity-invitations' || this.props.from === "invite-from-event")
                        variables.circlesFilter.isCircleUsableByMember = true

                    return variables
                };

                this.props.relay.refetch(
                    refetchVariables,
                    null,
                    () => {
                        this.setState({isLoading: false})
                    }
                )
            }, 100)
        }
    }

    refetchSearchModule = (callback) => {
        this.setState({isLoading: true})
        this.props.relay.refetch(
          this.context.relay.variables,
          null,
          () => {
            this.setState({isLoading: false})
            if (typeof callback !== "undefined")
              callback()
          },
          {force: false}
        );
      }

    onChangeTab = tab => {
        let tabs = ["Activities", "Groups", "People"].filter(i => !this.props.hideTabs || this.props.hideTabs.indexOf(i) < 0) ;
        if (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0) {
            tabs = this.props.defaultCircleFilters.map(defaultFilter => defaultFilter.name)
        }

        this.setState({
            isLoading: true,
            activeTab: tabs[tab.i],
            placeholder: tabs[tab.i] === "Activities"
                ?   I18n.t('searchActivity')
                : tabs[tab.i] === "People"
                    ?   I18n.t('searchPeople')
                    :   I18n.t('searchCircle')
        })

        if (this.state.inputContent !== "") {
            const refetchVariables = fragmentVariables => {
                let variables = {
                    ...fragmentVariables,
                    queryMain: true, 
                    superToken: this.state.superToken,
                    querySportunities: tabs[tab.i] === "Activities",
                    sportunityFilter: {searchByName: this.state.inputContent},
                    firstSportunities: 5,
                    queryCircles: tabs[tab.i] === "Groups" || (!!this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0),
                    circlesFilter: (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0)
                        ?   {
                            nameCompletion: this.state.inputContent, 
                            code: this.state.inputContent, 
                            circleType: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === tabs[tab.i]).filter.circleTypes, 
                            sport: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === tabs[tab.i]).filter.sport,
                            types: this.props.types
                        }
                        :   {
                            nameCompletion: this.state.inputContent, 
                            code: this.state.inputContent, 
                            circleType: this.props.circleTypes || ['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES'], 
                            types: this.props.types
                        },
                    firstCircles: 5,
                    queryUsers: !this.props.inviteAsOpponent && tabs[tab.i] === "People",
                    queryOpponents: !!this.props.inviteAsOpponent && tabs[tab.i] === "People",
                    sportId: this.props.sport ? this.props.sport.sport : null, 
                    text: this.state.inputContent,
                    firstUsers: 5
                } 
                if (this.props.userType) 
                    variables.userType = this.props.userType ;
                if (this.props.from === 'new-sportunity-invitations' || this.props.from === "invite-from-event") 
                    variables.circlesFilter.isCircleUsableByMember = true

                return variables
            };

            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({isLoading: false})
                }
            )
        }
        else if (this.props.queryOnOpen) {
            const refetchVariables = fragmentVariables => {
                let variables = {
                    ...fragmentVariables,
                    queryMain: true, 
                    superToken: this.state.superToken,
                    querySportunities: tabs[tab.i] === "Activities",
                    sportunityFilter: {searchByName: ''},
                    firstSportunities: 5,
                    queryCircles: tabs[tab.i] === "Groups" || (!!this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0),
                    circlesFilter: (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0)
                        ?   {
                            nameCompletion: '', 
                            code: '', 
                            circleType: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === tabs[tab.i]).filter.circleTypes, 
                            sport: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === tabs[tab.i]).filter.sport,
                            types: this.props.types
                        }
                        :   {
                            nameCompletion: '', 
                            code: '',
                            circleType: this.props.circleTypes || ['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES'], 
                            types: this.props.types
                        },
                    firstCircles: 5,
                    queryUsers: !this.props.inviteAsOpponent && tabs[tab.i] === "People",
                    queryOpponents: !!this.props.inviteAsOpponent && tabs[tab.i] === "People",
                    sportId: this.props.sport ? this.props.sport.sport : null, 
                    text: '',
                    firstUsers: 5
                }
                if (this.props.userType) 
                    variables.userType = this.props.userType ;
                if (this.props.from === 'new-sportunity-invitations' || this.props.from === "invite-from-event") 
                    variables.circlesFilter.isCircleUsableByMember = true

                return variables
            };

            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({isLoading: false})
                }
            )
        }
        else {
            this.setState({
                isLoading: false
            })
        }
    }

    handleInputChange = text => {
        this.setState({
            inputContent: text,
            isLoading: true
        });

        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => this.handleRefetchAfterInputChange(text), this.doneTypingInterval);
    }

    handleRefetchAfterInputChange = text => {
        if ((text !== '' && text) || this.props.queryOnOpen) {
            const refetchVariables = fragmentVariables => {
                let variables = {
                    ...fragmentVariables,
                    queryMain: true, 
                    superToken: this.state.superToken,
                    querySportunities: this.state.activeTab === "Activities",
                    sportunityFilter: {searchByName: text},
                    firstSportunities: 5,
                    queryCircles: this.state.activeTab === "Groups" || (!!this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0),
                    circlesFilter: (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0)
                        ?   {
                            nameCompletion: text, 
                            code: text, 
                            circleType: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === this.state.activeTab).filter.circleTypes, 
                            sport: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === this.state.activeTab).filter.sport,
                            types: this.props.types
                        }
                        :   {
                            nameCompletion: text, 
                            code: text, 
                            circleType: this.props.circleTypes || ['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES'], 
                            types: this.props.types
                        },
                    firstCircles: 5,
                    queryUsers: !this.props.inviteAsOpponent && this.state.activeTab === "People",
                    queryOpponents: !!this.props.inviteAsOpponent && this.state.activeTab === "People",
                    sportId: this.props.sport ? this.props.sport.sport : null, 
                    text: text,
                    firstUsers: 5
                }

                if (this.props.userType) 
                    variables.userType = this.props.userType ;
                if (this.props.from === 'new-sportunity-invitations' || this.props.from === "invite-from-event") 
                    variables.circlesFilter.isCircleUsableByMember = true

                return variables
            }

            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({isLoading: false})
                }
            )
        }
        else {
            this.handleClearInput()
        }
    }

    handleClearInput = () => {
        this.setState({
            inputContent: '',
            isLoading: true
        })
        if (this.props.queryOnOpen) {
            const refetchVariables = fragmentVariables => {
                let variables = {
                    ...fragmentVariables,
                    queryMain: true, 
                    superToken: this.state.superToken,
                    querySportunities: this.state.activeTab === "Activities",
                    sportunityFilter: {searchByName: ''},
                    firstSportunities: 5,
                    queryCircles: this.state.activeTab === "Groups" || (!!this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0),
                    circlesFilter: (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0)
                        ?   {
                            nameCompletion: '', 
                            code: '', 
                            circleType: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === this.state.activeTab).filter.circleTypes, 
                            sport: this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === this.state.activeTab).filter.sport,
                            types: this.props.types
                        }
                        :   {
                            nameCompletion: '', 
                            code: '',
                            circleType: this.props.circleTypes || ['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES', 'PUBLIC_CIRCLES'], 
                            types: this.props.types
                        },
                    firstCircles: 5,
                    queryUsers: !this.props.inviteAsOpponent && this.state.activeTab === "People",
                    queryOpponents: !!this.props.inviteAsOpponent && this.state.activeTab === "People",
                    sportId: this.props.sport ? this.props.sport.sport : null, 
                    text: '',
                    firstUsers: 5
                };
                if (this.props.userType) 
                    variables.userType = this.props.userType ;
                if (this.props.from === 'new-sportunity-invitations' || this.props.from === "invite-from-event") 
                    variables.circlesFilter.isCircleUsableByMember = true

                return variables
            }

            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({isLoading: false})
                }
            )
        }
        else {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                queryMain: false, 
                querySportunities: false,
                sportunityFilter: null,
                firstSportunities: 5,
                queryCircles: false,
                circlesFilter: null,
                firstCircles: 5,
                queryUsers: false,
                queryOpponents: false,
                // userType: null,
                sportId: null,
                text: null,
                firstUsers: 5
            });

            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({isLoading: false})
                }
            )
        }
    }

    onLoadMore = () => {
        const pageSize = 10 ; 

        this.setState({
            isLoadingMore: true
        })

        let newValue = {};

        if (this.state.activeTab === "Activities") 
            newValue.firstSportunities = this.state.firstSportunities + pageSize
        else if (this.state.activeTab === "Groups" || (this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0))
            newValue.firstCircles = this.state.firstCircles + pageSize
        else if (this.state.activeTab === "People")
            newValue.firstUsers = this.state.firstUsers + pageSize

        const refetchVariables = fragmentVariables => ({
            ...this.context.relay.variables,
            ...newValue
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            () => {
                this.setState({
                    isLoadingMore: false,
                    ...newValue
                })
            }
        )
    }

    goToCircle = circle => { 
        const { viewer:{me, superMe} } = this.props;

        let isCurrentUserTheOwner = !!me && circle.owner.id === me.id;
        let isCurrentUserCoOwner = !!me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0; 
        let isCurrentUserAMember = !!me && circle.members && circle.members.length > 0 && circle.members.findIndex(member => member.id === me.id) >= 0;
        let isCurrentUserAParent = !!me && circle.memberParents && circle.memberParents.length > 0 && circle.memberParents.findIndex(parent => parent.id === me.id) >= 0;
        let isCurrentUserATeamOwner = !!me && !!superMe && [...superMe.subAccounts.map(sub => sub.id), superMe.id].findIndex(team => circle.owner.id === team) >= 0 ;
    
        if (this.props.showMembersOnSelectCircle) {
            this.setState({selectedCircle: circle, isLoadingCircle: true})
            this.props.relay.refetch(fragmentVariables => ({
                    ...this.context.relay.variables,
                    circleId: circle.id
                }),
                null,
                () => {
                    this.setState({
                        selectedCircle: this.props.viewer.selectedCircle,
                        isLoadingCircle: false
                    })
                }
            )
        }
        else if (this.props.inviteToEvent || this.props.addAsCoOrganizer) {
            this.props.selectCircle(circle)   
        }
        else if (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations") {
            if (!circle.isCircleAccessibleFromUrl && ((!isCurrentUserTheOwner && !isCurrentUserCoOwner && !isCurrentUserAParent && !isCurrentUserAMember) || !me)) {
                Toast.show(I18n.t('circleToastCircleIsPrivate'));
            }
            else {
                this.props.navigation.navigate('circledetail', { circleId: circle.id, hideNavBar:true, onCloseModal: () => this.props.navigation.goBack(null) })
            }
        }
        else {
            if (!isCurrentUserAMember && !isCurrentUserCoOwner && !isCurrentUserTheOwner && !this.props.inviteAsOpponent && !isCurrentUserATeamOwner) {
                Toast.show(I18n.t('circleToastBecomeMemberBefore')) 
            }
            else {
                this.props.selectCircle(circle)
            }
        }
    }

    subscribe = circle => {
        if (circle && circle.termsOfUses && circle.termsOfUses.length > 0) {
            this.setState({
                displayTerms: true,
                displayTermsOfCircle: circle
            })
        }
        else {
            this.subscribeToCircle(circle);
        }
    }

    validateTerms = (isCheckboxChecked) => {
        if (!isCheckboxChecked) {
            Toast.show(I18n.t('circleTermsValidationNeeded'))
            return ;
        }
        else {
            this.subscribeToCircle(this.state.displayTermsOfCircle);
        }
    }
      
    subscribeToCircle = (circle) => {
        this.setState({isSubscribingToCircleId: circle.id})
        let params = {
            circleId: circle.id,
            userId: this.props.viewer.me.id,
        }

        NewCircleMemberMutation.commit(params,
            (response) => {
                globals.object('refetchCircles').call('refetchCircles')
                globals.object('refetchEvents').call('refetchEvents')
                Toast.show(I18n.t('circleSubscribed'));
                this.setState({
                    displayTerms: false,
                    displayTermsOfCircle: null,
                    isSubscribingToCircleId: null
                })
                this.updateTutorialSteps(circle.mode);
            },
            error => {
                console.log(error.getError());
                Toast.show(I18n.t('updateFailed'));
            }
        );
    }

    unSubscribe = (circle) => {
        Alert.alert(
            I18n.t('circleUnsubscribeValidationTitle'),
            I18n.t('circleUnsubscribeValidation')+ ' ' + circle.name + ' ?',
            [
                {text: I18n.t('circlesDeleteValidationOk'), onPress: () => {
                    this.setState({isSubscribingToCircleId: circle.id})
                    let params = {
                        circleId: circle.id,
                        userId: this.props.viewer.me.id
                    }
    
                    UnsubscribeFromCircleMutation.commit(params,
                        (response) => {
                            Toast.show(I18n.t('updateSuccess'));
                            globals.object('refetchEvents').call('refetchEvents')
                            globals.object('refetchCircles').call('refetchCircles')
                            this.setState({isSubscribingToCircleId: null})
                        },
                        error => {
                            console.log(error.getError());
                            Toast.show(I18n.t('updateFailed'));
                        },
                    );
                }},
                {text: I18n.t('circlesDeleteValidationCancel'), onPress: () => {return;}}
            ]
        )    
    }

    updateTutorialSteps = (circleMode) => {
        const { tutorialSteps, updateStepsCompleted } = this.props;
        const newTutorialSteps = cloneDeep(tutorialSteps);
    
        if (circleMode === 'PUBLIC') {
          newTutorialSteps['joinAPublicCircleStep'] = true;
        } else if (circleMode === 'PRIVATE') {
          newTutorialSteps['joinAPrivateCircleStep'] = true;
        }
    
        updateStepsCompleted(newTutorialSteps);
    }

    goToEvent = event => {
        const {navigation} = this.props;
        navigation.navigate('eventdetail', { id: event.id })
    }

    goToUser = user => {
        if (typeof this.props.selectUser === 'function') {
            this.props.selectUser(user)
        }
        else if (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations") {
            if (!this.props.viewer.me) {
                Toast.show(I18n.t('sportunityToastLoginProfile'));
                this.props.navigation.navigate('settings')
            } else if (user.id === this.props.viewer.me.id){
                this.props.navigation.navigate('meProfile');
            } else {
                this.props.navigation.navigate('profile', { userId: user.id });
            }
        }
    }

    selectMember = (member) => {
        this.setState({
            selectedCircle: null
        }, () => this.props.selectUser(member))   
    }

    displayCircleDetails = () => (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={true}
                onRequestClose={() => this.setState({selectedCircle: null})}
            >
                <View style={Platform.OS === 'android' ? addUserStyle.headerAndroid : addUserStyle.headerIOS}>
                    <TouchableOpacity
                        onPress={() => this.setState({selectedCircle: null})}
                        style={addUserStyle.icon}>
                        <Image source={images.down_arrow}/>
                    </TouchableOpacity>

                    <Text style={addUserStyle.title}>
                        {this.state.selectedCircle ? this.state.selectedCircle.name : title}
                    </Text>
                </View>
                {this.state.isLoadingCircle 
                ?   <View style={{marginTop: 15}}>
                        <ActivityIndicator
                            size="small"
                            animating={this.state.isLoadingMore}
                            color={colors.blue}
                        />
                    </View>
                :   <ScrollView style={addUserStyle.listContainer} contentContainerStyle={addUserStyle.listContainerContent} >
                        {this.state.selectedCircle && this.state.selectedCircle.members && this.state.selectedCircle.members.length > 0 &&
                            this.state.selectedCircle.members.map((member,id) => (
                                <TouchableOpacity key={id} onPress={() => this.selectMember(member)}>
                                    <View style={addUserStyle.itemContainer}>
                                        <View style={addUserStyle.colContainer}>
                                            <View style={addUserStyle.imageContainer}>
                                                {member.avatar 
                                                ? <Image style={addUserStyle.bigAvatar} source={{uri: member.avatar}}/>
                                                : <Image style={addUserStyle.bigAvatar} source={images.profile_photo} />
                                                }
                                            </View>
                                            <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text style={addUserStyle.name}>
                                                    {member.pseudo}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                )
                            )
                        }
                    </ScrollView>
                }
            </Modal>
    )

    getEmptyListText = () => {
        const {activeTab} = this.state ;
        return (
            <View style={styles.noResultContainer}>
                <Text style={styles.noResultTitle}>
                    {activeTab === "Activities"
                    ?   I18n.t('searchNoActivityTitle')
                    :   activeTab === "Groups" || activeTab === I18n.t('myCircles') || activeTab === I18n.t('publicCircles')
                        ?   I18n.t('searchNoCircleTitle')
                        :   activeTab === "People"
                            ?   I18n.t('searchNoOneTitle')
                            :   ''
                    }
                </Text>
                <Text style={styles.noResultText}>
                    {activeTab === "Activities"
                    ?   I18n.t('searchNoActivityText')
                    :   activeTab === "Groups" || activeTab === I18n.t('myCircles')
                        ?   I18n.t('searchNoCircleText')
                        :   activeTab === I18n.t('publicCircles')
                            ?   I18n.t('searchNoCircleFoundText')
                            :   activeTab === "People"
                                ?   ''
                                :   ''
                    }
                </Text>
            </View>
        )
    }

    getDefaultText = () => {
        const {activeTab, isLoading} = this.state ;
        if (isLoading)
            return null; 
        return (
            <View style={styles.noResultContainer}>
                <Image source={images.search} style={styles.searchIcon}/>
                <Text style={styles.noResultText}>
                    {I18n.t('searchNoSearch')}
                </Text>
            </View>
        )
    }

    render() {
        const { viewer } = this.props ; 
        let me = null ;
        let superMe = null ;

        if (viewer) {
            me = viewer.me
            superMe = viewer.superMe
        }

        const tabs = ["Activities", "Groups", "People"].filter(i => !this.props.hideTabs || this.props.hideTabs.indexOf(i) < 0) ;
        
        const initialPage = 
            this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && !!this.props.navigation.state.params.openOnTab
            ?   tabs.indexOf(this.props.navigation.state.params.openOnTab)
            :   !!this.props.openOnTab 
                ?   tabs.indexOf(this.props.openOnTab)
                :   0

        return (
            <View style={styles.container}>
                <Header 
                    navigation={this.props.navigation}
                    placeholder={this.state.placeholder}
                    onInputChange={this.handleInputChange}
                    onClearInput={this.handleClearInput}
                    inputContent={this.state.inputContent}
                    onClose={this.props.onClose}
                    /*rightIcon={
                        this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0 && this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === this.state.activeTab) && this.props.defaultCircleFilters.find(defaultCircleFilter => defaultCircleFilter.name === this.state.activeTab).isEditable &&
                            <FilterIcon onPress={() => this.setState({displayFilterModal: true})}/>
                    }*/
                    rightIcon={
                        (this.props.inviteToEvent || this.props.inviteToActivity) && typeof this.props.onNextButton !== 'undefined' &&
                            <HeaderButton 
                                onPress={this.props.onNextButton} 
                                text={(this.props.inviteToEvent || !this.props.selectedCircles) ? I18n.t('ok') : I18n.t('ok') + ' (' + this.props.selectedCircles.length + ')'}
                            />
                    }
                />
                {this.props.defaultCircleFilters && this.props.defaultCircleFilters.length > 0 
                ?   <SportunityTabView 
                        tabBarInactiveTextColor={colors.background} 
                        tabBarUnderlineStyle 
                        style={{width: '100%', backgroundColor: colors.background}}
                        onChangeTab={this.onChangeTab}
                        initialPage={initialPage}
                        page={tabs.indexOf(this.state.activeTab)}
                    >
                        {this.props.defaultCircleFilters.map((defaultFilter, index) => (
                            <View key={index} tabLabel={defaultFilter.name}>
                                {this.state.isLoading &&
                                    <View style={{marginTop: 20}}>
                                        <ActivityIndicator
                                            size="large"
                                            animating={this.state.isLoading}
                                            color={colors.blue}
                                        />
                                    </View>
                                }
                                {this.props.viewer && !this.props.viewer.circles && 
                                    this.getDefaultText()
                                }
                                {this.props.viewer && this.props.viewer.circles && this.props.viewer.circles.count === 0 &&
                                    this.getEmptyListText()
                                }
                                {!this.state.isLoading && 
                                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                        {this.props.viewer && this.props.viewer.circles && this.props.viewer.circles.edges && this.props.viewer.circles.edges.map(edge => edge.node).map((circle, index) => (
                                            <CirclesItem 
                                                key={index}
                                                user={me}
                                                circle={circle}
                                                goToCircles={this.goToCircle}
                                                subscribe={this.subscribe}
                                                onUnsubscribe={this.unSubscribe}
                                                isSubscribing={this.state.isSubscribingToCircleId === circle.id}
                                                userIsOwner={me && circle.owner.id === me.id}
                                                isCurrentUserATeamOwner={!!me && !!superMe && [...superMe.subAccounts.map(sub => sub.id), superMe.id].findIndex(team => circle.owner.id === team) >= 0}
                                                userIsSuperUser={me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0}
                                                userIsMember={me && circle.members.findIndex(member => member.id === me.id) >= 0}
                                                isSelected={!!this.props.selectedCircles && this.props.selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                                                inviteToActivity={!this.props.showMembersOnSelectCircle && (this.props.inviteToActivity || this.props.inviteToEvent)}
                                                hideRightButton={this.props.showMembersOnSelectCircle || this.props.addAsCoOrganizer || this.props.inviteAsOpponent}
                                            />
                                        ))}
                                        {this.state.isLoadingMore && 
                                            <View style={{marginTop: 15}}>
                                                <ActivityIndicator
                                                    size="small"
                                                    animating={this.state.isLoadingMore}
                                                    color={colors.blue}
                                                />
                                            </View>
                                        }
                                        {this.props.viewer && this.props.viewer.circles && this.props.viewer.circles.count > this.state.firstCircles && !this.state.isLoadingMore && !this.state.isLoading &&
                                            <TouchableOpacity style={styles.loadMoreContainer} onPress={this.onLoadMore}>
                                                <Text style={styles.loadMoreText}>{I18n.t('loadMore')}</Text>
                                            </TouchableOpacity>
                                        }
                                    </ScrollView>
                                }
                                {!!this.state.selectedCircle && this.displayCircleDetails()}
                            </View>                                
                        ))}
                    </SportunityTabView>
                            
                :   <SportunityTabView 
                        tabBarInactiveTextColor={colors.background} 
                        tabBarUnderlineStyle 
                        style={{width: '100%', backgroundColor: colors.background}}
                        onChangeTab={this.onChangeTab}
                        initialPage={initialPage}
                        page={tabs.indexOf(this.state.activeTab)}
                    >
                        {(!this.props.hideTabs || this.props.hideTabs.indexOf('Activities') < 0) &&
                            <View tabLabel={
                                this.props.viewer && this.props.viewer.sportunities 
                                ?   I18n.t('sportunitiesTabMySportunities') + " (" + this.props.viewer.sportunities.count + ")"
                                :   I18n.t('sportunitiesTabMySportunities')
                                }>
                                {this.state.isLoading &&
                                    <View style={{marginTop: 20}}>
                                        <ActivityIndicator
                                            size="large"
                                            animating={this.state.isLoading}
                                            color={colors.blue}
                                        />
                                    </View>
                                }
                                {this.props.viewer && !this.props.viewer.sportunities && 
                                    this.getDefaultText()
                                }
                                {this.props.viewer && this.props.viewer.sportunities && this.props.viewer.sportunities.count === 0 &&
                                    this.getEmptyListText()
                                }
                                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                    {this.props.viewer && this.props.viewer.sportunities && this.props.viewer.sportunities.edges && this.props.viewer.sportunities.edges.map(edge => edge.node).map((sportunity, index) => (
                                        <TouchableOpacity key={index} onPress={() => this.goToEvent(sportunity)}>
                                            <SportunityItem 
                                                sportunity={sportunity} 
                                                onPress={this.goToEvent}
                                                viewer={this.props.viewer}
                                                language={this.props.language}
                                                userId={me && me.id || null}
                                                user={me}
                                            />
                                        </TouchableOpacity>
                                    ))}
                                    {this.state.isLoadingMore && 
                                        <View style={{marginTop: 15}}>
                                            <ActivityIndicator
                                                size="small"
                                                animating={this.state.isLoadingMore}
                                                color={colors.blue}
                                            />
                                        </View>
                                    }
                                    {this.props.viewer && this.props.viewer.sportunities && this.props.viewer.sportunities.count > this.state.firstSportunities && !this.state.isLoadingMore && !this.state.isLoading &&
                                        <TouchableOpacity style={styles.loadMoreContainer} onPress={this.onLoadMore}>
                                            <Text style={styles.loadMoreText}>{I18n.t('loadMore')}</Text>
                                        </TouchableOpacity>
                                    }
                                </ScrollView>
                            </View>
                        }
                        {(!this.props.hideTabs || this.props.hideTabs.indexOf('Groups') < 0) &&
                            <View tabLabel={
                                this.props.viewer && this.props.viewer.circles 
                                ?   I18n.t('circleTitleOthers') + " (" + this.props.viewer.circles.count + ")"
                                :   I18n.t('circleTitleOthers')
                                }>
                                {this.state.isLoading &&
                                    <View style={{marginTop: 20}}>
                                        <ActivityIndicator
                                            size="large"
                                            animating={this.state.isLoading}
                                            color={colors.blue}
                                        />
                                    </View>
                                }
                                {this.props.viewer && !this.props.viewer.circles && 
                                    this.getDefaultText()
                                }
                                {this.props.viewer && this.props.viewer.circles && this.props.viewer.circles.count === 0 &&
                                    this.getEmptyListText()
                                }
                                <ScrollView contentContainerStyle={[styles.scrollViewContainer, !this.props.showMembersOnSelectCircle && (this.props.inviteToActivity || this.props.inviteToEvent) && {paddingBottom: 70}]}>
                                    {this.props.viewer && this.props.viewer.circles && this.props.viewer.circles.edges && this.props.viewer.circles.edges.map(edge => edge.node).map((circle, index) => (
                                        <CirclesItem 
                                            key={index}
                                            user={me}
                                            circle={circle}
                                            goToCircles={this.goToCircle}
                                            subscribe={this.subscribe}
                                            onUnsubscribe={this.unSubscribe}
                                            isSubscribing={this.state.isSubscribingToCircleId === circle.id}
                                            userIsOwner={me && circle.owner.id === me.id}
                                            isCurrentUserATeamOwner={!!me && !!superMe && [...superMe.subAccounts.map(sub => sub.id), superMe.id].findIndex(team => circle.owner.id === team) >= 0}
                                            userIsSuperUser={me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0}
                                            userIsMember={me && circle.members.findIndex(member => member.id === me.id) >= 0}
                                            isSelected={!!this.props.selectedCircles && this.props.selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0}
                                            inviteToActivity={!this.props.showMembersOnSelectCircle && (this.props.inviteToActivity || this.props.inviteToEvent)}
                                            hideRightButton={this.props.showMembersOnSelectCircle || this.props.addAsCoOrganizer || this.props.inviteAsOpponent}
                                        />
                                    ))}
                                    {this.state.isLoadingMore && 
                                        <View style={{marginTop: 15}}>
                                            <ActivityIndicator
                                                size="small"
                                                animating={this.state.isLoadingMore}
                                                color={colors.blue}
                                            />
                                        </View>
                                    }
                                    {this.props.viewer && this.props.viewer.circles && this.props.viewer.circles.count > this.state.firstCircles && !this.state.isLoadingMore && !this.state.isLoading &&
                                        <TouchableOpacity style={styles.loadMoreContainer} onPress={this.onLoadMore}>
                                            <Text style={styles.loadMoreText}>{I18n.t('loadMore')}</Text>
                                        </TouchableOpacity>
                                    }
                                </ScrollView>
                                {!!this.state.selectedCircle && this.displayCircleDetails()}
                            </View>
                        }
                        {this.props.viewer && this.props.viewer.me && (!this.props.hideTabs || this.props.hideTabs.indexOf('People') < 0) &&
                            <View tabLabel={
                                this.props.viewer && this.props.viewer.users 
                                ?   I18n.t('people') + " (" + this.props.viewer.users.count + ")"
                                :   I18n.t('people')
                                }>
                                {this.state.isLoading &&
                                    <View style={{marginTop: 20}}>
                                        <ActivityIndicator
                                            size="large"
                                            animating={this.state.isLoading}
                                            color={colors.blue}
                                        />
                                    </View>
                                }
                                {this.props.viewer && !this.props.viewer.users && !this.props.viewer.opponents && 
                                    this.getDefaultText()
                                }
                                {this.props.viewer && ((!this.props.inviteAsOpponent && this.props.viewer.users && this.props.viewer.users.count === 0) ||
                                    (this.props.inviteAsOpponent && this.props.viewer.opponents && this.props.viewer.opponents.count === 0)) &&
                                    this.getEmptyListText()
                                }
                                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                    {this.props.viewer && !this.props.inviteAsOpponent && this.props.viewer.users && this.props.viewer.users.edges && this.props.viewer.users.edges
                                    .map(edge => edge.node).map((user, index) => (
                                        <UserCard 
                                            key={index}
                                            user={user}
                                            goToUser={this.goToUser}
                                        />
                                    ))}

                                    {this.props.viewer && this.props.inviteAsOpponent && this.props.viewer.opponents && this.props.viewer.opponents.edges && this.props.viewer.opponents.edges
                                    .map(edge => edge.node).map((user, index) => (
                                        <UserCard 
                                            key={index}
                                            user={user}
                                            goToUser={this.goToUser}
                                        />
                                    ))}
                                    {this.state.isLoadingMore && 
                                        <View style={{marginTop: 15}}>
                                            <ActivityIndicator
                                                size="small"
                                                animating={this.state.isLoadingMore}
                                                color={colors.blue}
                                            />
                                        </View>
                                    }
                                    {this.props.viewer && ((!this.props.inviteAsOpponent && this.props.viewer.users && this.props.viewer.users.count > this.state.firstUsers) || 
                                        (this.props.inviteAsOpponent && this.props.viewer.opponents && this.props.viewer.opponents.count > this.state.firstUsers) && !this.state.isLoadingMore && !this.state.isLoading) && 
                                        <TouchableOpacity style={styles.loadMoreContainer} onPress={this.onLoadMore}>
                                            <Text style={styles.loadMoreText}>{I18n.t('loadMore')}</Text>
                                        </TouchableOpacity>
                                    }
                                </ScrollView>
                            </View>
                    }
                    </SportunityTabView>
                }
                {this.state.displayFilterModal && 
                    <SearchModuleFilter
                        show={this.state.displayFilterModal}
                        onClose={() => this.setState({displayFilterModal: false})}
                        activeTab={this.state.activeTab}
                        {...this.props}
                    />
                }
                {this.state.displayTerms && 
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={true}
                        onRequestClose={() => this.setState({displayTerms: false})}
                    >
                        <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                            <TouchableOpacity onPress={() => this.setState({displayTerms: false})} style={styles.closeIcon}>
                                <Image source={images.down_arrow}/>
                            </TouchableOpacity>
                            <Text style={styles.title}>
                                {I18n.t('circleTerms')}
                            </Text>
                        </View>
                        
                        <View style={styles.modalContainer}>
                            <TermsOfUse
                                title={I18n.t('circleTerms')}
                                viewer={viewer}
                                circle={this.state.displayTermsOfCircle}
                                language={this.props.language}
                                validateTerms={this.validateTerms}
                            />
                        </View>
                    </Modal>
                }
            </View> 
        )
    }
}

const stateToProps = (state) => ({
    language: state.sportunityLocale.language,
    tutorialSteps: state.sportunityProfile.tutorialSteps,
})
  
const dispatchToProps = (dispatch) => ({
    updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});
  
const SearchModuleT = createRefetchContainer(
    connect(stateToProps, dispatchToProps)(withNavigation(SearchModuleView)),
    {
        viewer: graphql`
            fragment SearchModule_viewer on Viewer @argumentDefinitions (
                queryMain: {type: "Boolean!", defaultValue: false},
                queryUsers: {type: "Boolean!", defaultValue: false},
                text: {type: "String"},
                firstUsers: {type: "Int", defaultValue: 5},
                userType: {type: "UserProfileType"},
                queryCircles: {type: "Boolean!", defaultValue: false},
                circlesFilter: {type: "CirclesFilter"},
                firstCircles: {type: "Int", defaultValue: 5},
                querySportunities: {type: "Boolean!", defaultValue: false},
                sportunityFilter: {type: "Filter"},
                firstSportunities: {type: "Int", defaultValue: 5},
                circleId: {type: "ID"},
                queryOpponents: {type: "Boolean!", defaultValue: false},
                sportId: {type: "String"},
                superToken: {type: "String"}
            ) {
                id
                ...SportunityItem_viewer
                ...FilterDetailSports_viewer
                me {
                    id
                    profileType
                    ...SportunityItem_user
                }
                superMe (superToken: $superToken) @include(if: $queryMain) {
                    id,
                    subAccounts {
                      id
                    }
                }
                circles (filter: $circlesFilter, first: $firstCircles) @include(if: $queryMain) {
                    count
                    edges @include (if: $queryCircles){
                        node {
                            ...CirclesItem_circle
                            id, 
                            owner {
                                id
                                avatar
                                pseudo
                            }
                            isCircleAccessibleFromUrl
                            mode
                            type
                            coOwners {
                                id
                            }
                            members {
                                id
                                pseudo
                                avatar
                                profileType
                            }
                            memberParents {
                                id
                            }                
                        }
                    }
                }
                users (pseudo: $text, first: $firstUsers, userType: $userType) @include(if: $queryMain) {
                    count
                    edges @include (if: $queryUsers) {
                        node {
                            id,
                            profileType
                            ...UserCard_user
                        }
                    }
                }
                sportunities (filter: $sportunityFilter, first: $firstSportunities) @include(if: $queryMain)  {
                    count
                    edges @include (if: $querySportunities) {
                        node {
                            id
                            ...SportunityItem_sportunity
                        }
                    }
                }
                opponents (sportId: $sportId, pseudo: $text, first: $firstUsers) @include(if: $queryMain) {
                    count
                    edges @include(if: $queryOpponents) {
                        node {
                            id
                            avatar
                            pseudo
                        }
                    }
                }
                selectedCircle: circle (id: $circleId) {
                    id
                    name
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
                    memberCount
                }
            }
        `,
    },
    graphql`
        query SearchModuleRefetchQuery (
            $queryMain: Boolean!,
            $queryUsers: Boolean!,
            $text: String,
            $firstUsers: Int,
            $userType: UserProfileType,
            $queryCircles: Boolean!,
            $circlesFilter: CirclesFilter,
            $firstCircles: Int
            $querySportunities: Boolean!,
            $sportunityFilter: Filter,
            $firstSportunities: Int,
            $circleId: ID 
            $queryOpponents: Boolean!,
            $sportId: String,
            $superToken: String
        ) {
            viewer {
                ...SearchModule_viewer @arguments (
                    queryMain: $queryMain,
                    queryUsers: $queryUsers,
                    text: $text,
                    firstUsers: $firstUsers,
                    userType: $userType,
                    queryCircles: $queryCircles,
                    circlesFilter: $circlesFilter,
                    firstCircles: $firstCircles
                    querySportunities: $querySportunities,
                    sportunityFilter: $sportunityFilter,
                    firstSportunities: $firstSportunities,
                    circleId: $circleId,
                    queryOpponents: $queryOpponents,
                    sportId: $sportId,
                    superToken: $superToken
                )
            }
        }
    `

);

export default SearchModule = ({ navigation, ...mainProps }) => {
  return (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query SearchModuleQuery (
                $queryMain: Boolean!,
                $queryUsers: Boolean!,
                $text: String,
                $firstUsers: Int,
                $userType: UserProfileType,
                $queryCircles: Boolean!,
                $circlesFilter: CirclesFilter,
                $firstCircles: Int
                $querySportunities: Boolean!,
                $sportunityFilter: Filter,
                $firstSportunities: Int,
                $circleId: ID,
                $queryOpponents: Boolean!,
                $sportId: String,
                $superToken: String
            ) {
                viewer {
                    ...SearchModule_viewer @arguments (
                        queryMain: $queryMain, 
                        queryUsers: $queryUsers,
                        text: $text,
                        firstUsers: $firstUsers,
                        userType: $userType,
                        queryCircles: $queryCircles,
                        circlesFilter: $circlesFilter,
                        firstCircles: $firstCircles,
                        querySportunities: $querySportunities,
                        sportunityFilter: $sportunityFilter,
                        firstSportunities: $firstSportunities,
                        circleId: $circleId,
                        queryOpponents: $queryOpponents,
                        sportId: $sportId,
                        superToken: $superToken
                    )
                }
            }
        `}
        variables={{
            queryMain: false,
            queryUsers: false,
            text: null,
            firstUsers: 5,
            //userType: null,
            queryCircles: false,
            circlesFilter: null,
            firstCircles: 5,
            querySportunities: false,
            sportunityFilter: null,
            firstSportunities: 5,
            queryOpponents: false,
            sportId: null,
            superToken: null
        }}
        render={({error, props}) => {
            return (
                props 
                ?   <SearchModuleT query={props} viewer={props.viewer} {...mainProps}/>
                :   <SearchModuleT query={props} viewer={null} {...mainProps}/>
            )
        }}
      />
    )
};
  
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'column'
    },
    scrollViewContainer: {
        elevation: 1,
        //paddingBottom: 70
    },
    loadMoreContainer: {
        backgroundColor: colors.snow,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.lightGrey,
        padding: metrics.baseMargin
    },
    loadMoreText: {
        color: colors.charcoal,
        fontSize: fonts.size.h5,
        textAlign: 'center',
    },
    noResultContainer: {
        marginHorizontal: metrics.baseMargin,
        marginVertical: metrics.doubleBaseMargin,
        paddingVertical: metrics.doubleBaseMargin,
        paddingHorizontal: metrics.doubleBaseMargin,
        backgroundColor: colors.snow,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        alignItems: 'center'
    },
    noResultTitle: {
        fontSize: 20,
        marginBottom: 15,
        color: colors.charcoal,
        fontWeight: '600',
    },
    noResultText: {
        color: colors.charcoal,
        fontSize: fonts.size.regular,
        fontWeight: '600',
        textAlign: 'center',
        opacity: 0.9,
        marginBottom: 15,
        borderWidth: 0
    },
    searchIcon: {
        marginBottom: metrics.doubleBaseMargin,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        tintColor: colors.charcoal,
    },

    headerAndroid: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.skyBlue,
        height: 50,
        paddingTop: 0,
        zIndex: 10
    },
    headerIOS: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.skyBlue,
        height: 64,
        paddingTop: 14,
        zIndex: 10
    },
    title: {
        flex: 1,
        textAlign: 'center',
        marginRight: metrics.doubleBaseMargin,
        color: colors.snow,
        fontSize: fonts.size.h6,
    },
    closeIcon: {
        marginLeft: metrics.baseMargin,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: colors.background,
        //justifyContent: 'space-between'
    },
    rightIconContainer: {
        width: metrics.rowHeitgh / 2,
        height: metrics.rowHeitgh / 2,
        justifyContent: 'center',
        marginRight: metrics.baseMargin
    },
    rightIcon: {
        width: 23,
        height: 23,
        tintColor: colors.white
    },
})

I18n.fallbacks = true
I18n.translations = translations;
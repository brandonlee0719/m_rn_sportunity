import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  Switch,
  Modal,
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import Toast from 'react-native-simple-toast';
import Prompt from 'react-native-prompt';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import Share from 'react-native-share';
import translations from 'sportunity/src/translations.js';

import { updateFrom } from 'sportunity/src/action/profileActions';
import { updateCircleTabState } from 'sportunity/src/action/circleActions';
import { circleType } from '../../../customPropType';
import Button from '../../Button/roundedButton';
import Input, {styles as inputStyles} from '../../Input';
import MembersView from './MembersView';
import Add from './AddMember';
import Subscribe from './Subscribe';
import AddChild from './AddChild';
import TermsOfUse from './TermsOfUse'
import CircleDetails from './CircleDetails'
import CircleOptions from './CircleOptions';
import styles from './style';
import icons from 'sportunity/src/theme/images';
import { colors, metrics } from '../../../theme';
import { getCircleDetailTabs } from './CircleTabs';
import DeleteCircleMutation from  '../CirclesPage/mutation/DeleteCircle';
import UnsubscribeFromCircleMutation from '../CirclesPage/mutation/UnsubscribeFromCircle';

import {ChatContainer} from '../ChatDetailPage/ChatDetailPageContainer';

const { webAppUrl } = require('../../../../conf/constants.json');

import RelayStore from '../../../RelayStore';

import UpdateCicleMutation from  './mutation/UpdateCicle';
import RemoveCircleMember from  './mutation/RemoveCircleMember';
import NewCircleMember from  './mutation/NewCircleMember';
import NewCircleMembers from './mutation/NewCircleMembers';
import NewParentMember from './mutation/NewParentMember';

import * as globals from '../../../lib/globalsjs/globals';

class CirclesDetailPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isPromptUpdateNameVisible: false,
      isCurrentUserTheOwner: false,
      isCurrentUserAMember: false,
      isCurrentUserCoOwner: false,
      isDetailSwitchOne: false,
      isCurrentUserAParent: false,
      isSubscribing: false,
      displayChat: false,
      displayTerms: false
    }
  }

  componentDidMount() {
    let { circleId } = this.props;
    
    // if (circleId) {
    //   this.props.relay.refetch({
    //     circleId, 
    //     chatId: circleId
    //   })
    // }
    // TODO ?? props.relay.* APIs do not exist on compat containers
    // setTimeout(() => this.props.relay.forceFetch({}, () => {}), 30) // check fulfillment
      
    // this.waitForQuery();
   }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.viewer && nextProps.viewer.circle)
      this._checkIfUserIsAuthorized(nextProps);
  }

  _checkIfUserIsAuthorized = (props) => {

    if (props.viewer && props.viewer.circle) {
      const { viewer:{circle, me} } = props;
      let isCurrentUserTheOwner = !!me && circle.owner.id === me.id;
      let isCurrentUserAMember = !!me && circle.members && circle.members.length > 0 && circle.members.findIndex(member => member.id === me.id) >= 0;
      let isCurrentUserCoOwner = !!me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0; 
      let isCurrentUserAParent = !!me && circle.memberParents && circle.memberParents.length > 0 && circle.memberParents.findIndex(parent => parent.id === me.id) >= 0;

      this.setState({
        isCurrentUserTheOwner,
        isCurrentUserAMember,
        isCurrentUserCoOwner,
        isCurrentUserAParent
      })
      if (!circle.isCircleAccessibleFromUrl && ((!isCurrentUserTheOwner && !isCurrentUserCoOwner && !isCurrentUserAParent && !isCurrentUserAMember) || !me)) {
        Toast.show(I18n.t('circleToastCircleIsPrivate'));
        if (typeof this.props.onCloseModal !== 'undefined')
          this.props.onCloseModal()
        else
          this.props.navigation.goBack();
      }
    }
  }

  onUpdate = (value) => {
    const { viewer } = this.props;
    const name = value ;// this.state.name
    if(name) {
      UpdateCicleMutation.commit({ 
        circleId: viewer.circle.id,
        circle:{
          name: name,
        },
      },
      response => {
        Toast.show(I18n.t('circleUpdateSuccess'));
        this.setState({
          isPromptUpdateNameVisible: false
        })
      }, 
      error => {
        Toast.show(I18n.t('circleUpdateFailed'));
        console.log(error.getError())
      });
    } 
    else {
      Toast.show(I18n.t('circleName'));
    }
  }

  _handleUpdateCircleOptions = (isCirclePublic, isCircleAccessibleWithLink, isCircleUsableByMembers, isChildrenCircle, address, sport, description) => {
    const {viewer} = this.props;

    UpdateCicleMutation.commit({
      circleId: viewer.circle.id,
      circle:{
        name: viewer.circle.name,
        mode: isCirclePublic ? 'PUBLIC' : 'PRIVATE',
        isCircleAccessibleFromUrl: isCircleAccessibleWithLink,
        isCircleUsableByMembers: isCircleUsableByMembers,
        circlePreferences: {
          isChildrenCircle 
        },
        sport: sport 
        ? {sport: sport.sportID, levels: sport.level}
        : null,
        address,
        description
      },
    },
    response => {
      Toast.show(I18n.t('circleUpdateSuccess'));
    }, 
    error => {
      Toast.show(I18n.t('circleUpdateFailed'));
      console.log(error.getError());
    })
    

  }

  userIsInCircle = (pseudo) => {
    const {viewer:{circle}} = this.props;

    return circle.members &&
      circle.members.length > 0 &&
      circle.members.findIndex(member => member.pseudo.toLowerCase() === pseudo.toLowerCase()) >= 0;
  }

  showTerms = () => {
    this.setState({
      displayTerms: true
    })
  }

  validateTerms = (isCheckboxChecked) => {
    if (!isCheckboxChecked) {
      Toast.show(I18n.t('circleTermsValidationNeeded'))
      return ;
    }
    else {
      this.setState({
        displayTerms: false
      })
      this.addMember(this.props.viewer.me, true);
    }
  }

  addMember = (user, subscribing = false) => {
    if (user.pseudo && this.userIsInCircle(user.pseudo)) {
      Toast.show(subscribing ? I18n.t('circleSubscribeUserAlreadyInCircleYou') : I18n.t('circleSubscribeUserAlreadyInCircle'))
      return ;
    }

    this.setState({isSubscribing: true})
    
    const {  viewer } = this.props;

    NewCircleMember.commit({ 
      circleId: viewer.circle.id,
      userId: user.id,
    }, 
    response => {
      this.setState({isSubscribing: false})
      Toast.show(subscribing ? I18n.t('circleSubscribed') : I18n.t('circleMemberSuccess'));
      globals.object('refetchEvents').call('refetchEvents')
    }, 
    error => {
      this.setState({isSubscribing: false})
      console.log(error.getError().source.errors[0].message);
      Toast.show(error.getError().source.errors[0].message);
    });
  }

  addMembers = users => {
    const {  viewer } = this.props;
    
    NewCircleMembers.commit({ 
      circleId: viewer.circle.id, 
      users: users 
    },
    response => Toast.show(users.length > 1 ? I18n.t('circleMembersSuccess') : I18n.t('circleMemberSuccess')),
    error => {
      console.log(error.getError().source.errors[0].message);
      Toast.show(error.getError().source.errors[0].message);
    })    
  }

  _handleAddChildParent = (parent1Email, parent2Email, childName) => {
    const {  viewer } = this.props;

    NewParentMember.commit({ 
      circleId: viewer.circle.id,
      parent1Email,
      parent2Email,
      childPseudo: childName
    },
    response => {
      Toast.show(I18n.t('circleMemberSuccess'));
    }, 
    error => {
      console.log(error.getError().source.errors[0].message);
      Toast.show(error.getError().source.errors[0].message);
    });
  }

  removeMember = (user) => {
    const { viewer } = this.props;

    RemoveCircleMember.commit({ 
      circleId: viewer.circle.id, 
      userId: user.id
    },
    response => {
      Toast.show(I18n.t('circleMemberRemoved'));
    }, 
    error => {
      const message = error.getError().source.errors.message;
      console.log("Error", message);
    });
  }

  close = () => {
    if (this.props.onCloseModal)
      this.props.onCloseModal()
    else
      this.props.navigation.goBack();

    setTimeout(() => this.props.updateCircleTabState('CircleDetailsInfo'), 200);
  }

  getMenuOptions = () => {
    let menuOptions = [] ;
    const {isCurrentUserTheOwner, isCurrentUserAMember } = this.state;
    if (isCurrentUserTheOwner) {
      menuOptions.push({
        value: 1,
        text: I18n.t('circleUpdateName')
      })
      menuOptions.push({
        value: 2,
        text: I18n.t('circlesDelete')
      })
    }
    if (isCurrentUserAMember) {
      menuOptions.push({
        value: 3,
        text: I18n.t('circleUnsubscribeValidationTitle')
      })
    }

    return menuOptions;
  }

  renderTopMenu = () => {
    let circle = this.props.viewer.circle;

    return (
      <View style={ styles.hamburgerIcon }>
        <Menu onSelect={(value) => {
         if (value === 1) 
            this.setState({isPromptUpdateNameVisible: true})
          else if (value === 2) 
            this.deleteCircle(this.props.viewer.circle)
          else if (value === 3)   
            this.unSubscribe(this.props.viewer.circle);
        }}>
          <MenuTrigger>
            <Text style={styles.navOptionsButton}>   &#8942;   </Text>
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{marginTop:50}}>
            {this.getMenuOptions().map((option, index) => (
              <MenuOption key={index} value={option.value}>
                <Text>{option.text}</Text>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </View>
    );
  }

  share = () => {
    let circle = this.props.viewer.circle;

    let shareOptions = {
      title: circle.name,
      message: I18n.t('circleShareMessage1')+ circle.name + ' (' + I18n.t('circleShareMessageSecretCode') + circle.publicShortCode + ')' + I18n.t('circleShareMessage2') + circle.owner.pseudo,
      url: webAppUrl+`/circle/${circle.id}`,
      subject: I18n.t('circleShareMessage1')+ circle.name + ' (' + I18n.t('circleShareMessageSecretCode') + circle.publicShortCode + ') ' + I18n.t('circleShareMessage2') + circle.owner.pseudo,
    };
    Share.open(shareOptions);
  }

  handleSwitchChange = () => {
    this.setState({
      isDetailSwitchOne: !this.state.isDetailSwitchOne
    })
  }

  handleChatButtonPress = () => {
    this.setState({ displayChat: true })
  }

  deleteCircle = (circle) => {
    const { viewer  } = this.props;

    Alert.alert(
      I18n.t('circlesDeleteValidationTitle'),
      I18n.t('circlesDeleteValidationText')+ ' ' + circle.name + ' ?',
      [
        {text: I18n.t('circlesDeleteValidationOk'), onPress: () => {
            DeleteCircleMutation.commit({ 
              circleId: circle.id 
            },
            (response) => {
              globals.object('refetchCircles').call('refetchCircles')
              globals.object('refetchSearchModule').call('refetchSearchModule')
              Toast.show(I18n.t('circlesDeleteSuccess'));
              
              this.close()
            },
            error => {
              console.log(error.getError());
              Toast.show(I18n.t('circlesDeleteError'));
            }
          );
        }},
        {text: I18n.t('circlesDeleteValidationCancel'), onPress: () => {return;}}
      ]
    )    
  }

  unSubscribe = (circle) => {
    Alert.alert(
      I18n.t('circleUnsubscribeValidationTitle'),
      I18n.t('circleUnsubscribeValidation')+ ' ' + circle.name + ' ?',
      [
        {text: I18n.t('circlesDeleteValidationOk'), onPress: () => {
          let params = {
            circleId: circle.id,
            userId: this.props.viewer.me.id
          }

          UnsubscribeFromCircleMutation.commit(params,
            (response) => {
              Toast.show(I18n.t('updateSuccess'));
              globals.object('refetchCircles').call('refetchCircles')
              globals.object('refetchSearchModule').call('refetchSearchModule')
              globals.object('refetchEvents').call('refetchEvents')
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

  render() {
    const { viewer, circleTabState, updateCircleTabState } = this.props 
    const circle = this.props.viewer && this.props.viewer.circle;
    const chat = this.props.viewer && this.props.viewer.chat ;
    const {isCurrentUserTheOwner, isCurrentUserAMember, isCurrentUserCoOwner, isCurrentUserAParent } = this.state;

    const infoHandlers = {
      addMember: this.addMember,
      addMembers: this.addMembers, 
      addChildParent: this._handleAddChildParent,
      showTerms: this.showTerms,
      close: this.close,
      share: this.share,
    };

    const membersHandlers = {
      addMember: this.addMember,
      _handleAddChildParent: this._handleAddChildParent,
      handleSwitchChange: this.handleSwitchChange,
      removeMember: this.removeMember,
    };

    const chatHandlers = {
      handleChatButtonPress: this.handleChatButtonPress,
    };

    const menuHandlers = {
      updateCircleName: () => this.setState({ isPromptUpdateNameVisible: true }),
      deleteCircle: () => this.deleteCircle(this.props.viewer.circle),
      unSubscribe: () => this.unSubscribe(this.props.viewer.circle),
    };
    
    return (
      <View style={{ flex: 1 }}>
        <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
          <TouchableOpacity
            onPress={this.close}
            style={styles.closeIcon}
          >
            <Image
              source={this.props.hideNavBar ? icons.right_arrow : icons.down_arrow}
              style={this.props.hideNavBar ? styles.leftIcon : {}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {I18n.t('circleDetail')}
          </Text>
          <TouchableOpacity onPress={this.share} style={{ marginRight: metrics.doubleBaseMargin }}>
            <Icon name="share" color={colors.snow} size={22} />
          </TouchableOpacity>
        </View>

        {this.state.displayChat && 
          <Modal
              animationType={'slide'}
              transparent={false}
              visible={this.state.displayChat}
              onRequestClose={() => this.setState({displayChat: false})}
            >
            <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
              <TouchableOpacity
                onPress={() => this.setState({displayChat: false})}
                style={styles.closeIcon}>
                <Image source={icons.down_arrow}/>
              </TouchableOpacity>
              <Text style={styles.title}>
                {circle.name}
              </Text>
            </View>
            
            <View style={styles.modalContainer}>
            <ChatContainer
              id={chat.id}
              title={circle.name}
              viewer={viewer}
              hideMenu={true}
            />
            </View>
          </Modal>
        }

        <Prompt
          title={I18n.t('circleUpdateName')}
          defaultValue={circle ? circle.name : ''}
          visible={ this.state.isPromptUpdateNameVisible }
          onCancel={ () => this.setState({
            isPromptUpdateNameVisible: false
          }) }
          onSubmit={ (value) => this.onUpdate(value) }
        />

        {getCircleDetailTabs({ navigation: this.props.navigation, viewer, circle, chat, infoHandlers, membersHandlers, chatHandlers, menuHandlers, circleTabState, updateCircleTabState, ...this.state })}
      </View>
    )
  }
}

CirclesDetailPage.propTypes = {
  viewer: PropTypes.object.isRequired,
  onCancel: PropTypes.func,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
  circleTabState: state.circleDetails.circleTabState,
});

const dispatchToProps = (dispatch) => ({
  updateFrom: (status) => dispatch(updateFrom(status)),
  updateCircleTabState: (status) => dispatch(updateCircleTabState(status)),
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(CirclesDetailPage);


const CirclesDetailPageTemp = createRefetchContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
  fragment CirclesDetailPage_viewer on Viewer @argumentDefinitions(
    chatId: {type: "String"},
    circleId: {type: "ID"}
  ){
      id,
      ...ChatDetailPageContainer_viewer
      me {
        id
        pseudo
        profileType
        isSubAccount
        ...AddMember_user
        ...AddChild_user
      }
      chat (circleId: $chatId) {
        id
      }
      circle: circle(id: $circleId) {
        id
        publicShortCode
        name
        mode
        type
        isCircleUpdatableByMembers
        isCircleAccessibleFromUrl
        isCircleUsableByMembers
        sport {
          sport {
            id,
            name {
              EN, 
              FR
            }
          }
          levels {
            EN {
              name
            }
            FR {
              name
            }
          }
        }
        address {
          address,
          zip
          city,
          country
        }
        circlePreferences {
          isChildrenCircle 
        }
        owner {
          id
          pseudo
          avatar
        }
        coOwners {
          id
        }
        memberCount
        members{
          id,
          pseudo,
          email,
          firstName,
          lastName,
          avatar,
          lastConnexionDate
        }
        memberParents {
          id
          pseudo
          avatar
          lastConnexionDate
        }
        askedInformation {
          id
          name
          type
          filledByOwner
        }
        membersInformation {
          id
          information
          user {
            id
          }
          value
        }
        termsOfUses {
          id
          name
          link
          content
          acceptedBy {
            user {
              id
            }
          }
        }
        ...CircleOptions_circle
        ...CircleDetails_circle
      }
      ...CircleOptions_viewer
      ...AddMember_viewer
      ...Subscribe_viewer
      ...AddChild_viewer
    }`,
  },
  graphql`
    query CirclesDetailPageRefetchQuery ($chatId: String!, $circleId: ID) {
      viewer {
        ...CirclesDetailPage_viewer @arguments(chatId: $chatId, circleId: $circleId)
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const {navigation} = this.props;
    let circleId = this.props.circleId ; 
    let hideNavBar = false;
    let onCloseModal = this.props.onCloseModal;
    let deleteCircle = this.props.deleteCircle;
    
    if (navigation) {
      hideNavBar = navigation.getParam('hideNavBar', false)
      
      if (!onCloseModal)
        onCloseModal = navigation.getParam('onCloseModal', null)
      
      if (!circleId)
        circleId = navigation.getParam('circleId', null)
    }
    
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CirclesDetailPageQuery ($chatId: String!, $circleId: ID){
            viewer {
              ...CirclesDetailPage_viewer @arguments(chatId: $chatId, circleId: $circleId)
            }
          }
        `}
        variables={{circleId, chatId: circleId}}
        render={({error, props}) => {
          
          if (props) {
            return <CirclesDetailPageTemp viewer={props.viewer} query={props} circleId={circleId} hideNavBar={hideNavBar} onCloseModal={onCloseModal} deleteCircle={deleteCircle}/>;
          } else {
            return (
              <CirclesDetailPageTemp viewer={null} query={props} {...this.props} circleId={circleId} hideNavBar={hideNavBar} onCloseModal={onCloseModal} deleteCircle={deleteCircle}/>
            )
          }
        }}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;

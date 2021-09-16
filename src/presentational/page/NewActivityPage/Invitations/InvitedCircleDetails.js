import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { Modal, Text, TouchableOpacity, View, ScrollView, Image, TextInput, StyleSheet, Switch, ImageBackground, Alert } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import RelayStore from '../../../../RelayStore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {ListBlock, ListBlockItem} from './List';
import Button from '../../../Button/roundedButton';
import NotificationPreferences from './NotificationPreferences/NotificationPreferences';
import AddMemberModal from './AddMemberModal';
import AddChildModal from './AddChildModal'
import NewParentMember from '../../CirclesDetailPage/mutation/NewParentMember'; 
import NewCircleMember from '../../CirclesDetailPage/mutation/NewCircleMember';
import FormListItem from '../../../UI/FormListItem';
import NewButton from '../../../UI/Button';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';


class InvitedCircleDetails extends PureComponent {
  constructor() {
    super();
    this.state = {
      priceInput: {
        cents: '',
        currency: 'CHF'
      },
      automaticallyParticipants: false,
      memberListIsOpen: false,
      addMemberModalIsOpen: false,
      addChildModalIsOpen: false
    }
  }

  componentDidMount() {
    const {circlePrice, participantByDefault, circle} = this.props ;
    if (circlePrice) 
      this.setState({
        priceInput: {
          cents: circlePrice.cents.toString(),
          currency: circlePrice.currency
        }
      })
    else 
      this.setState({
        priceInput: {
          cents: '',
          currency: this.props.userCurrency
        }
      })
    
    if (typeof participantByDefault !== 'undefined') 
      this.setState({
        automaticallyParticipants: participantByDefault
      })

    if (circle) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true,
        circleId: circle.id
      });

      this.props.relay.refetch(
          refetchVariables,
          null,
          null,
          {force: false}
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.circlePrice.cents.toString() !== this.state.priceInput.cents.toString()) 
      this.setState({
        priceInput: {
          cents: nextProps.circlePrice.cents.toString(),
          currency: nextProps.circlePrice.currency
        }
      })
  }

  controlPricePerCircle = (value) => {
    this.setState({
      priceInput: {
        cents: value,
        currency: this.props.userCurrency
      }
    })
  }

  handlePriceBlur = (e) => {
    let value = this.state.priceInput.cents ;
    var regex = new RegExp(/^(\d+(?:[\.\,]\d{1,2})?)$/);
    
    if (!regex.test(value) && value !== "0" && value !== "") {
      Alert.alert(I18n.t('alert'), I18n.t('priceWrongFormat'));
      this.setState({
        priceInput: {
          cents: '',
          currency: this.props.userCurrency
        }
      })
      this.props.updateCircleInviteePrice(this.props.circle, 0)
      return ;
    }
    else {
      let finalValue = parseInt(value * 100, 10) / 100;
      if(!finalValue || finalValue === 0){
        finalValue = 0;
      }
      else 
        this._handleSwitchChanged(false)
      this.props.updateCircleInviteePrice(this.props.circle, finalValue)
    }
  }

  _handleSwitchChanged = (value) => {
    this.setState({
      automaticallyParticipants: value
    })
    this.props.updateCircleAutomaticallyParticipant(this.props.circle, value)
    if (value) {
      this.props.updateCircleInviteePrice(this.props.circle, 0)
    }
  }

  addModal = () => {
    if (this.props.viewer.circle && this.props.viewer.circle.type === 'CHILDREN')
      this.setState({
        addChildModalIsOpen: true
      })
    else
      this.setState({
        addMemberModalIsOpen: true
      })
  }

  closeModal = () => {
    this.setState({
      addChildModalIsOpen: false,
      addMemberModalIsOpen: false
    })
  }

  _handleAddChildParent = (parent1Email, parent2Email, childName) => {
    const {  viewer } = this.props;

    NewParentMember.commit({ 
        circleId: viewer.circle.id, 
        parent1Email: parent1Email, 
        parent2Email: parent2Email, 
        childPseudo: childName 
      },
      (response) => {
        Toast.show(I18n.t('circleMemberSuccess'));
      },
      (error) => {
        console.log(error.getError().source.errors[0].message);
        Toast.show(error.getError().source.errors[0].message);
      }
    );
  }

  userIsInCircle = (pseudo) => {
    const {viewer:{circle}} = this.props;

    return circle.members &&
      circle.members.length > 0 &&
      circle.members.findIndex(member => member.pseudo.toLowerCase() === pseudo.toLowerCase()) >= 0;
  }

  _handleAddMember = (user) => {
    if (user.pseudo && this.userIsInCircle(user.pseudo)) {
      Toast.show(I18n.t('circleSubscribeUserAlreadyInCircle'))
      return ;
    }
    
    const {  viewer } = this.props;
    this.closeModal();

    NewCircleMember.commit({ 
      circleId: viewer.circle.id,
      userId: user.id ? user.id : null,
      pseudo: user.id ? null : !isEmail.test(user.pseudo) && user.pseudo || null,
      email: user.id ? null : isEmail.test(user.pseudo) && user.pseudo || null,
    },
    (response) => {
      Toast.show(I18n.t('circleMemberSuccess'));
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        query: true,
        circleId: viewer.circle.id
      });

      this.props.relay.refetch(
          refetchVariables,
          null,
          null,
          {force: false}
      );
    },
    error => {
      console.log(error.getError().source.errors[0].message);
      Toast.show(error.getError().source.errors[0].message);
    });
  }

  render() {
    const {viewer, circle, show, onClose} = this.props ;

    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={show}
        onRequestClose={onClose}
      >
        <View style={styles.header}>
          <TouchableOpacity
              onPress={onClose}
              style={styles.closeIcon}>
            <Image source={images.down_arrow}/>
          </TouchableOpacity>

          <Text style={styles.title}>
            {viewer.me && viewer.me.profileType !== 'PERSON' ? I18n.t('summon') : I18n.t('invitations')}
          </Text>
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageContainer}>
              <ImageBackground style={styles.image} source={images.sportunity_group}>
              <Text style={styles.members}>
                {viewer.circle ? viewer.circle.memberCount : circle.memberCount}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.text}>
                {circle.name}
              </Text>
              <Text style={styles.ownerName}>{this.props.ownerName}</Text>
              
            </View>
          </View>

          {!this.state.automaticallyParticipants &&  
            <NotificationPreferences />
          }

          {this.props.viewer && this.props.viewer.circle && this.props.viewer.circle.owner.id === this.props.viewer.me.id && 
            <View style={{ alignItems: 'center', marginTop: metrics.doubleBaseMargin }}>
              <NewButton
                text={
                  this.props.viewer.circle.type === 'CHILDREN'
                  ? I18n.t('inviteChild')
                  : this.props.viewer.me.profileType === 'ORGANIZATION' ? I18n.t('inviteMembers') : I18n.t('inviteFriends')
                }
                width={250}
                onPress={this.addModal}
              />
            </View>
          }

          {this.props.viewer && this.props.viewer.circle && 
          <View style={{marginVertical: metrics.doubleBaseMargin}}>

              <FormListItem
                type="secondary"
                title={() => (
                  <View style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{(this.props.viewer.circle.members ? this.props.viewer.circle.members.length : 0) + ' ' + I18n.t('circleInCircle')}</Text>
                      {(this.state.priceInput.cents === '' || this.state.priceInput.cents === "0" || this.state.priceInput.cents === 0) &&
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifySelf: 'flex-end', alignSelf: 'flex-end' }}>
                          <Text>
                            {I18n.t('participantByDefault')}
                          </Text>
                          <Switch
                            onTintColor={colors.skyBlue}
                            value={this.state.automaticallyParticipants}
                            onValueChange={this._handleSwitchChanged}
                            style={styles.switch}
                          />
                        </View>
                      }
                  </View>
                )}
              />

              {this.props.viewer.circle.members && this.props.viewer.circle.members.length > 0 && 
                this.props.viewer.circle.members.filter((_item, index) => this.state.memberListIsOpen || index < 2).map((member,id) =>
                <FormListItem
                  key={id}
                  title={member.pseudo}
                  leftIcon={() => (
                    <View>
                      {member.avatar
                        ? <Image style={styles.thumbProfile} source={{uri: member.avatar}} />
                        : <Image style={styles.thumbProfile} source={images.profile_photo} />
                      }
                    </View>
                  )}
                />
              )}

              {this.props.viewer.circle.members && this.props.viewer.circle.members.length > 2 && (
                this.state.memberListIsOpen 
                ? <TouchableOpacity
                    style={styles.seeMoreOrLessButtonContainer}
                    onPress={()=>this.setState({memberListIsOpen: false})}
                  >
                    <Text style={styles.smallTextButton}>
                      {I18n.t('seeLess')}
                    </Text>
                  </TouchableOpacity>
                : <TouchableOpacity
                    style={styles.seeMoreOrLessButtonContainer}
                    onPress={()=>this.setState({memberListIsOpen: true})}
                  >
                    <Text style={styles.smallTextButton}>
                      {I18n.t('seeMore')}
                    </Text>
                  </TouchableOpacity>
              )}
            </View>
          }

          {/* {!this.state.automaticallyParticipants && 
            <View style={styles.priceInput}>
              <Text style={styles.smallText}>
                {I18n.t('price')}
              </Text>
              <TextInput
                style={styles.input}
                maxLength={5}
                autoCorrect={false}
                placeholderTextColor="silver"
                placeholder="0"
                autoCapitalize="none"
                selectionColor="#ffffff"
                keyboardType="numeric"
                underlineColorAndroid={colors.skyBlue}
                value={this.state.priceInput.cents}
                onChangeText={this.controlPricePerCircle}
                onBlur={this.handlePriceBlur}
              />
              <Text style={styles.currency}>{this.state.priceInput.currency}</Text>
            </View>
          } */}

          
        </ScrollView>
        <Button onPress={onClose} >
          {I18n.t('validate')}
        </Button>        

        {this.state.addChildModalIsOpen && 
          <AddChildModal
            viewer={viewer}
            addChildParent={this._handleAddChildParent}
            onClose={this.closeModal}
            show={true}
          />
        } 
        {this.state.addMemberModalIsOpen && 
          <AddMemberModal
            viewer={viewer}
            self={viewer.me}
            addInvitee={this._handleAddMember}
            onClose={this.closeModal}
            circle={this.props.viewer.circle}
          />
        } 
      </Modal>
    )
  }
}


const stateToProps = (state) => ({
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
});

const dispatchToProps = (dispatch) => ({
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(InvitedCircleDetails);


export default createRefetchContainer(ReduxContainer, {
  /* TODO manually deal with:
    ...NewParentMember_viewer
      ...NewCircleMember_viewer
      ...NewParentMember_circle
          
  */
  viewer: graphql`
    fragment InvitedCircleDetails_viewer on Viewer @argumentDefinitions (
      circleId: {type: "ID"},
      query: {type: "Boolean!", defaultValue: false}
    ){
      id
      ...AddMemberModal_viewer   
      me {
        id
        pseudo
        email
        profileType
      }
      circle(id: $circleId) @include(if: $query) {
        id
        
        members {
          id, 
          pseudo,
          avatar
        }
        memberCount
        type
        owner {
          id
        }
      }
    }
  `},
  graphql`
    query InvitedCircleDetailsRefetchQuery ($circleId: ID, $query: Boolean!) {
      viewer {
        ...InvitedCircleDetails_viewer @arguments(circleId: $circleId, query: $query)
      }
    }
  `
)



const styles = StyleSheet.create({
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
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginBottom: metrics.doubleBaseMargin
  },
  row: {
    marginVertical: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    flex: 3,
    color: colors.blue,
    fontWeight: 'bold'
  },
  ownerName: {
    flex: 3, 
    color: colors.grey
  },
  priceInput: {
    flexDirection: 'row',
    alignItems: 'center',
    //flex: 2
    marginVertical: metrics.doubleBaseMargin
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 80,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center',
    marginLeft: metrics.baseMargin
  },
  currency: {
    marginLeft: 5
  },
  smallText: {
    fontSize: fonts.size.small,
    flex: 4
  },
  smallTextButton: {
    color: colors.charcoal
  },
  switch: {
    marginLeft: metrics.baseMargin
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  members: {
    fontSize: fonts.size.normal,
    color: colors.blue,
    fontWeight: 'bold',
    marginTop: 8,
  },
  nameContainer: {
    flexDirection: 'column',
    flex: 4
  },
  circular: {
    height: metrics.icons.small,
    width: metrics.icons.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.icons.small,
    backgroundColor: colors.lightGrey,
    marginRight: metrics.baseMargin,
  },
  icon: {
    tintColor: colors.grey
  },
  charSymbol: {
    color: colors.charcoal,
    fontSize: fonts.style.h6.fontSize, 
    fontFamily: fonts.style.h6.fontFamily,
    fontWeight: 'bold',
    lineHeight: 19,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreOrLessButtonContainer: {
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    alignItems: 'flex-end',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    paddingVertical: 5, 
    flex: 1,
  },
  thumbProfile: {
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
  },
  colContainer:{
    flex: 5,
    marginLeft: 5
  },
  name: {
    fontSize: 14, 
    color: colors.blue,
  },
});

I18n.fallbacks = true
I18n.translations = translations;

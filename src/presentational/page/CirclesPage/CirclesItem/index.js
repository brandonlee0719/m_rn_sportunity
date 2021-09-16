import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Text from 'react-native-text';
import { Circle } from 'react-native-progress';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { circleType } from '../../../../customPropType';
import { styles } from './style';
import { images, metrics, colors } from '../../../../theme';
import DeleteCircleMutation from  '../mutation/DeleteCircle';
import BottomContent from './BottomContent'
import FormListItem from '../../../UI/FormListItem';
import Button from '../../../UI/Button';

class CirclesItem extends Component{
  constructor(props) { 
    super(props);
  }  

  componentDidMount() {
    this.props.relay.refetch({
      itemID: this.props.circle.id, 
      queryDetails: true
    });
  }

  displayRightButton = () => {
    const { 
      circle, 
      goToCircles, 
      userIsOwner, 
      isCurrentUserATeamOwner, 
      userIsSuperUser, 
      userIsMember, 
      subscribe, 
      onUnsubscribe,
      user,
      isSelected,
      inviteToActivity,
      isSubscribing,
      hideRightButton
    } = this.props; 

    if (hideRightButton || (inviteToActivity && userIsMember && !circle.isCircleUsableByMembers)) {
    }
    else if (isSubscribing) {
      return (
        <View style={{ paddingRight: metrics.doubleBaseMargin }}>
          <Circle size={20} color={colors.blue} indeterminate={true} borderWidth={3} borderColor={colors.blue} />
        </View>
      )
    }
    else if (inviteToActivity && isSelected) {      
      return <Button
        onPress={() => goToCircles({...circle, userIsOwner, userIsSuperUser, userIsMember})}
        text={I18n.t('invited')}
        type={'secondary'}
        rounded
        width={90}
      />
    }
    else if (inviteToActivity && (userIsOwner || userIsSuperUser || userIsMember || isCurrentUserATeamOwner)) {
      return <Button
        onPress={() => goToCircles({...circle, userIsOwner, userIsSuperUser, userIsMember})}
        text={I18n.t('invite')}
        type={'primary'}
        rounded
        width={90}
      />
    }
    else if (userIsMember) {
      return <Button
        onPress={() => onUnsubscribe(circle, user)}
        text={I18n.t('circleUnsubscribe')}
        type={'secondary'}
        rounded
        width={90}
      />
    }
    else if (user &&
      !userIsOwner && 
      !userIsSuperUser && 
      !userIsMember && 
      circle.members && 
      circle.memberParents && 
      circle.memberParents.findIndex(member => member.id === user.id) < 0 && 
      circle.members.findIndex(member => member.id === user.id) < 0 &&
      circle.type !== 'CHILDREN' && 
      ((circle.type === 'ADULTS' && user.profileType === 'PERSON') ||
        ((circle.type === 'TEAMS' || circle.type === 'CLUBS') && user.profileType === 'ORGANIZATION') ||
        (circle.type === 'COMPANIES' && (user.profileType === 'BUSINESS' || user.profileType === 'SOLETRADER' )))) {

      return <Button
        onPress={() => subscribe(circle)}
        text={I18n.t('circleSubscribeShort')}
        type={'primary'}
        rounded
        width={90}
      />
    }
  }

  render() {
  const { 
    circle, 
    goToCircles, 
    deleteCircle, 
    userIsOwner, 
    onUnsubscribe, 
    userIsSuperUser, 
    userIsMember, 
    subscribe, 
    user,
    isSelected,
    inviteToActivity,
  } = this.props; 

  const memberTypeList = [
    {key: 'ADULTS', label: I18n.t('circles_member_type_'+0)},
    {key: 'CHILDREN', label: I18n.t('circles_member_type_'+1)},
    {key: 'TEAMS', label: I18n.t('circles_member_type_'+2)},
    {key: 'CLUBS', label: I18n.t('circles_member_type_'+3)},
    {key: 'COMPANIES', label: I18n.t('circles_member_type_'+4)}
  ]

  return (
        <View style={styles.content}>
          <TouchableOpacity style={styles.leftContainer} onPress={() => goToCircles({...circle, userIsOwner, userIsSuperUser, userIsMember})}>
            <View style={styles.row}>
              <View style={styles.topContent}>
                <View style={styles.imageContainer}>
                  <ImageBackground style={styles.image} source={images.sportunity_group}>
                    <Text style={styles.members}>{circle.memberCount}</Text>
                  </ImageBackground>
                </View>

                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={2}>
                    {circle.name}
                  </Text>
                  {circle.owner && 
                    <View style={styles.ownerContainer}>
                      {circle.owner && circle.owner.avatar 
                        ? <Image style={styles.avatar} source={{uri: circle.owner.avatar}}/>
                        : <Image style={styles.avatar} source={images.profile_photo} />
                      }
                      <Text style={styles.ownerName} numberOfLines={2}>
                        {circle.owner.pseudo 
                        ? circle.owner.pseudo.length > 25
                          ? circle.owner.pseudo.slice(0,25) + '...'
                          : circle.owner.pseudo 
                        : ''}
                      </Text>
                    </View>
                  }
                  {circle.type && 
                    <Text style={styles.type} numberOfLines={1}>
                      {I18n.t('circle_memberType') + ':  '}
                      <Text style={styles.typeName}>{memberTypeList.find(list => list.key === circle.type).label}</Text>
                    </Text>
                  }
                </View>
              
                {this.displayRightButton()}
              </View>
            </View>
            
            <BottomContent 
              circle={circle}
              userIsOwner={userIsOwner}
              userIsSuperUser={userIsSuperUser}
              userIsMember={userIsMember}
            />

          </TouchableOpacity>
        </View>
  )
}};

CirclesItem.propTypes = {
  //circle: circleType.isRequired,
  goToCircles: PropTypes.func.isRequired,
};

export default createRefetchContainer(CirclesItem, {
  circle: graphql`
    fragment CirclesItem_circle on Circle @argumentDefinitions(
      queryDetails: {type: "Boolean!", defaultValue: false}
    ){
      id
      name
      memberCount
      mode
      isCircleUsableByMembers
      isCircleAccessibleFromUrl
      type
      owner {
        id
        avatar
        pseudo
      }
      coOwners {
        id
      }
      members {
        id
      }
      memberParents {
        id
      }
      termsOfUses @include(if: $queryDetails){
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
    }`,
  },
  graphql`
    query CirclesItemRefetchQuery ($queryDetails: Boolean!, $itemID: ID!) {
      node(id: $itemID) {
        ...CirclesItem_circle @arguments(queryDetails: $queryDetails)
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;

// @flow
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Switch, ImageBackground } from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';

import { metrics, colors, fonts, images } from '../../../../theme';
import translations from 'sportunity/src/translations.js';

import InvitedCircleDetailsModal from './InvitedCircleDetails'
import FormListItem from '../../../UI/FormListItem';

class InvitedCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seeCirleDetails: false
    }
  }

  showDetails = () => {
    if (this.props.notShowDetails) {
      return false;
    }
    this.setState({
      seeCirleDetails: true
    })
  }

  closeDetails = () => {
    this.setState({
      seeCirleDetails: false
    })
  }

  render() {
    const {circle, circlePrice, participantByDefault, viewer, index} = this.props ;

    return (
      <View style={{ flex: 1 }}>

        <FormListItem
          onPress={this.showDetails}
          title={circle.name}
          leftIcon={() => (
            <View style={styles.imageContainer}>
              <ImageBackground style={styles.image} source={images.sportunity_group}>
                <Text style={styles.members}>{circle.memberCount}</Text>
              </ImageBackground>
            </View>
          )}
          subtitle={() => (
            <View>
              {circle.owner
              ? <View style={styles.ownerContainer}>
                  {circle.owner && circle.owner.avatar 
                    ? <Image style={styles.avatar} source={{uri: circle.owner.avatar}}/>
                    : <Image style={styles.avatar} source={images.profile_photo} />
                  }
                  <Text style={styles.ownerName}>
                    {circle.owner.pseudo || ''}
                  </Text>
                </View>
              : <View style={styles.ownerContainer}>
                  {viewer.me && viewer.me.avatar 
                    ? <Image style={styles.avatar} source={{uri: viewer.me.avatar}}/>
                    : <Image style={styles.avatar} source={images.profile_photo} />
                  }
                  <Text style={styles.ownerName}>
                    {viewer.me.pseudo || ''}
                  </Text>
                </View>
              }
            </View>
          )}
          rightIcon={() => {
            if (this.props.onRemove) {
              return (
                <TouchableOpacity
                  onPress={() => this.props.onRemove(circle)}
                  style={{ padding: metrics.baseMargin, paddingRight: 0 }}
                >
                  <Image
                    style={{ tintColor: colors.charcoal, height: 15, width: 15 }}
                    source={images.close_x}
                  />
                </TouchableOpacity>
              )
            }
            return (
              <Image style={{ tintColor: colors.charcoal, height: metrics.images.small, width: metrics.images.small }} source={images.settings} />
            )
          }}
        />

        {this.state.seeCirleDetails && 
          <InvitedCircleDetailsModal
            viewer={viewer}
            index={index}
            show={this.state.seeCirleDetails}
            onClose={this.closeDetails}
            circle={circle}
            ownerName={circle.owner ? circle.owner.pseudo : viewer.me.pseudo}
            circlePrice={circlePrice}
            participantByDefault={participantByDefault}
            updateCircleInviteePrice={this.props.updateCircleInviteePrice}
            updateCircleAutomaticallyParticipant={this.props.updateCircleAutomaticallyParticipant}
          />
          // This ^ is the details model
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerColumn: {
    flex: 10, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 4
  },
  rightColumn: {
    flex: 3, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 4
  },
  text: {
    fontSize: 13,
    color: colors.blue,
  },
  details: {
    fontSize: 12,
    color: colors.charcoal
  },
  price: {
    fontSize: 10,
    color: colors.charcoal
  },
  imageContainer: {
    width: 50,
    height: 50,
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
    paddingTop: 2
  },
  members: {
    fontSize: fonts.size.normal,
    color: colors.blue,
    fontWeight: 'bold',
    marginTop: 8,
  },
  ownerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  ownerName: {
   fontSize: fonts.size.small,
   color: colors.charcoal
  },
  avatar: {
    width: 18,
    height: 18,
    marginRight: 5,
    borderRadius: 9
  },
});

export default createFragmentContainer(InvitedCircle, {
  viewer: graphql`
    fragment InvitedCircle_viewer on Viewer {
      id
      me {
        pseudo,
        avatar
      }
      ...InvitedCircleDetails_viewer
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

// @flow
import PropTypes from 'prop-types'
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {createRefetchContainer, graphql} from 'react-relay';
import { connect } from 'react-redux';
import { metrics, colors, images } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import UserCard from '../../SearchModule/UserCard'
type Invitations$Props = {
  pseudo: string,
  viewer: {
    userExists: boolean
  },
  delete: (pseudo: string) => void,
  onError: (error: string) => void,
  relay: any
};

const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Invitee extends React.Component {
  props: Invitations$Props;

  constructor() {
    super();
    state = {
      requestedPseudo: ''
    }
  }

  componentDidMount() {
    if (!this.props.isCircleInvitee) {
      if (!isEmail.test(this.props.requestedPseudo)) {
        const refetchVariables = fragmentVariables => ({
          ...fragmentVariables,
          pseudo: this.props.requestedPseudo,
          requestUserExists: true
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            () => {
              if(!this.props.isCircleInvitee && (this.state.requestedPseudo === this.props.requestedPseudo) &&
              !isEmail.test(this.props.requestedPseudo) && (!this.props.viewer.userExists)) {
                this.props.delete(this.props.requestedPseudo);
                this.props.onError(`${I18n.t('userWidthPseudo')} ${this.props.requestedPseudo} ${I18n.t('doesNotExist')}`);
              }
            },
            {force: false}
        );

        this.setState({requestedPseudo: this.props.requestedPseudo})
      } 
    }
  }

  render() {
    const {user, id} = this.props;
    return (
      <View style={styles.row}>
      
      <UserCard 
        key={id}
        deleteUser={this.props.delete}
        user={user}
      />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pseudo: {
    flex: 7,
    color: colors.darkGrey
  },
  rightButton: {
    tintColor: colors.grey,
  },
  icon: {
    position:'absolute',
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStyle:{
    height:90
  },
  avatarStyle:{
    width: metrics.images.large,
    height: metrics.images.large,
    borderRadius: metrics.images.large,
  }
});

Invitee.propTypes = {
  requestedPseudo: PropTypes.string.isRequired,
};

export default createRefetchContainer(Invitee, {
  viewer: graphql`
    fragment Invitee_viewer on Viewer @argumentDefinitions(
      requestUserExists: {type: "Boolean!", defaultValue: false},
      pseudo: {type: "String"}
    ) {
      id
      userExists(pseudo: $pseudo) @include(if: $requestUserExists)
    }
  `,
  },
  graphql`
    query InviteeRefetchQuery ($requestUserExists: Boolean!, $pseudo: String) {
      viewer {
        ...Invitee_viewer @arguments(requestUserExists: $requestUserExists, pseudo: $pseudo)
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

import AddMessageSubscription from '../Subscriptions/ChatPageAddMessage';
import { styles } from './style';
import { colors } from '../../../../../theme';
import Message from '../Message';

class ChatItem extends Component {

  constructor(props){
    super(props);
    this.sub ;
  }

  componentDidMount() {
    this.sub = AddMessageSubscription({chatIdsVar: [this.props.chat.id]})
  }

  componentWillUnmount() {
    this.sub.dispose()
  }

  infoChat = (chat, me) => {
      let title = '';
      let image = '';
      if (chat.sportunity){
        image = chat.sportunity.sport.sport.logo;
        title = chat.sportunity.title;
      }
      else if (chat.circle) {
        title = chat.circle.name ; 

        if (chat.messages && chat.messages.edges && chat.messages.edges.length > 0)
          image = chat.messages.edges[chat.messages.edges.length - 1].node.author.avatar;
        else {
          const userChat = chat.users.find((item) => item.id !== me.id);
          if (userChat)
            image = userChat.avatar;
        }
      }
      else{
        const userChat = chat.users.find((item) => item.id !== me.id);
        // app crashes if item.id === me.id (this needs to be checked)
        if (userChat) {
          title = userChat.pseudo;
          image = userChat.avatar;
        }

      }
      return { title, image };
  }

  render() {
    const { chat, goToChat, me } = this.props
    const { title, image } = this.infoChat(chat, me);

    if (!(chat.messages && chat.messages.edges && chat.messages.edges.length > 0))
      return null;
    else
      return (
        <View style={styles.markerOverlayContainer}>
          <TouchableOpacity style={styles.container} onPress={() => goToChat(chat, title)}>
            <View style={styles.content}>
              <View style={styles.imageContainer}>
                <Image style={Object.assign(styles.icon, { tintColor: chat.sportunity ? colors.blue : null })} source={{ uri: image }} />
              </View>
              <Message messages={chat.messages} title={title} isRead={chat.read}/>
            </View>
          </TouchableOpacity>
        </View>
      )
  }
}

ChatItem.propTypes = {
  chat: PropTypes.object.isRequired,
  id: PropTypes.number,
  goToChat: PropTypes.func.isRequired,
};


export default createFragmentContainer(ChatItem, {
  chat: graphql`
    fragment ChatItem_chat on Chat{
      id,
      read
      messages (last: 20) {
        ...Message_messages
        edges {
          node {
            id
            created
            author {
              id
              pseudo
              avatar
            }
          }
        }
      }
      circle {
        id
        name 
        owner {
          id
          pseudo
          avatar
        }
      }
      sportunity{
        id
        title
        sport{
          sport {
            logo
          }
        }
      },
      users{
        id
        pseudo
        avatar
      }
    }`,
  },
)

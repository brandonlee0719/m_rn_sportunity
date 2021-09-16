// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker } from 'react-native';
import ModalPicker from 'react-native-modal-selector';

import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../Button/roundedButton';
import Input, {inputStyles} from '../../../Input';
import {ListBlock, ListBlockItem} from '../../../ListBlock';
import Toast from 'react-native-simple-toast';
import Rating from 'react-native-easy-rating';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../../Header';

type FeedbackType = {
  type: 'user',
  userID: string
} | {
  type: 'venue',
  venueID: string
}

type AddFeedbackModal$State = {
  text: string,
  to: number,
  rating?: number
};

type AddFeedbackModal$Props = {
  users: Array<{pseudo: string, id: string}>,
  venue: {name: string, id: string},
  onFeedback: (feedback: {text: string, to: FeedbackType, rating: number}) => void,
  onClose: () => void,
  show: boolean
};

class AddFeedbackModal extends React.Component {
  props: AddFeedbackModal$Props;
  state: AddFeedbackModal$State = {
    text: '',
    to: 0,
  };

  onFeedback = () => {
    // console.log(this.state.to)
    // console.log(this.props.users)
    // if(!this.state.to){
    //   return Toast.show(I18n.t('sportunityToastSelectFeedback'));
    // }
    // const to = (this.state.to === 1)
    //   ? { type: 'venue', venueID: this.props.venue && this.props.venue.id }
    //   : { type: 'user', userID: this.props.users[0].id }
    //
    // if(this.state.text.length > 600){
    //   return Toast.show(I18n.t('sportunityToastFeedbaclLength'));
    // }
    const to = { type: 'user', userID: this.props.users[0].id }
    this.props.onFeedback({
      to,
      text: this.state.text,
      rating: this.state.rating || 0,
    });
  }

  hasAlreadyPostedAFeedback = (organizer, me) => {
    let result = false ;
    organizer.feedbacks.feedbacksList.edges.forEach(feedback => {
      if (feedback.node.author.id === me.id)
          result = true;
    })
    return result;

  }

  selectUserTo = (user) => {
    if (!this.hasAlreadyPostedAFeedback(this.props.users.find(u => u.id === user.key), this.props.me))
      this.setState({to: user});
    else 
      Toast.show(I18n.t('sportunityToastFeedbackAlreadySent'));
  }

  render() {
    const { users, venue, onFeedback, onClose, show } = this.props;
    const pickerTarget = users.map(user => ({ key: user.id, label: user.pseudo }))

    venue && pickerTarget.push({ key: 'venue', label: `Venue: ${venue && venue.name}` });

    return (
      <View>
        <Modal
            animationType={'slide'}
            transparent={false}
            visible={show}
            onRequestClose={onClose}>
          <Header 
            onPressFunc={onClose}
            imgSrc={images.down_arrow}
            text={I18n.t('sportunityFeedbackAdd')}
          />

          <View style={styles.textRow}>
              <Text style={styles.labelText}>
                  {I18n.t('sportunityFeedbackTo')}
              </Text>
              <ModalPicker
                data={pickerTarget}
                initValue={I18n.t('select')}
                onChange={to=>this.selectUserTo(to)}
                cancelText={I18n.t('cancel')}
              />
          </View>

          <Input
            updateText={(text) => this.setState({ text })}
            defaultValue={this.state.text}
            placeholder={I18n.t('sportunityFeedbackEnter')}
            inputIconStyles={inputStyles.icon}/>

          <View style={styles.rating}>
            <Rating
              rating={this.state.rating}
              onRate={(rating) => this.setState({ rating })}
            />
          </View>

          <Button onPress={this.onFeedback} disabled={this.state.to === 0}>
            {I18n.t('save')}
          </Button>

        </Modal>

      </View>
    )
  }
}

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
  rating: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  picker: StyleSheet.flatten([inputStyles.inputContainer, {
    color: colors.skyBlue
  }]),
  icon: {
    marginLeft: metrics.baseMargin,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    flex: 4
  },
});

AddFeedbackModal.propTypes = {
  venue: PropTypes.object,
  users: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default AddFeedbackModal;

I18n.fallbacks = true
I18n.translations = translations;

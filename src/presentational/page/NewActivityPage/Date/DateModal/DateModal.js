import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { updateDateModal } from 'sportunity/src/action/newActivityActions';
import style from './style';

import CalendarDate from './CalendarDate/CalendarDate.js';
import FromTo from './FromTo/FromTo.js';
import Repeat from './Repeat/Repeat.js';
import Heading from '../../Heading';

class DateModal extends Component{
  render() {
    const { heading } = this.props;
    
    return(
      <View>
          <View style={style.container}>
            {
              Platform.OS === "android" 
              ?
                <ScrollView>
                  {heading && <Heading text={heading} /> }
                  <CalendarDate />

                  <FromTo />

                  <Repeat />

                </ScrollView>
              :
                <KeyboardAvoidingView behavior={'position'} style={{flex: 1}} >
                  {heading && <Heading text={heading} /> }
                  <ScrollView>
                    <CalendarDate />

                    <FromTo />

                    <Repeat />

                  </ScrollView>
                </KeyboardAvoidingView>
            }
          </View>

      </View>
    )
  }
}
DateModal.propTypes = {
  isDateModalVisible: PropTypes.bool.isRequired,
  updateDateModal: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isDateModalVisible: state.sportunityNewActivity.isDateModalVisible,
});

const dispatchToProps = (dispatch) => ({
  updateDateModal: bindActionCreators(updateDateModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(DateModal);

I18n.fallbacks = true
I18n.translations = translations;

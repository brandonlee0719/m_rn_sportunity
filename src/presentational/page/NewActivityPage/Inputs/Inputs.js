import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTitle, updateDescription } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { Input, TextArea, Label } from '../../../UI/FormElements';

class Inputs extends Component {
  
  inputRefs = {};

  addTitle = (text) => {
    this.props.updateTitle(text);
  }

  addDescription = (text) => {
    this.props.updateDescription(text);
  }

  render() {
    const { activityTitle, activityDescription } = this.props; 

    return(
      <View>
        <View style={style.inputContainer}>
          <Label>
            {I18n.t('title')}
          </Label>

          <Input
            maxLength={30}
            placeholder={I18n.t('enterTitle')}
            onChangeText={this.addTitle}
            value={activityTitle}
            onSubmitEditing={(e) => this.inputRefs.description.focus()}
          />
        </View>

        <View style={style.textareaContainer}>
          <Label>
            {I18n.t('description')}
          </Label>

          <TextArea
            multiline
            maxLength={4000}
            numberOfLines={10}
            placeholder={I18n.t('enterDescription')}
            onChangeText={this.addDescription}
            value={activityDescription}
            ref={ref => this.inputRefs['description'] = ref}
          />
        </View>
      </View>
    )
  }
}

Inputs.propTypes = {
  activityTitle: PropTypes.string.isRequired,
  activityDescription: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateDescription: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  activityTitle: state.sportunityNewActivity.activityTitle,
  activityDescription: state.sportunityNewActivity.activityDescription,
});

const dispatchToProps = (dispatch) => ({
  updateTitle: bindActionCreators(updateTitle, dispatch ),
  updateDescription: bindActionCreators(updateDescription, dispatch ),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Inputs);

I18n.fallbacks = true
I18n.translations = translations;

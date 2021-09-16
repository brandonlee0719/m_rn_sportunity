import React, {Component} from 'react';
import { View, Switch } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { colors } from 'sportunity/src/theme';
import style from './style'
import { updateSaveTemplateSwitch } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class SaveTemplateButton extends Component {
  render() {
    const { 
      isSaveTemplateSwitchOn,
      selectedTemplate, 
      updateSaveTemplateSwitch
    } = this.props; 
  
    return(
        <View style={style.switchRow}>
            <Text style={style.labelText}>
                {selectedTemplate ? I18n.t('updateTemplate') : I18n.t('createTemplate')}
            </Text>
            <Switch
                onTintColor={colors.skyBlue}
                value={isSaveTemplateSwitchOn}
                onValueChange={updateSaveTemplateSwitch}
                style={style.switchButton}
            />
        </View>
    )
  }
}

const stateToProps = (state) => ({
    isSaveTemplateSwitchOn: state.sportunityNewActivity.isSaveTemplateSwitchOn,
    selectedTemplate: state.sportunityNewActivity.selectedTemplate
});

const dispatchToProps = (dispatch) => ({
    updateSaveTemplateSwitch: bindActionCreators(updateSaveTemplateSwitch, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(SaveTemplateButton);

I18n.fallbacks = true
I18n.translations = translations;

import PropTypes from 'prop-types';
import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';

import { updateRestrictionsModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import translations from 'sportunity/src/translations.js';

import AdvancedSettingsModal from './AdvancedSettingsModal/AdvancedSettingsModal';
import style from './style';
import FormListItem from '../../../UI/FormListItem';

const sexOptions = [
      { value: 'MALE', label: I18n.t('male') },
      { value: 'FEMALE', label: I18n.t('female') },
      { value: 'NONE', label: I18n.t('mixed') },
    ];


class AdvancedSettings extends React.Component { 
    constructor() {
        super ();
    }

    toggleRestrictionsModal = () => {
        if (this.props.isRestrictionsModalVisible) {
            this.props.updateRestrictionsModal(false);
        } else {
            this.props.updateRestrictionsModal(true);
        }
    }

    render() {
        const {
            viewer, 
            ageRestriction, 
            sexRestriction,
            updateRestrictionsModal,
            isRestrictionsModalVisible,
            user,
            language
        } = this.props; 

        return (
            <View>
                <AdvancedSettingsModal 
                    viewer={viewer} 
                    user={user}
                />
                <FormListItem
                    onPress={this.toggleRestrictionsModal}
                    title={I18n.t('adancedSettings')}
                    subtitle={() => (
                        <View>
                            {
                                sexRestriction === 'NONE' && ageRestriction.from === 0 && ageRestriction.to === 100 ?
                                    <Text style={style.select}>
                                        {I18n.t('select')}
                                    </Text>
                                :
                                    <View>
                                        {(sexRestriction !== 'NONE' || ageRestriction.from !== 0 || ageRestriction.to !== 100) && 
                                            <Text style={style.select}>
                                                {I18n.t('sex') + ': ' + sexOptions.find(sexOption => sexRestriction === sexOption.value).label + ' - '}
                                                {I18n.t('age') + ': ' + I18n.t('from') + ' ' + ageRestriction.from + ' ' + I18n.t('to') + ' ' + ageRestriction.to + ' ' + I18n.t('yearsOld')}
                                            </Text>
                                        }
                                    </View>
                                }
                        </View>
                    )}
                />
            </View>
        );
    }
}

AdvancedSettings.propTypes = {
    ageRestriction: PropTypes.object.isRequired,
    sexRestriction: PropTypes.string.isRequired,
    updateRestrictionsModal: PropTypes.func.isRequired,
    isRestrictionsModalVisible:  PropTypes.bool.isRequired,
    viewer: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
    ageRestriction: state.sportunityNewActivity.ageRestriction,
    sexRestriction: state.sportunityNewActivity.sexRestriction,
    isRestrictionsModalVisible: state.sportunityNewActivity.isRestrictionsModalVisible,
    language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
    updateRestrictionsModal: bindActionCreators(updateRestrictionsModal, dispatch)
})

const ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(AdvancedSettings);

export default createFragmentContainer(ReduxContainer, {
    user: graphql`
        fragment AdvancedSettings_user on User {
            id
        }
    `,
    viewer: graphql`
        fragment AdvancedSettings_viewer on Viewer {
            id,
            ...AdvancedSettingsModal_viewer
        }
    `,
});

I18n.fallbacks = true
I18n.translations = translations;

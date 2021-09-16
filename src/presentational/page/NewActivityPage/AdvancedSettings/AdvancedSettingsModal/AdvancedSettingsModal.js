import PropTypes from 'prop-types';
import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import ModalPicker from 'react-native-modal-selector';

import { updateRestrictionsModal, updateSexRestriction, updateAgeRestriction } from 'sportunity/src/action/newActivityActions';
import Button from './Button/Button';
import icons from 'sportunity/src/theme/images';
import style from './style';
import buttonStyle from '../style';
import { colors, metrics } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../../../Header';

class AdvancedSettingsModal extends React.Component { 
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

    updateAgeFrom = (value) => {
        if (value === "")
            value = 0
        if (!isNaN(value) && parseInt(value) <= 100)    
            this.props.updateAgeRestriction({
                from: parseInt(value),
                to: this.props.ageRestriction.to
            })
    }

    updateAgeTo = (value) => {
        if (value === "")
            value = 0
        if (!isNaN(value) && parseInt(value) <= 100)
            this.props.updateAgeRestriction({
                from: this.props.ageRestriction.from,
                to: parseInt(value)
            })
    }

    render() {
        const {
            viewer, 
            sexRestriction, 
            ageRestriction,
            updateRestrictionsModal, 
            isRestrictionsModalVisible,
            updateSexRestriction,
            updateAgeRestriction,
            language,
            } = this.props; 

        const sexRestrictionList = [{key:"NONE", label: I18n.t('mixed')}, {key: "MALE", label: I18n.t('male')},{key: "FEMALE", label: I18n.t('female')}];

        return(
            <View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={isRestrictionsModalVisible}
                onRequestClose={this.toggleRestrictionsModal}
            >
                <Header 
                    onPressFunc={this.toggleRestrictionsModal}
                    imgSrc={icons.down_arrow}
                    text={I18n.t('adancedSettings')}
                />
                {/* <View style={style.header}>
                    <TouchableOpacity
                        onPress={this.toggleRestrictionsModal}
                        style={style.icon}
                    >
                        <Image
                        source={icons.down_arrow}
                        />
                    </TouchableOpacity>

                    <Text style={style.title}>
                        {I18n.t('adancedSettings')}
                    </Text>
                </View> */}
                <ScrollView >
                    <View style={[style.row, {paddingRight: 25}]}>

                        <Text style={style.label}>
                            {I18n.t('sex')}
                        </Text>

                        <ModalPicker
                            data={sexRestrictionList}
                            initValue={sexRestrictionList.find(item => item.key === sexRestriction).label}
                            onChange={value=>updateSexRestriction(value.key)}
                            cancelText={I18n.t('cancel')}
                        />
                    </View>

                    <View style={style.row}>

                        <Text style={style.label}>
                            {I18n.t('age')}
                        </Text>
                        <View style={style.column}>
                            <View style={style.inputGroup}>
                                <Text style={style.smallLabel}>
                                    {I18n.t('from')}
                                </Text>
                                <TextInput
                                    style={style.input}
                                    autoCorrect={false}
                                    placeholderTextColor="silver"
                                    placeholder="0"
                                    value={ageRestriction.from.toString()}
                                    autoCapitalize="none"
                                    selectionColor="#ffffff"
                                    keyboardType="numeric"
                                    underlineColorAndroid={colors.skyBlue}
                                    onChangeText={this.updateAgeFrom} 
                                    />
                                <Text style={style.smallLabel}>
                                    {I18n.t('yearsOld')}
                                </Text>
                            </View>
                            <View style={style.inputGroup}>
                                <Text style={style.smallLabel}>
                                    {I18n.t('to')}
                                </Text>
                                <TextInput
                                    style={style.input}
                                    autoCorrect={false}
                                    placeholderTextColor="silver"
                                    placeholder="0"
                                    value={ageRestriction.to.toString()}
                                    autoCapitalize="none"
                                    selectionColor="#ffffff"
                                    keyboardType="numeric"
                                    underlineColorAndroid={colors.skyBlue}
                                    onChangeText={this.updateAgeTo} 
                                    />
                                <Text style={style.smallLabel}>
                                    {I18n.t('yearsOld')}
                                </Text>
                            </View>
                        </View>
                    </View>
                
                    </ScrollView>
                <Button /> 
            </Modal>

            </View>
        )
    }
}

AdvancedSettingsModal.propTypes = {
    updateRestrictionsModal: PropTypes.func.isRequired,
    isRestrictionsModalVisible: PropTypes.bool.isRequired,
    sexRestriction: PropTypes.string.isRequired,
    ageRestriction: PropTypes.object.isRequired,
    updateSexRestriction: PropTypes.func.isRequired,
    updateAgeRestriction: PropTypes.func.isRequired,
    viewer: PropTypes.object.isRequired,
};


const stateToProps = (state) => ({
    isRestrictionsModalVisible: state.sportunityNewActivity.isRestrictionsModalVisible,
    sexRestriction: state.sportunityNewActivity.sexRestriction,
    ageRestriction: state.sportunityNewActivity.ageRestriction,
    language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
    updateRestrictionsModal: bindActionCreators(updateRestrictionsModal, dispatch),
    updateSexRestriction: bindActionCreators(updateSexRestriction, dispatch),
    updateAgeRestriction: bindActionCreators(updateAgeRestriction, dispatch),
});

const ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(AdvancedSettingsModal);

export default createRefetchContainer(ReduxContainer, {
    viewer: graphql`
        fragment AdvancedSettingsModal_viewer on Viewer {
            id
        }
    `
});

I18n.fallbacks = true
I18n.translations = translations;

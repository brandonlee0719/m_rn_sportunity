import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { Platform, Modal, TouchableOpacity, ScrollView, View, Image, KeyboardAvoidingView} from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import style from './style';

class FilterModal extends PureComponent {
    constructor(props) {
        super(props)
    }

    render = () => {
        const { isModalVisible, onRequestClose, title, displayValidationButton, onValidate, scrollable } = this.props
        return(
            <View>
                <Modal
                animationType={'slide'}
                transparent={false}
                visible={isModalVisible}
                onRequestClose={onRequestClose}
                >
                    <View style={{flex :1, flexDirection: 'column',}}>
                        <View style={style.header}>
                            <TouchableOpacity
                                onPress={onRequestClose}
                                style={style.icon}
                            >
                                <Image
                                    source={icons.down_arrow}
                                />
                            </TouchableOpacity>

                            <Text style={style.title}>
                                {title}
                            </Text>
                        </View>
                        {scrollable
                        ?   <ScrollView >
                                {this.props.children}
                            </ScrollView>
                        :   this.props.children}
                        {displayValidationButton &&
                            <TouchableOpacity style={style.validationButtonContainer} onPress={typeof onValidate !== 'undefined' ? onValidate : onRequestClose}>
                                <Text style={style.validationButton}>OK</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </Modal>

            </View>
        )
    }
}
FilterModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterModal;

I18n.fallbacks = true
I18n.translations = translations;

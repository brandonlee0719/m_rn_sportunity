import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableHighlight, Text, TextInput, TouchableOpacity } from 'react-native';
import ModalPicker from 'react-native-modal-selector';

import FiltersListItem from '../FiltersListItem';
import FilterModal from '../FilterModal'
import { images } from '../../../../theme';
import { styles } from './style';
import { buttonStyle } from '../style'
import { colors } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class FilterDetailRestrictions extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    openClose = bool => this.setState({ isOpen: !this.state.isOpen })

    updateAgeFrom = (value) => {
        if (value === "")
            value = 0
        if (!isNaN(value) && parseInt(value) <= 100) {
            this.props.changeAgeRestriction({
                from: parseInt(value),
                to: this.props.ageRestriction && this.props.ageRestriction.to ? this.props.ageRestriction.to : 0
            });
        }
    }

    updateAgeTo = (value) => {
        if (value === "")
            value = 0
        if (!isNaN(value) && parseInt(value) <= 100) {
            this.props.changeAgeRestriction({
                from: this.props.ageRestriction && this.props.ageRestriction.from ? this.props.ageRestriction.from : 0,
                to: parseInt(value)
            });
        }
    }

    render() {
        const {
            changeSexRestriction,
            sexRestriction,
            ageRestriction,
            clearRestrictionFilter
        } = this.props;
        const sexOptions = [
            {key: '0', label: I18n.t('none'), value: null},
            {key: '1', label: I18n.t('mixed'), value:'NONE'},
            {key: '2', label: I18n.t('male'), value:'MALE'},
            {key: '3', label: I18n.t('female'), value:'FEMALE'}
        ];

        const { isOpen } = this.state ;

        return (
            <View>
                <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
                    <View style={buttonStyle.headerCol}>
                        <Text style={buttonStyle.headerText}>
                            {I18n.t('filterAdvancedSettings')}
                        </Text>
                        {sexRestriction || (ageRestriction && (ageRestriction.from !== 0 || ageRestriction.to !== 100 ))
                        ?   <View>
                                {sexRestriction &&
                                    <Text style={buttonStyle.select}>
                                        {I18n.t('sex') + ': ' + sexOptions.find(sexOption => sexRestriction === sexOption.value).label}
                                    </Text>
                                }
                                {ageRestriction && (ageRestriction.from !== 0 || ageRestriction.to !== 100 ) &&
                                    <Text style={buttonStyle.select}>
                                        {I18n.t('age') + ': ' + I18n.t('from') + ' ' + ageRestriction.from + ' ' + I18n.t('to') + ' ' + ageRestriction.to + ' ' + I18n.t('yearsOld')}
                                    </Text>
                                }
                            </View>
                        :    <Text style={buttonStyle.select}>
                                {I18n.t('select')}
                            </Text>
                        }
                    </View>
                    <Image
                        style={buttonStyle.headerIcon}
                        source={images.right_arrow_blue}
                    />
                </TouchableOpacity>
                {sexRestriction || (ageRestriction && (ageRestriction.from !== 0 || ageRestriction.to !== 100)) ?
                    <FiltersListItem
                    caption={I18n.t('clear')}
                    itemStyle={buttonStyle.footerViewStyle}
                    captionStyle={buttonStyle.footerCaptionStyle}
                    onPress={clearRestrictionFilter}
                    />
                    : null
                }
                {
                    isOpen &&
                    <FilterModal
                        isModalVisible={isOpen}
                        onRequestClose={() => this.setState({isOpen: false})}
                        title={I18n.t('filterAdvancedSettings')}
                        displayValidationButton={true}>
                        <View style={styles.container}>
                            <View style={styles.restriction}>
                                <Text>{I18n.t('sex')+ ': '}</Text>
                                <ModalPicker
                                    data={[
                                        {key: '0', label: I18n.t('none'), value: null},
                                        {key: '1', label: I18n.t('mixed'), value:'NONE'},
                                        {key: '2', label: I18n.t('male'), value:'MALE'},
                                        {key: '3', label: I18n.t('female'), value:'FEMALE'}
                                        ]}
                                    initValue={sexOptions.find(option => option.value === sexRestriction) && 
                                        sexOptions.find(option => option.value === sexRestriction).label}
                                    onChange={item => changeSexRestriction(item.value)}
                                    cancelText={I18n.t('cancel')}
                                    />
                            </View>
                            <View style={styles.restriction}>
                                <Text>{I18n.t('age')+ ': '}</Text>
                                <View style={styles.row}>
                                    <Text>{I18n.t('from')+ ' : '}</Text>
                                    <TextInput
                                        style={styles.input}
                                        autoCorrect={false}
                                        placeholderTextColor="silver"
                                        placeholder="0"
                                        value={ageRestriction && ageRestriction.from ? ageRestriction.from.toString() : null}
                                        autoCapitalize="none"
                                        selectionColor="#ffffff"
                                        keyboardType="numeric"
                                        underlineColorAndroid={colors.skyBlue}
                                        onChangeText={this.updateAgeFrom}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <Text>{I18n.t('to')+ ' : '}</Text>
                                    <TextInput
                                        style={styles.input}
                                        autoCorrect={false}
                                        placeholderTextColor="silver"
                                        placeholder="0"
                                        value={ageRestriction && ageRestriction.to ? ageRestriction.to.toString() : null}
                                        autoCapitalize="none"
                                        selectionColor="#ffffff"
                                        keyboardType="numeric"
                                        underlineColorAndroid={colors.skyBlue}
                                        onChangeText={this.updateAgeTo}
                                    />
                                </View>
                            </View>
                        </View>
                    </FilterModal>
                }
            </View>
        );
    };
}

FilterDetailRestrictions.propTypes = {
  changeSexRestriction: PropTypes.func.isRequired,
  changeAgeRestriction: PropTypes.func.isRequired,
  sexRestriction: PropTypes.string,
  ageRestriction: PropTypes.object
};

export default FilterDetailRestrictions;

I18n.fallbacks = true
I18n.translations = translations;

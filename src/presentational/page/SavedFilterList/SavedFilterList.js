import React, { PropTypes , Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { images, colors } from 'sportunity/src/theme';
import style from './style';

const SavedFilter = ({
    filterName: text, onFilterTouched, isFilterApplied}) => 
    <TouchableOpacity style={isFilterApplied ? style.appliedItemContainer : style.itemContainer} onPress={onFilterTouched}>
        <Text style={style.itemName}>
            {text}
        </Text>
    </TouchableOpacity>

const FilterButton = ({isFilterActive, openFilter}) => 
    <TouchableOpacity style={style.iconContainer} onPress={openFilter}>
        <Image source={images.filter} style={[style.filterIcon, {tintColor: isFilterActive ? colors.bloodOrange : colors.blue}]}/>
    </TouchableOpacity>

const SavedFilterList = ({
    filterList, 
    onFilterTouched, 
    appliedFilterId, 
    isFilterActive, 
    openFilterPage, 
    hideFilterButton = false, 
    hideNewFilterButton = true,
    onNewFilter,
    isNewFilter}) =>

    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={style.container}
    >
        {!hideFilterButton && 
            <FilterButton 
                isFilterActive={isFilterActive} 
                openFilter={openFilterPage}
            />
        }
        {!hideNewFilterButton && 
            <SavedFilter 
                filterName={I18n.t('newFilter')} 
                onFilterTouched={onNewFilter}
                isFilterApplied={isNewFilter}
            />
        }
        {filterList && filterList.length > 0 && 
            filterList.map((filter, index) => filter && 
                <SavedFilter 
                    key={index}
                    isFilterApplied={filter.id===appliedFilterId}
                    onFilterTouched={() => onFilterTouched(filter)}
                    {...filter} 
                />
            )
        }
    </ScrollView>

export default SavedFilterList;

I18n.fallbacks = true
I18n.translations = translations;
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';

import { addCoOrganizer, removeCoOrganizer, updateCoOrganizerModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import CoOrganizerModal from './CoOrganizerModal';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../UI/FormListItem';

const CoOrganizers = ({ viewer, user, addCoOrganizer, removeCoOrganizer, coOrganizers, isCoOrganizerModalVisible, updateCoOrganizerModal }) => {

  const openCloseModal = () => {
    if (isCoOrganizerModalVisible) {
      updateCoOrganizerModal(false);
    } else {
      updateCoOrganizerModal(true);
    }
  }

  return (
    <View>
      <CoOrganizerModal viewer={viewer} />
      <FormListItem
        onPress={openCloseModal}
        title={I18n.t('addCoOrganizer')}
        subtitle={() => (
          <View>
            {
              coOrganizers && coOrganizers.length > 0
              ? <Text style={style.select}>
                  {coOrganizers.length > 1
                  ? coOrganizers.length + ' ' + I18n.t('coOrganizers').toLowerCase()
                  : coOrganizers.length + ' ' + I18n.t('coOrganizer').toLowerCase()
                  }
                </Text>
              : <Text style={style.select}>
                  {I18n.t('select')}
                </Text>
            }
          </View>
        )}
      />
    </View>
  )
}

const stateToProps = (state) => ({
    coOrganizers: state.sportunityNewActivity.coOrganizers,
    isCoOrganizerModalVisible: state.sportunityNewActivity.isCoOrganizerModalVisible
});

const dispatchToProps = (dispatch) => ({
    addCoOrganizer: bindActionCreators(addCoOrganizer, dispatch),
    removeCoOrganizer: bindActionCreators(removeCoOrganizer, dispatch),
    updateCoOrganizerModal: bindActionCreators(updateCoOrganizerModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(CoOrganizers);

I18n.fallbacks = true
I18n.translations = translations;

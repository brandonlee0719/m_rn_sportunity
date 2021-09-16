import PropTypes from 'prop-types';
import React from 'react';
import { View  } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNumberModal } from 'sportunity/src/action/newActivityActions';
import style from './style';
import NumberModal from './NumberModal/NumberModal.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../UI/FormListItem';

const Number = ({
  updateNumberModal,
  minimumNumber,
  maximumNumber,
  exactlyNumber,
  isNumberModalVisible,
  isExactlySwitchOn,
  isUserParticipant,
  isUpdating,
  viewer,
}) => {

  const openCloseNumberModal = () => {
    if (isNumberModalVisible) {
      updateNumberModal(false);
    } else {
      updateNumberModal(true);
    }
  }

  return (
    <View>
      <NumberModal viewer={viewer} isUpdating={isUpdating}/>
      <FormListItem
        onPress={openCloseNumberModal}
        title={I18n.t('numberOfParticipants')}
        subtitle={() => (
          <View>
            {
              !isExactlySwitchOn &&
              (minimumNumber <= 0 || maximumNumber <= 0) ?
                <Text style={style.select}>
                  {I18n.t('select')}
                </Text> :
                  null
            }
            {
              !isExactlySwitchOn &&
              minimumNumber > 0 &&
              maximumNumber > 0 ?
                <Text style={style.select}>
                  {minimumNumber} - {maximumNumber}
                </Text> :
                  null
            }
            {
              isExactlySwitchOn &&
              exactlyNumber <= 0 ?
                <Text style={style.select}>
                  {I18n.t('select')}
                </Text> :
                  null
            }
            {
              isExactlySwitchOn &&
              exactlyNumber > 0 ?
                <Text style={style.select}>
                  {exactlyNumber}
                </Text> :
                  null
            }
            {
              isUserParticipant ?
                <Text style={style.select}>
                  {I18n.t('includingYou')}
                </Text> :
                  null
            }
          </View>
        )}
      />
    </View>
  );
}

Number.propTypes = {
  updateNumberModal: PropTypes.func.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  exactlyNumber: PropTypes.number.isRequired,
  isExactlySwitchOn: PropTypes.bool.isRequired,
  isNumberModalVisible: PropTypes.bool.isRequired,
  isUserParticipant: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isNumberModalVisible: state.sportunityNewActivity.isNumberModalVisible,
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  exactlyNumber: state.sportunityNewActivity.exactlyNumber,
  isUserParticipant: state.sportunityNewActivity.isUserParticipant,
});

const dispatchToProps = (dispatch) => ({
  updateNumberModal: bindActionCreators(updateNumberModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Number);

I18n.fallbacks = true
I18n.translations = translations;

import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDateModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import DateModal from './DateModal/DateModal.js';
import I18n from 'react-native-i18n';
import moment from 'moment';
import translations from 'sportunity/src/translations.js';

const Date = ({
  updateDateModal,
  isDateModalVisible,
  newActivityDate,
  newActivityEndDate,
  fromHour,
  fromMinute,
  toHour,
  toMinute,
  isRepeatSwitchOn,
  repeatValue,
  isDateUpdatable
}) => {

  const openCloseDateModal = () => {
    if (!isDateUpdatable)
      return ;

    if (isDateModalVisible) {
      updateDateModal(false);
    } else {
      updateDateModal(true);
    }
  }

  return(
    <View>
      <DateModal
        isDateModalVisible={isDateModalVisible}
        openCloseDateModal={openCloseDateModal}
        newActivityDate={newActivityDate}
        newActivityEndDate={newActivityEndDate}
        fromHour={fromHour}
        fromMinute={fromMinute}
        toHour={toHour}
        toMinute={toMinute}
        isRepeatSwitchOn={isRepeatSwitchOn}
        repeatValue={repeatValue}
      />
      <TouchableOpacity
        style={isDateUpdatable ? style.container : style.blockedContainer}
        onPress={openCloseDateModal}
      >
        <View style={style.subContainer}>
          <Text style={style.text}>
            {I18n.t('date')}
          </Text>
          {newActivityDate === '' || fromHour === 0 || toHour === 0 
            ? <Text style={style.select}>
                {I18n.t('select')}
              </Text> 
            : <View>
                {moment(newActivityDate, 'MMMM DD YYYY').isSame(moment(newActivityEndDate, 'MMMM DD YYYY'))
                ?
                  <View>
                    <Text style={style.select}>{moment(newActivityDate, 'MMMM DD YYYY').format('dddd DD MMMM YYYY')}</Text>
                    <Text style={style.select}>
                      {I18n.t('from') + ' ' + 
                        moment(newActivityDate, 'MMMM DD YYYY HH:mm').format('HH:mm') + ' ' + 
                        I18n.t('to') + ' ' + 
                        moment(newActivityEndDate, 'MMMM DD YYYY HH:mm').format('HH:mm')
                        }
                        
                      </Text>
                  </View>
                : <View>
                    <Text style={style.select}>
                      {I18n.t('starts')}: {newActivityDate}
                    </Text>
                    <Text style={style.select}>
                      {I18n.t('ends')}: {newActivityEndDate}
                    </Text>
                  </View>
                }
                {
                  isRepeatSwitchOn ?
                    <Text style={style.select}>
                      {repeatValue} {I18n.t('repeatWeekly').toLowerCase()}
                    </Text> : null
                }
              </View>
            }
        </View>
        {isDateUpdatable && 
          <Image
            style={style.icon}
            source={icons.right_arrow_blue}
          />
        }
      </TouchableOpacity>
    </View>
  )
}

Date.propTypes = {
  updateDateModal: PropTypes.func.isRequired,
  isDateModalVisible: PropTypes.bool.isRequired,
  newActivityDate: PropTypes.string.isRequired,
  newActivityEndDate: PropTypes.string.isRequired,
  fromHour: PropTypes.string.isRequired,
  fromMinute: PropTypes.string.isRequired,
  toHour: PropTypes.string.isRequired,
  toMinute: PropTypes.string.isRequired,
  isRepeatSwitchOn: PropTypes.bool.isRequired,
  repeatValue: PropTypes.string,
  isDateUpdatable: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isDateModalVisible: state.sportunityNewActivity.isDateModalVisible,
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  fromHour: state.sportunityNewActivity.fromHour,
  fromMinute: state.sportunityNewActivity.fromMinute,
  toHour: state.sportunityNewActivity.toHour,
  toMinute: state.sportunityNewActivity.toMinute,
  isRepeatSwitchOn: state.sportunityNewActivity.isRepeatSwitchOn,
  repeatValue: state.sportunityNewActivity.repeatValue,
  isDateUpdatable: state.sportunityNewActivity.isDateUpdatable,
});

const dispatchToProps = (dispatch) => ({
  updateDateModal: bindActionCreators(updateDateModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Date);

I18n.fallbacks = true
I18n.translations = translations;

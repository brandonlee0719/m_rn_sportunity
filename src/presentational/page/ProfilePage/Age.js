import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, StyleSheet, TouchableOpacity, ActionSheetIOS, Platform, Picker } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './infoContentStyles';
import { metrics, colors } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import AgeMutation from './AgeMutation.js';
import DatePicker from 'react-native-datepicker';

const isIOS = Platform.OS === 'ios';

class Age extends PureComponent {

  constructor(){
    super();
    this.state = {
      isModalVisible: false,
      isBirthdayModalVisible: false,
      birthday: null,
      hideMyAge: null
    }
  }

  componentDidMount = () => {
    this.setState({
      birthday: this.props.birthday,
      hideMyAge: this.props.hideMyAge
    })
  }

  showInput = () => {
    this.setState({
      isModalVisible: true,
    })
  }

  showAddBirthday = () => {
    this.setState({
      isBirthdayModalVisible: true
    })
  }

  submitHideMyAgeChange = (value) => {

    const viewer = this.props.viewer;
    const userIDVar = this.props.viewer.me.id;
    const hideMyAgeVar = value;

    AgeMutation.commit({
        userID: this.props.viewer.me.id,
        user: {
          hideMyAge: hideMyAgeVar,
        },
      },
      () => {
        Toast.show(I18n.t('hideMyAgeUpdated'));
        this.setState({
          isModalVisible: false,
          hideMyAge: value
        });
      },
      error => {
        let errors = JSON.parse(error.getError().source);
        console.log(errors);
      },
    );
  }

  submitAgeChange = (value) => {
    /*if (this._getAge(value) < 18) {
      Toast.show(I18n.t('registerToastUnder18'))
      this.setState({
          isBirthdayModalVisible: false
        });
      return ;
    }*/

    AgeMutation.commit({
      userID: this.props.viewer.me.id,
      user: {
        birthday: value
      },
    },
    () => {
      Toast.show(I18n.t('hideMyAgeUpdated'));
      this.setState({
        isBirthdayModalVisible: false,
        birthday: value
      });
    },
    error => {
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  _getAge = (birthday) => {

    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  render(){
    const { birthday, hideMyAge, viewer } = this.props;

    return(
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.capitalWord}>
              {I18n.t('age') + '  '}
            </Text>
            {
              !this.state.isBirthdayModalVisible && !this.state.isModalVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
                <TouchableOpacity
                  style={styles.addContainer}
                  onPress={this.showAddBirthday}
                >
                  <Icon name="pencil" color={colors.charcoal} size={18} />
                </TouchableOpacity>
              }
          </View>
          {
            this.state.isBirthdayModalVisible ?
              <View style={styles.textareaContainer}>
                <DatePicker
                  style={style.datePicker}
                  date={this.state.birthday}
                  mode="date"
                  placeholder={I18n.t('accountBirthday')}
                  format="YYYY-MM-DD"
                  minDate="1900-01-01"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      tintColor: colors.backgroundColor,
                      left: 0,
                      marginLeft: 0,
                      backgroundColor: '#ffffff',
                    },
                    dateInput: {
                      width: '100%',
                      borderWidth: 0,
                    },
                  }}
                  onDateChange={(value) => this.submitAgeChange(value)}
                />
              </View>
            :
              <Text style={styles.text}>
                { this.state.birthday
                  ?
                    this._getAge(this.state.birthday) + ' ' + I18n.t('yearsOld') || ''
                  :
                    I18n.t('ageNotProvided')
                }
                <Text>
                  {viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) ?
                    this.state.hideMyAge ? ' ('+I18n.t('hideMyAgeHidden')+')' : ' ('+I18n.t('hideMyAgeShown')+')'
                    : '' }
                </Text>
              </Text>
          }
        </View>
        {
          !this.state.isModalVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id)
            ?
            <View>
              {!this.state.isModalVisible &&
                <TouchableOpacity
                  style={{ marginLeft: 15, marginBottom: 5 }}
                  onPress={this.showInput}
                >
                  <Text style={{ flex: 1, color: colors.charcoal }}>
                    {I18n.t('hideShowButton')}
                  </Text>
                </TouchableOpacity>
              }
              
            </View>
          :
            <Fragment>
              {isIOS
              ?
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    options: [I18n.t('hideMyAgeShow'), I18n.t('hideMyAgeHide'), I18n.t('cancel')],
                    cancelButtonIndex: 2.
                  },
                  (buttonIndex) => {
                    if (buttonIndex === 0) {
                      this.submitHideMyAgeChange(false);
                    } else if (buttonIndex === 1) {
                      this.submitHideMyAgeChange(true);
                    } else if (buttonIndex === 2) {
                      this.setState({ isModalVisible: false });
                    }
                  }
                )
              :
                <Picker
                  style={style.picker}
                  selectedValue={this.state.hideMyAge}
                  onValueChange={value=>this.submitHideMyAgeChange(value)}
                  mode="dialog"
                >
                  <Picker.Item key="1" label={I18n.t('hideMyAgeShow')} value={false} />
                  <Picker.Item key="2" label={I18n.t('hideMyAgeHide')} value={true} />
                </Picker>
              }
            </Fragment>
        }
      </View>
    )
  }

}

Age.propTypes = {
  birthday: PropTypes.string,
  viewer: PropTypes.object.isRequired,
};

export default Age;

const style = StyleSheet.create({
  datePicker: {
    alignSelf: 'center',
    width: 200,
    marginHorizontal: metrics.doubleBaseMargin + metrics.baseMargin,
  },
  picker: {
    color: colors.skyBlue,
  },
});

I18n.fallbacks = true
I18n.translations = translations;

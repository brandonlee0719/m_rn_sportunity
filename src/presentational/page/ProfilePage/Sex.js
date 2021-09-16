import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, StyleSheet, TouchableOpacity, Picker, Platform, ActionSheetIOS } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './infoContentStyles';
import translations from 'sportunity/src/translations.js';
import SexMutation from './SexMutation.js';

const isIOS = Platform.OS === 'ios';

class Sex extends PureComponent {

  constructor(){
    super();

    this.state = {
      isModalVisible: false,
      sex: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      sex: this.props.sex,
    })
  }

  showInput = () => {
    this.setState({
      isModalVisible: true
    })
  }

  submitSexChange = (value) => {
    const viewer = this.props.viewer;
    const userIDVar = this.props.viewer.me.id;
    const sexVar = value;

    SexMutation.commit({
      userID: userIDVar,
      user: {
        sex: sexVar,
      },
    },
    () => {
      Toast.show(I18n.t('sexUpdated'));
      this.setState({
        isModalVisible: false,
        sex: value
      });
    },
    error => {
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  render(){
    const { sex, viewer } = this.props;

    const sexOptions = [
      { value: '', label: '' },
      { value: 'MALE', label: I18n.t('male')},
      { value: 'FEMALE', label: I18n.t('female') },
      { value: 'OTHER', label: I18n.t('other') },
    ];

    return(
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.capitalWord}>
              {I18n.t('gender') + '  '}
            </Text>
            {!this.state.isModalVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
              <TouchableOpacity
                style={styles.addContainer}
                onPress={this.showInput}
              >
                <Icon name="pencil" color={colors.charcoal} size={18} />
              </TouchableOpacity>
            }
          </View>
          <Text style={styles.text}>
            { sex
              ?
                sexOptions.find(sexOption => sexOption.value === sex).label
              :
                I18n.t('sexNotProvided')
            }
          </Text>
        </View>
        {
          this.state.isModalVisible &&
            <Fragment>
              {isIOS
              ?
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    options: [I18n.t('other'), I18n.t('male'), I18n.t('female'), I18n.t('cancel')],
                    cancelButtonIndex: 3,
                  },
                  (buttonIndex) => {
                    if (buttonIndex === 0) {
                      this.submitSexChange('OTHER');
                    } else if (buttonIndex === 1) {
                      this.submitSexChange('MALE');
                    } else if (buttonIndex === 2) {
                      this.submitSexChange('FEMALE');
                    } else if (buttonIndex === 3) {
                      this.setState({
                        isModalVisible: false,
                      });
                    }
                  }
                )
              :
                <Picker
                  style={style.picker}
                  selectedValue={this.state.sex}
                  onValueChange={value=>this.submitSexChange(value)}
                  mode="dialog" >
                  <Picker.Item key="1" label={I18n.t('other')} value='OTHER'/>
                  <Picker.Item key="2" label={I18n.t('male')} value='MALE'/>
                  <Picker.Item key="3" label={I18n.t('female')} value='FEMALE'/>
                </Picker>
              }
            </Fragment>
        }
      </View>
    )
  }

}

Sex.propTypes = {
  sex: PropTypes.string,
  viewer: PropTypes.object.isRequired,
};

export default Sex;

const style = StyleSheet.create({
  picker: {
    color: colors.skyBlue
  },
});

I18n.fallbacks = true
I18n.translations = translations;

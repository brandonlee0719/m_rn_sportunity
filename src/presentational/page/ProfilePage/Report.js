import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import ReportMutation from './ReportMutation.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class Report extends PureComponent {

  constructor() {
    super();

    this.state = {
      reportText: '',
    }
  }

  updateReportText = (text) => {
    this.setState({
      reportText: text,
    })
  }

  reportUser = () => {
    const viewer = this.props.viewer;
    const userIDVar = this.props.viewer.user.id;
    const reasonVar = this.state.reportText;

    ReportMutation.commit({
        userID: userIDVar,
        reason: reasonVar,
    },
    () => {
      Toast.show(I18n.t('reportSuccess'));
    },
    error => {
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  render() {
    return(
      <View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {I18n.t('reportUser')}
          </Text>
        </View>


        <View style={styles.container}>

          <View style={styles.textAreaContainer}>
            <TextInput
              multiline
              style={styles.textAreaInput}
              placeholder={I18n.t('reportMessage')}
              placeholderTextColor={colors.darkGrey}
              numberOfLines={10}
              clearTextOnFocus
              onChangeText={(text) => this.updateReportText(text)}
            />
            <Image
              style={styles.textAreaIcon}
              source={images.pen}
            />
          </View>
          {
            this.state.reportText !== '' &&
              <TouchableOpacity
                style={styles.reportButton}
                onPress={this.reportUser}
              >
              <Image
                style={styles.checkIcon}
                source={images.check}
              />
              </TouchableOpacity>
          }

        </View>

      </View>
    )
  }
}

export default createFragmentContainer(Report, {
  reporters: graphql`
    fragment Report_reporters on ReporterUser @relay(plural: true){
      id
    }
  `,
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  headerText: {
    marginLeft: 5,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
  },
  textAreaContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    maxHeight: 70,
    backgroundColor: 'transparent',
    marginBottom: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
  },
  textAreaInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
    height: 70,
    maxHeight: 70,
    fontSize: fonts.size.small,
  },
  textAreaIcon: {
    position: 'absolute',
    right: 10,
    height: 15,
    width: 15,
    bottom: 10,
  },
  reportButton: {
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: metrics.baseMargin,
    // marginTop: metrics.baseMargin,
    // marginHorizontal: metrics.doubleBaseMargin,
    width: 22,
    height: 22,
    borderRadius: 16,
  },
  checkIcon: {
    tintColor: colors.snow,
    width: 17,
    height: 17,
  },
});

I18n.fallbacks = true
I18n.translations = translations;

import React, { Component } from 'react';
import {createRefetchContainer, graphql} from 'react-relay';
import { PropTypes } from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import cloneDeep from 'lodash/cloneDeep';
import { isEqual } from 'lodash';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';

import Button from '../../../Button/roundedButton';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../../Header';
import UpdateUserMutation from './Mutations/UpdateUserStatMutation'
import UpdateStatisticPreferencesMutation from './Mutations/UpdateStatisticPreferencesMutation'
import { updateStepsCompleted } from '../../../../action/profileActions';

class StatisticsPreferences extends React.Component {
  state: UserAccount$State;

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      isStatActivatedSwitchOn: false,
      isStatPublicSwitchOn: false,
      stat1: '',
      stat2: '',
      stat3: '',
      stat4: '',
      stat5: '',
      isLoaded: false,
    };
  }

    componentDidMount = () => {
      if (this.props.forceOpen) {
        this._handleOpen();
      }
    }

    fetchData = () => {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        userID: this.props.user.id
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
      );
    }

    componentDidUpdate(prevProps) {
      if (prevProps.forceOpen !== this.props.forceOpen && this.props.forceOpen) {
        this._handleOpen();
      }
    }

    componentWillReceiveProps = (nextProps) => {
      if ((!isEqual(this.props.viewer.statisticPreferences, nextProps.viewer.statisticPreferences))
        || (!this.state.isLoaded && nextProps.viewer && nextProps.viewer.statisticPreferences && nextProps.user)) {
        this.setValues(nextProps)
        this.setState({isLoaded: true})
      }
    }

    setValues = (props) => {
      const {statisticPreferences} = props.viewer ;
      if (!statisticPreferences) return;

      let isStatPublicSwitchOn = statisticPreferences.private;
      const isManOfTheGameActivated = statisticPreferences.isManOfTheGameActivated;

      this.setState({
          isStatPublicSwitchOn: !isStatPublicSwitchOn,
          isManOfTheGameActivated,
      })

      this.setState({
        stat1: statisticPreferences.userStats.stat1 && statisticPreferences.userStats.stat1.name || '',
        stat2: statisticPreferences.userStats.stat2 && statisticPreferences.userStats.stat2.name || '',
        stat3: statisticPreferences.userStats.stat3 && statisticPreferences.userStats.stat3.name || '',
        stat4: statisticPreferences.userStats.stat4 && statisticPreferences.userStats.stat4.name || '',
        stat5: statisticPreferences.userStats.stat5 && statisticPreferences.userStats.stat5.name || '',
      })

      this.setState({
        isStatActivatedSwitchOn: props.user.areStatisticsActivated
      })
    }

    handleStatPublicChange = () => {
      this.setState({
          isStatActivatedSwitchOn: !this.state.isStatActivatedSwitchOn
      })
    }

    handleStatActivatedChange = () => {
      this.setState({
          isStatActivatedSwitchOn: !this.state.isStatActivatedSwitchOn
      })
    }

    handleStatPublicChange = () => {
      this.setState({
          isStatPublicSwitchOn: !this.state.isStatPublicSwitchOn
      })
    }

    handleManOfTheGameChange = () => {
      this.setState({
          isManOfTheGameActivated: !this.state.isManOfTheGameActivated
      })
    }

    handleStatNameChange = (statName, text) => {
      this.setState({
          [statName]: text
      })
  }

    _handleOpen = () => {
      if (this.props.user && this.props.user.id)
        this.fetchData()
        
      this.setValues(this.props)
      this.setState({isModalVisible: true})
    }

    handleSavePress = () => {
      let userStatPrefs = {
        stat1: this.state.stat1,
        stat2: this.state.stat2,
        stat3: this.state.stat3,
        stat4: this.state.stat4,
        stat5: this.state.stat5,
      }
      if (this.state.isStatActivatedSwitchOn !== this.props.user.areStatisticsActivated) {
        let params = {
            userID: this.props.user.id,
            user: {
                areStatisticsActivated: this.state.isStatActivatedSwitchOn
            }
        } ;
        
        UpdateUserMutation.commit(params,
          () => {
            if (this.props.viewer.statisticPreferences &&
              ((this.state.isStatPublicSwitchOn !== !this.props.viewer.statisticPreferences.private) ||
              (this.state.isManOfTheGameActivated !== this.props.viewer.statisticPreferences.isManOfTheGameActivated))
            ) {
              let params = {
                userID: this.props.user.id,
                statisticPreferences: {
                  private: !this.state.isStatPublicSwitchOn,
                  userStats: userStatPrefs,
                  isManOfTheGameActivated: this.state.isManOfTheGameActivated
                },
              } ;
              UpdateStatisticPreferencesMutation.commit(params,
                () => {
                  Toast.show(I18n.t('accountStatisticsSavedSuccessful'));
                  this.setState({
                    isModalVisible: false
                  })
                  this.updateTutorialSteps();
                },
                (error) => {
                  Toast.show(I18n.t('accountStatisticsSavedFailed'));
                  console.log(error);
                  this.setState({
                    isModalVisible: false
                  })
                },
              );
            }
            else {
              Toast.show(I18n.t('accountStatisticsSavedSuccessful'));
              this.setState({
                isModalVisible: false
              })
            }
          },
          (error) => {
            Toast.show(I18n.t('accountStatisticsSavedFailed'));
            console.log(error);
          },
        );
    }
    else {
        let params = {
            userID: this.props.user.id,
            statisticPreferences: {
                private: !this.state.isStatPublicSwitchOn,
                userStats: userStatPrefs,
                isManOfTheGameActivated: this.state.isManOfTheGameActivated
            },
        } ;
        
        UpdateStatisticPreferencesMutation.commit(params,
          () => {
            Toast.show(I18n.t('accountStatisticsSavedSuccessful'));
            this.setState({
              isModalVisible: false
            })
            this.updateTutorialSteps();
          },
          (error) => {
            Toast.show(I18n.t('accountStatisticsSavedFailed'));
            console.log(error);
            this.setState({
              isModalVisible: false
            })
          },
        );
      }
    }

    updateTutorialSteps = () => {
      const { tutorialSteps, updateStepsCompleted } = this.props;
      let newTutorialSteps = cloneDeep(tutorialSteps);
  
      newTutorialSteps['setupStatisticsStep'] = true;
      updateStepsCompleted(newTutorialSteps);
    }

    render() {

      return <TouchableOpacity
        style={styles.container}
        onPress={this._handleOpen}
      >
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isModalVisible}
          onRequestClose={() => this.setState({isModalVisible: false})}
        >
          <View style={styles.modalContainer}>
            <Header 
              onPressFunc={() => this.setState({isModalVisible: false})}
              imgSrc={icons.down_arrow}
              text={I18n.t('accountStatisticPreferences')}
            />
            {/* <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({isModalVisible: false})}
                style={styles.closeIcon}
              >
                <Image
                  source={icons.down_arrow}
                />
              </TouchableOpacity>
              <Text style={styles.title}>
                {I18n.t('accountStatisticPreferences')}
              </Text>
            </View> */}
            <ScrollView>
              <View style={styles.inputRow}>
                <View style={styles.textRow}>
                    <Text style={styles.labelText}>
                        {I18n.t('accountStatisticsActivation')}
                    </Text>
                    <Switch
                      style={styles.switchButton}
                      onTintColor={colors.skyBlue}
                      value={this.state.isStatActivatedSwitchOn}
                      onValueChange={this.handleStatActivatedChange}
                      />
                </View>
                <Text style={styles.explanationText}>
                  {I18n.t('accountStatisticsActivationExplanation')}
                </Text>
              </View>
              {this.state.isStatActivatedSwitchOn &&
                  <View style={styles.inputRow}>
                    <View style={styles.textRow}>
                        <Text style={styles.labelText}>
                            {I18n.t('accountStatisticsPublic')}
                        </Text>
                        <Switch
                          style={styles.switchButton}
                          onTintColor={colors.skyBlue}
                          value={this.state.isStatPublicSwitchOn}
                          onValueChange={this.handleStatPublicChange}
                          />
                    </View>
                    <Text style={styles.explanationText}>
                      {I18n.t('accountStatisticsPublicExplanation')}
                    </Text>
                  </View>
              }
              {this.state.isStatActivatedSwitchOn &&
                  <View style={styles.inputRow}>
                    <View style={styles.textRow}>
                        <Text style={styles.labelText}>
                            {I18n.t('accountStatisticsManOfTheGame')}
                        </Text>
                        <Switch
                          style={styles.switchButton}
                          onTintColor={colors.skyBlue}
                          value={this.state.isManOfTheGameActivated}
                          onValueChange={this.handleManOfTheGameChange}
                          />
                    </View>
                    <Text style={styles.explanationText}>
                      {I18n.t('accountStatisticsManOfTheGameExplanation')}
                    </Text>
                  </View>
              }
              {this.state.isStatActivatedSwitchOn && this.props.viewer && this.props.viewer.statisticPreferences &&
                <View style={styles.formContainer}>
                  <Text style={styles.subTitleText}>
                    {I18n.t('accountStatisticsParticipantPreferences')}
                  </Text>
                  <Text style={styles.explanationText}>
                    {I18n.t('accountStatisticsParticipantPreferencesExplanation')}
                  </Text>
                  {Object.keys(this.props.viewer.statisticPreferences.userStats).filter(statName => statName !== '__dataID__' && statName !== 'stat0').map((statName, index) => (
                      <View style={styles.textRow} key={index}>
                        <Text style={styles.formInputLabel}>
                            {I18n.t('accountStatistics'+statName)}
                        </Text>
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            maxLength={50}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(text) => this.handleStatNameChange(statName, text)}
                            underlineColorAndroid={colors.snow}
                            value={this.state[statName]}
                          />
                      </View>
                    </View>
                  ))}
                </View>

              }
              <View style={{flex: 1, width: '100%'}}>
                <Button
                  onPress={this.handleSavePress}>
                  {I18n.t('accountSaveButton')}
                </Button>
              </View>
              </ScrollView>
            </View>
        </Modal>

        <View style={styles.subContainer}>
          <Text style={styles.text}>
            {I18n.t('accountStatisticPreferences')}
          </Text>
          {this.props.user && this.props.user.areStatisticsActivated
            ? <Text style={styles.select}>
                {I18n.t('accountStatisticsActivated')}
              </Text>
            : <Text style={styles.select}>
                {I18n.t('accountStatisticsUnactivated')}
              </Text>
          }
        </View>
        <Image
          style={styles.icon}
          source={icons.right_arrow_blue}
        />
      </TouchableOpacity>
    }
}

const stateToProps = (state) => ({
  tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = (dispatch) => ({
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps,
)(StatisticsPreferences);


export default createRefetchContainer(ReduxContainer, {
    viewer: graphql`
      fragment Statistics_viewer on Viewer @argumentDefinitions(userID: {type: String, defaultValue: ""}) {
        id
        statisticPreferences (userID: $userID) {
          private,
          isManOfTheGameActivated
          userStats {
            stat0 {name}
            stat1 {name}
            stat2 {name}
            stat3 {name}
            stat4 {name}
            stat5 {name}
          }
        }
      }
    `,
    user: graphql`
      fragment Statistics_user on User {
        id
        areStatisticsActivated
      }
      `
  },
  graphql`
    query StatisticsRefetchQuery($userID: String) {
      viewer {
        ...Statistics_viewer @arguments(userID: $userID)
      }
    }
  `
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 5,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputRow: {
    flexDirection: 'column',
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    marginBottom: metrics.baseMargin
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin /2
  },
  subTitleText: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    flex: 4
  },
  switchButton: {
    flex: 1
  },
  explanationText: {
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin,
    fontStyle: 'italic'
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: metrics.doubleBaseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  formInputLabel: {
    color: colors.darkBlue,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  input: {
    color: colors.darkGrey,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 40,
    maxHeight: 40,
  }
});

I18n.fallbacks = true
I18n.translations = translations;

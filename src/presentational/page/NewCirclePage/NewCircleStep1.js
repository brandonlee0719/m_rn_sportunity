import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

import translations from 'sportunity/src/translations.js';
import NewCircleNavBar from './NewCircleNavBar';
import styles from './styles';
import { colors } from 'sportunity/src/theme';
import Address from '../../forms/Address';
import Heading from '../../UI/Heading';
import { dispatchToActions } from '../../../action/utils';
import { updateNewCircleName, updateNewCircleDescription, updateNewCirclePlace, updateNewCircleSport } from '../../../action/newCircleActions';
import { Input, TextArea, Label } from '../../UI/FormElements';
import { metrics } from '../../../theme';

class NewCircleStep1 extends Component {  
  inputRefs = {};

  handleNextButtonPress = () => {
    const { navigation, updateNewCircleSport } = this.props;
    navigation.navigate('NewCircleStep2');
    /*navigation.navigate('circleSport', {
      onCloseSportList: (e) => updateNewCircleSport(e)
    });*/
  }

  render() {
    const {
      name,
      address,
      description,
      updateNewCircleName,
      updateNewCircleDescription,
      updateNewCirclePlace,
    } = this.props; 

    const displayNextButton = !!name && !!description && !!address;

    return (
      <NewCircleNavBar
        step={1}
        displayNextButton={displayNextButton}
        onNextButtonPress={this.handleNextButtonPress}
        validateExit
      >
        <ScrollView>
          <Heading text={I18n.t('information')} />

          <View style={{ paddingHorizontal: metrics.baseMargin }}>
            <Label>{I18n.t('newCircleName')}</Label>
            <Input
              maxLength={30}
              placeholder={I18n.t('newCircleName')}
              onChangeText={updateNewCircleName}
              value={name}
              onSubmitEditing={(e) => this.inputRefs.description.focus()}
            />
            
            <View style={{ height: metrics.baseMargin }} />

            <Label>{'Description'}</Label>
            <TextArea
              multiline
              maxLength={4000}
              numberOfLines={10}
              placeholder={'Description'}
              onChangeText={updateNewCircleDescription}
              value={description}
              ref={ref => this.inputRefs['description'] = ref}
            />
          </View>
            
          <View style={{ height: metrics.doubleBaseMargin }} />

          <View style={{ padding: metrics.baseMargin }}>
            <Address
              address={address}
              onChange={updateNewCirclePlace}
              title={I18n.t('circle_place')}
              type='cities'
            />
          </View>
        </ScrollView>
      </NewCircleNavBar>
    );
  }
}

const stateToProps = (state) => ({
  name: state.sportunityNewCircle.name,
  description: state.sportunityNewCircle.description,
  address: state.sportunityNewCircle.address,
});

const dispatchToProps = dispatchToActions({
  updateNewCircleName,
  updateNewCircleDescription,
  updateNewCirclePlace,
  updateNewCircleSport,
})

const NewCircleStep1Container = connect(
  stateToProps,
  dispatchToProps,
)(NewCircleStep1);

export default NewCircleStep1Container;

I18n.fallbacks = true
I18n.translations = translations;
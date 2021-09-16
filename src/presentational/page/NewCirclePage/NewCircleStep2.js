import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

import translations from 'sportunity/src/translations.js';
import NewCircleNavBar from './NewCircleNavBar';
import Heading from '../../UI/Heading';
import styles from './styles';
import { colors } from 'sportunity/src/theme';
import { dispatchToActions } from '../../../action/utils';
import { updateNewCircleSport } from '../../../action/newCircleActions';
import icons from 'sportunity/src/theme/images';
import FormListItem from '../../UI/FormListItem';

class NewCircleStep2 extends Component {
  openSportList = () => {
    this.props.navigation.navigate('circleSport', {
      onCloseSportList: (e) => this.props.updateNewCircleSport(e)
    });
  }
  
  render() {
    const {
      navigation,
      sport,
    } = this.props;

    const displayNextButton = !!sport && !!sport.sportName;

    return (
      <NewCircleNavBar
        step={2}
        displayNextButton={displayNextButton}
        onNextButtonPress={() => navigation.navigate('NewCircleStep3')}
      >
        <ScrollView>
          <Heading text="Sport" />

          <FormListItem
            onPress={this.openSportList}
            title={"Sport"}
            subtitle={sport ? sport.sportName : I18n.t('select')}
            rightIcon={icons.right_arrow_blue}
          />


        </ScrollView>
      </NewCircleNavBar>
    );
  }
}

const stateToProps = (state) => ({
  sport: state.sportunityNewCircle.sport,
});

const dispatchToProps = dispatchToActions({
  updateNewCircleSport,
})

const NewCircleStep2Container = connect(
  stateToProps,
  dispatchToProps,
)(NewCircleStep2);

export default NewCircleStep2Container;

I18n.fallbacks = true
I18n.translations = translations;
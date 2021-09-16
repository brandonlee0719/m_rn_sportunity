import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import translations from 'sportunity/src/translations.js';
import NewCircleNavBar from './NewCircleNavBar';
import Heading from '../../UI/Heading';

import AddCircleInPrivateMode from './AddCirclesInPrivateMode';
import { metrics, colors, fonts } from '../../../theme';

class NewCircleStep5 extends Component {
  state = {
    loading: false,
  }

  createCircle = async () =>  {
    const { navigation } = this.props;
    const createNewCircle = navigation.getParam('createNewCircle', null);

    if (typeof createNewCircle !== 'function') {
      return false;
    }

    try {
      this.setState({ loading: true });
      await createNewCircle(this.props);
      Toast.show(I18n.t('newCircleSuccess'));
    } catch (error) {
      Toast.show(I18n.t('newCircleFailed'));
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <NewCircleNavBar
        step={5}
        displayNextButton
        loading={this.state.loading}
        rightButtonText={I18n.t('finish')}
        onNextButtonPress={this.createCircle}
      >
        <ScrollView>
          <Heading text={I18n.t('privacySportunity')} />
          <Text
            style={{
              marginLeft: metrics.baseMargin,
              marginTop: -metrics.baseMargin,
              marginBottom: metrics.baseMargin,
              color: colors.charcoal,
              fontFamily: fonts.type.emphasis,
            }}
          >
            {I18n.t('addVisibility')}
          </Text>
          <AddCircleInPrivateMode />
        </ScrollView>
      </NewCircleNavBar>
    );
  }
}

const stateToProps = (state) => ({
  name: state.sportunityNewCircle.name,
  description: state.sportunityNewCircle.description,
  address: state.sportunityNewCircle.address,
  circleType: state.sportunityNewCircle.circleType,
  sport: state.sportunityNewCircle.sport,
  circleType: state.sportunityNewCircle.circleType,
  isCirclePublic: state.sportunityNewCircle.isCirclePublic,
  isCircleAccessibleWithLink: state.sportunityNewCircle.isCircleAccessibleWithLink,
  isCircleShared: state.sportunityNewCircle.isCircleShared,
  circlesInPrivateMode: state.sportunityNewCircle.circlesInPrivateMode,
});

const NewCircleStep5Container = connect(
  stateToProps,
)(NewCircleStep5);

export default withNavigation(NewCircleStep5Container);

I18n.fallbacks = true
I18n.translations = translations;
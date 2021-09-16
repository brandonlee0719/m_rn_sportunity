import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import Share from 'react-native-share';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import environment from 'sportunity/src/createRelayEnvironment';
import { withNavigation, StackActions } from 'react-navigation';
import get from 'lodash/get';
import Icon from 'react-native-vector-icons/MaterialIcons';

import translations from 'sportunity/src/translations.js';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import NewCircleNavBar from './NewCircleNavBar';
import Heading from '../../UI/Heading';
import styles from './styles';
import icons from 'sportunity/src/theme/images';
import { colors, metrics } from '../../../theme';
const { webAppUrl } = require('../../../../conf/constants.json');

class NewCircleSuccess extends Component {
  componentDidMount() {
    let { circleId } = this.props;
    
    if (circleId) {
      this.props.relay.refetch({
        circleId,
      })
    }
   }

  share = (code) => {
    let circle = get(this.props, 'viewer.circle');

    if (!circle) return false;

    let shareOptions = {
      title: circle.name,
      message: I18n.t('circleShareMessage1')+ circle.name + I18n.t('circleShareMessage2') + circle.owner.pseudo + '. Code: ' + code,
      url: webAppUrl+`/circle/${circle.id}`,
      subject: I18n.t('circleShareMessage1')+ circle.name + I18n.t('circleShareMessage2') + circle.owner.pseudo,
    };
    Share.open(shareOptions);
  }

  renderCode = (code) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.successCard}>
            <Text style={styles.successCardText}>Sportunity</Text>
            <Text style={styles.successCardText}>{I18n.t('code')}</Text>
            <Text style={styles.successCardCode}>{code}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.share(code)} style={{ position: 'absolute', right: 50, paddingHorizontal: metrics.doubleBaseMargin }}>
          <Icon name="share" color={colors.black} size={25} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const {
      navigation,
      viewer,
    } = this.props;

    const circleCode = get(viewer, 'circle.publicShortCode');

    return (
      <NewCircleNavBar
        title={''}
        displayNextButton
        onLeftButtonPress={() => {
          navigation.dispatch(StackActions.popToTop());
          // navigation.navigate('circles')
        }}
        rightButtonText={I18n.t('gotoGroup')}
        onNextButtonPress={() => {
          navigation.navigate('circledetail', { circleId: navigation.getParam('circleId', null), hideNavBar: true });
        }}
      >
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: colors.silver }}>
          <Heading text={I18n.t('validation')} />
          <Text style={[styles.italicSubtitle, { marginHorizontal: metrics.baseMargin, marginBottom: metrics.doubleBaseMargin, marginTop: -metrics.baseMargin }]}>
            {I18n.t('groupCreated')}
          </Text>
          <View style={styles.successCardContainer}>
            {circleCode && this.renderCode(circleCode)}
            <Text style={{ margin: metrics.baseMargin, opacity: 0.9 }}>Your sportunity code for this group</Text>

            <View style={{ height: 50 }} />

            <Text style={styles.italicSubtitle}>{I18n.t('groupCodeText1')}</Text>
            <Text style={styles.italicSubtitle}>{I18n.t('groupCodeText2')}</Text>
            <Text style={styles.italicSubtitle}>{I18n.t('groupCodeText3')}</Text>
          </View>
        </ScrollView>
      </NewCircleNavBar>
    );
  }
}


const NewCircleSuccessTemp = createRefetchContainer(withNavigation(NewCircleSuccess), {
  viewer: graphql`
  fragment NewCircleSuccess_viewer on Viewer @argumentDefinitions(
    circleId: {type: "ID"}
  ){
      id
      circle: circle(id: $circleId) {
        id
        name
        publicShortCode
        owner {
          id
          pseudo
        }
      }
    }`,
  },
  graphql`
    query NewCircleSuccessRefetchQuery ($circleId: ID) {
      viewer {
        ...NewCircleSuccess_viewer @arguments(circleId: $circleId)
      }
    }
  `
);

export default class extends Component {
  render() {
    const {navigation} = this.props;
    circleId = navigation.getParam('circleId', null);
    
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query NewCircleSuccessQuery{
            viewer {
              ...NewCircleSuccess_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          
          if (props) {
            return <NewCircleSuccessTemp viewer={props.viewer} query={props} {...this.props} circleId={circleId}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;
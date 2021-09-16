import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { ShareDialog } from 'react-native-fbsdk';
import moment from 'moment';
import Slideshow from 'react-native-slideshow';

import translations from 'sportunity/src/translations.js';
import icons from '../../../../theme/images';
import SportunitySummary from '../../../../customPropType/SportunitySummary';
import { styles } from './styles';
import Levels from './levels';

import ShareSheet from './ShareSheet';

const { webAppUrl } = require('../../../../../conf/constants.json');

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false  
    }
  }

  render = () => {

    const { language, sportunity: { id, images, title, sport, kind, participants, participantRange, beginning_date, ending_date } } = this.props; 
    
    let shareOptions = {
      title: title,
      message: I18n.t('sportunityShareMessage1')+ ' ' + title + ' ' + I18n.t('sportunityShareMessage2'),
      url: webAppUrl+`/event-view/${id}`,
      subject: I18n.t('sportunityShareMessage1')+ ' ' + title + ' ' + I18n.t('sportunityShareMessage2'),
    };
    return(
      <View style={styles.header}>
        {images && images.length > 0 && 
          <Slideshow 
            dataSource={images.map(img => ({url: img}))}
            height={120}
            arrowSize={0}
          />
        }
        <View style={[styles.headerTop, images && images.length > 0 ? {marginTop: 20} : {}]}>
          <View style={styles.headerTopLeft}>
            <Image style={styles.headerImage} source={{ uri: sport && sport.sport && sport.sport.logo }} />
            <Text style={styles.sportName}>
              {sport && sport.sport && (language.toUpperCase() === "FR" 
              ? sport.sport.name.FR
              : sport.sport.name.EN
              )}
            </Text>
          </View>

          <View style={styles.headerTxtDesc}>
            {<View style={styles.headerTitleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>}
            <View style={styles.row}>
              <Image style={styles.icon} source={icons.calendar} />
              <Text style={styles.headerTxtDescTop}>
                {moment(beginning_date).format('ddd DD MMM YY') + ', ' + moment(beginning_date).format('HH:mm') + ' - ' + moment(ending_date).format('HH:mm')}
              </Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.icon} source={icons.activities} />
              <Text style={styles.headerTxtDescTop}>
                {participants.length + ' ' + I18n.t('particpantsShort').toLowerCase()}
                {participantRange 
                ? ' ('+ I18n.t('min') + ' ' + participantRange.from + ' - ' + I18n.t('max') + ' ' + participantRange.to + ')'
                : ""}
              </Text>
            </View>
            {sport && !sport.allLevelSelected &&
                <Levels sport={sport} />
            }
          </View>
        </View>
        
        <View style={styles.headerBottom}>
          <ShareSheet shareOptions={shareOptions}/>
          <Text style={styles.status}>{kind}</Text>
        </View>
      </View>
    )
  }
}

Header.propTypes = {
  sportunity: SportunitySummary.isRequired,
};

export default  createFragmentContainer(Header, {
  sportunity: graphql`
  fragment Header_sportunity on Sportunity{
    id,
    kind,
    title,
    beginning_date,
    ending_date,
    images
    sport{
      allLevelSelected,
      sport {
        name{
          EN
          FR
        }
        logo
      }
      ...levels_sport
    }
    participants{
      id
      pseudo
    }
    participantRange{
      from
      to
    }
  }`,
});

I18n.fallbacks = true
I18n.translations = translations;

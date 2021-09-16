import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlaceModal, updatePlaceOrVenueModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import PlaceModal from './PlaceModal/PlaceModal.js';
import PlaceOrVenueModal from './PlaceOrVenueModal';
import VenueModal from './VenueModal';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class Place extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (!this.props.placeName)
      this.props.updatePlaceModal(true);
  }

  componentWillReceiveProps = nextProps => {
    
    if (this.props.viewer.me && this.props.viewer.me.id && nextProps.sportunitySport && 
        nextProps.sportunitySport.sport && (!this.props.sportunitySport || !this.props.sportunitySport.sport || (this.props.sportunitySport.sport && this.props.sportunitySport.sport !== nextProps.sportunitySport.sport))) {
          
        const refetchVariables = fragmentVariables => ({
          ...fragmentVariables,
          query: true,
          filter: {
            sport: {sportID: nextProps.sportunitySport.sport},
            users: [this.props.viewer.me.id]
          }
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
    }
    if (this.props.sportunitySport && this.props.sportunitySport.sport && (!nextProps.sportunitySport || !nextProps.sportunitySport.sport)) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        filter: null, 
        query: false
      });

      this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
      );
    }
  }

  openClosePlaceModal = () => {
    if (this.props.isPlaceModalVisible) {
      this.props.updatePlaceModal(false);
    } else {
      this.props.updatePlaceModal(true);
    }
  }

  openClosePlaceOrVenueModal = () => {
// TODO props.relay.* APIs do not exist on compat containers
    if (this.props.relay.pendingVariables) {
      setTimeout(() => this.openClosePlaceOrVenueModal(), 50);
    }
    else if (this.props.isPlaceOrVenueModalVisible) {
      this.props.updatePlaceOrVenueModal(false);
    } 
    else {
      if (this.props.viewer.slots && this.props.viewer.slots.length > 0) 
        this.props.updatePlaceOrVenueModal(true);
      else this.props.updatePlaceModal(true)
    }
  }
  
  render() {
    const { 
      viewer, 
      updatePlaceModal, 
      updatePlaceOrVenueModal, 
      placeName, 
      slot,
      infrastructure, 
      venue,
      isPlaceModalVisible, 
      isPlaceOrVenueModalVisible, 
      isVenueModalVisible 
    } = this.props; 
  
    return(
      <TouchableOpacity
        style={style.container}
        onPress={this.openClosePlaceOrVenueModal}
      >
        <PlaceOrVenueModal viewer={viewer} />
        <PlaceModal viewer={viewer} />
        <VenueModal viewer={viewer} />

        <View style={style.subContainer}>
          <Text style={style.text}>
            {I18n.t('place')}
          </Text>
          {slot && infrastructure && venue && 
            <Text style={style.select}>
                {venue.name + ' - ' + infrastructure.name}
            </Text>
          }
          {
            placeName === '' ?
              <Text style={style.select}>
                {I18n.t('select')}
              </Text> :
              <Text style={style.select}>
                {placeName}
              </Text>
          }
        </View>
        <Image
          style={style.icon}
          source={icons.right_arrow_blue}
        />
      </TouchableOpacity>
    )
  }
}

Place.propTypes = {
  updatePlaceModal: PropTypes.func.isRequired,
  updatePlaceOrVenueModal: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  isPlaceModalVisible: PropTypes.bool.isRequired,
  isVenueModalVisible: PropTypes.bool.isRequired,
  isPlaceOrVenueModalVisible: PropTypes.bool.isRequired,
  viewer: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  placeName: state.sportunityNewActivity.placeName,
  isPlaceModalVisible: state.sportunityNewActivity.isPlaceModalVisible,
  isVenueModalVisible: state.sportunityNewActivity.isVenueModalVisible,
  isPlaceOrVenueModalVisible: state.sportunityNewActivity.isPlaceOrVenueModalVisible,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  venue: state.sportunityNewActivity.venue,
  infrastructure: state.sportunityNewActivity.infrastructure,
  slot: state.sportunityNewActivity.slot
});

const dispatchToProps = (dispatch) => ({
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch),
  updatePlaceOrVenueModal: bindActionCreators(updatePlaceOrVenueModal, dispatch)
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(Place);

export default createRefetchContainer(ReduxContainer, {
  viewer: graphql`
    fragment Place_viewer on Viewer @argumentDefinitions(
      query: {type: "Boolean!", defaultValue: false},
      filter: {type: "Filter"}
    ) {
        id,
        me {
          id
          profileType
        }
        infrastructures (filter: $filter) @include (if: $query) {
          id
          name
          venue {
            id
            name
            address {
              address, 
              city,
              zip,
              country
            }
          }
          logo
          sport {
            id
            name {
              EN, FR
            }
            logo
          }
        }
        slots (filter: $filter) @include (if: $query) {
          id
          status
          venue {
              id
              name,
              address {
                  address, 
                  city,
                  zip,
                  country
              }
              owner {
                id
                pseudo
              }
          },
          infrastructure {
              id, 
              name,
              logo,
              sport {
                  id
                  name {
                      EN,
                      FR
                  }
                  logo
              }
          },
          from,
          end, 
          price {
              cents, 
              currency
          },
          serie_information {
              firstDate
              lastDate
              remainingSlots
          }
        }
      }
    `,
  },
  graphql`
    query PlaceRefetchQuery ($query: Boolean!, $filter: Filter) {
      viewer {
        ...Place_viewer @arguments (query: $query, filter: $filter)
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;

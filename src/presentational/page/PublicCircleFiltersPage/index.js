import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, ScrollView, Alert, Modal, Platform, TouchableOpacity, Image, Animated } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import Prompt from 'react-native-prompt';
import Geocoder from 'react-native-geocoder';
import ModalPicker from 'react-native-modal-selector';
import { cloneDeep } from 'lodash';

import translations from 'sportunity/src/translations.js';

import Field from '../../forms/Field';
import SportunityPageView from '../../SportunityPageView';
import SportunityAccordion from '../../SportunityAccordion';
import SportunityButton from '../../SportunityButton';
import SavedFilterList from '../SavedFilterList/SavedFilterList'

import FilterDetailPlaces from '../FiltersPage/FilterDetailPlaces'
import FilterDetailSports from '../FiltersPage/FilterDetailSports';
import FilterDetailType from './FilterDetailType/';
import FilterDetailUser from './FilterDetailUser/';

import { PublicCirclesFilter }  from 'sportunity/src/presentational/page/SportPage/SportPage.js';

import SaveFilterMutation from './SavedCircleFilterList/SaveCircleFilterMutation';
import SetDefaultFilterMutation from './SavedCircleFilterList/SaveDefaultCircleFilterMutation'

import { styles } from './style';
import { images, metrics, colors } from '../../../theme';

import {    clearFilters,
            updatePublicCirclesFilterStatus,
            changePlaceName,
            changePlaceRadius,
            changePlacePosition,
            clearPlaceFilter,
            addPublicCircleSportFilter,
            removeSportFilter,
            clearSportFilter,
            changeCircleNameCompletion,
            changeMemberType,
            changeCircleType,
            applySavedCircleFilter,
            removeAppliedSavedCircleFilter,
            addSubAccount,
            removeSubAccount,
            clearSubAccounts,
  } from 'sportunity/src/action/publicCirclesFiltersStateActions.js'

const AnimatedListView = Animated.createAnimatedComponent(ScrollView);
const NAVBAR_HEIGHT = 38;

Geocoder.fallbackToGoogle("AIzaSyCjT33JyzdH2YAREwWrKjvJ5uBdI_7Ifpc");

const circleTypes = ["ADULTS", "CHILDREN", "TEAMS", "CLUBS", "COMPANIES"];

class FiltersPage extends PureComponent {
  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  constructor(props) {
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      isOnFiltersPage: true,
      askFilterNamePromptOpen: false,
      appliedFilter: null,
      sportFilterIsOpen: false,
      selectedCircleId: '',
      isCircleModalVisible: false,
      isCirclesFilterModalVisible: false,
      openedSection: 1,
      fadeValue: new Animated.Value(1),
      isLoadingMore: false,
      isLoading: false,
      availableQueries: [],
      displayTerms: false,
      displayTermsOfCircle: null,
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnim,
        ),
        0,
        NAVBAR_HEIGHT,
      ),
      createNewFilter: false,
      isDefaultFilter: false,
      filterId: null,
      filterName: '',
    }
  }

  componentDidMount = () => {
    this.state.scrollAnim.addListener(({ value }) => {
      // This is the same calculations that diffClamp does.
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT,
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });

    if (this.props.appliedCircleFilterId) {
      this.setState({
        isDefaultFilter: this.props.viewer.me && this.props.viewer.me.defaultSavedCircleFilter && this.props.appliedCircleFilterId === this.props.viewer.me.defaultSavedCircleFilter.id,
        filterName: this.props.appliedCircleFilterName,
        filterId: this.props.appliedCircleFilterId
      })
    }
    else {
      this.onNewFilter()
    }
  }

  removeSportFilter = (index) => {
    this.props.removeSportFilter(index);
  }
  changePlaceRadius = (radius) => {
    this.props.changePlaceRadius(radius);
  };
  changePlacePosition = (lat, lng) => {
    this.props.changePlacePosition(lat, lng);
  };
  clearPlaceFilter = () => {
    this.props.clearPlaceFilter();
  };

  componentWillUnmount = () => {
    if (typeof this.props.applyFilter === 'function') 
      this.props.applyFilter(); 

    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  applyFilter = () => {
      this.props.updatePublicCirclesFilterStatus(true);
      if (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations")
       this.props.navigation.goBack()
      else 
        this.props.onRequestClose()
  }

  resetFilter = () => {
    this.props.clearFilters();
    this.setState({
      appliedFilter: null
    })
    if (!this.props.from || this.props.from && this.props.from !== "new-sportunity-invitations")
      this.props.navigation.goBack()
    else 
      this.props.onRequestClose()
  }

  onDisplayFilterNamePrompt = () => {
    this.setState({
      askFilterNamePromptOpen: true
    })
  }

  onRemoveSavedFilter = (id) => {
    Alert.alert(
      I18n.t('deleteFilterConfirmTitle'),
      I18n.t('deleteFilterConfirmText'),
      [
        { text: I18n.t('yes'), onPress: () => this.removeSavedFilter(id) },
        { text: I18n.t('no'), onPress: () => {}}
      ]
    )
  } 

  removeSavedFilter = (id) => {
    const { savedCircleFilters } = this.props.viewer.me ;
    
    let filtersArray = savedCircleFilters.map(filter => {
      return {
        userCircleFilterId: filter.id,
        filterName: filter.filterName,
        circleType: filter.circleType, 
        memberType: filter.memberType, 
        location: filter.location ? {
          lat: filter.location.lat,
          lng: filter.location.lng,
          radius: filter.location.radius
        } : null,
        sport: filter.sport && filter.sport[0] ? {
          sportID: filter.sport[0].sport.id,
          level: filter.sport[0].levels.map(level => level.id)
        } : null,
      }
    })
    let index = filtersArray.findIndex(filter => filter.userCircleFilterId === id)
    if (index >= 0) {
      filtersArray.splice(index, 1);
    }
    
    this.saveFilters(filtersArray);
    this.props.clearFilters();;

  }

  saveNewFilter = () => {

    let {filters} = this.props ;

    if ((!filters.location || !filters.location.lat || !filters.location.lng || !filters.location.radius)
        && (!filters.sport || filters.sport.length === 0)
        && (filters.circleType.length === 0)
        && (filters.type === null)
        || !this.state.filterName
        || this.state.filterName === ''
    ) {
      Toast.show(I18n.t('filterMissingField'));
      return
    }

    this.onValidateSaveFilter(this.state.filterName)
  }

  onValidateSaveFilter = (filterName) => {
    const { viewer, dateFilter, placeFilter, sportFilter, appliedCircleFilterName, appliedCircleFilterId, selectedStatus, circleType, type, users } = this.props;
    const { savedCircleFilters } = this.props.viewer.me ;
    const userID = this.props.viewer.me.id;
    
    let filtersArray = savedCircleFilters
    .filter(filter => this.state.filterId ? filter.id !== this.state.filterId : true)
    .map(filter => {
      return {
        userCircleFilterId: filter.id,
        filterName: filter.filterName,
        circleType: filter.circleType, 
        memberType: filter.memberType, 
        location: filter.location && filter.location.lat ? {
          lat: filter.location.lat,
          lng: filter.location.lng,
          radius: filter.location.radius
        } : null,
        sport: filter.sport && filter.sport[0] ? {
          sportID: filter.sport[0].sport.id,
          level: filter.sport[0].levels.map(level => level.id)
        } : null,
        owners: filter.owners.map(owner => owner.id)
      }
    })
    
    const newFilter = {
      userCircleFilterId: this.state.filterId || null,
      location: placeFilter && placeFilter.lat ? {
        lat: placeFilter.lat,
        lng: placeFilter.lng,
        radius: placeFilter.radius
      } : null,
      sport: sportFilter || null,
      filterName: filterName || null,
      circleType: circleType, 
      memberType: type !== null ? circleTypes[type] : null,
      owners: users
    };

    filtersArray.push(newFilter)

    this.state.filterId && this.props.applySavedCircleFilter({id: this.state.filterId, filterName})

    this.saveFilters(filtersArray);
  }

  saveFilters = (filtersArray) => {
    const userID = this.props.viewer.me.id;
    const viewer = this.props.viewer ;
    
    SaveFilterMutation.commit({
      userID,
      user: {
        savedCircleFilters: filtersArray,
      }
    },
    () => {
      // this.toggleLoading(false);
      Toast.show(I18n.t('filterSuccess'));
      if (!this.props.appliedCircleFilterId) {
        const previousFilterList = this.props.viewer.me.savedCircleFilters; 
        setTimeout(() => {
          
          let newFilter = this.props.viewer.me.savedCircleFilters &&
            this.props.viewer.me.savedCircleFilters.find(filter => previousFilterList.findIndex(previousFilter => previousFilter.id === filter.id) < 0);

          if (newFilter) {
            this.onApplySavedFilter(newFilter)
            if (this.state.isDefaultFilter) {
              this.setDefaultFilter(newFilter.id)
            }
          }

          this.props.navigation.goBack()
        }, 500)
      }
      else {
        if (this.state.isDefaultFilter) {
          this.setDefaultFilter(this.props.appliedCircleFilterId)
        }
        this.props.navigation.goBack()
      }
    },
    error => {
      // this.toggleLoading(false);
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  setDefaultFilter = (filterId) => {
    const userID = this.props.viewer.me.id;
    const filterIDVar = filterId ;
    const viewer = this.props.viewer ;
    
    SetDefaultFilterMutation.commit({
      userID,
      filterIDVar,
    },
    () => {
      // this.toggleLoading(false);
      Toast.show(I18n.t('filterSuccess'));
    },
    error => {
      // this.toggleLoading(false);
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });
  }

  updateDefaultFilter = value => {
    this.setState({isDefaultFilter:value})
    if (!!this.state.filterId) {
      this.setDefaultFilter(this.state.filterId)
    }
  }

  // SAVED FILTERS
  onApplySavedFilter = (filter) => {
    const {
      clearFilters, 
      addPublicCircleSportFilter,
      changePlaceName,
      changePlaceRadius,
      changePlacePosition,
      changeMemberType,
      changeCircleType, 
      addSubAccount,
      applySavedCircleFilter
      } = this.props ;

    clearFilters();

    filter.sport && filter.sport[0] && filter.sport[0].sport &&
      addPublicCircleSportFilter({
        sportID: filter.sport[0].sport.id,
        level: filter.sport[0].levels.length > 0
          ? filter.sport[0].levels.map(level => level.id)
          : filter.sport[0].sport.levels.map(level => level.id)
      })

    if (filter.location && filter.location.lat && filter.location) {
      let city, country;
      Geocoder.geocodePosition({lat: filter.location.lat, lng: filter.location.lng}).then(results => {
        for (var a=0 ; a<results.length; a++) {
          if (results[a].locality && results[a].country) {
            city = results[a].locality;
            country = results[a].country;
            break;
          }
        }
        if (city && country)
          changePlaceName(city+', '+country);
      })
    }

    filter.location && filter.location.lat && filter.location.lng && changePlacePosition(filter.location.lat, filter.location.lng);
    filter.location && filter.location.radius && changePlaceRadius(filter.location.radius);

    filter.memberType && changeMemberType(circleTypes.indexOf(filter.memberType))
    filter.circleType && changeCircleType(filter.circleType)
    filter.owners && filter.owners.forEach(owner => addSubAccount(owner.id))
    
    setTimeout(() => filter.filterName && applySavedCircleFilter(filter) , 50);
  }

  onSportFilterButtonPress = () => {
    if (this.props.from === 'new-sportunity-invitations') {
      this.setState({
        sportFilterIsOpen: true
      })
    }
    else 
     this.props.navigation.navigate('publicCirclesSportFilter')
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 350);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue = this._scrollValue > NAVBAR_HEIGHT &&
    this._clampedScrollValue > (NAVBAR_HEIGHT) / 2
    ? this._offsetValue + NAVBAR_HEIGHT
    : this._offsetValue - NAVBAR_HEIGHT;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
    }).start();
  };

  onFilterClick = filter => {
    this.setState({
      createNewFilter: false,
      isDefaultFilter: this.props.viewer.me && this.props.viewer.me.defaultSavedCircleFilter && filter.id === this.props.viewer.me.defaultSavedCircleFilter.id,
      filterName: filter.filterName,
      filterId: filter.id
    })
    this.onApplySavedFilter(filter);
  }

  onNewFilter = () => {
    this.props.clearFilters();

    this.setState({
      createNewFilter: true,
      filterName: '',
      filterId: null,
      isDefaultFilter: false,
    })
  }

  onSelectUser = user => {
    if (this.props.users && this.props.users.length > 0 && this.props.users.indexOf(user) >= 0) {
      this.props.removeSubAccount(user)
    }
    else 
      this.props.addSubAccount(user)
  }

  render() {
    // vars
    const props = this.props;
    const { viewer, dateFilter, placeFilter, sportFilter, savedFilters, activeKind } = this.props;

    // location
    const isPlaceSelected = placeFilter.name !== null && placeFilter.lat !== null && placeFilter.lng !== null

    const memberTypeList = 
      [
        {key: 0, label: I18n.t('circles_member_type_'+0)},
        {key: 1, label: I18n.t('circles_member_type_'+1)},
        {key: 2, label: I18n.t('circles_member_type_'+2)},
        {key: 3, label: I18n.t('circles_member_type_'+3)},
        {key: 4, label: I18n.t('circles_member_type_'+4)}
      ]

    const navbarTranslate = this.state.clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT],
      outputRange: [0, -NAVBAR_HEIGHT],
      extrapolate: 'clamp',
    });

    const selectedFilterCanBeDeleted = 
      !!this.props.appliedCircleFilterId && 
      viewer.me && viewer.me.savedCircleFilters && 
      viewer.me.savedCircleFilters.find(savedFilter => savedFilter.id === this.props.appliedCircleFilterId) 
    ? viewer.me.savedCircleFilters.find(savedFilter => savedFilter.id === this.props.appliedCircleFilterId).canBeDeleted
    : !!this.props.appliedCircleFilterId;

    return (
      <SportunityPageView>
        {viewer && viewer.me && 
          <Animated.View style={{width: '100%', backgroundColor: colors.background, zIndex: 20, position: 'absolute', height: 38, transform: [{translateY:navbarTranslate}] }}>
              <SavedFilterList 
                filterList={viewer.me.savedCircleFilters}
                appliedFilterId={this.props.appliedCircleFilterId}
                isFilterActive={!!this.props.appliedCircleFilterId}
                onFilterTouched={this.onFilterClick}
                user={viewer.me} 
                hideFilterButton={true}
                hideNewFilterButton={false}
                onNewFilter={this.onNewFilter}
                isNewFilter={this.state.createNewFilter}
              />
            
          </Animated.View>
        }
        { viewer.me && (this.state.createNewFilter || !!this.state.filterId) &&
          <AnimatedListView 
            contentContainerStyle={styles.scrollViewContainer}
            onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                )}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            onScrollEndDrag={this._onScrollEndDrag}
            scrollEventThrottle={1}
          >
            <View style={{marginBottom: 15}}>
              <Field 
                type={"text"}
                title={I18n.t('filtersName')}
                value={this.state.filterName}
                onChange={(text) => this.setState({filterName:text})} 
              />
              <Field 
                type={"switch"}
                title={I18n.t('defaultFilter')}
                value={this.state.isDefaultFilter}
                onChange={this.updateDefaultFilter} 
              />
            </View>

            <View>
              <FilterDetailType
                viewer={viewer}
                language={this.props.language}
                changeCircleType={this.props.changeCircleType}
                circleType={this.props.circleType}
                availableQueries={this.props.availableQueries}
              />
            </View>

            {/*------------------------ SUBACCOUNTS ------------------------*/}
            {this.props.circleType && this.props.circleType.indexOf("CHILDREN_CIRCLES") >= 0 && viewer.me && viewer.me.subAccounts && viewer.me.subAccounts.length > 0 &&
              <FilterDetailUser
                title={I18n.t('myTeamsCircles')}
                userList={viewer.me.subAccounts}
                selectedUsers={this.props.users}
                onSelectUser={this.onSelectUser}
              />
            }

            {this.props.circleType && this.props.circleType.indexOf("CHILDREN_CIRCLES") >= 0 && viewer.me && viewer.me.profileType === 'ORGANIZATION' && viewer.me.masterAccount && viewer.me.masterAccount.subAccounts && viewer.me.masterAccount.subAccounts.length > 1 &&
              <FilterDetailUser
                title={I18n.t('otherTeamsCircles')}
                userList={viewer.me.masterAccount.subAccounts.filter(sub => sub.id !== viewer.me.id)}
                selectedUsers={this.props.users}
                onSelectUser={this.onSelectUser}
              />
            }

            {/*------------------------ MEMBER TYPE ------------------------*/}
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>
                {I18n.t('circle_memberTypeLong')}
              </Text>
              <ModalPicker
                data={viewer.me && viewer.me.profileType === 'PERSON' ? memberTypeList.filter(t => t.key === -1 || t.key === 0 || t.key === 1) : memberTypeList.filter(t => t.key === -1 || t.key === 2 || t.key === 3 || t.key === 4)}
                initValue={this.props.type === null ? I18n.t('select') : memberTypeList.find(item => item.key === this.props.type).label}
                onChange={e => this.props.changeMemberType(e.key)}
                cancelText={I18n.t('cancel')}
              />
            </View>  

            {/*------------------------ SPORTS ------------------------*/}

            <FilterDetailSports
              filters={sportFilter}
              viewer={viewer}
              onRemoveSportFilter={this.removeSportFilter}
              clearSportFilter={props.clearSportFilter}
              action={this.onSportFilterButtonPress}
              />

            {this.state.sportFilterIsOpen && 
              <Modal
                visible={this.state.sportFilterIsOpen}
                animationType={'slide'}
                transparent={false}
                onRequestClose={() => this.setState({sportFilterIsOpen: false})} 
                >
                  <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                    <TouchableOpacity
                      onPress={() => this.setState({sportFilterIsOpen: false})}
                      style={styles.closeIcon}>
                      <Image source={images.down_arrow}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                      {I18n.t('selectSport')}
                    </Text>
                  </View>
                  <View style={{marginTop: -metrics.navBarHeight, flex: 1}}>
                    <PublicCirclesFilter
                      viewer={this.props.viewer}
                      availableQueries={[]}
                      onRequestClose={() => this.setState({sportFilterIsOpen: false})} 
                      filterFrom={this.props.from}
                      />
                  </View>
                </Modal>
            }

            {/*------------------------ PLACE ------------------------*/}

            <FilterDetailPlaces
              changePlaceRadius={props.changePlaceRadius}
              changePlacePosition={props.changePlacePosition}
              clearPlaceFilter={props.clearPlaceFilter}
              changePlaceName={props.changePlaceName}
              radius={placeFilter.radius}
              lat={placeFilter.lat}
              lng={placeFilter.lng}
              placeName={placeFilter.name}
              isPlaceSelected={isPlaceSelected}
            />
          </AnimatedListView>
        }
        { viewer.me && (this.state.createNewFilter || (!!this.state.filterId && selectedFilterCanBeDeleted)) && 
            <View style={styles.saveFilterButtonsContainer}>
              <SportunityButton buttonStyle={styles.button}
                onPress={() => this.saveNewFilter()}>
                <Text style={styles.buttonText}>{I18n.t(this.state.createNewFilter ? 'saveFilter' : 'modifyFilter')}</Text>
              </SportunityButton>
              {!!this.state.filterId &&  
                <SportunityButton buttonStyle={styles.redButton}
                  onPress={() => this.onRemoveSavedFilter(this.state.filterId)}>
                  <Text style={styles.buttonText}>{I18n.t('deleteFilter')}</Text>
                </SportunityButton>
              }
            </View>
          }
      </SportunityPageView>
    );
  }
}

// propTypes
FiltersPage.propTypes = {
};

// state to props
const stateToProps = (state) => ({
    isFilterActive: state.publicCirclesFiltersState.isFilterActive,
    filters: state.publicCirclesFiltersState.filters, 
    circleType: state.publicCirclesFiltersState.filters.circleType, 
    placeFilter: state.publicCirclesFiltersState.filters.location,
    sportFilter: state.publicCirclesFiltersState.filters.sport,
    type: state.publicCirclesFiltersState.filters.type,
    users: state.publicCirclesFiltersState.filters.users, 
    nameCompletion: state.publicCirclesFiltersState.filters.nameCompletion,     
    appliedCircleFilterName: state.publicCirclesFiltersState.appliedCircleFilterName, 
    appliedCircleFilterId: state.publicCirclesFiltersState.appliedCircleFilterId, 
    language: state.sportunityLocale.language,
});

// dispatchToProps
const dispatchToProps = (dispatch) => ({
  clearFilters: bindActionCreators(clearFilters, dispatch),
  updatePublicCirclesFilterStatus: bindActionCreators(updatePublicCirclesFilterStatus, dispatch),
  changePlaceName: bindActionCreators(changePlaceName, dispatch),
  changePlaceRadius: bindActionCreators(changePlaceRadius, dispatch),
  changePlacePosition: bindActionCreators(changePlacePosition, dispatch),
  clearPlaceFilter: bindActionCreators(clearPlaceFilter, dispatch),
  addPublicCircleSportFilter: bindActionCreators(addPublicCircleSportFilter, dispatch),
  removeSportFilter: bindActionCreators(removeSportFilter, dispatch),
  clearSportFilter: bindActionCreators(clearSportFilter, dispatch),
  changeCircleNameCompletion: bindActionCreators(changeCircleNameCompletion, dispatch),
  changeMemberType: bindActionCreators(changeMemberType, dispatch),
  changeCircleType: bindActionCreators(changeCircleType, dispatch),
  applySavedCircleFilter: bindActionCreators(applySavedCircleFilter, dispatch),
  removeAppliedSavedCircleFilter: bindActionCreators(removeAppliedSavedCircleFilter, dispatch),
  addSubAccount: bindActionCreators(addSubAccount, dispatch),
  removeSubAccount: bindActionCreators(removeSubAccount, dispatch),
  clearSubAccounts: bindActionCreators(clearSubAccounts, dispatch),
})

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(FiltersPage);

const PublicCircleFiltersPageTemp = createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`fragment PublicCircleFiltersPage_viewer on Viewer{
    ...FilterDetailSports_viewer
    ...SavedFilterList_viewer
    ...PublicCirclesFilter_viewer
    me {
      id,
      pseudo,
      avatar,
      profileType,
      isSubAccount,
      subAccounts {
        id ,
        pseudo ,
        circles (last: 30) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
      }
      masterAccount {
        id
        subAccounts {
          id
          pseudo ,
          circles (last: 30) {
            edges {
              node {
                id
                name
                memberCount
              }
            }
          }
        }
      }
      defaultSavedCircleFilter {
        id
      }
      savedCircleFilters {
        id
        filterName
        canBeDeleted
        sport {
          sport {
            id,
            name {
              EN,
              FR
            },
            logo
            levels {
              id
              EN {
                name,
                description,
                skillLevel
              },
              FR {
                name,
                description,
                skillLevel
              }
            }
          },
          levels {
            id
            EN {
              name,
              description,
              skillLevel
            },
            FR {
              name,
              description,
              skillLevel
            }
          }
        }
        location {
          lat,
          lng,
          radius,
        }
        circleType
        memberType
        owners {
          id
          pseudo
        }
      }
    },
  }`,
});

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: !!navigation ? navigation.getParam('title', I18n.t('filters')) : I18n.t('filters')
    };
  };
  
  setTitle = title => this.props.navigation.setParams({title})

  render() {
    let {applyFilter, availableQueries} = this.props
    const {navigation} = this.props ;
    if (navigation) {
      applyFilter = this.props.navigation.getParam('applyFilter', null);
      availableQueries = this.props.navigation.getParam('availableQueries', null);
    }
    
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PublicCircleFiltersPageQuery {
            viewer {
              ...PublicCircleFiltersPage_viewer 
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <PublicCircleFiltersPageTemp applyFilter={applyFilter} availableQueries={availableQueries} viewer={props.viewer} query={props} {...this.props} setTitle={this.setTitle}/>;
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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  // Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSport } from 'sportunity/src/action/newActivityActions.js';
import { addSportFilter, clearSportFilter } from 'sportunity/src/action/FiltersStateActions.js';
import { updateSearchText } from 'sportunity/src/action/sportActions.js';
import { addPublicCircleSportFilter, clearSportFilter as clearCircleSportFilter } from 'sportunity/src/action/publicCirclesFiltersStateActions'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { colors } from 'sportunity/src/theme';
// import { ProfilePage } from 'sportunity/src/presentational/page/ProfilePage/ProfilePage.js';
import { some, cloneDeep } from 'lodash';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import SportListMutation from './SportListMutation';
import SearchBar from '../SearchBar/SearchBar.js'

import styles from './style';

// This should be refactored to several components in the future


class SportList extends Component {

  state = {
    id: '',
    name: '',
    positions: [],
    certificates: [],
    levels: [],
    levelStartIndex: '',
    levelEndIndex: '',
    levelStartName: '',
    levelEndName: '',
    key: 'sports',
    userSports: [],
    userSport: {},
    userLevels: [],
    userPositions: [],
    userCertificates: [],
    isUpperContentHidden: false,
    isLoaderVisible: false,
  }

  componentDidMount = () => {
    // If user comes from profile page
    if (this.props.from === 'profile'){
      // This function prepares data for mutation input (only need id's)
      // initialSports represents sports already added to user ( full objects for each sport )
      // updatedSports represents sports already added to user ( only id's of sport, levels, positions, certificates )
      // I need only id's for mutation inputs
      const initalSports = this.props.sports.slice();
      let updatedSports = [];
      // iterate initialSports
      for (let item of initalSports) {
        // push to updatedSports
        updatedSports.push({
          // sport value is sport id
          sport: item.sport.id,
          // iterate initialSports.levels array and return new array of level id's
          levels: (() => {
            let levelsArray = [];
            for( let level of item.levels) {
              levelsArray.push(level.id);
            }
            return levelsArray;
          })(),
          // iterate initialSports.positions array and return new array of position id's
          positions: (()=> {
            let positionsArray = [];
            for( let position of item.positions) {
              positionsArray.push(position.id);
            }
            return positionsArray;
          })(),
          // iterate initialSports.certificates array and return new array of certificates id's
          certificates: (()=> {
            let certificatesArray = [];
            for( let certificate of item.certificates) {
              certificatesArray.push({ certificate: certificate.certificate.id });
            }
            return certificatesArray;
          })(),
        })
      }
      // update state
      this.setState({
        userSports: updatedSports,
      })
    }
    else if (this.props.from === 'new-activity-levels') {
      this.setState({
        key: 'levelsStart',
      });
      setTimeout(() => {
       // TODO Actions.refresh({ title: this.props.sportName })
        this.props.filterSport(this.props.selectedSport.sport, () => {
          this.setState({
            levels: (() => {
              let levelsArray = [];
              if (this.props.sport && this.props.sport.levels && this.props.sport.levels.length > 0) {
                levelsArray = this.props.sport.levels; 
              }
              return levelsArray;
            })(),
          })
        })
      }, 100);
    }
  }

  componentDidUpdate = () => {
    // Hiding positions 
    if (this.state.key === 'positions') {
      this.setState({
        key: 'certificates',
      })
     // TODO Actions.refresh({ title: this.state.name });
    }
    if(this.state.key === 'positions' && this.state.userLevels.length > 0 && this.state.positions.length === 0){
      this.setState({
        key: 'certificates',
      })
      // TODO Actions.refresh({ title: this.state.name });
    }
    if(this.state.key === 'certificates' && this.state.userLevels.length > 0 && this.state.certificates.length === 0){
      this.setState({
        key: 'levels',
        isUpperContentHidden: true,
      })
      // TODO Actions.refresh({ title: this.state.name });
    }
  }

  toggleLoader = (bool) => (
    this.setState({
      isLoaderVisible: bool,
    })
  );

  // Key is used to change views
  updateKey = () => {
    if(this.state.key === 'sports') {
      this.setState({
        key: 'levelsStart',
      })
      
      // TODO Actions.refresh({ title: this.state.name });
    } else if (this.state.key === 'levelsStart') {
      this.setState({
        key: 'levelsEnd',
      })
     // TODO Actions.refresh({ title: this.state.name });
    }  else if (this.state.key === 'levelsEnd') {
      this.setState({
        key: 'positions',
      })
     // TODO Actions.refresh({ title: this.state.name });
    } else if (this.state.key === 'positions') {
      this.setState({
        key: 'certificates',
      })
     // TODO Actions.refresh({ title: this.state.name });
    } else if (this.state.key === 'certificates') {
      this.setState({
        key: 'levelsStart',
      })
     // TODO Actions.refresh({ title: this.state.name });
    }

  }

  previousKey = () => {
    if(this.state.key === 'certificates') {
      this.setState({
        key: 'positions',
      })
     // TODO Actions.refresh({ title: this.state.name });
    }
  }

  // Select sport to be added to user's profile or sportunity
  addSport = (item) => {
    if (this.props.from === 'new-activity') {
      this.setState({
        id: item.node.id,
        name: item.node.name[this.props.language.toUpperCase()],
        userLevels: item.node.levels,
      })
      setTimeout(() => this.submitSportunitySport(), 50);
    }
    else if (this.props.from === 'public-circles-filter') {
      this.setState({
        id: item.node.id,
        name: item.node.name[this.props.language.toUpperCase()],
        userLevels: item.node.levels,
      })
      setTimeout(() => this.submitPublicCircleSportFilter(), 50);
    }
    else {
      this.setState({
        id: item.node.id,
        name: item.node.name[this.props.language.toUpperCase()],
        positions: item.node.positions,
        certificates: item.node.certificates,
        levels: item.node.levels,
        key: 'levelsStart',
      });
      this.props.updateSearchText('');
     // TODO Actions.refresh({ title: item.node.name[this.props.language.toUpperCase()] });
    }
  }

  // Add level to state if it doesn't exist already
  addLevel = (item, index) => {
    // choosing start level (lowest)
    if(this.state.key === 'levelsStart'){
      let newArray = this.state.levels.slice();
      // delete levels lower then selected (from) the list
      newArray.splice(0, index)

      this.setState({
        levelStartIndex: index,
        levelStartName: item[this.props.language.toUpperCase()].name,
        key: 'levelsEnd',
        levels: newArray,
      });
      this.props.updateSearchText('');
     // TODO Actions.refresh({ title: this.state.name });
      // choosing end level (highest)
    } else if(this.state.key === 'levelsEnd'){

      let newArray = this.state.levels.slice(0, index + 1);
      this.setState({
        userLevels: [...this.state.userLevels, ...newArray],
        levelEndName: item[this.props.language.toUpperCase()].name,
        levelEndIndex: index,
        key: 'positions',
      }, () => {
        if (this.props.from === 'new-activity-levels')
          this.submitSportunitySportLevels()
        else if (this.props.from === 'profile')
          this.submitSport()
        else if (this.props.from === 'filter')
          this.submitSportFilter()
        else if (this.props.from === 'new-circle') 
          this.submitCircleSport()
        else if (this.props.from === 'public-circles-filter')
          this.submitPublicCircleSportFilter()

      });
      this.props.updateSearchText('');
     // TODO Actions.refresh({ title: this.state.name });
    }
  }

  // Add position to state if it doesn't exist already
  addPosition= (item, index) => {
    let newArray = this.state.userPositions.slice();
    if(some(newArray, { id: item.id })){
      return false;
    } else {
      newArray.push({
        [this.props.language.toUpperCase()]: item[this.props.language.toUpperCase()],
        id: item.id,
      });
    }
    this.setState({
      userPositions: newArray,
    })
    // remove chosen position from the list
    let updatedPositionsArray = this.state.positions.slice();
    updatedPositionsArray.splice(index, 1)
    this.setState({
      positions: updatedPositionsArray,
    });
    this.props.updateSearchText('');
  }

  // Add certificate to state if it doesn't exist already
  addCertificate= (item, index) => {
    let newArray = this.state.userCertificates.slice();
    if(some(newArray, { id: item.id })){
      return false;
    } else {
      newArray.push({
        name: {
          [this.props.language.toUpperCase()]: item.name[this.props.language.toUpperCase()],
        },
        id: item.id,
      });
    }
    this.setState({
      userCertificates: newArray,
    })
    // remove chosen certificates from the list
    let updatedCertificatesArray = this.state.certificates.slice();
    updatedCertificatesArray.splice(index, 1)
    this.setState({
      certificates: updatedCertificatesArray,
    });
    this.props.updateSearchText('');
  }

  // Clear all fields
  clearData = () => {
    this.setState({
      userLevels: [],
      userPositions: [],
      userCertificates: [],
      levelStartName: '',
      levelEndName: '',
      key: 'levelsStart',
    })
   // TODO Actions.refresh({ title: this.state.name });
  }

  // USER PROFILE SUBMIT

  // Update user sports on server
  submitSport = () => {
    // Initial values
    const viewer = this.props.viewer;
    const userIDVar = this.props.viewer.me.id;
    const sportVar = this.state.id;
    const levelsVar = [];
    for (let item of this.state.userLevels) {
      levelsVar.push(item.id);
    }
    const positionsVar = [];
    for (let item of this.state.userPositions) {
      positionsVar.push(item.id);
    }
    const certificatesVar = [];
    for (let item of this.state.userCertificates) {
      certificatesVar.push({ certificate: item.id });
    }
    const userSPortsVar = this.state.userSports;

    // Check if this sport already exists
    if(some(userSPortsVar, { sport: sportVar })){
      // If sport exists, update it
      for (let item of userSPortsVar){
        if (item.sport === sportVar){
          item.levels = levelsVar;
          item.positions = positionsVar;
          item.certificates = certificatesVar;
        }
      }
    } else {
      // If sport doesn't exists, add it
      userSPortsVar.push(
        {
          sport: sportVar,
          levels: levelsVar,
          positions: positionsVar,
          certificates: certificatesVar,
        }
      )
    }
    // Commit mutation
    this.toggleLoader(true);
    SportListMutation.commit({
        userID: userIDVar,
        user: {
          sports: userSPortsVar,
        },
      },
      (response) => {
        this.toggleLoader(false);
        console.log(response);
        Toast.show(I18n.t('sportsAddSuccess'));
        this.props.navigation.goBack() ;
      },
      error => {
        this.toggleLoader(false);
        let errors = JSON.parse(error.getError().source);
        console.log(errors);
      }
    );
  }

  // SPORTUNITY SUBMIT

  // Add sport to newActivity reducer
  submitSportunitySport = () => {

    const sportVar = this.state.id;
    const sportName = this.state.name;
    const sportLevelNames = [];
    const sportPositionNames = [];
    const sportCertificateNames = [];
    const levelsVar = [];

    for (let item of this.state.userLevels) {
      sportLevelNames.push(item[this.props.language.toUpperCase()].name);
    }
    for (let item of this.state.userPositions) {
      sportPositionNames.push(item[this.props.language.toUpperCase()]);
    }
    for (let item of this.state.userCertificates) {
      sportCertificateNames.push(item.name[this.props.language.toUpperCase()]);
    }


    for (let item of this.state.userLevels) {
      levelsVar.push(item.id);
    }
    const positionsVar = [];
    for (let item of this.state.userPositions) {
      positionsVar.push(item.id);
    }
    const certificatesVar = [];
    for (let item of this.state.userCertificates) {
      certificatesVar.push(item.id);
    }

    const sportunitySportVar = {
      sport: sportVar,
      levels: levelsVar,
      positions: positionsVar,
      certificates: certificatesVar,
      allLevelSelected: true
    }
    this.props.updateSport(sportName, sportLevelNames, sportPositionNames, sportCertificateNames, sportunitySportVar);
    this.props.navigation.goBack() ;
  }

  submitSportunitySportLevels = () => {

    const sportVar = this.props.selectedSport.sport;
    const sportName = this.props.sportName;
    const sportLevelNames = [];
    const sportPositionNames = [];
    const sportCertificateNames = [];
    const levelsVar = [];
    const positionsVar = [];
    const certificatesVar = [];

    for (let item of this.state.userLevels) {
      sportLevelNames.push(item[this.props.language.toUpperCase()].name);
    }

    for (let item of this.state.userLevels) {
      levelsVar.push(item.id);
    }

    const sportunitySportVar = {
      sport: sportVar,
      levels: levelsVar,
      positions: positionsVar,
      certificates: certificatesVar,
      allLevelSelected: false
    }
    this.props.updateSport(sportName, sportLevelNames, sportPositionNames, sportCertificateNames, sportunitySportVar);
    this.props.navigation.goBack() ;
  }


  // Add sportID to filterState reducer
  submitSportFilter = () => {

    const sportID = this.state.id;
    const level = [];
    for (let item of this.state.userLevels) {
      level.push(item.id);
    }
    const sportFilter = { sportID, level }
    this.props.clearSportFilter()
    setTimeout(() => this.props.addSportFilter(sportFilter), 50);
    this.props.navigation.goBack() ; 
  }

  submitPublicCircleSportFilter = () => {
    
    const sportID = this.state.id;
    const level = [];
    for (let item of this.state.userLevels) {
      level.push(item.id);
    }
    const sportFilter = { sportID, level }
    this.props.clearCircleSportFilter()
    setTimeout(() => this.props.addPublicCircleSportFilter(sportFilter), 50);
    if (this.props.filterFrom && this.props.filterFrom === 'new-sportunity-invitations')
      this.props.onRequestClose()
    else
      this.props.navigation.goBack() ;
  }
  
  submitCircleSport = () => {
    const sportID = this.state.id;
    const sportName = this.state.name ;
    const level = [];
    for (let item of this.state.userLevels) {
      level.push(item.id);
    }
    const sportFilter = { sportID, level, sportName }

    this.props.onCloseSportList(sportFilter) ;
    if (!this.props.modal)
      this.props.navigation.goBack() ;
  }

  render() {
    const { isUpperContentHidden } = this.state;
    let {  searchText, allSports, sportFilter, filterSports, loadMore, count, language } = this.props;
    let allSportsContent = cloneDeep(allSports);
    if (allSportsContent) 
      allSportsContent.edges = allSportsContent.edges.sort((a,b) => {
        return (a.node.name[language.toUpperCase()] > b.node.name[language.toUpperCase()] > 0) ? 1 : -1
      })

    let levels = cloneDeep(this.state.levels)
      .sort((x, y) => (x[language.toUpperCase()].skillLevel > y[language.toUpperCase()].skillLevel > 0) ? 1 : -1)

    return(
      <View style={styles.rootContainer}>

        {
          this.state.key === 'sports' &&
            <SearchBar
              sportFilter={sportFilter}
              filterSports={filterSports}
            />
        }

        {/* Subheader Text and button */}

        {
          this.state.key === 'levelsStart' &&
            <View style={styles.subHeaderContainer}>
              <Text style={styles.text}>{I18n.t('select') + ' '}</Text>
              <Text style={styles.lowerLevelText}>{I18n.t('selectLowestLevel')}</Text>
            </View>
        }
        {
          this.state.key === 'levelsEnd' &&
            <View style={styles.subHeaderContainer}>
              <Text style={styles.text}>{I18n.t('select') + ' '}</Text>
              <Text style={styles.higherLevelText}>{I18n.t('selectHighestLevel')}</Text>
            </View>
        }
        {
          this.state.key === 'positions' ?
            <View style={styles.subHeaderContainer}>
              <Text style={styles.text}>{I18n.t('selectPositions')}</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={this.updateKey}>
                <Text style={styles.buttonText}>
                  {I18n.t('skip')}
                </Text>
              </TouchableOpacity>
            </View>
            : null
        }
        {
          this.state.key === 'certificates' ?
            <View style={styles.subHeaderContainer}>
              <Text style={styles.text}>{I18n.t('selectCertificates')}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.previousKey}>
                  <Text style={styles.buttonText}>
                    {I18n.t('prev')}
                  </Text>
                </TouchableOpacity>
            </View>
            : null
        }

        {/* Levels list for choosing from/to levels */}
        {
          !this.state.isUpperContentHidden ?
            <ScrollView style={styles.container}>
              {
                this.state.key === 'sports' ?
                  allSportsContent && allSportsContent.edges
                    // .filter((item) => item.node.name.EN.toLowerCase().indexOf(searchText) >= 0)
                    .map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.itemContainer}
                        onPress={() => this.addSport(item)}
                      >
                        <Image
                          style={styles.icon}
                          source={{ uri: item.node.logo }}
                        />
                        <Text style={styles.name}>
                          {item.node.name[language.toUpperCase()]}
                        </Text>

                      </TouchableOpacity>
                    ))
                    : null
              }
              {
                allSportsContent && allSportsContent.edges.length === count && this.state.key === 'sports' &&
                  <TouchableOpacity onPress={loadMore}>
                    <Text style={styles.loadMore}>{I18n.t('loadAllSports')}</Text>
                  </TouchableOpacity>
              }

              {
                this.state.key === 'levelsStart' || this.state.key === 'levelsEnd' ?
                  levels
                    .filter((item) => item[language.toUpperCase()].name.toLowerCase().indexOf(searchText) >= 0)
                    .map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.itemContainer}
                        onPress={() => this.addLevel(item, index)}
                      >
                        <Text style={styles.name}>
                          {index + 1}:  {item[language.toUpperCase()].name}
                        </Text>

                      </TouchableOpacity>
                    ))
                    : null
              }

              {/* Positions list */}

              {
                this.state.key === 'positions' ?
                  this.state.positions
                    .filter((item) => item[language.toUpperCase()].toLowerCase().indexOf(searchText) >= 0)
                    .map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.itemContainer}
                        onPress={() => this.addPosition(item, index)}
                      >
                        <Text style={styles.name}>
                          {item[language.toUpperCase()]}
                        </Text>

                      </TouchableOpacity>
                    ))
                    : null
              }

              {/* Certificates list */}

              {
                this.state.key === 'certificates' ?
                  this.state.certificates
                    .filter((item) => item.name[language.toUpperCase()].toLowerCase().indexOf(searchText) >= 0)
                    .map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.itemContainer}
                        onPress={() => this.addCertificate(item, index)}
                      >
                        <Text style={styles.name}>
                          {item.name[language.toUpperCase()]}
                        </Text>

                      </TouchableOpacity>
                    ))
                    : null
              }

            </ScrollView> : null
        }


        {/*
          Bottom container represents chosen levels, positions and certificates
          isUpperContentHidden is always false ( Vincent requirement )
          We can uncoment it if needed or delete it
        */}
        {
          isUpperContentHidden &&
          <View style={{ 'flex': 1 }}>
            <Text style={styles.bottomSubtitle}>{I18n.t('validate')}</Text>
              <ScrollView contentContainerStyle={styles.bottomContainer}>

                <View style={styles.bottomColumn}>

                  <Text style={styles.bottomText}>
                    {I18n.t('lowestLevel')}
                  </Text>

                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                      {this.state.levelStartName || 'From...'}
                    </Text>
                  </View>

                  <Text style={styles.bottomText}>
                    {I18n.t('highestLevel')}
                  </Text>

                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                      {this.state.levelEndName || 'to...'}
                    </Text>
                  </View>
                </View>

                {
                  this.state.userPositions.length > 0 &&
                    <View style={styles.bottomColumn}>
                      <Text style={styles.bottomText}>
                        {I18n.t('positions')}
                      </Text>
                      {
                        this.state.userPositions
                          .map((position, index) => (
                            <View  key={index}  style={styles.nameContainer}>
                              <Text style={styles.name}>{position[language.toUpperCase()]}</Text>
                            </View>
                          ))
                      }
                    </View>
                }
                {
                  this.state.userCertificates.length > 0 &&
                    <View style={styles.bottomColumn}>
                      <Text style={styles.bottomText}>
                        {I18n.t('certificates')}
                      </Text>
                      {
                        this.state.userCertificates
                          .map((certificate, index) => (
                            <View  key={index}  style={styles.nameContainer}>
                              <Text style={styles.name}>{certificate.name[language.toUpperCase()]}</Text>
                            </View>
                          ))
                      }
                    </View>
                }

              </ScrollView>
          </View>
        }

        {
          this.state.isLoaderVisible &&
            <ActivityIndicator
              animating={this.state.isLoaderVisible}
              size="large"
              color={colors.blue}
            />
        }

        {
          this.state.userLevels.length > 0 && this.props.from === 'profile' ?
            <TouchableOpacity style={styles.addSportButtonContainer} onPress={this.submitSport}>
              <Text style={styles.addSportButtonText}>
                {I18n.t('validate')}
              </Text>
            </TouchableOpacity>
            : null
        }

        {
          this.state.userLevels.length > 0 && this.props.from === 'new-activity-levels' ?
            <TouchableOpacity style={styles.addSportButtonContainer} onPress={this.submitSportunitySportLevels}>
              <Text style={styles.addSportButtonText}>
                {I18n.t('validate')}
              </Text>
            </TouchableOpacity>
            : null
        }

        {
          this.state.userLevels.length > 0 && this.props.from === 'filter' ?
            <TouchableOpacity style={styles.addSportButtonContainer} onPress={this.submitSportFilter}>
              <Text style={styles.addSportButtonText}>
                {I18n.t('validate')}
              </Text>
            </TouchableOpacity>
            : null
        }

      </View>
    )
  }

}

SportList.propTypes = {
  viewer: PropTypes.object.isRequired,
  sports: PropTypes.array,
  allSports: PropTypes.object,
  searchText: PropTypes.string.isRequired,
  updateSearchText: PropTypes.func.isRequired,
  updateSport: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  searchText: state.sportunitySport.searchText,
  language: state.sportunityLocale.language,
})
const dispatchToProps = (dispatch) => ({
  updateSport: bindActionCreators(updateSport, dispatch),
  addSportFilter: bindActionCreators(addSportFilter, dispatch),
  clearSportFilter: bindActionCreators(clearSportFilter, dispatch),
  addPublicCircleSportFilter: bindActionCreators(addPublicCircleSportFilter, dispatch),
  clearCircleSportFilter: bindActionCreators(clearCircleSportFilter, dispatch),
  updateSearchText: bindActionCreators(updateSearchText, dispatch),
})

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(SportList)

//
// SearchBar.propTypes = {
//   searchText: React.PropTypes.string.isRequired,
//   updateSearchText: React.PropTypes.func.isRequired,
// };
//
// const stateToProps = (state) => ({
//   searchText: state.sportunitySport.searchText,
// });
//
// const dispatchToProps = (dispatch) => ({
//   updateSearchText: bindActionCreators(updateSearchText, dispatch),
// });

export default createFragmentContainer(ReduxContainer, {
  sport: graphql`
    fragment SportList_sport on Sport {
      id
      name{
        id,
        EN,
        FR
      },
      logo,
      levels{
        id,
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
  `,
  sports: graphql`
    fragment SportList_sports on SportDescriptor @relay(plural: true){
      sport{
        id,
        name{
          id,
          EN,
          FR
        },
        logo,
        positions{
          id,
          EN,
          FR
        },
        certificates{
          id,
          name{
            id,
            EN,
            FR
          }
        },
        levels{
          id,
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
      positions{
        id
        EN,
        FR
      },
      certificates{
        validation
        certificate{
          id,
          name{
            id,
            EN,
            FR
          }
        }
      },
      levels{
        id,
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
  `,
  allSports: graphql`
    fragment SportList_allSports on SportConnection {
      edges {
        node {
          id,
          name {
            id,
            EN,
            FR
          },
          logo,
          positions {
            id,
            EN,
            FR
          },
          certificates {
            id,
            name {
              id,
              EN,
              FR
            }
          },
          levels {
            id,
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
      }
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

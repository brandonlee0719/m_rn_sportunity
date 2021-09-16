import PropTypes from 'prop-types';
import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import RemoveSportMutation from './RemoveSportMutation.js'
import { metrics, fonts, colors, images } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './infoContentStyles';


class SportsList extends PureComponent {

  constructor() {
    super();

    this.state = {
      userSports: [],
      isOpen: true,
    }
  }

  componentDidMount = () => {
    // this.props.sports.length > 2 && this.setState({ isOpen: false })
    if (this.props.viewer.me){

      const initalSports = this.props.sports.slice();
      let updatedSports = [];

      for (let item of initalSports) {
        updatedSports.push({
          sport: item.sport.id,
          levels: (() => {
            let levelsArray = [];
            for( let level of item.levels) {
              levelsArray.push(level.id);
            }
            return levelsArray;
          })(),
          positions: (()=> {
            let positionsArray = [];
            for( let position of item.positions) {
              positionsArray.push(position.id);
            }
            return positionsArray;
          })(),
          certificates: (()=> {
            let certificatesArray = [];
            for( let certificate of item.certificates) {
              certificatesArray.push({ certificate: certificate.certificate.id });
            }
            return certificatesArray;
          })(),
        })
      }
      this.setState({
        userSports: updatedSports,
      });
    }
  }

  deleteSport = (item, index) => {
    const viewer = this.props.viewer;
    const userIDVar = this.props.viewer.me.id;
    const userSPortsVar = this.state.userSports.slice();
    for (let sport of userSPortsVar){
      if(sport.sport === item.sport.id){
        userSPortsVar.splice(index, 1)
      }
    }

    this.setState({
      userSports: userSPortsVar,
    });
    
    RemoveSportMutation.commit({
      userID: userIDVar,
      user: {
        sports: userSPortsVar,
      },
    },
    (response) => {
      console.log(response);
      Toast.show(I18n.t('sportRemoveSuccess'));
    },
    error => {
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    });

  }

  render() {
    const { isOpen } = this.state;
    const { sports, viewer, language } = this.props;
    return(
      <View>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.capitalWord}>
              {I18n.t('sports')} ({sports.length})
            </Text>
            {
              viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
                <TouchableOpacity
                  style={styles.addContainer}
                  onPress={() => this.props.navigation.navigate('meSports')}
                >
                  <Icon name="ios-add" color={colors.charcoal} size={22} />
                </TouchableOpacity>
            }
          </View>
          {
            sports.length > 1 && isOpen &&
              <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                <Image
                  style={style.headerIcon}
                  source={images.down_arrow}
                />
              </TouchableOpacity>
          }
          {
            sports.length > 1 && !isOpen &&
              <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                <Image
                  style={style.headerIcon}
                  source={images.right_arrow_blue}
                />
              </TouchableOpacity>
          }
        </View>
        {
          sports.length > 0 ?
            isOpen && sports.map((item, index) => {
              return (
                <View
                  style={style.container}
                  key={index}
                >
                  <View style={style.itemContainer}>
                    <Image style={style.sportIcon} source={{ uri: item.sport.logo }} />
                    <Text style={style.name} >
                      {item.sport.name[language.toUpperCase()]}
                    </Text>
                    {
                      viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
                        <TouchableOpacity style={style.removeIcon} onPress={() => this.deleteSport(item, index)}>
                          <Text style={style.deleteIcon}>x</Text>
                        </TouchableOpacity>
                    }
                  </View>

                  <View style={style.itemContainer}>
                    <View style={style.levelsPositionsContainer}>
                      <Text style={style.name}>
                        {I18n.t('from') + ": " + item.levels[0][language.toUpperCase()].name + " "+
                        I18n.t('to') + ": " + item.levels[item.levels.length -1][language.toUpperCase()].name}
                      </Text>
                    </View>
                  </View>

                  <View style={style.itemContainer}>
                    <View style={style.levelsPositionsContainer}>
                      {
                        item.positions.map((position, positionIndex) => (
                          <View style={{'flexDirection': 'row'}} key={positionIndex}>
                            <Text key={positionIndex} style={style.name} >
                              {position[language.toUpperCase()]}
                            </Text>
                          </View>
                        ))
                      }
                    </View>
                  </View>

                  <View style={style.itemContainer}>
                    <View style={style.levelsPositionsContainer}>
                      {
                        item.certificates.map((certificate, certificateIndex) => (
                          <View style={{'flexDirection': 'row'}} key={certificateIndex}>
                            <Text key={certificateIndex} style={style.name} >
                              {certificate.certificate.name[language.toUpperCase()]}
                            </Text>
                            {
                              certificate.validation === 'VALIDATED' && <Image source={images.check} style={style.sportIcon}/>
                            }
                          </View>
                        ))
                      }
                    </View>
                  </View>

                </View>
                )
              }
            )
            : <View style={[style.container, style.footer]}>
                <View style={style.itemContainer}>
                  <Text style={style.itemSubitleText}>
                    {I18n.t('noSports')}
                  </Text>
                </View>
              </View>
        }

      </View>
    )
  }

}

SportsList.propTypes = {
  sports: PropTypes.array.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

const ReduxContainer = connect(
  stateToProps,
  null
)(SportsList);

export default createFragmentContainer(ReduxContainer, {
  sports: graphql`
    fragment SportsList_sports on SportDescriptor @relay(plural: true){
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
        validation,
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
});

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 5,
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
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  headerIcon: {
    tintColor: colors.lightGreen,
    alignSelf: 'flex-end',
    marginRight: metrics.baseMargin,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  addText: {
    marginLeft: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  container: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
  },
  levelsPositionsContainer: {
    marginLeft: 15,
    flex: 1,
  },
  sportIcon: {
    width: 17,
    height: 17,
    tintColor: colors.skyBlue,
    alignSelf: 'flex-end',
  },
  name: {
    marginLeft: metrics.doubleBaseMargin,
    flex: 1,
    color: colors.darkGrey,
    fontSize: fonts.size.medium,
  },
  removeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
},
  deleteIcon: {
    fontSize: fonts.size.h5,
    color: colors.skyBlue,
  },
  itemSubitleText: {
    color: colors.darkGrey,
    fontSize: fonts.size.tiny,
  },
});

I18n.fallbacks = true
I18n.translations = translations;

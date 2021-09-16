import React, { Component } from 'react';
import {
   View,
   Image,
   StyleSheet,
   ScrollView,
   TextInput,
   TouchableOpacity,
   Dimensions,
   ActivityIndicator,
} from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import { debounce } from 'lodash';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
} from 'react-relay';
import { withNavigation } from 'react-navigation';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import environment from 'sportunity/src/createRelayEnvironment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLanguages } from 'sportunity/src/action/createProfileActions.js'
import LanguagesMutation from './LanguagesMutation.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const isolanguages = require('@cospired/i18n-iso-languages')
isolanguages.registerLocale(require("@cospired/i18n-iso-languages/langs/en.json"))
isolanguages.registerLocale(require("@cospired/i18n-iso-languages/langs/fr.json"))



class Languages extends Component {

  constructor(props){
    super(props);

    this.updateSearchText = debounce(this.updateSearchText, 300);
    this.state = {
      isLoading: false,
      searchText: '',
      languageNames: [],
      languageIds: [],
    }
  }

  componentDidMount = () => {
    const newLanguageIds = this.state.languageIds;
    const newLanguageNames = this.state.languageNames;

    for (let language of this.props.viewer.me.languages) {
      newLanguageIds.push(language.id);
      newLanguageNames.push({ name: language.name, id: language.id, code: language.code });
    }

    this.setState({
      languageNames: newLanguageNames,
      languageIds: newLanguageIds,
      searchText: '',
    });
  }


  updateSearchText = (text) => {
    this.setState({
      searchText: text,
    })
  }

  addLanguage = (item) => {
    const newLanguageIds = this.state.languageIds;
    const newLanguageNames = this.state.languageNames;
    this.checkIfLanguageExist(this.state.languageNames, item.name);
    newLanguageIds.push(item.id);
    newLanguageNames.push({ name: item.name, id: item.id, code: item.code });
    this.setState({
      languageNames: newLanguageNames,
      languageIds: newLanguageIds,
      searchText: '',
    });
  }

  checkIfLanguageExist = (languageNames, name) => {
    languageNames.some(item => item.name === name && Toast.show(I18n.t('languageSelected')))
  }

  removeLanguage = (item) => {
    let newLanguageIds = this.state.languageIds;
    let newLanguageNames = this.state.languageNames;
    newLanguageIds = newLanguageIds.filter(language => language !== item.id);
    newLanguageNames = newLanguageNames.filter(language => language.name !== item.name);
    this.setState({
      languageNames: newLanguageNames,
      languageIds: newLanguageIds,
      searchText: '',
    });
  }

  submitLanguages = () => {
    this.setState({ isLoading: true });
    const languagesVar = this.state.languageIds;
    const viewer = this.props.viewer;
    const userIDVar = this.props.viewer.me.id;

    LanguagesMutation.commit({
        userID: userIDVar,
        user: {
          languages: languagesVar
        },
      },
      (response) => {
        this.setState({ isLoading: false });
        console.log(response);
        Toast.show(I18n.t('languageUpdateSuccess'));
        this.props.navigation.goBack()
      },
      error => {
        this.setState({ isLoading: false });

        let errors = JSON.parse(error.getError().source);
        Toast.show(I18n.t('updateFailed'))
        console.log(errors);
      },
    );
  }

  render(){
    const {viewer, screenProps: {language}} = this.props;
    
    return (
      <View style={styles.listContainer}>

        <View style={styles.searchBarContainer}>

          <Image source={images.search_blue} style={styles.searchIcon}/>

          <TextInput
            style={styles.searchBarInput}
            placeholder={I18n.t('searchLanguage')}
            autoCorrect={false}
            autoCapitalize="none"
            clearTextOnFocus
            onChangeText={(text) => this.updateSearchText(text)}
            underlineColorAndroid={colors.snow}
          />

        </View>

        <ScrollView style={styles.languageList}>

          {viewer && viewer.languages && 
            viewer.languages
              .filter((item) => 
                isolanguages.getName(item.code, language)
                ? isolanguages.getName(item.code, language).toLowerCase().indexOf(this.state.searchText) >= 0
                : item.name.toLowerCase().indexOf(this.state.searchText) >= 0)
              .map((item) => (
                <TouchableOpacity
                  key={item.code}
                  onPress={() => this.addLanguage(item)}
                  style={styles.languageItem}
                >
                  <Text
                    style={[styles.languageText]}
                  >
                    {isolanguages.getName(item.code, language) ? isolanguages.getName(item.code, language) : item.name}
                  </Text>
                </TouchableOpacity>
              ))
          }
        </ScrollView>

        <Text style={styles.languageHeaderText}>{I18n.t('yourLanguages')}</Text>

        <ScrollView contentContainerStyle={styles.chosenlanguagesContainer}>
          {
            this.state.languageNames.map((item) => (
              <TouchableOpacity
                style={styles.chosenLanguageItem}
                key={item.id}
                onPress={() => this.removeLanguage(item)}
              >
                <Text style={styles.chosenLanguageText}>
                  {isolanguages.getName(item.code, language) ? isolanguages.getName(item.code, language) : item.name}
                </Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>

        {
          this.state.isLoading &&
            <ActivityIndicator
              animating={this.state.isLoading}
              size="large"
              color={colors.blue}
            />
        }

        <TouchableOpacity style={styles.submitButtonContainer} onPress={this.submitLanguages}>
          <Text style={styles.submitButtonText}>
            {I18n.t('addLanguages')}
          </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return({
    updateLanguages: bindActionCreators(updateLanguages, dispatch),
  })
}

const ReduxContainer = connect(
  null,
  dispatchToProps
)(Languages)

const LanguagesTemp = createFragmentContainer(withNavigation(ReduxContainer), 
  graphql`
    fragment LanguagesPage_viewer on Viewer {
      id,
      languages {
        id,
        code,
        name
      }
      me {
        id,
        languages {
          id,
          code,
          name
        }
      }
    }
  `,
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('languages')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query LanguagesPageQuery {
            viewer {
              ...LanguagesPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <LanguagesTemp query={props} viewer={props.viewer} {...this.props}/>;
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

const { height } = Dimensions.get('window');

const styles =  StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    padding: 5,
    borderWidth: 2,
    borderColor: colors.skyBlue,
  },
  searchIcon: {
    tintColor: colors.lightGreen,
  },
  searchBarInput: {
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: metrics.baseMargin,
    maxHeight: 30,
    color: colors.darkGreen,
  },
  languageList: {
    height: height / 2.5,
    borderBottomColor: colors.skyBlue,
    margin: metrics.baseMargin,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    padding: metrics.baseMargin,
    // marginHorizontal: metrics.doubleBaseMargin,
    marginVertical: 3,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  languageText: {
    fontSize: fonts.size.medium,
    color: colors.darkGrey,
  },
  languageHeaderText: {
    margin: metrics.baseMargin,
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    fontWeight: '600',
    alignSelf: 'center',
  },
  chosenlanguagesContainer: {
    alignItems: 'center',
    height: height/2.5,
  },
  chosenLanguageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    padding: metrics.baseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    marginVertical: 3,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  chosenLanguageText: {
    color: colors.darkGrey,
  },
  submitButtonContainer: {
    backgroundColor: colors.skyBlue,
    margin: metrics.baseMargin,
    padding: metrics.baseMargin,
    borderRadius: 50,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: fonts.size.h6,
    color: colors.snow,
    textAlign: 'center',
  },
});

I18n.fallbacks = true
I18n.translations = translations;


// elevation: 2,
// shadowColor: 'black',
// shadowOffset: { width: 1, height: 3 },
// shadowOpacity: 0.1,

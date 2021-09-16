import React, { Component } from 'react';
import {
   View,
   Image,
   StyleSheet,
   ScrollView,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import Text from 'react-native-text';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import { debounce } from 'lodash';
import Relay from 'react-relay/classic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLanguages } from 'sportunity/src/action/createProfileActions.js'


class Languages extends Component {

  constructor(props){
    super(props);

    this.updateSearchText = debounce(this.updateSearchText, 300);
    this.state = {
      searchText: '',
      languageNames: [],
      languageIds: [],
    }
  }


  updateSearchText = (text) => {
    this.setState({
      searchText: text,
    })
  }

  addLanguage = (item) => {
    const newLanguageIds = this.state.languageIds;
    const newLanguageNames = this.state.languageNames;
    newLanguageIds.push(item.id);
    newLanguageNames.push(item.name);
    this.setState({
      languageNames: newLanguageNames,
      languageIds: newLanguageIds,
      searchText: '',
    });
    this.props.updateLanguages(newLanguageIds);
  }

  render(){
    return (
      <View style={styles.listContainer}>

        <View style={styles.searchBarContainer}>

          <Image source={images.search_blue} />

          <TextInput
            style={styles.searchBarInput}
            placeholder="Search language"
            autoCorrect={false}
            autoCapitalize="none"
            clearTextOnFocus
            onChangeText={(text) => this.updateSearchText(text)}
            underlineColorAndroid={colors.snow}
          />

        </View>

        {
          this.state.searchText !== '' ?
            <ScrollView style={styles.languageList}>
              {
                this.props.languages
                  .filter((item) => item.name.toLowerCase().indexOf(this.state.searchText) >= 0)
                  .map((item) => (
                    <TouchableOpacity
                      key={item.code}
                      onPress={() => this.addLanguage(item)}
                      style={styles.languageItem}
                    >
                      <Text
                        style={[styles.languageText]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))
              }
            </ScrollView> : null
        }

        <View style={styles.chosenlanguagesContainer}>
          <Text style={styles.languageHeaderText}>CHOSEN LANGUAGES</Text>
          {
            this.state.languageNames.map((item) => (
              <View key={item}>
                <Text>{item}</Text>
              </View>
            ))
          }
        </View>


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

export default Relay.createContainer(ReduxContainer, {
  fragments: {
    languages: () => Relay.QL`fragment on Language @relay(plural: true){
        id,
        code,
        name
      }
    `,
  },
});

const styles =  StyleSheet.create({
  listContainer: {
    margin: metrics.doubleBaseMargin,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.silver,
    alignItems: 'center',
    padding: 5,
    borderWidth: 2,
    borderColor: colors.skyBlue,
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
    maxHeight: 150,
    borderBottomColor: colors.skyBlue,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.skyBlue,
    paddingLeft: 70,
    padding: metrics.baseMargin,
  },
  languageText: {
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
  },
  languageHeaderText: {
    margin: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  chosenlanguagesContainer: {
    alignItems: 'center',
  },
});

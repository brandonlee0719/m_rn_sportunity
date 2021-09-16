// @flow
import PropTypes from 'prop-types';

import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker, TextInput, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';

import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../Button/roundedButton';
import Input, {inputStyles} from '../../../Input';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class AddChildModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            parent1Email: '',
            parent2Email: '',
            childName: '',
            error: ''
        }
    }
  

    onClose = () => {
        this.props.onClose()
    }

    componentDidMount = () => {
    }

    onAddChild = () => {
        this.setState({error: ""})
        const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!this.state.parent1Email || this.state.parent1Email === '' || !this.state.childName || this.state.childName === '') {
            this.setState({error: I18n.t('sportunityCarpoolingEmptyFields')})
            return ;
        }

        if (!isEmail.test(this.state.parent1Email) || (this.state.parent2Email && !isEmail.test(this.state.parent2Email))) {
            this.setState({error: I18n.t('loginEmailValidationError')})
            return ;
        }
        
        this.props.addChildParent(this.state.parent1Email, this.state.parent2Email, this.state.childName);
        this.props.onClose()
    }

    render() {
        const { show } = this.props;

        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={this.onClose}
                >
                
                <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                    <TouchableOpacity
                        onPress={this.onClose}
                        style={styles.icon}>
                        <Image source={images.down_arrow}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>
                        {I18n.t('inviteChild')}
                    </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.listContainer}>
                        <Input
                            updateText={(e) => this.setState({parent1Email: e.trim()})}
                            placeholder={I18n.t('inviteChildParent1Email')}
                            noicon={true}
                            value={this.state.parent1Email}
                        />
                        <Input
                            updateText={(e) => this.setState({parent2Email: e.trim()})}
                            placeholder={I18n.t('inviteChildParent2Email')}
                            noicon={true}
                            value={this.state.parent2Email}
                        />
                        <Input
                            updateText={(e) => this.setState({childName: e})}
                            placeholder={I18n.t('inviteChildName')}
                            noicon={true}
                            value={this.state.childName}
                        />
                    </View>
                    {this.state.error !== '' &&
                        <View style={{alignContent:'center' ,alignItems:'center'}}>
                            <Text style={styles.error}>
                                {this.state.error}
                            </Text>
                        </View>
                    }
                    <Button onPress={this.onAddChild}>
                        {I18n.t('invite')}
                    </Button>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  content: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'  
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    // marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  error: {
    color: colors.red,
    // marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  openIcon: {
    marginLeft: metrics.baseMargin,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    padding: 15,
  },
  input: {
    padding: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: 30,
    maxHeight: 30,
    color: colors.skyBlue,
  },
  searchIcon: {
    tintColor: colors.lightGreen,
  },
  headerAndroid: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 0,
  },
  headerIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 64,
    paddingTop: 14,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  listContainer: {
    flex: 1,
    marginTop: 15
  },
  picker: StyleSheet.flatten([inputStyles.inputContainer, {
    color: colors.skyBlue
  }]),
  icon: {
    marginLeft: metrics.baseMargin,
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

AddChildModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddChildModal;

I18n.fallbacks = true
I18n.translations = translations;

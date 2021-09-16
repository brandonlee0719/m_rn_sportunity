import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Modal,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images'
import Button from '../Button/roundedButton'
import I18n from 'sportunity/src/lib/I18n'

class Prompt extends Component {
  state = {
    input: '',
  }

  _apply = () => {
    this.props.onChange(this.state.input)
    this.props.onClose()
  }

  _cancel = () => {
    this.props.onClose()
  }

  componentWillReceiveProps({ value }) {
    if (this.props.value != value)
    this.setState({
      input: value,
    })
  }

  render = () =>
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={this.props.isVisible}
      onRequestClose={this.props.onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.onClose()}
            style={styles.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.container} >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder={I18n.t('circleInfoName')}
              value={this.state.input}
              autoCapitalize="none"
              selectionColor="#ffffff"
              underlineColorAndroid={colors.skyBlue}
              onChangeText={(value) => this.setState({ input: value })}
            />
              <View style={{ flexDirection: 'row' }}>
                <Button style={{ fex: 1, width: '40%', backgroundColor: colors.bloodOrange, }} onPress={this._cancel}>
                    {I18n.t('cancel')}
                </Button>
                <Button style={{ fex: 1, width: '40%', }} onPress={this._apply}>
                    {I18n.t('apply')}
                </Button>
              </View>
          </View>
        </View>


      </View>
    </Modal>
}

Prompt.propTypes = {
  isVisible: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  inputContainer: {
    backgroundColor: colors.frost,
    margin: metrics.baseMargin,
    borderRadius: 5,
    padding: metrics.baseMargin,
    flex: 0,
    minWidth: 200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 5,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
})

export default Prompt

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import icons from 'sportunity/src/theme/images';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import { Header } from '../../../Header';
import styles from './style';

class CircleListModal extends Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
   }

   onClose = () => {
       this.props.onClose()
   }

  render() {
    return (
        <Modal 
            visible={this.props.isVisible}
            animationType={'slide'}
            transparent={false}
            onRequestClose={this.onClose} >
            <Header 
                onPressFunc={this.onClose}
                imgSrc={images.down_arrow}
                text={this.props.title}
            />
            {/* <View style={styles.header}>
                <TouchableOpacity
                    onPress={this.onClose}
                    style={styles.icon}>
                    <Image source={images.down_arrow}/>
                </TouchableOpacity>

                <Text style={styles.title}>
                    {this.props.title}
                </Text>
            </View> */}
            {this.props.children}


      </Modal>
    )
  }
}

export default CircleListModal;

I18n.fallbacks = true
I18n.translations = translations;

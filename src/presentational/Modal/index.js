import PropTypes from 'prop-types';
import React from 'react';
import { Modal, TouchableOpacity, View, Image } from 'react-native';
import Text from 'react-native-text';
import icons from 'sportunity/src/theme/images';
import style from './style';

const ModalSportunity = ({
  isModalVisible,
  openCloseModal,
  children,
  title,
  image,
}) => (
  <View>
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isModalVisible}
      onRequestClose={openCloseModal}
    >

      <View style={style.header}>
        <TouchableOpacity
          onPress={openCloseModal}
          style={style.icon}
        >
          <Image
            source={icons.down_arrow}
          />
        </TouchableOpacity>
        
        <View style={style.titleContainer}>
          {image !== null && <Image style={style.image} source={image} />}
          <Text style={style.title}>
            {title}
          </Text>
        </View>
      </View>
      {children}
    </Modal>
  </View>
);

ModalSportunity.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  openCloseModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node,
  
};

export default ModalSportunity;

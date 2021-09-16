// @flow
import PropTypes from 'prop-types';

import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image, TextInput, Switch, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import Button from '../../../../Button/roundedButton';
import { images } from 'sportunity/src/theme';
import styles from './modalStyle';
import {ListBlock, ListBlockItem} from '../../../../ListBlock';

class CircleListModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            selectedCircle: null,
        }
    }

    componentDidMount = () => {
    }

    onSelectCircle = (circle) => {
        this.setState({selectedCircle: circle, isLoadingMembers: true})
    }

    render() {
        const { show, onClose, circleList, onSelect} = this.props;
        
        return (
        <View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={onClose}
            >
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View>
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={onClose}
                                style={styles.icon}>
                                <Image source={images.down_arrow}/>
                            </TouchableOpacity>

                            <Text style={styles.title}>
                                {this.props.title}
                            </Text>
                        </View>
                        <ScrollView style={styles.listContainer} >
                            { circleList && 
                                circleList.map((circle,id) => (
                                    <TouchableOpacity key={id} onPress={() => onSelect(circle)}>
                                        <View style={styles.itemContainer}>
                                            <View style={styles.colContainer}>
                                                <View style={styles.imageContainer}>
                                                    <ImageBackground style={styles.image} source={images.circleLarge}>
                                                        <Text style={styles.members}>{circle.memberCount}</Text>
                                                    </ImageBackground>
                                                </View>
                                                <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                    <Text style={styles.name}>
                                                        {circle.name}
                                                    </Text>
                                                    {(circle.owner && circle.owner.id !== this.props.self.id) ?
                                                        <View style={styles.ownerContainer}>
                                                            {circle.owner && circle.owner.avatar 
                                                                ? <Image style={styles.avatar} source={{uri: circle.owner.avatar}}/>
                                                                : <Image style={styles.avatar} source={images.profile_photo} />
                                                            }
                                                            <Text style={styles.ownerName}>
                                                                {circle.owner.pseudo || ''}
                                                            </Text>
                                                        </View>
                                                    : null}
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            )}

                        </ScrollView>
                    </View>
                </View>
            </Modal>

        </View>
        )
    }
}

CircleListModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CircleListModal;

I18n.fallbacks = true
I18n.translations = translations;

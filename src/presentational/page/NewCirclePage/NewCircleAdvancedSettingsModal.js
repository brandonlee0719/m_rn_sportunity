import React from 'react';
import {Platform, View, Image, TouchableOpacity, Modal, Switch, ScrollView} from 'react-native';
import Text from 'react-native-text';
import ModalPicker from 'react-native-modal-selector';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast'

import translations from 'sportunity/src/translations.js';
import { colors, images } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import TouchableButton from 'sportunity/src/presentational/Button/OpenModalButton'
import Address from '../../forms/Address';

import styles from './styles';

class NewCircleAdvancedSettingsModal extends React.Component {

    constructor() {
        super();
        this.state = {
            isModalVisible: false,
        }
    }

    openCloseModal = () => {
      this.setState({
          isModalVisible: !this.state.isModalVisible
      });
    }

    onValidate = () => {
        this.setState({
            isModalVisible: false
        })
    }

    openSportList = () => {
        this.setState({isModalVisible: false});
        this.props.navigation.navigate('circleSport', {onCloseSportList: this.onCloseSportList});
    }

    onCloseSportList = (e) => {
        this.setState({isModalVisible: true});
        this.props.updateSport(e);
    }

    render = () => {
        const {viewer, 
            isCirclePublic,
            isCircleAccessibleWithLink,
            isCircleShared,
            circleType,
            address,
            sport,
            updatePublicSwitch,
            updateAccessibleWithLinkSwitch,
            updateSharedSwitch,
            updateType,
            updateAddress
        } = this.props ;
        
        
        const memberTypeList = viewer.me && viewer.me.profileType === 'PERSON'
        ?   [
                {key: 0, label: I18n.t('circles_member_type_'+0)},
                {key: 1, label: I18n.t('circles_member_type_'+1)},
            ]
        :   [
            {key: 0, label: I18n.t('circles_member_type_'+0)},
            {key: 1, label: I18n.t('circles_member_type_'+1)},
            {key: 2, label: I18n.t('circles_member_type_'+2)},
            {key: 3, label: I18n.t('circles_member_type_'+3)},
            {key: 4, label: I18n.t('circles_member_type_'+4)}
        ]

        return(
            <View style={styles.margin}
                ref={node => { this._containerNode = node }}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.openCloseModal}
                >
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>
                            {I18n.t('circleAdvancedSettings')}
                        </Text>
                        <Text style={styles.subTitle}>
                            {(isCirclePublic ? I18n.t('public') : I18n.t('private')) + ' - ' + (isCircleAccessibleWithLink ? I18n.t('circleActivatedLink') : I18n.t('circleDisabledLink')) + ' - ' + (isCircleShared ? I18n.t('circleShared') : I18n.t('circleNotShared'))}
                        </Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={images.right_arrow_blue}
                    />
                </TouchableOpacity>

                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.isModalVisible}
                    onRequestClose={this.openCloseModal}
                >
                    <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                        <TouchableOpacity
                            onPress={this.openCloseModal}
                            style={styles.closeIcon}>
                            <Image source={images.down_arrow}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>
                            {I18n.t('circleAdvancedSettings')}
                        </Text>
                    </View>
                    <ScrollView>
                        <View style={styles.modalContainer}>
                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {(isCirclePublic ? I18n.t('circleOptionPublic') : I18n.t('circleOptionPrivate'))+ ': '}
                                    </Text>
                                        {isCirclePublic ? I18n.t('circleOptionPublicExplaination') : I18n.t('circleOptionPrivateExplaination')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={isCirclePublic}
                                    onValueChange={updatePublicSwitch}
                                />
                            </View>

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {(isCircleAccessibleWithLink ? I18n.t('circleOptionAccessibleWithLink') : I18n.t('circleOptionNotAccessibleWithLink')) + ': '}
                                    </Text>
                                    {isCircleAccessibleWithLink ? I18n.t('circleOptionAccessibleWithLinkExplaination') : I18n.t('circleOptionNotAccessibleWithLinkExplaination')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={isCircleAccessibleWithLink}
                                    disabled={isCirclePublic}
                                    onValueChange={updateAccessibleWithLinkSwitch}
                                />
                            </View>

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {(isCircleShared ? I18n.t('circleOptionUsableByMembers') : I18n.t('circleOptionNotUsableByMembers')) + ': '}
                                    </Text>
                                    {isCircleShared ? I18n.t('circleOptionUsableByMembersExplaination') : I18n.t('circleOptionNotUsableByMembersExplaination')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={isCircleShared}
                                    onValueChange={updateSharedSwitch}
                                />
                            </View>

                            <Address
                                address={address}
                                onChange={updateAddress }
                                title={I18n.t('circle_place')}
                                type='cities'
                            />
                            
                            <View style={styles.touchableButtonContainer}>
                                <TouchableButton
                                    onPress={this.openSportList}
                                    disabled={false}
                                    label={"Sport"}
                                    select={sport ? sport.sportName : I18n.t('select')}
                                />
                            </View>

                            <Button onPress={this.onValidate}>
                                {I18n.t('circleSubscribeValidate')}
                            </Button>
                    </View>
                </ScrollView>
            </Modal>

            </View>
        )
    }
}

export default createFragmentContainer(NewCircleAdvancedSettingsModal, {
  viewer: graphql`
    fragment NewCircleAdvancedSettingsModal_viewer on Viewer {
      id
      me {
          profileType
      }
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;

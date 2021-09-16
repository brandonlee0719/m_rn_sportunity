import React from 'react';
import {
  Alert,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
  Platform,
  ScrollView
} from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast'

import CircleSport  from 'sportunity/src/presentational/page/SportPage/CircleSport.js';
import { colors, images } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import TouchableButton from 'sportunity/src/presentational/Button/OpenModalButton'
import AdminMembersInformation from './MembersInformation/AdminMembersInformation'
import styles from './style';
import translations from 'sportunity/src/translations.js';
import Address from '../../forms/Address';

import UpdateAskedInformationMutation from './MembersInformation/UpdateAskedInformationMutation'

class CircleOptions extends React.Component {

    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            isMembersInfoModalVisible: false,
            isSportModalVisible: false,
            isPublicSwitch: false,
            isUpdatableByMembersSwitch: false,
            isCircleUsableByMembersSwitch: false,
            isCircleAccessibleWithLink: true,
            isCircleAskComplementaryInfoSwitch: false,
            isChildrenCircleSwitch: false,
            address: null, 
            sport: null,
            description: ''
        }
    }

    componentDidMount = () => {
        this.resetState()
    }

    resetState = () => {
      this.setState({
          isPublicSwitch: this.props.circle.mode === 'PUBLIC',
          isUpdatableByMembersSwitch: this.props.circle.isCircleUpdatableByMembers,
          isCircleUsableByMembersSwitch: this.props.circle.isCircleUsableByMembers,
          isChildrenCircleSwitch: this.props.circle.circlePreferences.isChildrenCircle,
          isCircleAccessibleWithLink: this.props.circle.isCircleAccessibleFromUrl, 
          isCircleAskComplementaryInfoSwitch:
            this.props.circle.askedInformation &&
            this.props.circle.askedInformation.length>0,
          address: this.props.circle.address 
            ?   {address: this.props.circle.address.address, city: this.props.circle.address.city, country: this.props.circle.address.country, zip: this.props.circle.address.zip}
            :   null,
          sport: this.props.circle.sport 
            ?   {sportID: this.props.circle.sport.sport.id, sportName: this.props.circle.sport.sport.name[(this.props.language || 'en').toUpperCase()], level: this.props.circle.sport.levels.map(level => level.id)}
            :   null,
          description: this.props.circle.description
      })
    }

    openCloseModal = () => {
      this.resetState();
      this.setState({
          isModalVisible: !this.state.isModalVisible
      });
    }

    openCloseMembersInfoModal = () => {
      this.setState({
          isMembersInfoModalVisible: false,
          isModalVisible: true
      });
    }

    onValidate = () => {
        this.props.updateCircleOptions(
            this.state.isPublicSwitch,
            //this.state.isUpdatableByMembersSwitch,
            this.state.isCircleAccessibleWithLink,
            this.state.isCircleUsableByMembersSwitch,
            //this.state.isCircleAskComplementaryInfoSwitch,
            this.state.isChildrenCircleSwitch,
            this.state.address,
            this.state.sport,
            this.state.description
          );
        this.setState({
            isModalVisible: false
        })
    }

    controlPublicSwitch = e => {
        this.setState({
            isPublicSwitch: e,
            isCircleAccessibleWithLink: e ? true : this.state.isCircleAccessibleWithLink
        })
    }

    controlisCircleUsableByMembersSwitch = e => {
        this.setState({
            isCircleUsableByMembersSwitch: e
        })
    }

    controlisCircleAccessibleWithLink = e => {
        this.setState({
            isCircleAccessibleWithLink: e
        })
    }

    controlisCircleAskComplementaryInfoSwitch = () => {
      this.state.isCircleAskComplementaryInfoSwitch && this.props.circle.askedInformation.length>0
        ? Alert.alert(
            I18n.t('circleRemoveTitle'),
            I18n.t('circleRemoveAllData'),
            [
              { text: I18n.t('yes'), onPress: this.clearMembersInformation },
              { text: I18n.t('no'), onPress: () => {}},
            ]
          )
        : this.setState({
          isCircleAskComplementaryInfoSwitch: !this.state.isCircleAskComplementaryInfoSwitch
        })
    }

    clearMembersInformation = () => {
        const idVar = this.props.circle.id;
        const viewer = this.props.viewer ;

        let askedInformationVar = []

        UpdateAskedInformationMutation.commit({
            circleId: idVar,
            askedInformation: askedInformationVar
        },
        (response) => {
            Toast.show(I18n.t('updateFailed'));
            this.props.relay.refetch();
            
            this.setState({
                isCircleAskComplementaryInfoSwitch: false,
            })
        },
        error => {
            Toast.show(I18n.t('updateSuccess'));
        })
    }

    updateAddress = (e) => {
        this.setState({
            address: e
        })
    }

    openCircleList = () => {
        this.setState({isModalVisible: false});
        setTimeout(() => {this.setState({isSportModalVisible: true})}, 100)
    }

    onCloseSportList = (e) => {
        this.setState({isSportModalVisible: false});
        setTimeout(() => {this.setState({isModalVisible: true})}, 100)
        if (e)
            this.setState({
                sport: e
            })
    }

    handleExtractInfoTap = () => {
      /*this.setState({
        isMembersInfoModalVisible: true,
        isModalVisible: false
      })*/
      Alert.alert("", I18n.t('circleAskInfoComputer'))
    }

    updateDescription = text => 
        this.setState({description: text})

    render = () => {
        
        return(
            <View style={styles.margin}
                ref={node => { this._containerNode = node }}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.openCloseModal}
                >
                    <View style={styles.subContainer}>
                        <View style={styles.buttonIconContainer}>
                            <Image
                                style={styles.buttonicon}
                                source={images.cog}
                            />
                            <Text style={styles.text}>
                                {I18n.t('circleOptions')}
                            </Text>
                        </View>
                        <Text style={styles.subTitle}>
                            {(this.state.isPublicSwitch ? I18n.t('public') : I18n.t('private')) + ' - ' + (this.state.isCircleAccessibleWithLink ? I18n.t('circleActivatedLink') : I18n.t('circleDisabledLink')) + ' - ' + (this.state.isCircleUsableByMembersSwitch ? I18n.t('circleShared') : I18n.t('circleNotShared'))}
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
                        {I18n.t('circleOptions')}
                    </Text>
                </View>
                
                <ScrollView>
                    <View style={styles.modalContainer}>
                        <View>
                            <View style={styles.textareaContainer}>
                                <Text style={styles.switchLabel}>
                                    {I18n.t('description')}
                                </Text>
                                <TextInput
                                    style={styles.textarea}
                                    multiline
                                    maxLength={2000}
                                    numberOfLines={5}
                                    autoCorrect={false}
                                    placeholderTextColor="grey"
                                    placeholder={I18n.t('enterDescription')}
                                    autoCapitalize="none"
                                    onChangeText={this.updateDescription}
                                    underlineColorAndroid={colors.silver}
                                    value={this.state.description}
                                />
                            </View>

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {(this.state.isPublicSwitch ? I18n.t('circleOptionPublic') : I18n.t('circleOptionPrivate'))+ ': '}
                                    </Text>
                                    {this.state.isPublicSwitch ? I18n.t('circleOptionPublicExplaination') : I18n.t('circleOptionPrivateExplaination')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={this.state.isPublicSwitch}
                                    onValueChange={this.controlPublicSwitch}
                                />
                            </View>

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {(this.state.isCircleAccessibleWithLink ? I18n.t('circleOptionAccessibleWithLink') : I18n.t('circleOptionNotAccessibleWithLink')) + ': '}
                                    </Text>
                                    {this.state.isCircleAccessibleWithLink ? I18n.t('circleOptionAccessibleWithLinkExplaination') : I18n.t('circleOptionNotAccessibleWithLinkExplaination')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={this.state.isCircleAccessibleWithLink}
                                    onValueChange={this.controlisCircleAccessibleWithLink}
                                    disabled={this.state.isPublicSwitch}
                                />
                            </View>

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {(this.state.isCircleUsableByMembersSwitch ? I18n.t('circleOptionUsableByMembers') : I18n.t('circleOptionNotUsableByMembers')) + ': '}
                                    </Text>
                                    {this.state.isCircleUsableByMembersSwitch ? I18n.t('circleOptionUsableByMembersExplaination') : I18n.t('circleOptionNotUsableByMembersExplaination')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={this.state.isCircleUsableByMembersSwitch}
                                    onValueChange={this.controlisCircleUsableByMembersSwitch}
                                />
                            </View>

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>
                                    {I18n.t('circleAskInfo')}
                                </Text>
                                <Switch
                                    style={styles.switchButton}
                                    onTintColor={colors.skyBlue}
                                    value={this.state.isCircleAskComplementaryInfoSwitch}
                                    onValueChange={this.controlisCircleAskComplementaryInfoSwitch}
                                />

                            </View>

                            <View style={styles.touchableButtonContainer}>
                                {this.state.isCircleAskComplementaryInfoSwitch && (
                                    <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={this.handleExtractInfoTap}>
                                        <View style={styles.subContainer}>
                                            <Text style={styles.text}>
                                                {I18n.t('circleAskInfoExtract')}
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.icon}
                                            source={images.right_arrow_blue}
                                        />
                                    </TouchableOpacity>
                                )}
                                {this.state.isCircleAskComplementaryInfoSwitch && (
                                    <TouchableOpacity
                                        style={styles.buttonContainer}
                                        onPress={this.handleExtractInfoTap}
                                    >
                                        <View style={styles.subContainer}>
                                            <Text style={styles.text}>
                                                {I18n.t('circleAskMemberFees')}
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.icon}
                                            source={images.right_arrow_blue}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>

                            <Address
                                address={this.state.address}
                                onChange={this.updateAddress }
                                title={I18n.t('circle_place')}
                                type='cities'
                            />
                            
                            <View style={styles.touchableButtonContainer}>
                                <TouchableButton
                                    onPress={this.openCircleList}
                                    disabled={false}
                                    label={"Sport"}
                                    select={this.state.sport ? this.state.sport.sportName : I18n.t('select')}
                                />
                            </View>

                        </View>
                        <Button onPress={this.onValidate}>
                            {I18n.t('circleSubscribeValidate')}
                        </Button>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isMembersInfoModalVisible}
                onRequestClose={this.openCloseMembersInfoModal}
            >
              <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                  <TouchableOpacity
                      onPress={this.openCloseMembersInfoModal}
                      style={styles.closeIcon}>
                      <Image source={images.down_arrow}/>
                  </TouchableOpacity>

                  <Text style={styles.title}>
                      {I18n.t('circleAskInfo')}
                  </Text>
              </View>
              <View style={styles.modalContainer}>
                <AdminMembersInformation
                  viewer={this.props.viewer}
                  circle={this.props.circle}
                  onClose={() => this.setState({ isMembersInfoModalVisible: false })}
                />
              </View>
            </Modal>

            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isSportModalVisible}
                onRequestClose={this.onCloseSportList}
            >
                <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.headerIOS}>
                    <TouchableOpacity
                        onPress={this.onCloseSportList}
                        style={styles.closeIcon}>
                        <Image source={images.down_arrow}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>
                        {I18n.t('selectSport')}
                    </Text>
                </View>
                <View style={styles.modalContainer}>
                    <CircleSport
                        onCloseSportList={this.onCloseSportList}
                        viewer={this.props.viewer}
                        modal={true}
                    />
                </View>
            </Modal>

            </View>
        )
    }
}

const stateToProps = (state) => ({
    language: state.sportunityLocale.language,
});
  
const dispatchToProps = (dispatch) => ({
});
  
const ReducContainer = connect(
    stateToProps,
    dispatchToProps
)(CircleOptions);

export default createFragmentContainer(ReducContainer, {
  viewer: graphql`
    fragment CircleOptions_viewer on Viewer {
      id
      ...AdminMembersInformation_viewer
      ...CircleSport_viewer
    }
  `,
  circle: graphql`
    fragment CircleOptions_circle on Circle {
      id
      description
      mode
      isCircleUpdatableByMembers
      isCircleUsableByMembers
      isCircleAccessibleFromUrl
      sport {
          sport {
            id,
            name {
              EN, 
              FR
            }
          }
          levels {
              id
            EN {
              name
            }
            FR {
              name
            }
          }
      }
      address {
          address,
          zip
          city,
          country
      }
      circlePreferences {
          isChildrenCircle
      }
      askedInformation {
        id
        name
        type
        filledByOwner
      }
      membersInformation {
        id
        information
        user {
          id
        }
        value
      }
    }
  `,

});


I18n.fallbacks = true
I18n.translations = translations;

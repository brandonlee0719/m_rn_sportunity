import React,{ Component } from 'react';
import { View, Image, TouchableOpacity, Platform, Linking, Dimensions } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import ModalPicker from 'react-native-modal-selector';
import translations from 'sportunity/src/translations.js';
import Modal from '../../../Modal'
import icons from '../../../../../src/theme/images';
import { styles } from './style';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

class CompositionModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
        displayComposition: null,
        imageHeight: 10,
        imageWidth: 10,
    }
  }

  componentDidMount() {
      const {sportunity} = this.props ;
      this.handleDisplayComposition({key: sportunity.compositions[0].id})
      
  }

  handleDisplayComposition = composition => {
    const {width, height} = Dimensions.get('window'); 
    const {sportunity} = this.props ;

    let selectedComposition = sportunity.compositions.find(compo => compo.id === composition.key);

    Image.getSize(selectedComposition.fieldImage, (imageWidth, imageHeight) => {
        if (imageWidth > imageHeight) 
            this.setState({imageWidth: width, imageHeight: width * imageHeight / imageWidth})
        else
            this.setState({imageWidth: imageWidth * (height * 2 / 3 / imageHeight), imageHeight: height * 2 / 3});
    });
    
    this.setState({displayComposition: selectedComposition});
  }

  render = () => {
    const { sportunity, isOrganized, isParticipant, displayModal, closeModal } = this.props ; 
    
    return (
        <Modal
            isModalVisible={displayModal}
            openCloseModal={closeModal}
            title={I18n.t('sportunityCompositions')}
        >
            <View style={styles.modalContainer}>
                <View style={styles.inputRow}>
                    <Text style={styles.labelText}>
                        {I18n.t('sportunityCompositionDisplay')}
                    </Text>
                    <ModalPicker
                        data={sportunity.compositions.map(compo => ({key: compo.id, label: compo.name}))}
                        initValue={!!this.state.displayComposition && sportunity.compositions.find(item => item.id === this.state.displayComposition.id).name}
                        onChange={this.handleDisplayComposition}
                        cancelText={I18n.t('cancel')}
                    />
                </View>
                {!!this.state.displayComposition && 
                    <View style={styles.fieldContainer}>
                        <View style={styles.fieldImageContainer}>
                            <Image 
                                style={{width: this.state.imageWidth, height: this.state.imageHeight, position: 'relative'}} 
                                source={{ uri: this.state.displayComposition.fieldImage }}
                                resizeMode='cover'
                            >
                                {this.state.displayComposition.users && this.state.displayComposition.users.length > 0 && 
                                    this.state.displayComposition.users.map(user => (
                                        <Image
                                            source={{uri: user.user.avatar}}
                                            style={[styles.avatar, 
                                                {top: this.state.imageHeight * user.position.yPercentage / 1000, left: this.state.imageWidth * user.position.xPercentage / 1000}]
                                            }
                                            resizeMode='cover'
                                        />
                                    ))
                                }
                            </Image>
                        </View>
                    </View>
                }
            </View>
        </Modal>
    )
  }
}

export default CompositionModal ;

I18n.fallbacks = true
I18n.translations = translations;

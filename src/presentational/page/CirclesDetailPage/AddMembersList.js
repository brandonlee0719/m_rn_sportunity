// @flow
import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, Picker, TextInput, Platform, ScrollView } from 'react-native';
import Toast from 'react-native-simple-toast';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../Button/roundedButton';
import Input, {inputStyles} from '../../Input';
import {ListBlock, ListBlockItem} from '../../ListBlock';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class AddMembersModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            selectedUserList: []
        }
    }

    componentWillReceiveProps = nextProps => {
        if (!this.props.show && nextProps.show) {
            this.setState({
                selectedUserList: nextProps.members.map(user => user.id)
            })
        }
    }

    onSelectUser = user => {
        let newList = this.state.selectedUserList ;
        let index = newList.indexOf(user);

        if (index >= 0) 
            newList.splice(index, 1);
        else
            newList.push(user)

        this.setState({
            selectedUserList: newList
        })
    }

    onClose = () => {
        this.props.onClose()
    }

    onSelectAll = () => {
        if (this.props.members.length === this.state.selectedUserList.length)
            this.setState({
                selectedUserList: []
            })
        else
            this.setState({
                selectedUserList: this.props.members.map(member => member.id)
            })
    }

    render() {
        const { show, members } = this.props;

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
                        {this.state.selectedUserList.length > 1 
                        ?   this.state.selectedUserList.length + ' ' + I18n.t('selectedMembers')
                        :   this.state.selectedUserList.length + ' ' + I18n.t('selectedMember')
                        }
                    </Text>
                </View>

                
                <ScrollView style={styles.listContainer}>
                    <TouchableOpacity onPress={this.onSelectAll}>
                        <View style={styles.itemContainer}>
                            <View style={styles.colContainer}>
                                <Text style={styles.boldName}>
                                    {this.props.members.length === this.state.selectedUserList.length
                                    ?   I18n.t('unSelectAll')
                                    :   I18n.t('selectAll')
                                    }
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    { members && 
                        members.map((member,id) =>
                        <TouchableOpacity key={id} onPress={() => this.onSelectUser(member.id)}>
                            <View style={styles.itemContainer}>
                                <View style={styles.photoContainer}>
                                    {member.avatar
                                    ? <Image style={styles.thumbProfile} source={{uri: member.avatar}} />
                                    : <Image style={styles.thumbProfile} source={images.profile_photo} />
                                    }
                                </View>
                                <View style={styles.colContainer}>
                                    <Text style={this.state.selectedUserList.indexOf(member.id) >= 0 ? styles.boldName : styles.name}>
                                        {member.pseudo}
                                    </Text>
                                    {this.state.selectedUserList.indexOf(member.id) >= 0 && 
                                        <Image source={images.check} style={styles.checkboxImage}/>
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
                
                <Button onPress={() => this.props.onValidate(this.state.selectedUserList)}>
                    {I18n.t('invite')}
                </Button>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
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
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
  },
  icon: {
    marginLeft: metrics.baseMargin,
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    marginTop: 1,
    //marginHorizontal: metrics.smallMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    minHeight: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    //flex: 1,
  },
  photoContainer: {
  },
  thumbProfile: {
    //marginTop: 5,
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
  },
  colContainer:{
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: fonts.size.normal, 
    color: colors.blue,
    marginLeft: 5
  },
  boldName: {
    fontSize: fonts.size.normal, 
    color: colors.blue,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  checkboxImage: {
    tintColor: colors.lightGrey,
    height: 20,
    width: 20
  },  
});


export default AddMembersModal;

I18n.fallbacks = true
I18n.translations = translations;
 
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ActivityIndicator,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
import Toast from 'react-native-simple-toast'
import { ListBlock, ListBlockItem } from '../../../ListBlock'
import Button from '../../../Button/roundedButton';
import Prompt from 'react-native-prompt';
import ModalPicker from 'react-native-modal-selector';


import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';
import UpdateAskedInformationMutation from './UpdateAskedInformationMutation'
import RelaunchMembersMutation from './RelaunchMembersMutation'

import I18n from 'react-native-i18n'


const backendTypeList = [null, 'TEXT', 'NUMBER', 'BOOLEAN']
let typeList = []

defaultsAskedInformation = () => [
  {name: I18n.t('circleDefaultInfoFirstName'), type: 'TEXT', filledByOwner: false},
  {name: I18n.t('circleDefaultInfoLastName'), type: 'TEXT', filledByOwner: false},
  {name: I18n.t('circleDefaultInfoWeight'), type: 'NUMBER', filledByOwner: false},
  {name: I18n.t('circleDefaultInfoAge'), type: 'NUMBER', filledByOwner: false},
  {name: I18n.t('circleDefaultInfoLicenceIsPaid'), type: 'BOOLEAN', filledByOwner: true}
]

const AskedInfoItem = ({ item, onRemove, onTap }) =>
<View style={styles.itemContainer}>
  <View style={styles.colContainer}>
    <TouchableOpacity onPress={() => onTap('name')}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.colContainer}>
    <Text style={styles.name}>{typeList[item.type]}</Text>
  </View>
  <TouchableOpacity style={styles.imageActionContainer} onPress={onRemove}>
    <Image style={styles.imageAction} source={images.close_x} />
  </TouchableOpacity>
</View>

class FormAdd extends Component  {
  state = {
    newAskInfoName: '',
    newAskInfoType: 0,
  }

  updateField = (stateName) => (value) => {
    this.setState({
      [stateName]: value,
    })
  }

  _handleOnAdd = () => {
    if (!this.state.newAskInfoName || !this.state.newAskInfoType) {
      Toast.show(I18n.t('circleInfoError'))
      return
    }
    this.props.onAdd({
      name: this.state.newAskInfoName,
      type: this.state.newAskInfoType,
    })
    this.reset()
  }

  reset() {
    this.setState({
      newAskInfoName: '',
      newAskInfoType: 0,
    })
  }

  render() {
    return (
      <View style={styles.formAddContainer}>
        <View style={styles.label}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            placeholderTextColor="silver"
            placeholder={I18n.t('circleInfoName')}
            value={this.state.newAskInfoName}
            autoCapitalize="none"
            selectionColor="#ffffff"
            underlineColorAndroid={colors.skyBlue}
            onChangeText={this.updateField('newAskInfoName')}
            />
        </View>
        <ModalPicker
            data={typeList.map((item, index) => ({
              key: index, label: item 
            }))}
            initValue={typeList[this.state.newAskInfoType]}
            onChange={option => this.updateField('newAskInfoType')(option.key)}
            cancelText={I18n.t('cancel')}
        />
        <TouchableOpacity
          style={styles.imageActionContainer}
          onPress={this._handleOnAdd}
        >
          <Image style={styles.imageAction} source={images.plus} />
        </TouchableOpacity>
      </View>
    )
  }
}

const FormEdit = ({ onClose, isVisible, item, onUpdate }) =>
  <Prompt
    title={I18n.t('update')}
    visible={isVisible}
    defaultValue={isVisible && item && item.name}
    onSubmit={(name) => onUpdate({
      ...item,
      name,
    })}
    onCancel={onClose}
  />

class CrudListGrid extends Component {
  state = {
    editing: false,
    item: null,
    index: -1,
  }
  render() {
    const { title, askedInformation, filter, onAdd, onRemove, onUpdate } = this.props
    return (
      <ListBlock title={title}>
        <ListBlockItem style={styles.listContainer}>
          {askedInformation.map((item, index) => (
            !filter || filter(item)
              ? <AskedInfoItem
                  item={item}
                  key={index}
                  onRemove={() => onRemove(index)}
                  onTap={() => this.setState({ editing: true, item, index, })}
                />
              : false
          )).filter(Boolean)}
          <FormEdit
            onClose={() => this.setState({ editing: false, })}
            isVisible={this.state.editing}
            item={this.state.item}
            onUpdate={(item) => {
              onUpdate({
                item,
                index: this.state.index,
              }); 
              this.setState({editing: false})
            }}
          />
          <FormAdd
            onAdd={onAdd}
          />
        </ListBlockItem>
      </ListBlock>
    )
  }
}

const crudOptions = [{
  filledByOwner: false,
  title: 'circleAskInfoMembers',
}, {
  filledByOwner: true,
  title: 'circleAskInfoManagers',
}]

class AdminMembersInformation extends Component {

  state = {
    askedInformation: [],
    relaunch: false,
    saving: false,
  }

  componentWillMount = () => {
    const { circle } = this.props
    const askedInformation = circle.askedInformation && circle.askedInformation.length > 0
      ? circle.askedInformation
      : defaultsAskedInformation()
    this.setState({
      askedInformation: askedInformation.map(item => ({
        id: item.id,
        name: item.name,
        type: backendTypeList.indexOf(item.type),
        filledByOwner: item.filledByOwner
      }))
    })
  }

  _removeItem = (index) => {
    let newState = this.state.askedInformation.slice(0)
    newState.splice(index, 1)

    this.setState({
      askedInformation: newState
    })
  }

  _addItem = (value) => this.setState((oldState) => ({
    askedInformation: [...oldState.askedInformation, value],
  }))

  _updateItem = (item, index) => this.setState({
    askedInformation: this.state.askedInformation.map((oldItem, oldIndex) =>
      oldIndex === index? item : oldItem
    ),
  })

  _handleSave = () => {
    const { viewer, circle: { id: idVar } } = this.props;

    const askedInformationVar = this.state.askedInformation.map((item) => ({
        ...item,
        type: backendTypeList[item.type],
    }))
    this.setState({ saving: true, })

    UpdateAskedInformationMutation.commit({
      circleId: idVar,
      askedInformation: askedInformationVar
    },
    (response) => {
      this.setState({ saving: false, })
      Toast.show(I18n.t('updateSuccess'))
      this.props.relay.refetch();
      this.props.onClose()
    },
    error => {
      this.setState({ saving: false, })
      Toast.show(I18n.t('circleInfoError'))
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    })
  }

  _relaunchMembers = () => {
    const idVar = this.props.circle.id;
    const viewer = this.props.viewer;
    this.setState({ relaunch: true, })

    RelaunchMembersMutation.commit({
      circleId: idVar,
    },
    (response) => {
      this.setState({ relaunch: false, })
      Toast.show(I18n.t('updateSuccess'))
    },
    error => {
      this.setState({ relaunch: false, })
      Toast.show(I18n.t('circleInfoError'))
      let errors = JSON.parse(error.getError().source);
      console.log(errors);
    })
  }

  render() {
    typeList = [I18n.t('select') + ' ' + I18n.t('circleInfoType'), I18n.t('circleInfoTypeText'), I18n.t('circleInfoTypeNumber'), I18n.t('circleInfoTypeBool')]

    return (
      <ScrollView style={styles.mainContainer}>
        {crudOptions.map(({ filledByOwner, title }, index) => (
          <CrudListGrid
            title={I18n.t(title)}
            askedInformation={this.state.askedInformation}
            filter={(item) => item.filledByOwner === filledByOwner}
            onRemove={this._removeItem}
            onAdd={(value) => this._addItem({
              ...value,
              filledByOwner,
            })}
            onUpdate={({ item, index }) => this._updateItem(item, index) }
          />
        ))}

        {!this.state.saving &&
          <Button onPress={this._handleSave}>
            {I18n.t('circleSubscribeValidate')}
          </Button>
        }

        {this.state.saving &&
          <ActivityIndicator
            animating={this.state.saving}
            size="large"
            color={colors.skyBlue}
          />
        }

        {!this.state.relaunch &&
          <Button onPress={this._relaunchMembers}>
            {I18n.t('circleRelaunchMembers')}
          </Button>
        }
      </ScrollView>
    )
  }

}
const objectIdPropType = PropTypes.shape({
  id: PropTypes.string.isRequred,
})

AdminMembersInformation.propTypes = {
  circle: objectIdPropType,
  viewer: objectIdPropType,
  onClose: PropTypes.func.isRequred,
}

export default createFragmentContainer(AdminMembersInformation, {
  viewer: graphql`
    fragment AdminMembersInformation_viewer on Viewer {
      id
    }
  `,
})

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginHorizontal: metrics.smallMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    height: 50,
  },
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    flex: 1,
  },
  colContainer:{
    flex: 3,
  },
  imageActionContainer: {
    flex: 1,
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageAction: {
  },
  picker: {
    color: colors.skyBlue,
    flex: 3,
  },
  input: {
    flex: 1,
    backgroundColor: colors.snow,
    color: colors.skyBlue,
    padding: 3,
    width: 80,
    height: 40,
    textAlign: 'center',
  },
  label: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formAddContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.white,
    borderColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
})

I18n.fallbacks = true
I18n.translations = translations;

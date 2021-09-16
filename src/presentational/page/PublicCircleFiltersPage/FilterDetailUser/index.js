import React, { PropTypes, Component } from 'react';
import { View, Image, TouchableHighlight, Text, TouchableOpacity, Modal } from 'react-native';

import FilterModal from '../../FiltersPage/FilterModal'
import FiltersListItem from '../../FiltersPage/FiltersListItem';
import { images } from '../../../../theme';
import styles from './style';
import { buttonStyle } from '../style'
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep'

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class FilterDetailUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  closeModal = () => this.setState({ isOpen: false})

  render = () => {
    const {
        userList,
        selectedUsers,
        onSelectUser,
        title
    } = this.props;

    const { isOpen } = this.state;

    return (
      <View>
          <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
            <View style={buttonStyle.headerCol}>
                <Text style={buttonStyle.headerText}>
                    {title}
                </Text>
                <View>
                    <Text style={buttonStyle.select}>
                        {selectedUsers.length > 1 
                        ?   selectedUsers.length + ' ' + I18n.t('accountAuthorizedUsersSelectedUsers')
                        :   selectedUsers.length > 0
                            ?   I18n.t('accountAuthorizedUsersSelectedUser')
                            :   I18n.t('accountAuthorizedUsersNoSelectedUser')
                        }
                    </Text>
                </View>
            </View>
            <Image
                style={buttonStyle.headerIcon}
                source={images.right_arrow_blue}
            />
        </TouchableOpacity>
        {
          isOpen && 
            <FilterModal
                isModalVisible={isOpen}
                onRequestClose={this.closeModal}
                title={title}
                displayValidationButton={true}>
                <View style={styles.container}>
                    {userList.map((user, index) => (
                        <TouchableOpacity key={index} style={buttonStyle.headerContainer} onPress={() => onSelectUser(user.id)}>
                            <View style={styles.headerCol}>
                                <Text style={styles.headerText}>
                                    {user.pseudo}
                                </Text>
                                {selectedUsers.indexOf(user.id) >= 0 && 
                                    <Image source={images.check} style={styles.checkboxImage}/>
                                }
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </FilterModal>
        }
      </View>
    );
  }
};

export default FilterDetailUser;

I18n.fallbacks = true
I18n.translations = translations;

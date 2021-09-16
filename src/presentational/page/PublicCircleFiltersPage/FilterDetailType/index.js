import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class FilterDetailType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      circleType: []
    }
  }

  componentDidMount = () => {
      this.setState({
          circleType: this.props.circleType
      })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
        circleType: nextProps.circleType
    })
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  selectTypeFilter = (status) => {
    const {circleType} = this.state ;
    let newCircleType = cloneDeep(circleType);

    if (newCircleType.indexOf(status) >= 0)
        newCircleType = newCircleType.filter(item => item !== status);
    else 
        newCircleType.push(status)

    this.setState({
        circleType: newCircleType
    })
   
  }

  closeModal = () => {
    const {availableQueries} = this.props;
    
    this.setState({isOpen: false});
    if (this.state.circleType && this.state.circleType.length > 0)
        this.props.changeCircleType(this.state.circleType);
    else if (this.props.viewer.me && this.props.viewer.me.profileType === 'PERSON' || !this.props.viewer.me)
        this.props.changeCircleType(["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES", "PUBLIC_CIRCLES"].filter(type => availableQueries.length === 0 || availableQueries.indexOf(type) >= 0))
    else
        this.props.changeCircleType(["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES"].filter(type => availableQueries.length === 0 || availableQueries.indexOf(type) >= 0))
  }

  render = () => {
    const {
        changeCircleType,
        clearStatusFilter,
        viewer,
        availableQueries
    } = this.props;

    const { isOpen, circleType } = this.state;

    const circleTypeList = 
    [
      {key: 'MY_CIRCLES', label: I18n.t('myCircles')},
      {key: "CIRCLES_I_AM_IN", label: I18n.t('mySportClubs')},
      {key: "CHILDREN_CIRCLES", label:viewer.me && viewer.me.profileType === 'ORGANIZATION' ? (viewer.me.isSubAccount ? I18n.t('otherTeamsCircles') : I18n.t('myTeamsCircles')) : I18n.t('myChildrenCircles')},
      {key: "PUBLIC_CIRCLES", label: I18n.t('publicCircles')},
    ]
    const typeList = ["MY_CIRCLES", "CIRCLES_I_AM_IN", "CHILDREN_CIRCLES", "PUBLIC_CIRCLES"]
        .filter(type => availableQueries.length === 0 || availableQueries.indexOf(type) >= 0)

    return (
      <View>
          <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
            <View style={buttonStyle.headerCol}>
                <Text style={buttonStyle.headerText}>
                    {I18n.t('circlesType')}
                </Text>
                <View>
                    <Text style={buttonStyle.select}>
                        {this.props.circleType.map((status, index) => (
                            (index > 0 ? ', ' : '') + circleTypeList.find(type => type.key === status).label
                        ))}
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
                title={I18n.t('statusFilter')}
                displayValidationButton={true}>
                <View style={styles.container}>
                    {typeList.map((status, index) => (
                        <TouchableOpacity key={index} style={buttonStyle.headerContainer} onPress={() => this.selectTypeFilter(status)}>
                            <View style={styles.headerCol}>
                                <Text style={styles.headerText}>
                                    {circleTypeList.find(type => type.key === status).label}
                                </Text>
                                {circleType.indexOf(status) >= 0 && 
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

FilterDetailType.propTypes = {
    changeCircleType: PropTypes.func.isRequired,
    clearStatusFilter: PropTypes.func.isRequired,
};

export default FilterDetailType;

I18n.fallbacks = true
I18n.translations = translations;

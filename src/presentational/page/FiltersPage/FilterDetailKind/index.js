import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePlaceName, changePlaceRadius, changePlacePosition} from 'sportunity/src/action/FiltersStateActions.js'

import FilterModal from '../FilterModal'
import FiltersListItem from '../FiltersListItem';
import { images } from '../../../../theme';
import styles from './style';
import { buttonStyle } from '../style'
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep'

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const statusList = [
    'Available',
    'Booked',
    'Organized',
    'Invited',
    'Survey',
    'CoOrganizer',
    'AskedCoOrganizer',
    'Declined',
    'Past',
    'Cancelled'
]

class FilterDetailKind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedStatus: []
    }
  }

  componentDidMount = () => {
      this.setState({
          selectedStatus: this.props.selectedStatus
      })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
        selectedStatus: nextProps.selectedStatus
    })
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  selectStatusFilter = (status) => {
    const {selectedStatus} = this.state ;
    let newSelectedStatus = cloneDeep(selectedStatus);

    if (newSelectedStatus.indexOf(status) >= 0)
        newSelectedStatus = newSelectedStatus.filter(item => item !== status);
    else 
        newSelectedStatus.push(status)

    //this.props.changeStatusFilter(newSelectedStatus);
    this.setState({
        selectedStatus: newSelectedStatus
    })
   
  }

  closeModal = () => {
    this.setState({isOpen: false});
    this.props.changeStatusFilter(this.state.selectedStatus);

    if (this.state.selectedStatus.length > 0 && this.state.selectedStatus.indexOf('Available') >= 0 && (!this.props.filterLocation || (this.props.filterLocation && !this.props.filterLocation.lat)) && this.props.userLocation) {
        this.props.changePlaceName(this.props.userLocation.city + ', ' + this.props.userLocation.country);
        this.props.changePlacePosition(this.props.userLocation.latitude, this.props.userLocation.longitude);
        this.props.changePlaceRadius(200);
    }
  }

  render = () => {
    const {
        changeStatusFilter,
        clearStatusFilter
    } = this.props;

    const { isOpen, selectedStatus } = this.state;

    return (
      <View>
          <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
            <View style={buttonStyle.headerCol}>
                <Text style={buttonStyle.headerText}>
                    {I18n.t('statusFilter')}
                </Text>
                <View>
                    <Text style={buttonStyle.select}>
                        {this.props.selectedStatus.map((status, index) => (
                            (index > 0 ? ', ' : '') + I18n.t('filterStatus'+status)
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
                displayValidationButton={true}
                scrollable={true}
            >
                {statusList.map((status, index) => (
                    <TouchableOpacity key={index} style={buttonStyle.headerContainer} onPress={() => this.selectStatusFilter(status)}>
                        <View style={styles.headerCol}>
                            <Text style={styles.headerText}>
                                {I18n.t('filterStatus'+status)}
                            </Text>
                            {selectedStatus.indexOf(status) >= 0 && 
                                <Image source={images.check} style={styles.checkboxImage}/>
                            }
                        </View>
                    </TouchableOpacity>
                ))}
            </FilterModal>
        }
      </View>
    );
  }
};

FilterDetailKind.propTypes = {
    changeStatusFilter: PropTypes.func.isRequired,
    clearStatusFilter: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    userLocation: state.sportunityLocale.userLocation,
    filterLocation: state.filtersState.filters.location,
});
  
const dispatchToProps = (dispatch) => ({
    changePlaceRadius: bindActionCreators(changePlaceRadius, dispatch),
    changePlacePosition: bindActionCreators(changePlacePosition, dispatch),
    changePlaceName: bindActionCreators(changePlaceName, dispatch),
});

export default connect(stateToProps, dispatchToProps)(FilterDetailKind);

I18n.fallbacks = true
I18n.translations = translations;

// @flow
import PropTypes from 'prop-types';

import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, TextInput, Switch, ScrollView, ImageBackground } from 'react-native';
import Toast from 'react-native-simple-toast';
import { uniqBy } from 'lodash';

import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Button from '../../../Button/roundedButton';
import FilterButton from '../../../Button/Filter'
import Input, {inputStyles} from '../../../Input';
import {ListBlock, ListBlockItem} from '../../../ListBlock';
import Invitee from './Invitee';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import PublicCircleFilters from '../../PublicCircleFiltersPage'

class CirclesInvitationModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            selectedCircles: [],
            seeCirclesFromOtherTeams: false,
            displayFilters: false
        }
    }

    componentDidMount = () => {
        if (this.props.invitedCircles && this.props.invitedCircles.length > 0) {
            this.setState({
                selectedCircles: this.props.invitedCircles
            })
            this.props.invitedCircles.forEach(selectedCircle => {
                if (this.props.circles.findIndex(circle => circle.id === selectedCircle.id) < 0) {
                    this.setState({
                        seeCirclesFromOtherTeams: true
                    })
                }
            })
        }
    }
  

    onInvite = () => {
        if(this.state.selectedCircles.length > 0)
            this.props.addCircleInvitee(this.state.selectedCircles);
        else 
            this.props.addCircleInvitee([]);

        setTimeout(() => {
            this.props.onClose();
        }, 250)
    }

    onSelectCircle = (option) => {
        let optionIndex = this.state.selectedCircles.findIndex(circle => circle.id === option.id) ;    
        let selectedCircles = this.state.selectedCircles;
        if (optionIndex >= 0) {
            selectedCircles.splice(optionIndex, 1)
            this.setState({
                selectedCircles
            })
        }
        else {            
            selectedCircles.push(option)
            this.setState({
                selectedCircles
            })
        }
    }

    getCircleList = () => {
        if ((!this.props.circles || this.props.circles.length === 0) && (!this.props.circlesCurrentUserIsIn || this.props.circlesCurrentUserIsIn.length === 0)) return []
        let circleList = this.props.circles.concat(this.props.circlesCurrentUserIsIn);
        if (this.state.seeCirclesFromOtherTeams)
            circleList = circleList.concat(this.props.circlesFromClub)

        circleList.map(circle => {
            if (circle && circle.owner)
                return circle.name + ' ' + I18n.t('mySportClubsOf') + ' ' + circle.owner.pseudo   
            else if (circle)
                return circle.name
        })
        circleList = circleList.filter(c => c.type === 'ADULTS' || c.type === 'CHILDREN')
        
        return uniqBy(circleList, 'id')
    }

    render() {
        const { show, onClose, addCircleInvitee, circles, circlesFromClub} = this.props;
        
        let circleList = this.getCircleList();
        
        return (
        <View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={this.onInvite}
                circles={circles}
            >
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={this.onInvite}
                            style={styles.icon}>
                            <Image source={images.down_arrow}/>
                        </TouchableOpacity>

                            <Text style={styles.title}>
                                {I18n.t('inviteCircles')}
                            </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <ScrollView style={styles.listContainer} >
                                { circleList && 
                                    circleList.map((circle,id) => (
                                        <TouchableOpacity key={id} onPress={() => this.onSelectCircle(circle)}>
                                            <View style={styles.itemContainer}>
                                                <View style={styles.colContainer}>
                                                    <View style={styles.imageContainer}>
                                                        <ImageBackground style={styles.image} source={images.circleLarge}>
                                                            <Text style={styles.members}>{circle.memberCount}</Text>
                                                        </ImageBackground>
                                                    </View>
                                                    <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                        <Text style={this.state.selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0 ? styles.boldName : styles.name}>
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
                                                {this.state.selectedCircles.findIndex(selectedCircle => selectedCircle.id === circle.id) >= 0 && 
                                                    <Image source={images.check} style={styles.checkboxImage}/>
                                                }                                        
                                            </View>
                                        </TouchableOpacity>
                                    )
                                )}

                                {circlesFromClub && circlesFromClub.length > 0 &&
                                    <View style={styles.labelRow}>
                                        <Text style={styles.switchLabel}>
                                            {I18n.t('seeCirclesFromOtherTeams')}
                                        </Text>
                                        <Switch
                                            style={styles.switchButton}
                                            onTintColor={colors.skyBlue}
                                            value={this.state.seeCirclesFromOtherTeams}
                                            onValueChange={() => this.setState({seeCirclesFromOtherTeams: !this.state.seeCirclesFromOtherTeams})}
                                        />
                                    </View>
                                }
                                

                                <Button onPress={this.onInvite}>
                                    {I18n.t('validate')}
                                </Button>   


                            </ScrollView>
                        </View>
                                                
                        {/* <FilterButton
                            pressButton={this.props.openFilterModal}
                            isFilterActive={true}
                        /> */}
                    </View>
                </View>

                {this.props.displayFiltersModal && 
                    <Modal animationType={'slide'}
                        transparent={false}
                        visible={this.props.displayFiltersModal}
                        onRequestClose={this.props.closeFilters}
                    >
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={styles.header}>
                        <TouchableOpacity
                            onPress={this.props.closeFilters}
                            style={styles.icon}>
                            <Image source={images.down_arrow}/>
                        </TouchableOpacity>
                            <Text style={styles.title}>
                                {I18n.t('filters')}
                            </Text>
                        </View>
                        <PublicCircleFilters 
                            viewer={this.props.viewer}
                            availableQueries={["MY_CIRCLES", "CIRCLES_I_AM_IN"]}
                        />
                    </View>
                    </Modal>
                }
            </Modal>

        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    padding: 15,
  },
  input: {
    padding: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: 30,
    maxHeight: 30,
    color: colors.skyBlue,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 67,
    paddingTop: 11,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    //marginBottom: 62
  },
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin
  },
  switchLabel: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
  },
  switchButton: {
  },
  itemContainer: {
    marginTop: 1,
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
  },
  colContainer:{
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  name: {
    fontSize: fonts.size.normal, 
    color: colors.blue,
    marginLeft: 5,
    //flex: 4
  },
  boldName: {
    fontSize: fonts.size.normal, 
    color: colors.blue,
    marginLeft: 5,
    fontWeight: 'bold',
    //flex: 4
  },
  checkboxImage: {
    tintColor: colors.lightGrey,
    height: 20,
    width: 20
  },  
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
  image: {
    width: metrics.images.large,
    height: metrics.images.medium,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  members: {
    fontSize: fonts.size.normal,
    color: colors.blue,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  ownerContainer: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerName: [
   // fonts.style.small, 
  ],
  avatar: {
    width: 20,
    height: 20,
    marginRight: 5,
    //resizeMode: 'contain',
    borderRadius: 10
  },
});

CirclesInvitationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  addCircleInvitee: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  circles: PropTypes.array.isRequired,
};

export default CirclesInvitationModal

I18n.fallbacks = true
I18n.translations = translations;

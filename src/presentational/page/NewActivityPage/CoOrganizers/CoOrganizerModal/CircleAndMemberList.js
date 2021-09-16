// @flow
import PropTypes from 'prop-types';

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet, TextInput, Switch, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import Button from '../../../../Button/roundedButton';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import {ListBlock, ListBlockItem} from '../../../../ListBlock';

class CircleListModal extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            selectedCircle: null,
            selectedUsers: [],
            isLoadingMembers: false
        }
    }

    componentDidMount = () => {
    }

    onSelectCircle = (circle) => {
        this.setState({selectedCircle: circle, isLoadingMembers: true})

        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            queryCircle: true,
            circleId: circle.id
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            () => this.setState({isLoadingMembers: false}),
            {force: false}
        );
    }

    onCloseSelectedCircle = () => {
        this.setState({selectedCircle: null})
        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            queryCircle: false,
            circleId: null
        });

        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
    }

    onSelectMember = (member) => {
        this.props.selectMember(member)
        this.props.onClose()
    }

    render() {
        const { show, onClose, circles, circlesFromClub} = this.props;
        
        let circleList = []; 
        if (circles && circles.edges && circles.edges.length > 0)
            circleList = circleList.concat(circles.edges);
        if (circlesFromClub && circlesFromClub.edges && circlesFromClub.edges.length > 0)
            circleList = circleList.concat(circlesFromClub.edges)
        
        circleList = circleList.filter(c => c.node.type !== 'TEAMS' && c.node.type !== 'CLUBS' && c.node.memberCount > 0).map(c => c.node)

        return (
        <View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={onClose}
            >
                {!this.state.selectedCircle 
                ?   <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
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
                                    circleList.filter(c => c.memberCount > 0 && (c.type === 'ADULTS' || c.type === 'CHILDREN')).map((circle,id) => (
                                        <TouchableOpacity key={id} onPress={() => this.onSelectCircle(circle)}>
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
                :   <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <View>
                            <View style={styles.header}>
                                <TouchableOpacity
                                    onPress={this.onCloseSelectedCircle}
                                    style={styles.icon}>
                                    <Image source={images.down_arrow}/>
                                </TouchableOpacity>

                                <Text style={styles.title}>
                                    {this.state.selectedCircle.name}
                                </Text>
                            </View>
                            {this.state.isLoadingMembers &&
                                <View style={{marginTop: metrics.doubleBaseMargin}}>
                                    <ActivityIndicator
                                        animating={this.state.isLoadingMembers}
                                        size="large"
                                        color={colors.skyBlue}
                                    />
                                </View>
                            }
                            <ScrollView style={styles.listContainer} >
                                { this.props.viewer.circle && this.props.viewer.circle.members && this.props.viewer.circle.members.length > 0 &&
                                    this.props.viewer.circle.members.map((member,id) => (
                                        <TouchableOpacity key={id} onPress={() => this.onSelectMember(member)}>
                                            <View style={styles.itemContainer}>
                                                <View style={styles.colContainer}>
                                                    <View style={styles.imageContainer}>
                                                        {member.avatar 
                                                        ? <Image style={styles.bigAvatar} source={{uri: member.avatar}}/>
                                                        : <Image style={styles.bigAvatar} source={images.profile_photo} />
                                                        }
                                                    </View>
                                                    <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                        <Text style={this.state.selectedUsers.findIndex(s => s.id === member.id) >= 0 ? styles.boldName : styles.name}>
                                                            {member.pseudo}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                )}
                            </ScrollView>
                        </View>
                    </View>
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
    marginBottom: 62
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
    borderRadius: 10
  },
  bigAvatar: {
    width: 40,
    height: 40,
    marginRight: 5,
    borderRadius: 20
  }
});

CircleListModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default createRefetchContainer(CircleListModal, {
    viewer: graphql`
        fragment CircleAndMemberList_viewer on Viewer @argumentDefinitions(
            queryCircle: {type: "Boolean!", defaultValue: false} ,
            circleId: {type: "ID"}
        ){
            id
            circle (id: $circleId) @include (if: $queryCircle) {
                members {
                    id
                    pseudo
                    avatar
                }
            }
        }
    `
    },
    graphql`
        query CircleAndMemberListRefetchQuery ($queryCircle: Boolean!, $circleId: ID) {
            viewer {
                ...CircleAndMemberList_viewer @arguments(queryCircle: $queryCircle, circleId: $circleId)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;

import React, { Component } from 'react';
import {Switch, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import I18n from "react-native-i18n";
import { metrics, colors, fonts } from 'sportunity/src/theme';
import Toast from "react-native-simple-toast";

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        marginTop: metrics.baseMargin
    },
    cell: {
        width: '33%',
        textAlign: 'right',
    },
    button: {
        backgroundColor: colors.skyBlue,
        padding: metrics.baseMargin,
        marginHorizontal: metrics.doubleBaseMargin,
        flex: 1,
        borderRadius: 50,
        shadowColor: colors.lightGrey,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
        },
    },
    floatingButton: {
        position: 'absolute',
        bottom: metrics.doubleBaseMargin,
        width: '100%'
    },
    buttonText: {
        fontSize: fonts.size.h3,
        color: colors.snow,
        textAlign: 'center',
    },
});

const CustomizedPermissions = props => (
    <View>
        <View style={style.row}>
            <Text style={style.cell}/>
            <Text style={style.cell}>View</Text>
            <Text style={style.cell}>Edit</Text>
        </View>
        <View style={style.row}>
            <Text style={style.cell}>{I18n.t('sportunyDetails')}</Text>
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.detailsAccess.view}
                onValueChange={props.togglePermission('detailsAccess', 'view')}
            />
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.detailsAccess.edit}
                onValueChange={props.togglePermission('detailsAccess', 'edit')}
            />
        </View>
        <View style={style.row}>
            <Text style={style.cell}>{I18n.t('sportunyMembers')}</Text>
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.memberAccess.view}
                onValueChange={props.togglePermission('memberAccess', 'view')}
            />
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.memberAccess.edit}
                onValueChange={props.togglePermission('memberAccess', 'edit')}
            />
        </View>
        <View style={style.row}>
            <Text style={style.cell}>{I18n.t('chat')}</Text>
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.chatAccess.view}
                onValueChange={props.togglePermission('chatAccess', 'view')}
            />
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.chatAccess.edit}
                onValueChange={props.togglePermission('chatAccess', 'edit')}
            />
        </View>
        <View style={style.row}>
            <Text style={style.cell}>{I18n.t('sportunityCarpooling')}</Text>
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.carPoolingAccess.view}
                onValueChange={props.togglePermission('carPoolingAccess', 'view')}
            />
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.carPoolingAccess.edit}
                onValueChange={props.togglePermission('carPoolingAccess', 'edit')}
            />
        </View>
        <View style={style.row}>
            <Text style={style.cell}>{I18n.t('Media')}</Text>
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.imageAccess.view}
                onValueChange={props.togglePermission('imageAccess', 'view')}
            />
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.imageAccess.edit}
                onValueChange={props.togglePermission('imageAccess', 'edit')}
            />
        </View>
        <View style={style.row}>
            <Text style={style.cell}>{I18n.t('sportunityCompositions')}</Text>
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.compositionAccess.view}
                onValueChange={props.togglePermission('compositionAccess', 'view')}
            />
            <Switch
                onTintColor={colors.skyBlue}
                style={style.cell}
                value={props.selectedPermissions.compositionAccess.edit}
                onValueChange={props.togglePermission('compositionAccess', 'edit')}
            />
        </View>
    </View>
);

class CustomizedPermissionsPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('organizer').pseudo
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedPermissions: props.navigation.getParam('selectedPermissions'),
            organizer: props.navigation.getParam('organizer'),
        }
    }

    _togglePermission = (name, access) => value => {
        const selectedPermissions = JSON.parse(JSON.stringify(this.state.selectedPermissions));
        if (access === 'view') {
            selectedPermissions[name][access] = selectedPermissions[name].edit || value;
        } else if (access === 'edit') {
            selectedPermissions[name][access] = value;
            // update view
            selectedPermissions[name].view =
                selectedPermissions[name].edit || selectedPermissions[name].view;
        }
        this.setState({
            selectedPermissions,
        });
    };

    render() {
        const onValidate = this.props.navigation.getParam('onValidate');
        return (
            <View style={{ display: 'flex', flex: 1, margin: 20 }}>
                <CustomizedPermissions
                    selectedPermissions={this.state.selectedPermissions}
                    togglePermission={this._togglePermission}
                />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={style.floatingButton}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => {
                                this.props.navigation.goBack();
                                onValidate(this.state.organizer.id, this.state.selectedPermissions);
                            }}
                        >
                            <Text style={style.buttonText}>
                                {I18n.t('validate')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export { CustomizedPermissions, CustomizedPermissionsPage };

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'
import Toast from 'react-native-simple-toast'
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { metrics, colors, fonts } from 'sportunity/src/theme';
import I18n from 'sportunity/src/lib/I18n';
import { ListBlock, ListBlockItem } from '../../ListBlock'
import UpdateFilledInformationMutation from '../CirclesDetailPage/MembersInformation/UpdateFilledInformationMutation'
import Field from '../../forms/Field';
import Button from '../../Button/roundedButton'

import circle from '../../../customPropType/circle'
import user from '../../../customPropType/user'


fieldTypeByBackendType = {
  BOOLEAN: 'switch',
  TEXT: 'input',
  NUMBER: 'numeric',
  DATE: 'date',
  PHONE_NUMBER: 'input',
  ADDRESS: 'address',
  CUSTOM: 'select'
}

export class MemberSharedInfoForm extends Component {
  state = {
    answers: {}
  }

  componentWillMount() {
    this.setState({
      answers: this.props.circle.membersInformation
        .filter((answer) => answer.user.id === this.props.user.id)
        .reduce((mem, answer) => ({
          ...mem,
          [answer.information]: answer.value,
        }), {})
    })
  }

  _forms = () => {
    let formList = [];

    this.props.circle.askedInformation.forEach(askedInfo => {
      if (formList.findIndex(form => form.id === askedInfo.form.id) < 0)
        formList.push(askedInfo.form)
    });
    return formList;
  }

  _infos = (form) =>
    this.props.circle.askedInformation.filter((info) => info.filledByOwner === this.props.filledByOwner && info.form.id === form.id)

  _updateField = (info, value) =>
    this.setState({
      answers: {
        ...this.state.answers,
        [info.id]:
          info.type === 'BOOLEAN'?
            value? 'true' : 'false' :
            info.type === 'NUMBER'?
              parseInt(value) : value,
      }
    })

  _getValue = (info) =>
    info.type === 'BOOLEAN'?
      (this.state.answers[info.id] === 'true'? true : false) :
      info.type === 'NUMBER'?
        this.state.answers[info.id] :
        this.state.answers[info.id]

  render() {
    
    return (
      <View style={styles.fieldsGroup}>
        {this._forms().map((form, formIndex) => (
          <View key={form.name + formIndex}>
            {formIndex > 0 && 
              <View style={styles.separator}></View>
            }
            <Text style={styles.formName}>
              {form.name}
            </Text>
            {this._infos(form).map((info, index) => (
              <Field
                key={index}
                error={false}
                type={fieldTypeByBackendType[info.type]}
                title={info.name}
                value={this._getValue(info)}
                onChange={(v) => this._updateField(info, v)}
                list={info.answers}
              />
            ))}
          </View>
        ))}
        
        {this.props.isLoading
        ? <ActivityIndicator
            animating={true}
            size="large"
            color={colors.blue}
          />
        : <Button onPress={() => this.props.onSave(this.state.answers)}>
            {I18n.t('circleSubscribeValidate')}
          </Button>
        }
      </View>
    )
  }
}

MemberSharedInfoForm.propTypes = {
  circle,
  user,
  onSave: PropTypes.func.isRequred,
}

class SharedInformationPage extends Component {

  state = {
    circlesWithAskedInformation: [],
    isLoading: false
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.viewer.me.circlesUserIsIn && nextProps.viewer.me.circlesUserIsIn.edges && nextProps.viewer.me.circlesUserIsIn.edges.length > 0)
      this._setCircleWithAskedInformation(nextProps.viewer.me.circlesUserIsIn.edges)
  }

  _setCircleWithAskedInformation = (circlesEdges) => {
    this.setState({
      circlesWithAskedInformation:
        circlesEdges
          .map((e) => e.node)
          .filter((circle) =>
            circle.askedInformation && circle.askedInformation.length > 0
          )
    })
  }

  _handleSave = (circle) => (answers) => {
    const idVar = circle.id;
    const userId = this.props.viewer.me.id;
    const viewer = this.props.viewer;
    this.setState({
      isLoading: true
    })

    let answersVar = [{
      userId,
      filledInformation: Object.keys(answers)
        .filter((infoId) => typeof answers[infoId] !== 'undefined')
        .map((id) => ({
          id,
          value: answers[id].address ? answers[id].address +', ' + answers[id].zip +', ' + answers[id].city: answers[id],
        }))
    }]

    UpdateFilledInformationMutation.commit({
      circleId: idVar,
      answers: answersVar
    },
    (response) => {
      Toast.show(I18n.t('updateSuccess'))
      this.setState({
        isLoading: false
      })
    },
    error => {
      Toast.show(I18n.t('updateFailed'));
      this.setState({
        isLoading: false
      })
    })
  }

  render() {
    const { viewer: { me: user } } = this.props
    return (
      Platform.OS === 'android' 
      ? <ScrollView contentContainerStyle={styles.container}>
          {this.state.circlesWithAskedInformation && this.state.circlesWithAskedInformation.length > 0 &&
            <View style={styles.noteContainer}>
              <Text>
                {I18n.t('accountSharedInformation')}
              </Text>
            </View>
          }

          {this.state.circlesWithAskedInformation && this.state.circlesWithAskedInformation.length > 0
          ? this.state.circlesWithAskedInformation.map((circle, index) =>
              <ListBlock key={index} title={circle.name + ' ' + I18n.t('circleOwner') + ' ' + circle.owner.pseudo}>
                <ListBlockItem style={styles.listContainer}>
                <MemberSharedInfoForm
                  isLoading={this.state.isLoading}
                  circle={circle}
                  user={user}
                  onSave={this._handleSave(circle)}
                  filledByOwner={false}
                />
                </ListBlockItem>
              </ListBlock>
            )
          : <Text style={styles.note}>
              {I18n.t('accountSharedInformationNone')}
            </Text>
          }
        </ScrollView>
      : <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}} keyboardVerticalOffset={50}>
          <ScrollView contentContainerStyle={styles.container}>
            {this.state.circlesWithAskedInformation && this.state.circlesWithAskedInformation.length > 0 &&
              <View style={styles.noteContainer}>
                <Text>
                  {I18n.t('accountSharedInformation')}
                </Text>
              </View>
            }

            {this.state.circlesWithAskedInformation && this.state.circlesWithAskedInformation.length > 0
            ? this.state.circlesWithAskedInformation.map((circle, index) =>
                <ListBlock key={index} title={circle.name + ' ' + I18n.t('circleOwner') + ' ' + circle.owner.pseudo}>
                  <ListBlockItem style={styles.listContainer}>
                  <MemberSharedInfoForm
                    isLoading={this.state.isLoading}
                    circle={circle}
                    user={user}
                    onSave={this._handleSave(circle)}
                    filledByOwner={false}
                  />
                  </ListBlockItem>
                </ListBlock>
              )
            : <Text style={styles.note}>
                {I18n.t('accountSharedInformationNone')}
              </Text>
            }
          </ScrollView>
        </KeyboardAvoidingView>
    )
  }
}

const SharedInformationPageTemp = createFragmentContainer(SharedInformationPage, {
  viewer: graphql`
    fragment SharedInformationPage_viewer on Viewer {
      me {
        id,
        circlesUserIsIn (last: 100) {
          edges {
            node {
              id,
              name
              owner {
                pseudo
              }
              askedInformation {
                id,
                name,
                type,
                filledByOwner
                answers
                form {
                  id
                  name
                }
              }
              membersInformation {
                id,
                information,
                user {
                  id,
                }
                value
              }
            }
          }
        }
      }
    }
  `,
})

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('accountSharedInformationTitle')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SharedInformationPageQuery{
            viewer {
              ...SharedInformationPage_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <SharedInformationPageTemp viewer={props.viewer} query={props} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    justifyContent: 'center',
  },
  fieldsGroup: {
    flex: 1,
    justifyContent: 'center'
  },
  note: {
    fontSize: 14,
    color: colors.black,
    fontStyle: 'italic',
    marginTop: 10
  },
  noteContainer: {
    marginBottom: metrics.baseMargin
  },
  formName: {
    color: colors.blue,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: colors.blue,
    marginVertical: metrics.doubleBaseMargin
  }
})

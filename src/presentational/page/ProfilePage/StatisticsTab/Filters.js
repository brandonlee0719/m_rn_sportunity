import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
  Dimensions,
  CheckBox,
  Alert,
} from "react-native";
import I18n from "react-native-i18n";
import Toast from "react-native-simple-toast";
import get from "lodash/get";

import { images, colors, metrics, fonts } from "../../../../theme";
import translations from "sportunity/src/translations.js";
import Button from "../../../UI/Button";
import { Input, Label } from "../../../UI/FormElements";
import FormListItem from "../../../UI/FormListItem";
import Field from "../../../forms/Field";
import NewStatisticFilterMutation from "./NewStatisticFilterMutation";
import Heading from "../../../UI/Heading";
import SetDefaultStatisticFilterMutation from "./SetDefaultStatisticFilterMutation";
import RemoveStatisticFilterMutation from './RemoveStatisticFilterMutation';
import SavedFilterList from "../../SavedFilterList/SavedFilterList";
import SportunityButton from "../../../SportunityButton";
import UpdateStatisticFilterMutation from "./UpdateStatisticFilterMutation";
import FilterDetailDates from "../../FiltersPage/FilterDetailDates";
import { buttonStyle } from "../../FiltersPage/style";

const { width, height } = Dimensions.get("window");
const date = new Date();

const NewFilterCircleModal = ({
  circles,
  onCloseCircleList,
  onPressCircle,
  isCircleListOpen
}) => {
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={isCircleListOpen}
      onRequestClose={onCloseCircleList}
    >
      {circles && (
        <TouchableOpacity style={styles.background} onPress={onCloseCircleList}>
          <View style={styles.overlay}>
            <View
              style={[
                styles.optionContainer,
                {
                  height: circles.length * 50,
                  top: (height - circles.length * 60) / 2
                }
              ]}
            >
              <ScrollView keyboardShouldPersistTaps={"always"}>
                <View style={{ paddingHorizontal: 10 }}>
                  {circles
                    .map((circle) =>
                      circle.node.memberCount > 0 ? (
                        <TouchableOpacity
                          key={circle.node.id}
                          style={styles.optionStyle}
                          onPress={() => {
                            onPressCircle(circle);
                          }}
                        >
                          <Text style={styles.modalPseudo}>
                            {circle.node.name}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        null
                      )
                    )
                    .filter(i => Boolean(i))}
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </Modal>
  );
};

class Filters extends Component {
  state = {
    displayFilterModal: false,
    isCircleListOpen: false,
    newFilterName: "",
    newFilterCircle: null,
    dateBegin: "",
    dateEnd: "",
    loading: false,
    setAsDefaultFilter: false,
    createNewFilter: true,
    filterId: null,
  };

  onFilterIconPress = () => {
    this.setState({ displayFilterModal: true });
    this.onNewFilter();
  };

  onCloseModal = () => {
    this.resetState();
    this.setState({ displayFilterModal: false });
  };

  openCircleListModal = () => {
    if (this.props.circles && this.props.circles.length > 0) {
      this.setState({ isCircleListOpen: true });
    } else Toast.show(I18n.t("pleaseCreateCircle"));
  };

  onCloseCircleList = () => {
    this.setState({ isCircleListOpen: false });
  };

  validateNewFilterForm = ({ name = '', date_begin, date_end, circleList }) => {
    if (name.length === 0) {
      throw new Error(I18n.t("profileCreateFilterError2"));
    }
    
    if (circleList[0] === undefined || circleList[0] === null) {
      throw new Error(I18n.t("profileCreateFilterError1"));
    }

    if (!date_begin || !date_end || date_begin >= date_end) {
      throw new Error(I18n.t("profileCreateFilterError3"));
    }

    return true;
  };

  resetState = () => {
    this.setState({
      filterId: null,
      newFilterCircle: null,
      newFilterName: "",
      dateBegin: null,
      dateEnd: null,
      loading: false,
      setAsDefaultFilter: false,
      createNewFilter: true,
    });
  };

  saveNewFilter = () => {
    if (this.state.loading) {
      return;
    }

    const { newFilterName, newFilterCircle, dateBegin, dateEnd, setAsDefaultFilter } = this.state;
    const { user } = this.props;
    const params = {
      userId: user.id,
      input: {
        name: newFilterName,
        date_begin: dateBegin,
        date_end: dateEnd,
        circleList: [get(newFilterCircle, "node.id")]
      }
    };

    this.setState({ loading: true });

    try {
      const isFormValid = this.validateNewFilterForm(params.input);
      if (isFormValid) {
        NewStatisticFilterMutation.commit(
          params,
          (filterID) => {
            if (setAsDefaultFilter) {
              this.setDefaultStatisticFilter(filterID);
            }
            Toast.show(I18n.t('profileNewFilterSuccess'));
            this.props.onFilterSelection({
              id: filterID,
              date_begin: dateBegin,
              date_end: dateEnd,
              circleList: { edges: [newFilterCircle] }
            });
            this.resetState();
            this.onCloseModal();
          },
          error => {
            console.error(error);
            Toast.show(I18n.t("profileNewFilterError"));
            this.resetState();
          }
        );
      }
    } catch (error) {
      Alert.alert(I18n.t('alert'), error);
      this.setState({ loading: false });
    }
  };

  setDefaultStatisticFilter = (filterID) => {
    const { user } = this.props;
    SetDefaultStatisticFilterMutation.commit(
      {
        userId: user.id,
        input: {
          filterID
        }
      },
      () => {
        console.log('Saved as default filter');
        this.onCloseModal();
        this.resetState();
      },
      error => {
        console.error(error);
      }
    )
  }

  deleteFilter = () => {
    const { filterId } = this.state;
    Alert.alert(
      I18n.t('profileDeleteFilterTitle'),
      I18n.t('profileDeleteFilterPrompt'),
      [
        {
          text: I18n.t('circlesDeleteValidationOk'),
          onPress: () => {
            const params = {
              userId: this.props.userId,
              input: {
                statisticFilterId: filterId
              }
            };

            RemoveStatisticFilterMutation.commit(
              params,
              () => {
                Toast.show(I18n.t('profileDeleteFilterSuccess'));
                const firstFilter = this.props.savedFilters.filter(statisticFilter => statisticFilter.id !== filterId)[0];

                if (firstFilter) {
                  this.setState({ activeFilter: firstFilter.id });
                  this.props.onFilterSelection(firstFilter);
                } else {
                  // No filters available or a default filter
                }
                this.resetState();
                this.onCloseModal();
              },
              (error) => {
                console.error(error);
                this.resetState();
                Toast.show(I18n.t('profileDeleteFilterError'));
              }
            );
          },
        },
        {
          text: I18n.t('circlesDeleteValidationCancel'), onPress: () => { return; }
        }
      ]
    );
  }

  modifyFilter = () => {
    if (this.state.loading) {
      return;
    }

    const {
      filterId,
      newFilterName,
      newFilterCircle,
      dateBegin,
      dateEnd,
      setAsDefaultFilter,
    } = this.state;
    const { user, onFilterSelection } = this.props;
    
    const params = {
      userId: user.id,
      input: {
        statisticFilterId: filterId,
        name: newFilterName,
        date_begin: dateBegin,
        date_end: dateEnd,
        circleList: [get(newFilterCircle, "node.id")]
      }
    };

    this.setState({ loading: true });

    try {
      const isFormValid = this.validateNewFilterForm(params.input);
      if (isFormValid) {
        UpdateStatisticFilterMutation.commit(
          params,
          () => {
            if (setAsDefaultFilter) {
              this.setDefaultStatisticFilter(filterId);
            }
            Toast.show(I18n.t('updateSuccess'));
            this.onCloseModal();
            onFilterSelection({
              id: filterId,
              date_begin: dateBegin,
              date_end: dateEnd,
              circleList: { edges: [newFilterCircle] }
            });
            this.resetState();
          },
          error => {
            console.error(error);
            Toast.show(I18n.t("profileNewFilterError"));
            this.resetState();
          }
        );
      }
    } catch (error) {
      Alert.alert(I18n.t('alert'), error);
      this.setState({ loading: false });
    }
  };

  onChangeDefaultFilter = () => {
    this.setState((prevState) => ({
      setAsDefaultFilter: !prevState.setAsDefaultFilter
    }));
  }

  onFilterPress = (filter) => {
    const { defaultFilter, onFilterSelection } = this.props;

    this.setState({
      createNewFilter: false,
      setAsDefaultFilter: defaultFilter && defaultFilter.id === filter.id,
      newFilterName: filter.name,
      filterId: filter.id,
      newFilterCircle: get(filter, 'circleList.edges[0]'),
      dateBegin: filter.date_begin,
      dateEnd: filter.date_end,
    });

    onFilterSelection(filter);
  }

  onNewFilter = () => {
    this.setState({ createNewFilter: true });
    this.resetState();
  }

  handleSaveFilter = () => {
    if (this.state.filterId) {
      this.modifyFilter();
    } else {
      this.saveNewFilter();
    }
  }

  onDateSelected = (previous, current) => {
    this.setState({
      dateBegin: previous.toString(),
      dateEnd: current.toString(),
    });
  }

  clearDateFilter = () => {
    this.setState({
      dateBegin: null,
      dateEnd: null,
    });
  }

  render() {
    const {
      user,
      circles,
      savedFilters,
      onFilterSelection,
      activeFilter,
    } = this.props;
    const {
      displayFilterModal,
      isCircleListOpen,
      newFilterName,
      newFilterCircle,
      dateBegin,
      dateEnd,
      setAsDefaultFilter,
      createNewFilter,
    } = this.state;

    return (
      <ScrollView horizontal scrollEnabled>
        <SavedFilterList 
          filterList={savedFilters}
          appliedFilterId={activeFilter}
          isFilterActive={!!activeFilter}
          onFilterTouched={onFilterSelection}
          user={user} 
          openFilterPage={this.onFilterIconPress}
          hideFilterButton={!this.props.isUserOwner}
        />

        <Modal
          animationType="slide"
          visible={displayFilterModal}
          onRequestClose={this.onCloseModal}
        >
          <View
            style={
              Platform.OS === "android"
                ? styles.headerAndroid
                : styles.headerIOS
            }
          >
            <TouchableOpacity
              onPress={this.onCloseModal}
              style={styles.closeModalIcon}
            >
              <Image source={images.down_arrow} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>{I18n.t("filters")}</Text>
          </View>

          <View style={{ paddingHorizontal: metrics.baseMargin }}>
            <View style={{ height: 40 }}>
              <SavedFilterList 
                filterList={savedFilters}
                appliedFilterId={createNewFilter ? null : activeFilter}
                onFilterTouched={this.onFilterPress}
                user={user} 
                hideFilterButton={true}
                hideNewFilterButton={false}
                onNewFilter={this.onNewFilter}
                isNewFilter={createNewFilter}
              />
            </View>

            <Input
              maxLength={30}
              placeholder={I18n.t("filtersName")}
              placeholderColor={colors.skyBlue}
              onChangeText={value => {
                this.setState({ newFilterName: value });
              }}
              value={newFilterName}
              style={{ width: '80%', alignSelf: 'center' }}
            />

            <View style={{ padding: metrics.baseMargin, marginTop: metrics.baseMargin }}>
              <Field 
                type={"switch"}
                title={I18n.t('defaultFilter')}
                value={setAsDefaultFilter}
                onChange={this.onChangeDefaultFilter} 
              />
            </View>

            <FilterDetailDates
              from={dateBegin}
              to={dateEnd}
              startDate={date}
              onDateSelected={this.onDateSelected}
              clearDateFilter={this.clearDateFilter}
              selectedStatus={['Past']}
            />


              <TouchableOpacity style={buttonStyle.headerContainer} onPress={this.openCircleListModal}>
                <View style={buttonStyle.headerCol}>
                    <Text style={buttonStyle.headerText}>
                        {I18n.t('profileStatChangeCircle')}
                    </Text>
                    {get(newFilterCircle, "node.name")
                    ? <View>
                        <Text style={buttonStyle.select}>
                          {newFilterCircle.node.name}
                        </Text>
                      </View>
                    : <Text style={buttonStyle.select}>
                        {I18n.t('select')}
                      </Text>
                  }
                </View>
                <Image
                    style={buttonStyle.headerIcon}
                    source={images.right_arrow_blue}
                />
            </TouchableOpacity>

            <NewFilterCircleModal
              circles={circles}
              isCircleListOpen={isCircleListOpen}
              onCloseCircleList={this.onCloseCircleList}
              onPressCircle={circle => {
                this.setState({ newFilterCircle: circle }, () => {
                  this.onCloseCircleList();
                });
              }}
            />

            <View style={{ marginTop: metrics.baseMargin }} />

            { user && (this.state.createNewFilter || !!this.state.filterId) &&
              <View style={styles.saveFilterButtonsContainer}>
                <SportunityButton buttonStyle={styles.button}
                  onPress={this.handleSaveFilter}>
                  <Text style={styles.buttonText}>{I18n.t(this.state.createNewFilter ? 'saveFilter' : 'modifyFilter')}</Text>
                </SportunityButton>
                {!!this.state.filterId && 
                  <SportunityButton buttonStyle={styles.redButton}
                    onPress={this.deleteFilter}>
                    <Text style={styles.buttonText}>{I18n.t('deleteFilter')}</Text>
                  </SportunityButton>
                }
              </View>
            }
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  filterIconContainer: {
    height: 40,
    width: 40
  },
  filterIcon: {
    tintColor: colors.skyBlue,
    height: 30,
    width: 30
  },
  filters: {
    flex: 1,
    flexDirection: "row"
  },
  headerAndroid: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 0
  },
  headerIOS: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.skyBlue,
    height: 64,
    paddingTop: 14
  },
  modalTitle: {
    flex: 1,
    textAlign: "center",
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6
  },
  closeModalIcon: {
    padding: metrics.baseMargin
  },
  background: {
    flex: 1
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  optionContainer: {
    borderRadius: 5,
    width: width * 0.8,
    backgroundColor: "rgba(255,255,255,0.8)",
    left: width * 0.1
  },
  optionStyle: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    marginVertical: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignSelf: "center"
  },
  image: {
    width: metrics.images.medium,
    height: metrics.images.medium,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  saveFilterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    zIndex: 10,
  },
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: 20,
    marginHorizontal: metrics.baseMargin,
    borderRadius: 50,
  },
  redButton: {
    backgroundColor: colors.red,
    padding: metrics.baseMargin,
    marginTop: 20,
    marginHorizontal: metrics.baseMargin,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 14,
    color: colors.snow,
    textAlign: 'center',
  },
});

export default Filters;

I18n.fallbacks = true;
I18n.translations = translations;

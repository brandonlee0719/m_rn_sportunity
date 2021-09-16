import React, { Component } from "react";
import { ScrollView } from "react-native";
import I18n from "react-native-i18n";

import translations from "sportunity/src/translations.js";
import Loader from '../../../ActivityIndicatorLoader/page';
import FormListItem from "../../../UI/FormListItem";
import Heading from "../../NewActivityPage/Heading";

class Menu extends Component {
  getMenuOptions = () => {
    let menuOptions = [] ;
    const {
      viewer,
      handlers,
      isCurrentUserAMember,
      isCurrentUserTheOwner,
    } = this.props;

    if (isCurrentUserTheOwner) {
      menuOptions.push({
        key: 1,
        text: I18n.t('circleUpdateName'),
        onPress: handlers.updateCircleName,
      })
      menuOptions.push({
        key: 2,
        text: I18n.t('circlesDelete'),
        onPress: handlers.deleteCircle,
      })
    }
    if (isCurrentUserAMember) {
      menuOptions.push({
        key: 3,
        text: I18n.t('circleUnsubscribeValidationTitle'),
        onPress: handlers.unSubscribe,
      })
    }

    return menuOptions;
  }

  render() {
    const { circle } = this.props;

    if (!circle) {
      return <Loader isAnimating={true} />;
    }

    const menuOptions = this.getMenuOptions();

    return (
      <ScrollView>
        <Heading text="Menu" />
        {
          menuOptions.map((option) => (
            <FormListItem
              key={option.key}
              title={option.text}
              centerTitle
              onPress={option.onPress}
            />
          ))
        }
      </ScrollView>
    )
  }
}

export default Menu;

I18n.fallbacks = true;
I18n.translations = translations;

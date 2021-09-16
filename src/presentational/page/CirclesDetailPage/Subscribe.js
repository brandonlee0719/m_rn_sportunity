import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Text from "react-native-text";
import Toast from "react-native-simple-toast";
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import Prompt from "react-native-prompt";

import { colors, metrics, fonts, images } from "sportunity/src/theme";
//import CreateProfilePage from 'sportunity/src/presentational/page/CreateProfilePage/CreateProfilePage.js';
import Input, { styles as inputStyles } from "../../Input";
import { ListBlock, ListBlockItem } from "../../ListBlock";
import Button from "../../Button/roundedButton";
import styles from "./style";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAccount: false
    };
  }

  addMember = () => {
    if (this.props.viewer && this.props.viewer.me) {
      if (
        this.props.circle &&
        this.props.circle.termsOfUses &&
        this.props.circle.termsOfUses.length > 0
      ) {
        this.props.showTerms();
      } else this.props.addMember(this.props.viewer.me, true);
    } else {
      Toast.show(I18n.t("sportunityToastLogin"));
      setTimeout(() => {
        this.props.updateFrom("circle/" + this.props.circle.id);
        this.props.onClose();
        setTimeout(() =>
          this.props.navigation.navigate("settings", {
            creatingFromCircle: true,
            closeChildCreationModal: this.closeAccountCreation
          }), 100) ;
      }, 750);
    }
  };

  closeAccountCreation = () => {
    this.setState({
      createAccount: false
    });
  };

  render() {
    const { members, viewer, isSubscribing, circle } = this.props;

    return (
      <View
        style={styles.margin}
        ref={node => {
          this._containerNode = node;
        }}
      >
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.addMember}
        >
          {isSubscribing ? (
            <ActivityIndicator
              animating={isSubscribing}
              size="small"
              color={colors.blue}
            />
          ) : (
						<View style={styles.buttonIconContainer}>
							<Text style={styles.text} allowFontScaling={false}>
								{I18n.t("circleSubscribe")}
							</Text>
            </View>
          )}
        </TouchableOpacity>
        {/*this.state.createAccount &&
                <CreateProfilePage 
                    viewer={this.props.viewer}
                    
                />
            */}
        {/*<Prompt
                title={I18n.t('circleSubscribePlaceholder')}
                defaultValue={''}
                visible={ this.state.isPromptVisible }
                onCancel={ () => this.setState({
                    isPromptVisible: false
                }) }
                onSubmit={ (value) => this.addMember(value) }
                />*/}
      </View>
    );
  }
}

export default createFragmentContainer(Subscribe, {
  viewer: graphql`
    fragment Subscribe_viewer on Viewer {
      me {
        id
        pseudo
        avatar
      }
    }
  `
});

I18n.fallbacks = true;
I18n.translations = translations;

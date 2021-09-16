import React, { Component } from "react";
import { View } from "react-native";
import Transactions from "./Transactions";
import { graphql, QueryRenderer } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import I18n from "react-native-i18n";
import { colors, images } from "sportunity/src/theme";

export default class TransactionsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    let title = "";
    if (
      navigation.state &&
      navigation.state.params &&
      navigation.state.params.title
    ) {
      title = navigation.state.params.title;
    }
    return {
      title: title
    };
  };

  componentWillUnmount() {
    this.props.navigation.state.params.refetchConnection();
  }

  render() {
    const {
      users,
      transactionStatus,
      transactionKinds
    } = this.props.navigation.state.params;
    const { navigation } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query TransactionsPageQuery(
            $doQuery: Boolean!
            $filter: TransactionFilter
          ) {
            viewer {
              ...Transactions_viewer
                @arguments(doQuery: $doQuery, filter: $filter)
            }
          }
        `}
        variables={{
          doQuery: true,
          filter: {
            transactionStatus,
            users,
            transactionKinds
          }
        }}
        render={({ error, props }) => {
          if (props) {
            return (
              <View style={{ flex: 1, backgroundColor: colors.snow }}>
                <Transactions
                  navigation={navigation}
                  viewer={props.viewer}
                  users={users}
                  transactionStatus={transactionStatus}
                  transactionKinds={transactionKinds}
                  showLoadMore
                  loadMoreOnOpen={true}
                />
              </View>
            );
          } else {
            return <ActivityLoader isAnimating={true} />;
          }
        }}
      />
    );
  }
}

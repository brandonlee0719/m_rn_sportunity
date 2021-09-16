import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { createPaginationContainer, graphql } from "react-relay";
import { colors, images, fonts } from "sportunity/src/theme";
import I18n from "react-native-i18n";
import translations from "sportunity/src/translations.js";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import moment from "moment";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMore: false,
      hasMore: true,
      refetchConnection: false
    };
    this._refetch = this._refetch.bind(this);
  }

  componentDidMount() {
    if (this.props.loadMoreOnOpen) {
      this.setState({ loadingMore: true });

      this.props.relay.loadMore(20, error => {
        if (error) {
          console.log("transactions loadMore error: ", error);
          this.setState({ hasMore: false });
        }
        this.setState({ loadingMore: false });
      });
    }
    else {
      this._refetch();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.users.length !== this.props.users.length ||
      prevProps.transactionStatus !== this.props.transactionStatus ||
      prevProps.transactionKinds !== this.props.transactionKinds
    ) {
      this.setState({ refetchConnection: true });
    }
    if (this.state.refetchConnection) {
      this._refetch();
    }
  }

  _refetch() {
    this.props.relay.refetchConnection(
      3,
      () => {
        this.setState({ loadingMore: false, refetchConnection: false });
      },
      {
        doQuery: true,
        filter: {
          transactionStatus: 'DONE',
          users: this.props.users,
          transactionKinds: this.props.transactionKinds
        }
      }
    );
  }

  render() {
    const { loadingMore, hasMore, refetchConnection } = this.state;
    const { relay, showLoadMore, navigation } = this.props;
    const { me, transactions } = this.props.viewer;
    if (!transactions || refetchConnection) {
      return <ActivityLoader isAnimating={true} />;
    }

    const dataFiltered = transactions.edges.map(i => {
      const name =
        i.node.reason && i.node.reason.sportunity ? (
          <Text style={{ flex: 1, flexWrap: "wrap" }}>
            {i.node.reason.sportunity.title}
          </Text>
        ) : (
          <Text />
        );
      const from = i.node.from ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={{ uri: i.node.from.avatar }}
            style={{ width: 20, height: 20, borderRadius: 40, borderWidth: 1 }}
          />
          <Text style={{ flex: 1, flexWrap: "wrap" }}>
            {i.node.from.pseudo}
          </Text>
        </View>
      ) : (
        <View />
      );
      const to = i.node.to ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={{ uri: i.node.to.avatar }}
            style={{ width: 20, height: 20, borderRadius: 40, borderWidth: 1 }}
          />
          <Text style={{ flex: 1, flexWrap: "wrap" }}>{i.node.to.pseudo}</Text>
        </View>
      ) : (
        <View />
      );
      const arrow = i.node.to ? (
        <View>
          <Image source={images.cashRightArrow} />
        </View>
      ) : (
        <View />
      );
      const date = (
        <Text style={{ flex: 1, flexWrap: "wrap" }}>
          {moment(i.node.creation_date).format("DD/MM/YYYY")}
        </Text>
      );
      let type = "";
      switch (i.node.kind) {
        case "FEES":
          type = "FEES";
          break;
        case "REFUND":
          type = "REFUND";
          break;
        case "CASH_OUT":
          type = "CASH_OUT";
          break;
        case "CASH_IN":
          type = "CASH_IN";
          break;
        case "TRANSFERT":
          type = "TRANSFERT";
          break;
      }
      let price = (
        <Text
          style={{
            color: colors.charcoal,
            fontSize: fonts.size.h5,
            textAlign: "center",
            flex: 1,
            flexWrap: "wrap"
          }}
        >{`${i.node.amount.cents / 100} ${i.node.amount.currency}`}</Text>
      );
      if (
        type === "CASH_OUT" ||
        type === "FEES" ||
        (type === "TRANSFERT" &&
          i.node.from &&
          i.node.from.id &&
          i.node.from.id === me.id)
      ) {
        price = (
          <Text
            style={{
              color: colors.red,
              fontSize: fonts.size.h5,
              textAlign: "center",
              flex: 1,
              flexWrap: "wrap"
            }}
          >{`- ${i.node.amount.cents / 100} ${i.node.amount.currency}`}</Text>
        );
      }

      return {
        price,
        type,
        name,
        from,
        to,
        arrow,
        date
      };
    });

    return (
      <View>
        <FlatList
          data={dataFiltered}
          ListEmptyComponent={
            <View
              style={{
                backgroundColor: colors.show,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>{I18n.t("noMouvement")}</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                borderBottomWidth: 1,
                borderColor: "#000"
              }}
            >
              <View style={{ width: "20%", justifyContent: "center" }}>
                <View>{item.price}</View>
              </View>
              <View style={{ width: "80%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <View>{item.name}</View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ width: "30%" }}>{item.from}</View>
                  <View>{item.arrow}</View>
                  <View style={{ width: "30%" }}>{item.to}</View>
                  <View>{item.date}</View>
                </View>
              </View>
            </View>
          )}
        />

        {loadingMore && <ActivityLoader isAnimating={true} />}
        {showLoadMore && hasMore && !loadingMore && transactions.edges.length < transactions.count && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  if (!relay.hasMore()) {
                    this.setState({ hasMore: false });
                  } 
                  else {
                    this.setState({ loadingMore: true });
                    relay.loadMore(10, error => {
                      if (error) {
                        console.log("transactions loadMore error: ", error);
                        this.setState({ hasMore: false });
                      }
                      this.setState({ loadingMore: false });
                    });
                  }
                }}
              >
                <Text
                  style={{
                    color: colors.charcoal,
                    fontSize: fonts.size.h5,
                    textAlign: "center"
                  }}
                >
                  {I18n.t("loadMore")}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        {/* open full page */}
        {!showLoadMore && relay.hasMore() && (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.push("transactionsPage", {
                  ...this.props,
                  showLoadMore: true,
                  refetchConnection: () => {
                    this.setState({
                      refetchConnection: true,
                      loadingMore: true
                    });
                  }
                });
              }}
            >
              <Text
                style={{
                  color: colors.charcoal,
                  fontSize: fonts.size.h5,
                  textAlign: "center"
                }}
              >
                {I18n.t("loadMore")}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default createPaginationContainer(
  Transactions,
  {
    viewer: graphql`
      fragment Transactions_viewer on Viewer
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 3 }
          cursor: { type: "String" }
          filter: { type: TransactionFilter }
          doQuery: { type: "Boolean!", defaultValue: true }
        ) {
        me {
          id
        }
        transactions(first: $count, after: $cursor, filter: $filter)
          @include(if: $doQuery)
          @connection(key: "Viewer_transactions", filters: ["filter"]) {
          count
          edges {
            node {
              id
              amount {
                currency
                cents
              }
              from {
                id
                pseudo
                avatar
              }
              to {
                id
                pseudo
                avatar
              }
              kind
              reason {
                sportunity {
                  title
                }
              }
              creation_date
            }
          }
        }
      }
    `
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      // function that should indicate which connection to paginate over
      return props.viewer && props.viewer.transactions;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        filter: fragmentVariables.filter,
        doQuery: fragmentVariables.doQuery
      };
    },
    query: graphql`
      query Transactions_Query(
        $count: Int
        $cursor: String
        $filter: TransactionFilter
        $doQuery: Boolean!
      ) {
        viewer {
          ...Transactions_viewer
            @arguments(
              count: $count
              cursor: $cursor
              filter: $filter
              doQuery: $doQuery
            )
        }
      }
    `
  }
);

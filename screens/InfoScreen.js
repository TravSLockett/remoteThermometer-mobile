import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

export default class InfoScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
      >
        <Image
          style={{ width: 80, height: 80, margin: 5 }}
          source={{ uri: item.image }}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 18, color: "green" }}>
            CPU TEMPERATURE: {item.cpu}
          </Text>
          <Text style={{ fontSize: 18, color: "green" }}>
            GPU TEMPERATURE: {item.gpu}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "black" }}
      ></View>
    );
  };

  componentDidMount() {
    const url = "http://localhost:1205/temp/list";

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" animating />
      </View>
    ) : (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

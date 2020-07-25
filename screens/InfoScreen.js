import React from "react";
import { postRequest, getRequest } from "../helpers/APIClient";
import Storage from "../helpers/storage";
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
      token: "",
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

  getTokenFromStorage = async () => {
    console.log("setting info screen token");
    const tokenInStorage = await Storage.get("token");
    this.setState({ token: tokenInStorage });
    return tokenInStorage;
  };

  async componentDidMount() {
    console.log("the following are info screen");
    const to = await this.getTokenFromStorage();
    console.log("printing to");
    console.log(to);
    const t =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJSVCIsInN1YiI6IjVmMWI1ZWMzNzhmYTY0MjVjYjVkMjc2ZCIsImlhdCI6MTU5NTcyMDc3MDUzMywiZXhwIjoxNTk1ODA3MTcwNTMzfQ.gjffyW01SFX7HcsJ9qbL0DMDpHZZNTzyXTf6pyQG-eE";

    this.getTokenFromStorage().then(
      getRequest("temp/list", this.state.token).then(
        async (response) => {
          this.setState({
            dataSource: response,
            isLoading: false,
          });
          console.log(this.state.dataSource);
        },
        (error) => {
          console.log("in error");
          alert("get data Error");
        }
      )
    );
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

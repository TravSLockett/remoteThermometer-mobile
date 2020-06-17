/*import React, { Component, useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default function InfoScreen() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name Here"
        onChangeText={(val) => setName(val)}
      />
      <Text style={styles.fontStyle}>Name: {name}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Your Age Here"
        onChangeText={(val) => setAge(val)}
      />
      <Text style={styles.fontStyle}>Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fontStyle: {
    fontSize: 20,
    color: "dodgerblue",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});*/

import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default class InfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  compenentDidMount() {
    return fetch("http://{ENTER IP}/user/list")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.user,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let user = this.state.dataSource.map((val, key) => {
        return (
          <View>
            key={key} style={styles.item}
            <Text>{val.cpu}</Text>
          </View>
        );
      });

      return <View style={styles.container}>{gpu}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
  },
});

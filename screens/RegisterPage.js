import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class RegisterPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter a Username" />
        <TextInput style={styles.input} placeholder="Enter a Password" />
        <TextInput style={styles.input} placeholder="Confirm Password" />
        <Button
          title="Register"
          //Add functionality to the Register Button
        />
      </View>
    );
  }
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
});

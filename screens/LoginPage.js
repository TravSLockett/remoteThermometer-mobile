import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={styles.loginButton}>
          <Button
            type="outline"
            title="Login"
            onPress={() => this.props.navigation.navigate("InfoScreen")}
            //Need to add authentication currently just brings you to the InfoScreen
          />
        </View>
        <View style={styles.registerButton}>
          <Button
            type="outline"
            title="Register"
            onPress={() => this.props.navigation.navigate("RegisterPage")}
          />
        </View>
        <View style={styles.forgotPassButton}>
          <Button
            type="outline"
            title="Forgot Password"
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
          />
        </View>
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
  registerButton: {
    position: "absolute",
    bottom: 175,
    left: 155,
  },
  loginButton: {
    position: "absolute",
    bottom: 225,
    left: 165,
  },
  forgotPassButton: {
    position: "absolute",
    bottom: 125,
    left: 120,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

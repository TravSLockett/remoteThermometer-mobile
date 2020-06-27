import React, { Component } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { postRequest } from "../helpers/APIClient";

//create component to modulize things

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsername = (text) => {
    this.setState({ username: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  //---------------------------------------
  //add validation checking for username and password
  //-------------------
  //handle api request error
  signin = () => {
    const { username, password } = this.state;
    const credentials = {
      username,
      password,
    };
    postRequest("/signin", credentials).then(
      (response) => {
        console.log("I am at the end of this post request");
        console.log(response);
      },
      (error) => console.log(error)
    );
    this.props.navigation.navigate("InfoScreen");

    console.log(this.state.username);
    console.log(this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={this.handleUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
          autoCapitalize="none"
        />
        <View style={styles.loginButton}>
          <Button
            type="outline"
            title="Login"
            onPress={this.signin}
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

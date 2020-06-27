import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { postRequest } from "../helpers/APIClient";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      buttonDisabled: true,
    };
  }

  handleUsername = (text) => {
    this.setState({ username: text });
  };
  handlePassword1 = (text) => {
    this.setState({ password: text });
  };
  handlePassword2 = (text) => {
    this.setState({ password2: text });
  };
  //---------------------------------------
  //validate username and password inputs
  //---------------------------------------
  //check if password 1 and 2 are the same
  //---------------------------------------
  //STORE THE TOKEN USING REDUX

  signup = () => {
    const { username, password } = this.state;
    const credentials = {
      username,
      password,
    };
    postRequest("/signup", credentials).then(
      (response) => {
        console.log("I am at the end of this post request");
        console.log(response);
      },
      (error) => console.log(error)
    );

    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.password2);
    this.props.navigation.navigate("InfoScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleUsername}
          autoCapitalize="none"
          placeholder="Enter a Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter a Password"
          secureTextEntry={true}
          onChangeText={this.handlePassword1}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={this.handlePassword2}
          autoCapitalize="none"
        />
        <Button title="Register" onPress={this.signup} />
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

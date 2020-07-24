import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginPage from "./screens/LoginPage";
import InfoScreen from "./screens/InfoScreen";
import RegisterPage from "./screens/RegisterPage";
import ForgotPassword from "./screens/ForgotPassword";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
  },
  InfoScreen: {
    screen: InfoScreen,
  },
  RegisterPage: {
    screen: RegisterPage,
  },
  ForgotPassword: {
    screen: ForgotPassword,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { Component, useState } from "react";
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
});

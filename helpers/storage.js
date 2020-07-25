import { AsyncStorage } from "react-native";

export default class Storage {
  static async set(key, value) {
    try {
      const jsonItem = await AsyncStorage.setItem(key, JSON.stringify(value));
      return jsonItem;
    } catch (error) {
      console.log(`Error setting item in AsyncStorage: ${error}`);
    }
  }

  static async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
        //return JSON.parse(value);
      }
    } catch (error) {
      console.log(`Error getting item from AsyncStorage: ${error}`);
    }
  }

  static async unset(key) {
    try {
      const jsonItem = await AsyncStorage.removeItem(key);
      return jsonItem;
    } catch (error) {
      console.log(`Error unsetting item in AsyncStorage: ${error}`);
    }
  }
}

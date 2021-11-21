import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

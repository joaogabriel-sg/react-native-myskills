import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: "center",
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
  },
  textSkill: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ bgcolor, text }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, { backgroundColor: bgcolor }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#22ccdd",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 10,
  },

  text: {
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

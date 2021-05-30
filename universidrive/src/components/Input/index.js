import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder }) => {
  return (
    <TextInput
      placeholderTextColor="#bbbbbb"
      style={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ebebeb",
    width: "100%",
    marginTop: 10,
    padding: 20,
    borderRadius: 8,
  },
});

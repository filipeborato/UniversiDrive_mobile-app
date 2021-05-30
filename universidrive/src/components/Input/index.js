import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      placeholderTextColor="#bbbbbb"
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ebebeb",
    width: "100%",
    marginTop: 32,
    padding: 20,
    borderRadius: 8,
  },
});

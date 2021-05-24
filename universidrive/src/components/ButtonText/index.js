import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
const ButtonText = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text style={styles.text}>Esqueceu sua senha?</Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    marginTop: 2,
  },
  text: {
    color: "#4556b7",
    paddingLeft: 5,
  },
});

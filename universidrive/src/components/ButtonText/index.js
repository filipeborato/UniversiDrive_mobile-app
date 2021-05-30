import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonText ({text,onPress}){
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
      <Text style={styles.text}>Esqueci minha senha</Text>
    </TouchableOpacity>
  );
};



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

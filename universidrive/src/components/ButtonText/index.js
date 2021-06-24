import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function ButtonText ({onPress, navigation}){
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}
    onPress={onPress}>
      <View>
      <Text style={styles.text}>
        Esqueceu sua senha?
      </Text>
      </View>
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

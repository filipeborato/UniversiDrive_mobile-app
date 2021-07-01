import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from "../../components/Button";
import Input from "../../components/Input";

const Passageiros = () => {
    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
               <Text style={styles.texto}>Quantos passageiros você quer levar?</Text>
              <Input placeholder="Você pode levar até 4 pessoas" />
            </View>
            <Button text="Continuar" bgcolor="#0099ff" />
        </View>
    )
};

export default Passageiros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },

  wrapperLogin: {
    width: "100%",
  },

  header: {
    alignItems: "center",
  },

  headerText: {
    textTransform: "uppercase",
    fontSize: 21,
    color: "#0077B6",
    fontWeight: "bold",
  },
    texto: {
      fontSize: 15
    }
  });
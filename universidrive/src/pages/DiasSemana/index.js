import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";
import { CheckBox } from "@react-native-community/checkbox";

const DiasSemana = () => {
  return (
    <View style={styles.container}>
    <View style={styles.wrapperLogin}>
      <Text style={styles.texto}>Em quais dias da semana?</Text>
        <CheckBox
          label="Domingo"
          value={check}
          onChange={handleCheck}
        />
        <CheckBox
          label="Segunda"
          value={check}
          onChange={handleCheck}
        />
        <CheckBox
          label="Terça"
          value={check}
          onChange={handleCheck}
        />
        <CheckBox
          label="Quarta"
          value={check}
          onChange={handleCheck}
        />
        <CheckBox
          label="Quinta"
          value={check}
          onChange={handleCheck}
        />
        <CheckBox
          label="Sexta"
          value={check}
          onChange={handleCheck}
        />
        <CheckBox
          label="Sábado"
          value={check}
          onChange={handleCheck}
        />

      </View>
      <Button text="Continuar" bgcolor="#0099ff" />
    </View>
  )
};

export default DiasSemana;

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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


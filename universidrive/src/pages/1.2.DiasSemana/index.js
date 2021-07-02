import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";
import firebase from "@react-native-firebase/auth";
import { CheckBox } from '@react-native-community/checkbox';

export default function DiasSemana ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text>Quais dias da semana?</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Segunda-feira</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Terça-feira</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Quarta-feira</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Quinta-feira</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Sexta-feira</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Sábado</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Domingo</Text>
      </View>
      <Button text="Continuar" bgcolor="#0099ff" />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });
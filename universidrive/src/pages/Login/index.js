import 'react-native-gesture-handler';
import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, } from "react-native";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";

const Login = () => {
  return (
    <KeyboardAvoidingView> 
    <View style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <ButtonText />
        <Button text="entrar" bgcolor="#22ccdd" />
      </View>

      <Button text="Não tenho cadastro" bgcolor="#0099ff" />
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
});

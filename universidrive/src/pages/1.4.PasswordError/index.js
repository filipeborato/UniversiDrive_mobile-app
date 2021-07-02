import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";
import LogoImage from "../../assets/svg/logo.svg";
import ErrorImage from "../../assets/svg/exclamation.svg";
const Error = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>
        <ErrorImage width={100} height={100} />
        <Text>Não localizamos o seu cadastro.</Text>
        <Text>Tente informar o e-mail e a senha novamente.</Text>
        <Text></Text>
        <Button text="Vou tentar novamente" bgcolor="#0099ff" />
      </View>

      
      <Button text="Esqueci minha senha" bgcolor="#f0f8ff" />
    </View>
  );
};

export default Error;

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

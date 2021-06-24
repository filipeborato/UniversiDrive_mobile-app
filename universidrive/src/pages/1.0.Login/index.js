import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";
import firebase from "@react-native-firebase/auth";
import { onchangeEmail } from "react";
import { onchangePassword } from "react";
import { useState } from "react";
import { useCallback } from "react";

export default function Login({ navigation }) {
  const firebaseAuth = firebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onchangeEmail = useCallback((value) => {
    setEmail(value);
  }, []);

  const onchangePassword = useCallback((value) => {
    setPassword(value);
  }, []);

  const login = useCallback(() => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("logado");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }, [firebase, email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Input
          placeholder="E-mail"
          onChangeText={onchangeEmail}
          value={email}
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          onChangeText={onchangePassword}
          value={password}
          secureTextEntry
        />
        <ButtonText onPress={() => navigation.navigate("Recoverpassword")} />
        <Button onPress={login} text="entrar" bgcolor="#22ccdd" />
      </View>

      <Button
        text="Não tenho cadastro"
        bgcolor="#0099ff"
        onPress={() => navigation.navigate("Idonthavearegistration")}
      />
    </View>
  );
}

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

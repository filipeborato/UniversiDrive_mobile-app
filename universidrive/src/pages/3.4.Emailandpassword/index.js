import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";
import SignUpContext from "../../hooks/SignUpContext";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/auth";

export default function Emailandpassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setSignUpData, signUpData } = useContext(SignUpContext);
  const firebaseAuth = firebase();
  const onChangeEmail = (value) => {
    setEmail(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };

  const onContinue = () => {
    setSignUpData({
      ...signUpData,
      emailAndPassword: { email: email, password: password },
    });
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    try {
      firestore()
        .collection("users")
        .add({
          name: signUpData.name,
          lastName: signUpData.lastName,
          gender: signUpData.gender,
          phone: signUpData.phone,
          email: email,
          password: password,
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Send2");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Text style={styles.text1}>Qual será seu e-mail de login?</Text>

        <Input
          onChangeText={onChangeEmail}
          value={email}
          placeholder="email@dominio.com"
        />

        <Text style={styles.text1}>Agora defina sua senha</Text>
        <Input
          placeholder="Senha"
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry
        />
      </View>

      <Button onPress={onContinue} title="Enviar" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
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
  text1: {
    padding: 5,
    color: "#4556b7",
    paddingLeft: 5,
    fontSize: 18,
  },
  text2: {
    padding: 5,
    color: "#778899",
    paddingLeft: 5,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

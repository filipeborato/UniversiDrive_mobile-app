import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";
import SignUpContext from "../../hooks/SignUpContext";

export default function Gender({ navigation }) {
  const [gender, setGender] = useState("");
  const { setSignUpData, signUpData } = useContext(SignUpContext);
  const onChangeGender = (value) => {
    setGender(value);
  };

  const onContinue = () => {
    setSignUpData({ ...signUpData, gender: gender });
    navigation.navigate("Phone");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Text style={styles.text1}>Como você se identifica?</Text>

        <Input
          onChangeText={onChangeGender}
          value={gender}
          placeholder="Homem, mulher, outro..."
        />
        <Text style={styles.text2}>
          Essa informação é importante para encontrarmos quem se conecta melhor
          com você.
        </Text>
      </View>

      <Button onPress={onContinue} title="Avançar" />
    </KeyboardAvoidingView>
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
  text1: {
    padding: 10,
    color: "#4556b7",
    paddingLeft: 5,
    fontSize: 18,
  },
  text2: {
    padding: 10,
    color: "#778899",
    paddingLeft: 5,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

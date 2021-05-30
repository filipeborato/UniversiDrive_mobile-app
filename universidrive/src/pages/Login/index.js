import 'react-native-gesture-handler';
import React from "react";
import { View, StyleSheet, Text, Button, KeyboardAvoidingView, } from "react-native";

import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";

export default function Login({navigation}){
  return (
    <KeyboardAvoidingView>
    
      <View style={styles.wrapperLogin}>

      <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
      </View>

        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
      </View>

        
        <ButtonText text='Esqueci minha senha'
        onPress={()=> navigation.navigate('Recoverpassword')}
        
        />
        
      <View style={styles.container}>
      <Button title ="entrar" />
      </View>

      <View style={styles.container}>
      <Button title="Não tenho cadastro"/>
      </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width: "100%",
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
});

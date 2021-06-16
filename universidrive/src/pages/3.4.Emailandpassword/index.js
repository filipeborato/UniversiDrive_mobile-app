import React from "react";
import { View, StyleSheet, Text, Button, KeyboardAvoidingView } from "react-native";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import { onchangeEmail } from 'react';
import { onchangePassword } from 'react';
import LogoImage from "../../assets/svg/logo.svg";

export default function Emailandpassword ({navigation}){
  return (
    <KeyboardAvoidingView style={styles.container}>
    
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Text style={styles.text1}>
         Qual será seu e-mail de login?
        </Text>

        <Input placeholder="email@dominio.com" />
        
        <Text style={styles.text1}>
         Agora defina sua senha
        </Text>
        <Input
          placeholder="Senha"
          onChangeText={onchangePassword}
          secureTextEntry
        />
        
        </View>

      <Button 
       onPress={()=> navigation.navigate('Send2')}
        title="Enviar"
      />
    
    </KeyboardAvoidingView>
  );
};



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

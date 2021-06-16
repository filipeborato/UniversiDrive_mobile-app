import React from "react";
import { View, StyleSheet, Text, Button, KeyboardAvoidingView, Image } from "react-native";

import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";

export default function Send2 ({navigation}){
  return (
    <KeyboardAvoidingView style={styles.container}>
    
      <View style={styles.wrapperLogin}>
        
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <View>
          <Image style={styles.image}
           source={require('universidrive/src/assets/svg/Check.svg')}
           />
        </View>

        <Text style={styles.text}>
         Parabéns! Você acaba de se registrar na melhor plataforma de compartilhamento de caronas universitárias! 
        </Text>

        
        <Text style={styles.text2}>
          Para fins de segurança, enviamos um e-mail com um link de confirmação do seu cadastro. Assim que você clicar no link, sua conta será ativada! 
        </Text>
                  
      </View>

      <Button 
      title="Ir para o login" 
      onPress={()=> navigation.navigate('Login')}
      
      />
    
    </KeyboardAvoidingView>
  );
};



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
  text: {
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: 21,
    color: "#4556b7",
    fontWeight: "bold",
  },

  text2: {
    padding: 10,  
    color: "#778899",
    paddingLeft: 5,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    padding: 10, 
    alignItems: "center",
    justifyContent: "center",
    fontSize: 21,
    color: "#0077B6",
    fontWeight: "bold",
  },

  
});

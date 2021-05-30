import React from "react";
import { View, StyleSheet, Text, Button, KeyboardAvoidingView, Image } from "react-native";

import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";

export default function Send({navigation}){
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
         Ok, vai dar tudo certo!
        </Text>

        
        <Text style={styles.text2}>
          Localizamos seu cadastro e enviamos um link para redefinição de senha.
        </Text>
                  
      </View>

      <Button 
      title="Voltar ao menu inicial" 
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

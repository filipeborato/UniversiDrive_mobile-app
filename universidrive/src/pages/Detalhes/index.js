import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from "../../components/Button";
import Input from "../../components/Input";

const Detalhes = () => {
    return (
        <View style={styles.container}>
          <View style={styles.wrapperLogin}>
            <Text style={styles.texto}>Utilize esse espaço para dar mais detalhes sobre sua carona:</Text>
            <Input
              placeholder="Exemplo: me encontre no ponto de ônibus."
            />
          </View>
          <Button text="Continuar" bgcolor="#0099ff" />
        </View>
    );
 };
        
export default Detalhes;
        
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
          texto: {
            fontSize: 15
          }
        });
        
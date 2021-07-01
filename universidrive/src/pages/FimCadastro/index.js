import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../../components/Button';
import CheckImage from '../../assets/svg/check-solid.svg';


const FimCadastro = () => {
    return(
        <View style={styles.container}>
            <View style={styles.wrapperLogin}>
                <CheckImage widht={150} height={150} />
                <Text></Text>
                <Text style={styles.titulo}>Tudo pronto!</Text>
                <Text></Text>
                <Text style={styles.texto}>Recebemos sua oferta de carona! Logo alguém vai entrar em contato com você.</Text>
                <Text></Text>
                <Text style={styles.texto}>Obrigado por utilizar o Universidrive.</Text>
            </View>
            <Button text="Voltar para o início" bgcolor="#0099ff" />
        </View>
    )
};

export default FimCadastro;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      padding: 30,
    },
  
    wrapperLogin: {
      width: "100%"
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
    titulo: {
        alignSelf: "center",
        fontSize: 35
    },
    texto: {
        fontSize: 15
    }
  });
  
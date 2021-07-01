import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from "../../components/Button";
import CheckBox from "../../components/Checkbox";

const Escolher = () => {
  const [checkBuscar, checkOferecer, setCheck] = useState(false)

  function handleCheck() {
    setCheck(!check);
  }
  return (
      <View style={styles.container}>
        <View style={styles.wrapperLogin}>
        <CheckBox
          label="Buscar carona"
          value={checkBuscar}
          onChange={handleCheck} />
        <CheckBox
          label="Oferecer carona"
          value={checkOferecer}
          onChange={handleCheck}
        />
      </View>
      <Button text="Continuar" bgcolor="#0099ff" />
    </View>
  )
};

export default Escolher;

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
  
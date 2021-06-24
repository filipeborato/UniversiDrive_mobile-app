import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Picker } from '@react-native-community/picker';

const Horario = () => {
    const [selectedValue, setSelectedValue] = useState("6h");
    return (
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
            >
              <Picker.Item label="6h" value="6h" />
              <Picker.Item label="6h30" value="6h30" />
              <Picker.Item label="7h" value="7h" />
              <Picker.Item label="7h30" value="7h30" />
              <Picker.Item label="8h" value="8h" />
              <Picker.Item label="8h30" value="8h30" />
              <Picker.Item label="9h" value="9h" />
              <Picker.Item label="9h30" value="9h30" />
              <Picker.Item label="10h" value="10h" />
              <Picker.Item label="10h30" value="10h30" />
              <Picker.Item label="11h" value="11h" />
              <Picker.Item label="11h30" value="11h30" />
              <Picker.Item label="12h" value="12h" />
              <Picker.Item label="12h30" value="12h30" />
              <Picker.Item label="13h" value="13h" />
              <Picker.Item label="13h30" value="13h30" />
              <Picker.Item label="14h" value="14h" />
              <Picker.Item label="14h30" value="14h30" />
              <Picker.Item label="15h" value="15h" />
              <Picker.Item label="15h30" value="15h30" />
              <Picker.Item label="16h" value="16h" />
              <Picker.Item label="16h30" value="16h30" />
              <Picker.Item label="17h" value="17h" />
              <Picker.Item label="17h30" value="17h30" />
              <Picker.Item label="18h" value="18h" />
              <Picker.Item label="18h30" value="18h30" />
              <Picker.Item label="19h" value="19h" />
              <Picker.Item label="19h30" value="19h30" />
              <Picker.Item label="20h" value="20h" />
              <Picker.Item label="20h30" value="20h30" />
              <Picker.Item label="21h" value="21h" />
              <Picker.Item label="21h30" value="21h30" />
              <Picker.Item label="22h" value="22h" />
              <Picker.Item label="22h30" value="22h30" />
              <Picker.Item label="23h" value="23h" />
              <Picker.Item label="23h30" value="23h30" />

            </Picker>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Podemos negociar!</Text>
            </View>
            <Button text="Continuar" bgcolor="#0099ff" />
          </View>
        );
    };
        

export default Horario;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });
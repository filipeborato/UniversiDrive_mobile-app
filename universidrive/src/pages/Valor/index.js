import React, {Component, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from "../../components/Button";
import Input from "../../components/Input";
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';


const Valor = () => {
    return (
        <View style={styles.container}>
          <View style={styles.wrapperLogin}>
            <Text style={styles.texto}>Quanto você vai cobrar por passageiro?</Text>
            <Input
              placeholder="R$4,00"
            />
            <RNPickerSelect
            placeholder={{
                label:'Por dia',
                value: 'dia'
            }}
            items={[
                { label: 'Por dia', value: 'dia' },
                { label: 'Por semana', value: 'semana' },
                { label: 'Por mês', value: 'mes' },
                 ]}
            onValueChange={setSelectedValue} />
          </View>
          <Button text="Continuar" bgcolor="#0099ff" />
        </View>
    )};
        
export default Valor;
        
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
        
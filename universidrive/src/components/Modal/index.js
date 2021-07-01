import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AvatarNoUserImage from "../../assets/png/avatar-no-user.png";
import ZapImage from "../../assets/png/white-whatsapp-icon.png";
const Modal = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalWrapper}>
        <View style={styles.closeModal}>
          <Text
            onPress={() => props.isOpenModal(false)}
            style={styles.closeModalText}
          >
            x
          </Text>
        </View>
        <View style={styles.header}>
          <Image style={styles.avatarImage} source={AvatarNoUserImage} />
          <View>
            <Text style={styles.mainName}>Gabriela Econômica</Text>
            <View style={styles.weekDays}>
              <Text style={styles.day}>D</Text>
              <Text style={styles.day}>S</Text>
              <Text style={styles.rideDays}>T</Text>
              <Text style={styles.day}>Q</Text>
              <Text style={styles.rideDays}>Q</Text>
              <Text style={styles.day}>S</Text>
              <Text style={styles.day}>S</Text>
            </View>
          </View>
        </View>
        <View style={styles.addressInformation}>
          <View style={styles.hour}>
            <Text>7:15</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1, flexWrap: "wrap" }}>
                Rua Brasílio Itiberê, 398, Água Verde, Curitiba, PR
              </Text>
            </View>
            <View style={styles.destiny}>
              <Text>Rua Chile, 1678, Rebouças, Curitiba, PR</Text>
            </View>
          </View>
        </View>
        <View style={styles.pricing}>
          <Text>Preço por passageiro</Text>
          <Text>R$ 4,00/dia</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.informationDetails}>
            Saída em frente ao estádio do athletico, vou passar pelo centro para
            pegar outras pessoas no caminho, não tolero atrasos!!!
          </Text>
        </View>
        <View style={styles.zap}>
          <TouchableOpacity style={styles.zapButton}>
            <Image style={styles.zapImage} source={ZapImage} />
            <Text style={styles.zapText}>Entrar em contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#000000cc",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalWrapper: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 20,
  },
  closeModal: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  closeModalText: {
    fontSize: 20,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 30,
  },
  mainName: {
    fontSize: 20,
  },
  avatarImage: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  weekDays: {
    flexDirection: "row",
  },
  day: {
    backgroundColor: "#eaeaea",
    width: 20,
    height: 20,
    alignItems: "center",
    textAlign: "center",
    margin: 2,
    borderRadius: 100,
  },
  rideDays: {
    backgroundColor: "#666666",
    width: 20,
    height: 20,
    alignItems: "center",
    textAlign: "center",
    margin: 2,
    borderRadius: 100,
    color: "#FFFFFF",
  },
  addressInformation: {
    flexDirection: "row",
  },
  hour: {
    marginRight: 20,
  },
  destiny: {
    marginTop: 20,
  },
  pricing: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    fontSize: 30,
  },
  details: {
    marginTop: 30,
  },
  informationDetails: {
    textAlign: "center",
  },
  zap: {},
  zapImage: {
    width: 32,
    height: 35,
    marginRight: 40,
  },
  zapButton: {
    backgroundColor: "#28a219",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 20,
  },
  zapText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

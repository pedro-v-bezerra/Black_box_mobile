import React, { useState } from "react";

import { View, ScrollView, Text, TextInput, Image, TouchableOpacity } from "react-native";

import styles from "../../styles/perfil/Style";
import { useNavigation } from "@react-navigation/native";
import AppModal from "./Includes/ModalPerfil";

const Perfil = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentImage}>
        <Image
          source={require("../../assets/img/perfil/foto_perfil.png")}
          style={styles.image}
        />
        
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo Usuario...</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="default"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-adress"
        />

        <TextInput
          style={styles.input}
          placeholder="Empresa"
          keyboardType="default"
        />

        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          keyboardType="default"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Salvar perfil</Text>
        </TouchableOpacity>

        <View style={styles.contentImage}>
          <TouchableOpacity
            style={styles.buttonSair}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextSair}>Sair</Text>
          </TouchableOpacity>
        </View>

        {/* MODAL */}
        <AppModal
          Texto="Perfil salvo com sucesso !!"
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </ScrollView>
  );
};

export default Perfil;

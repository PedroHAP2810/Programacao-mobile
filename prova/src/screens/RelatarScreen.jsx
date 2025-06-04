// src/screens/RelatarScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, HelperText, Menu, Divider } from 'react-native-paper';
import * as Location from 'expo-location';

const categorias = ['Buraco', 'Alagamento', 'Animal Perdido', 'Vazamento', 'Outro'];

const RelatarScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [localizacao, setLocalizacao] = useState(null);

  useEffect(() => {
    obterLocalizacao();
  }, []);

  const obterLocalizacao = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'A localização é necessária para o relato.');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocalizacao({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const handleEnviar = () => {
    if (!titulo || !descricao || !categoria || !localizacao) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    const novoRelato = {
      id: Date.now().toString(),
      titulo,
      descricao,
      categoria,
      localizacao,
      data: new Date().toISOString(),
    };

    console.log('Relato enviado:', novoRelato);
    Alert.alert('Sucesso', 'Relato enviado com sucesso!');
    // Aqui depois você pode salvar no Firebase ou AsyncStorage
    setTitulo('');
    setDescricao('');
    setCategoria('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        mode="outlined"
        style={styles.input}
      />

      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Button
            mode="outlined"
            onPress={() => setMenuVisible(true)}
            style={styles.input}
          >
            {categoria ? categoria : 'Selecione a Categoria'}
          </Button>
        }
      >
        {categorias.map((item) => (
          <Menu.Item
            key={item}
            onPress={() => {
              setCategoria(item);
              setMenuVisible(false);
            }}
            title={item}
          />
        ))}
      </Menu>

      <Button
        mode="contained"
        onPress={handleEnviar}
        style={styles.botao}
        disabled={!titulo || !descricao || !categoria}
      >
        Enviar Relato
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  input: {
    marginBottom: 12,
  },
  botao: {
    marginTop: 20,
  },
});

export default RelatarScreen;

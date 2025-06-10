import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetalhesOcorrenciaScreen = ({ route, navigation }) => {
  const { ocorrencia } = route.params;

  const [titulo, setTitulo] = useState(ocorrencia.titulo);
  const [descricao, setDescricao] = useState(ocorrencia.descricao);
  const [categoria, setCategoria] = useState(ocorrencia.categoria);
  const [localizacao, setLocalizacao] = useState(ocorrencia.localizacao);

  const salvarAlteracoes = async () => {
    try {
      const dados = await AsyncStorage.getItem('ocorrencias');
      const lista = dados ? JSON.parse(dados) : [];

      const novaLista = lista.map(item => {
        if (item.id === ocorrencia.id) {
          return {
            ...item,
            titulo,
            descricao,
            categoria,
            localizacao,
          };
        }
        return item;
      });

      await AsyncStorage.setItem('ocorrencias', JSON.stringify(novaLista));
      Alert.alert('Sucesso', 'Ocorrência atualizada!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a ocorrência.');
    }
  };

  const excluirOcorrencia = async () => {
    try {
      const dados = await AsyncStorage.getItem('ocorrencias');
      const lista = dados ? JSON.parse(dados) : [];

      const novaLista = lista.filter(item => item.id !== ocorrencia.id);

      await AsyncStorage.setItem('ocorrencias', JSON.stringify(novaLista));
      Alert.alert('Sucesso', 'Ocorrência excluída!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a ocorrência.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        style={styles.input}
      />
      <TextInput
        label="Categoria"
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
      />

      <Button mode="contained" onPress={salvarAlteracoes} style={styles.botao}>
        Salvar Alterações
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          Alert.alert(
            'Confirmação',
            'Deseja realmente excluir esta ocorrência?',
            [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Excluir', style: 'destructive', onPress: excluirOcorrencia },
            ]
          )
        }
        style={styles.botaoExcluir}
      >
        Excluir Ocorrência
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  botao: {
    marginTop: 16,
  },
  botaoExcluir: {
    marginTop: 8,
  },
});

export default DetalhesOcorrenciaScreen;

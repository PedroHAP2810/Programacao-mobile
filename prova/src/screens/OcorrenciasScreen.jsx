import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function OcorrenciasScreen() {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const carregarOcorrencias = async () => {
        setLoading(true);
        try {
          const dados = await AsyncStorage.getItem('ocorrencias');
          const lista = dados ? JSON.parse(dados) : [];

          console.log('Carregado:', lista);
          
          setOcorrencias(lista.reverse()); // Ocorrências mais recentes primeiro
        } catch (error) {
          console.error('Erro ao carregar ocorrências:', error);
        } finally {
          setLoading(false);
        }
      };

      carregarOcorrencias();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  if (ocorrencias.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhuma ocorrência registrada ainda.</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={ocorrencias}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DetalhesOcorrencia', { ocorrencia: item })}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.titulo}</Title>
              <Paragraph><Text style={styles.label}>Categoria:</Text> {item.categoria}</Paragraph>
              <Paragraph><Text style={styles.label}>Descrição:</Text> {item.descricao}</Paragraph>
              <Paragraph><Text style={styles.label}>Data:</Text> {new Date(item.data).toLocaleString()}</Paragraph>
              <Paragraph><Text style={styles.label}>Localização:</Text> {item.localizacao.latitude.toFixed(4)}, {item.localizacao.longitude.toFixed(4)}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
  },
});

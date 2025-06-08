import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OcorrenciasScreen = () => {
  const [relatos, setRelatos] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const carregarRelatos = async () => {
        try {
          const dados = await AsyncStorage.getItem('relatos');
          const lista = dados ? JSON.parse(dados) : [];
          setRelatos(lista.reverse());
        } catch (error) {
          console.error('Erro ao carregar relatos:', error);
        }
      };

      carregarRelatos();
    }, [])
  );

const renderItem = ({ item }) => (
  <View>
    <List.Item
      title={item.titulo}
      description={`${item.categoria} - ${new Date(item.data).toLocaleString()}`}
      left={props => <List.Icon {...props} icon="alert-circle-outline" />}
      right={props => (
        <Text style={{ alignSelf: 'center', marginRight: 8 }}>
          {item.localizacao
            ? `Lat: ${item.localizacao.latitude.toFixed(4)}, Lng: ${item.localizacao.longitude.toFixed(4)}`
            : 'Localização não disponível'}
        </Text>
      )}
    />
    <Divider />
  </View>
);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={relatos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma ocorrência registrada ainda.</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  vazio: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
});

export default OcorrenciasScreen;

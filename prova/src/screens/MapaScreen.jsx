import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';


const MapaScreen = () => {
  const [localizacao, setLocalizacao] = useState(null);
  const [relatos, setRelatos] = useState([]);

useFocusEffect(
  useCallback(() => {
    obterLocalizacao();
    carregarRelatos();
  }, [])
);

  const obterLocalizacao = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Não foi possível acessar a localização.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocalizacao({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (error) {
      Alert.alert('Erro ao obter localização', error.message);
    }
  };

  const carregarRelatos = async () => {
    try {
      const dados = await AsyncStorage.getItem('ocorrencias');
      const lista = dados ? JSON.parse(dados) : [];
      setRelatos(lista);
    } catch (error) {
      console.error('Erro ao carregar relatos do AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      {localizacao && (
        <MapView style={styles.mapa} region={localizacao} showsUserLocation>
          {relatos.map((relato) => (
            <Marker
              key={relato.id}
              coordinate={relato.localizacao}
              title={relato.titulo}
              description={relato.descricao}
              pinColor="red"
            />
          ))}
        </MapView>
      )}
      <IconButton
        icon="crosshairs-gps"
        size={50}
        style={styles.botaoGPS}
        onPress={obterLocalizacao}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    flex: 1,
  },
  botaoGPS: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white',
    elevation: 4,
  },
});

export default MapaScreen;

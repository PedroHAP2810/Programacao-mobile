import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { IconButton } from 'react-native-paper';

const MapaScreen = () => {
  const [localizacao, setLocalizacao] = useState(null);
  const [relatos, setRelatos] = useState([
    {
      id: '1',
      titulo: 'Buraco na Rua',
      coordenadas: { latitude: -15.807796, longitude: -48.125823 },
    },
    {
      id: '2',
      titulo: 'Animal Perdido',
      coordenadas: { latitude: -15.795139, longitude: -48.117037 },
    },
  ]);

  useEffect(() => {
    obterLocalizacao();
  }, []);

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

  return (
    <View style={styles.container}>
      {localizacao && (
        <MapView style={styles.mapa} region={localizacao} showsUserLocation>
          {relatos.map((relato) => (
            <Marker
              key={relato.id}
              coordinate={relato.coordenadas}
              title={relato.titulo}
            />
          ))}
        </MapView>
      )}
      <IconButton
        icon="crosshairs-gps"
        size={30}
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
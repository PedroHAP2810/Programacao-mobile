import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MapaScreen from './src/screens/MapaScreen';
import RelatarScreen from './src/screens/RelatarScreen';
import OcorrenciasScreen from './src/screens/OcorrenciasScreen.jsx';
import DetalhesOcorrenciaScreen from './src/screens/DetalhesOcorrenciaScreen'; // IMPORTAÇÃO DA NOVA TELA

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs principais
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200ee',
      }}
    >
      <Tab.Screen
        name="Mapa"
        component={MapaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Relatar"
        component={RelatarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Ocorrencias"
        component={OcorrenciasScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-text" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Navegação principal
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ headerShown: false }}
          />
          {/* Tela de detalhes está fora do Tab Navigator para ser aberta por navegação stack */}
          <Stack.Screen
            name="DetalhesOcorrencia"
            component={DetalhesOcorrenciaScreen}
            options={{ title: 'Detalhes da Ocorrência' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MapaScreen from './src/screens/MapaScreen';
import RelatarScreen from './src/screens/RelatarScreen';
// (você pode adicionar OcorrenciasScreen e DetalhesScreen depois)

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
      {/* Adicione aqui a tela Ocorrencias depois */}
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
          {/* Aqui você pode adicionar detalhes do relato, por exemplo */}
          {/* <Stack.Screen name="Detalhes" component={DetalhesScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

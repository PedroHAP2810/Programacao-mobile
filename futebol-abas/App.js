import React from 'react';
import { PaperProvider} from 'react-native-paper'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import EscudoScreen from './screens/EscudoScreen'
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

        <Tab.Screen
         name='EscudoScreen'
        component={EscudoScreen}
        options={{
          title: 'SOBRE O CLUBE',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'orange'
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color, size}) => <Ionicons name='search' color={color} size={size} />
        }}
        />

<Tab.Screen
        name='JogadoresScreen'
        component={JogadoresScreen}
        options={{
          title: 'JOGADORES',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'orange'
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color, size}) => <Ionicons name='football' color={color} size={size} />
        }}
        
        />

<Tab.Screen
        name='TitulosScreen'
        component={TitulosScreen}
        options={{
          title: 'TÍTULOS',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'orange'
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color, size}) => <Ionicons name='trophy-sharp' color={color} size={size} />
        }}
        
        />

       </Tab.Navigator>

    </NavigationContainer>
    </PaperProvider>
  );
}
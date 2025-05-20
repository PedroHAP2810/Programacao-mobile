
import { StatusBar } from 'expo-status-bar';
import {PaperProvider} from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from "@expo/vector-icons"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import MegaSenaScreen from './Componentes/screens/MegaSenaScreen';
import JogoDoBichoScreen from './Componentes/screens/JogoDoBichoScreen';

const tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <tab.Navigator>

          <tab.Screen  
          name='MegaSenaScreen'
           component={MegaSenaScreen}
           options={{
             headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'green'
              },
              tabBarInactiveBackgroundColor: 'black',
              tabBarActiveBackgroundColor: 'green',
            title : "Mega-Sena",

          
            tabBarIcon: ({color, size}) => <MaterialIcons name="monetization-on" size={size} color={color} /> 

           }}
           
           />

           <tab.Screen 
           name='JogoDoBichoScreen'
           component={JogoDoBichoScreen}
           options={{
            title: "Jogo Do Bicho",
             headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'blue'
              },
              tabBarInactiveBackgroundColor: 'black',
              tabBarActiveBackgroundColor: 'blue',
               tabBarIcon: ({color, size}) => <Ionicons name='paw-outline' color={color} size={size} />

           
           }}
           
           />


        </tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from '@expo/vector-icons';

import EscudoScreen from "../Screens/EscudoScreen";
import JogadoresScreen from "../Screens/JogadoresScreen";
import TitulosScreen from "../Screens/TitulosScreen";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (  
   <Drawer.Navigator>

        <Drawer.Screen
        name='SOBRE O CLUBE' 
        component={EscudoScreen}
        options={{
            title:"SOBRE O CLUBE",
            drawerIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />
        }}/>

        <Drawer.Screen
        name='JogadoresScreen' 
        component={JogadoresScreen}
        options={{
            title:"Jogadores",
            drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
        }}/>

        <Drawer.Screen
        name='TitulosScreen' 
        component={TitulosScreen}
        options={{
            title:"Títulos",
            drawerIcon: ({ color, size }) => <Ionicons name='trophy-outline' color={color} size={size} />
        }}/>

    </Drawer.Navigator>
  )
}


import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./src/pages/Home";
import Books from './src/pages/Books';
import Newbook from './src/pages/Newbook';
import Details from './src/pages/Details';



//Db reference


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTintColor: "#008082"
        }}
        />


      <Stack.Screen 
        name="Livros Cadastrados"
        component={Books}
        options={{
          headerTintColor: "#008082"
        }}
        />
        <Stack.Screen 
        name="Novo Cadastro"
        component={Newbook}
        options={{
          headerTintColor: "#008082"
        }}
        />
        <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          headerTintColor: "#008082"
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


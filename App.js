import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import MainScreen from './src/MainScreen';
import Farmacos from './src/Farmacos/Farmacos.js';
import Otros from './src/Farmacos/Otros.js';
import Item from './src/Item.js';
import ListaItems from './src/ListaItems';
import Espectro from './src/Farmacos/Espectro';
import FDA from './src/Farmacos/FDA';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Menu"
            component={MainScreen}
          />
          <Stack.Screen
            name="Farmacos"
            component={Farmacos}
          />
          <Stack.Screen
            name="Urgencias"
            component={ListaItems}
          />
          <Stack.Screen
            name="Antibioticos"
            component={ListaItems}
          />
          <Stack.Screen
            name="Analgesicos"
            component={ListaItems}
          />
          <Stack.Screen
            name="Corticoides"
            component={ListaItems}
          />
          <Stack.Screen
            name="Anestesicos"
            component={Otros}
          />
          <Stack.Screen
            name="Espectro"
            component={Espectro}
          />
          <Stack.Screen
            name="FDA"
            component={FDA}
          />
          <Stack.Screen
            name="Otros"
            component={Otros}
          />
          <Stack.Screen
            name="Item"
            component={Item}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
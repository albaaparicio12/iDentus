import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';
import Farmacos from './Farmacos/Farmacos.js';
import Otros from './Farmacos/Otros.js';
import Item from './Farmacos/Item.js';
import ListaFarmacos from './Farmacos/ListaFarmacos';

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
            name="Antibioticos"
            component={ListaFarmacos}
          />
          <Stack.Screen
            name="Analgesicos"
            component={ListaFarmacos}
          />
          <Stack.Screen
            name="Corticoides"
            component={ListaFarmacos}
          />
          <Stack.Screen
            name="Anestesicos"
            component={Otros}
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
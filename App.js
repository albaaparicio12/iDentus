import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';
import Farmacos from './Farmacos/Farmacos.js';
import Anestesicos from './Farmacos/Anestesicos.js';
import Antibioticos from './Farmacos/Antibioticos.js';
import Analgesicos from './Farmacos/Analgesicos.js';
import Corticoides from './Farmacos/Corticoides.js';
import Otros from './Farmacos/Otros.js';

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
            component={Antibioticos}
          />
          <Stack.Screen
            name="Analgesicos"
            component={Analgesicos}
          />
          <Stack.Screen
            name="Corticoides"
            component={Corticoides}
          />
          <Stack.Screen
            name="Anestesicos"
            component={Anestesicos}
          />
          <Stack.Screen
            name="Otros"
            component={Otros}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
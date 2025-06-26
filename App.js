// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';
import NovaReceitaScreen from './screens/NovaReceitaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Receita" component={ReceitaScreen} />
        <Stack.Screen name="Nova Receita" component={NovaReceitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

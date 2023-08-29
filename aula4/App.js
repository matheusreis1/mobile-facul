import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IMCCalculator from './src/components/imc';
import { CalculateScores } from './src/components/medias';
import Main from './src/components/main';
import { Gallery } from './src/components/galeria';
import { ColorList } from './src/components/colors';
import { Expenses } from './src/components/expenses';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="IMC" component={IMCCalculator} />
        <Stack.Screen name="Medias" component={CalculateScores} />
        <Stack.Screen name="Galeria" component={Gallery} />
        <Stack.Screen name="Cores" component={ColorList} />
        <Stack.Screen name="Gastos" component={Expenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

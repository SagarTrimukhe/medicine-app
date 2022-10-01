import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import MedicinesPage from './pages/medicines';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
          <Stack.Screen name="Medicines" component={MedicinesPage} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

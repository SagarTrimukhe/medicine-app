import React from 'react';
import 'react-native-get-random-values';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import MedicinesPage from './pages/medicines';
import CartPage from './pages/cart';
import TransactionsPage from './pages/transactions';

import { GolbalContextProvider } from './context/globalContext';

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  databaseURL: 'https://medicine-app-73bbf-default-rtdb.firebaseio.com',
  authDomain: 'medicine-app-73bbf.firebaseapp.com',
  projectId: 'medicine-app-73bbf',
  storageBucket: 'medicine-app-73bbf.appspot.com',
  messagingSenderId: process.env.MSG_SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GolbalContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true, headerBackVisible: false }} />
          <Stack.Screen name="Medicines" component={MedicinesPage} options={{ headerShown: true }} />
          <Stack.Screen name="Cart" component={CartPage} options={{ headerShown: true }} />
          <Stack.Screen name="Transactions" component={TransactionsPage} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GolbalContextProvider>
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

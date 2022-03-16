import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ProfilePage from './components/screens/ProfilePage'

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

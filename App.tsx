import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded)
    return <AppLoading />

  return <Routes />
}

const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
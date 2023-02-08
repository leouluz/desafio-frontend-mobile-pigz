import React from 'react';

import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

import {
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_700Bold
  });

  if (!fontsLoad) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark"/>
      <Routes/>
    </ThemeProvider>
  )
}


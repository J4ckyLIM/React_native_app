import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {  AppContainerWithScreenTracking } from './src/routing';
import { ThemeProvider } from './src/services/ThemeProvider';

export const App = () => {

  const backgroundStyle = {
    backgroundColor: Colors.darker,
    height: '100%',
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <ThemeProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppContainerWithScreenTracking />
      </ThemeProvider>
    </SafeAreaView>
  );
};

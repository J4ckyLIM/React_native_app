import React from 'react';
import { SafeAreaView } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {  AppContainerWithScreenTracking } from './src/routing';

export const App = () => {

  const backgroundStyle = {
    backgroundColor: Colors.darker,
    height: '100%',
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <AppContainerWithScreenTracking />
    </SafeAreaView>
  );
};

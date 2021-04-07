import React from 'react';
import { SafeAreaView } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContainer } from './src/routing';

export const App = () => {

  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <AppContainer />
    </SafeAreaView>
  );
};

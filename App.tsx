import Home from '@screens/Home';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

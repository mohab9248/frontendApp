/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import Home from './Components/Home';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './Screen/Screens';
function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

export default App;

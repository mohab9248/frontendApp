import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Components/Home';
import ProductsDetails from '../Components/ProductsDetails';
const Stack = createStackNavigator();
function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name={'home'} />
      <Stack.Screen component={ProductsDetails} name={'details'} />
    </Stack.Navigator>
  );
}

export default Screens;

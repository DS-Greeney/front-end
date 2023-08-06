import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView, Text, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from '../pages/Home/Homepage';
import Mypage from '../pages/Mypage';
import Login from '../pages/Login';
import MainNavigator from './MainNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainNavigator" component={MainNavigator} />
      <Drawer.Screen name="My" component={Mypage} />
      {/* <Drawer.Screen name="MainNavigator" component={MainNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

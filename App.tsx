import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainNavigator from './src/navigation/MainNavigator';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Map from './src/pages/Map';
import Mypage from './src/pages/Mypage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* root header 숨기기 */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{title: '검색'}}
        />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen
          name="Mypage"
          component={Mypage}
          options={{title: 'Mypage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './src/Home';
import Search from './src/Search';
import Map from './src/Map';
import Mypage from './src/Mypage';

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            title: '지도',
            tabBarIcon: ({color, size}) => (
              <Icon name="map" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Mypage"
          component={Mypage}
          options={{
            title: '마이',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

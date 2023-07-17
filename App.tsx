import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainNavigator from './src/navigation/MainNavigator';
import Home from './src/pages/Home';
import SignUp from './src/pages/SignUp';
import Search from './src/pages/Search';
import Map from './src/pages/Map';
import Mypage from './src/pages/Mypage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: '회원가입',
            }}
          />
        </Stack.Group>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{title: '검색'}}
        />
        <Stack.Screen name="Map" component={Map} options={{title: 'Map'}} />
        <Stack.Screen
          name="Mypage"
          component={Mypage}
          options={{title: '마이페이지'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './src/navigation/MainNavigator';
import Homepage from './src/pages/Home/Homepage';
import SignUp from './src/pages/SignUp';
import Search from './src/pages/Home/Search';
import Map from './src/pages/Map';
import Login from './src/pages/Login';
import Mypage from './src/pages/Mypage';
import TourSpot from './src/pages/Recommend/TourspotPage';
import Restaurant from './src/pages/Recommend/RestaurantPage';
import Likelist from './src/pages/LikelistPage';
import DrawerNavigator from './src/navigation/DrawerNavigator';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* root header 숨기기 */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: '회원가입',
          }}
        />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

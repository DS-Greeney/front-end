import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import MainNavigator from './src/navigation/MainNavigator';
import Homepage from './src/pages/Home/Homepage';
import SignUp from './src/pages/SignUp';
import Search from './src/pages/Home/Search';
import Map from './src/pages/Map';
import Login from './src/pages/Login';
import Mypage from './src/pages/Mypage';
import TourSpot from './src/pages/Recommend/TourspotPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* root header 숨기기 */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Group>
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{
              title: 'Homepage',
            }}
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
          name="Login"
          component={Login}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="Mypage"
          component={Mypage}
          options={{title: '마이페이지'}}
        />
        <Stack.Screen
          name="TourSpot"
          component={TourSpot}
          options={{title: '생태 관광'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

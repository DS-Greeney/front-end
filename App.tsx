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
import Restaurant from './src/pages/Recommend/RestaurantPage';
import Likelist from './src/pages/LikelistPage';
import RestaurantDetile from './src/pages/Recommend/RestaurantDetile';
import TourspotDetile from './src/pages/Recommend/TourspotDetile';

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
        <Stack.Group>
          <Stack.Screen
            name="TourSpot"
            component={TourSpot}
            options={{title: '생태 관광'}}
          />
          <Stack.Screen
            name="TourspotDetile"
            component={TourspotDetile}
            options={{title: '관광 상세페이지'}}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{title: '비건 식당'}}
          />
          <Stack.Screen
            name="RestaurantDetile"
            component={RestaurantDetile}
            options={{title: '식당 상세페이지'}}
          />
        </Stack.Group>
        <Stack.Screen
          name="Likelist"
          component={Likelist}
          options={{title: '내가 찜한 목록'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Map from '../pages/Map';
import Mypage from '../pages/Mypage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import TourAttractionDetile from '../components/TourAttractionDetile';
import RestaurantDetile from '../components/RestaurantDetile';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    /* Tab header 숨기기 */
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#1A6F3F'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <IconC name="leaf" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="tour" component={TourAttractionDetile} />
      <Tab.Screen name="food" component={RestaurantDetile} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="grass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          title: '지도',
          tabBarIcon: ({color, size}) => (
            <IconC name="flower" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          title: '마이',
          tabBarIcon: ({color, size}) => (
            <IconC name="food-apple" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

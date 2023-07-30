import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../pages/Home/Homepage';
import Search from '../pages/Home/Search';
import Map from '../pages/Map';
import Mypage from '../pages/Mypage';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    /* Tab header 숨기기 */
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
}

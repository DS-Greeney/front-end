import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GreenHotelDetail from '../pages/Recommend/GreenHotelDetail';
import TourspotDetail from '../pages/Recommend/TourspotDetail';
import RestaurantDetail from '../pages/Recommend/RestaurantDetail';
import Search from '../pages/Home/Search';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="GreenHotelDetail" component={GreenHotelDetail} />
      <Stack.Screen name="TourspotDetail" component={TourspotDetail} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
}

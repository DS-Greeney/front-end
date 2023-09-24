import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import MainNavigator from './MainNavigator';
import Homepage from '../pages/Home/Homepage';
import SignUp from '../pages/SignUp';
import Search from '../pages/Home/Search';
import Map from '../pages/Map';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import TourSpot from '../pages/Recommend/TourspotPage';
import Restaurant from '../pages/Recommend/RestaurantPage';
import LikelistPage from '../pages/LikelistPage';
import DrawerNavigator from './DrawerNavigator';
import Header from '../components/Common/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import TourspotDetail from '../pages/Recommend/TourspotDetail';
import RestaurantDetail from '../pages/Recommend/RestaurantDetail';
import GreenHotelPage from '../pages/Recommend/GreenHotelPage';
import TourProductPage from '../pages/Recommend/TourProductPage';
import DailyChallenge from '../pages/Challenge/DailyChallenge';
import GreenHotelDetail from '../pages/Recommend/GreenHotelDetail';

const Stack = createNativeStackNavigator();

export default function HomeStack({navigation, route}: any) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === 'Homepage' ||
      routeName === 'Home' ||
      routeName === undefined ||
      routeName === 'Map' ||
      routeName === 'Search' ||
      routeName === 'Mypage' ||
      routeName === 'My' ||
      routeName === 'MyPage'
    ) {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Homepage}
        // options={({navigation}) => ({
        //   // eslint-disable-next-line react/no-unstable-nested-components
        //   headerTitle: () => (
        //     <Header
        //       title={''}
        //       type={'MAIN'}
        //       navigation={navigation}
        //       img={'../assets/images/home/logo.png'}
        //     />
        //   ),
        //   // eslint-disable-next-line react/no-unstable-nested-components
        //   headerRight: () => (
        //     <Icon
        //       name="menu"
        //       size={28}
        //       onPress={() => navigation.openDrawer()}
        //       // style={styles.icon}
        //     />
        //   ),
        // })}
      />

      {/* <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="My" component={Mypage} /> */}
      <Stack.Screen name="TourSpot" component={TourSpot} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="GreenHotelPage" component={GreenHotelPage} />
      <Stack.Screen name="TourProductPage" component={TourProductPage} />
      <Stack.Screen name="TourspotDetail" component={TourspotDetail} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="LikelistPage" component={LikelistPage} />
      <Stack.Screen name="DailyChallenge" component={DailyChallenge} />
      <Stack.Screen name="GreenHotelDetail" component={GreenHotelDetail} />
    </Stack.Navigator>
  );
}

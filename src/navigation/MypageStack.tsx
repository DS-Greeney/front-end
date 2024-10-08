import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import Homepage from '../pages/Home/Homepage';
import SignUp from '../pages/SignUp';
import Search from '../pages/Home/Search';
import Map from '../pages/Map';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import TourSpot from '../pages/Recommend/TourspotPage';
import Restaurant from '../pages/Recommend/RestaurantPage';
import Likelist from '../pages/LikelistPage';
import DrawerNavigator from './DrawerNavigator';
import ChallengeAchieve from '../pages/Challenge/ChallengeComplete';
import DailyChallenge from '../pages/Challenge/DailyChallenge';
import NicknameChangePage from '../pages/Settings/NicknameChangePage';
import PassChangePage from '../pages/Settings/PassChangePage';
import TOS from '../pages/Settings/TOS';
import PrivacyPolicy from '../pages/Settings/PrivacyPolicy';
import RestaurantDetail from '../pages/Recommend/RestaurantDetail';
import TourspotDetail from '../pages/Recommend/TourspotDetail';
import GreenHotelDetail from '../pages/Recommend/GreenHotelDetail';
import WrittenReviewPage from '../pages/WrittenReviewPage';

const Stack = createNativeStackNavigator();

export default function MypageStack({navigation, route}: any) {
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
      initialRouteName="MyPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyPage" component={Mypage} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="TourSpot" component={TourSpot} />
        <Stack.Screen name="Restaurant" component={Restaurant} /> */}
      <Stack.Screen name="Likelist" component={Likelist} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="TourspotDetail" component={TourspotDetail} />
      <Stack.Screen name="GreenHotelDetail" component={GreenHotelDetail} />

      <Stack.Screen name="ChallengeAchieve" component={ChallengeAchieve} />
      <Stack.Screen name="DailyChallenge" component={DailyChallenge} />
      <Stack.Screen name="NicknameChangePage" component={NicknameChangePage} />
      <Stack.Screen name="PassChangePage" component={PassChangePage} />
      <Stack.Screen name="TOS" component={TOS} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="WrittenReviewPage" component={WrittenReviewPage} />
    </Stack.Navigator>
  );
}

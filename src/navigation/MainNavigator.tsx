import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import Homepage from '../pages/Home/Homepage';
import Search from '../pages/Home/Search';
import Map from '../pages/Map';
import Mypage from '../pages/Mypage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Common/Header';
import MypageStack from './MypageStack';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

export default function MainNavigator({navigation}: any) {
  // const [tabBarVisible, setTabBarVisible] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // 현재 화면이 포커스 되면 해당 탭으로 설정
  //     // navigation.setParams({tabBarVisible: true});
  //     setTabBarVisible(true);
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => {
  //     // 화면이 벗어나면 탭 바를 숨기도록 설정
  //     setTabBarVisible(false);
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    /* Tab header 숨기기 */
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1A6F3F',
        // tabBarStyle: {display: tabBarVisible ? 'flex' : 'none'},
      }}>
      <Tab.Screen
        name="Homepage"
        component={HomeStack}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <IconC name="leaf" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
        // options={({navigation}) => ({
        //   headerShown: true,
        //   title: '홈',
        //   tabBarIcon: ({color, size}) => (
        //     <IconC name="leaf" color={color} size={size} />
        //   ),
        //   unmountOnBlur: true,
        //   headerTitle: () => (
        //     <Header
        //       title={''}
        //       type={'MAIN'}
        //       navigation={navigation}
        //       img={'../assets/images/home/logo.png'}
        //     />
        //   ),
        //   headerRight: () => (
        //     <Icon
        //       name="menu"
        //       size={28}
        //       onPress={navigation.openDrawer()}
        //       style={styles.icon}
        //     />
        //   ),
        //   headerStyle: {
        //     height: 70,
        //   },
        // })}
      />
      {/* <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="tour" component={TourspotDetile} />
      <Tab.Screen name="food" component={RestaurantDetile} /> */}

      {/* SearchStack, MapStack, MyStack요런거 연결하기 */}
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="grass" color={color} size={size} />
          ),
          unmountOnBlur: true,
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
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageStack}
        options={{
          title: '마이',
          tabBarIcon: ({color, size}) => (
            <IconC name="food-apple" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   icon: {
//     marginRight: 30,
//   },
// });

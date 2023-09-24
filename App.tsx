import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Geolocation from 'react-native-geolocation-service';
import {AppContext} from './src/components/Common/Context';
import MainNavigator from './src/navigation/MainNavigator';
import Homepage from './src/pages/Home/Homepage';
import SignUp from './src/pages/SignUp';
import PrivacyPolicy from './src/pages/Settings/PrivacyPolicy';
import Search from './src/pages/Home/Search';
import Map from './src/pages/Map';
import Login from './src/pages/Login';
import Mypage from './src/pages/Mypage';
import TourSpot from './src/pages/Recommend/TourspotPage';
import Restaurant from './src/pages/Recommend/RestaurantPage';
import Likelist from './src/pages/LikelistPage';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import 'react-native-gesture-handler';
import TOS from './src/pages/Settings/TOS';

interface ILocation {
  latitude: number;
  longitude: number;
}

interface UserAuth {
  id: string;
  isAuth: boolean;
  nickname: string;
  email: string;
  phoneNum: string;
  birth: string;
  gender: string;
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [userId, setUserId] = useState<string | null>(null);
  const [userAuth, setUserAuth] = useState<UserAuth | undefined>(undefined);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setLocation({
                latitude,
                longitude,
              });
              console.log('Latitude: ', latitude);
              console.log('Latitude: ', longitude);
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          setLocation({latitude: 37.5538, longitude: 126.9916});
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const {latitude, longitude} = position.coords;
    //     setLocation({
    //       latitude,
    //       longitude,
    //     });
    //     console.log('Latitude: ', latitude);
    //     console.log('Latitude: ', longitude);
    //   },
    //   error => {
    //     console.log(error.code, error.message);
    //   },
    //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    // );
  }, []);

  const userSettings = {
    location: location,
    userId: userId,
    setUserId: setUserId,
    userAuth: userAuth,
    setUserAuth: setUserAuth,
  };

  return (
    <AppContext.Provider value={userSettings}>
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
          <Stack.Screen
            name="TOS"
            component={TOS}
            options={{
              title: '서비스 이용약관',
            }}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{
              title: '개인정보 처리방침',
            }}
          />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

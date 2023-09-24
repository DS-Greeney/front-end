import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps';
import axios from 'axios';
import Modal from 'react-native-modal';
import MapModal from '../components/Common/MapModal';
import {AppContext} from '../components/Common/Context';

const dummymarkersData = [
  {
    title: '북한산국립공원',
    description:
      '단위 면적당 가장 많은 탐방객이 찾는 국립공원으로 세계기네스북에 기록되기도 했던 북한산국립공원은 세계적으로도 드문 도심 속 자연공원이다.',
    latlng: {
      latitude: 37.6242392,
      longitude: 126.9901206,
    },
  },
  {
    title: '북악산생태탐방로',
    description:
      '북악산 내 전통사찰과 일반사찰 탐방이 가능한 힐링로드 산사길, 자연의 소중함을 느끼고, 일상에 찌든 스트레스를 해소할 수 있는 곳이다.',
    latlng: {
      latitude: 37.6130288,
      longitude: 126.9745028,
    },
  },
];

export default function Map() {
  const markers = dummymarkersData;
  const {location} = useContext(AppContext);
  const [selectedAreaCode, setSelectedAreaCode] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [title, setTitle] = useState('');
  const [add, setAdd] = useState('');

  const handleMarkerPress = (marker, title, add) => {
    setModalVisible(true);
    setSelectedMarker(marker);
    setTitle(title);
    setAdd(add);
  };

  const [tourList, setTourlist] = useState([]);
  const [veganList, setVeganlist] = useState([]);
  // const [tourList, setTourlist] = useState([]);

  // useEffect(() => {
  //   getData(selectedAreaCode);
  // }, [selectedAreaCode]);

  const getData = async (areaCode: any) => {
    try {
      const response = await axios.get(
        'http://10.0.2.2:8082/greeney/main/tourlist',
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            areaCode: areaCode,
          },
        },
      );
      // console.log(response.data || []);
      setTourlist(response.data.tourlists || []);
      // console.log(tourList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      const response = await axios.get(
        'http://10.0.2.2:8082/greeney/main/restaurantlist',
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            areaCode: areaCode,
          },
        },
      );
      // console.log(response.data.restaurants || []);
      setVeganlist(response.data.restaurants || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const tourmarkerImage = require('../assets/images/map/tourmapicon.png');
  const resmarkerImage = require('../assets/images/map/resmapicon.png');
  const hotelmarkerImage = require('../assets/images/map/hotelmapicon.png');

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.6242392,
          longitude: 126.9901206,
          // latitude: 33.2747785,
          // longitude: 126.235335,
          // latitude: location.latitude,
          // longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* {markers.map((marker, index) => {
          return (
            <Marker
              style={styles.marker}
              key={index}
              onPress={() =>
                handleMarkerPress(marker, marker.title, marker.description)
              }
              coordinate={marker.latlng}>
              <Image source={tourmarkerImage} style={styles.markerImg} />
            </Marker>
          );
        })} */}
        {/* {tourList.map((marker, index) => {
          const coordinateTour: LatLng = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };
          // console.log(coordinateTour);
          return (
            <Marker
              style={styles.marker}
              key={index}
              onPress={() =>
                handleMarkerPress(marker, marker.title, marker.addr)
              }
              coordinate={coordinateTour}>
              <Image source={tourmarkerImage} style={styles.markerImg} />
            </Marker>
          );
        })} */}
        {/* {veganList.map((marker, index) => {
          if (!marker || !marker.rstrntLa || !marker.rstrntLo) {
            return null;
          }
          const coordinateVegan: LatLng = {
            latitude: marker.rstrntLa,
            longitude: marker.rstrntLo,
          };
          // console.log(coordinateVegan);
          return (
            <Marker
              style={styles.marker}
              key={index}
              onPress={() =>
                handleMarkerPress(marker, marker.rstrntName, marker.rstrntAddr)
              }
              coordinate={coordinateVegan}>
              <Image source={resmarkerImage} style={styles.markerImg} />
            </Marker>
          );
        })} */}
      </MapView>

      {selectedMarker && (
        <MapModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={title}
          add={add}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    width: 60,
    height: 75,
  },
  markerImg: {
    width: 40,
    height: 50,
    resizeMode: 'contain',
  },
  headtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  logoImg: {
    flex: 1,
    marginLeft: 30,
    alignItems: 'center',
  },
  logo: {
    width: 161,
    height: 43,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    width: '57%',
    alignSelf: 'flex-end',
  },
  userInfo: {
    alignItems: 'center',
    marginVertical: 10,
  },
  userImg: {
    width: 84,
    height: 84,
    borderRadius: 50,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  username: {
    fontSize: 20,
    color: '#393939',
    marginVertical: 8,
  },
  userStack: {
    width: 'auto',
    height: 'auto',
    borderRadius: 30,
    backgroundColor: '#005F29',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 5,
  },
  stackname: {
    color: '#fff',
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  menuContainer: {
    marginHorizontal: 30,
  },
  menuname: {
    color: '#000',
    fontSize: 16,
    marginVertical: 10,
  },
  logoutBtn: {
    color: '#E10000',
    fontSize: 16,
    marginVertical: 10,
  },
});

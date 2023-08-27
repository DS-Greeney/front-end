import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios';
import Modal from 'react-native-modal';

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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSidebar = () => {
    setModalVisible(false);
  };
  // const [tourList, setTourlist] = useState([]);
  // const [lat, setLat] = useState(37.6242392);
  // const [log, setLog] = useState(126.9901206);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://10.0.2.2:8082/greeney/main/tourlist',
  //       {
  //         params: {
  //           latitude: lat,
  //           longitude: log,
  //         },
  //       },
  //     );
  //     // console.log(response.data || []);
  //     setTourlist(response.data.tourlists || []);
  //     console.log(response);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.6242392,
          longitude: 126.9901206,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {markers.map((marker, index) => {
          return (
            <Marker
              style={styles.marker}
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              pinColor="green"
              // image={require('../assets/images/map/tourmapicon.png')}
              // onPress={toggleModal}
            />
          );
        })}
        {/* {tourList.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              pinColor="green"
            />
          );
        })} */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    width: 60,
    height: 75,
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

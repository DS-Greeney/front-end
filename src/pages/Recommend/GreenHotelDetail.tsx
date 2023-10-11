import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState, useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LikeHeart from '../../components/Like/LikeHeart';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';
import Config from 'react-native-config';
import ReviewPost from '../../components/Review/ReviewPost';

interface dataType {
  hotelId: number;
  hotelName: string;
  hotelAddr: string;
  hotelTel: string;
  hotelService: string;
  hotelInfo: string;
  hotelLa: number;
  hotelLo: number;
  areaCode: number;
  hotelUrl: string;
  hotelStar: number;
}

const GreenHotelDetail = (route: any) => {
  const {userId} = useContext(AppContext);
  const Key = Config.google_map_api_key;

  const [greenHotel, setGreenHotel] = useState<dataType>({
    hotelId: 0,
    hotelName: '',
    hotelAddr: '',
    hotelTel: '',
    hotelService: '',
    hotelInfo: '',
    hotelLa: 0,
    hotelLo: 0,
    areaCode: 0,
    hotelUrl: '',
    hotelStar: 0,
  });
  let [inputCount, setInputCount] = useState(0);
  let navigation = useNavigation();

  let hotelId = 0;
  if (route.route.params.hotelId) {
    hotelId = route.route.params.hotelId;
  } else if (route.route.params.spotId) {
    hotelId = route.route.params.spotId;
  } else if (route.route.params) {
    hotelId = route.route.params;
  }

  // let lat = route.route.params.hotelLa;
  // let log = route.route.params.hotelLo;
  // const [lat, setLat] = useState(0);
  // const [log, setLog] = useState(0);
  const [likeState, setLikeState] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/greeney/main/hotellist/detail/${hotelId}?userId=${userId}`,
      );
      setGreenHotel(response.data.hotel || []);
      setReviewList(response.data.reviewList || []);
      setLikeState(response.data.like || 0);
      setLoading(false);
      // setLat(route.route.params.hotelLa || 0);
      // setLog(route.route.params.hotelLo || 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  var area = '';
  switch (greenHotel.areaCode) {
    case 1:
      area = '서울특별시';
      break;
    case 2:
      area = '인천광역시';
      break;
    case 3:
      area = '대전광역시';
      break;
    case 4:
      area = '대구광역시';
      break;
    case 5:
      area = '광주광역시';
      break;
    case 6:
      area = '부산광역시';
      break;
    case 7:
      area = '울산광역시';
      break;
    case 8:
      area = '세종특별자치시';
      break;
    case 31:
      area = '경기도';
      break;
    case 32:
      area = '강원특별자치도';
      break;
    case 33:
      area = '충청북도';
      break;
    case 34:
      area = '충청남도';
      break;
    case 35:
      area = '경상북도';
      break;
    case 36:
      area = '경상남도';
      break;
    case 37:
      area = '전라북도';
      break;
    case 38:
      area = '전라남도';
      break;
    case 39:
      area = '제주특별자치도';
      break;
  }

  return (
    <View style={styles.view}>
      <Header
        navigation={navigation}
        type={'BACK'}
        title={greenHotel.hotelName}
      />
      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${greenHotel.hotelLa}, ${greenHotel.hotelLo}&fov=80&heading=70&pitch=0&key=${Key}`,
          }}
          style={styles.image}
        />
        <View style={styles.title}>
          <Text style={{fontSize: 30, color: '#000', flex: 1}}>
            {greenHotel.hotelName}
          </Text>
          <LikeHeart
            category={3}
            size={40}
            likeState={likeState}
            setLikeState={setLikeState}
            itemId={hotelId}
            userId={userId}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#666',
            marginLeft: 20,
            marginTop: 5,
            marginBottom: 5,
          }}>
          {area}
        </Text>
        <View style={styles.view2}>
          <Icon
            name="star-rate"
            size={28}
            color="#FCE25F"
            style={{marginRight: 5}}
          />
          <Text style={{fontSize: 20, color: '#000'}}>
            {greenHotel.hotelStar} / 5
          </Text>
        </View>
        {/* <View style={styles.view2}>
          <Text
            style={[
              styles.text,
              {fontSize: 16, marginBottom: 10, marginTop: 10},
            ]}>
            {firstStr[0] + '.'}
          </Text>
        </View> */}
        {/* {renderMapView()} */}
        <View style={styles.view2}>
          {loading ? (
            <TouchableOpacity
              disabled={true}
              style={{height: 130, backgroundColor: '#ccc'}}
            />
          ) : (
            // <MapView
            //   style={styles.loadview}
            //   provider={PROVIDER_GOOGLE}
            //   initialRegion={{
            //     // latitude: 37.6874303,
            //     // longitude: 127.0344916,
            //     latitude: greenHotel.hotelLa,
            //     longitude: greenHotel.hotelLo,
            //     latitudeDelta: 0.001,
            //     longitudeDelta: 0.001,
            //   }}>
            //   <Marker
            //     coordinate={{
            //       latitude: greenHotel.hotelLa,
            //       longitude: greenHotel.hotelLo,
            //     }}
            //   />
            // </MapView>
            <TouchableOpacity
              disabled={true}
              style={{height: 130, backgroundColor: '#ccc'}}
            />
          )}
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>주소</Text>
          <Text style={styles.text}>{greenHotel.hotelAddr}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>전화번호</Text>
          <Text style={styles.text}>{greenHotel.hotelTel}</Text>
        </View>
        {greenHotel.hotelUrl !== '' && (
          <View style={styles.view2}>
            <Text style={styles.extext}>홈페이지</Text>
            <Text style={styles.text}>{greenHotel.hotelUrl}</Text>
          </View>
        )}
        <View style={styles.view2}>
          <Text style={styles.extext}>편의시설</Text>
          <Text style={styles.text}>{greenHotel.hotelService}</Text>
        </View>
        {/* {linkFirstIndex === -1 ? (
          <View />
        ) : (
          <View style={styles.view2}>
            <Text style={styles.extext}>홈페이지</Text>
            <Text style={styles.text}>{linkTemp + '/'}</Text>
          </View>
        )} */}
        {/* <Text style={[styles.text, {margin: 20}]}>{summaryStr[0]}</Text> */}
        <Text style={[styles.text, {margin: 20}]}>{greenHotel.hotelInfo}</Text>
        {/* {tourSpot.mainimage === '' ? (
          <Image
            style={styles.image2}
            source={{
              uri: 'https://www.knps.or.kr/upload/contest/21/20221108082032573.jpg',
            }}
          />
        ) : (
          <Image style={styles.image2} source={{uri: tourSpot.mainimage}} />
        )} */}
        <View style={styles.view2}>
          <TouchableOpacity
            disabled={true}
            style={{
              height: 2,
              width: '100%',
              backgroundColor: '#ccc',
              marginBottom: 20,
              marginTop: 20,
            }}></TouchableOpacity>
          {/* <Image source={require('')} /> */}
        </View>

        <ReviewPost itemId={hotelId} reviewData={reviewList} category={3} />
      </ScrollView>
    </View>
  );
};

export default GreenHotelDetail;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollView: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  image2: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
  },
  image3: {
    width: 310,
    height: 150,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 40,
  },
  emptyImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    backgroundColor: '#666',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  view2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: '#000',
    fontSize: 14,
    flex: 1,
  },
  extext: {
    color: '#666',
    fontSize: 14,
    width: 70,
  },
  textInput: {
    width: 350,
    height: 120,
    fontSize: 15,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#1A6F3F',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 30,
    paddingLeft: 10,
  },
  loadview: {
    width: '100%',
    height: 130,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  userImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

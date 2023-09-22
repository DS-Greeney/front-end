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
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LikeHeart from '../../components/Like/LikeHeart';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';
import Config from 'react-native-config';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// import ReviewItem from '../../components/Recommend/ReviewItem';

interface dataType {
  rstrntId: number;
  rstrntCtgry: string;
  rstrntName: string;
  rstrntAddr: string;
  rstrntStar: number;
  areaCode: number;
  rstrntTel: string;
  rstrntMenuinfo: string;
  rstrntLa: string;
  rstrntLo: string;
}

export default function RestaurantDetail(route: any) {
  const {userId} = useContext(AppContext);
  const Key = Config.google_map_api_key;
  const [loading, setLoading] = useState(true);

  const [restaurant, setRestaurant] = useState<dataType>({
    rstrntId: 0,
    rstrntCtgry: '',
    rstrntName: '',
    rstrntAddr: '',
    rstrntStar: 0,
    areaCode: 0,
    rstrntTel: '',
    rstrntMenuinfo: '',
    rstrntLa: '',
    rstrntLo: '',
  });
  let [inputCount, setInputCount] = useState(0);
  let navigation = useNavigation();
  let rstrntId = route.route.params.rstrntId;
  const [likeState, setLikeState] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:8082/greeney/main/restaurantlist/detail/${rstrntId}?userId=${userId}`,
      );
      //console.log(response.data || []);
      setRestaurant(response.data.restaurant || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const memu = restaurant.rstrntMenuinfo.split(',');

  const MemuComponent = ({data}) => {
    return (
      <View style={{marginHorizontal: 20, marginBottom: 5}}>
        {data.map((item, index) => (
          <View key={index} style={styles.menu}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>
    );
  };

  var area = '';
  switch (restaurant.areaCode) {
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
        title={restaurant.rstrntName}
      />
      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant.rstrntLa}, ${restaurant.rstrntLo}&fov=80&heading=70&pitch=0&key=${Key}`, //api 키 불러오기
          }}
          style={styles.image}
        />
        <View style={styles.title1}>
          <Text
            style={{
              fontSize: 20,
              color: '#666',
              marginRight: 5,
            }}>
            {area}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#666',
            }}>
            {restaurant.rstrntCtgry}
          </Text>
        </View>
        <View style={styles.title2}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={{fontSize: 30, color: '#000'}}>
              {restaurant.rstrntName}
            </Text>
          </View>
          <LikeHeart
            category={2}
            size={40}
            likeState={likeState}
            setLikeState={setLikeState}
            itemId={rstrntId}
            userId={userId}
          />
        </View>
        <View style={styles.view2}>
          <Icon
            name="star-rate"
            size={28}
            color="#FCE25F"
            style={{marginRight: 5}}
          />
          <Text style={{fontSize: 20, color: '#000'}}>
            {' '}
            {restaurant.rstrntStar} / 5
          </Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            disabled={true}
            style={{
              height: 130,
              // width: '100%',
              // backgroundColor: '#ccc',
              overflow: 'hidden',
            }}></TouchableOpacity>
          {/* <Image
            style={styles.loadview}
            source={require('../../assets/images/restaurant/dummy_view.jpg')}
          /> */}
          {loading ? (
            <TouchableOpacity
              disabled={true}
              style={{height: 130, backgroundColor: '#ccc'}}
            />
          ) : (
            <MapView
              style={styles.loadview}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: Number(restaurant.rstrntLa),
                longitude: Number(restaurant.rstrntLo),
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}
            />
          )}
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>주소</Text>
          <Text ellipsizeMode="tail" style={[styles.text, {flex: 1}]}>
            {restaurant.rstrntAddr}
          </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>전화번호</Text>
          <Text style={styles.text}>{restaurant.rstrntTel}</Text>
          {/* 전화번호 앞 0, - 처리 */}
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>메뉴</Text>
        </View>
        <MemuComponent data={memu} />
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
        <View style={styles.view2}>
          <Text style={styles.text}>리뷰(23)</Text>
        </View>
        <TouchableOpacity disabled={true} style={styles.textInput}>
          <TextInput
            onChangeText={event => {
              setInputCount(event.length); //replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").
            }}
            textAlignVertical="top"
            multiline
            editable
            numberOfLines={4}
            maxLength={200}
            style={{height: 90}}
            placeholder="여러분의 소중한 식당 후기를 남겨주세요"
            placeholderTextColor="#666"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>{inputCount}/200자</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="star-rate"
                size={22}
                color="#ccc"
                style={{marginRight: 5}}
              />
              <Text style={{marginRight: 5, color: '#aaa', fontSize: 14}}>
                0 / 5
              </Text>
              <Icon
                name="camera-alt"
                size={22}
                color="#000"
                style={{marginRight: 5}}
              />
              <Icon
                name="send"
                size={22}
                color="#000"
                style={{marginRight: 5}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            disabled={true}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              width: 45,
              marginLeft: 20,
              marginRight: 10,
              backgroundColor: '#ccc',
              borderRadius: 50,
              overflow: 'hidden',
            }}>
            <Image
              style={styles.userImg}
              source={require('../../assets/images/home/dummy_user.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 15, color: '#000'}}>수민</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star-rate" size={16} color="#FCE25F" />
              <Text style={{fontSize: 12, color: '#000'}}>5</Text>
              <Text style={{fontSize: 12, marginLeft: 10}}>2023-07-14</Text>
            </View>
          </View>
        </View>
        <Image
          source={{
            uri: 'https://ldb-phinf.pstatic.net/20220927_243/1664252532434mWlty_JPEG/EA97B633-44FD-409D-9487-FF90FB4099DA.jpeg',
          }}
          style={styles.image3}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            marginHorizontal: 40,
            marginBottom: 40,
          }}>
          정말 맛있습니다. 제가 딱 찾던 식당이었어요!
        </Text>
      </ScrollView>
    </View>
  );
}

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
  title1: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  title2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 5,
  },
  view2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  text: {
    color: '#000',
    fontSize: 14,
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
    height: '100%',
    resizeMode: 'cover',
  },
  userImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

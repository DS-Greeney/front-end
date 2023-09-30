import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LikeHeart from '../../components/Like/LikeHeart';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {AppContext} from '../../components/Common/Context';
import ReviewPost from '../../components/Review/ReviewPost';
import Config from 'react-native-config';

// import ReviewItem from '../../components/Recommend/ReviewItem';

interface dataType {
  tourspotId: number;
  areaCode: number;
  latitude: number;
  longitude: number;
  sigunguCode: number;
  tourspotStar: number;
  addr: string;
  mainimage: string;
  summary: string;
  tel: string;
  title: string;
}

// interface propType {
//   user_nickname: string;
//   tourspot_cmnt_content: string;
//   tourspot_cmnt_time: string;
//   tourspot_cmnt_img: string[];
//   tourspot_cmnt_star: number;
//   user_picture: string;
// }

export default function TourspotDetail(route: any) {
  const {userId} = useContext(AppContext);
  const [tourSpot, setTourSpot] = useState<dataType>({
    tourspotId: 0,
    areaCode: 0,
    latitude: 0,
    longitude: 0,
    sigunguCode: 0,
    tourspotStar: 0,
    addr: '',
    mainimage: '',
    summary: '',
    tel: '',
    title: '',
  });
  let [inputCount, setInputCount] = useState(0);
  let navigation = useNavigation();
  let tourspotId = route.route.params.tourspotId;
  // let lat = route.route.params.latitude;
  // let log = route.route.params.longitude;
  const [likeState, setLikeState] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  const [loading, setLoading] = useState(true);
  // const [reviewList, setReviewList] = useState<propType>({
  //   user_nickname: '',
  //   tourspot_cmnt_content: '',
  //   tourspot_cmnt_time: '',
  //   tourspot_cmnt_img: [],
  //   tourspot_cmnt_star: 0,
  //   user_picture: '',
  // });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/greeney/main/tourlist/detail/${tourspotId}?userId=${userId}`,
      );
      // console.log(response.data || []);
      setTourSpot(response.data.tourspot || []);
      setReviewList(response.data.reviewList || []);
      setLikeState(response.data.like || 0);
      setLoading(false);
      //console.log(response.data.reviewList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const firstStr = tourSpot.summary.split('.');
  var pos = tourSpot.summary.indexOf('.');
  const afterStr = tourSpot.summary.substr(pos + 2);
  const summaryStr = afterStr.split('*');
  // console.log(tourSpot.summary);

  const infoIndex = tourSpot.summary.indexOf('이용안내');
  const info = tourSpot.summary.substr(infoIndex - 1);
  // console.log(info);

  const linkFirstIndex = tourSpot.summary.indexOf('http://');
  const linkLastIndex = tourSpot.summary.indexOf('/', linkFirstIndex + 7);
  const linkTemp = tourSpot.summary.substring(linkFirstIndex, linkLastIndex);

  var area = '';
  switch (tourSpot.areaCode) {
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
      <Header navigation={navigation} type={'BACK'} title={tourSpot.title} />
      <ScrollView style={styles.scrollView}>
        {tourSpot.mainimage === '' ? (
          <Image
            style={styles.image}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/greeney-a996b.appspot.com/o/noImage.png?alt=media&token=5e00b909-c884-4711-a8af-b964c096b8d1&_gl=1*1p0d1lk*_ga*Mjg1MTExMTc3LjE2OTA3OTEyMDg.*_ga_CW55HF8NVT*MTY5NjA2NzU1MC4zLjEuMTY5NjA2NzYwMy43LjAuMA',
            }}
          />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: tourSpot.mainimage,
            }}
          />
        )}
        {/* <Swiper
          autoplay
          showsPagination={true}
          height={300}
          autoplayTimeout={4}>
          <Image
            style={styles.image}
            source={{
              uri: 'http://tong.visitkorea.or.kr/cms/resource/72/2526672_image2_1.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://tong.visitkorea.or.kr/cms/resource/46/2526646_image2_1.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.knps.or.kr/upload/contest/21/20221108082756351.jpg',
            }}
          />
        </Swiper> */}
        <View style={styles.title}>
          <Text style={{fontSize: 30, color: '#000', flex: 1}}>
            {tourSpot.title}
          </Text>
          <LikeHeart
            category={1}
            size={40}
            likeState={likeState}
            setLikeState={setLikeState}
            itemId={tourspotId}
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
            {tourSpot.tourspotStar} / 5
          </Text>
        </View>
        <View style={styles.view2}>
          <Text
            style={[
              styles.text,
              {fontSize: 16, marginBottom: 10, marginTop: 10},
            ]}>
            {firstStr[0] + '.'}
          </Text>
        </View>
        {/* <View style={styles.view2}>
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
                latitude: tourSpot.latitude,
                longitude: tourSpot.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}>
              <Marker
                coordinate={{
                  latitude: tourSpot.latitude,
                  longitude: tourSpot.longitude,
                }}
              />
            </MapView>
          )}
        </View> */}
        <View style={styles.view2}>
          <Text style={styles.extext}>주소</Text>
          <Text style={styles.text}>{tourSpot.addr}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>전화번호</Text>
          <Text style={styles.text}>{tourSpot.tel}</Text>
        </View>
        {linkFirstIndex === -1 ? (
          <View />
        ) : (
          <View style={styles.view2}>
            <Text style={styles.extext}>홈페이지</Text>
            <Text style={styles.text}>{linkTemp + '/'}</Text>
          </View>
        )}
        <Text style={[styles.text, {margin: 20}]}>{summaryStr[0]}</Text>
        <Text style={[styles.text, {margin: 20}]}>{info}</Text>
        {tourSpot.mainimage === '' ? (
          <Image
            style={styles.image2}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/greeney-a996b.appspot.com/o/noImage.png?alt=media&token=5e00b909-c884-4711-a8af-b964c096b8d1&_gl=1*1p0d1lk*_ga*Mjg1MTExMTc3LjE2OTA3OTEyMDg.*_ga_CW55HF8NVT*MTY5NjA2NzU1MC4zLjEuMTY5NjA2NzYwMy43LjAuMA',
            }}
          />
        ) : (
          <Image style={styles.image2} source={{uri: tourSpot.mainimage}} />
        )}
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

        <ReviewPost itemId={tourspotId} reviewData={reviewList} category={1} />

        {/* <View style={styles.view2}>
          <Text style={styles.text}>리뷰(14)</Text>
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
            placeholder="여러분의 소중한 여행 후기를 남겨주세요"
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
        </TouchableOpacity> */}

        {/* <ReviewItem></ReviewItem> */}
        {/* <View style={{flexDirection: 'row'}}>
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
              <Text style={{fontSize: 12, color: '#000'}}>4.7</Text>
              <Text style={{fontSize: 12, marginLeft: 10}}>2023-07-28</Text>
            </View>
          </View>
        </View>
        <Image
          source={{
            uri: 'https://pacer-note-images.pacer.cc/234360796_C22E336D-7AD9-4D0F-A742-B6D5F65B5172_1572620274.jpg',
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
          공기가 맑고 좋습니다.
        </Text> */}
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

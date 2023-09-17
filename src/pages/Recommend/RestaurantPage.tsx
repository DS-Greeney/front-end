import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import SearchBar from '../../components/SearchBar';
import FilterList from '../../components/filter/FilterList';
import Veganspot from '../../components/Recommend/Veganspot';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const areaList = [
  '전체',
  '서울',
  '인천',
  '대전',
  '대구',
  '광주',
  '부산',
  '울산',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '경북',
  '경남',
  '전북',
  '전남',
  '제주',
];

const dummyVeganData = [
  {
    image:
      'https://d12zq4w4guyljn.cloudfront.net/750_750_20220808095252388_photo_4f5c74b01ea8.jpg',
    type: '양식',
    name: '공간녹음',
    location: '서울 강서구 마곡동',
    scope: 5,
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-p/1b/3d/74/6d/getlstd-property-photo.jpg',
    type: '이탈리아 음식',
    name: '마히나 비건 테이블',
    location: '서울 강서구 신사동',
    scope: 4.3,
  },
  {
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMTA5MThfMTc1/MDAxNjMxOTQxOTgyOTUy._Cxioy8tfC-V0TxBsqD3hpfU0zBep10rUATABrgXlA8g.HtLvm3ZcAwLKlMPaGfuvTBAX5qUYhFG9PinlmrZFQSAg.JPEG.dbdnjswls590/IMG_0579.JPG?type=w800',
    type: '양식',
    name: '비건 앤 비욘드',
    location: '서울 서대문구 연희동',
    scope: 4.2,
  },
  {
    image:
      'https://d12zq4w4guyljn.cloudfront.net/750_750_20220808095252388_photo_4f5c74b01ea8.jpg',
    type: '양식',
    name: '셰발레리',
    location: '서울 마포구 합정동',
    scope: 4.0,
  },
  {
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTRfNTQg/MDAxNjc4NzY1ODQwNjY4.CZkmclYBg_G_rMuMc81ZdWeXPPJmPW2t3a6YAnD5Yh0g.xipjo8NNN6Ga-0bBp5eoboogZCuvyCwIw4b4rFkjQukg.JPEG.sarang_11/IMG_5185.JPG?type=w800',
    type: '양식',
    name: '루티드',
    location: '서울 송파구 방희동',
    scope: 3.8,
  },
  {
    image:
      'https://d12zq4w4guyljn.cloudfront.net/750_750_20220808095252388_photo_4f5c74b01ea8.jpg',
    type: '퓨전음식',
    name: '드렁큰비건',
    location: '서울 마포구 창전동',
    scope: 3.5,
  },
];

export default function RestaurantPage() {
  const [veganList, setVeganlist] = useState([]);
  const [lat, setLat] = useState(37.6242392);
  const [log, setLog] = useState(126.9901206);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'http://10.0.2.2:8082/greeney/main/restaurantlist',
        {
          params: {
            latitude: lat,
            longitude: log,
            areaCode: 0,
          },
        },
      );
      console.log(response.data.restaurants || []);
      setVeganlist(response.data.restaurants || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let navigation = useNavigation();

  return (
    <View style={styles.restaurant}>
      <Header navigation={navigation} type={'BACK'} title={'비건 식당'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
      <FilterList areaList={areaList} />

      <View style={styles.container}>
        <View style={styles.line} />
        <FlatList
          style={styles.veganlist}
          numColumns={2}
          data={veganList}
          renderItem={({item}) => (
            <Veganspot data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    height: '77%',
    marginHorizontal: 30,
    // alignItems: 'center',
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
  },
  veganlist: {},
});

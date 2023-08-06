import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import SearchBar from '../../components/SearchBar';
import Tourspot from '../../components/Recommend/Tourspot';
import FilterList from '../../components/filter/FilterList';
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

const dummySpotData = [
  {
    image:
      'https://wetravel.cafe24.com/data/editor/1808/20180806103020_c4835f6ce5c51f178656a5ecd3471d53_wk96.png',
    name: '우도 (해양도립공원)',
    location: '제주 제주시 우도면',
    descript: '탁 트인 파안 바다, 화려한 산호와 석양으로 유명한 섬',
    tags: ['석양이아름다운', '평화', '자전거여행', '여유로운'],
  },
  {
    image:
      'https://i.namu.wiki/i/V50hz_6d7AquvXtH3TY0L6mjHZwVW2fbIHNZaNlciSwGn_vhb_Y6mouS2L50Q4CH6erkeg6Zl0w7p1DxpMulrg.webp',
    name: '세종 호수공원',
    location: '세종특별자치시 연기면',
    descript:
      '여행에 대한 한줄소개 여행에 대한 한줄소개 여행에 대한 한줄소개 여행에 대한 한줄소개',
    tags: ['도심속자연', '휴식', '자전거', '여유로운', '연인과'],
  },
  {
    image:
      'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/EXBTT7OQAEDDA4NQNX6PQRZSTE.jpg',
    name: '화담숲',
    location: '경기도 광주시 도척면',
    descript:
      '여행에 대한 한줄소개 여행에 대한 한줄소개 여행에 대한 한줄소개 여행에 대한 한줄소개',
    tags: [
      '생태수목원',
      '평화',
      '숲',
      '자연',
      '여유로운',
      '숲',
      '에코',
      '단풍',
      '가족과',
    ],
  },
];

export default function TourspotPage() {
  const [tourList, setTourlist] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8082/tourspot/api', {
        params: {
          latitude: '37.6242392',
          longitude: '126.9901206',
        },
      });
      console.log(response.data.response.body.items.item || []);
      setTourlist(response.data.response.body.items.item || []); // 서버로부터 받아온 데이터를 상태에 저장합니다.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let navigation = useNavigation();

  return (
    <View style={styles.tourspot}>
      <Header navigation={navigation} type={'BACK'} title={'생태 관광'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
      <FilterList areaList={areaList} />

      <View style={styles.spotlist}>
        <FlatList
          data={tourList}
          renderItem={({item}) => (
            <Tourspot data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tourspot: {
    backgroundColor: '#fff',
    flex: 1,
  },
  // filtercontainer: {
  //   marginHorizontal: 25,
  // },
  spotlist: {
    height: '77%',
  },
});

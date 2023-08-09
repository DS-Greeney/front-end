import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import FilterList from '../../components/filter/FilterList';
import GreenHotel from '../../components/Recommend/GreenHotel';

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

const hotelList = [
  {
    image:
      'https://ak-d.tripcdn.com/images/0221812000aqlwnfcB0D4_R_960_660_R5_D.jpg',
    title: '웨스틴 조선 부산',
    addr: '부산 해운대구',
    summary:
      '웨스틴 조선 부산에 오신 것을 환영합니다! 여러분의 "제 2의 집"인 부산 호텔에서는 여러분의 시간이 집처럼 편안하도록 다양한 부대시설을 제공합니다.',
  },
  {
    image:
      'https://www.hotelscombined.co.kr/rimg/himg/fb/f3/7d/revato-2163767-37996784-516959.jpg?width=1366&height=768&crop=true',
    title: '오크우드 프리미어 인천',
    addr: '인천 연수구',
    summary:
      '세계적으로 가장 신뢰 받는 서비스 레지던스 제공업체 오크우드 월드와이드의 일원인 오크우드 프리미어 인천은 인천자유경제구역 송도 국제업무단지에 위치해 있습니다.',
  },
  {
    image:
      'https://www.lottehotel.com/content/dam/lotte-hotel/global/common/company/seoul-hotel.jpg',
    title: '롯데호텔 서울',
    addr: '서울 중구',
    summary:
      '대한민국 서울의 중심에 위치하는 한국 최고의 럭셔리 비즈니스 호텔인 롯데호텔서울은 고객 한 분 한 분의 높은 취향을 만족시킬 수 있도록 품격과 감각을 높였습니다.',
  },
  {
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/426605890.jpg?k=6015694fe12b4d251b9928a72a0e538243cfabdf962e03ddce2d7e042990cef2&o=&hp=1',
    title: 'JW 메리어트 호텔 서울',
    addr: '서울 서초구',
    summary:
      'JW 메리어트 서울은 다양한 쇼핑과 문화, 교통의 중심지인 강남 반포 센트럴시티에 위치하며 펜트하우스 2개와 스위트룸 32개를 포함한 총 379개의 객실로 이루어져 있습니다.',
  },
];

export default function GreenHotelPage() {
  let navigation = useNavigation();

  return (
    <View style={styles.greenhotel}>
      <Header navigation={navigation} type={'BACK'} title={'친환경 호텔'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
      <FilterList areaList={areaList} />

      <View style={styles.hotellist}>
        <FlatList
          data={hotelList}
          renderItem={({item}) => (
            <GreenHotel data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenhotel: {
    backgroundColor: '#fff',
    flex: 1,
  },
  hotellist: {
    height: '77%',
  },
});

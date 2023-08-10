import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import FilterList from '../../components/filter/FilterList';
import TourProduct from '../../components/Recommend/TourProduct';

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

const productList = [
  {
    image:
      'https://cdn.imweb.me/upload/S20210419c448679c5b147/e6032dd9d3489.jpg',
    title: '청정 제주의 제철 과일로 청 만들기',
    price: '30,000원',
    summary:
      '계절별로 사용되는 과일이 달라지며, 제주의 과일을 듬뿍 담은 과일청을 만드는 제주여행입니다.',
    heart: '5',
  },
  {
    image: 'https://cdn.imweb.me/thumbnail/20230714/32684e49b2995.jpg',
    title: '그림 명상과 요가 비건 카페타임',
    price: '50,000원',
    summary:
      '세계적으로 가장 신뢰 받는 서비스 레지던스 제공업체 오크우드 월드와이드의 일원인 오크우드 프리미어 인천은 인천자유경제구역 송도 국제업무단지에 위치해 있습니다.',
    heart: '3',
  },
  {
    image:
      'https://instablank.com/data/item/202111/30000000595651_default_1.jpg',
    title: '댕댕투어패스',
    price: '12,500원',
    summary: '반려견 동반 제주여행 시간제 자유이용권 상품입니다.',
    heart: '2',
  },
];

export default function TourProductPage() {
  let navigation = useNavigation();

  return (
    <View style={styles.tourproduct}>
      <Header navigation={navigation} type={'BACK'} title={'여행 상품 정보'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
      <FilterList areaList={areaList} />

      <View style={styles.productlist}>
        <FlatList
          data={productList}
          renderItem={({item}) => (
            <TourProduct data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tourproduct: {
    backgroundColor: '#fff',
    flex: 1,
  },
  productlist: {
    height: '77%',
  },
});

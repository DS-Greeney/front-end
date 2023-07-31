import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import SearchBar from '../../components/SearchBar';
import FilterList from '../../components/filter/FilterList';
import {useNavigation} from '@react-navigation/native';

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

export default function TourspotPage() {
  let navigation = useNavigation();

  return (
    <View style={styles.restaurant}>
      <Header navigation={navigation} type={'BACK'} title={'비건 식당'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
      <FilterList areaList={areaList} />

      <View style={styles.container}>
        <View style={styles.line} />
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
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
  },
});

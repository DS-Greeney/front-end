import React from 'react';
import Header from '../components/Common/Header';
import FilterList from '../components/filter/FilterList';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const typeList = ['전체', '관광', '식당', '숙소', '여행코스'];

export default function LikeListPage() {
  let navigation = useNavigation();

  return (
    <View style={styles.likelist}>
      <Header navigation={navigation} type={'BACK'} title={'내가 찜한 목록'} />
      <FilterList areaList={typeList} />
    </View>
  );
}

const styles = StyleSheet.create({
  likelist: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

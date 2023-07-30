import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Common/Header';
import SearchBar from '../../components/SearchBar';
import {useNavigation} from '@react-navigation/native';

export default function TourspotPage() {
  let navigation = useNavigation();

  return (
    <View style={styles.tourspot}>
      <Header navigation={navigation} type={'BACK'} title={'생태 관광'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
    </View>
  );
}

const styles = StyleSheet.create({
  tourspot: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

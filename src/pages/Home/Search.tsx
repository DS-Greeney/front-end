import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import SearchBar from '../../components/SearchBar';
import SearchTopKeyword from '../../components/SearchTopKeyword';
import {useNavigation} from '@react-navigation/native';

const dummySpotData = [
  {
    num: 1,
    keyword: '친환경 관광지',
  },
  {
    num: 2,
    keyword: '제주도',
  },
  {
    num: 3,
    keyword: '2023 부산 ESG 축제',
  },
  {
    num: 4,
    keyword: '서울 비건 식당',
  },
  {
    num: 5,
    keyword: '친환경 공방',
  },
  {
    num: 6,
    keyword: '서울 친환경 호텔 추천',
  },
  {
    num: 7,
    keyword: '친환경 축제',
  },
  {
    num: 8,
    keyword: '경주',
  },
  {
    num: 9,
    keyword: '천문대',
  },
  {
    num: 10,
    keyword: '강원도 여행 추천 코스',
  },
];

export default function Search() {
  let navigation = useNavigation();
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.headtitle}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/home/logo.png')}
          />
        </View>
        <SearchBar placeholderText={'어디로 여행을 떠날 예정이신가요?'} />
      </View>
      <View style={styles.box}>
        <TouchableOpacity disabled={true}>
          <Text style={styles.titleText}>인기 검색어 TOP 10</Text>
        </TouchableOpacity>
        <FlatList
          data={dummySpotData}
          renderItem={({item}) => (
            <SearchTopKeyword data={item} navigation={navigation}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  headtitle: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    width: 161,
    height: 43,
  },
  titleText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 10,
    marginTop: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 30,
  },
});

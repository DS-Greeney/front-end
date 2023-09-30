import React, { useContext, useState } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, FlatList, Alert} from 'react-native';
import SearchBar from '../../components/SearchBar';
import SearchTopKeyword from '../../components/SearchTopKeyword';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Config from 'react-native-config';
import { AppContext } from '../../components/Common/Context';
import Searchspot from '../../components/Recommend/Searchspot';

const dummySpotData = [
  {
    num: 1,
    keyword: '서울 호텔',
  },
  {
    num: 2,
    keyword: '제주도',
  },
  {
    num: 3,
    keyword: '부산',
  },
  {
    num: 4,
    keyword: '서울 한식뷔페',
  },
  {
    num: 5,
    keyword: '우도',
  },
  {
    num: 6,
    keyword: '경기 카페',
  },
  {
    num: 7,
    keyword: '북한산국립공원',
  },
  {
    num: 8,
    keyword: '경주',
  },
  {
    num: 9,
    keyword: '강원 호텔',
  },
  {
    num: 10,
    keyword: '강원도',
  },
];

export default function Search() {
  let navigation = useNavigation();
  const {location} = useContext(AppContext);
  const {userId} = useContext(AppContext);

  const [searchText, setSearchText] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [spotList, setSpotlist] = useState([]);

  const handleSearch = async () => {
    if (searchText !== '') {
      try {
        const response = await axios.get(
          `${Config.API_URL}/greeney/main/search?search=${searchText}&categoryNumber=0&latitude=${location.latitude}&longitude=${location.latitude}&userId=${userId}`,
        );
        // console.log(response.data.spots || []);
        if (response.data.success === false) {
          Alert.alert('일시적 오류', '메시지 전송에 실패하였습니다.');
        } else {
          setSpotlist(response.data.spots || []);
          setShowSearchResults(true);
        }
      } catch (error) {
        Alert.alert('일시적 오류', '메시지 전송에 실패하였습니다.');
        console.error('Error fetching data:', error);
      }
    } else {
      Alert.alert('공백 감지', '검색어를 입력해주세요!');
    }
  };

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.headtitle}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/home/logo.png')}
          />
        </View>
        <SearchBar
          placeholderText={'어디로 여행을 떠날 예정이신가요?'}
          searchText={searchText}
          onSearch={setSearchText}
          onSearchButtonPress={handleSearch}
        />
      </View>
      {showSearchResults ? (
        <View style={styles.spotlist}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            disableVirtualization={false}
            initialNumToRender={4}
            data={spotList}
            renderItem={({item}) => (
              <Searchspot data={item} navigation={navigation} />
            )}
          />
        </View>
      ) : (
        <View style={styles.box}>
          <TouchableOpacity disabled={true}>
            <Text style={styles.titleText}>추천 검색어</Text>
          </TouchableOpacity>
          <FlatList
            data={dummySpotData}
            renderItem={({item}) => (
              <SearchTopKeyword data={item} navigation={navigation} />
            )}
          />
        </View>
      )}
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
  spotlist: {
    height: '77%',
  },
});

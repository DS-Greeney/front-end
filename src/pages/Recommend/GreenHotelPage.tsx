import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {AppContext} from '../../components/Common/Context';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import FilterList from '../../components/filter/FilterList';
import GreenHotel from '../../components/Recommend/GreenHotel';
import axios from 'axios';
import Config from 'react-native-config';

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

export default function GreenHotelPage() {
  let navigation = useNavigation();
  const [hotelList, setHotelList] = useState([]);
  const {location} = useContext(AppContext);
  const [selectedAreaCode, setSelectedAreaCode] = useState(0);

  const areaCodeMap = {
    전체: 0,
    서울: 1,
    인천: 2,
    대전: 3,
    대구: 4,
    광주: 5,
    부산: 6,
    울산: 7,
    세종: 8,
    경기: 31,
    강원: 32,
    충북: 33,
    충남: 34,
    경북: 35,
    경남: 36,
    전북: 37,
    전남: 38,
    제주: 39,
  };

  useEffect(() => {
    getData(selectedAreaCode);
  }, [selectedAreaCode]);

  const getData = async (areaCode: any) => {
    // console.log(location.latitude, location.longitude);
    try {
      const response = await axios.get(
        `${Config.API_URL}/greeney/main/hotellist`,
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            areaCode: areaCode,
          },
        },
      );
      //console.log(response.data || []);
      setHotelList(response.data.hotels || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAreaChange = (areaCode: string) => {
    setSelectedAreaCode(areaCodeMap[areaCode] || 0);
    console.log('areacode: ', areaCode);
    console.log('areaCodeMap[areaCode]: ', areaCodeMap[areaCode]);
  };

  const [searchText, setSearchText] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchList, setSearchlist] = useState([]);

  const handleSearch = async () => {
    if (searchText !== '') {
      try {
        const response = await axios.get(
          `${Config.API_URL}/greeney/main/hotellist/1?latitude=${location.latitude}&longitude=${location.latitude}&search=${searchText}`,
        );
        // console.log(response.data.hotellists || []);
        if (response.data.success === false) {
          Alert.alert('일시적 오류', '검색에 실패하였습니다.');
        } else {
          setSearchlist(response.data.hotellists || []);
          setShowSearchResults(true);
        }
      } catch (error) {
        Alert.alert('일시적 오류', '검색에 실패하였습니다.');
        console.error('Error fetching data:', error);
      }
    } else {
      Alert.alert('공백 감지', '검색어를 입력해주세요!');
    }
  };

  return (
    <View style={styles.greenhotel}>
      <Header navigation={navigation} type={'BACK'} title={'친환경 호텔'} />
      <SearchBar
        placeholderText={'검색어를 입력해주세요'}
        searchText={searchText}
        onSearch={setSearchText}
        onSearchButtonPress={handleSearch}
      />
      <FilterList areaList={areaList} func={handleAreaChange} />

      {showSearchResults ? (
        <View style={styles.hotellist}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            disableVirtualization={false}
            initialNumToRender={4}
            data={searchList}
            renderItem={({item}) => (
              <GreenHotel data={item} navigation={navigation} />
            )}
          />
        </View>
      ) : (
        <View style={styles.hotellist}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            disableVirtualization={false}
            initialNumToRender={4}
            data={hotelList}
            renderItem={({item}) => (
              <GreenHotel data={item} navigation={navigation} />
            )}
          />
        </View>
      )}
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

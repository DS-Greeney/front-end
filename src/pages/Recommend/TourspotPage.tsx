import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Alert} from 'react-native';
import {AppContext} from '../../components/Common/Context';
import Header from '../../components/Common/Header';
import SearchBar from '../../components/SearchBar';
import Tourspot from '../../components/Recommend/Tourspot';
import FilterList from '../../components/filter/FilterList';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import qs from 'qs';
import Config from 'react-native-config';

const areaList = [
  '전체',
  '서울',
  '인천',
  '대전',
  '대구',
  '부산',
  '울산',
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
  const [tourList, setTourlist] = useState([]);
  const {location} = useContext(AppContext);
  const [selectedAreaCode, setSelectedAreaCode] = useState(0);

  const areaCodeMap = {
    전체: 0,
    서울: 1,
    인천: 2,
    대전: 3,
    대구: 4,
    부산: 6,
    울산: 7,
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
        `${Config.API_URL}/greeney/main/tourlist`,
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            areaCode: areaCode,
          },
        },
      );
      //console.log(response.data || []);
      setTourlist(response.data.tourlists || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let navigation = useNavigation();

  const handleAreaChange = (areaCode: string) => {
    setSelectedAreaCode(areaCodeMap[areaCode] || 0);
    // console.log('areacode: ', areaCode);
    //console.log('areaCodeMap[areaCode]: ', areaCodeMap[areaCode]);
  };

  const [searchText, setSearchText] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchList, setSearchlist] = useState([]);

  const handleSearch = async () => {
    if (searchText !== '') {
      try {
        const response = await axios.get(
          `${Config.API_URL}/greeney/main/tourlist/1?latitude=${location.latitude}&longitude=${location.latitude}&search=${searchText}`,
        );
        // console.log(response.data.tourlists || []);
        if (response.data.success === false) {
          Alert.alert('일시적 오류', '검색에 실패하였습니다.');
        } else {
          setSearchlist(response.data.tourlists || []);
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
    <View style={styles.tourspot}>
      <Header navigation={navigation} type={'BACK'} title={'생태 관광'} />
      <SearchBar
        placeholderText={'검색어를 입력해주세요'}
        searchText={searchText}
        onSearch={setSearchText}
        onSearchButtonPress={handleSearch}
      />
      <FilterList areaList={areaList} func={handleAreaChange} />

      {showSearchResults ? (
        <View style={styles.spotlist}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            disableVirtualization={false}
            initialNumToRender={4}
            data={searchList}
            renderItem={({item}) => (
              <Tourspot data={item} navigation={navigation} />
            )}
          />
        </View>
      ) : (
        <View style={styles.spotlist}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            disableVirtualization={false}
            initialNumToRender={4}
            data={tourList}
            renderItem={({item}) => (
              <Tourspot data={item} navigation={navigation} />
            )}
          />
        </View>
      )}
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

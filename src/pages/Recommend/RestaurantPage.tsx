import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import SearchBar from '../../components/SearchBar';
import FilterList from '../../components/filter/FilterList';
import Veganspot from '../../components/Recommend/Veganspot';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';

const areaList = [
  '전체',
  '서울',
  '인천',
  '대구',
  '광주',
  '부산',
  '울산',
  '경기',
  '충북',
  '경북',
  '경남',
  '전북',
  '전남',
  '제주',
];

export default function RestaurantPage() {
  const [veganList, setVeganlist] = useState([]);
  // const [lat, setLat] = useState(37.6242392);
  // const [log, setLog] = useState(126.9901206);

  const {location} = useContext(AppContext);
  const [selectedAreaCode, setSelectedAreaCode] = useState(0);

  const areaCodeMap = {
    전체: 0,
    서울: 1,
    인천: 2,
    대구: 4,
    광주: 5,
    부산: 6,
    울산: 7,
    경기: 31,
    충북: 33,
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
    try {
      const response = await axios.get(
        'http://10.0.2.2:8082/greeney/main/restaurantlist',
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            areaCode: areaCode,
          },
        },
      );
      //console.log(response.data.restaurants || []);
      setVeganlist(response.data.restaurants || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let navigation = useNavigation();

  const handleAreaChange = (areaCode: string) => {
    setSelectedAreaCode(areaCodeMap[areaCode] || 0);
    console.log('areacode: ', areaCode);
    console.log('areaCodeMap[areaCode]: ', areaCodeMap[areaCode]);
  };

  return (
    <View style={styles.restaurant}>
      <Header navigation={navigation} type={'BACK'} title={'비건 식당'} />
      <SearchBar placeholderText={'검색어를 입력해주세요'} />
      <FilterList areaList={areaList} func={handleAreaChange} />

      <View style={styles.container}>
        <View style={styles.line} />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          disableVirtualization={false}
          initialNumToRender={6}
          style={styles.veganlist}
          numColumns={2}
          data={veganList}
          renderItem={({item}) => (
            <Veganspot data={item} navigation={navigation} />
          )}
        />
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
    // alignItems: 'center',
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
  },
  veganlist: {},
});

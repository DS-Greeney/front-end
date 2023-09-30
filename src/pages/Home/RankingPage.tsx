import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Common/Header';
import TypeFilterList from '../../components/filter/TypeFilterList';
import TourspotRank from '../../components/Ranking/TourspotRank';

export default function RankingPage() {
  let navigation = useNavigation();
  const [selectedTypeName, setSelectedTypeName] = useState('tourlist');
  const [placeList, setPlacelist] = useState([]);
  const typeList = ['관광', '식당', '숙소'];
  const typeMap = {
    관광: 'tourlist',
    식당: 'restaurantlist',
    숙소: 'hotellist',
  };

  const handleTypeChange = (typeText: string) => {
    setSelectedTypeName(typeMap[typeText] || 'tourlist');
  };

  useEffect(() => {
    getData(selectedTypeName);
  }, [selectedTypeName]);

  const getData = async (typeName: any) => {
    // console.log(location.latitude, location.longitude);
    console.log(typeName);
    try {
      const response = await axios.get(
        `http://10.0.2.2:8082/greeney/main/${typeName}/star`,
      );
      //console.log(response.data || []);
      if (typeName === 'tourlist') {
        setPlacelist(response.data.tourlist || []);
      } else if (typeName === 'restaurantlist') {
        setPlacelist(response.data.restaurantlist || []);
      } else if (typeName === 'hotellist') {
        setPlacelist(response.data.hotellist || []);
      }
      console.log('placeList', response.data.tourlist[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} type={'BACK'} title={'인기 관광지'} />
      <TypeFilterList typeList={typeList} func={handleTypeChange} />
      <View style={styles.placelist}>
        {selectedTypeName === 'tourlist' && (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            disableVirtualization={false}
            initialNumToRender={4}
            data={placeList}
            renderItem={({item, index}) => (
              <TourspotRank data={item} navigation={navigation} index={index} />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  placelist: {
    flex: 1,
  },
});

import React, {useContext, useState, useEffect} from 'react';
import Header from '../components/Common/Header';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AppContext} from '../components/Common/Context';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface dataType {
  spotCmntContent: string;
  spotCmntId: number;
  spotCmntTime: string;
  categoryNumber: number;
  spotId: number;
  spotCmntImg: string[];
  spotCmntStar: number;
}

export default function WrittenReviewPage() {
  let navigation = useNavigation();
  const {userId} = useContext(AppContext);
  const [reviewList, setReviewList] = useState<dataType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // console.log(location.latitude, location.longitude);
    try {
      const response = await axios.get(
        `${Config.API_URL}/greeney/mypage/myReviewList/${userId}`,
      );
      //console.log(response.data || []);
      setReviewList(response.data.myReviewList || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const goDetail = async (category, id) => {
    if (category === 1) {
      navigation.navigate('TourspotDetail', id);
    } else if (category === 2) {
      navigation.navigate('RestaurantDetail', id);
    } else if (category === 3) {
      navigation.navigate('GreenHotelDetail', id);
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} type={'BACK'} title={'내가 쓴 후기'} />
      {reviewList.length >= 1 && (
        <ScrollView>
          {reviewList.map((review, index) => (
            <TouchableOpacity
              key={index}
              style={styles.wrapper}
              onPress={() => goDetail(review.categoryNumber, review.spotId)}>
              <View style={styles.item}>
                <Icon name="star-rate" size={16} color="#FCE25F" />
                <Text style={{fontSize: 12, color: '#000'}}>
                  {review.spotCmntStar}
                </Text>
                <Text style={{fontSize: 12, marginLeft: 10}}>
                  {review.spotCmntTime}
                </Text>
              </View>
              <Text style={{fontSize: 15, color: '#000', marginVertical: 5}}>
                {review.spotCmntContent}
              </Text>
              {review.spotCmntImg.length > 0 && (
                <View style={styles.imgwrapper}>
                  {review.spotCmntImg.map((imageUrl, idx) => (
                    <Image
                      key={idx}
                      source={{uri: imageUrl}}
                      style={styles.image}
                    />
                  ))}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'contain',
  },
  wrapper: {
    backgroundColor: 'rgba(0, 95, 41, 0.13)',
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 30,
  },
  item: {
    flexDirection: 'row',
  },
  imgwrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

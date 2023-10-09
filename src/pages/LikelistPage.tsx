import React, {useEffect, useState, useContext} from 'react';
import Header from '../components/Common/Header';
import Likelist from '../components/Like/Likelist';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AppContext} from '../components/Common/Context';
import Config from 'react-native-config';

export default function LikeListPage() {
  let navigation = useNavigation();
  const {userId} = useContext(AppContext);

  interface SpotLikeTour {
    addr: string;
    areaCode: number;
    latitude: number;
    longitude: number;
    mainimage: string;
    sigunguCode: number;
    summary: string;
    tel: string;
    title: string;
    tourspotId: number;
    tourspotStar: number;
  }

  interface SpotLikeRstrnt {
    areaCode: number;
    rstrntAddr: string;
    rstrntCtgry: string;
    rstrntId: number;
    rstrntLa: string;
    rstrntLo: string;
    rstrntMenuinfo: string;
    rstrntName: string;
    rstrntStar: number;
    rstrntTel: string;
  }

  type SpotLike = SpotLikeTour | SpotLikeRstrnt;

  interface LikeItem {
    categoryNumber: number;
    spotLike: SpotLike;
    spotLikeId: number;
  }

  const [likeList, setLikeList] = useState<LikeItem[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/greeney/mypage/like/${userId}`,
      );
      console.log(response.data.spotLikeList || []);
      setLikeList([...likeList, response.data.spotLikeList]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(likeList);

  return (
    <View style={styles.likelist}>
      <Header navigation={navigation} type={'BACK'} title={'내가 찜한 목록'} />
      <SafeAreaView style={{flex: 1}}>
        <View>
          <FlatList
            data={likeList}
            renderItem={({item}) => (
              <Likelist data={item} navigation={navigation} userId={userId} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  likelist: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

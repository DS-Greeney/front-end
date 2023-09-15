import React, {useEffect, useState} from 'react';
import Header from '../components/Common/Header';
import FilterList from '../components/filter/FilterList';
import Likelist from '../components/Like/Likelist';
import {StyleSheet, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const typeList = ['전체', '관광', '식당', '숙소', '여행코스'];

const dummySpotData = [
  {
    image:
      'https://wetravel.cafe24.com/data/editor/1808/20180806103020_c4835f6ce5c51f178656a5ecd3471d53_wk96.png',
    name: '우도 (해양도립공원)',
    location: '제주 제주시 우도면',
    tags: ['석양이아름다운', '평화', '자전거여행', '여유로운'],
    type: '관광',
  },
  {
    image:
      'https://i.namu.wiki/i/V50hz_6d7AquvXtH3TY0L6mjHZwVW2fbIHNZaNlciSwGn_vhb_Y6mouS2L50Q4CH6erkeg6Zl0w7p1DxpMulrg.webp',
    name: '세종 호수공원',
    location: '세종특별자치시 연기면',
    tags: ['도심속자연', '휴식', '자전거', '여유로운', '연인과'],
    type: '관광',
  },
  {
    image:
      'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/EXBTT7OQAEDDA4NQNX6PQRZSTE.jpg',
    name: '화담숲',
    location: '경기도 광주시 도척면',
    tags: [
      '생태수목원',
      '평화',
      '숲',
      '자연',
      '여유로운',
      '숲',
      '에코',
      '단풍',
      '가족과',
    ],
    type: '관광',
  },
  {
    image:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230724_20%2F1690160821121ohWIm_JPEG%2FIMG_0996.jpeg',
    name: '바이두부',
    location: '서울 용산구 소월로20길 10',
    type: '식당',
  },
  {
    image:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230504_283%2F1683190831894in3WR_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png',
    name: '웨스턴 조선 부산',
    location: '부산 해운대구 동백로 67',
    type: '숙소',
  },
  {
    image:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220927_113%2F1664252532447EOyPt_JPEG%2FEA2ABDE6-BD6A-4691-B8E8-92C90BB0EB5B.jpeg',
    name: '공간녹음',
    location: '서울 강서구 공항대로 227 403호 마곡센트럴타워 1차',
    type: '식당',
  },
  {
    image:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210127_264%2F1611714129836Y6FaW_JPEG%2F%25C0%25A5%25BF%25EB%25B5%25F0%25B7%25B0%25BD%25BA_%25C6%25D0%25B9%25D0%25B8%25AE%25C6%25AE%25C0%25A9_%25BF%25C0%25BC%25C7%25C7%25C1%25B7%25D0%25C6%25AE%25BA%25E4_2.jpg',
    name: '벤티모 호텔 앤 레지던 제주',
    location: '제주 제주시 연삼로 14',
    type: '숙소',
  },
];

export default function LikeListPage() {
  let navigation = useNavigation();
  const [likeList, setLikeList] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(
        'http://10.0.2.2:8082/greeney/mypage/like/1',
      );
      console.log(response.data || []);
      // setLikeList(response.data.spotLikeList || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.likelist}>
      <Header navigation={navigation} type={'BACK'} title={'내가 찜한 목록'} />
      <FilterList areaList={typeList} />
      <View style={styles.listwrap}>
        <FlatList
          data={dummySpotData}
          renderItem={({item}) => (
            <Likelist data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likelist: {
    backgroundColor: '#fff',
    flex: 1,
  },
  listwrap: {
    height: '84%',
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LikeHeart from '../../components/Like/LikeHeart';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';

// import ReviewItem from '../../components/Recommend/ReviewItem';

export default function TourspotDetail() {
  let [inputCount, setInputCount] = useState(0);
  let navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'북한산국립공원'} />
      <ScrollView style={styles.scrollView}>
        <Swiper
          autoplay
          showsPagination={true}
          height={300}
          autoplayTimeout={4}>
          <Image
            style={styles.image}
            source={{
              uri: 'http://tong.visitkorea.or.kr/cms/resource/72/2526672_image2_1.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://tong.visitkorea.or.kr/cms/resource/46/2526646_image2_1.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.knps.or.kr/upload/contest/21/20221108082756351.jpg',
            }}
          />
        </Swiper>
        <View style={styles.title}>
          <Text style={{fontSize: 30, color: '#000'}}>북한산국립공원</Text>
          <LikeHeart />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#666',
            marginLeft: 20,
            marginTop: 5,
            marginBottom: 5,
          }}>
          서울특별시 성북구
        </Text>
        <View style={styles.view2}>
          <Icon
            name="star-rate"
            size={28}
            color="#FCE25F"
            style={{marginRight: 5}}
          />
          <Text style={{fontSize: 20, color: '#000'}}> 4.7 / 5</Text>
        </View>
        <View style={styles.view2}>
          <Text
            style={[
              styles.text,
              {fontSize: 16, marginBottom: 10, marginTop: 10},
            ]}>
            단위 면적당 가장 많은 탐방객이 찾는 국립공원으로 세계기네스북에
            기록되기도 했던 북한산국립공원은 세계적으로도 드문 도심 속
            자연공원이다.
          </Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            disabled={true}
            style={{
              height: 130,
              // width: '100%',
              // backgroundColor: '#ccc',
              overflow: 'hidden',
            }}></TouchableOpacity>
          <Image
            style={styles.loadview}
            source={require('../../assets/images/restaurant/dummy_view.jpg')}
          />
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>주소</Text>
          <Text style={styles.text}>서울특별시 성북구 보국문로 262</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>전화번호</Text>
          <Text style={styles.text}>02-909-0497</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>홈페이지</Text>
          <Text style={styles.text}>http://bukhan.knps.or.kr</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>주차</Text>
          <Text style={styles.text}>
            경형 2,000원, 중소형 4,000~5,000원, 대형 6,000~7,500원
          </Text>
        </View>
        <View style={{margin: 20}}>
          <Text style={styles.text}>
            단위 면적당 가장 많은 탐방객이 찾는 국립공원으로 세계기네스북에
            기록되기도 했던 북한산국립공원은 세계적으로도 드문 도심 속
            자연공원이다. 서울특별시 도봉구·강북구·종로구·은평구와 경기도
            고양시·양주시·의정부시에 걸쳐 있으며, 우이령을 중심으로 남쪽은
            북한산, 북쪽은 도봉산이다. 최고봉인 백운대(836m)를 중심으로 북쪽에
            인수봉, 남쪽에 만경대가 있어 삼각산으로도 불린다. 지질은 화강암으로
            오랜 기간 침식돼 암석이 지표에 노출되었다. 평균고도가 600~800m로
            높이에 비해 산세가 험준하고 경사가 심하다. 암벽과 암봉 등이 주축을
            이루고 있으며 주요 암봉 사이로 수십 개의 맑고 깨끗한 계곡이 울창한
            산림을 형성해 1,300여 종의 동식물이 서식한다. 최고봉인
            백운대(836m)를 중심으로 북쪽에 인수봉, 남쪽에 만경대가 있어
            삼각산으로도 불린다. 지질은 화강암인데 오랜 기간 침식돼 암석이
            지표에 노출되었다. 평균고도가 600~800m이나 높이에 비해 산세가
            험준하고 경사가 심하다. 암벽과 암봉 등이 주축을 이루고 있으며 주요
            암봉 사이로 수십 개의 맑고 깨끗한 계곡이 울창한 산림을 형성해
            1,300여 종의 동식물이 서식한다. 북한산은 북한산성 등이 있어 생태
            학습장은 물론 역사 탐방 장소로도 인기가 높다. 탐방코스는 북한산성
            코스, 대남문코스, 우이암코스, 신선대코스, 백운대코스 등 13개 코스가
            있다. 이 중 북한산성 코스는 우이암코스, 백운대코스와 함께 가장 잘
            알려진 코스 가운데 하나로, 조선 숙종 때 쌓은 길이 약 8㎞의
            북한산성을 비롯해 다양한 문화 유적이 있어 생태역사탐방 코스로 좋다.
            우이암코스는 누구나 쉽게 오를 수 있는 코스로 봄꽃이 많아 봄철 산행에
            알맞다. 백운대 코스는 백운대에 올라 자연의 웅장한 모습을 감상하기
            좋다.
          </Text>
          <Text style={styles.text}>
            * 지정현황 : 북한산성(사적), 북한산진흥왕순수비지(사적) 등
          </Text>
          <Text style={styles.text}>◎ 이용안내</Text>
          <Text style={styles.text}>- 이용요금 : 없음</Text>
          <Text style={styles.text}>- 화장실 : 있음</Text>
        </View>
        <Image
          style={styles.image2}
          source={{
            uri: 'https://www.knps.or.kr/upload/contest/21/20221108082032573.jpg',
          }}
        />
        <View style={styles.view2}>
          <TouchableOpacity
            disabled={true}
            style={{
              height: 2,
              width: '100%',
              backgroundColor: '#ccc',
              marginBottom: 20,
              marginTop: 20,
            }}></TouchableOpacity>
          {/* <Image source={require('')} /> */}
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>리뷰(14)</Text>
        </View>
        <TouchableOpacity disabled={true} style={styles.textInput}>
          <TextInput
            onChangeText={event => {
              setInputCount(event.length); //replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").
            }}
            textAlignVertical="top"
            multiline
            editable
            numberOfLines={4}
            maxLength={200}
            style={{height: 90}}
            placeholder="여러분의 소중한 여행 후기를 남겨주세요"
            placeholderTextColor="#666"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>{inputCount}/200자</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="star-rate"
                size={22}
                color="#ccc"
                style={{marginRight: 5}}
              />
              <Text style={{marginRight: 5, color: '#aaa', fontSize: 14}}>
                0 / 5
              </Text>
              <Icon
                name="camera-alt"
                size={22}
                color="#000"
                style={{marginRight: 5}}
              />
              <Icon
                name="send"
                size={22}
                color="#000"
                style={{marginRight: 5}}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* <ReviewItem></ReviewItem> */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            disabled={true}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              width: 45,
              marginLeft: 20,
              marginRight: 10,
              backgroundColor: '#ccc',
              borderRadius: 50,
              overflow: 'hidden',
            }}>
            <Image
              style={styles.userImg}
              source={require('../../assets/images/home/dummy_user.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 15, color: '#000'}}>수민</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star-rate" size={16} color="#FCE25F" />
              <Text style={{fontSize: 12, color: '#000'}}>4.7</Text>
              <Text style={{fontSize: 12, marginLeft: 10}}>2023-07-28</Text>
            </View>
          </View>
        </View>
        <Image
          source={{
            uri: 'https://pacer-note-images.pacer.cc/234360796_C22E336D-7AD9-4D0F-A742-B6D5F65B5172_1572620274.jpg',
          }}
          style={styles.image3}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            marginHorizontal: 40,
            marginBottom: 40,
          }}>
          공기가 맑고 좋습니다.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollView: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image2: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
  },
  image3: {
    width: 310,
    height: 150,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 40,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  view2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: '#000',
    fontSize: 14,
    flex: 1,
  },
  extext: {
    color: '#666',
    fontSize: 14,
    width: 70,
  },
  textInput: {
    width: 350,
    height: 120,
    fontSize: 15,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#1A6F3F',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 30,
    paddingLeft: 10,
  },
  loadview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

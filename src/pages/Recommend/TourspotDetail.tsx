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

// import ReviewItem from '../../components/Recommend/ReviewItem';

export default function TourspotDetail() {
  let [inputCount, setInputCount] = useState(0);

  return (
    <View style={styles.view}>
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
            source={require('../../assets/images/home/swiper2_main.png')}
          />
          <Image
            style={styles.image}
            source={require('../../assets/images/home/swiper3_main.png')}
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
          <Text style={{fontSize: 20, color: '#000'}}> 4.5 / 5</Text>
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
              width: '100%',
              backgroundColor: '#ccc',
            }}></TouchableOpacity>
          {/* <Image source={require('')} /> */}
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text, {color: '#666', marginRight: 40}]}>
            주소
          </Text>
          <Text style={styles.text}>서울특별시 성북구 보국문로 262</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text, {color: '#666', marginRight: 15}]}>
            전화번호
          </Text>
          <Text style={styles.text}>02-909-0497</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text, {color: '#666', marginRight: 15}]}>
            홈페이지
          </Text>
          <Text style={styles.text}>http://bukhan.knps.or.kr</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text, {color: '#666', marginRight: 40}]}>
            주차
          </Text>
          <Text style={styles.text}>경형 2,000원, 중소형 4,000~5,000원</Text>
        </View>
        <View style={styles.view2}></View>
        <View style={styles.view2}>
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
            산림을 형성해 1,300여 종의 동식물이 서식한다.
            {/* <br />
            <br /> */}
            최고봉인 백운대(836m)를 중심으로 북쪽에 인수봉, 남쪽에 만경대가 있어
            삼각산으로도 불린다. 지질은 화강암인데 오랜 기간 침식돼 암석이
            지표에 노출되었다. 평균고도가 600~800m이나 높이에 비해 산세가
            험준하고 경사가 심하다. 암벽과 암봉 등이 주축을 이루고 있으며 주요
            암봉 사이로 수십 개의 맑고 깨끗한 계곡이 울창한 산림을 형성해
            1,300여 종의 동식물이 서식한다. 북한산은 북한산성 등이 있어 생태
            학습장은 물론 역사 탐방 장소로도 인기가 높다. 탐방코스는 북한산성
            코스, 대남문코스, 우이암코스, 신선대코스, 백운대코스 등&nbsp; 13개
            코스가 있다. 이 중 북한산성 코스는 우이암코스, 백운대코스와 함께
            가장 잘 알려진 코스 가운데 하나로, 조선 숙종 때 쌓은 길이 약 8㎞의
            북한산성을 비롯해 다양한 문화 유적이 있어 생태역사탐방 코스로
            좋다.&nbsp; 우이암코스는 누구나 쉽게 오를 수 있는 코스로 봄꽃이 많아
            봄철 산행에 알맞다. 백운대 코스는 백운대에 올라 자연의 웅장한 모습을
            감상하기 좋다.
            {/* <br />
            <br />* 지정현황 : 북한산성(사적), 북한산진흥왕순수비지(사적) 등
            <br />
            <br />◎ 이용안내
            <br />- 이용요금 : 없음
            <br />- 화장실 : 있음 */}
          </Text>
        </View>
        <Image
          style={styles.image2}
          source={require('../../assets/images/home/swiper1_main.png')}
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
            placeholderTextColor="#666"></TextInput>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>{inputCount}/200자</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="star-rate"
                size={22}
                color="#ccc"
                style={{marginRight: 5}}
              />
              <Text style={{marginRight: 5, color: '#000', fontSize: 14}}>
                별점/5
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
});

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
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import ReviewItem from '../../components/Recommend/ReviewItem';

export default function RestaurantDetile() {
  let [inputCount, setInputCount] = useState(0);

  return (
    <View style={styles.view}>
      <ScrollView style={styles.scrollView}>
        <Swiper
          autoplay
          showsPagination={true}
          height={350}
          autoplayTimeout={4}>
          <Image
            style={styles.image}
            source={require('../../assets/images/home/swiper1_main.png')}
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
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: '#000'}}>음식점 이름</Text>
            <Text
              style={{
                fontSize: 20,
                color: '#666',
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 5,
              }}>
              음식
            </Text>
          </View>
          <IconC
            name="cards-heart-outline"
            size={40}
            color="#1A6F3F"
            style={{marginRight: 5}}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#666',
            marginLeft: 20,
            marginTop: 5,
            marginBottom: 5,
          }}>
          지역 시군구
        </Text>
        <View style={styles.view2}>
          <Icon
            name="star-rate"
            size={28}
            color="#FCE25F"
            style={{marginRight: 5}}
          />
          <Text style={{fontSize: 20, color: '#000'}}> 별점 / 5</Text>
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
          <Text style={styles.text}>주소주소주소주소주소주소</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text, {color: '#666', marginRight: 15}]}>
            전화번호
          </Text>
          <Text style={styles.text}>000-000-0000</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text, {color: '#666', marginRight: 15}]}>
            메뉴
          </Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            disabled={true}
            style={{
              height: 130,
              width: '100%',
              backgroundColor: '#ccc',
              borderRadius: 20,
            }}></TouchableOpacity>
          {/* <Image source={require('')} /> */}
        </View>
        <View style={{marginHorizontal: 20, marginTop: 5, marginBottom: 5}}>
          <View style={styles.menu}>
            <Text style={styles.text}>메뉴메뉴메뉴메뉴</Text>
            <Text style={styles.text}>13,000원</Text>
          </View>
          <View style={styles.menu}>
            <Text style={styles.text}>메뉴메뉴메뉴메뉴</Text>
            <Text style={styles.text}>13,000원</Text>
          </View>
          <View style={styles.menu}>
            <Text style={styles.text}>메뉴메뉴메뉴메뉴</Text>
            <Text style={styles.text}>13,000원</Text>
          </View>
        </View>
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
          <Text style={styles.text}>리뷰(리뷰수)</Text>
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
            placeholder="여러분의 소중한 식당 후기를 남겨주세요"
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
        <ReviewItem></ReviewItem>
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
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
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

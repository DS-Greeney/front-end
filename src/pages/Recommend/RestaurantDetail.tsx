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

export default function RestaurantDetail() {
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
            source={{uri: 'https://ldb-phinf.pstatic.net/20220927_113/1664252532447EOyPt_JPEG/EA2ABDE6-BD6A-4691-B8E8-92C90BB0EB5B.jpeg'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://ldb-phinf.pstatic.net/20220923_217/16638974734680alEP_JPEG/41E392C9-7234-4D69-93AB-77DDEDF480F0.jpeg'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://ldb-phinf.pstatic.net/20201026_90/160368567412557Kz0_JPEG/4rUSaHxGQtqwvvUJT-ZthZdG.jpeg.jpg'}}
          />
        </Swiper>
        <View style={styles.title}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: '#000'}}>공간녹음</Text>
            <Text
              style={{
                fontSize: 20,
                color: '#666',
                marginLeft: 20,
                marginTop: 5,
                marginBottom: 5,
              }}>
              양식
            </Text>
          </View>
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
          서울 강서구 마곡동
        </Text>
        <View style={styles.view2}>
          <Icon
            name="star-rate"
            size={28}
            color="#FCE25F"
            style={{marginRight: 5}}
          />
          <Text style={{fontSize: 20, color: '#000'}}> 4.3 / 5</Text>
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
          <Text style={styles.extext}>주소</Text>
          <Text ellipsizeMode="tail" style={[styles.text, {flex: 1}]}>
          서울 강서구 공항대로 227 403호 마곡센트럴타워 1차</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>전화번호</Text>
          <Text style={styles.text}>0507-1327-6998</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.extext}>메뉴</Text>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 5}}>
          <View style={styles.menu}>
            <Text style={styles.text}>녹음 카레</Text>
            <Text style={styles.text}>17,000원</Text>
          </View>
          <View style={styles.menu}>
            <Text style={styles.text}>후무스 베지보울</Text>
            <Text style={styles.text}>16,000원</Text>
          </View>
          <View style={styles.menu}>
            <Text style={styles.text}>버섯크림 파스타</Text>
            <Text style={styles.text}>18,000원</Text>
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
          <Text style={styles.text}>리뷰(23)</Text>
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
            }}></TouchableOpacity>
          {/* <Image source={require('')} /> */}
          <View>
            <Text style={{fontSize: 15, color: '#000'}}>수민민</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star-rate" size={16} color="#FCE25F" />
              <Text style={{fontSize: 12, color: '#000'}}>4</Text>
              <Text style={{fontSize: 12, marginLeft: 10}}>2023-05-14</Text>
            </View>
          </View>
        </View>
        <Image
          source={{
            uri: 'https://ldb-phinf.pstatic.net/20220927_243/1664252532434mWlty_JPEG/EA97B633-44FD-409D-9487-FF90FB4099DA.jpeg',
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
          정말 맛있습니다
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
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  text: {
    color: '#000',
    fontSize: 14,
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
});

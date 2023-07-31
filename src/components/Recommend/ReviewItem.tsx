import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReviewItem() {
  //pros
  return (
    <View>
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
          <Text style={{fontSize: 15, color: '#000'}}>닉네임</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star-rate" size={16} color="#FCE25F" />
            <Text style={{fontSize: 12, color: '#000'}}> 별점 / 5</Text>
            <Text style={{fontSize: 12, marginLeft: 10}}>2023-05-14</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.image3}
        source={require('../../assets/images/home/swiper1_main.png')}
      />
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          marginHorizontal: 40,
          marginBottom: 40,
        }}>
        작성자리뷰작성자리뷰작성자리뷰작성자리뷰작성자리뷰
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image3: {
    width: 310,
    height: 150,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 40,
  },
});

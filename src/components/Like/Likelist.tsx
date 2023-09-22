import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import LikeHeart from './LikeHeart';
import LikelistTour from './LikelistTour';
import LikelistRstrnt from './LikelistRstrnt';

// interface dataType {
//   image: string;
//   name: string;
//   location: string;
//   type: string;
//   tags: string[] | '';
// }

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

interface dataType {
  categoryNumber: number;
  spotLike: SpotLike;
  spotLikeId: number;
}

interface propType {
  data: dataType[];
  navigation: NavigationProp<any>;
  userId: number;
}

const Likelist = ({data, navigation, userId}: propType) => {
  const renderView = () => {
    return data.map((item, index) => {
      if (item.categoryNumber === 1) {
        return (
          <LikelistTour
            data={data[index]}
            navigation={navigation}
            userId={userId}
          />
        );
      } else if (item.categoryNumber === 2) {
        return (
          <LikelistRstrnt
            data={data[index]}
            navigation={navigation}
            userId={userId}
          />
        );
      }
    });
  };

  return <View>{renderView()}</View>;
};

export default Likelist;

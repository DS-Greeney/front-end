import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import LikeHeart from './LikeHeart';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

interface SpotLike {
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

interface propType {
  data: SpotLike;
}

const LikelistTour = ({data}: propType) => {
  // console.log(data);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TourspotDetail')}>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image
            source={{uri: data.image}}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
          <View style={styles.title}>
            <View style={styles.textwrap}>
              <Text style={styles.name}>{data.spotLike.title}</Text>
              <Text style={styles.location}>{data.location}</Text>
            </View>
            {/* <LikeHeart /> */}
            {/* 찜페이지로 임시 */}
            <View style={styles.heratColumn}>
              <LikeHeart
                category={2}
                size={40}
                likeState={likeState}
                setLikeState={setLikeState}
                itemId={rstrntId}
                userId={userId}
              />
              <TouchableOpacity>
                <Text style={styles.type}>{data.type}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
  },
  container: {
    marginHorizontal: 30,
  },
  content: {
    marginVertical: 16,
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  textwrap: {
    marginLeft: 15,
    width: 150,
  },
  name: {
    flexWrap: 'wrap',
    color: '#000',
    fontSize: 15,
  },
  location: {
    flexWrap: 'wrap',
    color: '#7A7A7A',
    fontSize: 12,
  },
  descript: {
    color: '#7A7A7A',
  },
  innertext: {
    flexWrap: 'wrap',
    marginVertical: 15,
    fontSize: 13,
  },
  tagwrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    color: '#005F29',
    width: 'auto',
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#005F29',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 5,
    marginVertical: 5,
  },
  type: {
    color: '#000',
    width: 'auto',
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  heratColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LikelistTour;

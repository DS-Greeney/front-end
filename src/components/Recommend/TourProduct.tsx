import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeHeart from '../../components/Like/LikeHeart';

interface dataType {
  image: string;
  title: string;
  price: string;
  summary: string;
  heart: string;
}
interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
}

const TourProduct = ({data, navigation}: propType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image
            source={{uri: data.image}}
            style={{
              width: 151,
              height: 142,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />

          <View style={styles.textwrap}>
            <Text style={styles.name}>{data.title}</Text>
            <Text style={styles.price}>{data.price}</Text>
            <View style={styles.descript}>
              <Text numberOfLines={3} style={styles.innertext}>
                {data.summary}
              </Text>
            </View>
            <View style={styles.heartcontainer}>
              <LikeHeart size={20} />
              <Text style={styles.heartnum}>{data.heart}</Text>
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
    marginTop: 20,
  },
  textwrap: {
    width: '50%',
    marginLeft: 15,
    flex: 1,
  },
  name: {
    flexWrap: 'wrap',
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  price: {
    flexWrap: 'wrap',
    color: '#8A613C',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 7,
  },
  innertext: {
    flexWrap: 'wrap',
    marginVertical: 15,
    fontSize: 13,
    color: '#7A7A7A',
  },
  heartcontainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  heartnum: {
    color: '#000',
    fontSize: 15,
    paddingLeft: 2,
  },
});

export default TourProduct;

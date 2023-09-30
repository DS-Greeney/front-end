import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Config from 'react-native-config';

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
  data: dataType;
  navigation: NavigationProp<any>;
  userId: number;
}

const LikelistRstrnt = ({data, navigation, userId}: propType) => {
  // console.log(data);
  const Key = Config.google_map_api_key;
  const [heart, setHeart] = useState(true);

  const toggleHeart = () => {
    if (heart) {
      cancleLike();
    } else {
      clickLike();
    }
    setHeart(previousState => !previousState);
  };

  const clickLike = async () => {
    try {
      const response = await axios.post(
        `${Config.API_URL}/greeney/mypage/like?userId=${userId}&itemId=${data.spotLike.rstrntId}`,
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const cancleLike = async () => {
    try {
      const response = await axios.delete(
        `${Config.API_URL}/greeney/mypage/dislike?categoryNumber=${data.categoryNumber}&spotId=${data.spotLike.rstrntId}&userId=${userId}`,
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TourspotDetail')}>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${data.spotLike.rstrntLa}, ${data.spotLike.rstrntLo}&fov=80&heading=70&pitch=0&key=${Key}`,
            }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
          <View style={styles.title}>
            <View style={styles.textwrap}>
              <Text style={styles.name}>{data.spotLike.rstrntName}</Text>
              <Text style={styles.location}>{data.spotLike.rstrntAddr}</Text>
            </View>
            <View style={styles.heratColumn}>
              <TouchableOpacity onPress={toggleHeart}>
                {heart ? (
                  <IconC name="cards-heart" size={40} color={'#1A6F3F'} />
                ) : (
                  <IconC name="cards-heart-outline" size={40} color={'#1A6F3F'} />
                )}
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.type}>식당</Text>
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

export default LikelistRstrnt;

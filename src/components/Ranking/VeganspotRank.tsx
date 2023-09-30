import React, {memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Config from 'react-native-config';

interface dataType {
  rstrntId: number;
  rstrntCtgry: string;
  rstrntName: string;
  rstrntAddr: string;
  rstrntStar: number;
  rstrntLa: string;
  rstrntLo: string;
  rstrntMenuinfo: string;
}

interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
  index: number;
}

const VeganspotRank = ({data, navigation, index}: propType) => {
  const Key = Config.google_map_api_key;

  return (
    <TouchableOpacity
      style={styles.container}
      key={data.rstrntId}
      onPress={() => navigation.navigate('RestaurantDetail', data)}>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.titlewrapper}>
          <Text style={styles.rank}>{index + 1}</Text>
          <Text style={styles.name}>{data.rstrntName}</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${data.rstrntLa}, ${data.rstrntLo}&fov=80&heading=70&pitch=0&key=${Key}`, //api 키 불러오기
            }}
            style={{
              width: '50%',
              height: 136,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />

          <View style={styles.textwrap}>
            <Text style={styles.location}>{data.rstrntCtgry}</Text>
            <View style={styles.scopewrap}>
              <Image
                style={styles.star}
                source={require('../../assets/images/star.png')}
              />
              <Text style={styles.scope}>{data.rstrntStar} / 5</Text>
            </View>
            <View style={styles.descript}>
              <Text numberOfLines={2} style={styles.innertext}>
                {data.rstrntAddr}
              </Text>
            </View>
            <View style={styles.descript}>
              <Text numberOfLines={1} style={styles.menutext}>
                {data.rstrntMenuinfo}
              </Text>
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
  titlewrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    color: '#000',
    fontSize: 30,
    marginRight: 10,
  },
  content: {
    marginVertical: 12,
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    marginVertical: 10,
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
  },
  location: {
    flexWrap: 'wrap',
    color: '#7A7A7A',
    fontSize: 15,
  },
  innertext: {
    flexWrap: 'wrap',
    marginVertical: 15,
    fontSize: 13,
    color: '#7A7A7A',
  },
  scopewrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  scope: {
    color: '#454545',
    fontSize: 11,
  },
  star: {
    width: 15,
    height: 15,
    marginRight: 7,
  },
  menutext: {
    flexWrap: 'wrap',
    fontSize: 13,
    color: '#7A7A7A',
  },
});

export default memo(VeganspotRank);

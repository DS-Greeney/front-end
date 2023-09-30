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
          <Text style={styles.name}>{data.title}</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${data.rstrntLa}, ${data.rstrntLo}&fov=80&heading=70&pitch=0&key=${Key}`, //api 키 불러오기
            }}
            style={{
              width: 151,
              height: 113,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />

          <View style={styles.textwrap}>
            <Text style={styles.location} numberOfLines={1}>
              {data.addr}
            </Text>
            <View style={styles.descript}>
              <Text numberOfLines={5} style={styles.innertext}>
                {data.summary}
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
    marginTop: 10,
  },
  textwrap: {
    // flexDirection: 'column',
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
});

export default memo(VeganspotRank);

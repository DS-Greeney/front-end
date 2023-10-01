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
}

const Veganspot = ({data, navigation}: propType) => {
  // console.log(data);
  const Key = Config.google_map_api_key;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('RestaurantDetail', data)}>
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
          <Text style={styles.type}>{data.rstrntCtgry}</Text>
          <Text style={styles.name} numberOfLines={2}>
            {data.rstrntName}
          </Text>
          <Text style={styles.location} numberOfLines={2}>
            {data.rstrntAddr}
          </Text>
          <View style={styles.scopewrap}>
            <Image
              style={styles.star}
              source={require('../../assets/images/star.png')}
            />
            <Text style={styles.scope}>{data.rstrntStar} / 5</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
  },
  wrapper: {},
  textwrap: {
    marginTop: 10,
  },
  type: {
    color: '#7A7A7A',
    fontSize: 11,
  },
  name: {
    color: '#000',
    fontSize: 18,
  },
  location: {
    color: '#7A7A7A',
    fontSize: 11,
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
});

export default memo(Veganspot);

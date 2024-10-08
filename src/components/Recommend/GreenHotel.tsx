import React, {memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Config from 'react-native-config';

interface dataType {
  hotelId: string;
  hotelName: string;
  hotelAddr: string;
  hotelTel: string;
  hotelService: string;
  hotelInfo: string;
  hotelLa: number;
  hotelLo: number;
  areaCode: string;
  hotelUrl: string;
  hotelStar: number;
}
interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
}

const GreenHotel = ({data, navigation}: propType) => {
  const Key = Config.google_map_api_key;
  return (
    <TouchableOpacity
      style={styles.container}
      key={data.hotelId}
      onPress={() => navigation.navigate('GreenHotelDetail', data)}>
      <View style={styles.line} />
      <View style={styles.content}>
        <Text style={styles.name}>{data.hotelName}</Text>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${data.hotelLa}, ${data.hotelLo}&fov=80&heading=70&pitch=0&key=${Key}`,
            }}
            style={{
              width: '50%',
              height: 136,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />

          <View style={styles.textwrap}>
            <Text style={styles.location} numberOfLines={2}>
              {data.hotelAddr}
            </Text>
            <View style={styles.scopewrap}>
              <Image
                style={styles.star}
                source={require('../../assets/images/star.png')}
              />
              <Text style={styles.scope}>{data.hotelStar} / 5</Text>
            </View>
            <View style={styles.descript}>
              <Text numberOfLines={3} style={styles.innertext}>
                {data.hotelInfo}
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
  content: {
    marginVertical: 16,
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
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
    fontSize: 14,
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
});

export default memo(GreenHotel);

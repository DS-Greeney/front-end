import React, {memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  tourspot_id: number;
  mainimage: string;
  title: string;
  addr: string;
  summary: string;
  areacode: string;
  latitude: string;
  logitude: string;
  tourspotStar: number;
}
interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
}

const Tourspot = ({data, navigation}: propType) => {
  return (
    <TouchableOpacity
      style={styles.container}
      key={data.tourspot_id}
      onPress={() => navigation.navigate('TourspotDetail', data)}>
      <View style={styles.line} />
      <View style={styles.content}>
        <Text style={styles.name}>{data.title}</Text>
        <View style={styles.wrapper}>
          {data.mainimage === '' ? (
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/greeney-a996b.appspot.com/o/noImage.png?alt=media&token=5e00b909-c884-4711-a8af-b964c096b8d1&_gl=1*1p0d1lk*_ga*Mjg1MTExMTc3LjE2OTA3OTEyMDg.*_ga_CW55HF8NVT*MTY5NjA2NzU1MC4zLjEuMTY5NjA2NzYwMy43LjAuMA',
              }}
              style={{
                width: '50%',
                height: 136,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
          ) : (
            <Image
              source={{uri: data.mainimage}}
              style={{
                width: '50%',
                height: 136,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
          )}

          <View style={styles.textwrap}>
            {/* <Text style={styles.name}>{data.title}</Text> */}
            <Text style={styles.location} numberOfLines={2}>
              {data.addr}
            </Text>
            <View style={styles.scopewrap}>
              <Image
                style={styles.star}
                source={require('../../assets/images/star.png')}
              />
              <Text style={styles.scope}>{data.tourspotStar} / 5</Text>
            </View>
            <View style={styles.descript}>
              <Text numberOfLines={3} style={styles.innertext}>
                {data.summary}
              </Text>
            </View>
          </View>
        </View>

        {/* 태그 */}
        {/* <View style={styles.tagwrap}>
          {data.tags.map((tag, idx) => (
            <Text style={styles.tag}>#{tag}</Text>
          ))}
        </View> */}
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

export default memo(Tourspot);

import React, {memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  tourspotId: number;
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
  index: number;
}

const TourspotRank = ({data, navigation, index}: propType) => {
  return (
    <TouchableOpacity
      style={styles.container}
      key={data.tourspotId}
      onPress={() => navigation.navigate('TourspotDetail', data)}>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.titlewrapper}>
          <Text style={styles.rank}>{index + 1}</Text>
          <Text style={styles.name}>{data.title}</Text>
        </View>
        <View style={styles.wrapper}>
          {data.mainimage === '' ? (
            <Image
              source={{
                uri: 'https://wetravel.cafe24.com/data/editor/1808/20180806103020_c4835f6ce5c51f178656a5ecd3471d53_wk96.png',
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

export default memo(TourspotRank);

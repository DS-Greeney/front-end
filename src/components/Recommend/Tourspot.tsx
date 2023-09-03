import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  tourspot_id: number;
  mainimage: string;
  title: string;
  addr: string;
  summary: string;
  areacode: string;
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
      onPress={() => navigation.navigate('TourspotDetail', data.tourspot_id)}>
      <View style={styles.line} />
      <View style={styles.content}>
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
            <Text style={styles.name}>{data.title}</Text>
            <Text style={styles.location}>{data.addr}</Text>
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
});

export default Tourspot;

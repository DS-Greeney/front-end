import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  image: string;
  name: string;
  location: string;
  descript: string;
  tags: string[];
}
interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
}

const Tourspot = ({data, navigation}: propType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image
            source={{uri: data.image}}
            style={{
              width: '50%',
              height: 136,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />

          <View style={styles.textwrap}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.location}>{data.location}</Text>
            <View style={styles.descript}>
              <Text numberOfLines={3} style={styles.innertext}>
                {data.descript}
              </Text>
            </View>
          </View>
        </View>

        {/* 태그 */}
        <View style={styles.tagwrap}>
          {data.tags.map((tag, idx) => (
            <Text style={styles.tag}>#{tag}</Text>
          ))}
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
    marginBottom: 12,
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
});

export default Tourspot;

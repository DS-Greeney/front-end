import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  image: string;
  type: string;
  name: string;
  location: string;
  scope: number;
}
interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
}

const Veganspot = ({data, navigation}: propType) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('RestaurantDetail')}>
      <View style={styles.wrapper}>
        <Image
          source={{uri: data.image}}
          style={{
            width: 151,
            height: 113,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />

        <View style={styles.textwrap}>
          <Text style={styles.type}>{data.type}</Text>
          <Text style={styles.name} numberOfLines={2}>
            {data.name}
          </Text>
          <Text style={styles.location} numberOfLines={2}>
            {data.location}
          </Text>
          <View style={styles.scopewrap}>
            <Image
              style={styles.star}
              source={require('../../assets/images/star.png')}
            />
            <Text style={styles.scope}>{data.scope} / 5</Text>
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

export default Veganspot;

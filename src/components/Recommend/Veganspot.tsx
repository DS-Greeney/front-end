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
    <TouchableOpacity style={styles.container}>
      <Image
        source={{uri: data.image}}
        style={{
          width: '40%',
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
          <Text style={styles.scope}>{data.scope} / 5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  //   container: {
  //     marginHorizontal: 30,
  //   },
  //   content: {
  //     marginVertical: 16,
  //     flex: 1,
  //   },
  //   wrapper: {
  //     flexDirection: 'row',
  //     marginBottom: 12,
  //   },
  //   textwrap: {
  //     width: '50%',
  //     marginLeft: 15,
  //     flex: 1,
  //   },
  //   name: {
  //     flexWrap: 'wrap',
  //     color: '#000',
  //     fontSize: 18,
  //   },
  //   location: {
  //     flexWrap: 'wrap',
  //     color: '#7A7A7A',
  //     fontSize: 15,
  //   },
});

export default Veganspot;

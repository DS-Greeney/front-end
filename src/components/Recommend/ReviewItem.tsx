import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

interface dataType {
  image: string;
  name: string;
  star: number;
  date: string;
  text: string;
}
interface propType {
  data: dataType;
}

const ReviewItem = ({ data }: propType) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          disabled={true}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            width: 45,
            marginLeft: 20,
            marginRight: 10,
            backgroundColor: '#ccc',
            borderRadius: 50,
          }}></TouchableOpacity>
        {/* <Image source={require('')} /> */}
        <View>
          <Text style={{ fontSize: 15, color: '#000' }}>{data.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star-rate" size={16} color="#FCE25F" />
            <Text style={{ fontSize: 12, color: '#000' }}> {data.star}</Text>
            <Text style={{ fontSize: 12, marginLeft: 10 }}>{data.date}</Text>
          </View>
        </View>
      </View>
      <Image source={{ uri: data.image }} style={styles.image3} />
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          marginHorizontal: 40,
          marginBottom: 40,
        }}>
        {data.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image3: {
    width: 310,
    height: 150,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 40,
  },
});

export default ReviewItem;

import React, {useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface propType {
  title: string;
  type: string;
  navigation: NavigationProp<any>;
}

const Header = ({title, type, navigation}: propType) => {
  const goBack = useCallback(() => navigation.pop(), []);

  return (
    <View style={styles.head}>
      {type === 'BACK' && (
        <TouchableOpacity onPress={goBack} style={styles.touchable}>
          <Image source={require('../../assets/images/back-arrow.png')} />
        </TouchableOpacity>
      )}
      <Text style={styles.headText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;

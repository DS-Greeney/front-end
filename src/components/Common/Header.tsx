import React, {useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

interface propType {
  title: string | '';
  type: string;
  navigation: NavigationProp<any>;
}

const Header = ({title, type, navigation}: propType) => {
  const goBack = useCallback(() => navigation.goBack(), []);
  const goHome = useCallback(() => navigation.navigate('Homepage'), []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        {type === 'BACK' && (
          <TouchableOpacity onPress={goBack}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
        )}
        {type === 'HOME' && (
          <TouchableOpacity onPress={goHome}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
        )}
        {type === 'MY' && (
          <View>
            <IconC name="food-apple" color={'#1A6F3F'} size={20} />
          </View>
        )}
        {/* {type === 'MAIN' && (
          <View style={styles.headtitle}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/home/logo.png')}
            />
          </View>
        )} */}
        <Text style={styles.headText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginLeft: 20,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    color: '#000',
    fontSize: 22,
    marginLeft: 20,
  },
  headtitle: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    width: 161,
    height: 43,
    marginLeft: 30,
  },
});

export default Header;

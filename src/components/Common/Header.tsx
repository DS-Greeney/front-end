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
});

export default Header;

import React from 'react';
import Header from '../../components/Common/Header';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PrivacyPolicy() {
  let navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Header
        navigation={navigation}
        type={'BACK'}
        title={'개인정보 이용약관'}
      />
      <View style={styles.view2}>
        <Text>개인정보 이용약관</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    flex: 1,
  },
  view2: {
    marginHorizontal: 20,
  },
});

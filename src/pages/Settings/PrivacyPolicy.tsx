import React from 'react';
import Header from '../../components/Common/Header';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PrivacyPolicy() {
  let navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Header
        navigation={navigation}
        type={'BACK'}
        title={'개인정보 처리방침'}
      />
      <View style={styles.view2}>
        <ScrollView>
          <Text style={{fontWeight: 'bold'}}>개인정보 처리방침</Text>
        </ScrollView>
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
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
  },
});

import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function ChatbotPage() {
  let navigation = useNavigation();

  const sendQuestion = async (text: string) => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:8082/greeney/main/chat',
        {
          params: {
            question: text,
          },
        },
      );
      console.log(response.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'그리니 챗봇'} />
      <View style={styles.spotlist}>
        <Text>챗봇 테스트</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';

// import ReviewItem from '../../components/Recommend/ReviewItem';

export default function ChallengeAchieve() {
  let navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Header
        navigation={navigation}
        type={'BACK'}
        title={'달성한 도전 과제'}
      />
      <View style={styles.view2}>
        <Text style={styles.title}>지금까지 달성한 도전 과제는</Text>
        <View style={styles.title}>
          <Text style={styles.title2}>3개</Text>
          <Text style={styles.title}> 입니다</Text>
        </View>
        <View style={styles.goal}>
          <View style={styles.textnum}>
            <Text style={{fontSize: 16, color: '#000'}}>목표</Text>
            <Text style={{fontSize: 28, color: '#000'}}>7</Text>
          </View>
          <View style={styles.textnum}>
            <Text style={{fontSize: 16, color: '#000'}}>달성 도전 과제</Text>
            <Text style={{fontSize: 28, color: '#000'}}>3</Text>
          </View>
          <View style={styles.textnum}>
            <Text style={{fontSize: 16, color: '#000'}}>남은 도전 과제</Text>
            <Text style={{fontSize: 28, color: '#000'}}>4</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.icon}>
          <View style={styles.iconleft}>
            <IconC name="medal" size={88} color="#1A6F3F" style={{marginRight: 5}} />
            <View style={styles.textnum}>
              <Text style={{fontSize: 14, color: '#000'}}>오늘 달성 수</Text>
              <Text style={{fontSize: 28, color: '#000'}}>2</Text>
            </View>
          </View>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 14, color: '#555'}}>일일 도전 과제</Text>
            <Icon name="arrow-forward-ios" size={24} color="#aaa" style={{marginRight: 5}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity disabled={true} style={{width: '100%', height: 35, backgroundColor: '#ccc', borderRadius: 20}}>
          <TouchableOpacity disabled={true} style={{ alignItems: 'center', justifyContent: 'center', width: '60%', height: 35, backgroundColor: '#1A6F3F', borderRadius: 20}}>
            <Text style={{fontSize: 18, color: '#eee'}}>3/ 7</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{alignItems: 'flex-end', marginTop: 5, marginBottom: 20,}}>
          <Text style={{fontSize: 16, color: '#000'}}>환경 보호 새내기</Text>
        </View>
        <View style={styles.line} />
        <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold', marginVertical: 15}}>현재 닉네임 님의 칭호</Text>
        <View style={{alignItems: 'center', marginTop: 5, marginBottom: 20,}}>
          <TouchableOpacity disabled={true} style={{width: 150, height: 150, backgroundColor: '#ccc', borderRadius: 100}}></TouchableOpacity>
          <Text style={{fontSize: 16, color: '#000',}}>환경 운동가 지망생</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  view2: {
    marginHorizontal: 30,
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
  },
  title: {
    fontSize: 20,
    color: '#000',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
    color: '#1A6F3F',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  textnum: {
    alignItems: 'center',
  },
  goal: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  iconleft: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

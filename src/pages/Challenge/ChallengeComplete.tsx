import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';

export default function ChallengeComplete() {
  let navigation = useNavigation();
  const {userId} = useContext(AppContext);

  interface ChallengeInfoModel {
    goal: number;
    userTitleList: string[];
    userRemainChallengeNum: number;
    userChallengeNum: number;
    userNowTitle: string;
    userNickname: string;
  }

  const [challengeInfo, setChallengeInfo] = useState<ChallengeInfoModel>({
    goal: 0,
    userTitleList: [''],
    userRemainChallengeNum: 0,
    userChallengeNum: 0,
    userNowTitle: '',
    userNickname: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setChallengeInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:8082/greeney/mypage/challengeInfo?userId=${userId}`,
        {
          userId: userId,
        },
      )
      .then(function (response) {
        handleInputChange('goal', response.data.goal);
        handleInputChange('userTitleList', response.data.userTitleList);
        handleInputChange('userRemainChallengeNum', response.data.userRemainChallengeNum);
        handleInputChange('userChallengeNum', response.data.userChallengeNum);
        handleInputChange('userNowTitle', response.data.userNowTitle);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .post(`http://10.0.2.2:8082/api/users/info`, {
        userId: userId,
      })
      .then(function (response) {
        handleInputChange('userNickname', response.data.userNickname);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId]);

  const variableWidthPercentage = `${(challengeInfo.userChallengeNum / challengeInfo.goal) * 100}%`;

  return (
    <View style={styles.view}>
      <Header
        navigation={navigation}
        type={'BACK'}
        title={'달성한 도전 과제'}
      />
      <View style={styles.view2}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.title}>지금까지 달성한 도전 과제는</Text>
          <View style={styles.title}>
            <Text style={styles.title2}>{challengeInfo.userChallengeNum}개</Text>
            <Text style={styles.title}> 입니다</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.icon}>
          <View style={styles.iconleft}>
            <Image
              style={styles.trophy}
              source={require('../../assets/images/challenge/trophy.png')}
            />
            <View style={styles.title}>
              <Text style={styles.title}>다음 목표 달성까지</Text>
              <Text style={styles.title4}> {challengeInfo.userRemainChallengeNum}개</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity disabled={true} style={styles.graph1}>
          <TouchableOpacity
            disabled={true}
            style={[styles.graph2, {width: `${variableWidthPercentage}`}]}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, color: '#000'}}>{challengeInfo.userChallengeNum} / {challengeInfo.goal}</Text>
          <View style={styles.graphtext}>
            <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('DailyChallenge')}>
              <Text style={{fontSize: 14, color: '#555'}}>일일 도전 과제</Text>
              <Icon
                name="arrow-forward-ios"
                size={24}
                color="#aaa"
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.title3}>현재 {challengeInfo.userNickname}님의 칭호</Text>
        <View style={styles.badge}>
          <TouchableOpacity disabled={true} style={{width: 150, height: 150, backgroundColor: '#ccc', borderRadius: 100}}></TouchableOpacity>
          <Text style={{fontSize: 16, color: '#000'}}>{challengeInfo.userNowTitle}</Text>
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
    alignItems: 'center',
  },
  title2: {
    fontSize: 20,
    color: '#1A6F3F',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  title3: {
    fontSize: 20,
    color: '#000',
    marginVertical: 15,
  },
  title4: {
    fontSize: 34,
    color: '#000',
    flexDirection: 'row',
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
    marginTop: 20,
    alignItems: 'center',
  },
  iconleft: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trophy: {
    marginRight: 20,
    height: 60,
    width: 60,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  graph1: {
    width: '100%',
    height: 35,
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
  graph2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    backgroundColor: '#1A6F3F',
    borderRadius: 20,
  },
  graphtext: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 20,
  },
  badge: {
    alignItems: 'center',
    marginTop: 5,
  },
});

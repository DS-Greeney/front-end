import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Common/Header';
import axios from 'axios';

interface dataType {
  challengeId: number;
  complete: number;
  content: string;
}

export default function DailyChallenge() {
  let navigation = useNavigation();
  const [challenges, setChallenges] = useState<dataType[]>([]);
  const [completeState, setCompleteState] = useState(false);

  const handleComplete = () => {};

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8082/greeney/mypage/challenge/today')
      .then(function (response) {
        // console.log(response);
        setChallenges(response.data.todayChallengeList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.dailyChallenge}>
      <Header navigation={navigation} type={'BACK'} title={'일일 도전 과제'} />
      <View style={styles.topBox}>
        <Image
          style={styles.leafImg}
          source={require('../../assets/images/challenge/leaf.png')}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>오늘도 힘차게 실천해봅시다!</Text>
          <Text style={styles.textEng}>
            We won't have a society {'\n'}
            if we destroy the environment
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.bottomBox}>
        <View style={styles.ringWrap}>
          <Image
            style={styles.laurelImg}
            source={require('../../assets/images/challenge/do_laurel.png')}
          />
          <Image
            style={styles.laurelImg}
            source={require('../../assets/images/challenge/do_laurel.png')}
          />
          <Image
            style={styles.laurelImg}
            source={require('../../assets/images/challenge/do_laurel.png')}
          />
        </View>
        {challenges.map(challenge => (
          <View style={styles.challengeWrap} key={challenge.challengeId}>
            {/* <TouchableOpacity style={styles.challengeBox} onPress={() => {}}> */}
            {/* <View style={styles.contentView}> */}
            {challenge.complete === 0 ? (
              <TouchableOpacity
                style={styles.incompleteBox}
                onPress={() => {
                  handleComplete();
                }}>
                <Text style={styles.challengeText}>{challenge.content}</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.completeBox}>
                <Text style={styles.challengeText}>{challenge.content}</Text>
              </View>
            )}

            {/* </View> */}
            {/* </TouchableOpacity> */}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dailyChallenge: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topBox: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  textBox: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  text: {
    color: '#7A7A7A',
    fontSize: 15,
    marginBottom: 2,
  },
  textEng: {
    color: '#7A7A7A',
    fontSize: 15,
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  leafImg: {
    width: 52,
    height: 63,
  },
  bottomBox: {
    // flex: 1,
    alignItems: 'center',
  },
  ringWrap: {
    flexDirection: 'row',
  },
  laurelImg: {
    width: 60,
    height: 60,
    marginHorizontal: 15,
  },
  challengeWrap: {
    width: 313,
  },
  incompleteBox: {
    backgroundColor: 'rgba(0, 95, 41, 0.13)',
    borderRadius: 30,
    marginVertical: 20,
    paddingVertical: 35,
    alignItems: 'center',
  },
  challengeText: {
    width: '85%',
    flexShrink: 1,
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  completeBox: {
    backgroundColor: '#DADADA',
    borderRadius: 30,
    marginVertical: 20,
    paddingVertical: 35,
    alignItems: 'center',
  },
});

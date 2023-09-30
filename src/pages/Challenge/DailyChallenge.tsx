import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../components/Common/Context';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ImageState from '../../components/challenge/ImageState';
import Header from '../../components/Common/Header';
import axios from 'axios';
import Config from 'react-native-config';

interface dataType {
  challengeId: number;
  complete: number;
  content: string;
}

export default function DailyChallenge() {
  const {userId} = useContext(AppContext);
  let navigation = useNavigation();
  const [challenges, setChallenges] = useState<dataType[]>([]);
  const [completeState, setCompleteState] = useState(0);

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);

  const handleComplete = (id: number) => {
    console.log(id);
    axios
      .post(
        `${Config.API_URL}/greeney/mypage/challengeComplete?userId=${userId}&challengeId=${id}`,
      )
      .then(function (response) {
        // console.log(response);
        console.log(completeState);
        setCompleteState(
          completeState === 3 ? 1 : prevCompleteState => prevCompleteState + 1,
        );
        Alert.alert('축하합니다', '해당 도전 과제 수행 완료!');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${Config.API_URL}/greeney/mypage/challenge/today?userId=${userId}`)
      .then(function (response) {
        console.log(response.data.todayChallengeList);
        setChallenges(response.data.todayChallengeList);

        const completedCount = response.data.todayChallengeList.filter(
          challenge => challenge.complete === 1,
        ).length;
        setCount(completedCount);
        console.log('completedCount', completedCount);

        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [completeState]);

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
        {loading === false && (
          <ImageState challenges={challenges} stateData={count} />
          // <View style={styles.ringWrap}>
          //   {challenges.map((challenge, index) => {
          //     //  (challenge.complete === 1) {
          //     //   count += 1;
          //     // }
          //     return (
          //       <Image
          //         key={index}
          //         style={styles.laurelImg}
          //         source={
          //           // challenge.complete === 1
          //           completeState > index
          //             ? // count > index
          //               require('../../assets/images/challenge/do_laurel.png')
          //             : require('../../assets/images/challenge/undo_laurel.png')
          //         }
          //         onError={error => {
          //           console.error('Error loading image:', error);
          //         }}
          //       />
          //     );
          //   })}
          // </View>
        )}
        {challenges.map(challenge => (
          <View style={styles.challengeWrap} key={challenge.challengeId}>
            {/* <TouchableOpacity style={styles.challengeBox} onPress={() => {}}> */}
            {/* <View style={styles.contentView}> */}
            {challenge.complete === 0 ? (
              <TouchableOpacity
                style={styles.incompleteBox}
                onPress={() => {
                  handleComplete(challenge.challengeId);
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
  // ringWrap: {
  //   flexDirection: 'row',
  // },
  // laurelImg: {
  //   width: 60,
  //   height: 60,
  //   marginHorizontal: 15,
  // },
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

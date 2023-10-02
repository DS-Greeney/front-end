import React, {useState} from 'react';
import Header from '../../components/Common/Header';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {NavigationProp} from '@react-navigation/native';
import Config from 'react-native-config';

export default function PassChangePage(route: any) {
  let navigation = useNavigation();
  const [pass, setPass] = useState('');
  const [passChk, setPassChk] = useState('');

  const ChangePassAxios = () => {
    if (pass === '') {
      Alert.alert(
        '비밀번호를 입력해 주세요.',
        '비밀번호는 최소 한 자리 이상이어야 합니다.',
      );
    } else if (pass !== passChk) {
      Alert.alert('비밀번호를 확인해 주세요.', '비밀번호가 서로 다릅니다.');
    } else {
      axios
        .post(`${Config.API_URL}/api/users/update/userPassword`, {
          userId: route.route.params.userId,
          userPassword: pass,
        })
        .then(function (response) {
          if (response.data.success) {
            Alert.alert(
              '성공',
              '비밀번호가 변경되었습니다.',
              [
                {
                  text: '확인',
                  onPress: () => [
                    route.route.params.setLoading(!route.route.params.loading),
                    navigation.navigate('MyPage'),
                  ],
                  style: 'destructive',
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            Alert.alert('오류!', '변경 실패');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'닉네임 변경'} />
      <View style={styles.view2}>
        <Text style={{marginBottom: 5}}>변경할 비밀번호를 입력하세요</Text>
        <TextInput
          placeholder="비밀번호"
          placeholderTextColor={'#005F29'}
          onChangeText={text => setPass(text)}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="비밀번호 확인"
          placeholderTextColor={'#005F29'}
          onChangeText={text => setPassChk(text)}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => ChangePassAxios()}>
            <Text style={styles.btnText}>저장</Text>
          </TouchableOpacity>
        </View>
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
  input: {
    width: '100%',
    height: 70,
    marginVertical: 5,
    flexShrink: 0,
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#005F29',
    fontSize: 20,
    padding: 20,
    color: '#005F29',
  },
  btn: {
    width: 80,
    height: 50,
    backgroundColor: '#26e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
  },
});

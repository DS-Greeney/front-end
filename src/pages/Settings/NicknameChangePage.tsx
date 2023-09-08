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

type Props = {
  route: any;
  navigation: NavigationProp<any>;
};

export default function NicknameChangePage(route: Props) {
  let navigation = useNavigation();
  const [nickname, setNickname] = useState('');

  const ChangeNicknameAxios = () => {
    axios
      .post('http://10.0.2.2:8082/api/users/update/userNickname', {
        userId: route.route.params.userId,
        userNickname: nickname,
      })
      .then(function (response) {
        if (response.data.success) {
          Alert.alert(
            '성공',
            '닉네임이 변경되었습니다.',
            [
              {
                text: '확인',
                onPress: () => navigation.goBack(),
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
  };

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'닉네임 변경'} />
      <View style={styles.view2}>
        <Text>닉네임을 변경하면 즉시 적용됩니다.</Text>
        <TextInput
          placeholder="변경할 닉네임을 입력하세요"
          placeholderTextColor={'#005F29'}
          onChangeText={text => setNickname(text)}
          style={styles.input}
        />
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => ChangeNicknameAxios()}>
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
    marginVertical: 10,
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
    marginTop: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
  },
});

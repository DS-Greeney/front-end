import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

import Header from '../components/Common/Header';

export default function SignUp({navigation}: any) {
  interface UserModel {
    userNickname: string;
    userEmail: string;
    userPassword: string;
    userPasswordchk: string;
  }
  const [user, setUser] = useState<UserModel>({
    userNickname: '',
    userEmail: '',
    userPassword: '',
    userPasswordchk: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const [passchk, setPasschk] = useState('');
  const handleCheck = (key: string, value: string) => {
    handleInputChange(key, value);
    console.log(user);
    if (user.userPassword === value || user.userPasswordchk === value) {
      setPasschk('비밀번호가 일치합니다.');
    } else {
      setPasschk('비밀번호가 다릅니다. 다시 입력해주세요.');
    }
  };

  function handleClick() {
    console.log(user);
    if (user.userPassword === user.userPasswordchk) {
      axios
        .post('http://10.0.2.2:8082/api/users/register', {
          userNickname: user.userNickname,
          userEmail: user.userEmail,
          userPassword: user.userPassword,
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.success === true) {
            console.log('회원가입 성공');
            navigation.navigate('Login');
          } else {
            Alert.alert('회원가입 실패', '입력한 값을 다시 확인해주세요.');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      Alert.alert('회원가입 실패', '비밀번호가 다릅니다.');
    }
  }

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'회원가입'} />
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View style={styles.textView}>
          <TouchableOpacity disabled={true} style={styles.textBox}>
            <Text style={styles.text}>닉네임</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={text => {
              handleInputChange('userNickname', text);
            }}
          />
          <TouchableOpacity style={styles.chkbutton}>
            <Text style={styles.smallText}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>사용할 수 있는 닉네임입니다.</Text>
        <View style={styles.textView}>
          <TouchableOpacity disabled={true} style={styles.textBox}>
            <Text style={styles.text}>이메일</Text>
          </TouchableOpacity>
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            onChangeText={text => {
              handleInputChange('userEmail', text);
            }}
          />
          <TouchableOpacity style={styles.chkbutton}>
            <Text style={styles.smallText}>인증하기</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>인증 완료되었습니다.</Text>
        <View style={styles.textView}>
          <TouchableOpacity disabled={true} style={styles.textBox}>
            <Text style={styles.text}>비밀번호</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={text => {
              handleCheck('userPassword', text);
            }}
          />
        </View>
        <View style={[styles.textView, {marginTop: 10}]}>
          <TouchableOpacity disabled={true} style={styles.textBox}>
            <Text style={styles.text}>비밀번호 확인</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={text => {
              handleCheck('userPasswordchk', text);
            }}
          />
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>{passchk}</Text>
        <TouchableOpacity onPress={handleClick} style={styles.registerBtn}>
          <Text style={{fontSize: 25, color: '#000'}}>가입하기</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 13,
    color: '#1A6F3F',
  },
  smallText: {
    fontSize: 11,
    color: '#555',
  },
  textInput: {
    width: 190,
    height: 40,
    fontSize: 15,
    borderWidth: 3,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: '#1A6F3F',
    justifyContent: 'center',
  },
  dateInput: {
    width: 190,
    height: 40,
    fontSize: 15,
    paddingLeft: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#1A6F3F',
    justifyContent: 'center',
    color: '#000',
  },
  chkbutton: {
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 52,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  numInput: {
    fontSize: 15,
    height: 40,
    borderWidth: 1,
    borderBottomColor: '#aaa',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginRight: 5,
  },
  registerBtn: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    margin: 30,
    backgroundColor: '#FCE466',
    borderRadius: 15,
  },
  textBox: {
    width: 90,
    alignItems: 'flex-end',
    paddingRight: 13,
  },
});

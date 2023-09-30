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
import Config from 'react-native-config';

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

  const [nameText, setNameText] = useState(
    '영어 대소문자, 숫자만 입력 가능합니다.',
  );
  const [emailText, setEmailText] = useState('이메일을 인증해주세요.');
  const [emailNumText, setEmailNumText] = useState('');
  const [emailNum, setEmailNum] = useState('');
  const [passChk, setPassChk] = useState('');

  const [nameChk, setNameChk] = useState(false);
  const [emailChk, setEmailChk] = useState(false);
  const [emailNumChk, setEmailNumChk] = useState(false);
  const [TOSIsChecked, setTOSisChecked] = useState(false);
  const [privacyPolicyIsChecked, setPrivacyPolicyisChecked] = useState(false);
  const [fourteenIsChecked, setFourteenisChecked] = useState(false);

  const toggleTOSCheckbox = () => {
    setTOSisChecked(!TOSIsChecked);
  };
  const togglePrivacyPolicyCheckbox = () => {
    setPrivacyPolicyisChecked(!privacyPolicyIsChecked);
  };
  const toggleFourteenCheckbox = () => {
    setFourteenisChecked(!fourteenIsChecked);
  };

  const handleTextInputChange = (inputText: string) => {
    // 영어 소문자, 대문자, 숫자만 허용
    const filteredText = inputText.replace(/[^a-zA-Z0-9]/g, '');
    handleInputChange('userNickname', filteredText);
  };

  const checkUsername = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/api/users/checkUsername?username=${user.userNickname}`,
        {
          params: {
            userNickname: user.userNickname,
          },
        },
      );
      if (response.data === true) {
        setNameText('사용 가능한 아이디입니다.');
        setNameChk(true);
      } else {
        Alert.alert(
          '같은 아이디가 사용 중입니다.',
          '다른 아이디를 입력해주세요.',
        );
        setNameText('영어 대소문자, 숫자만 입력 가능합니다.');
        setNameChk(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const mailCheck = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/api/users/mailCheck?mail=${user.userEmail}&userNumber=${emailNum}`,
      );
      console.log(response.data);
      if (response.data === true) {
        setEmailNumText('인증 번호가 일치합니다.');
        setEmailNumChk(true);
      } else {
        setEmailNumText('인증 번호가 다릅니다. 다시 시도하세요.');
        setEmailNumChk(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const mailSend = async () => {
    try {
      const response = await axios.post(
        `${Config.API_URL}/api/users/mailSend?mail=${user.userEmail}`,
      );
      if (response.data.success === true) {
        Alert.alert('인증 메일 전송', '메일함을 확인해주세요.');
        setEmailText('인증 메일을 전송하였습니다.');
      } else {
        Alert.alert('전송 실패', '이메일 주소를 다시 확인해주세요.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const checkEmail = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/api/users/checkEmail?email=${user.userEmail}`,
        {
          params: {
            userNickname: user.userNickname,
          },
        },
      );
      if (response.data === true) {
        mailSend();
        setEmailChk(true);
      } else {
        Alert.alert(
          '이미 사용 중인 이메일입니다.',
          '다른 이메일을 입력해주세요.',
        );
        setEmailChk(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleCheck = (key: string, value: string) => {
    handleInputChange(key, value);
    if (user.userPassword === value || user.userPasswordchk === value) {
      setPassChk('비밀번호가 일치합니다.');
    } else {
      setPassChk('비밀번호가 다릅니다. 다시 입력해주세요.');
    }
  };

  function handleClick() {
    console.log(user);
    if (
      user.userPassword === user.userPasswordchk &&
      user.userEmail !== '' &&
      user.userNickname !== '' &&
      user.userPassword !== '' &&
      nameChk &&
      emailChk &&
      emailNumChk &&
      TOSIsChecked &&
      privacyPolicyIsChecked &&
      fourteenIsChecked
    ) {
      axios
        .post(`${Config.API_URL}/api/users/register`, {
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
    } else if (!nameChk) {
      Alert.alert('회원가입 실패', '아이디를 확인해주세요.');
    } else if (!emailChk) {
      Alert.alert('회원가입 실패', '이메일을 확인해주세요.');
    } else if (!emailNumChk) {
      Alert.alert('회원가입 실패', '이메일 인증번호를 확인해주세요.');
    } else if (!TOSIsChecked) {
      Alert.alert('회원가입 실패', '서비스 이용약관에 동의해주세요.');
    } else if (!privacyPolicyIsChecked) {
      Alert.alert('회원가입 실패', '개인정보 처리방침에 동의해주세요.');
    } else if (!fourteenIsChecked) {
      Alert.alert('회원가입 실패', '만 14세 이상만 가입할 수 있습니다.');
    } else {
      Alert.alert('회원가입 실패', '입력한 값을 다시 확인해주세요.');
    }
  }

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'회원가입'} />
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View>
          <View style={styles.textView}>
            <TouchableOpacity disabled={true} style={styles.textBox}>
              <Text style={styles.text}>아이디</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              onChangeText={text => {
                handleTextInputChange(text);
              }}
              value={user.userNickname}
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.chkbutton} onPress={checkUsername}>
              <Text style={styles.smallText}>중복확인</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>
            {nameText}
          </Text>
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
            <TouchableOpacity style={styles.chkbutton} onPress={checkEmail}>
              <Text style={styles.smallText}>인증하기</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>
            {emailText}
          </Text>
          <View style={styles.textView}>
            <TouchableOpacity disabled={true} style={styles.textBox}>
              <Text style={styles.text}>인증 번호</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={text => {
                setEmailNum(text);
              }}
            />
            <TouchableOpacity style={styles.chkbutton} onPress={mailCheck}>
              <Text style={styles.smallText}>확인하기</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>
            {emailNumText}
          </Text>
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
          <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>
            {passChk}
          </Text>

          <TouchableOpacity onPress={toggleTOSCheckbox}>
            <View style={styles.Checkbox}>
              <View
                style={[
                  styles.CheckboxBtn,
                  {borderColor: TOSIsChecked ? '#26e' : 'gray'},
                ]}>
                {TOSIsChecked && <View style={styles.CheckboxBtnSelect} />}
              </View>
              <Text>(필수) </Text>
              <TouchableOpacity onPress={() => navigation.navigate('TOS')}>
                <Text style={{textDecorationLine: 'underline'}}>
                  서비스 이용약관
                </Text>
              </TouchableOpacity>
              <Text>에 동의합니다.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={togglePrivacyPolicyCheckbox}>
            <View style={styles.Checkbox}>
              <View
                style={[
                  styles.CheckboxBtn,
                  {borderColor: privacyPolicyIsChecked ? '#26e' : 'gray'},
                ]}>
                {privacyPolicyIsChecked && (
                  <View style={styles.CheckboxBtnSelect} />
                )}
              </View>
              <Text>(필수) </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                <Text style={{textDecorationLine: 'underline'}}>
                  개인정보 처리방침
                </Text>
              </TouchableOpacity>
              <Text>에 동의합니다.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleFourteenCheckbox}>
            <View style={styles.Checkbox}>
              <View
                style={[
                  styles.CheckboxBtn,
                  {borderColor: fourteenIsChecked ? '#26e' : 'gray'},
                ]}>
                {fourteenIsChecked && <View style={styles.CheckboxBtnSelect} />}
              </View>
              <Text>(필수) 만 14세 이상입니다.</Text>
            </View>
          </TouchableOpacity>
        </View>
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

  Checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 5,
  },
  CheckboxBtn: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  CheckboxBtnSelect: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: '#26e',
  },
});

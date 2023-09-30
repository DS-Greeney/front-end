import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {AppContext} from '../components/Common/Context';
import axios from 'axios';
import Config from 'react-native-config';

export default function Login({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [id, setUserId] = useState('');

  const {userId, setUserId} = useContext(AppContext);

  // function handleAuth() {
  //   async () => {
  //     try {
  //       const response = await axios.get('http://10.0.2.2:8082/api/users/auth');
  //       console.log(response.data || []);

  //       userAuth.id = response.data.userId;
  //       userAuth.isAuth = true;
  //       userAuth.nickname = response.data.userNickname;
  //       userAuth.email = response.data.userEmail;
  //       userAuth.phoneNum = response.data.userPhonenum;
  //       userAuth.birth = response.data.userBirthdate;
  //       userAuth.gender = response.data.userGender;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  // }

  function handleClick() {
    // navigation.navigate('MainNavigator', {screen: 'Homepage'});
    if (email.trim() === '') {
      Alert.alert('아이디 입력 확인', '아이디가 입력되지 않았습니다.');
    } else if (password.trim() === '') {
      Alert.alert('비밀번호 입력 확인', '비밀번호가 입력되지 않았습니다.');
    } else {
      axios
        .post(`${Config.API_URL}/api/users/login`, {
          userNickname: email,
          userPassword: password,
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.success === true) {
            console.log('로그인 성공');
            // console.log(response.data.userId);
            // setUserId(response.data.userId);
            // setUserId(response.data.userId);
            setUserId(response.data.userId);
            console.log('userId:', userId);
            navigation.navigate('MainNavigator', {screen: 'Homepage'});
          } else {
            Alert.alert('로그인 실패', '아이디나 비밀번호를 확인하세요.');
            setEmail('');
            setPassword('');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <SafeAreaView style={styles.loginpage}>
      <View style={styles.header}>
        <Text style={styles.title}>로그인</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.langWrapper}>
          <Text style={styles.langText}>Language</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="아이디를 입력하세요"
          placeholderTextColor={'#005F29'}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="비밀번호를 입력하세요"
          placeholderTextColor={'#005F29'}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={handleClick}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.findWrap}>
          <TouchableOpacity style={styles.search}>
            <Text style={styles.findtext}>아이디 찾기</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.search}>
            <Text style={styles.findtext}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.push('SignUp')}>
          <Text style={styles.signupText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginpage: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 38,
  },
  title: {
    textAlign: 'center',
    color: '#005F29',
    fontSize: 36,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  langWrapper: {
    borderBottomWidth: 1,
    borderColor: '#005F29',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  langText: {
    fontSize: 20,
    color: '#005F29',
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
  loginBtn: {
    backgroundColor: '#005F29',
    width: '100%',
    height: 70,
    marginVertical: 10,
    flexShrink: 0,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 28,
  },
  signupBtn: {
    backgroundColor: '#FCE466',
    width: '100%',
    height: 70,
    marginVertical: 10,
    flexShrink: 0,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#2E2E2E',
    fontSize: 28,
  },
  line: {
    width: 1,
    height: 20,
    backgroundColor: '#c6c6c6',
    marginHorizontal: 10,
    border: 'none',
  },
  findWrap: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 20,
  },
  findtext: {
    color: '#717171',
    fontSize: 14,
  },
});

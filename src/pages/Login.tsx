import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          placeholder="이메일을 입력하세요"
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
        <TouchableOpacity style={styles.loginBtn}>
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

        <TouchableOpacity style={styles.signupBtn}>
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

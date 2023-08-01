import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

import Header from '../components/Common/Header';
import FilterBtn from '../components/filter/FilterBtn';

export default function SignUp() {
  let navigation = useNavigation();

  Date.prototype.format = function(f) {
    if (!this.valueOf()) return ' ';
    var d = this;
    return f.replace(/(yyyy|MM|dd)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            default: return $1;
        }
    });
  };

  String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
  String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
  Number.prototype.zf = function(len){return this.toString().zf(len);};

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const placeholder = '날짜를 입력해주세요';
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    onChangeText(date.format('yyyy년 MM월 dd일'));
    handleInputChange('userBirthdate', date.format('yyyyMMdd'));
  };

  const [selectArea, setSelectArea] = useState('전체');

  const handleFilterClick = (name: string) => {
    setSelectArea(name);
    handleInputChange('userGender', name);
  };

  const dummySpotData=[
    {
      userNickname: '강수민',
      userEmail: 'ski03257@naver.com',
      userPassword: '1234',
      userPhonenum: '01033972435',
      userBirthdate: '20001030',
      userGender: 2,
    },
  ];

  interface UserModel {
    userNickname: string;
    userEmail: string;
    userPassword: string;
    userPhonenum: string;
    userBirthdate: string;
    userGender: string;
  }
  const [user, setUser] = useState<UserModel>({
    userNickname: '',
    userEmail: '',
    userPassword: '',
    userPhonenum: '',
    userBirthdate: '',
    userGender: '',
  });

  const genderList = ['남자', '여자', '선택 안 함'];

  const handleInputChange = (key: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  function handleClick() {
    // console.log(user);
    axios
      .post('http://localhost:8081/api/users/register', {
        userNickname: user.userNickname,
        userEmail: user.userEmail,
        userPassword: user.userPassword,
        userPhonenum: user.userPhonenum,
        userBirthdate: user.userBirthdate,
        userGender: user.userGender,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={[styles.view]}>
      <Header navigation={navigation} type={'BACK'} title={'회원가입'} />
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 50}]}>닉네임</Text>
          <TextInput
            style={[styles.textInput]}
            onChangeText={text => {
              handleInputChange('userNickname', text);
            }}></TextInput>
          <TouchableOpacity style={[styles.chkbutton]}>
            <Text style={[styles.smallText]}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>사용할 수 있는 닉네임입니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 50}]}>이메일</Text>
          <TextInput
            keyboardType="email-address"
            style={[styles.textInput]}
            onChangeText={text => {
              handleInputChange('userEmail', text);
            }}></TextInput>
          <TouchableOpacity style={[styles.chkbutton]}>
            <Text style={[styles.smallText]}>인증하기</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>인증 완료되었습니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 37}]}>비밀번호</Text>
          <TextInput style={[styles.textInput]}></TextInput>
        </View>
        <View style={[styles.textView, {marginTop: 10}]}>
          <Text style={[styles.text, {marginRight: 10}]}>비밀번호 확인</Text>
          <TextInput style={[styles.textInput]}> </TextInput>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>비밀번호가 일치합니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 22}]}>휴대폰 번호</Text>
          <TextInput
            keyboardType="phone-pad"
            maxLength={11}
            style={[styles.numInput, {width: 190}]}
            onChangeText={text => {
              handleInputChange('userPhonenum', text);
            }}></TextInput>
          <TouchableOpacity style={[styles.chkbutton]}>
            <Text style={[styles.smallText]}>인증하기</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>인증 완료되었습니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 37}]}>생년월일</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              pointerEvents="none"
              style={[styles.dateInput]}
              placeholder={placeholder}
              placeholderTextColor="#333"
              underlineColorAndroid="transparent"
              editable={false}
              value={text}
              onChangeText={text => {
                handleInputChange('userBirthdate', text);
              }}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 60}]}>성별</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#999',
              alignItems: 'center',
              justifyContent: 'center',
              height: 22,
              width: 42,
              backgroundColor: '#fff',
              borderRadius: 15,
            }}>
            <Text style={[styles.smallText]}>남자</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#999',
              alignItems: 'center',
              justifyContent: 'center',
              height: 22,
              width: 42,
              backgroundColor: '#fff',
              borderRadius: 15,
              marginLeft: 10,
            }}>
            <Text style={[styles.smallText]}>여자</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#999',
              alignItems: 'center',
              justifyContent: 'center',
              height: 22,
              width: 62,
              backgroundColor: '#fff',
              borderRadius: 15,
              marginLeft: 10,
            }}>
            <Text style={[styles.smallText]}>선택 안 함</Text>
          </TouchableOpacity>
        </View>
        {genderList.map((area, idx) => {
          if (selectArea.includes(area)) {
            return (
              <FilterBtn
                key={idx}
                name={area}
                selected={true}
                onPress={handleFilterClick}
              />
            );
          } else {
            return (
              <FilterBtn
                key={idx}
                name={area}
                selected={false}
                onPress={handleFilterClick}
              />
            );
          }
        })}
        <TouchableOpacity
          onPress={handleClick}
          style={{
            borderWidth: 0,
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            margin: 30,
            backgroundColor: '#FCE466',
            borderRadius: 15,
          }}>
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
    paddingHorizontal: 30,
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
});

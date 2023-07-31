import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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

export default function SignUp() {
  // const [userName, setUserName] = useState('');
  // const [useremail, setUserEmail] = useState('');
  // const [userpassword, setUserPassword] = useState('');
  // const [userPasswordchk, setUserPasswordchk] = useState('');
  // const [userPhoneNum, setUserPhoneNum] = useState('');
  // const [userBirth, setUserBirth] = useState('');
  // const [userGender, setUserGender] = useState('');

  // const genderListData = [
  //   {id: 1, menu: '남자'},
  //   {id: 2, menu: '여자'},
  //   {id: 3, menu: '선택 안 함'},
  // ];

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
    onChangeText(date.format('yyyy년 MM월 dd일')); //백에 보낼 때 yyyyMMdd로
  };

  return (
    <View style={[styles.view]}>
      <ScrollView>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 50}]}>닉네임</Text>
          <TextInput style={[styles.textInput]}> </TextInput>
          <TouchableOpacity style={[styles.chkbutton]}>
            <Text style={[styles.smallText]}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>사용할 수 있는 닉네임입니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 50}]}>이메일</Text>
          <TextInput style={[styles.textInput]}> </TextInput>
          <TouchableOpacity style={[styles.chkbutton]}>
            <Text style={[styles.smallText]}>인증하기</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>인증 완료되었습니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 37}]}>비밀번호</Text>
          <TextInput style={[styles.textInput]}> </TextInput>
        </View>
        <View style={[styles.textView, {marginTop: 10}]}>
          <Text style={[styles.text, {marginRight: 10}]}>비밀번호 확인</Text>
          <TextInput style={[styles.textInput]}> </TextInput>
        </View>
        <Text style={[styles.smallText, {marginLeft: 120, marginTop: 5}]}>비밀번호가 일치합니다.</Text>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {marginRight: 22}]}>휴대폰 번호</Text>
          <TextInput style={[styles.numInput, {width: 35}]}> </TextInput>
          <Text style={{fontSize: 27, color: '#333'}}>-</Text>
          <TextInput style={[styles.numInput, {width: 45}]}> </TextInput>
          <Text style={{fontSize: 27, color: '#333'}}>-</Text>
          <TextInput style={[styles.numInput, {width: 45}]}> </TextInput>
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
        <TouchableOpacity
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  textView: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
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

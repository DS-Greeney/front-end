import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Common/Header';
import {useNavigation} from '@react-navigation/native';

const withdrawal = () => {
  Alert.alert(
    '탈퇴',
    '정말로 탈퇴하시겠습니까?',
    [
      {text: '취소', onPress: () => {}},
      {
        text: '탈퇴',
        onPress: () => {
          //onDelete(id);
        },
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {},
    },
  );
};

const logout = () => {
  Alert.alert(
    '로그아웃',
    '로그아웃하시겠습니까?',
    [
      {text: '취소', onPress: () => {}},
      {
        text: '로그아웃',
        onPress: () => {
          //onDelete(id);
        },
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {},
    },
  );
};

export default function Mypage() {
  let navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'HOME'} title={'마이페이지'} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          disabled={true}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            width: 100,
            marginTop: 20,
            marginHorizontal: 20,
            backgroundColor: '#ccc',
            borderRadius: 50,
          }}></TouchableOpacity>
        {/* <Image source={require('')} /> */}
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 25}}>닉네임</Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#aaa',
                alignItems: 'center',
                justifyContent: 'center',
                height: 27,
                width: 90,
                margin: 5,
                backgroundColor: '#fff',
                borderRadius: 20,
                marginLeft: 80,
              }}>
              <Text style={{color: '#000'}}>닉네임 변경</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={true}
            style={{
              borderWidth: 0,
              alignItems: 'center',
              justifyContent: 'center',
              height: 27,
              width: 155,
              marginBottom: 5,
              backgroundColor: '#1A6F3F',
              borderRadius: 20,
            }}>
            <Text style={{color: '#fff'}}>존경받는 환경 보호 영웅</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 15}}>이메일: abc@abc.com</Text>
          <Text style={{fontSize: 15}}>휴대폰 번호: 010-000-000</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#aaa',
            alignItems: 'center',
            justifyContent: 'center',
            height: 27,
            width: 90,
            marginTop: 5,
            marginLeft: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
          }}>
          <Text style={{color: '#000'}}>이미지 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#aaa',
            alignItems: 'center',
            justifyContent: 'center',
            height: 27,
            width: 90,
            margin: 5,
            backgroundColor: '#fff',
            borderRadius: 20,
          }}>
          <Text style={{color: '#000'}}>칭호 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#aaa',
            alignItems: 'center',
            justifyContent: 'center',
            height: 27,
            width: 90,
            margin: 5,
            backgroundColor: '#fff',
            borderRadius: 20,
            marginLeft: 80,
          }}
          onPress={() => logout()}>
          <Text style={{color: '#000'}}>로그아웃</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity disabled={true} style={[styles.box, {height: 280}]}>
            <TouchableOpacity style={styles.btnView1}>
              <Icon name="list-alt" size={32} color="#1A6F3F" style={{marginRight: 5}} />
              <Text style={{fontSize: 20, color: '#000'}}>내가 쓴 글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnView1}>
              <Icon name="wechat" size={32} color="#1A6F3F" style={{marginRight: 5}} />
              <Text style={{fontSize: 20, color: '#000'}}>내가 댓글 단 글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnView1}>
              <Icon name="rate-review" size={32} color="#1A6F3F" style={{marginRight: 5}} />
              <Text style={{fontSize: 20, color: '#000'}}>내가 쓴 후기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnView1}>
              <Icon name="shopping-cart" size={32} color="#1A6F3F" style={{marginRight: 5}} />
              <Text style={{fontSize: 20, color: '#000'}}>찜한 목록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnView1}>
              <IconC name="medal" size={32} color="#1A6F3F" style={{marginRight: 5}} />
              <Text style={{fontSize: 20, color: '#000'}}>달성한 도전 과제</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={[styles.box, {height: 240}]}>
            <Text style={[styles.titleText]}>설정</Text>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>비밀번호 변경</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>이메일 및 휴대폰 재인증</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>언어 설정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>알림 설정</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={[styles.box, {height: 320}]}>
            <Text style={[styles.titleText]}>이용 안내</Text>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>앱 버전</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>문의하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>공지사항</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>서비스 이용약관</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnView2]}>
              <Text style={{fontSize: 20, color: '#000'}}>개인정보 처리방침</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnView2]}
              onPress={() => withdrawal()}>
              <Text style={{fontSize: 20, color: '#000'}}>회원탈퇴</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollView: {
    height: 490,
    marginHorizontal: 30,
  },
  btnView1: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
  },
  btnView2: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingVertical: 7,
  },
  titleText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 10,
    marginTop: 10,
  },
  box: {
    borderWidth: 2,
    borderColor: '#999',
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
  },
});

import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Common/Header';
// import {useNavigation} from '@react-navigation/native';

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

const logout = ({navigation}: any) => {
  Alert.alert(
    '로그아웃',
    '로그아웃하시겠습니까?',
    [
      {text: '취소', onPress: () => {}},
      {
        text: '로그아웃',
        onPress: () => {
          //onDelete(id);
          // axios
          //   .get('http://10.0.2.2:8082/api/users/logout')
          //   .then(function (response) {
          //     console.log(response.data);
          //     if (response.data.success === true) {
          //       console.log('로그아웃 성공');
          //       navigation.navigate('Login');
          //     } else {
          //       Alert.alert('로그아웃 실패', '관리자에게 문의하세요.');
          //     }
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //   });
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
  const [userId, setUserId] = useState('');

  interface UserModel {
    userNickname: string;
    userEmail: string;
    userPassword: string;
    userPhonenum: string;
    userPicture: string;
    userTitle: string;
  }

  const [user, setUser] = useState<UserModel>({
    userNickname: '',
    userEmail: '',
    userPassword: '',
    userPhonenum: '',
    userPicture: '',
    userTitle: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // function handleClick() {
  //   axios
  //     .post('http://10.0.2.2:8082/api/users/info', {
  //       userId: '1',
  //     })
  //     .then(function (response) {
  //       handleInputChange('userNickname', response.data.userNickname);
  //       handleInputChange('userPassword', response.data.userPassword);
  //       handleInputChange('userPhonenum', response.data.userPhonenum);
  //       handleInputChange('userPicture', response.data.userPicture);
  //       handleInputChange('userTitle', response.data.userTitle);
  //       handleInputChange('userEmail', response.data.userEmail);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  useEffect(() => {
    axios
      .post('http://10.0.2.2:8082/api/users/info', {
        userId: '1',
      })
      .then(function (response) {
        // console.log(response);
        handleInputChange('userNickname', response.data.userNickname);
        handleInputChange('userPassword', response.data.userPassword);
        handleInputChange('userPhonenum', response.data.userPhonenum);
        handleInputChange('userPicture', response.data.userPicture);
        handleInputChange('userTitle', response.data.userTitle);
        handleInputChange('userEmail', response.data.userEmail);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'MY'} title={'마이페이지'} />
      {/* type={'HOME'} 지움 */}
      <View style={{flexDirection: 'row'}}>
        {user.userPicture === '' ? (
          <Image
            source={require('../assets/images/home/dummy_user.png')}
            style={styles.image}
          />
        ) : (
          <Image source={{uri: user.userPicture}} style={styles.image} />
        )}

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 25}}>{user.userNickname}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              disabled={true}
              style={{
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
                height: 27,
                marginBottom: 5,
                backgroundColor: '#1A6F3F',
                borderRadius: 20,
                paddingHorizontal: 10,
              }}>
              <Text style={{color: '#fff'}}>{user.userTitle}</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 15}}>이메일: {user.userEmail}</Text>
          <Text style={{fontSize: 15}}>휴대폰 번호: {user.userPhonenum}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={{color: '#000'}}>이미지 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={{color: '#000'}}>닉네임 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={{color: '#000'}}>칭호 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSmall} onPress={() => logout()}>
          <Text style={{color: '#000'}}>로그아웃</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.scrollView}>
            <TouchableOpacity disabled={true} style={[styles.box, {height: 280}]}>
              <TouchableOpacity style={styles.btnView1}>
                <Icon
                  name="list-alt"
                  size={32}
                  color="#1A6F3F"
                  style={{marginRight: 5}}
                />
                <Text style={{fontSize: 20, color: '#000'}}>내가 쓴 글</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView1}>
                <Icon
                  name="wechat"
                  size={32}
                  color="#1A6F3F"
                  style={{marginRight: 5}}
                />
                <Text style={{fontSize: 20, color: '#000'}}>내가 댓글 단 글</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView1}>
                <Icon
                  name="rate-review"
                  size={32}
                  color="#1A6F3F"
                  style={{marginRight: 5}}
                />
                <Text style={{fontSize: 20, color: '#000'}}>내가 쓴 후기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView1}
                onPress={() => navigation.navigate('Likelist')}>
                <IconC
                  name="cards-heart"
                  size={30}
                  color="#1A6F3F"
                  style={{marginRight: 5}}
                />
                <Text style={{fontSize: 20, color: '#000'}}>찜한 목록</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView1}>
                <IconC
                  name="medal"
                  size={32}
                  color="#1A6F3F"
                  style={{marginRight: 5}}
                />
                <Text style={{fontSize: 20, color: '#000'}}>
                  달성한 도전 과제
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} style={[styles.box, {height: 240}]}>
              <Text style={[styles.titleText]}>설정</Text>
              <TouchableOpacity style={[styles.btnView2]}>
                <Text style={{fontSize: 20, color: '#000'}}>비밀번호 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnView2]}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  이메일 및 휴대폰 재인증
                </Text>
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
                <Text style={{fontSize: 20, color: '#000'}}>
                  개인정보 처리방침
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnView2]}
                onPress={() => withdrawal()}>
                <Text style={{fontSize: 20, color: '#000'}}>회원탈퇴</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
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
    marginHorizontal: 30,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 50,
  },
  btnSmall: {
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    width: 90,
    marginHorizontal: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
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
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
});

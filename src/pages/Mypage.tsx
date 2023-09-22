import React, {useEffect, useState, useContext} from 'react';
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
import {AppContext} from '../components/Common/Context';
import axios from 'axios';
import {NavigationProp} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Common/Header';
import TitleChange from '../components/Common/TitleChange';
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
          // onDelete(id);
          axios
            .get('http://10.0.2.2:8082/api/users/logout')
            .then(function (response) {
              console.log(response.data);
              if (response.data.success === true) {
                console.log('로그아웃 성공');
                navigation.navigate('Login');
              } else {
                Alert.alert('로그아웃 실패', '관리자에게 문의하세요.');
              }
            })
            .catch(function (error) {
              console.log(error);
            });
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
  const {userId} = useContext(AppContext);

  let navigation = useNavigation();
  //const [userId, setUserId] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  interface UserModel {
    userNickname: string;
    userEmail: string;
    userPassword: string;
    userPicture: string;
    userTitle: string;
  }

  const [user, setUser] = useState<UserModel>({
    userNickname: '',
    userEmail: '',
    userPassword: '',
    userPicture: '',
    userTitle: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const ChangePassword = () => {
    // const pass = '';
    // ChangePasswordAxios(pass);
    Alert.alert(
      '비밀번호 변경',
      '정말 비밀번호를 변경하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '변경',
          onPress: () => navigation.navigate('PassChangePage', {userId}),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  const ChangeNickname = () => {
    Alert.alert(
      '아이디 변경',
      '정말 아이디를 변경하시겠습니까?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '변경',
          onPress: () => navigation.navigate('NicknameChangePage', {userId}),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  useEffect(() => {
    axios
      .post('http://10.0.2.2:8082/api/users/info', {
        userId: userId,
      })
      .then(function (response) {
        // console.log(response);
        console.log('id: ', userId);
        handleInputChange('userNickname', response.data.userNickname);
        handleInputChange('userPassword', response.data.userPassword);
        handleInputChange('userPicture', response.data.userPicture);
        handleInputChange('userTitle', response.data.userTitle);
        handleInputChange('userEmail', response.data.userEmail);
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId]);

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'마이페이지'} />
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        {user.userPicture === '' ? (
          <Image
            source={require('../assets/images/home/dummy_user.png')}
            style={styles.image}
          />
        ) : (
          <Image source={{uri: user.userPicture}} style={styles.image} />
        )}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 25}}>{user.userNickname}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity disabled={true} style={styles.title}>
              <Text style={{color: '#fff'}}>{user.userTitle}</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 15}}>이메일: {user.userEmail}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.scrollView}>
            <TouchableOpacity disabled={true} style={styles.box}>
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
              <TouchableOpacity
                style={styles.btnView1}
                onPress={() => navigation.navigate('ChallengeAchieve')}>
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
            <TouchableOpacity disabled={true} style={styles.box}>
              <Text style={styles.titleText}>설정</Text>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => toggleModal()}>
                <Text style={{fontSize: 20, color: '#000'}}>칭호 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => ChangeNickname()}>
                <Text style={{fontSize: 20, color: '#000'}}>아이디 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => ChangePassword()}>
                <Text style={{fontSize: 20, color: '#000'}}>이미지 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => ChangePassword()}>
                <Text style={{fontSize: 20, color: '#000'}}>비밀번호 변경</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} style={styles.box}>
              <Text style={styles.titleText}>이용 안내</Text>
              <View style={styles.rowView}>
                <Text style={{fontSize: 20, color: '#000'}}>앱 버전</Text>
                <Text style={{fontSize: 20, color: '#000'}}>1.0.0</Text>
              </View>
              <TouchableOpacity style={styles.btnView2}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  서비스 이용약관
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView2}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  개인정보 처리방침
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => logout(navigation)}>
                <Text style={{fontSize: 20, color: '#000'}}>로그아웃</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
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
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#999',
    marginHorizontal: 15,
  },
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
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  rowView: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    marginBottom: 5,
    backgroundColor: '#1A6F3F',
    borderRadius: 20,
    paddingHorizontal: 10,
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

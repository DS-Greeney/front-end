import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import ImagePicker, {
  launchImageLibrary,
  launchCamera,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../components/Common/Context';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Common/Header';
import TitleChangeModal from './Settings/TitleChangeModal';
import Config from 'react-native-config';
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
            .get(`${Config.API_URL}/api/users/logout`)
            .then(function (response) {
              // console.log(response.data);
              if (response.data.success === true) {
                console.log('로그아웃 성공');
                navigation.navigate('Login');
              } else {
                Alert.alert('오류', '다시 시도해주세요');
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
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
            goWithdraw();
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  const goWithdraw = async () => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:8082/api/users/delete',
        {
          userId: userId,
        },
      );
      if (response.data.success === true) {
        Alert.alert('탈퇴 되었습니다.');
        navigation.navigate('Login');
      } else {
        Alert.alert('오류', '다시 시도해주세요');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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

  const [selectedImage, setSelectedImage] = useState<string>();

  const handleInputChange = (key: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: '카메라 권한 요청',
            message: '앱이 카메라를 사용하려고 합니다.',
            buttonNeutral: '나중에 물어보기',
            buttonNegative: '거부',
            buttonPositive: '허용',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('카메라 권한 허용됨');
          openImagePicker();
        } else {
          console.log('카메라 권한 거부됨');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      openImagePicker();
    }
  };

  const openImagePicker = () => {
    console.log('userPicture :', user.userPicture);
    const options = {
      mediaType: 'photo' as const,
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('이미지 선택 취소');
      } else if (response.errorCode) {
        console.error('이미지 선택 오류:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // 이미지 선택이 성공하면 selectedImages 배열에 이미지 경로를 추가합니다.
        const imagePath = response.assets[0].uri;
        console.log('imagePath', imagePath);
        console.log('response', response);
        if (imagePath !== undefined) {
          setSelectedImage(imagePath);
          //changeProfile();
          changeProfile(imagePath);
        } else {
          // imagePath가 undefined일 때 수행할 동작 또는 오류 처리
          console.error('오류가 발생하였습니다');
        }
        // setSelectedImage(prevImages => {
        //   if (selectedImage) {
        //     // 이미지 경로가 존재할 때만 추가'
        //     console.log(imagePath);
        //     return imagePath;
        //   } else {
        //     return prevImages; // 이미지 경로가 없으면 이전 상태 그대로 반환
        //   }
        // });
      } else {
        console.error('이미지 선택 오류');
      }
    });
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

  const changeProfile = async (imagePath: string) => {
    //console.log('changeProfile: ', selectedImage);
    try {
      const formData = new FormData();
      const fileName = 'profile_image1.jpg';

      formData.append('image', {
        uri: imagePath,
        type: 'image/jpeg',
        name: fileName,
      });

      // 서버 엔드포인트 URL을 여기에 적어주세요
      const apiUrl = `http://10.0.2.2:8082/greeney/mypage/settings/profileImage/${userId}`;

      // Axios를 사용하여 POST 요청을 보냅니다.
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 서버 응답 처리
      if (response.status === 200) {
        // 성공적으로 작성된 경우
        console.log('이미지가 성공적으로 변경되었습니다.', response.data);
        setLoading(!loading);
        // 추가적인 작업을 수행하거나 화면을 업데이트할 수 있습니다.
      } else {
        console.error('이미지 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  useEffect(() => {
    axios
      .post(`${Config.API_URL}/api/users/info`, {
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
        console.log(response.data.userPicture);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId, loading]);

  // useEffect(() => {
  //   // selectedImage가 변경될 때마다 changeProfile 함수를 호출
  //   changeProfile();
  // }, [selectedImage]);

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'마이페이지'} />
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        {/* <View style={styles.userImg}> */}
        {user.userPicture === '' ? (
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/greeney-a996b.appspot.com/o/profile.png?alt=media&token=943e4fe4-50b1-4c02-883d-8925d136fcbe',
            }}
            style={styles.profileImg}
          />
        ) : (
          <Image source={{uri: user.userPicture}} style={styles.profileImg} />
        )}
        {/* </View> */}
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
              <TitleChangeModal
                isVisible={isModalVisible}
                toggleModal={toggleModal}
              />
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => ChangeNickname()}>
                <Text style={{fontSize: 20, color: '#000'}}>아이디 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => requestCameraPermission()}>
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
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => navigation.navigate('TOS')}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  서비스 이용약관
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView2}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
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
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#555',
  },
  profileImg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginHorizontal: 20,
    borderRadius: 50,
    // height: 100,
    // width: 100,
    // borderRadius: 50,
    // overflow: 'hidden',
    // backgroundColor: '#555',
    // width: '100%',
    // height: '100%',
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

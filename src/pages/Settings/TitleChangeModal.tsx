import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';
import Config from 'react-native-config';

const TitleChangeModal = ({isVisible, toggleModal}) => {
  const {userId} = useContext(AppContext);

  const [challengeInfo, setChallengeInfo] = useState({
    userTitleList: [],
    userNowTitle: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setChallengeInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `${Config.API_URL}/greeney/mypage/challengeInfo?userId=${userId}`,
      );
      // console.log(response.data);
      handleInputChange('userNowTitle', response.data.userNowTitle);
      handleInputChange('userTitleList', response.data.userTitleList);
      // console.log(challengeInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOptionSelect = (option: string) => {
    console.log(challengeInfo.userNowTitle);
    setChallengeInfo({
      ...challengeInfo,
      userNowTitle: option,
    });
  };

  const changeTitle = async (title: string) => {
    try {
      const response = await axios.post(
        `${Config.API_URL}/greeney/mypage/updateTitle?userId=${userId}&title=${title}`,
      );
      // console.log(response.data);
      Alert.alert('알림', '칭호가 변경되었습니다.');
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('경고', '칭호에 실패하였습니다. 다시 시도해주세요.');
    }
    toggleModal();
  };

  return (
    <Modal
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.5}
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onRequestClose={toggleModal}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.title}>칭호 변경</Text>
          <ScrollView>
            <View style={styles.body}>
              {challengeInfo.userTitleList.map(option => {
                return (
                  <TouchableOpacity
                    onPress={() => handleOptionSelect(option)}
                    style={styles.selectBox}>
                    <View style={styles.selectBtn}>
                      {challengeInfo.userNowTitle === option && (
                        <View style={styles.selectedBtn} />
                      )}
                    </View>
                    <Text style={{color: '#000', fontSize: 16}}>{option}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.Btn}>
            <TouchableOpacity
              onPress={() => changeTitle(challengeInfo.userNowTitle)}
              style={styles.changeBtn}>
              <Text style={styles.btnText}>바꾸기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.closeBtn}>
              <Text style={styles.btnText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default TitleChangeModal;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    alignItems: 'center',
    width: '75%',
    height: '35%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: '#000',
    padding: 10,
    // marginBottom: 10,
    // color: '#eee',
    // fontWeight: 'bold',
    // width: '100%',
    // borderTopRightRadius: 20,
    // backgroundColor: '#005F29',
  },
  body: {
    height: '60%',
    width: '100%',
  },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectBtn: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedBtn: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  Btn: {
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 16,
    color: '#eee',
  },
  closeBtn: {
    borderRadius: 30,
    height: 30,
    width: 90,
    backgroundColor: '#aaa',
    borderColor: '#888',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  changeBtn: {
    borderRadius: 30,
    height: 30,
    width: 90,
    backgroundColor: '#005F29',
    borderColor: '#004a25',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

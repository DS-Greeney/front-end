import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';

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
        `http://10.0.2.2:8082/greeney/mypage/challengeInfo?userId=${userId}`,
        {
          userId: userId,
        },
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
              {challengeInfo.userTitleList.map(option => (
                <TouchableOpacity
                  onPress={() => handleOptionSelect(option)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}>
                    {selectedOption === option && (
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          backgroundColor: '#000',
                        }}
                      />
                    )}
                  </View>
                  <Text style={{color: '#000', fontSize: 16}}>{challengeInfo.userTitleList}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={styles.Btn}>
            <TouchableOpacity onPress={toggleModal} style={styles.changeBtn}>
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
    width: '70%',
    height: '32%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: '#000',
    padding: 10,
  },
  body: {
    flex: 1,
    height: '60%',
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

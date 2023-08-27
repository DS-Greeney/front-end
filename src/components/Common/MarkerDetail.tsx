import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {NavigationProp} from '@react-navigation/native';

interface propType {
  navigation: NavigationProp<any>;
}

const MarkerDetail = ({navigation}: propType) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSidebar = () => {
    setModalVisible(false);
  };

  const menuList = ['마이페이지', '일일 도전과제', '찜 목록', '언어 설정'];

  const menuURL = ['Mypage', 'Mypage', 'LikelistPage', 'Mypage'];

  return (
    <View style={styles.headtitle}>
      <View style={styles.logoImg}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/home/logo.png')}
        />
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="menu" size={30} />
      </TouchableOpacity>

      {/* 모달창 */}
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={closeSidebar}
        style={{margin: 0}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={{margin: 10}}>
              <Icon name="close" size={30} color={'#000'} />
            </TouchableOpacity>

            <View style={styles.userInfo}>
              <View style={styles.userImg}>
                <Image
                  style={styles.img}
                  source={require('../../assets/images/home/dummy_user.png')}
                />
              </View>
              <Text style={styles.username}>그린</Text>
              <View style={styles.userStack}>
                <Text style={styles.stackname}>에코그린세포</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default MarkerDetail;

const styles = StyleSheet.create({
  headtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  logoImg: {
    flex: 1,
    marginLeft: 30,
    alignItems: 'center',
  },
  logo: {
    width: 161,
    height: 43,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    width: '57%',
    alignSelf: 'flex-end',
  },
  userInfo: {
    alignItems: 'center',
    marginVertical: 10,
  },
  userImg: {
    width: 84,
    height: 84,
    borderRadius: 50,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  username: {
    fontSize: 20,
    color: '#393939',
    marginVertical: 8,
  },
  userStack: {
    width: 'auto',
    height: 'auto',
    borderRadius: 30,
    backgroundColor: '#005F29',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 5,
  },
  stackname: {
    color: '#fff',
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#B1B1B1',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  menuContainer: {
    marginHorizontal: 30,
  },
  menuname: {
    color: '#000',
    fontSize: 16,
    marginVertical: 10,
  },
  logoutBtn: {
    color: '#E10000',
    fontSize: 16,
    marginVertical: 10,
  },
});

import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {NavigationProp} from '@react-navigation/native';

interface propType {
  navigation: NavigationProp<any>;
}

const TitleChange = ({navigation}: propType) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0.5}
      onBackdropPress={closeModal}>
      <Text>모달</Text>
    </Modal>
  );
};
export default TitleChange;

const styles = StyleSheet.create({
});

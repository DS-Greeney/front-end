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
import Icon from 'react-native-vector-icons/MaterialIcons';

const MapModal = ({modalVisible, setModalVisible, title, add}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onBackdropPress={() => {
        setModalVisible(!modalVisible);
      }}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 100}}>
        <View style={{backgroundColor: '#1A6F3F', padding: 20, width: '100%', borderRadius: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#eee'}}>{title}</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Icon
                name="cancel"
                size={20}
                color="#eee"
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 15, color: '#eee'}}>{add}</Text>
        </View>
      </View>
    </Modal>
  );
};
export default MapModal;

const styles = StyleSheet.create({

});

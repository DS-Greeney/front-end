import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../../components/Common/Header';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MessageComponent from '../../components/Common/MessageComponent';
import axios from 'axios';
import Config from 'react-native-config';

export default function ChatbotPage() {
  let navigation = useNavigation();
  const [messages, setMessages] = useState(
    [] as {id: number; text: string; sender: string}[],
  );
  const [inputText, setInputText] = useState('');

  const sendQuestion = async () => {
    if (inputText.trim() !== '') {
      try {
        const response = await axios.post(
          `${Config.API_URL}/greeney/main/chat`,
          {
            question: inputText,
          },
        );
        console.log(response.data || []);
        if (response.data.success === false) {
          Alert.alert('일시적 오류', '메시지 전송에 실패하였습니다.');
        } else {
          const newMessagesUser = [
            ...messages,
            {id: messages.length, text: inputText, sender: 'user'},
            {
              id: messages.length + 1,
              text: response.data.trim(),
              sender: 'Chatbot',
            },
          ];
          setMessages(newMessagesUser);
        }
        setInputText('');
      } catch (error) {
        Alert.alert('일시적 오류', '메시지 전송에 실패하였습니다.');
        console.error('Error fetching data:', error);
      }
    } else {
      Alert.alert('공백 감지', '질문을 입력해주세요!');
    }
  };

  return (
    <View style={styles.view}>
      <Header navigation={navigation} type={'BACK'} title={'그리니 챗봇'} />
      <View style={styles.flatList}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <MessageComponent message={item.text} sender={item.sender} />
          )}
        />
      </View>
      <KeyboardAvoidingView style={styles.keyboard}>
        <View style={styles.sendBox}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            multiline
            onChangeText={text => {
              setInputText(text);
            }}
            placeholder="무엇이든 물어보세요!"
          />
          <TouchableOpacity style={{backgroundColor: '#005F29', margin: 10, padding: 7, borderRadius: 10}} onPress={sendQuestion}>
            <Icon name="send" size={36} color="#eee" style={{}} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    flex: 1,
  },
  flatList: {
    marginHorizontal: 20,
    flex: 6.5,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sendBox: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  textInput: {
    width: '80%',
    flexShrink: 0,
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#005F29',
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#005F29',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageComponent = ({ message, sender }) => {
  const isUser = sender === 'user';
  const bubbleColor = isUser ? '#005F29' : '#E0E0E0';
  const textColor = isUser ? 'white' : 'black';

  return (
    <View
      style={[
        styles.messageContainer,
        {alignSelf: isUser ? 'flex-end' : 'flex-start'},
      ]}>
      <View style={[styles.messageBubble, {backgroundColor: bubbleColor}]}>
        <Text style={[styles.messageText, {color: textColor}]}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 10,
  },
  messageBubble: {
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
  },
});

export default MessageComponent;

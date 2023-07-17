import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="회원가입" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

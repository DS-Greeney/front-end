import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Login() {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <SafeAreaView>
        <View style={styles.header}>
            <Text>로그인</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  num: number;
  keyword: string;
}
interface propType {
  data: dataType;
  navigation: NavigationProp<any>;
}

const SearchTopKeyword = ({data, navigation}: propType) => {
  return (
    <TouchableOpacity style={styles.btnView2}>
      <TouchableOpacity disabled={true} style={styles.btnView1}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>{data.num}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{data.keyword}</Text>
    </TouchableOpacity>
  );
};
export default SearchTopKeyword;

const styles = StyleSheet.create({
  btnView1: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginRight: 10,
    width: 23,
  },
  btnView2: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
});

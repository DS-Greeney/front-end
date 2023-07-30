import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder={'검색어를 입력해주세요'}
        autoFocus
      />
      <Image
        style={styles.searchImage}
        source={require('../../assets/images/home/search_glass.png')}
      />
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    width: 340,
    height: 37,
    backgroundColor: '#F3F3F3',
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 2,
    marginBottom: 20,
  },
  searchImage: {
    width: 23,
    height: 23,
  },
});

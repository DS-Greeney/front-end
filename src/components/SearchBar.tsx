import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

interface propType {
  placeholderText: string;
}

const SearchBar = ({placeholderText}: propType) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholderText}
          // autoFocus
        />
        <Image
          style={styles.searchImage}
          source={require('../assets/images/home/search_glass.png')}
        />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  searchBar: {
    width: 340,
    height: 40,
    backgroundColor: '#F3F3F3',
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 2,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchImage: {
    width: 20,
    height: 20,
    marginRight: 30,
  },
});

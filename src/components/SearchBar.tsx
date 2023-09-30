import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

interface propType {
  placeholderText: string;
  searchText: string;
  onSearch: (text: string) => void;
  onSearchButtonPress: () => void;
}

const SearchBar = ({
  placeholderText,
  searchText,
  onSearch,
  onSearchButtonPress,
}: propType) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholderText}
          value={searchText}
          onChangeText={onSearch}
          // autoFocus
        />
        <TouchableOpacity onPress={onSearchButtonPress}>
          <Image
            style={styles.searchImage}
            source={require('../assets/images/home/search_glass.png')}
          />
        </TouchableOpacity>
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
    marginBottom: 15,
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

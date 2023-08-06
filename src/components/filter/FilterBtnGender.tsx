import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface propType {
  name: string;
  selected: boolean;
  onPress: (name: string) => any;
}

const FilterBtnGender = ({ name, selected, onPress }: propType) => {
  return (
    <TouchableOpacity style={styles.btnwrap} onPress={() => onPress(name)}>
      {selected ? (
        <View style={styles.selectedwrap}>
          <Text style={styles.selectedtext}>{name}</Text>
        </View>
      ) : (
        <View style={styles.nonewrap}>
          <Text style={styles.nonetext}>{name}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnwrap: {
  },
  selectedwrap: {
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 58,
    backgroundColor: '#005F29',
    borderRadius: 15,
    marginLeft: 10,
  },
  nonewrap: {
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 58,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginLeft: 10,
  },
  selectedtext: {
    color: '#fff',
    fontSize: 11,
  },
  nonetext: {
    fontSize: 11,
    color: '#555',
  },
});

export default FilterBtnGender;

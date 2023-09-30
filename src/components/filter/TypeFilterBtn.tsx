import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface propType {
  key: number;
  name: string;
  selected: boolean;
  onPress: (name: string) => any;
}

const TypeFilterBtn = ({name, selected, onPress}: propType) => {
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
  selectedwrap: {
    width: 98,
    height: 37,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#005F29',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  nonewrap: {
    width: 98,
    height: 35,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedtext: {
    color: '#fff',
  },
  nonetext: {
    color: '#000',
  },
});

export default TypeFilterBtn;

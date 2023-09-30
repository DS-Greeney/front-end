import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import TypeFilterBtn from './TypeFilterBtn';

interface propType {
  typeList: string[];
  func: (typeText: string) => any;
}

const TypeFilterList = ({typeList, func}: propType) => {
  const [selectedType, setSelectedType] = useState('관광');

  const handleFilterClick = (name: string | '관광') => {
    setSelectedType(name);

    return func(name);
  };

  return (
    <View style={styles.filtercontainer}>
      {typeList.map((type, idx) => {
        if (selectedType.includes(type)) {
          return (
            <TypeFilterBtn
              key={idx}
              name={type}
              selected={true}
              onPress={handleFilterClick}
            />
          );
        } else {
          return (
            <TypeFilterBtn
              key={idx}
              name={type}
              selected={false}
              onPress={handleFilterClick}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  filtercontainer: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

export default TypeFilterList;

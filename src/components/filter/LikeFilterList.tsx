import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LikeFilterBtn from './LikeFilterBtn';

interface propType {
  typeList: string[];
  func: (typeText: string) => any;
}

const LikeFilterList = ({typeList, func}: propType) => {
  const [selectedType, setSelectedType] = useState('전체');

  const handleFilterClick = (name: string | '전체') => {
    setSelectedType(name);

    return func(name);
  };

  return (
    <View style={styles.filtercontainer}>
      {typeList.map((type, idx) => {
        if (selectedType.includes(type)) {
          return (
            <LikeFilterBtn
              key={idx}
              name={type}
              selected={true}
              onPress={handleFilterClick}
            />
          );
        } else {
          return (
            <LikeFilterBtn
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

export default LikeFilterList;

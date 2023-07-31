import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import FilterBtn from '../../components/filter/FilterBtn';

interface propType {
  areaList: string[];
}

const FilterList = ({areaList}: propType) => {
  const [selectArea, setSelectArea] = useState('전체');

  const handleFilterClick = (name: string) => {
    setSelectArea(name);
  };

  return (
    <ScrollView horizontal={true} style={styles.filtercontainer}>
      {areaList.map((area, idx) => {
        if (selectArea.includes(area)) {
          return (
            <FilterBtn
              key={idx}
              name={area}
              selected={true}
              onPress={handleFilterClick}
            />
          );
        } else {
          return (
            <FilterBtn
              key={idx}
              name={area}
              selected={false}
              onPress={handleFilterClick}
            />
          );
        }
      })}
    </ScrollView>
  );
};

export default FilterList;

const styles = StyleSheet.create({
  filtercontainer: {
    marginHorizontal: 25,
  },
});

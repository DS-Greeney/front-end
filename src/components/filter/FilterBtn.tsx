import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface propType {
  key: number;
  name: string;
  selected: boolean;
  onPress: (name: string) => any;
}

// useEffect(() => {
//   axios
//     .post('http://10.0.2.2:8082/api/users/info', {
//       userId: userId,
//     })
//     .then(function (response) {
//       // console.log(response);
//       console.log('id: ', userId);
//       handleInputChange('userNickname', response.data.userNickname);
//       handleInputChange('userPassword', response.data.userPassword);
//       handleInputChange('userPhonenum', response.data.userPhonenum);
//       handleInputChange('userPicture', response.data.userPicture);
//       handleInputChange('userTitle', response.data.userTitle);
//       handleInputChange('userEmail', response.data.userEmail);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }, [userId]);

const FilterBtn = ({name, selected, onPress}: propType) => {
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
  btnwrap: {},
  selectedwrap: {
    width: 65,
    height: 31,
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
    width: 65,
    height: 31,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
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

export default FilterBtn;

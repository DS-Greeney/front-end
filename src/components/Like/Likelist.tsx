import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface dataType {
  image: string;
  name: string;
  location: string;
  type: string;
  tags: string[] | '';
}
// interface propType {
//   data: dataType;
//   navigation: NavigationProp<any>;
// }

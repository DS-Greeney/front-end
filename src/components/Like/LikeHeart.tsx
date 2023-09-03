import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {useState} from 'react';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

interface dataType {
  size: number;
}

const LikeHeart = ({size}: dataType) => {
  const [heart, setHeart] = useState(false);

  const toggleHeart = () => {
    setHeart(previousState => !previousState);
  };

  return (
    <TouchableOpacity onPress={toggleHeart}>
      {heart ? (
        <IconC name="cards-heart" size={size} color={'#1A6F3F'} />
      ) : (
        <IconC name="cards-heart-outline" size={size} color={'#1A6F3F'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default LikeHeart;

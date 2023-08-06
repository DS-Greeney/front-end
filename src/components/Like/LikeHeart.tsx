import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {useState} from 'react';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

const LikeHeart = () => {
  const [heart, setHeart] = useState(false);

  const toggleHeart = () => {
    setHeart(previousState => !previousState);
  };

  return (
    <TouchableOpacity onPress={toggleHeart}>
      {heart ? <IconC name="cards-heart" size={40} color={'#1A6F3F'}></IconC> : <IconC name="cards-heart-outline" size={40} color={'#1A6F3F'}></IconC>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
});

export default LikeHeart;

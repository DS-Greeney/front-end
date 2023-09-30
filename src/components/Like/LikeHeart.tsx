import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Config from 'react-native-config';

interface dataType {
  category: number;
  size: number;
  likeState: number;
  setLikeState: any;
  itemId: number | undefined;
  userId: number | undefined;
}

const LikeHeart = ({
  category,
  size,
  likeState,
  setLikeState,
  itemId,
  userId,
}: dataType) => {
  const [heart, setHeart] = useState(false);

  const clickLike = async () => {
    // setHeart(previousState => !previousState);
    console.log(likeState, itemId, userId);
    try {
      const response = await axios.post(
        `${Config.API_URL}/greeney/mypage/like?userId=${userId}&itemId=${itemId}`,
      );
      console.log(response.data);
      setLikeState((prev: number) => prev + 1);
      setHeart(response.data.like);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const cancleLike = async () => {
    // setHeart(previousState => !previousState);
    try {
      const response = await axios.delete(
        `${Config.API_URL}/greeney/mypage/dislike?categoryNumber=${category}&spotId=${itemId}&userId=${userId}`,
      );
      console.log(response.data);
      setLikeState(0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const toggleHeart = () => {
  //   setHeart(previousState => !previousState);
  //   // setLike(0);
  // };

  return (
    <TouchableOpacity
      onPress={() => {
        likeState === 1 ? cancleLike() : clickLike();
      }}>
      {likeState === 1 ? (
        <IconC name="cards-heart" size={size} color={'#1A6F3F'} />
      ) : (
        <IconC name="cards-heart-outline" size={size} color={'#1A6F3F'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default LikeHeart;

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface dataType {
  challengeId: number;
  complete: number;
  content: string;
}

interface propType {
  challenges: dataType[];
  stateData: number;
}

const ImageState = ({challenges, stateData}: propType) => {
  const [state, setState] = useState(stateData || 0);

  useEffect(() => {
    if (stateData) {
      setState(stateData);
    }
  }, [stateData]);

  console.log('stateData', state);

  return (
    <View style={styles.ringWrap}>
      {challenges.map((challenge, index) => {
        //  (challenge.complete === 1) {
        //   count += 1;
        // }
        return (
          <Image
            key={index}
            style={styles.laurelImg}
            source={
              // challenge.complete === 1
              state > index
                ? // count > index
                  require('../../assets/images/challenge/do_laurel.png')
                : require('../../assets/images/challenge/undo_laurel.png')
            }
            onError={error => {
              console.error('Error loading image:', error);
            }}
          />
        );
      })}
    </View>
  );
};
export default ImageState;

const styles = StyleSheet.create({
  ringWrap: {
    flexDirection: 'row',
  },
  laurelImg: {
    width: 60,
    height: 60,
    marginHorizontal: 15,
  },
});

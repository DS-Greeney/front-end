import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {Rating} from 'react-native-ratings';

interface RatingModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

const RatingModal = ({isVisible, onClose, onSubmit}: RatingModalProps) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    onSubmit(rating);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>별점 입력</Text>
          <Rating
            showRating
            onFinishRating={handleRatingChange}
            style={{paddingVertical: 10}}
          />
          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.submitButton, {marginRight: 5}]}>
              <Text style={styles.submitButtonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.cancelButton, {marginLeft: 5}]}>
              <Text style={styles.cancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#393939',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#005F29',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    borderStyle: 'solid',
    borderColor: '#005F29',
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  cancelButtonText: {
    color: '#005F29',
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RatingModal;

import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker, {
  launchImageLibrary,
  launchCamera,
  ImagePickerResponse,
} from 'react-native-image-picker';
import axios from 'axios';
import {AppContext} from '../../components/Common/Context';

interface dataType {
  userNickname: string;
  tourspotCmntContent: string;
  tourspotCmntTime: string;
  tourCmntImg: string[];
  tourspotCmntStar: number;
  userPicture: string; //확인필요
}

interface propType {
  itemId: number;
  reviewData: dataType[];
}

const ReviewPost = ({itemId, reviewData}: propType) => {
  console.log(reviewData);
  const {userId} = useContext(AppContext);
  let [inputCount, setInputCount] = useState(0);
  const [content, setContent] = useState('');
  const [star, setStar] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const commentDTO = {
    spotId: itemId,
    userId: userId,
    cmntContent: content,
    cmntStar: star,
    categoryNumber: 1,
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: '카메라 권한 요청',
            message: '앱이 카메라를 사용하려고 합니다.',
            buttonNeutral: '나중에 물어보기',
            buttonNegative: '거부',
            buttonPositive: '허용',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('카메라 권한 허용됨');
          openImagePicker();
        } else {
          console.log('카메라 권한 거부됨');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      openImagePicker();
    }
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo' as const,
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('이미지 선택 취소');
      } else if (response.errorCode) {
        console.error('이미지 선택 오류:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // 이미지 선택이 성공하면 selectedImages 배열에 이미지 경로를 추가합니다.
        const imagePath = response.assets[0].uri;
        setSelectedImages(prevImages => {
          if (imagePath) {
            // 이미지 경로가 존재할 때만 추가
            return [...prevImages, imagePath];
          } else {
            return prevImages; // 이미지 경로가 없으면 이전 상태 그대로 반환
          }
        });
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('spotId', itemId);
      formData.append('userId', userId);
      formData.append('cmntContent', content);
      formData.append('cmntStar', Number(star));
      formData.append('categoryNumber', 1);

      selectedImages.forEach((imagePath, index) => {
        const fileName = `image_${index}.jpg`;
        formData.append('images', {
          uri: imagePath,
          type: 'image/jpeg',
          name: fileName,
        });
      });

      // 서버 엔드포인트 URL을 여기에 적어주세요
      const apiUrl = `http://10.0.2.2:8082/greeney/main/tourlist/detail/${itemId}`;

      // Axios를 사용하여 POST 요청을 보냅니다.
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 서버 응답 처리
      if (response.status === 200) {
        // 성공적으로 작성된 경우
        console.log('리뷰가 성공적으로 작성되었습니다.');
        // 추가적인 작업을 수행하거나 화면을 업데이트할 수 있습니다.
      } else {
        console.error('리뷰 작성에 실패했습니다.');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  // 이미지 가져오기
  // const onSelectImage = () => {
  //   launchImageLibrary(
  //     {
  //       madiaType: 'photo',
  //       maxWidth: 512,
  //       maxHeight: 512,
  //       includeBase64: true,
  //     },
  //     response => {
  //       console.log(response);
  //       // console.log(response.assets[0].base64)
  //       if (response.didCancel) {
  //         return;
  //       } else if (response.errorCode) {
  //         console.log('Image Error : ' + response.errorCode);
  //       }

  //       setResponse(response);
  //       setImageFile(response.assets[0].base64);
  //     },
  //   );
  // };

  return (
    <View style={styles.container}>
      {/* 리뷰작성 */}
      <View>
        <View style={styles.view2}>
          <Text style={styles.text}>리뷰(14)</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            value={content}
            onChangeText={event => {
              setContent(event);
              setInputCount(event.length); //replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").
            }}
            textAlignVertical="top"
            multiline
            editable
            numberOfLines={4}
            maxLength={200}
            style={{height: 100}}
            placeholder="여러분의 소중한 여행 후기를 남겨주세요"
            placeholderTextColor="#C2C2C2"
          />
          {selectedImages.length >= 1 ? (
            <View style={{flexDirection: 'row'}}>
              {selectedImages.map((imagePath, index) => (
                <Image
                  key={index}
                  source={{uri: imagePath}}
                  style={{width: 20, height: 20, marginRight: 5}}
                />
              ))}
            </View>
          ) : (
            <View style={{height: 20}} />
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>{inputCount}/200자</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.star}>
                <Icon
                  name="star-rate"
                  size={18}
                  color="#D4D4D4"
                  style={{marginRight: 5}}
                />
                <Text style={{marginRight: 5, color: '#D4D4D4', fontSize: 14}}>
                  0 / 5
                </Text>
              </View>
              <TouchableOpacity>
                <Icon
                  name="camera-alt"
                  size={22}
                  color="#000"
                  style={{marginRight: 5}}
                  // onPress={() => onSelectImage()}
                  onPress={requestCameraPermission}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="send"
                  size={22}
                  color="#000"
                  style={{marginRight: 10}}
                  onPress={handleSubmit}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* //리뷰 목록 */}
      {reviewData.map((review, index) => (
        <View key={index}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              disabled={true}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 45,
                width: 45,
                marginLeft: 20,
                marginRight: 10,
                backgroundColor: '#ccc',
                borderRadius: 50,
                overflow: 'hidden',
              }}>
              <Image
                style={styles.userImg}
                source={require('../../assets/images/home/dummy_user.png')}
              />
            </TouchableOpacity>
            <View>
              <Text style={{fontSize: 15, color: '#000'}}>
                {review.userNickname}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star-rate" size={16} color="#FCE25F" />
                <Text style={{fontSize: 12, color: '#000'}}>
                  {review.tourspotCmntStar}
                </Text>
                <Text style={{fontSize: 12, marginLeft: 10}}>
                  {review.tourspotCmntTime}
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={{
              uri: 'https://pacer-note-images.pacer.cc/234360796_C22E336D-7AD9-4D0F-A742-B6D5F65B5172_1572620274.jpg',
            }}
            style={styles.image3}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              marginHorizontal: 40,
              marginBottom: 40,
            }}>
            {review.tourspotCmntContent}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default ReviewPost;

const styles = StyleSheet.create({
  view2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: '#000',
    fontSize: 14,
    flex: 1,
  },
  extext: {
    color: '#666',
    fontSize: 14,
    width: 70,
  },
  textInput: {
    width: 350,
    height: 150,
    fontSize: 15,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#1A6F3F',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 30,
    paddingLeft: 10,
  },
  star: {
    flexDirection: 'row',
    marginRight: 10,
  },
  image3: {
    width: 310,
    height: 150,
    resizeMode: 'cover',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 40,
  },
  userImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

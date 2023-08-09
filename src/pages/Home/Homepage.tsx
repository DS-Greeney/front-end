import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
// import MainDrawerNavigator from '../../navigation/DrawerNavigator';
// import {NavigationContainer} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {DrawerActions, NavigationProp} from '@react-navigation/native';
import Header from '../../components/Common/Header';
import SideBar from '../../components/Common/SideBar';

export default function Homepage({navigation}: any) {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  const ImageMenuArray = [
    {
      image: require('../../assets/images/home/tour.png'),
      text: '생태 관광',
    },
    {
      image: require('../../assets/images/home/hotel.png'),
      text: '친환경 호텔',
    },
    {
      image: require('../../assets/images/home/restaurant.png'),
      text: '비건 식당',
    },
    {
      image: require('../../assets/images/home/market.png'),
      text: '여행 상품',
    },
    {
      image: require('../../assets/images/home/course.png'),
      text: 'AI 추천코스',
    },
    {
      image: require('../../assets/images/home/community.png'),
      text: '커뮤니티',
    },
    // require 사용하여 정적 이미지 불러오기.
  ];

  const swiperData = [
    {
      title: '요즘 떠오르는 친환경 관광',
      image: [
        require('../../assets/images/home/swiper1_main.png'),
        require('../../assets/images/home/swiper5_main.jpg'),
        require('../../assets/images/home/swiper4_main.png'),
      ],
    },
    {
      title: '누구나 참여 가능! 친환경 축제',
      image: [
        require('../../assets/images/home/swiper2_main.png'),
        require('../../assets/images/home/swiper6_main.png'),
        require('../../assets/images/home/swiper3_main.png'),
      ],
    },
    {
      title: '여행을 더욱 특별하게 만들어주는 여행 상품',
      image: [
        require('../../assets/images/home/swiper8_main.png'),
        require('../../assets/images/home/swiper9_main.png'),
        require('../../assets/images/home/swiper7_main.png'),
      ],
    },
  ];

  // 페이지 추가 시 수정하기
  const navigateList = [
    'TourSpot',
    'Homepage',
    'Restaurant',
    'Homepage',
    'Homepage',
    'Homepage',
  ];

  // const openDrawer = () => {
  //   navigation.openDrawer();
  // };

  return (
    <View style={styles.home}>
      {/* 헤더 */}
      <View style={styles.header}>
        <SideBar navigation={navigation} />
        {/* <View style={styles.headtitle}>
          <View style={styles.logoImg}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/home/logo.png')}
            />
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={30} style={styles.icon} />
          </TouchableOpacity>

          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={toggleModal}>
                  <Text>Close Menu</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View> */}
        {/* <Header
          title={''}
          type={'MAIN'}
          navigation={navigation}
          img={'../../assets/images/home/logo.png'}
        /> */}
        <SearchBar placeholderText={'어디로 여행을 떠날 예정이신가요?'} />
      </View>

      <ScrollView horizontal={false} style={styles.container}>
        <View style={styles.menuContainer}>
          {ImageMenuArray.map((menuList, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                style={styles.menuItem}
                onPress={() =>
                  navigation.navigate(navigateList[idx], {
                    screen: navigateList[idx],
                  })
                }>
                <View style={styles.menuwrap}>
                  <Image style={styles.images} source={menuList.image} />
                  <Text style={styles.title}>{menuList.text}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.slide}>
          {swiperData.map((item, index) => (
            <View style={styles.slideItem} key={index}>
              <Text style={styles.slidetitle}>{item.title}</Text>
              <Swiper
                style={styles.wrapper}
                loop={true}
                showsPagination={false}
                autoplay
                autoplayTimeout={4}
                showsButtons={true}
                //버튼 이미지
                prevButton={
                  <Image
                    style={styles.prevBtnImage}
                    source={require('../../assets/images/home/prev_btn.png')}
                  />
                }
                nextButton={
                  <Image
                    style={styles.nextBtnImage}
                    source={require('../../assets/images/home/next_btn.png')}
                  />
                }>
                {/* <View style={styles.slide} key={index}> */}
                {/* <View style={styles.imageContainer} key={index}> */}
                {item.image.map((image, idx) => (
                  <Image
                    key={idx}
                    source={image}
                    style={styles.slideimage}
                    resizeMode="cover"
                  />
                ))}
                {/* </View> */}
                {/* </View> */}
              </Swiper>
            </View>
          ))}
        </View>

        {/* // 메뉴 6가지 부분 */}
        {/* <View style={styles.mainMenu}> */}
        {/* {ImageArray.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Image style={styles.images} source={item} />
              <Text>{TextArray[index]}</Text>
            </View>
          ))} */}
        {/* <FlatList
            data={ImageArray}
            renderItem={({item, index}) => (
              <View key={index} style={styles.menuItem}>
                <Image source={item.image} />
                <Text style={styles.title}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index}
            numColumns={3}
            style={styles.flist}
          /> */}
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    // alignItems: 'center',
  },
  // headtitle: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginVertical: 15,
  //   marginHorizontal: 30,
  // },
  // logoImg: {
  //   flex: 1,
  //   marginLeft: 30,
  //   alignItems: 'center',
  // },
  // logo: {
  //   width: 161,
  //   height: 43,
  // },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // modalContent: {
  //   backgroundColor: '#fff',
  //   padding: 20,
  // },
  images: {
    width: 54,
    height: 54,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMenu: {
    // paddingLeft: 48,
    // paddingRight: 48,
  },
  menuwrap: {
    textAlign: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  menuItem: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // paddingBottom: 10,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    color: '#000',
    fontSize: 13,
  },
  slide: {
    flex: 1,
  },
  slideItem: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  slidetitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  wrapper: {
    height: 200,
  },
  prevBtnImage: {
    width: 40,
    height: 40,
  },
  nextBtnImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});

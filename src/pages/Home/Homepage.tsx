import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';

export default function Homepage({navigation}: any) {
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
        require('../../assets/images/home/swiper2_main.png'),
        require('../../assets/images/home/swiper3_main.png'),
      ],
    },
    {
      title: '누구나 참여 가능! 친환경 축제',
      image: [
        require('../../assets/images/home/swiper2_main.png'),
        require('../../assets/images/home/swiper3_main.png'),
        require('../../assets/images/home/swiper1_main.png'),
      ],
    },
    {
      title: '여행을 더욱 특별하게 만들어주는 여행 상품',
      image: [
        require('../../assets/images/home/swiper3_main.png'),
        require('../../assets/images/home/swiper1_main.png'),
        require('../../assets/images/home/swiper2_main.png'),
      ],
    },
  ];

  // 페이지 추가 시 수정하기
  const navigateList = [
    'TourSpot',
    'Homepage',
    'Homepage',
    'Homepage',
    'Homepage',
    'Homepage',
  ];

  return (
    <View style={styles.home}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View style={styles.headtitle}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/home/logo.png')}
          />
        </View>
        <SearchBar placeholderText={'어디로 여행을 떠날 예정이신가요?'} />
      </View>

      <ScrollView horizontal={false} style={styles.container}>
        <View style={styles.menuContainer}>
          {ImageMenuArray.map((menuList, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                style={styles.menuItem}
                onPress={() => navigation.navigate(navigateList[idx])}>
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
                //버튼 이미지로 넣었음 ㅋ 나중에 커스텀 해야함
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
    alignItems: 'center',
  },
  headtitle: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    width: 161,
    height: 43,
  },
  images: {
    width: 54,
    height: 54,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
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

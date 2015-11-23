'use strict';

import React from 'react-native';
import Swiper from 'react-native-swiper';

let {
  View,
  Component,
  Image,
  StyleSheet,
  Text
} = React;

let styles = StyleSheet.create({
  //slider
  wrapper: {
      height:80
  },
  //在React-Native中图片的大小是不会根据给定一个宽度或者高度而自适应大小的，
  //如果需要让图片根据宽度或者高度来自适应，那么可以使用resizeMode:Image.resizeMode.contain
  slide: {
      height:80,
      // resizeMode: Image.resizeMode.contain
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
});

let sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

class Slider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} showsPagination={false}>
        <Image style={[styles.slide]} source={{uri: sliderImgs[0]}}></Image>
        <Image style={[styles.slide]} source={{uri: sliderImgs[1]}}></Image>
        <Image style={[styles.slide]} source={{uri: sliderImgs[2]}}></Image>
      </Swiper>
    );
  }
}

export {Slider};

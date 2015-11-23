'use strict';

//导入依赖库
import React from 'react-native';
let {
  StyleSheet,
  Text,
  Animated,
  Easing,
  Component,
  Image
} = React;

var styles = StyleSheet.create({
  pic: {
    width: 100,
    height: 100
  }
});

class SlidingBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slidingAnimationValue: new Animated.ValueXY({ x: 0, y: 0 })
    }
  }

  render() {
    //获取初始transform样式
    const slidingAnimationStyle = this.state
                                      .slidingAnimationValue
                                      .getTranslateTransform();

    return (
      <Animated.View style={slidingAnimationStyle}>
        <Text>Sliding...</Text>
        <Image style={styles.pic} source={{uri:'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}} />
      </Animated.View>
    );
  }

  componentDidMount() {
    const animationConfig = {
      duration: 20000,
      delay: 5000,
      easing: Easing.in(Easing.ease),
    };

    const value = this.state.slidingAnimationValue;
    const slidingInAnimation = Animated.timing(value, {
      ...animationConfig, // ES6 spread operator
      toValue: {
        x: 200,
        y: 0,
      },
    }).start();

  }
}

export {SlidingBox};

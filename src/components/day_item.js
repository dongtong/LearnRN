'use strict';

//导入依赖库
import React from 'react-native';
let {
  StyleSheet,
  Text,
} = React;

//创建组件
let DayItem = React.createClass({
  render() {
    return (
      <Text style={styles.day} >
          {this.props.day}
      </Text>
    );
  }
});

//定义样式
var styles = StyleSheet.create({
  day: {
    fontSize: 16, //默认px
    color: '#0000FF'
  }
});

//导出组件
export {DayItem};

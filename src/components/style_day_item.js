'use strict';

//导入依赖库
import React from 'react-native';
let {
  StyleSheet,
  Text,
} = React;

//创建组件
let StyleDayItem = React.createClass({
  render: function(){
    return (
      <Text style={this.style()} >
          {this.props.day}
      </Text>
    );
  },

  style: function(){
      return {
        color: this.color(),
        fontWeight: this.fontWeight(),
        fontSize: this.fontSize(),
        lineHeight: this.lineHeight()
      };
  },

  color: function() {
    var opacity = 1 / this.props.dayIndex;
    return 'rgba(0, 0, 0, ' + opacity +')';
  },

  fontWeight: function() {
    var weight = 7 - this.props.dayIndex;

    return '' + weight * 100;
  },

  fontSize: function() {
    return 60 - parseInt(6 * this.props.dayIndex, 10);
  },

  lineHeight: function() {
    return 70 - parseInt(4 * this.props.dayIndex, 10);
  }

});

//导出组件
export {StyleDayItem};

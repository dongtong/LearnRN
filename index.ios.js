/**
 * Learn React Native
 */
'use strict';

import React from 'react-native';
//var React = require('react-native');
import {DayItem} from './src/components/day_item';
import {StyleDayItem} from './src/components/style_day_item';
import {SlidingBox} from './src/components/SlidingBox/sliding_box';
import {FlexLayout} from './src/components/flex_layout';
import {NavigatorView} from './src/components/navigator_view';
import {CheckboxList} from './src/components/checkbox_list';
//http://momentjs.com/
import Moment from 'moment';
//var Moment = require('moment');
//------------------------------------


let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

const DAYS = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日'
];

//ES6 语法
let Weekday = React.createClass({
  render: function() {
    //{Moment().format('dddd')}
    return (
      //{}在jsx中表示执行javascript表达式
      <View style={styles.container}>
        {this.renderDays()}
      </View>
    );
  },

  //辅助方法，工具方法
  //这里如果有许多纪录，那么此处渲染不会导致mobile有scrollbar
  renderDays: function(){
      /*
      //map迭代器返回的是一个新的数组
      var daysItem = DAYS.map(function(day){
          //父组建通过props或者properties与子组件通信
          return <DayItem day={day} />;
      });
      // [<DayItem day={'星期一'} />, ...]
      return daysItem;
      */

      //动态生成一周
      var daysItem = [],
          day;

      for(var i = 0; i < 7; i++) {
        day = Moment().add(i, 'days').format('dddd');
        daysItem.push(
          <StyleDayItem day={day} dayIndex={i} />
        )
      }

      return daysItem;
  }

});

//ES5语法
// var Weekday = React.createClass({
//     render: function() {
//       return (
//         <View style={styles.container}>
//           <Text>
//             Day of the Week:
//           </Text>
//         </View>
//       );
//     }
// });

var App = React.createClass({
    render: function(){
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <CheckboxList />
        </View>
      );
    }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //height
    alignItems: 'center'      //width
  }
});

//这里为什么必须是LearnRN?
AppRegistry.registerComponent('LearnRN', () => App);

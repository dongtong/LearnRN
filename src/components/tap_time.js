/**
 * TapTime App
 */
'use strict';

//引入需要的库
import React from 'react-native';
//import parseMs from 'parse-ms';
import {TimeList} from './time_list';

//定义使用到的变量或者常量
let {
    AppRegistry,
    StyleSheet,
    View,
    Component,
    TouchableHighlight,
    Text,
} = React;
// => 等价
//let AppRegistry  = React.AppRegistry;
//...

//定义样式
let styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bottomView: {
      flex: 1
    },
    timeTxt: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20
    },
    touchBtn: {
      borderWidth: 1,
      height: 100,
      width: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnTxt: {
      color: '#FFFFFF',
      fontSize: 24
    },
    runningBtn: {
      backgroundColor: '#ff6c60',
      borderColor: '#ff6c60'
    },
    stopedBtn: {
      backgroundColor: '#009a61',
      borderColor: '#009a61'
    }
});

//定义组件类
let TapTime = React.createClass({
    getInitialState: function() {
        return {
          running: false,
          currTime: null,
          timeRecords: [],
          tapTimes: 0
        };
    },

    render: function() {
      return (
          <View style={styles.container}>
              <View style={styles.topView}>
                  <View>
                      <Text style={styles.timeTxt}>{this.state.currTime}</Text>
                  </View>
                  <View>
                      <TouchableHighlight onPress={this.handleTouchBtn.bind(this)} underlayColor='#51b351' style={[styles.touchBtn, this.getBtnStyle()]}>
                          <Text style={styles.btnTxt}>{this.getBtnTxt()}</Text>
                      </TouchableHighlight>
                  </View>
              </View>
              <View style={styles.bottomView}>
                  <TimeList timeRecords={this.state.timeRecords}/>
              </View>
          </View>
      );
    },

    getBtnTxt: function() {
        return this.state.running ? '停止' : '开始';
    },

    getBtnStyle: function() {
        return this.state.running ? styles.runningBtn : styles.stopedBtn;
    },

    handleTouchBtn: function(){
        if(this.state.running) {
            clearInterval(this.interval);
            this.interval = null;
            //immutable.js
            var records = this.state.timeRecords;
            records.push({
                index: '第' + this.state.tapTimes + '次: ',
                content: this.state.currTime
            })
            this.setState({
              running: false
            });
            return;
        }

        let startDate = +new Date();
        let times = this.state.tapTimes + 1;

        this.interval = setInterval( () => {
            this.setState({
                running: true,
                currTime: +new Date() - startDate,
                tapTimes: times
            })
        }, 10);
    }
});

export {TapTime};

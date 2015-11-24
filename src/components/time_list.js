/**
 * TapTime App
 */
'use strict';

//引入需要的库
import React from 'react-native';

let {
  StyleSheet,
  View,
  Text,
  Component,
  ScrollView,
} = React;

var styles = StyleSheet.create({
  timeList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#d9edf7'
  },
  times: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#d9edf7'
  },
  timeResult: {
    borderTopWidth: 1,
    borderColor: '#d9edf7'
  },
  firstLine: {},
  notFirstLine: {
    borderTopWidth: 0
  }
});

class TimeList extends Component {

    render() {
        return (
            <ScrollView>
                {this.renderTimeList()}
            </ScrollView>
        );
    }

    renderTimeList(){
      console.log(this.props.timeRecords)
      return this.props.timeRecords.map((item, index) => {
          return (
            <View style={[styles.timeList, index == 0 ? styles.firstLine : styles.notFirstLine]}>
                <Text style={styles.times}>{item.index}</Text>
                <Text style={styles.timeResult}>{item.content}</Text>
            </View>
          )
      });
    }

}

export {TimeList};

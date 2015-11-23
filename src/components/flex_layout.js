'use strict';

//导入依赖库
import React from 'react-native';
let {
  StyleSheet,
  Text,
  View,
  Component
} = React;

let styles = StyleSheet.create({
  style_0: {
    flex: 1
  },
  style_1: {
    flex: 5,
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row'
  },
  style_2: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'blue'
  },
  items: {
    borderWidth: 5,
    borderColor: 'yellow',
    width: 40,
    height: 20
  },
  left: {
    alignSelf: 'flex-start'
  },
  center: {
    alignSelf: 'center'
  },
  right: {
    alignSelf: 'flex-end'
  },
  vcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class FlexLayout extends Component {
  render() {
    return (
      <View style={styles.style_0}>
        <View style={styles.style_1}>
          <Text>Flex 5</Text>
          <Text>Flex 5</Text>
        </View>
        <View style={[styles.style_1, {flexDirection: 'column'}]}>
          <Text>Flex 5</Text>
          <Text>Flex 5</Text>
        </View>
        <View style={styles.style_2}>
          <View style={styles.items}><Text>自由摆放</Text></View>
          <View style={[styles.items, styles.left]}><Text>居左</Text></View>
          <View style={[styles.items, styles.center]}><Text>居中</Text></View>
          <View style={[styles.items, styles.vcenter]}><Text>靠右</Text></View>
        </View>
      </View>
    );
  }
}

export {FlexLayout};

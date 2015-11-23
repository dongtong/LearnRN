'use strict';

//导入依赖库
import React from 'react-native';
import {Home} from './home';

let {
  StyleSheet,
  NavigatorIOS,
  Component
} = React;

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class NavigatorView extends Component {
  render() {
    //这里NavigatorIOS的style需要设置大小，比如这里设置是flex：1，否则就不能显示内容主体；
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute= {{
          title: '首页',
          component: Home
        }} />
    );
  }
}

export {NavigatorView};

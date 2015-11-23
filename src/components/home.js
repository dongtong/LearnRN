'use strict';

//导入依赖库
import React from 'react-native';
import {Slider} from './slider';

let {
  StyleSheet,
  Text,
  View,
  Component,
  Image,
  TouchableHighlight,
  ScrollView,
} = React;

var styles = StyleSheet.create({
    //container
    container:{
        marginTop: 200,
        backgroundColor:'#F2F2F2',
        flex:1,
    },
    //sbu
    sbu_view:{
        height:84,
        marginLeft: 5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        flexDirection:'row',
    },
    sbu_red:{
        backgroundColor: '#FA6778',
        borderColor:'#FA6778',
        marginTop:-70,
    },

    sbu_blue:{
        backgroundColor: '#3D98FF',
        borderColor:'#3D98FF',
    },

    sbu_green:{
        backgroundColor: '#5EBE00',
        borderColor:'#5EBE00',
    },

    sbu_yellow:{
        backgroundColor: '#FC9720',
        borderColor:'#FC9720',
    },
    sbu_flex:{
        flex:1,
    },
    sbu_borderRight:{
        borderColor:'#fff',
        borderRightWidth: 1,
    },
    sbu_icon_img:{
        height:40,
        width:40,
        resizeMode:Image.resizeMode.contain,
    },
    sub_con_flex:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sub_text:{
        justifyContent:'center',
    },
    font16:{
        fontSize:17,
        color:'#FFF',
        fontWeight:'900',
    },
    sbu_borderBottom:{
        borderBottomWidth:0.5,
        borderBottomColor:'#fff',
    },
    img_view:{
        height:62,
        marginLeft:5,
        marginRight:5,
        flexDirection: 'row',
        marginBottom:20,
        backgroundColor:'#fff',
    },
    img_flex:{
        flex:1,
        borderWidth:1,
        borderColor:'#ccc',
    },
    img_wh: {
        height:59,
        borderRightWidth:0,
        resizeMode:Image.resizeMode.contain,
    }
});

let BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];

let Images = [
	'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

class Home extends Component {
  render() {
    return (
      <ScrollView>
          <View style={styles.container}>
              <View style={[styles.sbu_red, styles.sbu_view]}>
                  <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
                      <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                          <View style={[styles.sub_con_flex, styles.sub_text]}>
                              <Text style={[styles.font16]}>酒店</Text>
                          </View>
                          <View style={[styles.sub_con_flex]}>
                              <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
                          </View>
                      </View>
                  </TouchableHighlight>
                  <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                      <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                          <Text style={[styles.font16]}>海外</Text>
                      </View>
                      <View style={[styles.sub_con_flex, styles.sub_text]}>
                          <Text style={[styles.font16]}>周边</Text>
                      </View>
                  </View>
                  <View style={[styles.sbu_flex]}>
                      <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                          <Text style={[styles.font16]}>团购.特惠</Text>
                      </View>
                      <View style={[styles.sub_con_flex, styles.sub_text]}>
                          <Text style={[styles.font16]}>客栈.公寓</Text>
                      </View>
                  </View>
              </View>
          </View>
      </ScrollView>
    );
  }
}



export {Home};

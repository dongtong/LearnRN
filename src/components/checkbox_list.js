'use strict';

import React from 'react-native';

let {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
    chksContainer: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    chkItem: {
      margin: 4,
      height: 20,
      borderWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    chkText: {
      paddingLeft: 5,
      paddingRight: 5,
      // width: 50,
      top: 1,
      lineHeight: 30,
      height: 30,
      overflow: 'hidden'
    }
});

let defaultStyle = {
  borderColor: '#DCDCDC',
}

class CheckboxItem extends Component {
    getInitialState() {
        return {
          active: false
        };
    }

    render() {
      return (
          <TouchableHighlight style={[styles.chkItem, defaultStyle]} onPress={this._selectChk.bind(this, true)}>
              <View>
                <Text>{this.props.chkText}</Text>
              </View>
          </TouchableHighlight>
      );
    }

    _selectChk(selected) {
      this.setState({active: selected});
    }
}

class CheckboxList extends Component {
    render() {
      return(
        <View style={styles.chksContainer}>
          <CheckboxItem chkText="React"/>
          <CheckboxItem chkText="Angular"/>
          <CheckboxItem chkText="Backbone"/>
          <CheckboxItem chkText="Ember"/>
          <CheckboxItem chkText="Metor"/>
        </View>
      );
    }
}

export {CheckboxList};

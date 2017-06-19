import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Style from './Style';

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Style from './Style';
// import DetailScreen from './DetailScreen'

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
		<View>
			<Text>Hello, Chat App!</Text>
			<Button
				onPress={() => navigate('Chat')}
				title="Chat with Lucy"
			/>
		</View>
		);
	}
}

class DetailScreen extends Component {
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

const UWCourses = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: DetailScreen },
});

AppRegistry.registerComponent('UWCourses', () => UWCourses);

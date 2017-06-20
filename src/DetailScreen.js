import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Style from './Style';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Courses offered under ${navigation.state.params.subject}`,
  });

  componentDidMount() {
		this.getCourses(function(response) {
		    this.setState({
		    	items: response.data.data,
		    	results: response.data.data
		    });
		}.bind(this));
	}

	getCourses(callback) {
		var url = 'https://api.uwaterloo.ca/v2/courses/AADMS.json?key=538288408c8a53b6ae8482fc1b33a01a';
		axios
		.get(url)
		.then(response => {
			this.setState({
			  items: response.data.data,
			  results: response.data.data
			});
		}).catch(function(error) {
			console.log('There has been a problem with your axios.get operation: ' + error.message);
			throw error;
		});
	}

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Courses offered under {params.subject}</Text>
      </View>
    );
  }
}

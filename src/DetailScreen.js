import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
import axios from 'axios';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import Style from './Style';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Courses offered under ${navigation.state.params.subject}`,
  });

  constructor(props) {
		super(props);
		this.state =
		{
			hidden: true,
			items: [],
			results: [],
			posts: []
		};
	}

  componentDidMount() {
		this.getCourses(function(response) {
		    this.setState({
		    	items: response.data.data,
		    	results: response.data.data
		    });
		}.bind(this));
	}

	getCourses(callback) {
    const params = this.props.navigation.state.params;
		var url = 'https://api.uwaterloo.ca/v2/courses/'+params.subject+'.json?key=538288408c8a53b6ae8482fc1b33a01a';
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
    return (
      <View>
        <ScrollView>
        { this.state.results.map((result, i) => {
          return (
          <ButtonComponent
            key={i}
            shape='rectangle'
            backgroundColors={['#90A4AE', '#90A4AE']}
            gradientStart={{ x: 0.1, y: 1 }}
            gradientEnd={{ x: 0.9, y: 1 }}
            text={result.subject.toString()+' - '+result.catalog_number.toString()}
            onPress={() => navigate( 'Details', {subject: result.subject.toString()} ) }>
          </ButtonComponent>
          );
        })}
        </ScrollView>
      </View>
    );
  }
}

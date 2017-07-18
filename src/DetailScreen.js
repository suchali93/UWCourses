import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
import axios from 'axios';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import Style from './Style';

GLOBAL = require('./Globals');

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
			posts: [],
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
		var url = GLOBAL.BASE_URL+'courses/'+params.subject+'.json?key='+GLOBAL.KEY;
    axios
		.get(url)
		.then(response => {
			this.setState({
			  items: response.data.data,
			  results: response.data.data,
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

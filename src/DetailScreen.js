import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
import axios from 'axios';
import { Button, ButtonGroup } from 'react-native-elements';
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
      selectedIndex: 0,
			hidden: true,
			items: [],
			courses: [],
      courseDetails: [],
			posts: [],
		};
    this.updateIndex = this.updateIndex.bind(this);
	}

  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
  }

  componentDidMount() {
		this.getCourses(function(response) {
		    this.setState({
		    	items: response.data.data,
		    	courses: response.data.data,
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
			  courses: response.data.data,
			});
		}).catch(function(error) {
			console.log('There has been a problem with your axios.get operation for list of courses: ' + error.message);
			throw error;
		});
	}

  getCourseDetails(courseID) {
    var url = GLOBAL.BASE_URL+'courses/'+courseID+'.json?key='+GLOBAL.KEY;
    axios
    .get(url)
    .then(response => {
      this.setState({
        courseDetails: response.data.data,
      });
    }).catch(function(error) {
      console.log('There has been a problem with your axios.get operation for course details: ' + error.message);
      throw error;
    });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <View>
        <ScrollView>
        { this.state.courses.map((course, i) => {
          return (
            <ButtonGroup
              key={i}
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons = { [
                {
                  element: () => <Button
                                  large
                                  raised
                                  color='black'
                                  backgroundColor='white'
                                  container={{width:50}}
                                  containerViewStyle={{marginBottom: 1, marginLeft: 0, marginRight: 0}}
                                  key={i}
                                  title={course.subject.toString()+' - '+course.catalog_number.toString()}
                                  onPress={() => navigate( 'Details', {subject: course.subject.toString()} ) }
                                  />
                },
                {
                  element: () => <Text>F</Text>
                },
                {
                  element: () => <Text>W</Text>
                },
                {
                  element: () => <Text>S</Text>
                }
              ] } />
            );
          })
        }
        </ScrollView>
      </View>
    );

    // return (
    //   <ButtonGroup
    //     onPress={this.updateIndex}
    //     selectedIndex={selectedIndex}
    //     buttons={buttons}
    //     containerStyle={{height: 100}} />
    // );
  }

  // render() {
  //   return (
  //     <View>
  //       <ScrollView>
  //       { this.state.courses.map((course, i) => {
  //         return (
  //           <Button
  // 						large
  // 						raised
  // 						color='black'
  // 						backgroundColor='white'
  // 						containerViewStyle={{marginBottom: 1, marginLeft: 0, marginRight: 0}}
  // 						key={i}
  // 						title={course.subject.toString()+' - '+course.catalog_number.toString()}
  // 						onPress={() => navigate( 'Details', {subject: course.subject.toString()} ) } />
  //           );
  //         })
  //       }
  //       </ScrollView>
  //     </View>
  //   );
  // }
}

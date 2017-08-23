import React, { Component } from 'react';
import {
	AppRegistry,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	TextInput,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import { Button } from 'react-native-elements';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import SearchBar from 'react-native-searchbar';
import Style from './Style';
import DetailScreen from './DetailScreen';

GLOBAL = require('./Globals');

class UWCourses extends Component {
	static navigationOptions = {
		title: 'Subjects offered',
	};
	constructor(props) {
		super(props);
		this.state =
		{
			hidden: true,
			items: [],
			subjects: [],
			posts: []
		};
		this._handleResponse = this._handleResponse.bind(this);
	}

	_handleResponse(subjects) {
		this.setState({ subjects });
	}

	componentDidMount() {
		this.getSubjects(function(response) {
		    this.setState({
		    	items: response.data.data,
		    	subjects: response.data.data,
		    });
		}.bind(this));
	}

	getSubjects(callback) {
		var url = GLOBAL.BASE_URL+'codes/subjects.json?key='+GLOBAL.KEY;
		axios
		.get(url)
		.then(response => {
			this.setState({
			  items: response.data.data,
			  subjects: response.data.data
			});
		}).catch(function(error) {
			console.log('There has been a problem with your axios.get operation for list of subjects: ' + error.message);
			throw error;
		});
	}

	render() {
	 const { navigate } = this.props.navigation;
	 return (
		 <View style={Style.rootContainer}>
			 <ScrollView>
				{ this.state.subjects.map((subject, i) => {
				  return (
					<Button
						large
						raised
						color='black'
						backgroundColor='white'
						containerViewStyle={{marginBottom: 1, marginLeft: 0, marginRight: 0}}
						key={i}
						title={subject.subject.toString()+' - '+subject.description.toString()}
						onPress={() => navigate( 'Details', {subject: subject.subject.toString()} ) } />
				  );
				})}
				</ScrollView>
			</View>
	 );
 }
}

// 	render() {
// 		return (
// 			<View style={Style.rootContainer}>
// 				<View style={Style.menuContainer}>
// 					<View style={Style.menuLeft}>
// 						<Image style={Style.logo} resizeMode='center' source={require('../img/TODO.png')} />
// 						<SearchBar
// 							ref={(ref) => this.searchBar = ref}
// 							data={this.state.items}
// 							handleResponse={this._handleResponse}
// 							clearOnHide={false}
// 							hideBack={true}
// 							allDataOnEmptySearch
// 						/>
// 					</View>
// 					<View style={Style.menuRight}>
// 						<View style={Style.menuButtons}>
// 							<Icon name="search" style={Style.searchButton} onPress={() => this.toggleSearchbar(this.state.hidden)}>
// 							</Icon>
// 							<Icon name="filter" style={Style.filterButton}>
// 							</Icon>
// 						</View>
// 					</View>
// 				</View>
// 					<Image source={require('../img/TODO.png')} style={Style.dataContainer}>
// 						<ScrollView>
// 						{ this.state.subjects.map((subject, i) => {
// 						  return (
// 							<ButtonComponent
// 								key={i}
// 								shape='rectangle'
// 								backgroundColors={['#90A4AE', '#90A4AE']}
// 								gradientStart={{ x: 0.1, y: 1 }}
// 								gradientEnd={{ x: 0.9, y: 1 }}
// 								text={subject.subject.toString()+' - '+subject.description.toString()}
// 								onPress={() => this.searchBar.hide()}>
// 							</ButtonComponent>
// 						  );
// 						})}
// 						</ScrollView>
// 					</Image>
// 			</View>
// 		)
// 	}
//
// 	toggleSearchbar(hidden) {
// 		// const vm = this;
// 		if(hidden) {
// 			this.searchBar.show();
// 			this.setState({ hidden: !hidden });
// 			// console.log("Show: "+hidden);
// 		} else {
// 			this.searchBar.hide();
// 			this.setState({ hidden: !hidden });
// 			// console.log("Hide: "+hidden);
// 		}
// 	}
// }

const UWApp = StackNavigator({
	Home: { screen: UWCourses },
	Details: { screen: DetailScreen },
});

AppRegistry.registerComponent('UWCourses', () => UWApp);

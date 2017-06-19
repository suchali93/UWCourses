import HomeScreen from './src/UWCourses';

//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  TouchableOpacity,
//} from 'react-native';
//import SearchBar from 'react-native-searchbar';
//import axios from 'axios';
//import ReactDOM from 'react-dom';
//const items = [
//  1337,
//  'janeway',
//  {
//    lots: 'of',
//    different: {
//      types: 0,
//      data: false,
//      that: {
//        can: {
//          be: {
//            quite: {
//              complex: {
//                hidden: [ 'gold!' ],
//              },
//            },
//          },
//        },
//      },
//    },
//  },
//  [ 4, 2, 'tree' ],
//];
//
//export default class UWCourses extends Component {
//
//  constructor(props) {
//    super(props);
//    this.state = {
//      items,
//      results: []
//    };
//    this._handleResults = this._handleResults.bind(this);
//  }
//
//  _handleResults(results) {
//    this.setState({ results });
//  }
//
//  render() {
//    return (
//      <View>
//        <View style={{ marginTop: 110 }}>
//          {
//            this.state.results.map((result, i) => {
//              return (
//                <Text key={i}>
//                  {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
//                </Text>
//              );
//            })
//          }
//          <TouchableOpacity onPress={() => this.searchBar.show()}>
//            <View style={{ backgroundColor: 'black', height: 100, marginTop: 50 }}/>
//          </TouchableOpacity>
//          <TouchableOpacity onPress={() => this.searchBar.hide()}>
//            <View style={{ backgroundColor: 'blue', height: 100 }}/>
//          </TouchableOpacity>
//        </View>
//        <SearchBar
//          ref={(ref) => this.searchBar = ref}
//          data={items}
//          handleResults={this._handleResults}
//          showOnLoad
//        />
//      </View>
//    );
//  }
//}
//
//class FetchDemo extends React.Component {
//  constructor(props) {
//    super(props);
//
//    this.state = {
//      posts: []
//    };
//  }
//
//  componentDidMount() {
//    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
//      .then(res => {
//        const posts = res.data.data.children.map(obj => obj.data);
//        this.setState({ posts });
//      });
//  }
//
//  render() {
//    return (
//      <div>
//        <h1>{`/r/${this.props.subreddit}`}</h1>
//        <ul>
//          {this.state.posts.map(post =>
//            <li key={post.id}>{post.title}</li>
//          )}
//        </ul>
//      </div>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#fedfed',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('UWCourses', () => UWCourses);
//ReactDOM.render(
//  <FetchDemo subreddit="reactjs"/>,
//  document.getElementById('root')
//);
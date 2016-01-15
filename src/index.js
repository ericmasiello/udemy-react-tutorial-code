import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCRyHI8QgOOhXpNGwjdkcmGyQJlZdJL0yA';

//This is a class or factory, not an instance
//This is considered a 'React functional component' (aka dumb component) because its created using a function
//As opposed to as class component
//const App = (props) => {
//
//  return (
//    <div>
//      <SearchBar />
//      {props.message}
//    </div>
//  );
//};

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    //fetch initial data
    YTSearch({ key: API_KEY, term: 'surfboard'}, videos => {
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] } />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Using <Tag /> syntax calls React.createElement(Tag) thus turning it into an instance
ReactDOM.render(<App />, document.querySelector('.container'));
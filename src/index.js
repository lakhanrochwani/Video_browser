import _ from 'lodash';
import React,{Component} from  'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDVkcoKiIZDZoAkDbW3jydx9Rs6923oO8Y';



// const App = () => {
//   return (
//     <div>
//     <SearchBar />
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos : [] ,
      selectedVideo : null
    };
    this.videoSearch('front end developer in 2018');
}

    videoSearch(term){
      YTSearch({key:API_KEY, term:term}, (videos) => {
        this.setState({
          videos : videos,
          selectedVideo : videos[0]
        });
      });
    }

  render(){
    const videoSearch=_.debounce((term) => {this.videoSearch(term)},500,{leading: true});
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
        </div>

    );
  }
}


ReactDOM.render(<App />,document.querySelector('.container'));

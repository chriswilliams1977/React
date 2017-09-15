import _ from  'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCiHvUQfhqqr1JubeS6M-9QkYRWEZjZPmQ';


//Create a new component
//Will generate HTML
// => is way to declare function in ES6
// const App = function(){
//     return <div>Hi!</div>;
// }
class App extends Component {

    constructor(props){

        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        //This is a callback to Youtube search, result is the videos
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //usually you pass key/value pair so this.setState({ videos: videos })
            //this is ES6 shorthand
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                {/* Parent object tries to render even though data is still loading from Youtube
                 thus you need to check if data is null in child component */}
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos }
                />
            </div>
        );
    }


}

//Put component (generated HTML) in on page (DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
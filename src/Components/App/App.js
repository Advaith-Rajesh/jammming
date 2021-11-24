//import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../SearchBar/SearchBar.js'
import '../SearchResults/SearchResults.js'
import '../Playlist/Playlist.js'

class App extends React.Component {
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
  render() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    
    <SearchBar />
     <div className="App-playlist">
    <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
  );
}
}
export default App;

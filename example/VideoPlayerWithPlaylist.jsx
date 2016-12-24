import React, { Component } from 'react'
import MediaPlayer from './MediaPlayer'
import { utils, Player } from '../src/react-media-player'

const { mediaHelper } = utils;

const mod = (num, max) => ((num % max) + max) % max;

class Playlist extends Component {
  _handleTrackClick(track) {
    this.props.onTrackClick(track)
  }

  render() {
    const { tracks, currentTrack } = this.props;

    return (
      <aside className="media-playlist">
        <header className="media-playlist-header">
          <h3 className="media-playlist-title">Playlist</h3>
        </header>
        <ul className="media-playlist-tracks">
          {tracks.map(track =>
            <li
              key={track.label}
              className={`media-playlist-track ${track === currentTrack ? 'is-active' : ''}`}
              onClick={this._handleTrackClick.bind(this, track)}
            >
              {track.label}
            </li>
          )}
        </ul>
      </aside>
    )
  }
}

export default class VideoPlayerWithPlaylist extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      // currentTrack: { src: null, label: 'No media loaded' },
      currentTrack: props.playlist[0],
      showMediaPlayer: true,
      repeatTrack: false,
      autoPlay: false,
    }, Player.defaultMediaState);
  }

  _media = mediaHelper(this);

  _handleTrackClick = (track) => {
    this.setState({currentTrack: track})
  };

  _navigatePlaylist = (direction) => {
    const playlist = this.props.playlist;
    const newIndex = mod(playlist.indexOf(this.state.currentTrack) + direction, playlist.length)
    this.setState({currentTrack: playlist[newIndex]})
  };

  _toggleMediaPlayer = () => {
    this.setState({showMediaPlayer: !this.state.showMediaPlayer})
  };

  _toggleRepeatTrack = () => {
    this.setState({repeatTrack: !this.state.repeatTrack})
  };

  render() {
    const { currentTrack, repeatTrack, showMediaPlayer, autoPlay } = this.state;
    const { playlist } = this.props;
    const label = currentTrack.label + (currentTrack.startTime ? ` - Trim: ${currentTrack.startTime} - ${currentTrack.endTime}` : '');

    return(
      <div>
        <button onClick={this._toggleMediaPlayer}>
          Toggle Media Player
        </button>
        {showMediaPlayer && (
          <div className="media-player-wrapper">
            <MediaPlayer
              src={currentTrack.src}
              autoPlay={autoPlay}
              loop={repeatTrack}
              currentTrack={label}
              startTime={currentTrack.startTime}
              endTime={currentTrack.endTime}
              onPrevTrack={this._navigatePlaylist.bind(this, -1)}
              onNextTrack={this._navigatePlaylist.bind(this, 1)}
              onRepeatTrack={this._toggleRepeatTrack}
              onPlay={() => !autoPlay && this.setState({autoPlay: true})}
              onPause={() => this.setState({autoPlay: false})}
              onEnd={() => !repeatTrack && this._navigatePlaylist(1)}
              keyboardControls={this._media.keyboardControls}
              media={this._media}
            />
            <Playlist
              tracks={playlist}
              currentTrack={currentTrack}
              onTrackClick={this._handleTrackClick}
            />
          </div>
        )}
      </div>
    );
  }

}


import React, { Component, PropTypes } from 'react'
import { Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime,  SeekBar, Duration, Volume } = controls;
const { mediaHelper } = utils;

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const panner = audioContext.createPanner();

panner.setPosition(0, 0, 1);
panner.panningModel = 'equalpower';
panner.connect(audioContext.destination);

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  media = mediaHelper(this);

  componentDidMount() {
    const source = audioContext.createMediaElementSource(this._player.instance);
    source.connect(panner);
    panner.connect(audioContext.destination);
  }

  _handlePannerChange = ({ target }) => {
    const x = +target.value;
    const y = 0;
    const z = 1 - Math.abs(x);
    panner.setPosition(x, y, z);
  }

  render() {
    return (
        <div className="media-player">
          <Player
            ref={c => this._player = c}
            src={this.props.src}
            useAudioObject

            {...this.media.toPlayerProps()}
          />
          <div className="media-controls">
            <PlayPause
              className="media-control media-control--play-pause"
              togglePlay={this.media.togglePlay}
              isPlaying={this.media.isPlaying}
            />
            <CurrentTime
              className="media-control media-control--current-time"
              currentTime={this.state.statCurrentTime}
            />
            <SeekBar
              className="media-control media-control--volume-range"
              progress={this.state.statProgress}
              duration={this.state.statDuration}
              currentTime={this.state.statCurrentTime}
              isPlaying={this.media.isPlaying}
              pause={this.media.pause}
              play={this.media.play}
              seekTo={this.media.seekTo}
            />
            <Duration
              className="media-control media-control--duration"
              duration={this.state.statDuration}
            />
            <MuteUnmute
              className="media-control media-control--mute-unmute"
              volume={this.state.statVolume}
              isMuted={this.state.statMute}
              toggleMute={this.media.toggleMute}
            />
            <Volume
              className="media-control media-control--volume"
              volume={this.state.statVolume}
              setVolume={this.media.setVolume}
            />
          </div>
          <input
            type="range"
            defaultValue="0"
            min="-1"
            max="1"
            step="any"
            onChange={this._handlePannerChange}
          />
        </div>
    )
  }
}


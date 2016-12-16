import React, { Component, PropTypes } from 'react'
import { Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime,  SeekBar, Duration, Volume } = controls;
const { mediaStateHelper } = utils;

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

  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);
  _stateHelper = mediaStateHelper.bind(this)();

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

            {...Player.extractPropsFromMediaState(this.state)}
            mediaStateGetter={this._stateGetter}
            mediaStateSetter={this._stateSetter}
          />
          <div className="media-controls">
            <PlayPause
              className="media-control media-control--play-pause"
              togglePlay={this._stateHelper.togglePlay}
              isPlaying={this._stateHelper.isPlaying}
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
              isPlaying={this._stateHelper.isPlaying}
              pause={this._stateHelper.pause}
              play={this._stateHelper.play}
              seekTo={this._stateHelper.seekTo}
            />
            <Duration
              className="media-control media-control--duration"
              duration={this.state.statDuration}
            />
            <MuteUnmute
              className="media-control media-control--mute-unmute"
              volume={this.state.statVolume}
              isMuted={this.state.statMute}
              toggleMute={this._stateHelper.toggleMute}
            />
            <Volume
              className="media-control media-control--volume"
              volume={this.state.statVolume}
              setVolume={this._stateHelper.setVolume}
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


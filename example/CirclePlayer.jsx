import React, { Component, PropTypes } from 'react'
import CircleProgress from './CircleProgress'
import { Player, utils } from '../src/react-media-player'

const { mediaStateHelper } = utils;

class CircleMediaPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }
  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);
  _stateHelper = mediaStateHelper.bind(this)();


  componentDidMount() {
    this._circle = new CircleProgress(this._svg)
  }

  renderPlay() {
    return (
      <polygon
        points="13.083,11.5 20.583,16 13.083,20.5 "
        className="circle-media-player__play"
      />
    )
  }

  renderPause() {
    return (
      <g className="circle-media-player__pause">
        <rect width="3" height="9" x="11.5" y="11.5" />
        <rect width="3" height="9" x="17.5" y="11.5" />
      </g>
    )
  }

  _handleTimeUpdate = (currentTime) => {
    this._circle.setProgress(currentTime / this.state.statDuration * 100)
  };

  render() {
    return (
      <button className="circle-media-player" onClick={this._stateHelper.togglePlay}>
        <Player
          src={this.props.src}
          vendor="audio"
          onTimeUpdate={this._handleTimeUpdate}

          {...Player.extractPropsFromMediaState(this.state)}
          mediaStateGetter={this._stateGetter}
          mediaStateSetter={this._stateSetter}
        />
        <svg width="32px" height="32px" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14.5" className="circle-media-player__background" />
          <circle ref={c => this._svg = c} cx="16" cy="16" r="14.5" className="circle-media-player__foreground" />
          { this._stateHelper.isPlaying ? this.renderPause() : this.renderPlay() }
        </svg>
      </button>
    )
  }
}

export default CircleMediaPlayer

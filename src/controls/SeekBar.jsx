import React, { Component, PropTypes } from 'react'

class SeekBar extends Component {
  _isPlayingOnMouseDown = false
  _onChangeUsed = false

  constructor(props) {
    super(props);
    this.state = {dragCurrentTime: null};
  }

  shouldComponentUpdate({ currentTime, duration }, { dragCurrentTime }) {
    return this.state.dragCurrentTime !== dragCurrentTime ||
      this.props.currentTime !== currentTime ||
      this.props.duration !== duration
  }

  _handleMouseDown = () => {
    const { isPlaying, progress } = this.props;
    this._isPlayingOnMouseDown = isPlaying;
    this._neverPlayed = progress === 0;
    this.props.pause();
    this.setState({dragCurrentTime: null});
  }

  _handleMouseUp = ({ target: { value } }) => {
    // seek on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this.props.seekTo(+value);
    }

    // only play if media was playing prior to mouseDown
    if (this._isPlayingOnMouseDown) {
      this.props.play();
    }
    // on some players (at least vimeo and youtube), seekTo before the video was played will cause
    // it to play even if autoplay is off.
    else if (this._neverPlayed) {
      this.props.pause();
    }
    this.setState({dragCurrentTime: null});
  }

  _handleChange = ({ target: { value } }) => {
    this.props.seekTo(+value)
    this.setState({dragCurrentTime: +value});
    this._onChangeUsed = true
  }

  render() {
    const { className, style, duration, currentTime } = this.props;
    const { dragCurrentTime } = this.state;

    const displayCurrentTime =  dragCurrentTime || currentTime;

    return (
      <input
        type="range"
        step="any"
        max={(duration || 0).toFixed(4)}
        value={displayCurrentTime}
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        className={className}
        style={{
          backgroundSize: (duration ? (displayCurrentTime * 100 / duration) : 0)+ '% 100%',
          ...style
        }}
      />
    )
  }
}

export default SeekBar

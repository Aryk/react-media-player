import React, { Component } from 'react'

class PlayPause extends Component {
  shouldComponentUpdate({ isPlaying }) {
    return this.props.isPlaying !== isPlaying
  }

  render() {
    const { isPlaying, togglePlay, className, style } = this.props;

    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={togglePlay}
      >
        { isPlaying ? 'Pause' : 'Play' }
      </button>
    )
  }
}

export default PlayPause

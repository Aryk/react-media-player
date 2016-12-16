import React, { Component } from 'react'

class MuteUnmute extends Component {
  shouldComponentUpdate({ isMuted }) {
    return this.props.isMuted !== isMuted;
  }

  render() {
    const { className, style, isMuted, toggleMute } = this.props;

    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={toggleMute}
      >
        { isMuted ? 'Unmute' : 'Mute' }
      </button>
    )
  }
}

export default MuteUnmute

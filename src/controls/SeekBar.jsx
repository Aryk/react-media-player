import React, { Component, PropTypes } from 'react'
import withMediaProps from '../decorators/with-media-props'

class SeekBar extends Component {
  _isPlayingOnMouseDown = false
  _onChangeUsed = false

  shouldComponentUpdate({ media }) {
    return this.props.media.currentTime !== media.currentTime ||
           this.props.media.duration !== media.duration
  }

  _handleMouseDown = () => {
    const media = this.props.media
    this._isPlayingOnMouseDown = media.isPlaying
    this._neverPlayed = media.progress === 0
    media.pause()
  }

  _handleMouseUp = ({ target: { value } }) => {
    // seek on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this.props.media.seekTo(+value)
    }

    // only play if media was playing prior to mouseDown
    if (this._isPlayingOnMouseDown) {
      this.props.media.play()
    }
    // on some players (at least vimeo and youtube), seekTo before the video was played will cause
    // it to play even if autoplay is off.
    else if (this._neverPlayed) {
      this.props.media.pause()
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.props.media.seekTo(+value)
    this._onChangeUsed = true
  }

  render() {
    const { className, style, media } = this.props
    const { duration, currentTime } = media
    return (
      <input
        type="range"
        step="any"
        max={(duration).toFixed(4)}
        value={currentTime}
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        className={className}
        style={{
          backgroundSize: (currentTime * 100 / duration) + '% 100%',
          ...style
        }}
      />
    )
  }
}

export default withMediaProps(SeekBar)

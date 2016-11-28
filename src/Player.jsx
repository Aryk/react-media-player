import React, { Component, PropTypes, createElement } from 'react'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'

class Player extends Component {
  static propTypes = {
    vendor: PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    defaultVolume: PropTypes.number,
    defaultMuted: PropTypes.bool
  }

  static defaultProps = {
    startTime: 0,
    endTime: -1,
    defaultVolume: 1,
    defaultMuted: false
  }

  static contextTypes = contextTypes

  _defaultsSet = false

  componentWillMount() {
    this._setPlayerProps(this.props)

    // we need to unset the loading state if no source was loaded
    if (!this.props.src) {
      this._setLoading(false)
    }
  }

  componentWillUpdate(nextProps) {
    this._setPlayerProps(nextProps)

    // clean state if the media source has changed
    if (this.props.src !== nextProps.src) {
      this.context._mediaSetters.setPlayerState({
        currentTime: 0,
        progress: 0,
        duration: 0,
        isLoading: true,
        isPlaying: false
      })
    }
  }

  get instance() {
    return this._component && this._component.instance
  }

  _setPlayer = (component) => {
    this.context._mediaSetters.setPlayer(component)
    this._component = component
  }

  _setPlayerProps(props) {
    this.context._mediaSetters.setPlayerProps(props)
  }

  _setDefaults() {
    const { media } = this.context
    const { defaultVolume, defaultMuted } = this.props

    media.setVolume(defaultVolume)
    media.mute(defaultMuted)

    this._defaultsSet = true
  }

  _setLoading = (isLoading) => {
    this.context._mediaSetters.setPlayerState({ isLoading })
  }

  _handleOnReady = () => {
    const { media, _mediaSetters } = this.context
    const { autoPlay, onReady, startTime } = this.props

    media.setVolume(media.volume)
    media.mute(media.isMuted)

    if (!this._defaultsSet) {
      this._setDefaults()
    }
    if (startTime > -1 && media.currentTime!=startTime) {
      media.seekTo(startTime)
      if (!autoPlay) {
        media.pause(); // seekTo when onReady causes to start playing.
      }
    }

    if (autoPlay) {
      media.play()
    }

    this._setLoading(false)

    if (typeof onReady === 'function') {
      onReady(media)
    }
  }

  _handleOnEnded = () => {
    const { media, _mediaSetters } = this.context
    const { loop, onEnded, startTime } = this.props

    if (loop) {
      media.seekTo(startTime)
      media.play()
    } else {
      _mediaSetters.setPlayerState({ isPlaying: false })
    }

    if (typeof onEnded === 'function') {
      onEnded(media)
    }
  }

  _handleOnTimeUpdate = (currentTime) => {
    const { _mediaGetters } = this.context
    const { endTime } = this.props

    _mediaGetters.getPlayerEvents.onTimeUpdate(currentTime)

    if (endTime > -1 && currentTime > endTime) {
      this._handleOnEnded();
    }
  }

  render() {
    const { src, vendor: _vendor, autoPlay, onReady, onEnded, onTimeUpdate, defaultCurrentTime, defaultVolume, defaultMuted, startTime, endTime, ...extraProps } = this.props
    const { vendor, component } = getVendor(src, _vendor)

    return (
      createElement(component, {
        ref: this._setPlayer,
        src,
        vendor,
        autoPlay,
        isLoading: this._setLoading,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        extraProps,
        ...this.context._mediaGetters.getPlayerEvents,
        onTimeUpdate: this._handleOnTimeUpdate,
      })
    )
  }
}

export default Player

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
    const { media } = this.context
    const { autoPlay, onReady, startTime } = this.props

    media.setVolume(media.volume)
    media.mute(media.isMuted)

    if (!this._defaultsSet) {
      this._setDefaults()
    }

    // Youtube support start and end times through the api.
    if (this._vendor !== 'youtube') {
      if (startTime && media.currentTime!==startTime) {
        media.seekTo(startTime)
        if (!autoPlay) {
          media.pause(); // seekTo when onReady causes to start playing.
        }
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
      if (startTime) {
        media.seekTo(startTime)
      }
      media.play()
    } else {
      _mediaSetters.setPlayerState({ isPlaying: false })
    }

    if (typeof onEnded === 'function') {
      onEnded(media)
    }
  }

  _handleOnTimeUpdate = (currentTime) => {
    const { _mediaGetters, media } = this.context
    const { endTime } = this.props

    _mediaGetters.getPlayerEvents.onTimeUpdate(currentTime)

    if (this._vendor !== 'youtube') {
      // Aryk: Added 0.1 to anticipate the next keyframe
      if (endTime && currentTime + 0.1 > endTime) {
        // Aryk: For Youtube, stop() will also trigger onEnded, but
        // we have Youtube as an exception, so we are ok here.
        media.stop();
        this._handleOnEnded();
      }
    }
  }

  _handleOnProgress = (progress) => {
    const { _mediaGetters } = this.context

    // @Aryk: If it is not "progressing" we do not trigger the callbacks. This is specifically
    // important for Youtube because the youtube API will trigger a BUFFERING if you seekTo on a "cued" video.
    // We cannot simply break the requestAnimationFrame loop, because it's possible you are on a bad
    // internet connection and are not receiving new data, so we must let this loop continue.
    // Putting this on the Player level allows this behavior to apply to other sources like Vimeo
    // as well and provides for consistent treatment.
    if (progress > (this._lastProgress || 0)) {
      _mediaGetters.getPlayerEvents.onProgress(progress)
    }

    this._lastProgress = progress
  }

  render() {
    const { src, vendor: _vendor, autoPlay, onReady, onEnded, onTimeUpdate, defaultCurrentTime, defaultVolume, defaultMuted, startTime, endTime, ...extraProps } = this.props
    const { onPause, onDuration, onMute, onVolumeChange, onError, onPlay } = this.context._mediaGetters.getPlayerEvents

    const { vendor, component } = getVendor(src, _vendor)
    this._vendor = vendor

    return (
      createElement(component, {
        ref: this._setPlayer,
        ...{src, vendor, autoPlay, startTime, endTime},
        isLoading: this._setLoading,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        onTimeUpdate: this._handleOnTimeUpdate,
        onProgress: this._handleOnProgress,
        ...{onPause, onDuration, onMute, onVolumeChange, onError, onPlay},
        extraProps,
      })
    )
  }
}

export default Player

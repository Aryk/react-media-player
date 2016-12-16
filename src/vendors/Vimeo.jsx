import React, { Component } from 'react'
import getVimeoId from '../utils/get-vimeo-id'
import vendorPropTypes from './vendor-prop-types'

class Vimeo extends Component {
  static propTypes = vendorPropTypes

  _vimeoId = getVimeoId(this.props.src)
  _origin = '*'

  componentDidMount() {
    window.addEventListener('message', this._onMessage)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this._vimeoId = getVimeoId(nextProps.src)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('message', this._onMessage)
  }

  get instance() {
    return this._iframe
  }

  _onMessage = (e) => {
    let data

    // allow messages from the Vimeo player only
    if (!(/^https?:\/\/player.vimeo.com/).test(e.origin)) {
      return false
    }

    if (this._origin === '*') {
      this._origin = e.origin
    }

    try {
      data = JSON.parse(e.data)
    } catch (err) {
      this.props.onError(err)
    }

    switch (data.event) {
      case 'ready':
        this.props.onReady()
        this._postMessages()
        break;
      case 'loadProgress':
        this.props.onProgress(data.data.percent)
        break;
      case 'playProgress':
        this.props.onTimeUpdate(data.data.seconds)
        break;
      case 'play':
        this.props.onPlay()
        break;
      case 'pause':
        this.props.onPause()
        break;
      case 'finish':
        this.props.onEnd();
        break;
    }

    if (data.method === 'getDuration') {
      this.props.onDuration(data.value)
    } else if (data.method === 'getVolume') {
      this.setVolume(data.value)
    }
  }

  _postMessage(method, value) {
    const data = { method }

    if (value) {
      data.value = value
    }

    this._iframe.contentWindow.postMessage(JSON.stringify(data), this._origin)
  }

  _postMessages() {
    ['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(listener =>
      this._postMessage('addEventListener', listener)
    )

    this._postMessage('getDuration')
    this._postMessage('getVolume')
  }

  play() {
    this._postMessage('play')
  }

  pause() {
    this._postMessage('pause')
  }

  unload() {
    this._postMessage('unload')
  }

  end() {
    this.pause();
    this.props.onEnd();
  }

  seekTo(currentTime) {
    this._postMessage('seekTo', currentTime)
  }

  mute(muted) {
    this._postMessage('setVolume', muted ? '0' : '1')
    this.props.onMute(muted)
  }

  setVolume(volume) {
    this._postMessage('setVolume', volume)
    this.props.onVolumeChange(+volume)
  }

  render() {
    return (
      <iframe
        ref={c => this._iframe = c}
        src={`https://player.vimeo.com/video/${this._vimeoId}?api=1`}
        {...this.props.extraProps}
      />
    )
  }
}

export default Vimeo

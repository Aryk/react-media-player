import React, { Component } from 'react'
import YoutubeAPILoader from '../utils/youtube-api-loader'
import getYoutubeId from '../utils/get-youtube-id'
import vendorPropTypes from './vendor-prop-types'

class Youtube extends Component {
  static propTypes = vendorPropTypes

  _videoParams = null
  _lastVideoParams = null
  _isReady = false
  _isMounted = false
  _progressId = null
  _timeUpdateId = null

  componentDidMount() {
    this._isMounted = true
    YoutubeAPILoader.load(this)
  }

  componentWillReceiveProps(nextProps) {
    const nextVideoParams = this._getVideoParams(nextProps)
    if (!this._videoParams || this._videoParamsNotEqual(this._videoParams, nextVideoParams)) {
      this._registerNewVideoParams(nextVideoParams)

      if (this._isReady) {
        this._cueVideo()
      }
    }
  }

  componentWillMount() {
    this._registerNewVideoParams(this._getVideoParams(this.props))
  }

  componentWillUnmount() {
    this._isMounted = false

    if (this._progressId) {
      cancelAnimationFrame(this._progressId)
    }

    if (this._timeUpdateId) {
      cancelAnimationFrame(this._timeUpdateId)
    }

    if (this._player) {
      this._player.destroy()
    }
  }

  get instance() {
    return this._player
  }

  _registerNewVideoParams(videoParams) {
    this._lastVideoParams = this._videoParams
    this._videoParams = videoParams
  }

  _videoParamsNotEqual(paramsA, paramsB) {
    return paramsA.videoId!==paramsB.videoId ||
      paramsA.startSeconds!==paramsB.startSeconds ||
      paramsA.endSeconds!==paramsB.endSeconds
  }

  _getVideoParams(props) {
    return {
      videoId: getYoutubeId(props.src),
      startSeconds: props.startTime,
      endSeconds: props.endTime
    }
  }

  _cueVideo() {
    // Autoplay is handled one level up on Player#_handleOnReady.
    this._player.cueVideoById(this._videoParams)
    this.props.onReady()
  }

  _createPlayer() {
    this._player = new YT.Player(this._node, {
      events: this._events(),
      playerVars: {
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3, // hide annotations.
      }
    })
  }

  _events() {
    return {
      onReady: () => {
        this._cueVideo()
        this._isReady = true
      },
      onStateChange: ({ data }) => {
        const { PLAYING, PAUSED, ENDED, BUFFERING, CUED } = window.YT.PlayerState
        const isPlaying = (data === PLAYING)

        if (isPlaying) {
          this.props.onPlay()
          this.props.onDuration(this._player.getDuration())
          this._timeUpdateId = requestAnimationFrame(this._handleTimeUpdate)
        } else {
          cancelAnimationFrame(this._timeUpdateId)
          this._timeUpdateId = null

          cancelAnimationFrame(this._progressId)
          this._progressId = null
        }

        if (data === PAUSED) {
          this.props.onPause()
        }

        // Videos loaded back-to-back would be skipped. Bug in the API, so checking for getVideoLoadedFraction()
        // Found fix here: http://stackoverflow.com/questions/31510351/youtube-iframe-api-loadvideobyid-skips-the-video.
        if (data === ENDED && this._player.getVideoLoadedFraction() > 0) {
          this.props.onEnd();
          this._onEndCalled = true;
        }

        // start fetching progress when playing or buffering. This is also called when BUFFERING ends
        if (isPlaying || data === BUFFERING) {
          this._progressId = requestAnimationFrame(this._handleProgress)
        }

        // reset duration if a new video was loaded
        if (data === CUED) {
          this.props.onDuration(null);
        }
      },
      onError: (e) => {
        this.props.onError(e.data)
      }
    }
  }

  play() {
    this._player.playVideo()
  }

  pause() {
    this._player.pauseVideo()
  }

  // May or may not put the player in an ENDED state after calling stopVideo(), so make sure onEnd is called.
  // See https://developers.google.com/youtube/js_api_reference
  end() {
    this._onEndCalled = false;
    this._player.stopVideo();
    if (!this._onEndCalled) {
      this.props.onEnd();
      this._onEndCalled = true;
    }
  }

  seekTo(currentTime) {
    this._player.seekTo(currentTime);
    this.props.onTimeUpdate(currentTime);
  }

  mute(muted) {
    if (muted) {
      this._player.mute()
    } else {
      this._player.unMute()
    }
    this.props.onMute(muted)
  }

  setVolume(volume) {
    this._player.setVolume(+volume * 100)
    this.props.onVolumeChange(+volume)
  }

  _handleProgress = () => {
    if (!this._isMounted) return

    const progress = this._player.getVideoLoadedFraction() || 0

    this.props.onProgress(progress)

    if (this._progressId && progress < 1) {
      this._progressId = requestAnimationFrame(this._handleProgress)
    }
  }

  _handleTimeUpdate = () => {
    if (!this._isMounted) return

    this.props.onTimeUpdate(this._player.getCurrentTime() || 0)

    if (this._timeUpdateId) {
      this._timeUpdateId = requestAnimationFrame(this._handleTimeUpdate)
    }
  }

  render() {
    return (
      <div
        ref={c => this._node = c}
        {...this.props.extraProps}
      />
    )
  }
}

export default Youtube

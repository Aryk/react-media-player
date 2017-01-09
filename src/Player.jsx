import React, { Component, PropTypes, createElement } from 'react'
import { findDOMNode } from 'react-dom'
import shallowEqual from 'shallowequal'
import getVendor from './utils/get-vendor'
import fullscreenChange from './utils/fullscreen-change'
import requestFullscreen from './utils/request-fullscreen'
import exitFullscreen from './utils/exit-fullscreen'
import pickByKey from './utils/pick-by-key'

class Player extends Component {
  static propTypes = {
    vendor: PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
    src: PropTypes.string,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    debugMode: PropTypes.bool,
    extraProps: PropTypes.object,

    // == Start Callbacks ==
    onReady: PropTypes.func,

    onDuration: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onProgress: PropTypes.func,

    onLoad: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onEnd: PropTypes.func, // Can be triggered automatically by player when video ends OR by stopping the video manually.
    onError: PropTypes.func,

    onMute: PropTypes.func,
    onVolumeChange: PropTypes.func,
    // == End Callbacks ==


    // Media State
    // Note: statCurrentTime, statProgress, statDuration cannot be passed in
    // as props since they bubble up from the "component" in render.
    // Must passed in 'last_' through props to actually get these states changed.
    setSeekTo: PropTypes.number,
    setSkipTime: PropTypes.number,
    setPauseAt: PropTypes.number,
    setPlayback: PropTypes.oneOf(['playing', 'paused']),
    setVolume: PropTypes.number,
    setAddVolume: PropTypes.number,
    setMute: PropTypes.bool,
    setFullscreen: PropTypes.bool,

    // The getters and setters of the state is dependent on the object being passed in. If nothing is passed,
    // defaults to just using the state on the Player object itself.
    mediaStateGetter: PropTypes.func,
    mediaStateSetter: PropTypes.func,
  };

  static defaultMediaState = {
    // These must be passed in through props in order to initiate a state change. Changes to these will trigger actions.
    setSeekTo : null,
    setSkipTime: null,
    setPauseAt: null,
    setPlayback: 'paused',
    setVolume: 1,
    setAddVolume: null,
    setMute: false,
    setFullscreen: null, // if set it to false, then will it will try to get ourselves out of fullscreen mode

    // These are collected from the _components callbacks. Changes to these values, will *not* trigger any actions.
    // They only get updated after the actions have confirmed and happened by the components.
    statCurrentTime: 0,
    statProgress: 0,
    statDuration: 0.1,
    statPlayback: 'unstarted', // can be on of ['unstarted', 'loading', 'playing', 'paused', 'ended', 'errored']
    statVolume: 1, // should be same as default for setVolume - combination of calls to setAddVolume and setVolume
    statMute: false, // should be same as default for setMute
    statFullscreen: false, // must correspond with setFullscreen
  };

  static mediaStateKeys = Object.keys(Player.defaultMediaState);

  static defaultProps = Object.assign({
    extraProps: {},
    debugMode: false,
  }, Player.extractPropsFromMediaState(Player.defaultMediaState));

  static extractPropsFromMediaState(mediaState) {
    return pickByKey(mediaState, (key) => key.substr(0, 3) === 'set')
  }

  _performMediaActionsOnReady = null;

  get mediaState() {
    return this.props.mediaStateGetter ? this.props.mediaStateGetter() : this.state;
  }

  // Doing the React convention here (e.g. this.state, but this.setState)
  setMediaState(state) {
    return this.props.mediaStateSetter ? this.props.mediaStateSetter(state) : this.setState(state);
  }

  componentWillMount() {
    // we need to unset the loading state if no source was loaded
    if (this.props.src) {
      this.componentCallbacks.onLoad();
    }

    // Ensure all the media state defaults are on the actual state object.
    const mediaState = this.mediaState;
    const newMediaState = Object.assign({}, Player.defaultMediaState, mediaState);

    if (!shallowEqual(mediaState, newMediaState)) {
      this.setMediaState(newMediaState);
    }
  }

  componentDidMount() {
    fullscreenChange('add', this._handleFullscreenChange);
    this._performMediaActionsOnReady = this._performMediaActions.bind(this, this.mediaState);
  }

  componentWillUnmount() {
    fullscreenChange('remove', this._handleFullscreenChange);
  }

  shouldComponentUpdate(nextProps) {
    if (this._performMediaActions(nextProps, this.props)) {
      // Don't update component since we really just need to run some javascript functions controlling the player.
      return false;
    } else {
      return this._videoParamsNotEqual(this.props, nextProps);
    }
  }

  componentWillUpdate(nextProps) {
    // Clean state if the media source has changed
    if (this._videoParamsNotEqual(this.props, nextProps)) {
      this.setMediaState(pickByKey(Player.defaultMediaState, (key) => key.substr(0, 4)==='stat'));
    }
  }

  _setComponent = (component) => this._component = component;

  get instance() {
    return this._component && this._component.instance
  }

  _videoParamsNotEqual(paramsA, paramsB) {
    return paramsA.src!==paramsB.src ||
      paramsA.startSeconds!==paramsB.startSeconds ||
      paramsA.endSeconds!==paramsB.endSeconds ||
      paramsA.vendor!==paramsB.vendor ||
      paramsA.autoPlay!==paramsB.autoPlay ||
      paramsA.loop!==paramsB.loop;
  }

  _debug = (...args) => {
    if (this.props.debugMode) {
      console.log(...args);
    }
  };

  // Detects changes in the incoming props and performs the corresponding operation.
  _performMediaActions(newProps, lastProps = {}) {
    let actionPerformed = false;

    // pauseAt doesn't trigger anything here, happens while item is playing...
    // order is important here. For example, if you have seekTo and then play after, we should make sure that that
    // seekTo comes first, for example.
    [
      ['seekTo', 'number'],
      ['skipTime', 'number'],
      ['playback', 'string'],
      ['mute', 'boolean'],
      ['volume', 'number'],
      ['addVolume', 'number'],
      ['fullscreen', 'boolean'],
    ].forEach((args) => {
        let [actionName, varType] = args;
        let setterName = 'set' + actionName.charAt(0).toUpperCase() + actionName.slice(1); // ie seekTo => setSeekTo
        let newPropValue = newProps[setterName];

        if (typeof(newPropValue) === varType && lastProps[setterName] !== newPropValue) {
          actionPerformed = true;
          this._debug(`Performing action ${actionName}: `, newPropValue);
          this.componentSetters[actionName](newPropValue); // execute the action!
          this.setMediaState({[setterName]: null}); // clear it out from the state since we executed it!
        }
      }
    );

    return actionPerformed;
  }

  // These simply call the commands on the _component.. They do not initiate callbacks, or update the state.
  // These are triggered by passed down props.
  componentSetters = {
    mute: (setMute) => this._component.mute(setMute),
    volume: (volume) => this._component.setVolume(volume),
    seekTo: (currentTime) => {
      this.ignoreUntilSeekToStarts = currentTime;
      // FAIL SAFE: Make sure to kill this in the event we can't detect successfully when it picks up from where it
      // left off.
      setTimeout(() => this.ignoreUntilSeekToStarts = null, 1000);
      this._component.seekTo(currentTime);

    },
    playback: (playback) => {
      switch (playback) {
        case 'playing':
          this._component.play();
          break;
        case 'paused':
          this._component.pause();
          break;
        case 'ended':
          this._component.end();
          break;
      }
    },
    skipTime: (amount) => {
      const { statCurrentTime, statDuration } = this.mediaState;
      let newTime = (statCurrentTime + amount);

      if (newTime < 0) {
        newTime = 0
      } else if (newTime > statDuration) {
        newTime = statDuration
      }

      this._component.seekTo(newTime);
    },
    addVolume: (amount) => {
      let newVolume = (this.mediaState.statVolume + (amount * 0.01))

      if (newVolume < 0) {
        newVolume = 0
      } else if (newVolume > 1) {
        newVolume = 1
      }

      this._component.setVolume(newVolume);
    },
    fullscreen: (setFullscreen) => {
      if (setFullscreen) {
        findDOMNode(this._component)[requestFullscreen()]();
      } else {
        document[exitFullscreen()]();
      }
    },
  };

  _handleFullscreenChange = ({ target }) => {
    if (target === findDOMNode(this._component)) {
      // currently no callbacks from fullscreen, but can be easily added here.
      this.setMediaState({ statFullscreen: !this.mediaState.statFullscreen })
    }
  };

    // @Aryk: Basically what is happening here is that on some players (ie Youtube), after you seek, you still
    // get a few key frames from finishing where it was at before. So the currentime will look like this:
    //
    //   3, 3.1, 3.2 (then seekTo(5)), 5, 3.3, 5.1, 5.2, 5.3...
    //
    // So you have a 3.3 in there that shouldn't really be there, so we will ignore it. We use a buffer of 0.2, so we
    // wait until the readings start being inside the
  _ignoreUntilSeekToCatchesUp = currentTime => {
    let ignore = false;
    if (this.ignoreUntilSeekToStarts) {
      if (this.ignoreUntilSeekToStarts < currentTime && currentTime < (this.ignoreUntilSeekToStarts + 0.5)) {
        this.ignoreUntilSeekToStarts = null;
      } else {
        ignore = true;
      }
    }
    return ignore;
  };

  // Component callbacks are responsible for updating all the mediaState 'stat*" keys AND running the passed in callbacks
  // from the user.
  componentCallbacks = {
    onReady: () => {
      const { autoPlay, onReady, startTime } = this.props;

      if (this._performMediaActionsOnReady) {
        this._performMediaActionsOnReady();
        this._performMediaActionsOnReady = null;
      }

      // Youtube support start and end times through the api.
      if (this._vendor !== 'youtube') {
        if (startTime && this.mediaState.statCurrentTime!==startTime) {
          // seekTo when onReady causes to start playing. It should respect the parameters provided here, so
          // we ensure it actually remains paused.
          this._disableCallbacks = true;
          this._component.seekTo(startTime);
          if (!autoPlay) {
            this._component.pause();
          }
          this._disableCallbacks = false;
        }
      }

      if (autoPlay) {
        this._component.play();
      }
    },

    onDuration: (statDuration) =>  this._updateStatAndRunCallback({statDuration}, 'onDuration', statDuration),
    onTimeUpdate: (statCurrentTime) => {
      const { setPauseAt, endTime } = this.props;
      // @Aryk: Added 0.1 to anticipate the next keyframe
      const anticipateNextFrame = statCurrentTime + 0.1;

      if (this._ignoreUntilSeekToCatchesUp(statCurrentTime)) {
        return;
      }

      this._updateStatAndRunCallback({statCurrentTime}, 'onTimeUpdate', statCurrentTime);

      // Youtube has stop time implemented.
      if (this._vendor !== 'youtube' && endTime && anticipateNextFrame > endTime) {
        // @Aryk: For Youtube, stop() will also trigger onEnd, but
        // we are not in this block if we are on youtube.
        this._component.end(); // will trigger onEnd callbacks
      }

      if (setPauseAt && anticipateNextFrame > setPauseAt) {
        this._component.pause();
      }
    },
    onProgress: (statProgress) => {
      // @Aryk: If it is not "statProgressing" we do not trigger the callbacks. This is specifically
      // important for Youtube because the youtube API will trigger a BUFFERING if you seekTo on a "cued" video.
      // We cannot simply break the requestAnimationFrame loop, because it's possible you are on a bad
      // internet connection and are not receiving new data, so we must let this loop continue.
      // Putting this on the Player level allows this behavior to apply to other sources like Vimeo
      // as well and provides for consistent treatment.
      if (this._lastStateProgress===undefined || statProgress > this._lastStateProgress) {
        this._updateStatAndRunCallback({statProgress}, 'onProgress', statProgress);
      }

      this._lastStateProgress = statProgress;
    },

    onLoad: () => this._updateStatAndRunCallback({statPlayback: 'loading'}, 'onLoad'),
    onPlay: () => this._updateStatAndRunCallback({statPlayback: 'playing'}, 'onPlay'),
    onPause: () => this._updateStatAndRunCallback({statPlayback: 'paused'}, 'onPause'),
    onEnd: () => {
      const { loop, onEnd, startTime } = this.props;

      this._updateStatAndRunCallback({statPlayback: 'ended'}, 'onEnd');

      if (loop) {
        if (startTime) {
          this._component.seekTo(startTime);
        }
        this._component.play();
      }
    },

    onMute: (isMuted) => this._updateStatAndRunCallback({statMute: isMuted}, 'onMute', isMuted),
    onVolumeChange: (volume) => this._updateStatAndRunCallback({statVolume: volume}, 'onVolumeChange', volume),
    onError: (error) => this._updateStatAndRunCallback({statPlayback: 'errored'}, 'onError', error),
  };

  _updateStatAndRunCallback = (statUpdate, callbackName, ...args) => {
    const showDebug = this.props.debugMode && !['onTimeUpdate', 'onProgress'].includes(callbackName);

    if (statUpdate) {
      showDebug && this._debug(`Updating Media State (${callbackName}): `, statUpdate);
      this.setMediaState(statUpdate);
    }

    const callback = this.props[callbackName];
    if (typeof callback === 'function' && !this._disableCallbacks) {
      showDebug && this._debug(`Performing Callback (${callbackName}): `, statUpdate);
      callback(...args);
    }
  };

  render() {
    const { src, vendor: _vendor, autoPlay, startTime, endTime, extraProps } = this.props;
    const { vendor, component } = getVendor(src, _vendor);
    this._vendor = vendor;
    this._debug(`Rendering Player Component: `, this.props);

    return(
      createElement(component, {
          ref: this._setComponent,
          ...{src, vendor, autoPlay, startTime, endTime},
          ...this.componentCallbacks,
          extraProps,
        }
      )
    );
  }
}

export default Player;

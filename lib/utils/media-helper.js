'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mediaHelper;

var _Player = require('../Player');

var _Player2 = _interopRequireDefault(_Player);

var _keyboardControls = require('./keyboard-controls');

var _keyboardControls2 = _interopRequireDefault(_keyboardControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Two ways to use this function:
 *
 *   1. On your component, bind it with 'this' and then execute it, like:
 *
 *         stateHelper = mediaHelper(this);
 *         stateHelper.pause() // pauses the video
 *
 *   2. Use it in reducers or other actions to generate the necessary state back, so
 *      if you were using react-redux and used the @connect function to connect your components
 *      and pass in props from your store, you could do this:
 *
*         stateHelper = mediaHelper(
 *          () => this.props.mediaState,
 *          (state) => this.props.dispatch({type: 'MEDIA_PLAYER_UPDATE', payload: state})
 *        );
 *
 *      And then you could have other connected components that
 */

function mediaHelper(getStateOrComponent, setState) {
  var getState = void 0;
  if (typeof getStateOrComponent === 'function') {
    getState = getStateOrComponent;
    setState = setState || function (updates) {
      // getState only mode
      throw Error("setState was not passed in so cannot perform updates.");
    };
  } else if (typeof setState === 'function') {
    // setState only mode
    getState = function getState() {
      throw Error("getState was not passed in so cannot read the media state.");
    };
  } else if (getStateOrComponent.isReactComponent) {
    (function () {
      var reactComponent = getStateOrComponent;
      setState = reactComponent.setState.bind(reactComponent);
      getState = function getState() {
        return reactComponent.state;
      };
    })();
  } else {
    throw Error("Invalid getState and setState values, see documentation.");
  }

  return {
    get state() {
      return getState();
    },
    setState: setState,
    togglePlay: function togglePlay() {
      var currentPlayback = getState().statPlayback !== 'playing' ? 'playing' : 'paused';
      setState({ setPlayback: currentPlayback });
      return currentPlayback;
    },
    toggleMute: function toggleMute() {
      return setState({ setMute: !getState().statMute });
    },
    play: function play() {
      return setState({ setPlayback: 'playing' });
    },
    pause: function pause() {
      return setState({ setPlayback: 'paused' });
    },
    pauseAt: function pauseAt(time) {
      return setState({ setPauseAt: time });
    },
    // We also set the statCurrentTime here, because until
    // the video starts playing the statCurrentTime will not be updated.
    seekTo: function seekTo(time, playAfterSeek) {
      var updates = { setSeekTo: time, statCurrentTime: time };
      // When the video hasn't started playing yet, sometimes it will startplaying after seeking *before* the video
      // is played (this happens with Youtube, for example).
      if (playAfterSeek === undefined && !getState().statCurrentTime) {
        playAfterSeek = false;
      }
      if (playAfterSeek !== undefined) {
        updates = Object.assign({ setPlayback: playAfterSeek ? 'playing' : 'paused' }, updates);
      }
      setState(updates);
    },
    skip: function skip(val) {
      return setState({ setSkipTime: val });
    },
    addVolume: function addVolume(val) {
      return setState({ setAddVolume: val });
    },
    setVolume: function setVolume(val) {
      return setState({ setVolume: val });
    },
    fullscreen: function fullscreen() {
      return setState({ setFullscreen: true });
    },

    // Direct getters for the stat properties.
    get currentTime() {
      return getState().statCurrentTime;
    },
    get progress() {
      return getState().statProgress;
    },
    get duration() {
      return getState().statDuration;
    },
    get playback() {
      return getState().statPlayback;
    },
    get volume() {
      return getState().statVolume;
    },
    // is* follows convention for isPlaying
    get isPlaying() {
      return getState().statPlayback === 'playing';
    },
    get isMuted() {
      return getState().statMute;
    },
    get isFullscreen() {
      return getState().statFullscreen;
    },

    get keyboardControls() {
      return _keyboardControls2.default.bind(this);
    },
    /**
     * Creates the player probs and essentially connects your Player component to your store.
     * @returns {{...playerProps, mediaStateGetter: *, mediaStateSetter: *}}
     */
    toPlayerProps: function toPlayerProps() {
      return _extends({}, _Player2.default.extractPropsFromMediaState(getState()), {
        mediaStateGetter: getState,
        mediaStateSetter: setState
      });
    },
    /**
     * Batch calls that call `setState`. If you want to reduce trips to your store, you may want to consider using this.
     *
     * @param func - Pass in a function that accepts a mediaHelper as an argument and perform operations on that.
     */
    batch: function batch(func) {
      var localUpdates = {};
      var localSetState = function localSetState(updates) {
        return Object.assign(localUpdates, updates);
      };
      func(mediaHelper(getState, localSetState));
      setState(localUpdates);
    }
  };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var runWithState = void 0,
      getState = void 0;
  if (typeof this.setState === 'function') {
    runWithState = this.setState.bind(this);
    getState = function getState() {
      return _this.state;
    };
  } else if (state) {
    runWithState = function runWithState(state) {
      return state;
    }; // just return the state
    getState = function getState() {
      return state;
    };
  } else {
    throw Error("Not bound to a React component and no state was passed in.");
  }

  return {
    togglePlay: function togglePlay() {
      runWithState({ setPlayback: getState().statPlayback !== 'playing' ? 'playing' : 'paused' });
    },
    toggleMute: function toggleMute() {
      return runWithState({ setMute: !getState().statMute });
    },
    get isPlaying() {
      return getState().statPlayback === 'playing';
    },
    play: function play() {
      return runWithState({ setPlayback: 'playing' });
    },
    pause: function pause() {
      return runWithState({ setPlayback: 'paused' });
    },
    seekTo: function seekTo(val) {
      return runWithState({ setSeekTo: val });
    },
    skip: function skip(val) {
      return runWithState({ setSkipTime: val });
    },
    addVolume: function addVolume(val) {
      return runWithState({ setAddVolume: val });
    },
    setVolume: function setVolume(val) {
      return runWithState({ setVolume: val });
    },
    fullscreen: function fullscreen() {
      return runWithState({ setFullscreen: true });
    }
  };
};
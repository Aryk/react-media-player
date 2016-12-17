'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mediaHelper;

var _Player = require('../Player');

var _Player2 = _interopRequireDefault(_Player);

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
    if (typeof setState !== 'function') {
      throw Error("If you are passing in a getState function, please also pass in setState.");
    }
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
    togglePlay: function togglePlay() {
      return setState({ setPlayback: getState().statPlayback !== 'playing' ? 'playing' : 'paused' });
    },
    toggleMute: function toggleMute() {
      return setState({ setMute: !getState().statMute });
    },
    get isPlaying() {
      return getState().statPlayback === 'playing';
    },
    play: function play() {
      return setState({ setPlayback: 'playing' });
    },
    pause: function pause() {
      return setState({ setPlayback: 'paused' });
    },
    seekTo: function seekTo(val) {
      return setState({ setSeekTo: val });
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
    get state() {
      return getState();
    },
    toPlayerProps: function toPlayerProps() {
      return _extends({}, _Player2.default.extractPropsFromMediaState(getState()), {
        mediaStateGetter: getState,
        mediaStateSetter: setState
      });
    }
  };
}
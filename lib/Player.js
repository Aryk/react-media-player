'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _getVendor2 = require('./utils/get-vendor');

var _getVendor3 = _interopRequireDefault(_getVendor2);

var _fullscreenChange = require('./utils/fullscreen-change');

var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

var _requestFullscreen = require('./utils/request-fullscreen');

var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

var _exitFullscreen = require('./utils/exit-fullscreen');

var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

var _pickByKey = require('./utils/pick-by-key');

var _pickByKey2 = _interopRequireDefault(_pickByKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Player, [{
    key: 'setMediaState',


    // Doing the React convention here (e.g. this.state, but this.setState)
    value: function setMediaState(state) {
      return this.props.mediaStateSetter ? this.props.mediaStateSetter(state) : this.setState(state);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // we need to unset the loading state if no source was loaded
      if (this.props.src) {
        this.componentCallbacks.onLoad();
      }

      // Ensure all the media state defaults are on the actual state object.
      var mediaState = this.mediaState;
      var newMediaState = Object.assign({}, Player.defaultMediaState, mediaState);

      if (!(0, _shallowequal2.default)(mediaState, newMediaState)) {
        this.setMediaState(newMediaState);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
      this._performMediaActionsOnReady = this._performMediaActions.bind(this, this.mediaState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this._performMediaActions(nextProps, this.props)) {
        // Don't update component since we really just need to run some javascript functions controlling the player.
        return false;
      } else {
        return this._videoParamsNotEqual(this.props, nextProps);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      // Clean state if the media source has changed
      if (this._videoParamsNotEqual(this.props, nextProps)) {
        this.setMediaState((0, _pickByKey2.default)(Player.defaultMediaState, function (key) {
          return key.substr(0, 4) === 'stat';
        }));
      }
    }
  }, {
    key: '_videoParamsNotEqual',
    value: function _videoParamsNotEqual(paramsA, paramsB) {
      return paramsA.src !== paramsB.src || paramsA.startSeconds !== paramsB.startSeconds || paramsA.endSeconds !== paramsB.endSeconds || paramsA.vendor !== paramsB.vendor || paramsA.autoPlay !== paramsB.autoPlay || paramsA.loop !== paramsB.loop;
    }
  }, {
    key: '_performMediaActions',


    // Detects changes in the incoming props and performs the corresponding operation.
    value: function _performMediaActions(newProps) {
      var _this2 = this;

      var lastProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var actionPerformed = false;

      // pauseAt doesn't trigger anything here, happens while item is playing...
      // order is important here. For example, if you have seekTo and then play after, we should make sure that that
      // seekTo comes first, for example.
      [['seekTo', 'number'], ['skipTime', 'number'], ['playback', 'string'], ['mute', 'boolean'], ['volume', 'number'], ['addVolume', 'number'], ['fullscreen', 'boolean']].forEach(function (args) {
        var _args = _slicedToArray(args, 2),
            actionName = _args[0],
            varType = _args[1];

        var setterName = 'set' + actionName.charAt(0).toUpperCase() + actionName.slice(1); // ie seekTo => setSeekTo
        var newPropValue = newProps[setterName];

        if ((typeof newPropValue === 'undefined' ? 'undefined' : _typeof(newPropValue)) === varType && lastProps[setterName] !== newPropValue) {
          actionPerformed = true;
          _this2._debug('Performing action ' + actionName + ': ', newPropValue);
          _this2.componentSetters[actionName](newPropValue); // execute the action!
          _this2.setMediaState(_defineProperty({}, setterName, null)); // clear it out from the state since we executed it!
        }
      });

      return actionPerformed;
    }

    // These simply call the commands on the _component.. They do not initiate callbacks, or update the state.
    // These are triggered by passed down props.


    // @Aryk: Basically what is happening here is that on some players (ie Youtube), after you seek, you still
    // get a few key frames from finishing where it was at before. So the currentime will look like this:
    //
    //   3, 3.1, 3.2 (then seekTo(5)), 5, 3.3, 5.1, 5.2, 5.3...
    //
    // So you have a 3.3 in there that shouldn't really be there, so we will ignore it. We use a buffer of 0.2, so we
    // wait until the readings start being inside the


    // Component callbacks are responsible for updating all the mediaState 'stat*" keys AND running the passed in callbacks
    // from the user.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          _vendor = _props.vendor,
          autoPlay = _props.autoPlay,
          startTime = _props.startTime,
          endTime = _props.endTime,
          extraProps = _props.extraProps;

      var _getVendor = (0, _getVendor3.default)(src, _vendor),
          vendor = _getVendor.vendor,
          component = _getVendor.component;

      this._vendor = vendor;
      this._debug('Rendering Player Component: ', this.props);

      return (0, _react.createElement)(component, _extends({
        ref: this._setComponent
      }, { src: src, vendor: vendor, autoPlay: autoPlay, startTime: startTime, endTime: endTime }, this.componentCallbacks, {
        extraProps: extraProps
      }));
    }
  }, {
    key: 'mediaState',
    get: function get() {
      return this.props.mediaStateGetter ? this.props.mediaStateGetter() : this.state;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._component && this._component.instance;
    }
  }], [{
    key: 'extractPropsFromMediaState',
    value: function extractPropsFromMediaState(mediaState) {
      return (0, _pickByKey2.default)(mediaState, function (key) {
        return key.substr(0, 3) === 'set';
      });
    }
  }]);

  return Player;
}(_react.Component);

Player.propTypes = {
  vendor: _react.PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
  src: _react.PropTypes.string,
  autoPlay: _react.PropTypes.bool,
  loop: _react.PropTypes.bool,
  startTime: _react.PropTypes.number,
  endTime: _react.PropTypes.number,
  debugMode: _react.PropTypes.bool,
  extraProps: _react.PropTypes.object,

  // == Start Callbacks ==
  onReady: _react.PropTypes.func,

  onDuration: _react.PropTypes.func,
  onTimeUpdate: _react.PropTypes.func,
  onProgress: _react.PropTypes.func,

  onLoad: _react.PropTypes.func,
  onPlay: _react.PropTypes.func,
  onPause: _react.PropTypes.func,
  onEnd: _react.PropTypes.func, // Can be triggered automatically by player when video ends OR by stopping the video manually.
  onError: _react.PropTypes.func,

  onMute: _react.PropTypes.func,
  onVolumeChange: _react.PropTypes.func,
  // == End Callbacks ==


  // Media State
  // Note: statCurrentTime, statProgress, statDuration cannot be passed in
  // as props since they bubble up from the "component" in render.
  // Must passed in 'last_' through props to actually get these states changed.
  setSeekTo: _react.PropTypes.number,
  setSkipTime: _react.PropTypes.number,
  setPauseAt: _react.PropTypes.number,
  setPlayback: _react.PropTypes.oneOf(['playing', 'paused']),
  setVolume: _react.PropTypes.number,
  setAddVolume: _react.PropTypes.number,
  setMute: _react.PropTypes.bool,
  setFullscreen: _react.PropTypes.bool,

  // The getters and setters of the state is dependent on the object being passed in. If nothing is passed,
  // defaults to just using the state on the Player object itself.
  mediaStateGetter: _react.PropTypes.func,
  mediaStateSetter: _react.PropTypes.func
};
Player.defaultMediaState = {
  // These must be passed in through props in order to initiate a state change. Changes to these will trigger actions.
  setSeekTo: null,
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
  statFullscreen: false };
Player.mediaStateKeys = Object.keys(Player.defaultMediaState);
Player.defaultProps = Object.assign({
  extraProps: {},
  debugMode: false
}, Player.extractPropsFromMediaState(Player.defaultMediaState));

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._performMediaActionsOnReady = null;

  this._setComponent = function (component) {
    return _this3._component = component;
  };

  this._debug = function () {
    if (_this3.props.debugMode) {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }
  };

  this.componentSetters = {
    mute: function mute(setMute) {
      return _this3._component.mute(setMute);
    },
    volume: function volume(_volume) {
      return _this3._component.setVolume(_volume);
    },
    seekTo: function seekTo(currentTime) {
      _this3.ignoreUntilSeekToStarts = currentTime;
      // FAIL SAFE: Make sure to kill this in the event we can't detect successfully when it picks up from where it
      // left off.
      setTimeout(function () {
        return _this3.ignoreUntilSeekToStarts = null;
      }, 1000);
      _this3._component.seekTo(currentTime);
    },
    playback: function playback(_playback) {
      switch (_playback) {
        case 'playing':
          _this3._component.play();
          break;
        case 'paused':
          _this3._component.pause();
          break;
        case 'ended':
          _this3._component.end();
          break;
      }
    },
    skipTime: function skipTime(amount) {
      var _mediaState = _this3.mediaState,
          statCurrentTime = _mediaState.statCurrentTime,
          statDuration = _mediaState.statDuration;

      var newTime = statCurrentTime + amount;

      if (newTime < 0) {
        newTime = 0;
      } else if (newTime > statDuration) {
        newTime = statDuration;
      }

      _this3._component.seekTo(newTime);
    },
    addVolume: function addVolume(amount) {
      var newVolume = _this3.mediaState.statVolume + amount * 0.01;

      if (newVolume < 0) {
        newVolume = 0;
      } else if (newVolume > 1) {
        newVolume = 1;
      }

      _this3._component.setVolume(newVolume);
    },
    fullscreen: function fullscreen(setFullscreen) {
      if (setFullscreen) {
        (0, _reactDom.findDOMNode)(_this3._component)[(0, _requestFullscreen2.default)()]();
      } else {
        document[(0, _exitFullscreen2.default)()]();
      }
    }
  };

  this._handleFullscreenChange = function (_ref2) {
    var target = _ref2.target;

    if (target === (0, _reactDom.findDOMNode)(_this3._component)) {
      // currently no callbacks from fullscreen, but can be easily added here.
      _this3.setMediaState({ statFullscreen: !_this3.mediaState.statFullscreen });
    }
  };

  this._ignoreUntilSeekToCatchesUp = function (currentTime) {
    var ignore = false;
    if (_this3.ignoreUntilSeekToStarts) {
      if (_this3.ignoreUntilSeekToStarts < currentTime && currentTime < _this3.ignoreUntilSeekToStarts + 0.5) {
        _this3.ignoreUntilSeekToStarts = null;
      } else {
        ignore = true;
      }
    }
    return ignore;
  };

  this.componentCallbacks = {
    onReady: function onReady() {
      var _props2 = _this3.props,
          autoPlay = _props2.autoPlay,
          onReady = _props2.onReady,
          startTime = _props2.startTime;


      if (_this3._performMediaActionsOnReady) {
        _this3._performMediaActionsOnReady();
        _this3._performMediaActionsOnReady = null;
      }

      // Youtube support start and end times through the api.
      if (_this3._vendor !== 'youtube') {
        if (startTime && _this3.mediaState.statCurrentTime !== startTime) {
          // seekTo when onReady causes to start playing. It should respect the parameters provided here, so
          // we ensure it actually remains paused.
          _this3._disableCallbacks = true;
          _this3._component.seekTo(startTime);
          if (!autoPlay) {
            _this3._component.pause();
          }
          _this3._disableCallbacks = false;
        }
      }

      if (autoPlay) {
        _this3._component.play();
      }
    },

    onDuration: function onDuration(statDuration) {
      return _this3._updateStatAndRunCallback({ statDuration: statDuration }, 'onDuration', statDuration);
    },
    onTimeUpdate: function onTimeUpdate(statCurrentTime) {
      var _props3 = _this3.props,
          setPauseAt = _props3.setPauseAt,
          endTime = _props3.endTime;
      // @Aryk: Added 0.1 to anticipate the next keyframe

      var anticipateNextFrame = statCurrentTime + 0.1;

      if (_this3._ignoreUntilSeekToCatchesUp(statCurrentTime)) {
        return;
      }

      _this3._updateStatAndRunCallback({ statCurrentTime: statCurrentTime }, 'onTimeUpdate', statCurrentTime);

      // Youtube has stop time implemented.
      if (_this3._vendor !== 'youtube' && endTime && anticipateNextFrame > endTime) {
        // @Aryk: For Youtube, stop() will also trigger onEnd, but
        // we are not in this block if we are on youtube.
        _this3._component.end(); // will trigger onEnd callbacks
      }

      if (setPauseAt && anticipateNextFrame > setPauseAt) {
        _this3._component.pause();
      }
    },
    onProgress: function onProgress(statProgress) {
      // @Aryk: If it is not "statProgressing" we do not trigger the callbacks. This is specifically
      // important for Youtube because the youtube API will trigger a BUFFERING if you seekTo on a "cued" video.
      // We cannot simply break the requestAnimationFrame loop, because it's possible you are on a bad
      // internet connection and are not receiving new data, so we must let this loop continue.
      // Putting this on the Player level allows this behavior to apply to other sources like Vimeo
      // as well and provides for consistent treatment.
      if (_this3._lastStateProgress === undefined || statProgress > _this3._lastStateProgress) {
        _this3._updateStatAndRunCallback({ statProgress: statProgress }, 'onProgress', statProgress);
      }

      _this3._lastStateProgress = statProgress;
    },

    onLoad: function onLoad() {
      return _this3._updateStatAndRunCallback({ statPlayback: 'loading' }, 'onLoad');
    },
    onPlay: function onPlay() {
      return _this3._updateStatAndRunCallback({ statPlayback: 'playing' }, 'onPlay');
    },
    onPause: function onPause() {
      return _this3._updateStatAndRunCallback({ statPlayback: 'paused' }, 'onPause');
    },
    onEnd: function onEnd() {
      var _props4 = _this3.props,
          loop = _props4.loop,
          onEnd = _props4.onEnd,
          startTime = _props4.startTime;


      _this3._updateStatAndRunCallback({ statPlayback: 'ended' }, 'onEnd');

      if (loop) {
        if (startTime) {
          _this3._component.seekTo(startTime);
        }
        _this3._component.play();
      }
    },

    onMute: function onMute(isMuted) {
      return _this3._updateStatAndRunCallback({ statMute: isMuted }, 'onMute', isMuted);
    },
    onVolumeChange: function onVolumeChange(volume) {
      return _this3._updateStatAndRunCallback({ statVolume: volume }, 'onVolumeChange', volume);
    },
    onError: function onError(error) {
      return _this3._updateStatAndRunCallback({ statPlayback: 'errored' }, 'onError', error);
    }
  };

  this._updateStatAndRunCallback = function (statUpdate, callbackName) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var showDebug = _this3.props.debugMode && !['onTimeUpdate', 'onProgress'].includes(callbackName);

    if (statUpdate) {
      showDebug && _this3._debug('Updating Media State (' + callbackName + '): ', statUpdate);
      _this3.setMediaState(statUpdate);
    }

    var callback = _this3.props[callbackName];
    if (typeof callback === 'function' && !_this3._disableCallbacks) {
      showDebug && _this3._debug('Performing Callback (' + callbackName + '): ', statUpdate);
      callback.apply(undefined, args);
    }
  };
};

exports.default = Player;
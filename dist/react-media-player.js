/*!
 * React Media Player 0.6.0
 * https://github.com/souporserious/react-media-player
 * Copyright (c) 2016 React Media Player Authors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReactMediaPlayer"] = factory(require("React"), require("ReactDOM"));
	else
		root["ReactMediaPlayer"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.controls = exports.withMediaProps = exports.Player = exports.Media = undefined;

	var _Media2 = __webpack_require__(1);

	var _Media3 = _interopRequireDefault(_Media2);

	var _Player2 = __webpack_require__(8);

	var _Player3 = _interopRequireDefault(_Player2);

	var _withMediaProps2 = __webpack_require__(18);

	var _withMediaProps3 = _interopRequireDefault(_withMediaProps2);

	var _controls2 = __webpack_require__(19);

	var _controls = _interopRequireWildcard(_controls2);

	var _utils2 = __webpack_require__(29);

	var _utils = _interopRequireWildcard(_utils2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Media = _Media3.default;
	exports.Player = _Player3.default;
	exports.withMediaProps = _withMediaProps3.default;
	exports.controls = _controls;
	exports.utils = _utils;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _contextTypes = __webpack_require__(4);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _requestFullscreen = __webpack_require__(5);

	var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

	var _exitFullscreen = __webpack_require__(6);

	var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

	var _fullscreenChange = __webpack_require__(7);

	var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MEDIA_EVENTS = {
	  onPlay: 'isPlaying',
	  onPause: 'isPlaying',
	  onDuration: 'duration',
	  onProgress: 'progress',
	  onTimeUpdate: 'currentTime',
	  onMute: 'isMuted',
	  onVolumeChange: 'volume',
	  onError: null
	};
	var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);

	var Media = function (_Component) {
	  _inherits(Media, _Component);

	  function Media() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Media);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      currentTime: 0,
	      progress: 0,
	      duration: 0.1,
	      volume: 1,
	      isLoading: true,
	      isPlaying: false,
	      isMuted: false,
	      isFullscreen: false
	    }, _this._playerProps = {}, _this._lastVolume = 0, _this._setPlayer = function (component) {
	      _this._player = component;
	    }, _this._setPlayerProps = function (props) {
	      _this._playerProps = props;
	    }, _this._setPlayerState = function (state) {
	      _this.setState(state);
	    }, _this.play = function () {
	      _this._player.play();
	    }, _this.pause = function () {
	      _this._player.pause();
	    }, _this.playPause = function () {
	      if (!_this.state.isPlaying) {
	        _this._player.play();
	      } else {
	        _this._player.pause();
	      }
	    }, _this.stop = function () {
	      _this._player.stop();
	    }, _this.seekTo = function (currentTime) {
	      _this._player.seekTo(currentTime);
	      _this.setState({ currentTime: currentTime });
	    }, _this.skipTime = function (amount) {
	      var _this$state = _this.state,
	          currentTime = _this$state.currentTime,
	          duration = _this$state.duration;

	      var newTime = currentTime + amount;

	      if (newTime < 0) {
	        newTime = 0;
	      } else if (newTime > duration) {
	        newTime = duration;
	      }

	      _this.seekTo(newTime);
	    }, _this.mute = function (isMuted) {
	      if (isMuted) {
	        _this._lastVolume = _this.state.volume;
	        _this._player.setVolume(0);
	      } else {
	        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
	        _this._player.setVolume(volume);
	      }
	      _this._player.mute(isMuted);
	    }, _this.muteUnmute = function () {
	      _this.mute(!_this.state.isMuted);
	    }, _this.setVolume = function (volume) {
	      var isMuted = volume <= 0;

	      if (isMuted !== _this.state.isMuted) {
	        _this.mute(isMuted);
	      } else {
	        _this._lastVolume = volume;
	      }

	      _this._player.setVolume(volume);
	    }, _this.addVolume = function (amount) {
	      var newVolume = _this.state.volume + amount * 0.01;

	      if (newVolume < 0) {
	        newVolume = 0;
	      } else if (newVolume > 1) {
	        newVolume = 1;
	      }

	      _this.setVolume(newVolume);
	    }, _this.fullscreen = function () {
	      if (!_this.state.isFullscreen) {
	        (0, _reactDom.findDOMNode)(_this._player)[(0, _requestFullscreen2.default)()]();
	      } else {
	        document[(0, _exitFullscreen2.default)()]();
	      }
	    }, _this._handleFullscreenChange = function (_ref2) {
	      var target = _ref2.target;

	      if (target === (0, _reactDom.findDOMNode)(_this._player)) {
	        _this.setState({ isFullscreen: !_this.state.isFullscreen });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Media, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        media: this._getPublicMediaProps(),
	        _mediaSetters: {
	          setPlayer: this._setPlayer,
	          setPlayerProps: this._setPlayerProps,
	          setPlayerState: this._setPlayerState
	        },
	        _mediaGetters: {
	          getPlayerEvents: this._getPlayerEvents()
	        }
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
	    }
	  }, {
	    key: '_getPublicMediaProps',
	    value: function _getPublicMediaProps() {
	      return _extends({}, this.state, {
	        play: this.play,
	        pause: this.pause,
	        playPause: this.playPause,
	        stop: this.stop,
	        seekTo: this.seekTo,
	        skipTime: this.skipTime,
	        mute: this.mute,
	        muteUnmute: this.muteUnmute,
	        setVolume: this.setVolume,
	        addVolume: this.addVolume,
	        fullscreen: this.fullscreen
	      });
	    }
	  }, {
	    key: '_getPlayerEvents',
	    value: function _getPlayerEvents() {
	      var _this2 = this;

	      var events = {};

	      MEDIA_EVENTS_KEYS.forEach(function (key) {
	        var stateKey = MEDIA_EVENTS[key];
	        var propCallback = _this2._playerProps[key];

	        events[key] = function (val) {
	          if (stateKey) {
	            _this2.setState(_defineProperty({}, stateKey, val));
	          }
	          if (typeof propCallback === 'function') {
	            propCallback(_this2.state);
	          }
	        };
	      });
	      return events;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;


	      if (typeof children === 'function') {
	        return children(this._getPublicMediaProps());
	      }

	      return _react.Children.only(children);
	    }
	  }]);

	  return Media;
	}(_react.Component);

	Media.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node]).isRequired
	};
	Media.childContextTypes = _contextTypes2.default;
	exports.default = Media;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	exports.default = {
	  media: _react.PropTypes.object,
	  _mediaSetters: _react.PropTypes.object,
	  _mediaGetters: _react.PropTypes.object
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var names = ['requestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'webkitRequestFullscreen'];
	  return names.reduce(function (prev, curr) {
	    return document.documentElement[curr] ? curr : prev;
	  });
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var names = ['exitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'webkitExitFullscreen'];
	  return names.reduce(function (prev, curr) {
	    return document[curr] ? curr : prev;
	  });
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fullscreenChange;
	function fullscreenChange(type, callback) {
	  var vendors = ['fullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange', 'webkitfullscreenchange'];
	  vendors.forEach(function (vendor) {
	    return document[type + 'EventListener'](vendor, callback);
	  });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(4);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _getVendor2 = __webpack_require__(9);

	var _getVendor3 = _interopRequireDefault(_getVendor2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this._defaultsSet = false, _this._setPlayer = function (component) {
	      _this.context._mediaSetters.setPlayer(component);
	      _this._component = component;
	    }, _this._setLoading = function (isLoading) {
	      _this.context._mediaSetters.setPlayerState({ isLoading: isLoading });
	    }, _this._handleOnReady = function () {
	      var _this$context = _this.context,
	          media = _this$context.media,
	          _mediaSetters = _this$context._mediaSetters;
	      var _this$props = _this.props,
	          autoPlay = _this$props.autoPlay,
	          onReady = _this$props.onReady,
	          startTime = _this$props.startTime;


	      media.setVolume(media.volume);
	      media.mute(media.isMuted);

	      if (!_this._defaultsSet) {
	        _this._setDefaults();
	      }
	      if (startTime > -1 && media.currentTime != startTime) {
	        media.seekTo(startTime);
	        if (!autoPlay) {
	          media.pause(); // seekTo when onReady causes to start playing.
	        }
	      }

	      if (autoPlay) {
	        media.play();
	      }

	      _this._setLoading(false);

	      if (typeof onReady === 'function') {
	        onReady(media);
	      }
	    }, _this._handleOnEnded = function () {
	      var _this$context2 = _this.context,
	          media = _this$context2.media,
	          _mediaSetters = _this$context2._mediaSetters;
	      var _this$props2 = _this.props,
	          loop = _this$props2.loop,
	          onEnded = _this$props2.onEnded,
	          startTime = _this$props2.startTime;


	      if (loop) {
	        media.seekTo(startTime);
	        media.play();
	      } else {
	        _mediaSetters.setPlayerState({ isPlaying: false });
	      }

	      if (typeof onEnded === 'function') {
	        onEnded(media);
	      }
	    }, _this._handleOnTimeUpdate = function (currentTime) {
	      var _mediaGetters = _this.context._mediaGetters;
	      var endTime = _this.props.endTime;


	      _mediaGetters.getPlayerEvents.onTimeUpdate(currentTime);

	      if (endTime > -1 && currentTime > endTime) {
	        _this._handleOnEnded();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Player, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._setPlayerProps(this.props);

	      // we need to unset the loading state if no source was loaded
	      if (!this.props.src) {
	        this._setLoading(false);
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      this._setPlayerProps(nextProps);

	      // clean state if the media source has changed
	      if (this.props.src !== nextProps.src) {
	        this.context._mediaSetters.setPlayerState({
	          currentTime: 0,
	          progress: 0,
	          duration: 0,
	          isLoading: true,
	          isPlaying: false
	        });
	      }
	    }
	  }, {
	    key: '_setPlayerProps',
	    value: function _setPlayerProps(props) {
	      this.context._mediaSetters.setPlayerProps(props);
	    }
	  }, {
	    key: '_setDefaults',
	    value: function _setDefaults() {
	      var media = this.context.media;
	      var _props = this.props,
	          defaultVolume = _props.defaultVolume,
	          defaultMuted = _props.defaultMuted;


	      media.setVolume(defaultVolume);
	      media.mute(defaultMuted);

	      this._defaultsSet = true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          src = _props2.src,
	          _vendor = _props2.vendor,
	          autoPlay = _props2.autoPlay,
	          onReady = _props2.onReady,
	          onEnded = _props2.onEnded,
	          onTimeUpdate = _props2.onTimeUpdate,
	          defaultCurrentTime = _props2.defaultCurrentTime,
	          defaultVolume = _props2.defaultVolume,
	          defaultMuted = _props2.defaultMuted,
	          startTime = _props2.startTime,
	          endTime = _props2.endTime,
	          extraProps = _objectWithoutProperties(_props2, ['src', 'vendor', 'autoPlay', 'onReady', 'onEnded', 'onTimeUpdate', 'defaultCurrentTime', 'defaultVolume', 'defaultMuted', 'startTime', 'endTime']);

	      var _getVendor = (0, _getVendor3.default)(src, _vendor),
	          vendor = _getVendor.vendor,
	          component = _getVendor.component;

	      return (0, _react.createElement)(component, _extends({
	        ref: this._setPlayer,
	        src: src,
	        vendor: vendor,
	        autoPlay: autoPlay,
	        isLoading: this._setLoading,
	        onReady: this._handleOnReady,
	        onEnded: this._handleOnEnded,
	        extraProps: extraProps
	      }, this.context._mediaGetters.getPlayerEvents, {
	        onTimeUpdate: this._handleOnTimeUpdate
	      }));
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._component && this._component.instance;
	    }
	  }]);

	  return Player;
	}(_react.Component);

	Player.propTypes = {
	  vendor: _react.PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
	  startTime: _react.PropTypes.number,
	  endTime: _react.PropTypes.number,
	  defaultVolume: _react.PropTypes.number,
	  defaultMuted: _react.PropTypes.bool
	};
	Player.defaultProps = {
	  startTime: 0,
	  endTime: -1,
	  defaultVolume: 1,
	  defaultMuted: false
	};
	Player.contextTypes = _contextTypes2.default;
	exports.default = Player;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVendor;

	var _HTML = __webpack_require__(10);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _Vimeo = __webpack_require__(12);

	var _Vimeo2 = _interopRequireDefault(_Vimeo);

	var _Youtube = __webpack_require__(14);

	var _Youtube2 = _interopRequireDefault(_Youtube);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getVendor(src, vendor) {
	  src = src || '';

	  if (vendor === 'youtube' || /youtube.com|youtu.be/.test(src)) {
	    return { vendor: 'youtube', component: _Youtube2.default };
	  } else if (vendor === 'vimeo' || /vimeo.com/.test(src)) {
	    return { vendor: 'vimeo', component: _Vimeo2.default };
	  } else {
	    var isAudio = vendor === 'audio' || /\.(mp3|wav|m4a)($|\?)/i.test(src);
	    return { vendor: isAudio ? 'audio' : 'video', component: _HTML2.default };
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _vendorPropTypes = __webpack_require__(11);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTML5 = function (_Component) {
	  _inherits(HTML5, _Component);

	  function HTML5() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, HTML5);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTML5.__proto__ || Object.getPrototypeOf(HTML5)).call.apply(_ref, [this].concat(args))), _this), _this._isLoading = function () {
	      _this.props.isLoading(true);
	    }, _this._isNotLoading = function () {
	      _this.props.isLoading(false);
	    }, _this._handleCanPlay = function () {
	      _this.props.onReady();
	    }, _this._handlePlay = function () {
	      _this.props.onPlay(true);
	      _this._isNotLoading();
	    }, _this._handlePause = function () {
	      _this.props.onPause(false);
	    }, _this._handleEnded = function () {
	      _this.props.onEnded(false);
	    }, _this._handleError = function (e) {
	      _this.props.onError(e);
	      _this._isNotLoading();
	    }, _this._handleProgress = function (_ref2) {
	      var _ref2$target = _ref2.target,
	          buffered = _ref2$target.buffered,
	          duration = _ref2$target.duration;

	      var progress = 0;

	      if (duration > 0) {
	        progress = buffered.end(buffered.length - 1) / duration;
	      }

	      _this.props.onProgress(progress);
	    }, _this._handleDuration = function (_ref3) {
	      var duration = _ref3.target.duration;

	      _this.props.onDuration(duration);
	    }, _this._handleTimeUpdate = function (_ref4) {
	      var currentTime = _ref4.target.currentTime;

	      _this.props.onTimeUpdate(currentTime);
	    }, _this._handleVolumeChange = function (_ref5) {
	      var _ref5$target = _ref5.target,
	          volume = _ref5$target.volume,
	          muted = _ref5$target.muted;

	      _this.props.onMute(muted);
	      _this.props.onVolumeChange(volume);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(HTML5, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          src = _props.src,
	          useAudioObject = _props.extraProps.useAudioObject;


	      if (useAudioObject) {
	        this._createAudioObject(src);
	        this._bindAudioObjectEvents(this.props);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var src = nextProps.src,
	          useAudioObject = nextProps.extraProps.useAudioObject;


	      if (useAudioObject) {
	        // destroy and recreate audio object to clean up any browser state
	        if (this.props.src !== src) {
	          this._destroyAudioObject();
	          this._createAudioObject(src);
	        }
	        // bind any new props to current audio object
	        this._bindAudioObjectEvents(nextProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.extraProps.useAudioObject) {
	        this._destroyAudioObject();
	      }
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this._player.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this._player.pause();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._player.pause();
	      this._player.currentTime = 0;
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      if (this._player.readyState > 0) {
	        this._player.currentTime = currentTime;
	      }
	    }
	  }, {
	    key: 'mute',
	    value: function mute(muted) {
	      this._player.muted = muted;
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(volume) {
	      this._player.volume = volume;
	    }
	  }, {
	    key: '_createAudioObject',


	    // Handle Audio Object
	    value: function _createAudioObject(src) {
	      this._player = new Audio(src);
	    }
	  }, {
	    key: '_destroyAudioObject',
	    value: function _destroyAudioObject() {
	      this.stop();
	      this._player = null;
	    }
	  }, {
	    key: '_bindAudioObjectEvents',
	    value: function _bindAudioObjectEvents(_ref6) {
	      var _this2 = this;

	      var extraProps = _ref6.extraProps;

	      var playerEvents = this._playerEvents;

	      Object.keys(extraProps).forEach(function (key) {
	        _this2._player[key] = extraProps[key];
	      });

	      Object.keys(playerEvents).forEach(function (key) {
	        _this2._player[key.toLowerCase()] = playerEvents[key];
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props2 = this.props,
	          vendor = _props2.vendor,
	          src = _props2.src;

	      var _props$extraProps = this.props.extraProps,
	          useAudioObject = _props$extraProps.useAudioObject,
	          extraProps = _objectWithoutProperties(_props$extraProps, ['useAudioObject']);

	      if (!useAudioObject) {
	        return (0, _react.createElement)(vendor, _extends({
	          ref: function ref(c) {
	            return _this3._player = c;
	          },
	          src: src
	        }, extraProps, this._playerEvents));
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._player;
	    }
	  }, {
	    key: '_playerEvents',
	    get: function get() {
	      return {
	        onCanPlay: this._handleCanPlay,
	        onPlay: this._handlePlay,
	        onPlaying: this._isNotLoading,
	        onPause: this._handlePause,
	        onEnded: this._handleEnded,
	        onWaiting: this._isLoading,
	        onError: this._handleError,
	        onProgress: this._handleProgress,
	        onLoadedMetadata: this._handleDuration,
	        onTimeUpdate: this._handleTimeUpdate,
	        onVolumeChange: this._handleVolumeChange
	      };
	    }
	  }]);

	  return HTML5;
	}(_react.Component);

	HTML5.propTypes = _extends({}, _vendorPropTypes2.default, {
	  useAudioObject: _react.PropTypes.bool
	});
	exports.default = HTML5;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	exports.default = {
	  src: _react.PropTypes.string,
	  onPlaying: _react.PropTypes.func,
	  onProgress: _react.PropTypes.func,
	  onDuration: _react.PropTypes.func,
	  onTimeUpdate: _react.PropTypes.func,
	  onVolumeChange: _react.PropTypes.func
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _getVimeoId = __webpack_require__(13);

	var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

	var _vendorPropTypes = __webpack_require__(11);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Vimeo = function (_Component) {
	  _inherits(Vimeo, _Component);

	  function Vimeo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Vimeo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vimeo.__proto__ || Object.getPrototypeOf(Vimeo)).call.apply(_ref, [this].concat(args))), _this), _this._vimeoId = (0, _getVimeoId2.default)(_this.props.src), _this._origin = '*', _this._onMessage = function (e) {
	      var data = void 0;

	      // allow messages from the Vimeo player only
	      if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) {
	        return false;
	      }

	      if (_this._origin === '*') {
	        _this._origin = e.origin;
	      }

	      try {
	        data = JSON.parse(e.data);
	      } catch (err) {
	        _this.props.onError(err);
	      }

	      switch (data.event) {
	        case 'ready':
	          _this.props.onReady();
	          _this._postMessages();
	          break;
	        case 'loadProgress':
	          _this.props.onProgress(data.data.percent);
	          break;
	        case 'playProgress':
	          _this.props.onTimeUpdate(data.data.seconds);
	          break;
	        case 'play':
	          _this.props.onPlay(true);
	          break;
	        case 'pause':
	          _this.props.onPause(false);
	          break;
	        case 'finish':
	          _this.props.onEnded(false);
	          break;
	      }

	      if (data.method === 'getDuration') {
	        _this.props.onDuration(data.value);
	      } else if (data.method === 'getVolume') {
	        _this.setVolume(data.value);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Vimeo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('message', this._onMessage);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.src !== this.props.src) {
	        this._vimeoId = (0, _getVimeoId2.default)(nextProps.src);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('message', this._onMessage);
	    }
	  }, {
	    key: '_postMessage',
	    value: function _postMessage(method, value) {
	      var data = { method: method };

	      if (value) {
	        data.value = value;
	      }

	      this._iframe.contentWindow.postMessage(JSON.stringify(data), this._origin);
	    }
	  }, {
	    key: '_postMessages',
	    value: function _postMessages() {
	      var _this2 = this;

	      ['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(function (listener) {
	        return _this2._postMessage('addEventListener', listener);
	      });

	      this._postMessage('getDuration');
	      this._postMessage('getVolume');
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this._postMessage('play');
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this._postMessage('pause');
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._postMessage('unload');
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      this._postMessage('seekTo', currentTime);
	    }
	  }, {
	    key: 'mute',
	    value: function mute(muted) {
	      this._postMessage('setVolume', muted ? '0' : '1');
	      this.props.onMute(muted);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(volume) {
	      this._postMessage('setVolume', volume);
	      this.props.onVolumeChange(+volume);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement('iframe', _extends({
	        ref: function ref(c) {
	          return _this3._iframe = c;
	        },
	        src: 'https://player.vimeo.com/video/' + this._vimeoId + '?api=1'
	      }, this.props.extraProps));
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._iframe;
	    }
	  }]);

	  return Vimeo;
	}(_react.Component);

	Vimeo.propTypes = _vendorPropTypes2.default;
	exports.default = Vimeo;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVimeoId;
	// Thanks to: http://stackoverflow.com/a/13286930/1461204
	function getVimeoId(url) {
	  var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
	  var match = url.match(regExp);

	  if (match) {
	    return match[3];
	  } else {
	    throw 'Invalid Vimeo ID provided';
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _youtubeApiLoader = __webpack_require__(15);

	var _youtubeApiLoader2 = _interopRequireDefault(_youtubeApiLoader);

	var _getYoutubeId = __webpack_require__(17);

	var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

	var _vendorPropTypes = __webpack_require__(11);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Youtube = function (_Component) {
	  _inherits(Youtube, _Component);

	  function Youtube() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Youtube);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call.apply(_ref, [this].concat(args))), _this), _this._videoId = (0, _getYoutubeId2.default)(_this.props.src), _this._lastVideoId = _this._videoId, _this._isReady = false, _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
	      if (!_this._isMounted) return;

	      var progress = _this._player.getVideoLoadedFraction() || 0;

	      _this.props.onProgress(progress);

	      if (_this._progressId && progress < 1) {
	        _this._progressId = requestAnimationFrame(_this._handleProgress);
	      }
	    }, _this._handleTimeUpdate = function () {
	      if (!_this._isMounted) return;

	      _this.props.onTimeUpdate(_this._player.getCurrentTime() || 0);

	      if (_this._timeUpdateId) {
	        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Youtube, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._isMounted = true;
	      _youtubeApiLoader2.default.load(this);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.src !== this.props.src) {
	        this._lastVideoId = this._videoId;
	        this._videoId = (0, _getYoutubeId2.default)(nextProps.src);

	        if (this._isReady) {
	          if (nextProps.autoPlay) {
	            this._player.loadVideoById(this._videoId);
	          } else {
	            this._player.cueVideoById(this._videoId);
	          }
	          this.props.onReady();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._isMounted = false;

	      if (this._progressId) {
	        cancelAnimationFrame(this._progressId);
	      }

	      if (this._timeUpdateId) {
	        cancelAnimationFrame(this._timeUpdateId);
	      }

	      if (this._player) {
	        this._player.destroy();
	      }
	    }
	  }, {
	    key: '_createPlayer',
	    value: function _createPlayer() {
	      this._player = new YT.Player(this._node, {
	        videoId: this._videoId,
	        events: this._events(),
	        playerVars: {
	          controls: 0,
	          showinfo: 0,
	          modestbranding: 1
	        }
	      });
	    }
	  }, {
	    key: '_events',
	    value: function _events() {
	      var _this2 = this;

	      return {
	        onReady: function onReady() {
	          // if id changed before the player was ready we need to load the new one
	          if (_this2._videoId !== _this2._lastVideoId) {
	            _this2._player.loadVideoById(_this2._videoId);
	          }
	          _this2._isReady = true;
	          _this2.props.onDuration(_this2._player.getDuration());
	          _this2.props.onReady();
	        },
	        onStateChange: function onStateChange(_ref2) {
	          var data = _ref2.data;
	          var _window$YT$PlayerStat = window.YT.PlayerState,
	              PLAYING = _window$YT$PlayerStat.PLAYING,
	              PAUSED = _window$YT$PlayerStat.PAUSED,
	              ENDED = _window$YT$PlayerStat.ENDED,
	              BUFFERING = _window$YT$PlayerStat.BUFFERING,
	              CUED = _window$YT$PlayerStat.CUED;

	          var isPlaying = data === PLAYING;

	          if (isPlaying) {
	            _this2.props.onPlay(true);
	            _this2.props.onDuration(_this2._player.getDuration());
	            _this2._timeUpdateId = requestAnimationFrame(_this2._handleTimeUpdate);
	          } else {
	            cancelAnimationFrame(_this2._timeUpdateId);
	            _this2._timeUpdateId = null;

	            cancelAnimationFrame(_this2._progressId);
	            _this2._progressId = null;
	          }

	          if (data === PAUSED) {
	            _this2.props.onPause(false);
	          }

	          if (data === ENDED) {
	            _this2.props.onEnded(false);
	          }

	          // start fetching progress when playing or buffering
	          if (isPlaying || data === BUFFERING) {
	            _this2._progressId = requestAnimationFrame(_this2._handleProgress);
	          }

	          // reset duration if a new video was loaded
	          if (data === CUED) {
	            _this2.props.onDuration(0.1);
	          }
	        },
	        onError: function onError(e) {
	          _this2.props.onError(e.data);
	        }
	      };
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this._player.playVideo();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this._player.pauseVideo();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._player.stopVideo();
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      this._player.seekTo(currentTime);
	    }
	  }, {
	    key: 'mute',
	    value: function mute(muted) {
	      if (muted) {
	        this._player.mute();
	      } else {
	        this._player.unMute();
	      }
	      this.props.onMute(muted);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(volume) {
	      this._player.setVolume(+volume * 100);
	      this.props.onVolumeChange(+volume);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement('div', _extends({
	        ref: function ref(c) {
	          return _this3._node = c;
	        }
	      }, this.props.extraProps));
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._player;
	    }
	  }]);

	  return Youtube;
	}(_react.Component);

	Youtube.propTypes = _vendorPropTypes2.default;
	exports.default = Youtube;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadApi = __webpack_require__(16);

	var _loadApi2 = _interopRequireDefault(_loadApi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  _queue: [],
	  _isLoaded: false,

	  load: function load(component) {
	    // if the API is loaded just create the player
	    if (this._isLoaded) {
	      component._createPlayer();
	    } else {
	      this._queue.push(component);

	      // load the Youtube API if this was the first component added
	      if (this._queue.length === 1) {
	        this._loadAPI();
	      }
	    }
	  },

	  _loadAPI: function _loadAPI() {
	    var _this = this;

	    (0, _loadApi2.default)('//youtube.com/player_api');

	    window.onYouTubeIframeAPIReady = function () {
	      _this._isLoaded = true;
	      for (var i = _this._queue.length; i--;) {
	        _this._queue[i]._createPlayer();
	      }
	      _this._queue = [];
	    };
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadAPI;
	// load api asynchronously
	function loadAPI(url, cb) {
	  // create script to be injected
	  var script = document.createElement('script');

	  // load async
	  script.async = true;

	  // set source to vendors api
	  script.src = url;

	  // callback after load
	  script.onload = function () {
	    return typeof cb === 'function' && cb();
	  };

	  // append script to document head
	  document.head.appendChild(script);
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getYoutubeId;
	function getYoutubeId(url) {
	  var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
	  var match = url.match(regExp);

	  if (match && match[1].length === 11) {
	    return match[1];
	  } else {
	    throw 'Invalid Youtube ID provided';
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = withMediaProps;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(4);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function withMediaProps(MediaComponent) {
	  var _class, _temp;

	  return _temp = _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(MediaComponent, _extends({}, this.props, {
	          media: this.context.media
	        }));
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.displayName = 'withMediaProps', _class.contextTypes = _contextTypes2.default, _temp;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fullscreen = exports.Volume = exports.MuteUnmute = exports.Duration = exports.SeekBar = exports.Progress = exports.CurrentTime = exports.PlayPause = undefined;

	var _PlayPause2 = __webpack_require__(20);

	var _PlayPause3 = _interopRequireDefault(_PlayPause2);

	var _CurrentTime2 = __webpack_require__(21);

	var _CurrentTime3 = _interopRequireDefault(_CurrentTime2);

	var _Progress2 = __webpack_require__(23);

	var _Progress3 = _interopRequireDefault(_Progress2);

	var _SeekBar2 = __webpack_require__(24);

	var _SeekBar3 = _interopRequireDefault(_SeekBar2);

	var _Duration2 = __webpack_require__(25);

	var _Duration3 = _interopRequireDefault(_Duration2);

	var _MuteUnmute2 = __webpack_require__(26);

	var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

	var _Volume2 = __webpack_require__(27);

	var _Volume3 = _interopRequireDefault(_Volume2);

	var _Fullscreen2 = __webpack_require__(28);

	var _Fullscreen3 = _interopRequireDefault(_Fullscreen2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.PlayPause = _PlayPause3.default;
	exports.CurrentTime = _CurrentTime3.default;
	exports.Progress = _Progress3.default;
	exports.SeekBar = _SeekBar3.default;
	exports.Duration = _Duration3.default;
	exports.MuteUnmute = _MuteUnmute3.default;
	exports.Volume = _Volume3.default;
	exports.Fullscreen = _Fullscreen3.default;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlayPause = function (_Component) {
	  _inherits(PlayPause, _Component);

	  function PlayPause() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PlayPause);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayPause.__proto__ || Object.getPrototypeOf(PlayPause)).call.apply(_ref, [this].concat(args))), _this), _this._handlePlayPause = function () {
	      _this.props.media.playPause();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PlayPause, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref2) {
	      var media = _ref2.media;

	      return this.props.media.isPlaying !== media.isPlaying;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: className,
	          style: style,
	          onClick: this._handlePlayPause
	        },
	        media.isPlaying ? 'Pause' : 'Play'
	      );
	    }
	  }]);

	  return PlayPause;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(PlayPause);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	var _formatTime = __webpack_require__(22);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CurrentTime = function (_Component) {
	  _inherits(CurrentTime, _Component);

	  function CurrentTime() {
	    _classCallCheck(this, CurrentTime);

	    return _possibleConstructorReturn(this, (CurrentTime.__proto__ || Object.getPrototypeOf(CurrentTime)).apply(this, arguments));
	  }

	  _createClass(CurrentTime, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.currentTime !== media.currentTime;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement(
	        'time',
	        { className: className, style: style },
	        (0, _formatTime2.default)(media.currentTime)
	      );
	    }
	  }]);

	  return CurrentTime;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(CurrentTime);

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatTime;
	function formatTime(current) {
	  var h = Math.floor(current / 3600);
	  var m = Math.floor((current - h * 3600) / 60);
	  var s = Math.floor(current % 60);

	  if (s < 10) {
	    s = '0' + s;
	  }

	  if (h > 0) {
	    return h + ':' + m + ':' + s;
	  } else {
	    return m + ':' + s;
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Progress = function (_Component) {
	  _inherits(Progress, _Component);

	  function Progress() {
	    _classCallCheck(this, Progress);

	    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	  }

	  _createClass(Progress, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.progress !== media.progress;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement('progress', {
	        className: className,
	        style: style,
	        max: 100,
	        value: media.progress * 100
	      });
	    }
	  }]);

	  return Progress;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(Progress);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);

	  function SeekBar() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SeekBar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call.apply(_ref, [this].concat(args))), _this), _this._isPlayingOnMouseDown = false, _this._onChangeUsed = false, _this._handleMouseDown = function () {
	      _this._isPlayingOnMouseDown = _this.props.media.isPlaying;
	      _this.props.media.pause();
	    }, _this._handleMouseUp = function (_ref2) {
	      var value = _ref2.target.value;

	      // seek on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this.props.media.seekTo(+value);
	      }

	      // only play if media was playing prior to mouseDown
	      if (_this._isPlayingOnMouseDown) {
	        _this.props.media.play();
	      }
	    }, _this._handleChange = function (_ref3) {
	      var value = _ref3.target.value;

	      _this.props.media.seekTo(+value);
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SeekBar, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref4) {
	      var media = _ref4.media;

	      return this.props.media.currentTime !== media.currentTime || this.props.media.duration !== media.duration;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;
	      var duration = media.duration,
	          currentTime = media.currentTime;

	      return _react2.default.createElement('input', {
	        type: 'range',
	        step: 'any',
	        max: duration.toFixed(4),
	        value: currentTime,
	        onMouseDown: this._handleMouseDown,
	        onMouseUp: this._handleMouseUp,
	        onChange: this._handleChange,
	        className: className,
	        style: _extends({
	          backgroundSize: currentTime * 100 / duration + '% 100%'
	        }, style)
	      });
	    }
	  }]);

	  return SeekBar;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(SeekBar);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	var _formatTime = __webpack_require__(22);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Duration = function (_Component) {
	  _inherits(Duration, _Component);

	  function Duration() {
	    _classCallCheck(this, Duration);

	    return _possibleConstructorReturn(this, (Duration.__proto__ || Object.getPrototypeOf(Duration)).apply(this, arguments));
	  }

	  _createClass(Duration, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.duration !== media.duration;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement(
	        'time',
	        { className: className, style: style },
	        (0, _formatTime2.default)(media.duration)
	      );
	    }
	  }]);

	  return Duration;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(Duration);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MuteUnmute = function (_Component) {
	  _inherits(MuteUnmute, _Component);

	  function MuteUnmute() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MuteUnmute);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MuteUnmute.__proto__ || Object.getPrototypeOf(MuteUnmute)).call.apply(_ref, [this].concat(args))), _this), _this._handleMuteUnmute = function () {
	      _this.props.media.muteUnmute();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MuteUnmute, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref2) {
	      var media = _ref2.media;

	      return this.props.media.isMuted !== media.isMuted;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: className,
	          style: style,
	          onClick: this._handleMuteUnmute
	        },
	        media.isMuted ? 'Unmute' : 'Mute'
	      );
	    }
	  }]);

	  return MuteUnmute;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(MuteUnmute);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Volume = function (_Component) {
	  _inherits(Volume, _Component);

	  function Volume() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Volume);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Volume.__proto__ || Object.getPrototypeOf(Volume)).call.apply(_ref, [this].concat(args))), _this), _this._onChangeUsed = false, _this._handleMouseUp = function (_ref2) {
	      var value = _ref2.target.value;

	      // set volume on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this.props.media.setVolume((+value).toFixed(4));
	      }
	    }, _this._handleChange = function (_ref3) {
	      var value = _ref3.target.value;

	      _this.props.media.setVolume((+value).toFixed(4));
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Volume, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref4) {
	      var media = _ref4.media;

	      return this.props.media.volume !== media.volume;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;
	      var volume = media.volume;

	      return _react2.default.createElement('input', {
	        type: 'range',
	        step: 'any',
	        min: 0,
	        max: 1,
	        value: volume,
	        onMouseUp: this._handleMouseUp,
	        onChange: this._handleChange,
	        className: className,
	        style: _extends({
	          backgroundSize: volume * 100 / 1 + '% 100%'
	        }, style)
	      });
	    }
	  }]);

	  return Volume;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(Volume);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fullscreen = function (_Component) {
	  _inherits(Fullscreen, _Component);

	  function Fullscreen() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Fullscreen);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fullscreen.__proto__ || Object.getPrototypeOf(Fullscreen)).call.apply(_ref, [this].concat(args))), _this), _this._handleFullscreen = function () {
	      _this.props.media.fullscreen();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Fullscreen, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref2) {
	      var media = _ref2.media;

	      return this.props.media.isFullscreen !== media.isFullscreen;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: className,
	          style: style,
	          onClick: this._handleFullscreen
	        },
	        media.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
	      );
	    }
	  }]);

	  return Fullscreen;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(Fullscreen);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatTime = exports.keyboardControls = undefined;

	var _keyboardControls2 = __webpack_require__(30);

	var _keyboardControls3 = _interopRequireDefault(_keyboardControls2);

	var _formatTime2 = __webpack_require__(22);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.keyboardControls = _keyboardControls3.default;
	exports.formatTime = _formatTime3.default;

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyboardControls;
	var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

	function keyboardControls(mediaProps, e) {
	  var duration = mediaProps.duration,
	      playPause = mediaProps.playPause,
	      seekTo = mediaProps.seekTo,
	      skipTime = mediaProps.skipTime,
	      addVolume = mediaProps.addVolume,
	      fullscreen = mediaProps.fullscreen;
	  var key = e.key,
	      shiftKey = e.shiftKey;

	  // prevent default on any media keys

	  MEDIA_KEYS.some(function (_key) {
	    return _key === key && e.preventDefault();
	  });

	  // handle respective key controls
	  switch (key) {
	    // Play/Pause
	    case ' ':
	    case 'k':
	      playPause();
	      break;

	    // Seeking Backwards
	    case 'ArrowLeft':
	      skipTime(shiftKey ? -10 : -5);
	      break;
	    case 'j':
	      skipTime(shiftKey ? -10 : -5);
	      break;
	    case ',':
	      skipTime(-1);
	      break;

	    // Seeking Forwards
	    case 'ArrowRight':
	      skipTime(shiftKey ? 10 : 5);
	      break;
	    case 'l':
	      skipTime(shiftKey ? 10 : 5);
	      break;
	    case '.':
	      skipTime(1);
	      break;
	    case 0:
	    case 'Home':
	      seekTo(0);
	      break;
	    case 'End':
	      seekTo(duration);
	      break;

	    // Volume
	    case 'ArrowUp':
	      addVolume(shiftKey ? 10 : 5);
	      break;
	    case 'ArrowDown':
	      addVolume(shiftKey ? -10 : -5);
	      break;

	    // Fullscreen
	    case 'f':
	      fullscreen();
	      break;
	  }
	}

/***/ }
/******/ ])
});
;
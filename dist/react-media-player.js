/*!
 * React Media Player 0.6.2-ag
 * https://github.com/souporserious/react-media-player
 * Copyright (c) 2017 React Media Player Authors
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
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	exports.utils = exports.controls = exports.Player = exports.Media = undefined;

	var _Media2 = __webpack_require__(1);

	var _Media3 = _interopRequireDefault(_Media2);

	var _Player2 = __webpack_require__(4);

	var _Player3 = _interopRequireDefault(_Player2);

	var _controls2 = __webpack_require__(25);

	var _controls = _interopRequireWildcard(_controls2);

	var _utils2 = __webpack_require__(35);

	var _utils = _interopRequireWildcard(_utils2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Media = _Media3.default;
	exports.Player = _Player3.default;
	exports.controls = _controls;
	exports.utils = _utils;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mediaHelper = __webpack_require__(3);

	var _mediaHelper2 = _interopRequireDefault(_mediaHelper);

	var _Player = __webpack_require__(4);

	var _Player2 = _interopRequireDefault(_Player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Media = function (_Component) {
	  _inherits(Media, _Component);

	  function Media(props) {
	    _classCallCheck(this, Media);

	    var _this = _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

	    _this.state = Object.assign({}, _Player2.default.defaultMediaState);
	    return _this;
	  }

	  _createClass(Media, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children((0, _mediaHelper2.default)(this));
	    }
	  }]);

	  return Media;
	}(_react.Component);

	Media.propTypes = {
	  children: _react.PropTypes.func.isRequired
	};
	exports.default = Media;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = mediaHelper;

	var _Player = __webpack_require__(4);

	var _Player2 = _interopRequireDefault(_Player);

	var _keyboardControls = __webpack_require__(24);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _shallowequal = __webpack_require__(6);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _getVendor2 = __webpack_require__(11);

	var _getVendor3 = _interopRequireDefault(_getVendor2);

	var _fullscreenChange = __webpack_require__(20);

	var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

	var _requestFullscreen = __webpack_require__(21);

	var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

	var _exitFullscreen = __webpack_require__(22);

	var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

	var _pickByKey = __webpack_require__(23);

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

	  // @Aryk: Added 0.1 to anticipate the next keyframe. Overwrite if tweaking needed.


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
	      this._performMediaActions(nextProps, this.props);
	      return this._videoPropsNotEqual(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      // Clean state if the media source has changed
	      if (this.props.src !== nextProps.src) {
	        this.setMediaState((0, _pickByKey2.default)(Player.defaultMediaState, function (key) {
	          return key.substr(0, 4) === 'stat';
	        }));
	      }
	    }
	  }, {
	    key: '_videoPropsNotEqual',
	    value: function _videoPropsNotEqual(propsA, propsB) {
	      return propsA.src !== propsB.src || propsA.startTime !== propsB.startTime || propsA.endTime !== propsB.endTime || propsA.vendor !== propsB.vendor || propsA.autoPlay !== propsB.autoPlay || propsA.loop !== propsB.loop;
	    }
	  }, {
	    key: '_performMediaActions',


	    // Detects changes in the incoming props and performs the corresponding operation.
	    value: function _performMediaActions(newProps) {
	      var _this2 = this;

	      var lastProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var actionPerformed = false;

	      // Infer certain actions if the source didn't change, but newProps has some new values.
	      if (Object.keys(lastProps).length && newProps.src === lastProps.src) {
	        if (newProps.startTime !== lastProps.startTime) {
	          newProps = Object.assign({
	            setSeekTo: newProps.startTime,
	            setPlayback: newProps.autoPlay ? 'playing' : 'paused'
	          }, newProps);
	        }
	      }

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
	    // wait until the readings start being inside the correct range.


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
	    key: 'currentTimeNextFrame',


	    // Used for calculating where the video will be on the next update currentTime update.
	    value: function currentTimeNextFrame(currentTime) {
	      return currentTime + this.anticipateNextFrame;
	    }
	  }, {
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
	Player.anticipateNextFrame = 0.1;
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

	      var currentTimeNextFrame = Player.currentTimeNextFrame(statCurrentTime);

	      if (_this3._ignoreUntilSeekToCatchesUp(statCurrentTime)) {
	        return;
	      }

	      _this3._updateStatAndRunCallback({ statCurrentTime: statCurrentTime }, 'onTimeUpdate', statCurrentTime);

	      // Youtube has stop time implemented.
	      if (_this3._vendor !== 'youtube' && endTime && currentTimeNextFrame > endTime) {
	        // @Aryk: For Youtube, stop() will also trigger onEnd, but
	        // we are not in this block if we are on youtube.
	        _this3._component.end(); // will trigger onEnd callbacks
	      }

	      if (setPauseAt && currentTimeNextFrame > setPauseAt) {
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var fetchKeys = __webpack_require__(7);

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {

	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

	    if (ret !== void 0) {
	        return !!ret;
	    }

	    if (objA === objB) {
	        return true;
	    }

	    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	        return false;
	    }

	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);

	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }

	    compareContext = compareContext || null;

	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];

	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }

	    return true;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(8),
	    isArguments = __webpack_require__(9),
	    isArray = __webpack_require__(10);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function (object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = index + '';
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isArguments;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function (value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVendor;

	var _HTML = __webpack_require__(12);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _Vimeo = __webpack_require__(14);

	var _Vimeo2 = _interopRequireDefault(_Vimeo);

	var _Youtube = __webpack_require__(16);

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

	var _vendorPropTypes = __webpack_require__(13);

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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTML5.__proto__ || Object.getPrototypeOf(HTML5)).call.apply(_ref, [this].concat(args))), _this), _this._handleCanPlay = function () {
	      _this.props.onReady();
	    }, _this._handlePlay = function () {
	      _this.props.onPlay();
	    }, _this._handlePause = function () {
	      _this.props.onPause();
	    }, _this._handleEnded = function () {
	      _this.props.onEnd();
	    }, _this._handleError = function (e) {
	      _this.props.onError(e);
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
	    key: 'end',
	    value: function end() {
	      this._player.pause();
	      this._handleEnded();
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

	    // See https://www.w3.org/TR/html5/embedded-content-0.html#mediaevents

	  }, {
	    key: '_createAudioObject',


	    // Handle Audio Object
	    value: function _createAudioObject(src) {
	      this._player = new Audio(src);
	    }
	  }, {
	    key: '_destroyAudioObject',
	    value: function _destroyAudioObject() {
	      this.pause();
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
	        // onPlaying: this._isNotLoading,
	        // onWaiting: this._isLoading,
	        onPause: this._handlePause,
	        onEnded: this._handleEnded,
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
/* 13 */
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

	var _getVimeoId = __webpack_require__(15);

	var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

	var _vendorPropTypes = __webpack_require__(13);

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
	          _this.props.onPlay();
	          break;
	        case 'pause':
	          _this.props.onPause();
	          break;
	        case 'finish':
	          _this.props.onEnd();
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
	    key: 'unload',
	    value: function unload() {
	      this._postMessage('unload');
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      this.pause();
	      this.props.onEnd();
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _youtubeApiLoader = __webpack_require__(17);

	var _youtubeApiLoader2 = _interopRequireDefault(_youtubeApiLoader);

	var _getYoutubeId = __webpack_require__(19);

	var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

	var _vendorPropTypes = __webpack_require__(13);

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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call.apply(_ref, [this].concat(args))), _this), _this._videoParams = null, _this._lastVideoParams = null, _this._isReady = false, _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
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
	      var nextVideoParams = this._getVideoParams(nextProps);
	      if (!this._videoParams || this._videoParamsNotEqual(this._videoParams, nextVideoParams)) {
	        this._registerNewVideoParams(nextVideoParams);

	        if (this._isReady) {
	          this._cueVideo();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._registerNewVideoParams(this._getVideoParams(this.props));
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
	    key: '_registerNewVideoParams',
	    value: function _registerNewVideoParams(videoParams) {
	      this._lastVideoParams = this._videoParams;
	      this._videoParams = videoParams;
	    }
	  }, {
	    key: '_videoParamsNotEqual',
	    value: function _videoParamsNotEqual(paramsA, paramsB) {
	      return paramsA.videoId !== paramsB.videoId || paramsA.startSeconds !== paramsB.startSeconds || paramsA.endSeconds !== paramsB.endSeconds;
	    }
	  }, {
	    key: '_getVideoParams',
	    value: function _getVideoParams(props) {
	      return {
	        videoId: (0, _getYoutubeId2.default)(props.src),
	        startSeconds: props.startTime,
	        endSeconds: props.endTime
	      };
	    }
	  }, {
	    key: '_cueVideo',
	    value: function _cueVideo() {
	      // Autoplay is handled one level up on Player#_handleOnReady.
	      this._player.cueVideoById(this._videoParams);
	      this.props.onReady();
	    }
	  }, {
	    key: '_createPlayer',
	    value: function _createPlayer() {
	      this._player = new YT.Player(this._node, {
	        events: this._events(),
	        playerVars: {
	          controls: 0,
	          showinfo: 0,
	          modestbranding: 1,
	          iv_load_policy: 3 }
	      });
	    }
	  }, {
	    key: '_events',
	    value: function _events() {
	      var _this2 = this;

	      return {
	        onReady: function onReady() {
	          _this2._cueVideo();
	          _this2._isReady = true;
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
	            _this2.props.onPlay();
	            _this2.props.onDuration(_this2._player.getDuration());
	            _this2._timeUpdateId = requestAnimationFrame(_this2._handleTimeUpdate);
	          } else {
	            cancelAnimationFrame(_this2._timeUpdateId);
	            _this2._timeUpdateId = null;

	            cancelAnimationFrame(_this2._progressId);
	            _this2._progressId = null;
	          }

	          if (data === PAUSED) {
	            _this2.props.onPause();
	          }

	          // Videos loaded back-to-back would be skipped. Bug in the API, so checking for getVideoLoadedFraction()
	          // Found fix here: http://stackoverflow.com/questions/31510351/youtube-iframe-api-loadvideobyid-skips-the-video.
	          if (data === ENDED && _this2._player.getVideoLoadedFraction() > 0) {
	            _this2.props.onEnd();
	            _this2._onEndCalled = true;
	          }

	          // start fetching progress when playing or buffering. This is also called when BUFFERING ends
	          if (isPlaying || data === BUFFERING) {
	            _this2._progressId = requestAnimationFrame(_this2._handleProgress);
	          }

	          // reset duration if a new video was loaded
	          if (data === CUED) {
	            _this2.props.onDuration(null);
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

	    // May or may not put the player in an ENDED state after calling stopVideo(), so make sure onEnd is called.
	    // See https://developers.google.com/youtube/js_api_reference

	  }, {
	    key: 'end',
	    value: function end() {
	      this._onEndCalled = false;
	      this._player.stopVideo();
	      if (!this._onEndCalled) {
	        this.props.onEnd();
	        this._onEndCalled = true;
	      }
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      this._player.seekTo(currentTime);
	      this.props.onTimeUpdate(currentTime);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadApi = __webpack_require__(18);

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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pickByKey;
	function pickByKey(obj, func) {
	  return Object.keys(obj).reduce(function (newObj, key) {
	    if (func(key)) {
	      newObj[key] = obj[key];
	    }
	    return newObj;
	  }, {});
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyboardControls;
	var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

	function keyboardControls(e) {
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
	      this.togglePlay();
	      break;

	    // Seeking Backwards
	    case 'ArrowLeft':
	      this.skip(shiftKey ? -10 : -5);
	      break;
	    case 'j':
	      this.skip(shiftKey ? -10 : -5);
	      break;
	    case ',':
	      this.skip(-1);
	      break;

	    // Seeking Forwards
	    case 'ArrowRight':
	      this.skip(shiftKey ? 10 : 5);
	      break;
	    case 'l':
	      this.skip(shiftKey ? 10 : 5);
	      break;
	    case '.':
	      this.skip(1);
	      break;
	    case 0:
	    case 'Home':
	      this.seekTo(0);
	      break;
	    case 'End':
	      this.seekTo(this.state.statDuration);
	      break;

	    // Volume
	    case 'ArrowUp':
	      this.addVolume(shiftKey ? 10 : 5);
	      break;
	    case 'ArrowDown':
	      this.addVolume(shiftKey ? -10 : -5);
	      break;

	    // Fullscreen
	    case 'f':
	      this.fullscreen();
	      break;
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fullscreen = exports.Volume = exports.MuteUnmute = exports.Duration = exports.SeekBar = exports.Progress = exports.CurrentTime = exports.PlayPause = undefined;

	var _PlayPause2 = __webpack_require__(26);

	var _PlayPause3 = _interopRequireDefault(_PlayPause2);

	var _CurrentTime2 = __webpack_require__(27);

	var _CurrentTime3 = _interopRequireDefault(_CurrentTime2);

	var _Progress2 = __webpack_require__(29);

	var _Progress3 = _interopRequireDefault(_Progress2);

	var _SeekBar2 = __webpack_require__(30);

	var _SeekBar3 = _interopRequireDefault(_SeekBar2);

	var _Duration2 = __webpack_require__(31);

	var _Duration3 = _interopRequireDefault(_Duration2);

	var _MuteUnmute2 = __webpack_require__(32);

	var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

	var _Volume2 = __webpack_require__(33);

	var _Volume3 = _interopRequireDefault(_Volume2);

	var _Fullscreen2 = __webpack_require__(34);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlayPause = function (_Component) {
	  _inherits(PlayPause, _Component);

	  function PlayPause() {
	    _classCallCheck(this, PlayPause);

	    return _possibleConstructorReturn(this, (PlayPause.__proto__ || Object.getPrototypeOf(PlayPause)).apply(this, arguments));
	  }

	  _createClass(PlayPause, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var isPlaying = _ref.isPlaying;

	      return this.props.isPlaying !== isPlaying;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          isPlaying = _props.isPlaying,
	          togglePlay = _props.togglePlay,
	          className = _props.className,
	          style = _props.style;


	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: className,
	          style: style,
	          onClick: togglePlay
	        },
	        isPlaying ? 'Pause' : 'Play'
	      );
	    }
	  }]);

	  return PlayPause;
	}(_react.Component);

	exports.default = PlayPause;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formatTime = __webpack_require__(28);

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
	      var currentTime = _ref.currentTime;

	      return this.props.currentTime !== currentTime;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          currentTime = _props.currentTime;

	      return _react2.default.createElement(
	        'time',
	        { className: className, style: style },
	        (0, _formatTime2.default)(currentTime)
	      );
	    }
	  }]);

	  return CurrentTime;
	}(_react.Component);

	exports.default = CurrentTime;

/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

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
	      var progress = _ref.progress;

	      return this.props.progress !== progress;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          progress = _props.progress;


	      return _react2.default.createElement('progress', {
	        className: className,
	        style: style,
	        max: 100,
	        value: progress * 100
	      });
	    }
	  }]);

	  return Progress;
	}(_react.Component);

	exports.default = Progress;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);

	  function SeekBar(props) {
	    _classCallCheck(this, SeekBar);

	    var _this = _possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props));

	    _this._isPlayingOnMouseDown = false;
	    _this._onChangeUsed = false;

	    _this._handleMouseDown = function () {
	      var _this$props = _this.props,
	          isPlaying = _this$props.isPlaying,
	          progress = _this$props.progress;

	      _this._isPlayingOnMouseDown = isPlaying;
	      _this._neverPlayed = progress === 0;
	      _this.props.pause();
	      _this.setState({ dragCurrentTime: null });
	    };

	    _this._handleMouseUp = function (_ref) {
	      var value = _ref.target.value;

	      // seek on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this.props.seekTo(+value);
	      }

	      // only play if media was playing prior to mouseDown
	      if (_this._isPlayingOnMouseDown) {
	        _this.props.play();
	      }
	      // on some players (at least vimeo and youtube), seekTo before the video was played will cause
	      // it to play even if autoplay is off.
	      else if (_this._neverPlayed) {
	          _this.props.pause();
	        }
	      _this.setState({ dragCurrentTime: null });
	    };

	    _this._handleChange = function (_ref2) {
	      var value = _ref2.target.value;

	      _this.props.seekTo(+value);
	      _this.setState({ dragCurrentTime: +value });
	      _this._onChangeUsed = true;
	    };

	    _this.state = { dragCurrentTime: null };
	    return _this;
	  }

	  _createClass(SeekBar, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(_ref3, _ref4) {
	      var currentTime = _ref3.currentTime,
	          duration = _ref3.duration;
	      var dragCurrentTime = _ref4.dragCurrentTime;

	      return this.state.dragCurrentTime !== dragCurrentTime || this.props.currentTime !== currentTime || this.props.duration !== duration;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          duration = _props.duration,
	          currentTime = _props.currentTime;
	      var dragCurrentTime = this.state.dragCurrentTime;


	      var displayCurrentTime = dragCurrentTime || currentTime;

	      return _react2.default.createElement("input", {
	        type: "range",
	        step: "any",
	        max: (duration || 0).toFixed(4),
	        value: displayCurrentTime,
	        onMouseDown: this._handleMouseDown,
	        onMouseUp: this._handleMouseUp,
	        onChange: this._handleChange,
	        className: className,
	        style: _extends({
	          backgroundSize: (duration ? displayCurrentTime * 100 / duration : 0) + '% 100%'
	        }, style)
	      });
	    }
	  }]);

	  return SeekBar;
	}(_react.Component);

	exports.default = SeekBar;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formatTime = __webpack_require__(28);

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
	      var duration = _ref.duration;

	      return this.props.duration !== duration;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          duration = _props.duration;

	      return _react2.default.createElement(
	        'time',
	        { className: className, style: style },
	        duration ? (0, _formatTime2.default)(duration) : "0:00"
	      );
	    }
	  }]);

	  return Duration;
	}(_react.Component);

	exports.default = Duration;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MuteUnmute = function (_Component) {
	  _inherits(MuteUnmute, _Component);

	  function MuteUnmute() {
	    _classCallCheck(this, MuteUnmute);

	    return _possibleConstructorReturn(this, (MuteUnmute.__proto__ || Object.getPrototypeOf(MuteUnmute)).apply(this, arguments));
	  }

	  _createClass(MuteUnmute, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var isMuted = _ref.isMuted;

	      return this.props.isMuted !== isMuted;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          isMuted = _props.isMuted,
	          toggleMute = _props.toggleMute;


	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: className,
	          style: style,
	          onClick: toggleMute
	        },
	        isMuted ? 'Unmute' : 'Mute'
	      );
	    }
	  }]);

	  return MuteUnmute;
	}(_react.Component);

	exports.default = MuteUnmute;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Volume.__proto__ || Object.getPrototypeOf(Volume)).call.apply(_ref, [this].concat(args))), _this), _this._onChangeUsed = false, _this._setVolume = function (value) {
	      return _this.props.setVolume(parseFloat((+value).toFixed(4)));
	    }, _this._handleMouseUp = function (_ref2) {
	      var value = _ref2.target.value;

	      // set volume on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this._setVolume(value);
	      }
	    }, _this._handleChange = function (_ref3) {
	      var value = _ref3.target.value;

	      _this._setVolume(value);
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Volume, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(_ref4) {
	      var volume = _ref4.volume;

	      return this.props.volume !== volume;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          volume = _props.volume;

	      return _react2.default.createElement("input", {
	        type: "range",
	        step: "any",
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

	exports.default = Volume;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fullscreen = function (_Component) {
	  _inherits(Fullscreen, _Component);

	  function Fullscreen() {
	    _classCallCheck(this, Fullscreen);

	    return _possibleConstructorReturn(this, (Fullscreen.__proto__ || Object.getPrototypeOf(Fullscreen)).apply(this, arguments));
	  }

	  _createClass(Fullscreen, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var isFullscreen = _ref.isFullscreen;

	      return this.props.isFullscreen !== isFullscreen;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          isFullscreen = _props.isFullscreen,
	          fullscreen = _props.fullscreen;


	      return _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: className,
	          style: style,
	          onClick: fullscreen
	        },
	        isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
	      );
	    }
	  }]);

	  return Fullscreen;
	}(_react.Component);

	exports.default = Fullscreen;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mediaHelper = exports.formatTime = exports.keyboardControls = undefined;

	var _keyboardControls2 = __webpack_require__(24);

	var _keyboardControls3 = _interopRequireDefault(_keyboardControls2);

	var _formatTime2 = __webpack_require__(28);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	var _mediaHelper2 = __webpack_require__(3);

	var _mediaHelper3 = _interopRequireDefault(_mediaHelper2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.keyboardControls = _keyboardControls3.default;
	exports.formatTime = _formatTime3.default;
	exports.mediaHelper = _mediaHelper3.default;

/***/ }
/******/ ])
});
;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

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
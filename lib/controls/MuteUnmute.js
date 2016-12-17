'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

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
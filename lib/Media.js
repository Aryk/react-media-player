'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mediaHelper = require('./utils/media-helper');

var _mediaHelper2 = _interopRequireDefault(_mediaHelper);

var _Player = require('./Player');

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
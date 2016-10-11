'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getAnglePoint = require('../utils/getAnglePoint');

var _getAnglePoint2 = _interopRequireDefault(_getAnglePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliceLabel = (_temp = _class = function (_Component) {
  _inherits(SliceLabel, _Component);

  function SliceLabel() {
    _classCallCheck(this, SliceLabel);

    return _possibleConstructorReturn(this, (SliceLabel.__proto__ || Object.getPrototypeOf(SliceLabel)).apply(this, arguments));
  }

  _createClass(SliceLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var fill = _props.fill;
      var stroke = _props.stroke;
      var strokeWidth = _props.strokeWidth;
      var angleRange = _props.angleRange;
      var sliceRadiusRange = _props.sliceRadiusRange;
      var label = _props.label;

      var showLabel = angleRange.end - angleRange.start > 15;
      if (!showLabel) {
        return null;
      }
      var labelPos = (0, _getAnglePoint2.default)((angleRange.start + angleRange.end) / 2, 0, (sliceRadiusRange.end + sliceRadiusRange.start) / 1.8, 0, 0);
      var width = 48 + 10 * label.length;
      return _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('rect', { filter: 'url(#dropshadow)', stroke: stroke, style: { strokeWidth: strokeWidth }, fill: fill, x: labelPos.x1 - width / 2, y: labelPos.y1 - 24, width: width, height: 48, rx: 24, ry: 24 }),
        _react2.default.createElement(
          'text',
          { style: { textAnchor: 'middle', alignmentBaseline: 'middle', fontSize: 24 }, fill: 'white', x: labelPos.x1, y: labelPos.y1 },
          label
        )
      );
    }
  }]);

  return SliceLabel;
}(_react.Component), _class.propTypes = {
  angleRange: _react.PropTypes.shape({
    start: _react.PropTypes.number.isRequired,
    end: _react.PropTypes.number.isRequired
  }),
  sliceRadiusRange: _react.PropTypes.shape({
    start: _react.PropTypes.number.isRequired,
    end: _react.PropTypes.number.isRequired
  }),
  stroke: _react.PropTypes.string,
  strokeWidth: _react.PropTypes.number,
  fill: _react.PropTypes.string,
  label: _react.PropTypes.string
}, _class.defaultProps = {
  strokeWidth: 3
}, _temp);
exports.default = SliceLabel;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _function = require('react-pure-render/function');

var _function2 = _interopRequireDefault(_function);

var _Slice = require('./Slice');

var _Slice2 = _interopRequireDefault(_Slice);

var _SliceLabel = require('./SliceLabel');

var _SliceLabel2 = _interopRequireDefault(_SliceLabel);

var _getDefaultColor = require('../utils/getDefaultColor');

var _getDefaultColor2 = _interopRequireDefault(_getDefaultColor);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ring = (_dec = (0, _reactJss2.default)({
  sliceActive: {
    cursor: 'pointer'
  }
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Ring, _Component);

  function Ring() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ring);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ring.__proto__ || Object.getPrototypeOf(Ring)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _function2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ring, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var slices = _props.slices;
      var level = _props.level;
      var sliceRadiusRange = _props.sliceRadiusRange;
      var center = _props.center;
      var stroke = _props.stroke;
      var strokeWidth = _props.strokeWidth;
      var onClick = _props.onClick;
      var getTitle = _props.getTitle;
      var getLabel = _props.getLabel;
      var className = _props.className;
      var getSliceProps = _props.getSliceProps;
      var classes = _props.sheet.classes;

      var rectSize = sliceRadiusRange.end + 20;
      var hasChildren = function hasChildren(s) {
        return s.node.children && s.node.children.length > 0;
      };
      var slicesProps = slices.map(function (slice, idx) {
        var _classNames;

        return getSliceProps(slice, idx, {
          key: idx,
          node: slice.node,
          angleRange: { start: slice.start, end: slice.end },
          percentValue: slice.percentValue.toFixed(1),
          fill: (0, _getDefaultColor2.default)(level, idx),
          className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.sliceActive, hasChildren(slice)), _defineProperty(_classNames, classes.slice, true), _classNames)),
          stroke: stroke, strokeWidth: strokeWidth, sliceRadiusRange: sliceRadiusRange, onClick: onClick, level: level,
          title: getTitle(slice, slice.node.title),
          label: getLabel(slice, slice.node.label)
        });
      });

      return _react2.default.createElement(
        'g',
        { className: className },
        slicesProps.map(function (sliceProps) {
          return _react2.default.createElement(_Slice2.default, sliceProps);
        }),
        slicesProps.map(function (sliceProps) {
          return _react2.default.createElement(_SliceLabel2.default, sliceProps);
        })
      );
    }
  }]);

  return Ring;
}(_react.Component), _class2.propTypes = {
  stroke: _Slice2.default.propTypes.stroke,
  strokeWidth: _Slice2.default.propTypes.strokeWidth,
  sliceRadiusRange: _Slice2.default.propTypes.sliceRadiusRange,
  onClick: _Slice2.default.propTypes.onClick,
  getTitle: _react.PropTypes.func,
  getLabel: _react.PropTypes.func,

  level: _react.PropTypes.number.isRequired,
  center: _react.PropTypes.number.isRequired,
  className: _react.PropTypes.string.isRequired,
  getSliceProps: _react.PropTypes.func.isRequired,
  slices: _react.PropTypes.array.isRequired
}, _temp2)) || _class);
exports.default = Ring;
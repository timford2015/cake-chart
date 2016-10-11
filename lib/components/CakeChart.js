'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // http://codepen.io/maydie/details/OVmxZZ

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _treeUtils = require('../utils/treeUtils.js');

var _treeUtils2 = _interopRequireDefault(_treeUtils);

var _getTextCoordinates = require('../utils/getTextCoordinates');

var _getTextCoordinates2 = _interopRequireDefault(_getTextCoordinates);

var _createSliceTree = require('../utils/createSliceTree');

var _createSliceTree2 = _interopRequireDefault(_createSliceTree);

var _Ring = require('./Ring');

var _Ring2 = _interopRequireDefault(_Ring);

var _jss = require('jss');

var _jss2 = _interopRequireDefault(_jss);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var _ReactCSSTransitionGroup2 = _interopRequireDefault(_ReactCSSTransitionGroup);

var _getSliceRadiusRange = require('../utils/getSliceRadiusRange');

var _getSliceRadiusRange2 = _interopRequireDefault(_getSliceRadiusRange);

var _getDefaultColor = require('../utils/getDefaultColor');

var _getDefaultColor2 = _interopRequireDefault(_getDefaultColor);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultSheets = require('../utils/defaultSheets');

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_jss2.default.use(_jssVendorPrefixer2.default);

var ringSheet = null;
var ringTransitionSheet = null;

function detachRingSheets() {
  if (ringSheet) {
    ringSheet.detach();
  }

  if (ringTransitionSheet) {
    ringTransitionSheet.detach();
  }
}

function attachRingSheets(props) {
  detachRingSheets();
  var classes = props.sheet.classes;
  var _props$transitionName = props.transitionName;
  var transitionName = _props$transitionName === undefined ? classes.pieChart : _props$transitionName;
  var _props$labelTransitio = props.labelTransitionName;
  var labelTransitionName = _props$labelTransitio === undefined ? classes.labelsBox : _props$labelTransitio;
  var _props$className = props.className;
  var className = _props$className === undefined ? classes.wrapper : _props$className;

  var _createDefaultSheets = (0, _defaultSheets.createDefaultSheets)(_extends({}, props, {
    transitionName: transitionName, labelTransitionName: labelTransitionName, className: className
  }));

  var _createDefaultSheets2 = _slicedToArray(_createDefaultSheets, 2);

  ringSheet = _createDefaultSheets2[0];
  ringTransitionSheet = _createDefaultSheets2[1];


  ringSheet.attach();
  ringTransitionSheet.attach();
}

function getDefaultLabel(slice) {
  return slice.end - slice.start > 15 && (slice.node.label || slice.node.value);
}

function getDefaultLabelProps(slice, idx, center, props, classes) {
  var _classNames;

  var coreRadius = props.coreRadius;
  var ringWidth = props.ringWidth;
  var ringWidthFactor = props.ringWidthFactor;

  var pos = (0, _getTextCoordinates2.default)(slice, coreRadius, ringWidth, center, ringWidthFactor);
  var hasChildren = slice.node.children && slice.node.children.length;
  var className = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.label, true), _defineProperty(_classNames, classes.labelActive, hasChildren), _classNames));
  var label = getDefaultLabel(slice);

  return {
    className: className,
    style: {
      left: pos.x + '%',
      top: pos.y + '%',
      background: (0, _getDefaultColor2.default)(slice.level, idx),
      display: label ? 'block' : 'none'
    },
    key: slice.level + '-' + idx,
    onClick: props.onClick.bind(null, slice.node)
  };
}

function getDefaultKey(node) {
  return node.key || node.label + '-' + node.value;
}

var CakeChart = (_dec = (0, _reactJss2.default)(_defaultSheets.sheet, { link: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(CakeChart, _Component);

  function CakeChart(props) {
    _classCallCheck(this, CakeChart);

    var _this = _possibleConstructorReturn(this, (CakeChart.__proto__ || Object.getPrototypeOf(CakeChart)).call(this, props));

    _initialiseProps.call(_this);

    _this.initProps(props);
    return _this;
  }

  _createClass(CakeChart, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.initProps(props);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      attachRingSheets(this.props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.debouncedWindowResize);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.limit !== this.props.limit) {
        attachRingSheets(nextProps);
      }
    }
  }, {
    key: 'componentWillUnount',
    value: function componentWillUnount() {
      detachRingSheets();
      window.removeEventListener('resize', this.debouncedWindowResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.sheet.classes;
      var _props = this.props;
      var coreRadius = _props.coreRadius;
      var ringWidth = _props.ringWidth;
      var onClick = _props.onClick;
      var getRingProps = _props.getRingProps;
      var getSliceProps = _props.getSliceProps;
      var style = _props.style;
      var data = _props.data;
      var getKey = _props.getKey;
      var stroke = _props.stroke;
      var strokeWidth = _props.strokeWidth;
      var limit = _props.limit;
      var ringWidthFactor = _props.ringWidthFactor;
      var getTitle = _props.getTitle;
      var getLabel = _props.getLabel;
      var _props$transitionName2 = _props.transitionName;
      var transitionName = _props$transitionName2 === undefined ? classes.pieChart : _props$transitionName2;
      var _props$labelTransitio2 = _props.labelTransitionName;
      var labelTransitionName = _props$labelTransitio2 === undefined ? classes.labelsBox : _props$labelTransitio2;
      var _props$className2 = _props.className;
      var className = _props$className2 === undefined ? classes.wrapper : _props$className2;

      var center = (0, _getSliceRadiusRange2.default)(coreRadius, ringWidth, limit, ringWidthFactor).end;
      var diameter = center * 2;
      var sliceTree = (0, _createSliceTree2.default)(data, limit);
      var centerRule = _jss2.default.createRule({
        transform: 'translate(' + center + 'px, ' + center + 'px)'
      });
      var key = getKey(data, getDefaultKey(data));

      return _react2.default.createElement(
        'div',
        { className: className,
          style: style,
          ref: 'container' },
        _react2.default.createElement(
          'svg',
          { width: '100%',
            height: '100%',
            viewBox: '0 0 ' + diameter + ' ' + diameter,
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1',
            className: classes.svg },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'filter',
              { id: 'dropshadow', height: '130%' },
              _react2.default.createElement('feGaussianBlur', { 'in': 'SourceAlpha', stdDeviation: '3' }),
              _react2.default.createElement('feOffset', { dx: '2', dy: '2', result: 'offsetblur' }),
              _react2.default.createElement(
                'feComponentTransfer',
                null,
                _react2.default.createElement('feFuncA', { type: 'linear', slope: '0.4' })
              ),
              _react2.default.createElement(
                'feMerge',
                null,
                _react2.default.createElement('feMergeNode', null),
                _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
              )
            )
          ),
          _react2.default.createElement(
            'g',
            { style: centerRule.style },
            _react2.default.createElement(
              _ReactCSSTransitionGroup2.default,
              { component: 'g',
                transitionName: transitionName,
                transitionEnterTimeout: 500,
                transitionLeaveTimeout: 300,
                transitionAppear: true },
              sliceTree.map(function (block, idx) {
                return _react2.default.createElement(_Ring2.default, getRingProps(block, {
                  key: idx + '-' + key,
                  className: ringSheet.classes['ring-' + block.level],
                  slices: block.slices,
                  level: block.level,
                  sliceRadiusRange: (0, _getSliceRadiusRange2.default)(coreRadius, ringWidth, block.level, ringWidthFactor),
                  center: center, getSliceProps: getSliceProps,
                  stroke: stroke, strokeWidth: strokeWidth, onClick: onClick, getTitle: getTitle, getLabel: getLabel
                }));
              })
            )
          )
        )
      );
    }
  }, {
    key: 'renderTexts',
    value: function renderTexts(block, center, key) {
      var _this2 = this;

      var _props2 = this.props;
      var getLabelProps = _props2.getLabelProps;
      var getLabel = _props2.getLabel;
      var classes = _props2.sheet.classes;


      var texts = block.slices.map(function (slice) {
        return _react2.default.createElement(
          'div',
          getLabelProps(slice, block.slices.indexOf(slice), getDefaultLabelProps(slice, block.slices.indexOf(slice), center, _this2.props, classes)),
          getLabel(slice, getDefaultLabel(slice))
        );
      });
      return _react2.default.createElement(
        'div',
        { key: key,
          className: ringSheet.classes['labels-' + block.level] },
        texts
      );
    }
  }]);

  return CakeChart;
}(_react.Component), _class2.propTypes = {
  stroke: _react.PropTypes.string,
  strokeWidth: _react.PropTypes.number,
  onClick: _react.PropTypes.func,

  data: _react.PropTypes.shape({
    value: _react.PropTypes.number.isRequired,
    label: _react.PropTypes.any,
    color: _react.PropTypes.string,
    children: _react.PropTypes.array
  }).isRequired,

  coreRadius: _react.PropTypes.number,
  ringWidth: _react.PropTypes.number,
  ringWidthFactor: _react.PropTypes.number,
  limit: _react.PropTypes.number,
  transitionName: _react.PropTypes.string,
  labelTransitionName: _react.PropTypes.string,
  className: _react.PropTypes.string,
  getLabelComponent: _react.PropTypes.func
}, _class2.defaultProps = {
  limit: 5,
  strokeWidth: 3,
  stroke: '#FFFFFF',
  ringWidthFactor: 0.7,
  getRingProps: function getRingProps(block, props) {
    return props;
  },
  getSliceProps: function getSliceProps(slice, idx, props) {
    return props;
  },
  getLabelProps: function getLabelProps(slice, idx, props) {
    return props;
  },
  getLabel: function getLabel(slice, label) {
    return label;
  },
  getTitle: function getTitle(slice, title) {
    return title;
  },
  getKey: function getKey(node, key) {
    return key;
  }
}, _initialiseProps = function _initialiseProps() {
  this.initProps = function (props) {
    Array.from((0, _treeUtils2.default)(props.data, function (x) {
      return x.children;
    })).forEach(function (node) {
      return node.title = node.title === undefined ? node.label : node.title;
    });
  };
}, _temp)) || _class);
exports.default = CakeChart;
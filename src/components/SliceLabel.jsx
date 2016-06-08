import React, { Component, PropTypes } from 'react';
import getAnglePoint from '../utils/getAnglePoint';

export default class SliceLabel extends Component {
  static propTypes = {
    angleRange: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired
    }),
    sliceRadiusRange: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired
    }),
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    fill: PropTypes.string,
    label: PropTypes.string
  }

  static defaultProps = {
    strokeWidth: 3
  }

  render () {
    const { fill, stroke, strokeWidth, angleRange, sliceRadiusRange, label } = this.props;
    const showLabel = angleRange.end - angleRange.start > 15;
    if (!showLabel) {
        return undefined;
    }
    const labelPos = getAnglePoint((angleRange.start + angleRange.end) / 2, 0, (sliceRadiusRange.end + sliceRadiusRange.start) / 1.8, 0, 0);
    const width = 48 + 10 * label.length;
    return (
      <g>
        <rect filter='url(#dropshadow)' stroke={stroke} style={{strokeWidth: strokeWidth}} fill={fill} x={labelPos.x1 - width / 2} y={labelPos.y1 - 24} width={width} height={48} rx={24} ry={24}/>
        <text style={{textAnchor: 'middle', alignmentBaseline: 'middle', fontSize: 24}} fill='white' x={labelPos.x1} y={labelPos.y1}>{label}</text>
      </g>
    );
  }
}

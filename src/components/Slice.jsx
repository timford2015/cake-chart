// http://codepen.io/maydie/details/OVmxZZ

import React, { Component, PropTypes } from 'react';
import getAnglePoint from '../utils/getAnglePoint';

export default class Slice extends Component {
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
    fill: PropTypes.string,
    strokeWidth: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func,
    node: PropTypes.any,
    title: PropTypes.string,
    label: PropTypes.string
  }

  static defaultProps = {
    strokeWidth: 3
  }

  drawPath () {
    const { angleRange, sliceRadiusRange } = this.props;

    const angle = angleRange.end - angleRange.start;
    const startRadius = sliceRadiusRange.start;
    const endRadius = sliceRadiusRange.end;

    // Get angle points
    const a = getAnglePoint(angleRange.start, angleRange.end, endRadius, 0, 0);
    const b = getAnglePoint(angleRange.start, angleRange.end, startRadius, 0, 0);

    return [
      `M${a.x1},${a.y1}`,
      `A${endRadius},${endRadius} 0 ${(angle > 180 ? 1 : 0)},1 ${a.x2},${a.y2}`,
      (angle < 360) ? `L${b.x2},${b.y2}` : `M${b.x2},${b.y2}`,
      (startRadius > 0) ?
        `A${startRadius},${startRadius} 0 ${(angle > 180 ? 1 : 0)},0 ${b.x1},${b.y1}` :
        '',
      'Z'
    ].join(' ');
  }

  render () {
    const { fill, stroke, strokeWidth, className, angleRange, sliceRadiusRange } = this.props;
    const labelPos = getAnglePoint((angleRange.start + angleRange.end) / 2, 0, (sliceRadiusRange.end + sliceRadiusRange.start) / 2, 0, 0);
    const showLabel = angleRange.end - angleRange.start > 15;
    const label = [];
    if (showLabel) {
      label.push(<rect stroke={stroke} style={{strokeWidth: 4}} fill={fill} x={labelPos.x1 - 50} y={labelPos.y1 - 20} width={100} height={40} rx={20} ry={20}/>);
      label.push(<text style={{textAnchor: 'middle', alignmentBaseline: 'middle', fontSize: 20}} fill='white' x={labelPos.x1} y={labelPos.y1}>{this.props.label}</text>);
    }
    return (
      <g>
        <path d={this.drawPath()}
              onClick={this.handleClick}
              {...{ fill, stroke, strokeWidth, className }}>
          <title>{this.props.title}</title>
        </path>
        {label}
      </g>
    );
  }

  handleClick = () => {
    this.props.onClick && this.props.onClick(this.props.node);
  }
}
